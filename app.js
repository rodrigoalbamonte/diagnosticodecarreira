/**
 * Lógica de interface da plataforma de Assessment de Carreira ICOM TV.
 * Depende de: js/shared-data.js, data/setores.js, data/*.js (setores), js/scoring.js.
 */

const STORAGE_KEY = "icomtv_assessment_v2";

let state = {
  userInfo: { nome: "", email: "" },
  setorId: null,
  respostas: {},
  currentIndex: 0,
};

let modoSelecaoSetor = "avaliacao"; // "avaliacao" | "biblioteca"
let radarChartInstance = null;
let ultimoResultado = null;
let avancarAutomaticoTimeout = null;

// ---------------------------------------------------------------------
// Persistência (salvar / continuar depois)
// ---------------------------------------------------------------------

function salvarEstado() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

function carregarEstadoSalvo() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function limparEstadoSalvo() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {}
}

// ---------------------------------------------------------------------
// Navegação
// ---------------------------------------------------------------------

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".menu-item").forEach((el) => el.classList.remove("active"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setMenuActive(nav) {
  document.querySelectorAll(".menu-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.nav === nav);
  });
}

function handleNav(target) {
  clearTimeout(avancarAutomaticoTimeout);
  if (target === "home") {
    initResumeBanner();
    showScreen("screen-home");
    setMenuActive("home");
  } else if (target === "avaliacao") {
    document.getElementById("input-nome").value = state.userInfo.nome || "";
    document.getElementById("input-email").value = state.userInfo.email || "";
    showScreen("screen-userinfo");
    setMenuActive("avaliacao");
  } else if (target === "biblioteca") {
    modoSelecaoSetor = "biblioteca";
    renderSetorCards();
    showScreen("screen-setor-select");
    setMenuActive("biblioteca");
  }
}

document.querySelectorAll("[data-nav]").forEach((btn) => {
  btn.addEventListener("click", () => handleNav(btn.dataset.nav));
});

// ---------------------------------------------------------------------
// Home — banner de retomada
// ---------------------------------------------------------------------

function initResumeBanner() {
  const saved = carregarEstadoSalvo();
  const banner = document.getElementById("resume-banner");
  if (saved && saved.setorId && saved.respostas && Object.keys(saved.respostas).length > 0) {
    const setor = getSetorDados(saved.setorId);
    const total = setor ? setor.questions.length : 0;
    const nome = saved.userInfo && saved.userInfo.nome ? saved.userInfo.nome : "sua avaliação";
    const respondidas = Object.keys(saved.respostas).length;
    document.getElementById("resume-banner-text").textContent =
      `${nome} — ${setor ? setor.nome : ""} — ${respondidas} de ${total} perguntas respondidas.`;
    banner.classList.remove("hidden");
  } else {
    banner.classList.add("hidden");
  }
}

document.getElementById("btn-resume").addEventListener("click", () => {
  const saved = carregarEstadoSalvo();
  if (!saved || !saved.setorId) return;
  state = saved;
  showScreen("screen-assessment");
  renderQuestion(state.currentIndex);
});

document.getElementById("btn-discard").addEventListener("click", () => {
  limparEstadoSalvo();
  document.getElementById("resume-banner").classList.add("hidden");
});

// ---------------------------------------------------------------------
// Formulário de identificação
// ---------------------------------------------------------------------

document.getElementById("form-userinfo").addEventListener("submit", (e) => {
  e.preventDefault();
  const nomeInput = document.getElementById("input-nome");
  const nome = nomeInput.value.trim();
  const errorEl = document.getElementById("error-nome");

  if (!nome) {
    nomeInput.classList.add("invalid");
    errorEl.textContent = "Por favor, informe seu nome completo.";
    nomeInput.focus();
    return;
  }
  nomeInput.classList.remove("invalid");
  errorEl.textContent = "";

  state.userInfo = {
    nome,
    email: document.getElementById("input-email").value.trim(),
  };

  modoSelecaoSetor = "avaliacao";
  renderSetorCards();
  showScreen("screen-setor-select");
});

// ---------------------------------------------------------------------
// Seleção de setor (usada tanto para avaliação quanto para biblioteca)
// ---------------------------------------------------------------------

function renderSetorCards() {
  const isAvaliacao = modoSelecaoSetor === "avaliacao";
  document.getElementById("setor-select-eyebrow").textContent = isAvaliacao ? "Fazer Avaliação" : "Planos de Carreira";
  document.getElementById("setor-select-title").textContent = isAvaliacao
    ? "Em qual setor você atua?"
    : "Escolha um setor para consultar o plano de carreira";
  document.getElementById("setor-select-subtitle").textContent = isAvaliacao
    ? "A avaliação e os resultados serão específicos para esse setor."
    : "Veja cargos, competências e a trilha de evolução — sem precisar fazer a avaliação.";

  const grid = document.getElementById("setor-cards-grid");
  grid.innerHTML = "";
  SETORES_REGISTRY.forEach((setor) => {
    const card = document.createElement("div");
    card.className = "setor-card" + (setor.disponivel ? "" : " indisponivel");
    card.innerHTML = `
      <span class="setor-card-icone">${setor.icone}</span>
      <h3>${setor.nome}</h3>
      <p>${setor.descricaoCurta}</p>
      <button class="btn ${setor.disponivel ? "btn-primary" : "btn-ghost"} btn-sm" ${setor.disponivel ? "" : "disabled"}>
        ${setor.disponivel ? "Selecionar" : "Em breve"}
      </button>
    `;
    if (setor.disponivel) {
      card.querySelector("button").addEventListener("click", () => handleSetorSelecionado(setor.id));
    }
    grid.appendChild(card);
  });
}

function handleSetorSelecionado(setorId) {
  if (modoSelecaoSetor === "avaliacao") {
    state.setorId = setorId;
    state.respostas = {};
    state.currentIndex = 0;
    salvarEstado();
    showScreen("screen-assessment");
    renderQuestion(0);
  } else {
    renderBibliotecaSetor(setorId);
    showScreen("screen-biblioteca-setor");
  }
}

// ---------------------------------------------------------------------
// Avaliação (perguntas Likert)
// ---------------------------------------------------------------------

function renderQuestion(index) {
  clearTimeout(avancarAutomaticoTimeout);
  state.currentIndex = index;

  const setor = getSetorDados(state.setorId);
  const total = setor.questions.length;
  const pergunta = setor.questions[index];
  const respondidas = Object.keys(state.respostas).length;

  document.getElementById("progress-label").textContent = `Pergunta ${index + 1} de ${total}`;
  document.getElementById("progress-percent").textContent = `${Math.round((respondidas / total) * 100)}%`;
  document.getElementById("progress-bar-fill").style.width = `${(index / total) * 100}%`;

  document.getElementById("question-text").textContent = pergunta.texto;

  const optionsWrap = document.getElementById("likert-options");
  optionsWrap.innerHTML = "";
  const valorAtual = state.respostas[pergunta.id];

  ESCALA.forEach((opcao) => {
    const div = document.createElement("div");
    div.className = "likert-option" + (valorAtual === opcao.valor ? " selected" : "");
    div.setAttribute("role", "radio");
    div.setAttribute("aria-checked", valorAtual === opcao.valor ? "true" : "false");
    div.tabIndex = 0;
    div.innerHTML = `<span class="likert-dot"></span><span class="likert-label">${opcao.label}</span>`;
    div.addEventListener("click", () => selecionarResposta(pergunta.id, opcao.valor));
    div.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selecionarResposta(pergunta.id, opcao.valor);
      }
    });
    optionsWrap.appendChild(div);
  });

  document.getElementById("btn-prev").disabled = index === 0;
  const btnNext = document.getElementById("btn-next");
  btnNext.disabled = valorAtual === undefined;
  btnNext.textContent = index === total - 1 ? "Ver Resultado →" : "Próxima →";

  document.getElementById("save-confirm").classList.add("hidden");
}

function selecionarResposta(perguntaId, valor) {
  state.respostas[perguntaId] = valor;
  salvarEstado();

  document.querySelectorAll(".likert-option").forEach((el, i) => {
    const selected = ESCALA[i].valor === valor;
    el.classList.toggle("selected", selected);
    el.setAttribute("aria-checked", selected ? "true" : "false");
  });
  document.getElementById("btn-next").disabled = false;

  const setor = getSetorDados(state.setorId);
  const total = setor.questions.length;
  const respondidas = Object.keys(state.respostas).length;
  document.getElementById("progress-percent").textContent = `${Math.round((respondidas / total) * 100)}%`;

  clearTimeout(avancarAutomaticoTimeout);
  if (state.currentIndex < total - 1) {
    avancarAutomaticoTimeout = setTimeout(() => {
      renderQuestion(state.currentIndex + 1);
    }, 380);
  }
}

document.getElementById("btn-next").addEventListener("click", () => {
  clearTimeout(avancarAutomaticoTimeout);
  const setor = getSetorDados(state.setorId);
  if (state.currentIndex < setor.questions.length - 1) {
    renderQuestion(state.currentIndex + 1);
  } else {
    finalizarAvaliacao();
  }
});

document.getElementById("btn-prev").addEventListener("click", () => {
  clearTimeout(avancarAutomaticoTimeout);
  if (state.currentIndex > 0) {
    renderQuestion(state.currentIndex - 1);
  }
});

document.getElementById("btn-save-exit").addEventListener("click", () => {
  salvarEstado();
  const msg = document.getElementById("save-confirm");
  msg.classList.remove("hidden");
  setTimeout(() => msg.classList.add("hidden"), 3500);
});

// ---------------------------------------------------------------------
// Resultado
// ---------------------------------------------------------------------

function finalizarAvaliacao() {
  salvarEstado();
  const setor = getSetorDados(state.setorId);
  const resultado = calcularResultado(setor, state.userInfo.nome, state.respostas);
  showScreen("screen-results");
  renderResultado(resultado);
}

function chip(label, statusClass) {
  return `<span class="chip ${statusClass}">${label}</span>`;
}

function renderResultado(resultado) {
  ultimoResultado = resultado;

  document.getElementById("result-setor-nome").textContent = resultado.setorNome;
  document.getElementById("result-nome").textContent = resultado.nome;
  document.getElementById("result-cargo-nome").textContent = resultado.cargoPrincipal.nome;
  document.getElementById("result-cargo-percent").textContent = `${resultado.cargoPrincipal.percentual}%`;

  const statusEl = document.getElementById("result-status");
  if (!resultado.cargoProximo) {
    statusEl.textContent = "Seu perfil está consolidado no maior nível do plano de carreira avaliado.";
    statusEl.className = "result-status consolidado";
  } else if (resultado.statusTransicao === "transicao") {
    statusEl.textContent = `Você está em fase de transição para o próximo nível (${resultado.cargoProximo.nome}).`;
    statusEl.className = "result-status transicao";
  } else {
    statusEl.textContent = "Seu perfil está consolidado neste nível.";
    statusEl.className = "result-status consolidado";
  }

  // Radar
  const radarLabels = Object.keys(CATEGORIAS).map((k) => CATEGORIAS[k].label);
  const radarValues = Object.keys(CATEGORIAS).map((k) => resultado.radar[k]);
  const ctx = document.getElementById("radar-chart").getContext("2d");
  if (radarChartInstance) radarChartInstance.destroy();
  radarChartInstance = new Chart(ctx, {
    type: "radar",
    data: {
      labels: radarLabels,
      datasets: [{
        label: resultado.nome,
        data: radarValues,
        backgroundColor: "rgba(47, 111, 237, 0.18)",
        borderColor: "#2f6fed",
        borderWidth: 2,
        pointBackgroundColor: "#0a1f3d",
        pointRadius: 3,
      }],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: { stepSize: 20, backdropColor: "transparent", color: "#7c8698" },
          grid: { color: "#e2e6ee" },
          angleLines: { color: "#e2e6ee" },
          pointLabels: { color: "#101828", font: { size: 12, weight: "600" } },
        },
      },
      plugins: { legend: { display: false } },
    },
  });

  // Ranking
  const rankingEl = document.getElementById("ranking-list");
  rankingEl.innerHTML = "";
  resultado.ranking.forEach((cargo) => {
    const isMain = cargo.id === resultado.cargoPrincipal.id;
    const item = document.createElement("div");
    item.className = "ranking-item" + (isMain ? " is-main" : "");
    item.innerHTML = `
      <span class="ranking-name">${cargo.nome}</span>
      <span class="ranking-track"><span class="ranking-fill" style="width:${cargo.percentual}%"></span></span>
      <span class="ranking-value">${cargo.percentual}%</span>
    `;
    rankingEl.appendChild(item);
  });

  // Resumo + ações
  document.getElementById("resumo-texto").textContent = resultado.resumo.texto;
  const acoesEl = document.getElementById("resumo-acoes");
  acoesEl.innerHTML = "";
  resultado.resumo.acoes.forEach((acao) => {
    const li = document.createElement("li");
    li.textContent = acao;
    acoesEl.appendChild(li);
  });

  // Próximos passos — competências por status
  const necessarias = resultado.competencias.filter((c) => c.status === "necessaria");
  const desenvolvimento = resultado.competencias.filter((c) => c.status === "desenvolvimento");
  const consolidadas = resultado.competencias.filter((c) => c.status === "consolidada");

  document.getElementById("pp-necessarias").innerHTML =
    necessarias.length ? necessarias.map((c) => chip(`${c.label} (${c.valor}%)`, "chip-necessaria")).join("") : `<span class="muted">Nenhuma competência crítica identificada.</span>`;
  document.getElementById("pp-desenvolvimento").innerHTML =
    desenvolvimento.length ? desenvolvimento.map((c) => chip(`${c.label} (${c.valor}%)`, "chip-desenvolvimento")).join("") : `<span class="muted">—</span>`;
  document.getElementById("pp-consolidadas").innerHTML =
    consolidadas.length ? consolidadas.map((c) => chip(`${c.label} (${c.valor}%)`, "chip-consolidada")).join("") : `<span class="muted">—</span>`;

  // Experiências recomendadas — derivadas das responsabilidades do próximo cargo
  const expEl = document.getElementById("pp-experiencias");
  expEl.innerHTML = "";
  if (resultado.cargoProximo) {
    const cargoProximoCompleto = getSetorDados(resultado.setorId).cargos.find((c) => c.id === resultado.cargoProximo.id);
    cargoProximoCompleto.responsabilidades.slice(0, 3).forEach((r) => {
      const li = document.createElement("li");
      li.textContent = `Buscar oportunidades de: ${r}`;
      expEl.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "Você já está no maior nível deste plano de carreira — foque em ampliar o impacto das suas responsabilidades atuais.";
    expEl.appendChild(li);
  }

  document.getElementById("btn-ver-plano").onclick = () => {
    modoSelecaoSetor = "biblioteca";
    renderBibliotecaSetor(resultado.setorId);
    showScreen("screen-biblioteca-setor");
  };
}

document.getElementById("btn-restart").addEventListener("click", () => {
  if (!confirm("Isso vai apagar suas respostas atuais e reiniciar a avaliação. Deseja continuar?")) return;
  limparEstadoSalvo();
  state = { userInfo: { nome: "", email: "" }, setorId: null, respostas: {}, currentIndex: 0 };
  document.getElementById("form-userinfo").reset();
  handleNav("home");
});

document.getElementById("btn-download-pdf").addEventListener("click", () => {
  const btn = document.getElementById("btn-download-pdf");
  const textoOriginal = btn.textContent;
  btn.textContent = "Gerando PDF...";
  btn.disabled = true;
  try {
    baixarResultadoPDF();
  } catch (err) {
    alert("Não foi possível gerar o PDF. Tente novamente.");
  } finally {
    btn.textContent = textoOriginal;
    btn.disabled = false;
  }
});

/**
 * Gera o PDF desenhando diretamente com jsPDF (texto + barras + imagem do radar).
 * Evita capturar a página inteira em canvas (mais rápido e sem depender de libs extras).
 */
function baixarResultadoPDF() {
  const r = ultimoResultado;
  if (!r) return;

  const NAVY = [10, 31, 61];
  const BLUE = [47, 111, 237];
  const TEXT = [16, 24, 40];
  const MUTED = [90, 100, 114];
  const TRACK = [226, 230, 238];

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = doc.internal.pageSize.getWidth();
  const marginX = 18;
  let y;

  doc.setFillColor(...NAVY);
  doc.rect(0, 0, pageWidth, 26, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Assessment de Carreira — ICOM TV", marginX, 16);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(r.setorNome, marginX, 22);

  y = 38;
  doc.setTextColor(...TEXT);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(r.nome, marginX, y);
  y += 9;

  doc.setTextColor(...BLUE);
  doc.setFontSize(13);
  doc.text(`${r.cargoPrincipal.nome} — ${r.cargoPrincipal.percentual}%`, marginX, y);
  y += 8;

  let statusTexto;
  if (!r.cargoProximo) {
    statusTexto = "Perfil consolidado no maior nível do plano de carreira avaliado.";
  } else if (r.statusTransicao === "transicao") {
    statusTexto = `Em fase de transição para o próximo nível (${r.cargoProximo.nome}).`;
  } else {
    statusTexto = "Perfil consolidado neste nível.";
  }
  doc.setTextColor(...MUTED);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.text(statusTexto, marginX, y);
  y += 12;

  const imgSize = 82;
  if (radarChartInstance) {
    const chartImg = radarChartInstance.toBase64Image();
    doc.addImage(chartImg, "PNG", marginX, y, imgSize, imgSize);
  }

  const rankX = marginX + imgSize + 12;
  const barMaxWidth = pageWidth - rankX - marginX - 16;
  let rankY = y + 4;
  doc.setTextColor(...TEXT);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Ranking por Cargo", rankX, rankY);
  rankY += 8;

  r.ranking.forEach((cargo) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...MUTED);
    doc.text(cargo.nome, rankX, rankY);
    doc.setFillColor(...TRACK);
    doc.rect(rankX, rankY + 2, barMaxWidth, 2.6, "F");
    doc.setFillColor(...BLUE);
    doc.rect(rankX, rankY + 2, barMaxWidth * (cargo.percentual / 100), 2.6, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...TEXT);
    doc.text(`${cargo.percentual}%`, rankX, rankY + 8);
    rankY += 14;
  });

  y = Math.max(y + imgSize, rankY) + 8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...TEXT);
  doc.text("Resumo Personalizado", marginX, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(60, 68, 82);
  const linhasResumo = doc.splitTextToSize(r.resumo.texto, pageWidth - marginX * 2);
  linhasResumo.forEach((linha) => {
    if (y > 280) { doc.addPage(); y = 20; }
    doc.text(linha, marginX, y);
    y += 5;
  });
  y += 6;

  if (y > 265) { doc.addPage(); y = 20; }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...TEXT);
  doc.text("Ações práticas para acelerar sua evolução", marginX, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(60, 68, 82);
  r.resumo.acoes.forEach((acao) => {
    const linhasAcao = doc.splitTextToSize(`•  ${acao}`, pageWidth - marginX * 2 - 4);
    if (y > 280) { doc.addPage(); y = 20; }
    linhasAcao.forEach((linha) => {
      doc.text(linha, marginX + 2, y);
      y += 5;
    });
    y += 2;
  });

  const nomeArquivo = `assessment-carreira-${(state.userInfo.nome || "resultado").toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`;
  doc.save(nomeArquivo);
}

// ---------------------------------------------------------------------
// Biblioteca de Planos de Carreira
// ---------------------------------------------------------------------

function renderBibliotecaSetor(setorId) {
  const setor = getSetorDados(setorId);
  const meta = SETORES_REGISTRY.find((s) => s.id === setorId);
  if (!setor || !meta) return;

  document.getElementById("bib-setor-icone").textContent = meta.icone;
  document.getElementById("bib-setor-nome").textContent = setor.nome;
  document.getElementById("bib-visao-objetivo").textContent = setor.visaoGeral.objetivo;
  document.getElementById("bib-visao-importancia").textContent = setor.visaoGeral.importancia;

  const respEl = document.getElementById("bib-visao-responsabilidades");
  respEl.innerHTML = "";
  setor.visaoGeral.responsabilidades.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r;
    respEl.appendChild(li);
  });

  document.getElementById("bib-visao-competencias").innerHTML = setor.visaoGeral.competenciasValorizadas
    .map((c) => chip(c, "chip-neutral")).join("");

  const temResultadoDesteSetor = ultimoResultado && ultimoResultado.setorId === setorId;

  const trilhaEl = document.getElementById("bib-trilha");
  trilhaEl.innerHTML = "";
  const cargosOrdenados = [...setor.cargos].sort((a, b) => a.ordem - b.ordem);
  cargosOrdenados.forEach((cargo, i) => {
    const node = document.createElement("div");
    node.className = "trilha-node";
    let badge = "";
    if (temResultadoDesteSetor) {
      const rankingItem = ultimoResultado.ranking.find((c) => c.id === cargo.id);
      const isPrincipal = ultimoResultado.cargoPrincipal.id === cargo.id;
      if (rankingItem) {
        badge = `<span class="trilha-badge${isPrincipal ? " trilha-badge-principal" : ""}">${rankingItem.percentual}% aderência</span>`;
      }
    }
    node.innerHTML = `
      <div class="trilha-node-num">${i + 1}</div>
      <div class="trilha-node-card">
        <h4>${cargo.nome}</h4>
        <p>${cargo.objetivo.slice(0, 110)}${cargo.objetivo.length > 110 ? "…" : ""}</p>
        ${badge}
        <button class="btn btn-ghost btn-sm">Ver detalhes</button>
      </div>
    `;
    node.querySelector("button").addEventListener("click", () => openCargoModal(setorId, cargo.id));
    trilhaEl.appendChild(node);
  });
}

function secaoSeNaoVazia(titulo, itens, renderItem) {
  if (!itens || itens.length === 0) return "";
  return `<h3>${titulo}</h3><ul class="modal-list">${itens.map(renderItem).join("")}</ul>`;
}

function openCargoModal(setorId, cargoId) {
  const setor = getSetorDados(setorId);
  const cargo = setor.cargos.find((c) => c.id === cargoId);
  const cargoProximo = setor.cargos.find((c) => c.ordem === cargo.ordem + 1);

  const temResultadoDesteSetor = ultimoResultado && ultimoResultado.setorId === setorId;
  let aderenciaHtml = "";
  if (temResultadoDesteSetor) {
    const rankingItem = ultimoResultado.ranking.find((c) => c.id === cargoId);
    if (rankingItem) {
      aderenciaHtml = `<div class="modal-aderencia">Sua aderência a este cargo, na última avaliação: <strong>${rankingItem.percentual}%</strong></div>`;
    }
  }

  const metaBadges = [
    cargo.formacaoAcademica ? `<span class="chip chip-neutral">🎓 Formação exigida</span>` : "",
    cargo.tempoMinimoPromocao ? `<span class="chip chip-neutral">⏳ ${cargo.tempoMinimoPromocao} mín. para promoção</span>` : "",
    cargo.provaConhecimentos === true ? `<span class="chip chip-neutral">📝 Exige prova de conhecimentos</span>` : "",
    cargo.provaConhecimentos === false ? `<span class="chip chip-neutral">📝 Não exige prova de conhecimentos</span>` : "",
  ].filter(Boolean).join("");

  const competenciasHtml = cargo.competenciasEsperadas && cargo.competenciasEsperadas.length
    ? secaoSeNaoVazia("Competências e experiência esperada", cargo.competenciasEsperadas, (c) => `<li>${c}</li>`)
    : `<h3>Competências e experiência esperada</h3><p class="muted">Não especificado separadamente — veja a formação acadêmica exigida e o objetivo do cargo acima.</p>`;

  const conhecimentosHtml = secaoSeNaoVazia("Conhecimentos técnicos", cargo.conhecimentosTecnicos, (c) => `<li>${c}</li>`);

  const indicadoresHtml = `
    <h3>Indicadores de desempenho</h3>
    <div class="indicadores-grid">
      <div><h5>Aumentar</h5><ul class="modal-list">${cargo.indicadores.aumentar.map((i) => `<li>${i}</li>`).join("")}</ul></div>
      <div><h5>Garantir</h5><ul class="modal-list">${cargo.indicadores.garantir.map((i) => `<li>${i}</li>`).join("")}</ul></div>
      <div><h5>Reduzir</h5><ul class="modal-list">${cargo.indicadores.reduzir.map((i) => `<li>${i}</li>`).join("")}</ul></div>
    </div>
  `;

  let evoluirHtml;
  if (cargoProximo) {
    const itensEvoluir = [...(cargoProximo.competenciasEsperadas || []), ...cargoProximo.responsabilidades.slice(0, 3)];
    evoluirHtml = `
      <h3>O que é esperado para evoluir a ${cargoProximo.nome}</h3>
      <ul class="modal-list">${itensEvoluir.map((i) => `<li>${i}</li>`).join("")}</ul>
    `;
  } else {
    evoluirHtml = `<h3>O que é esperado para evoluir ao próximo nível</h3><p class="muted">Este é o maior nível deste plano de carreira.</p>`;
  }

  const partesResumo = [];
  if (cargo.formacaoAcademica) partesResumo.push(`Para atuar neste cargo, a ICOM TV busca: ${cargo.formacaoAcademica}`);
  if (cargo.tempoMinimoPromocao) partesResumo.push(`O tempo mínimo na função anterior para ser promovido a este cargo é de ${cargo.tempoMinimoPromocao}.`);
  if (cargo.provaConhecimentos === true) partesResumo.push("Este cargo exige prova de conhecimentos.");
  if (cargo.provaConhecimentos === false) partesResumo.push("Este cargo não exige prova de conhecimentos.");

  document.getElementById("cargo-modal-content").innerHTML = `
    <span class="eyebrow">${setor.nome}</span>
    <h2>${cargo.nome}</h2>
    <div class="modal-badges">${metaBadges}</div>
    ${aderenciaHtml}

    <h3>Objetivo do cargo</h3>
    <p>${cargo.objetivo}</p>

    ${competenciasHtml}

    <h3>Principais responsabilidades</h3>
    <ul class="modal-list">${cargo.responsabilidades.map((r) => `<li>${r}</li>`).join("")}</ul>

    ${conhecimentosHtml}

    ${indicadoresHtml}

    ${evoluirHtml}

    <h3>Resumo geral</h3>
    <p>${partesResumo.join(" ")}</p>
  `;

  document.getElementById("cargo-modal-overlay").classList.remove("hidden");
}

function closeCargoModal() {
  document.getElementById("cargo-modal-overlay").classList.add("hidden");
}

document.getElementById("btn-close-modal").addEventListener("click", closeCargoModal);
document.getElementById("cargo-modal-overlay").addEventListener("click", (e) => {
  if (e.target.id === "cargo-modal-overlay") closeCargoModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCargoModal();
});

// ---------------------------------------------------------------------
// Inicialização
// ---------------------------------------------------------------------

initResumeBanner();
setMenuActive("home");
