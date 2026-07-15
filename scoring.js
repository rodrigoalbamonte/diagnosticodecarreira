/**
 * Motor de avaliação — calcula aderência por cargo, radar de competências
 * e o texto-resumo personalizado do resultado.
 *
 * Não conhece nenhum setor específico: recebe o objeto `setor` (ver data/*.js)
 * e as respostas, e devolve um objeto de resultado pronto para ser renderizado.
 * Isso permite adicionar novos setores sem alterar nenhuma linha deste arquivo.
 */

/** Retorna a porcentagem de aderência (0-100) de um cargo dado o conjunto de respostas. */
function calcularAderenciaCargo(questions, respostas, cargoId) {
  let pontosObtidos = 0;
  let pontosPossiveis = 0;
  for (const pergunta of questions) {
    const peso = pergunta.pesos[cargoId] || 0;
    if (peso <= 0) continue;
    const resposta = respostas[pergunta.id];
    if (resposta === undefined || resposta === null) continue;
    pontosObtidos += resposta * peso;
    pontosPossiveis += 4 * peso;
  }
  if (pontosPossiveis === 0) return 0;
  return Math.round((pontosObtidos / pontosPossiveis) * 1000) / 10;
}

/** Retorna a pontuação (0-100) por categoria de competência, para o gráfico radar. */
function calcularRadar(questions, respostas) {
  const somaPorCategoria = {};
  const contagemPorCategoria = {};
  for (const pergunta of questions) {
    const resposta = respostas[pergunta.id];
    if (resposta === undefined || resposta === null) continue;
    const cat = pergunta.categoria;
    somaPorCategoria[cat] = (somaPorCategoria[cat] || 0) + resposta;
    contagemPorCategoria[cat] = (contagemPorCategoria[cat] || 0) + 1;
  }
  const radar = {};
  for (const cat of Object.keys(CATEGORIAS)) {
    const soma = somaPorCategoria[cat] || 0;
    const n = contagemPorCategoria[cat] || 0;
    radar[cat] = n === 0 ? 0 : Math.round((soma / (n * 4)) * 1000) / 10;
  }
  return radar;
}

/** Monta o texto-resumo personalizado explicando o resultado. */
function gerarResumo(setor, nome, cargoPrincipal, cargoProximo, statusTransicao, radar) {
  const primeiroNome = (nome || "").trim().split(" ")[0] || "Você";

  const categoriasOrdenadas = Object.entries(radar).sort((a, b) => b[1] - a[1]);
  const destaques = categoriasOrdenadas.slice(0, 3).map(([cat]) => CATEGORIAS[cat].label);
  const desenvolver = categoriasOrdenadas.slice(-3).map(([cat]) => CATEGORIAS[cat].label).reverse();

  let paragrafo1 = `${primeiroNome} apresentou maior aderência ao cargo de ${cargoPrincipal.nome} (${cargoPrincipal.percentual}%), `
    + `com destaque para as competências de ${destaques.join(", ")}. Esse resultado reflete um perfil consistente com as atividades e `
    + `responsabilidades esperadas para esse nível dentro do Plano de Carreira de ${setor.nome}.`;

  let paragrafo2;
  if (!cargoProximo) {
    paragrafo2 = `Por já estar no maior nível da carreira avaliada, o foco recomendado é ampliar a maturidade estratégica e o impacto organizacional, `
      + `consolidando ainda mais a atuação em ${destaques[0]}.`;
  } else if (statusTransicao === "transicao") {
    paragrafo2 = `${primeiroNome} também demonstra diversas competências esperadas para o cargo de ${cargoProximo.nome} `
      + `(${cargoProximo.percentual}% de aderência), o que indica uma fase de transição entre os dois níveis. `
      + `Continuar desenvolvendo ${desenvolver.join(", ")} deve acelerar essa evolução.`;
  } else {
    paragrafo2 = `O perfil está consolidado neste nível. Para avançar rumo a ${cargoProximo.nome}, os pontos de maior oportunidade `
      + `de desenvolvimento são ${desenvolver.join(", ")}.`;
  }

  const acoes = desenvolver.slice(0, 3).map((label) => {
    const chave = Object.keys(CATEGORIAS).find((k) => CATEGORIAS[k].label === label);
    return setor.recomendacoesPorCategoria[chave];
  });

  return {
    texto: `${paragrafo1}\n\n${paragrafo2}`,
    destaques,
    desenvolver,
    acoes,
  };
}

/**
 * Classifica cada competência do radar em "consolidada" (>=70%), "em desenvolvimento"
 * (40-69%) ou "necessária" (<40%) — usado para destacar visualmente o progresso do
 * colaborador em relação ao plano de carreira do setor.
 */
function classificarCompetencias(radar) {
  return Object.entries(radar).map(([cat, valor]) => {
    let status;
    if (valor >= 70) status = "consolidada";
    else if (valor >= 40) status = "desenvolvimento";
    else status = "necessaria";
    return { categoria: cat, label: CATEGORIAS[cat].label, valor, status };
  }).sort((a, b) => b.valor - a.valor);
}

/**
 * Calcula o resultado completo da avaliação para um setor.
 * @param {object} setor - objeto de dados do setor (ver data/*.js)
 * @param {string} nome
 * @param {Record<string, number>} respostas - map perguntaId -> valor (0-4)
 * @returns objeto de resultado pronto para renderização
 */
function calcularResultado(setor, nome, respostas) {
  const ranking = setor.cargos
    .map((c) => ({ ...c, percentual: calcularAderenciaCargo(setor.questions, respostas, c.id) }))
    .sort((a, b) => b.percentual - a.percentual);

  const cargoPrincipal = ranking[0];
  const cargoProximoObj = setor.cargos.find((c) => c.ordem === cargoPrincipal.ordem + 1);
  const cargoProximo = cargoProximoObj
    ? { ...cargoProximoObj, percentual: calcularAderenciaCargo(setor.questions, respostas, cargoProximoObj.id) }
    : null;

  let statusTransicao = null;
  if (cargoProximo) {
    const gap = cargoPrincipal.percentual - cargoProximo.percentual;
    statusTransicao = gap <= 15 ? "transicao" : "consolidado";
  }

  const radar = calcularRadar(setor.questions, respostas);
  const competencias = classificarCompetencias(radar);
  const resumo = gerarResumo(setor, nome, cargoPrincipal, cargoProximo, statusTransicao, radar);

  return {
    setorId: setor.id,
    setorNome: setor.nome,
    nome,
    ranking, // ordenado por percentual desc — para o ranking na tela de resultado
    cargoPrincipal,
    cargoProximo,
    statusTransicao,
    radar,
    competencias,
    resumo,
  };
}
