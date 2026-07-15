# Assessment de Carreira — ICOM TV

Plataforma estática (HTML/CSS/JS puro, sem build step, sem backend) com dois módulos:

1. **Fazer Avaliação** — avaliação comportamental por setor, que calcula a aderência do
   colaborador a cada cargo do plano de carreira daquele setor.
2. **Planos de Carreira** — biblioteca consultável (sem precisar fazer a avaliação) com a
   trilha de crescimento e o detalhe de cada cargo de cada setor.

## Estrutura

```
site/
├── index.html          todas as telas (início, seleção de setor, avaliação, resultado, biblioteca) + modal de cargo
├── css/style.css        todo o visual (paleta azul-marinho/branco/cinza, responsivo)
├── js/
│   ├── shared-data.js   CATEGORIAS (radar) e ESCALA (Likert) — compartilhadas por todos os setores
│   ├── scoring.js        motor de cálculo — genérico, não conhece nenhum setor específico
│   └── app.js            lógica de interface (menu, navegação, localStorage, PDF, modal)
└── data/
    ├── setores.js         registro de todos os setores (disponíveis e "em breve")
    ├── relacionamento.js  cargos, perguntas, pesos e biblioteca do setor Relacionamento
    └── suporte-tecnico.js cargos, perguntas, pesos e biblioteca do setor Suporte Técnico
```

Não há passo de build: `index.html` carrega os arquivos `.js`/`.css` diretamente. Basta servir a
pasta com qualquer servidor estático.

## Como adicionar um novo setor

Nenhuma lógica em `app.js` ou `scoring.js` precisa ser alterada — ela é 100% orientada a dados.

1. Copie `data/suporte-tecnico.js` para `data/<id-do-setor>.js` e preencha com o conteúdo real do
   plano de carreira daquele setor (cargos, competências, atividades, indicadores, perguntas e
   pesos — ver formato comentado no início de cada arquivo de setor).
2. Em `data/setores.js`, mude a entrada correspondente no `SETORES_REGISTRY` para `disponivel: true`
   (ou adicione uma nova entrada, se for um setor inteiramente novo) e registre o objeto de dados em
   `getSetorDados()`.
3. Inclua `<script src="data/<id-do-setor>.js"></script>` em `index.html` (antes de `js/scoring.js`).
4. Rode `./dist/build.ps1` para atualizar o bundle de publicação (`dist/index.html`).

## Como editar um setor existente

Abra o arquivo do setor em `data/` (ex: `data/relacionamento.js`):

- **Perguntas**: array `questions`. Cada uma tem `id` (único, não reutilize), `texto`, `categoria`
  (uma das chaves de `CATEGORIAS` em `js/shared-data.js`, usada no radar) e `pesos` — a relevância
  da pergunta para cada cargo daquele setor, de 0 (não relevante) a 3 (muito relevante). Resposta
  vale de 0 ("Nunca") a 4 ("Sempre"). % de aderência de um cargo = soma(resposta × peso) /
  soma(4 × peso), só nas perguntas com peso > 0 para aquele cargo.
- **Cargos**: array `cargos`. O campo `ordem` define a hierarquia (1 = mais júnior) — é usado para
  saber qual é "o próximo cargo" na tela de resultado e na trilha de crescimento. Os demais campos
  (`objetivo`, `competenciasEsperadas`, `responsabilidades`, `indicadores`, `conhecimentosTecnicos`,
  `formacaoAcademica`, `tempoMinimoPromocao`, `provaConhecimentos`) alimentam a página de detalhe do
  cargo na biblioteca — mantenha-os fiéis ao documento oficial do plano de carreira, evite texto
  genérico.
- **Recomendações**: `recomendacoesPorCategoria` — texto sugerido quando aquela competência aparece
  entre as que precisam de desenvolvimento no resultado.
- **Visão geral do setor**: `visaoGeral` — objetivo, responsabilidades, importância e competências
  mais valorizadas, mostrados no topo da biblioteca daquele setor.

## Limitação conhecida: materiais de desenvolvimento

A seção "Materiais de desenvolvimento recomendados" (cursos internos, leituras, treinamentos) no
resultado da avaliação está preparada na interface, mas **nenhum setor tem esse conteúdo cadastrado
ainda** — não existia uma fonte real (catálogo de cursos/leituras da ICOM TV) para preencher sem
inventar títulos fictícios. Quando esse catálogo existir, adicione um campo `materiaisDesenvolvimento:
{ cursos: [...], leituras: [...], treinamentos: [...] }` por categoria em cada setor e ajuste
`renderResultado()` em `js/app.js` para exibi-lo no lugar da mensagem padrão.

## Publicação

O arquivo [`dist/index.html`](../dist/index.html) é um bundle autocontido (CSS e JS inline num único
arquivo HTML) gerado a partir de `site/` — use-o quando a hospedagem só aceitar um único arquivo
(ex: Netlify Drop). Depois de editar qualquer coisa em `site/`, regenere o bundle:

```powershell
./dist/build.ps1
```

Se a hospedagem aceitar múltiplos arquivos/pastas (GitHub Pages, Netlify via Git, servidor próprio),
publique a pasta `site/` diretamente — não precisa do bundle.

## Testar localmente

Não abra `index.html` direto como `file://` (os `<script src="...">` não carregam por CORS em
alguns navegadores). Sirva com qualquer servidor estático, por exemplo:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1   # sobe em http://localhost:8765
```

## Como funciona o cálculo (resumo)

1. Cada resposta vale de 0 ("Nunca") a 4 ("Sempre").
2. Para cada cargo do setor: `% aderência = soma(resposta × peso) / soma(4 × peso)`, só nas
   perguntas com peso > 0 para aquele cargo.
3. O cargo com maior % é o "cargo principal". O "próximo cargo" é sempre o de `ordem` imediatamente
   superior dentro do mesmo setor (não necessariamente o segundo colocado no ranking geral).
4. Se a diferença entre o cargo principal e o próximo cargo for ≤ 15 pontos percentuais, o status é
   "fase de transição"; caso contrário, "perfil consolidado".
5. O radar de competências é a média das respostas (0-4, convertida em %) agrupadas por categoria
   (as 9 categorias são as mesmas para todos os setores, o que permite comparação entre áreas).
6. Cada competência do radar é classificada como consolidada (≥70%), em desenvolvimento (40-69%) ou
   necessária (<40%) — usado na seção "Próximos Passos" do resultado e nos indicadores da trilha de
   crescimento na biblioteca.

## Origem dos dados

- **Relacionamento com Cliente**: "Competências Plano de Carreira atendimento ao cliente.xlsx"
  (versão atualizada, com 5 cargos: Consultor Jr/Pleno/Sênior, Supervisor, Coordenador).
- **Suporte Técnico**: "Competências Plano de Carreira suporte técnico ao cliente.xlsx" (4 cargos,
  sem nível Coordenador). Os cargos foram renomeados de "Consultor"/"Supervisor" para "Analista de
  Suporte Técnico"/"Supervisor de Suporte Técnico" por decisão do gestor da área — o conteúdo
  (objetivo, atividades, desafios, formação, tempo mínimo) foi transcrito fielmente da planilha.
- **Demais setores** (Sucesso do Cliente, Audiovisual, Criação, Comercial, Produção, Social Media):
  ainda não têm planilha de plano de carreira — aparecem como "Em breve" até que o conteúdo seja
  enviado.
