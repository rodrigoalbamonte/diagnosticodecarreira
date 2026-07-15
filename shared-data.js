/**
 * Dados compartilhados entre todos os setores da plataforma.
 *
 * CATEGORIAS: as 9 competências universais usadas no radar de todas as avaliações,
 * independente do setor — permite comparar setores no mesmo gráfico.
 * ESCALA: escala Likert usada em todas as perguntas de todos os setores.
 */

const CATEGORIAS = {
  comunicacao:    { label: "Comunicação" },
  lideranca:      { label: "Liderança" },
  organizacao:    { label: "Organização" },
  estrategia:     { label: "Estratégia" },
  analise:        { label: "Análise" },
  relacionamento: { label: "Relacionamento" },
  gestao:         { label: "Gestão" },
  autonomia:      { label: "Autonomia" },
  inovacao:       { label: "Inovação" },
};

const ESCALA = [
  { valor: 0, label: "Nunca" },
  { valor: 1, label: "Raramente" },
  { valor: 2, label: "Às vezes" },
  { valor: 3, label: "Frequentemente" },
  { valor: 4, label: "Sempre" },
];
