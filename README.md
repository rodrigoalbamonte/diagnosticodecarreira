# Diagnóstico de Carreira — Time de Relacionamento ICOM TV

Aplicação estática (HTML/CSS/JS puro, sem build step, sem backend) que avalia a aderência de um
colaborador a cada cargo do Plano de Carreira da área de Relacionamento (Consultor Jr, Pleno,
Sênior, Supervisor, Coordenador), com base em respostas Likert a perguntas comportamentais.

## Estrutura

```
site/
├── index.html        estrutura das 4 telas (landing, dados do usuário, avaliação, resultado)
├── css/style.css      todo o visual (paleta azul-marinho/branco/cinza, responsivo)
└── js/
    ├── data.js        CARGOS, QUESTIONS (perguntas + pesos por cargo) e CATEGORIAS — edite aqui
    ├── scoring.js      motor de cálculo (aderência %, radar, texto-resumo)
    └── app.js          lógica de interface (navegação, localStorage, PDF)
```

Não há passo de build: `index.html` carrega os arquivos `.js`/`.css` diretamente. Basta abrir com
um servidor estático (ou publicar a pasta como está).

## Como editar

### Adicionar, remover ou alterar uma pergunta
Edite o array `QUESTIONS` em [`js/data.js`](js/data.js). Cada pergunta tem:

```js
{ id: "q55", texto: "...", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 2 } }
```

- `id` precisa ser único (não reutilize um id já usado, pois respostas salvas no navegador do
  usuário ficam associadas ao id).
- `categoria` deve ser uma das chaves de `CATEGORIAS` (usadas no radar de competências).
- `pesos` vai de 0 (pergunta não relevante para aquele cargo) a 3 (muito relevante). A resposta do
  usuário (0 a 4, de "Nunca" a "Sempre") é multiplicada pelo peso; a % de aderência de cada cargo é
  a soma obtida dividida pela soma máxima possível, considerando só as perguntas com peso > 0 para
  aquele cargo.

### Alterar um cargo (nome, competências, atividades)
Edite o array `CARGOS` em `js/data.js`. O campo `ordem` define a hierarquia (1=Jr … 5=Coordenador)
— é usado para saber qual é "o próximo cargo" na tela de resultado.

### Alterar as recomendações automáticas do resumo
Edite `RECOMENDACOES_POR_CATEGORIA` em [`js/scoring.js`](js/scoring.js).

### Alterar cores/visual
Variáveis CSS no topo de [`css/style.css`](css/style.css) (`--navy-900`, `--blue-accent`, etc.).

## Publicação

O arquivo [`dist/index.html`](../dist/index.html) (na pasta `dist/` ao lado de `site/`) é um bundle
autocontido (CSS e JS inline num único arquivo HTML) gerado a partir desta pasta — é o que deve ser
publicado quando a hospedagem só aceita um único arquivo (ex: Netlify Drop). Depois de editar
qualquer coisa em `site/`, regenere o bundle rodando:

```powershell
./dist/build.ps1
```

Se a hospedagem aceitar múltiplos arquivos/pastas (GitHub Pages, Netlify via Git, servidor próprio),
publique a pasta `site/` diretamente — não precisa do bundle.

## Testar localmente

Não abra `index.html` direto como `file://` (os `<script src="js/...">` não carregam por CORS em
alguns navegadores). Sirva com qualquer servidor estático, por exemplo:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1   # sobe em http://localhost:8765
```

## Como funciona o cálculo (resumo)

1. Cada resposta vale de 0 ("Nunca") a 4 ("Sempre").
2. Para cada cargo: `% aderência = soma(resposta × peso) / soma(4 × peso)`, só nas perguntas com
   peso > 0 para aquele cargo.
3. O cargo com maior % é o "cargo principal". O "próximo cargo" é sempre o de `ordem` imediatamente
   superior (não necessariamente o segundo colocado no ranking geral).
4. Se a diferença entre o cargo principal e o próximo cargo for ≤ 15 pontos percentuais, o status é
   "fase de transição"; caso contrário, "perfil consolidado".
5. O radar de competências é a média das respostas (0-4, convertida em %) agrupadas por categoria,
   independente do cargo.

Dados de origem: matriz de competências/atividades do Plano de Carreira fornecida pela ICOM TV
(planilha "Competências Plano de Carreira atendimento ao cliente.xlsx").
