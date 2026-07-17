/**
 * Registro de setores da plataforma de Assessment de Carreira ICOM TV.
 *
 * PARA ADICIONAR UM NOVO SETOR:
 *   1. Crie um arquivo data/<id-do-setor>.js seguindo o mesmo formato de
 *      data/relacionamento.js ou data/suporte-tecnico.js (cargos, competências,
 *      perguntas, pesos, indicadores etc — tudo isolado nesse arquivo).
 *   2. Adicione uma entrada abaixo com disponivel: true e o mesmo id.
 *   3. Registre o objeto de dados em getSetorDados() no fim deste arquivo.
 *   4. Inclua o novo <script src="data/<id-do-setor>.js"> no index.html.
 * Nenhuma lógica em app.js/scoring.js precisa ser alterada — a interface lê
 * tudo a partir daqui.
 */

const SETORES_REGISTRY = [
  {
    id: "relacionamento",
    nome: "Relacionamento com Cliente",
    icone: "🤝",
    descricaoCurta: "Atendimento consultivo, retenção e fidelização da carteira de clientes ICOM TV.",
    disponivel: true,
  },
  {
    id: "sucesso-cliente",
    nome: "Sucesso do Cliente",
    icone: "🌟",
    descricaoCurta: "Acompanhamento da jornada do cliente pós-venda, retenção e prevenção de cancelamentos.",
    disponivel: true,
  },
  {
    id: "suporte-tecnico",
    nome: "Suporte Técnico",
    icone: "🛠️",
    descricaoCurta: "Instalação, configuração e resolução de problemas técnicos dos equipamentos ICOM TV.",
    disponivel: true,
  },
  {
    id: "audiovisual",
    nome: "Audiovisual",
    icone: "🎬",
    descricaoCurta: "Produção, edição e finalização de vídeos institucionais e promocionais para as TVs dos clientes.",
    disponivel: true,
  },
  {
    id: "criacao",
    nome: "Criação",
    icone: "🎨",
    descricaoCurta: "Design gráfico e identidade visual das peças exibidas nas TVs dos clientes ICOM TV.",
    disponivel: true,
  },
  {
    id: "comercial",
    nome: "Comercial",
    icone: "📈",
    descricaoCurta: "Prospecção, negociação consultiva e fechamento de novos clientes para a ICOM TV.",
    disponivel: true,
  },
  {
    id: "producao",
    nome: "Produção",
    icone: "🎞️",
    descricaoCurta: "Criação, publicação e manutenção das programações exibidas nas TVs dos clientes ICOM TV.",
    disponivel: true,
  },
  {
    id: "social-media",
    nome: "Social Media",
    icone: "📱",
    descricaoCurta: "Em breve — plano de carreira em desenvolvimento.",
    disponivel: false,
  },
];

/** Retorna o objeto de dados completo (cargos, perguntas, biblioteca) de um setor disponível. */
function getSetorDados(id) {
  switch (id) {
    case "relacionamento":
      return SETOR_RELACIONAMENTO;
    case "suporte-tecnico":
      return SETOR_SUPORTE_TECNICO;
    case "producao":
      return SETOR_PRODUCAO;
    case "criacao":
      return SETOR_CRIACAO;
    case "audiovisual":
      return SETOR_AUDIOVISUAL;
    case "sucesso-cliente":
      return SETOR_SUCESSO_CLIENTE;
    case "comercial":
      return SETOR_COMERCIAL;
    default:
      return null;
  }
}
