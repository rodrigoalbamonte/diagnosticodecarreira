/**
 * Setor: Audiovisual
 * Fonte: "Competências Plano de Carreira audiovisual.xlsx".
 *
 * Este setor tem 5 níveis: Analista de Audiovisual Jr/Pleno/Sênior, Supervisor de
 * Audiovisual e Coordenador de Criação. O cargo de Coordenador é COMPARTILHADO com o
 * setor Criação (a planilha de origem descreve um único Coordenador de Criação
 * responsável por coordenar, ao mesmo tempo, as áreas de Design Gráfico e Audiovisual) —
 * por isso o mesmo conteúdo aparece também em data/criacao.js. Se o cargo mudar, atualize
 * os dois arquivos.
 *
 * EDITE ESTE ARQUIVO PARA ATUALIZAR CARGOS, PERGUNTAS, PESOS E CONTEÚDO DA BIBLIOTECA
 * DE PLANO DE CARREIRA DESTE SETOR. Nenhuma alteração aqui afeta outros setores.
 */

const SETOR_AUDIOVISUAL = {
  id: "audiovisual",
  nome: "Audiovisual",

  visaoGeral: {
    objetivo:
      "A área de Audiovisual produz e edita vídeos institucionais, promocionais e educativos exibidos nas TVs dos " +
      "clientes ICOM TV, garantindo excelência técnica, storytelling e alinhamento com os padrões visuais e " +
      "sonoros da marca.",
    responsabilidades: [
      "Produção, edição e finalização de vídeos institucionais, promocionais e educativos.",
      "Motion graphics, tratamento de áudio e correção de cor das produções.",
      "Padronização da identidade audiovisual da ICOM TV.",
      "Integração com Criação, Produção, Relacionamento e Marketing para garantir entregas alinhadas.",
    ],
    importancia:
      "A qualidade técnica e criativa das produções audiovisuais impacta diretamente o impacto das campanhas e a " +
      "percepção de valor dos materiais entregues aos clientes — erros técnicos, atrasos ou inconsistências geram " +
      "retrabalho e reclamações.",
    competenciasValorizadas: ["Inovação", "Análise", "Organização", "Autonomia", "Comunicação"],
  },

  cargos: [
    {
      id: "jr",
      ordem: 1,
      nome: "Analista de Audiovisual Júnior",
      objetivo:
        "O Analista de Audiovisual Júnior é responsável pela edição e finalização de conteúdos audiovisuais " +
        "destinados às TVs da ICOM TV, garantindo qualidade técnica, organização e cumprimento dos padrões da " +
        "empresa. Atua na produção e adaptação de vídeos, realizando ajustes de áudio, imagem e animação para " +
        "entregar materiais que comuniquem de forma clara, atrativa e alinhada aos objetivos dos clientes. Também " +
        "contribui para a organização dos arquivos e para a melhoria contínua dos processos da área.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Editar vídeos institucionais, promocionais e informativos utilizando os padrões da ICOM TV.",
        "Realizar ajustes de áudio, imagem, cortes, sincronização e finalização dos materiais.",
        "Adaptar templates existentes conforme as necessidades dos projetos.",
        "Atualizar templates e elementos audiovisuais de acordo com a identidade visual da empresa.",
        "Montar vídeos utilizando diferentes mídias, como imagens, vídeos, trilhas sonoras e animações.",
        "Inserir legendas, transições, efeitos e elementos gráficos quando necessário.",
        "Garantir a qualidade visual e sonora dos materiais antes da entrega.",
        "Organizar arquivos, projetos e bibliotecas de mídia da área.",
        "Seguir os padrões técnicos e criativos estabelecidos pela empresa.",
        "Trabalhar em conjunto com os setores de Criação, Produção e Relacionamento para garantir o cumprimento dos prazos.",
        "Registrar corretamente as demandas e acompanhar o fluxo de produção.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade técnica das edições.",
          "A produtividade das entregas.",
          "A criatividade nas soluções audiovisuais.",
          "A organização dos projetos.",
        ],
        garantir: [
          "Qualidade visual e sonora em todos os materiais.",
          "Cumprimento dos prazos.",
          "Padronização das entregas.",
          "Organização dos arquivos e projetos.",
        ],
        reduzir: [
          "Retrabalho.",
          "Erros técnicos nas edições.",
          "Problemas de sincronização, áudio ou exportação.",
          "Atrasos na produção.",
        ],
      },
      conhecimentosTecnicos: [
        "Conhecimento básico/intermediário do pacote Adobe (Premiere Pro, After Effects, Photoshop e Illustrator).",
        "Noções de edição de áudio.",
        "Noções de motion graphics.",
        "Exportação e compressão de vídeos.",
        "Organização de arquivos digitais.",
        "Noções de identidade visual.",
        "Conhecimento básico de tipografia e composição visual.",
        "Gramática da língua portuguesa.",
      ],
      comportamentosEsperados: [],
      formacaoAcademica: "Ensino Superior cursando ou concluído em Audiovisual, Cinema, Rádio e TV, Publicidade e Propaganda, Design, Produção Multimídia ou áreas correlatas. Cursos de especialização em edição de vídeo, motion design ou pós-produção serão considerados diferenciais.",
      tempoMinimoPromocao: "1 ano",
      provaConhecimentos: false,
    },
    {
      id: "pl",
      ordem: 2,
      nome: "Analista de Audiovisual Pleno",
      objetivo:
        "O Analista de Audiovisual Pleno é responsável por produzir, editar e finalizar conteúdos audiovisuais com " +
        "autonomia, garantindo excelência técnica, criatividade e alinhamento com os padrões da ICOM TV. Atua em " +
        "projetos de média e alta complexidade, participa da melhoria contínua dos processos da área e contribui " +
        "para elevar a qualidade das entregas, proporcionando conteúdos que fortaleçam a comunicação dos clientes e " +
        "a experiência dos pacientes.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Produzir e editar vídeos institucionais, promocionais, educativos e comerciais para clientes e campanhas da ICOM TV.",
        "Desenvolver projetos audiovisuais de média e alta complexidade com autonomia.",
        "Adaptar e atualizar templates, animações e identidades visuais conforme os padrões da empresa.",
        "Criar motion graphics simples e recursos visuais que agreguem valor às produções.",
        "Realizar tratamento de áudio, correção de imagem, colorização básica e finalização dos materiais.",
        "Garantir a qualidade técnica e criativa de todos os vídeos antes da entrega.",
        "Organizar arquivos, projetos e bibliotecas digitais, mantendo o ambiente de produção estruturado.",
        "Trabalhar em conjunto com os setores de Criação, Produção, Relacionamento e Marketing para garantir entregas alinhadas aos objetivos dos clientes.",
        "Participar da criação, revisão e otimização dos processos internos do setor.",
        "Identificar oportunidades de melhoria na qualidade das produções e na eficiência operacional.",
        "Auxiliar tecnicamente os Analistas de Audiovisual Júnior, compartilhando conhecimento e boas práticas.",
        "Garantir o cumprimento dos prazos e dos padrões técnicos estabelecidos pela empresa.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade técnica e criativa das produções.",
          "A produtividade da equipe.",
          "A inovação nas soluções audiovisuais.",
          "A eficiência dos processos de edição.",
        ],
        garantir: [
          "Vídeos com excelência visual e sonora.",
          "Cumprimento dos prazos.",
          "Padronização da identidade audiovisual da ICOM TV.",
          "Organização dos projetos e arquivos.",
          "Qualidade consistente em todas as entregas.",
        ],
        reduzir: [
          "Retrabalho.",
          "Erros de edição.",
          "Problemas técnicos na exportação dos materiais.",
          "Atrasos na entrega dos projetos.",
          "Inconsistências visuais entre produções.",
        ],
      },
      conhecimentosTecnicos: [
        "Domínio intermediário/avançado do pacote Adobe (Premiere Pro, After Effects, Photoshop e Illustrator).",
        "Motion Graphics básico/intermediário.",
        "Tratamento e edição de áudio.",
        "Correção de cor e finalização de vídeos.",
        "Organização e gestão de projetos audiovisuais.",
        "Exportação para diferentes formatos e plataformas.",
        "Noções de storytelling audiovisual.",
        "Identidade visual e direção de arte.",
        "Gramática da língua portuguesa.",
        "Planejamento de produção audiovisual.",
      ],
      comportamentosEsperados: [],
      formacaoAcademica: "Ensino Superior cursando ou concluído em Audiovisual, Cinema, Rádio e TV, Publicidade e Propaganda, Design, Produção Multimídia ou áreas correlatas. Cursos de especialização em Motion Design, Pós-produção, Direção de Arte ou Comunicação Audiovisual serão considerados diferenciais.",
      tempoMinimoPromocao: "1 ano e 6 meses",
      provaConhecimentos: true,
    },
    {
      id: "sr",
      ordem: 3,
      nome: "Analista de Audiovisual Sênior",
      objetivo:
        "O Analista de Audiovisual Sênior é a principal referência técnica e criativa da área de Audiovisual, sendo " +
        "responsável por liderar tecnicamente os projetos de maior complexidade, garantir a excelência das " +
        "produções e promover a evolução contínua dos processos e da equipe. Atua no desenvolvimento de novas " +
        "soluções audiovisuais, padronização da identidade visual da ICOM TV, treinamento dos colaboradores e " +
        "implementação de inovações que fortaleçam a comunicação dos clientes e a experiência dos pacientes.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Desenvolver e executar produções audiovisuais de alta complexidade para clientes, campanhas institucionais e projetos estratégicos.",
        "Atuar como referência técnica para os Analistas Júnior e Pleno, oferecendo suporte, orientação e compartilhamento de conhecimento.",
        "Liderar tecnicamente projetos especiais, garantindo excelência criativa e técnica.",
        "Criar novos templates, animações, identidades visuais e padrões audiovisuais para a empresa.",
        "Desenvolver motion graphics, animações e recursos visuais avançados.",
        "Produzir conteúdos corporativos, institucionais e promocionais.",
        "Planejar e realizar filmagens internas e externas quando necessário.",
        "Participar da definição de estratégias audiovisuais junto aos setores de Marketing, Comercial, Relacionamento e Criação.",
        "Pesquisar tendências, novas tecnologias e referências de mercado para manter a ICOM TV atualizada.",
        "Padronizar processos, documentar boas práticas e propor melhorias contínuas para a área.",
        "Realizar revisões técnicas das produções antes da entrega.",
        "Apoiar a integração, capacitação e desenvolvimento dos novos colaboradores.",
        "Garantir que todos os materiais estejam alinhados à identidade visual, aos padrões técnicos e aos objetivos estratégicos da empresa.",
        "Participar de projetos de inovação relacionados ao audiovisual e à comunicação digital.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade técnica e criativa das produções.",
          "A inovação da área audiovisual.",
          "O nível técnico da equipe.",
          "A produtividade da operação.",
          "O impacto visual das campanhas e conteúdos.",
          "A percepção de valor dos materiais produzidos.",
        ],
        garantir: [
          "Excelência técnica em todas as entregas.",
          "Padronização da identidade audiovisual da ICOM TV.",
          "Desenvolvimento contínuo da equipe.",
          "Cumprimento dos prazos.",
          "Alinhamento entre Audiovisual, Criação, Marketing e Produção.",
          "Atualização constante das técnicas e tendências do mercado.",
        ],
        reduzir: [
          "Retrabalho.",
          "Erros técnicos nas produções.",
          "Inconsistências visuais.",
          "Atrasos em projetos estratégicos.",
          "Falhas de comunicação entre áreas.",
          "Despadronização dos materiais.",
        ],
      },
      conhecimentosTecnicos: [
        "Domínio avançado do pacote Adobe (Premiere Pro, After Effects, Photoshop e Illustrator).",
        "Motion Graphics avançado.",
        "Animação 2D.",
        "Edição e tratamento profissional de áudio.",
        "Correção de cor (Color Grading).",
        "Storytelling audiovisual.",
        "Direção de arte.",
        "Produção e direção de vídeo.",
        "Captação de imagem e iluminação.",
        "Organização de fluxos de pós-produção.",
        "Exportação para múltiplas plataformas.",
        "Planejamento de projetos audiovisuais.",
        "Identidade visual e branding.",
        "Excelente domínio da língua portuguesa.",
      ],
      comportamentosEsperados: [],
      formacaoAcademica: "Ensino Superior completo em Audiovisual, Cinema, Rádio e TV, Publicidade e Propaganda, Produção Multimídia, Design ou áreas correlatas. Será considerado diferencial possuir especializações em Motion Design, Direção de Arte, Cinema, Produção Audiovisual, Storytelling, Animação ou áreas relacionadas.",
      tempoMinimoPromocao: "2 Anos",
      provaConhecimentos: true,
    },
    {
      id: "sup",
      ordem: 4,
      nome: "Supervisor de Audiovisual",
      objetivo:
        "O Supervisor de Audiovisual é responsável por liderar a equipe de Audiovisual, garantindo a excelência " +
        "técnica e criativa das produções, o desenvolvimento dos colaboradores e a eficiência dos processos da " +
        "área. Atua na gestão de pessoas, projetos, indicadores e qualidade das entregas, promovendo inovação, " +
        "padronização e integração com os demais setores da empresa. Seu objetivo é assegurar que todas as " +
        "produções audiovisuais fortaleçam a comunicação dos clientes e representem os padrões de excelência da " +
        "ICOM TV.",
      competenciasEsperadas: [
        "Experiência consolidada em produção audiovisual e pós-produção.",
        "Experiência em liderança e desenvolvimento de equipes.",
        "Vivência em gestão de projetos e processos criativos.",
        "Experiência na gestão de indicadores e qualidade.",
        "Experiência na condução de projetos estratégicos.",
      ],
      responsabilidades: [
        "Liderar, desenvolver e acompanhar o desempenho da equipe de Audiovisual.",
        "Planejar e distribuir as demandas da equipe, garantindo equilíbrio da operação e cumprimento dos prazos.",
        "Realizar reuniões individuais e coletivas para alinhamento, acompanhamento e desenvolvimento dos colaboradores.",
        "Aplicar feedbacks contínuos, avaliações de desempenho e acompanhar os Planos de Desenvolvimento Individual (PDIs).",
        "Identificar necessidades de capacitação e promover treinamentos técnicos e criativos.",
        "Garantir a qualidade técnica, estética e estratégica das produções antes da entrega aos clientes.",
        "Definir padrões de identidade visual, animação e linguagem audiovisual da ICOM TV.",
        "Acompanhar indicadores de produtividade, qualidade, retrabalho e cumprimento de prazos.",
        "Liderar projetos audiovisuais estratégicos e campanhas institucionais.",
        "Promover pesquisas de tendências, tecnologias e ferramentas que aumentem a competitividade da área.",
        "Trabalhar em conjunto com Marketing, Criação, Produção, Comercial e Relacionamento para garantir alinhamento entre as equipes.",
        "Padronizar processos, fluxos de trabalho e organização dos arquivos digitais.",
        "Gerenciar crises relacionadas às entregas audiovisuais e definir planos de ação para correção.",
        "Elaborar relatórios gerenciais e apresentar indicadores e resultados à Coordenação.",
        "Promover a cultura organizacional, o espírito colaborativo e a melhoria contínua da equipe.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade técnica e criativa das produções.",
          "A produtividade da equipe.",
          "A inovação nas soluções audiovisuais.",
          "O desenvolvimento técnico dos colaboradores.",
          "A eficiência dos processos.",
          "O impacto das campanhas produzidas.",
          "A integração entre os setores.",
        ],
        garantir: [
          "O cumprimento dos padrões de qualidade da ICOM TV.",
          "Entregas dentro dos prazos estabelecidos.",
          "A padronização da identidade audiovisual.",
          "O desenvolvimento contínuo da equipe.",
          "A excelência técnica das produções.",
          "A organização dos processos e arquivos.",
        ],
        reduzir: [
          "Retrabalho.",
          "Erros técnicos nas produções.",
          "Atrasos em projetos.",
          "Falhas de comunicação entre equipes.",
          "Inconsistências visuais.",
          "Gargalos operacionais.",
          "Reclamações relacionadas às entregas.",
        ],
      },
      conhecimentosTecnicos: [
        "Domínio avançado do pacote Adobe (Premiere Pro, After Effects, Photoshop e Illustrator).",
        "Motion Graphics avançado.",
        "Direção de arte.",
        "Storytelling audiovisual.",
        "Gestão de projetos.",
        "Planejamento audiovisual.",
        "Gestão de indicadores (KPIs).",
        "Organização de fluxos de produção.",
        "Planejamento de campanhas.",
        "Gestão de processos.",
        "Pacote Office intermediário/avançado.",
        "Ferramentas de colaboração e gestão de tarefas.",
      ],
      comportamentosEsperados: [
        "Liderança inspiradora.",
        "Criatividade.",
        "Comunicação clara e assertiva.",
        "Inteligência emocional.",
        "Gestão de conflitos.",
        "Desenvolvimento de pessoas.",
        "Pensamento estratégico.",
        "Visão sistêmica.",
        "Organização.",
        "Gestão do tempo.",
        "Proatividade.",
        "Capacidade analítica.",
        "Adaptabilidade.",
        "Negociação.",
        "Influência positiva.",
        "Responsabilidade.",
        "Orientação para resultados.",
        "Trabalho em equipe.",
        "Foco na inovação.",
        "Melhoria contínua.",
      ],
      formacaoAcademica: "Ensino Superior completo em Audiovisual, Cinema, Rádio e TV, Publicidade e Propaganda, Produção Multimídia, Design ou áreas correlatas. Será considerado diferencial possuir Pós-graduação ou especialização em Gestão de Pessoas, Liderança, Produção Audiovisual, Gestão de Projetos, Comunicação ou áreas relacionadas.",
      tempoMinimoPromocao: null,
      provaConhecimentos: true,
    },
    {
      id: "coord",
      ordem: 5,
      nome: "Coordenador de Criação",
      objetivo:
        "O Coordenador de Criação é responsável por coordenar estrategicamente as áreas de Design Gráfico e " +
        "Audiovisual da ICOM TV, garantindo a excelência criativa, a integração entre as equipes e a evolução " +
        "contínua dos processos, pessoas e resultados. Atua na definição de diretrizes visuais, gestão de " +
        "indicadores, desenvolvimento de lideranças, inovação e planejamento das produções criativas, assegurando " +
        "que toda a comunicação da empresa fortaleça a marca ICOM TV e gere valor para seus clientes. " +
        "Este cargo coordena, ao mesmo tempo, as equipes de Criação e de Audiovisual — é o mesmo cargo em ambos os " +
        "planos de carreira.",
      competenciasEsperadas: [
        "Experiência consolidada em liderança de equipes criativas.",
        "Experiência em Design Gráfico, Audiovisual ou Comunicação Visual.",
        "Vivência em gestão de pessoas, indicadores e processos.",
        "Experiência em planejamento estratégico de campanhas.",
        "Gestão de projetos multidisciplinares.",
        "Desenvolvimento de lideranças.",
        "Implantação de melhorias operacionais.",
      ],
      responsabilidades: [
        "Coordenar as equipes de Design Gráfico e Audiovisual, garantindo alinhamento entre pessoas, processos e objetivos estratégicos.",
        "Desenvolver Supervisores e profissionais-chave, formando novas lideranças dentro da empresa.",
        "Definir os padrões de identidade visual, direção criativa e linguagem audiovisual da ICOM TV.",
        "Planejar e acompanhar a execução das campanhas institucionais, promocionais e estratégicas.",
        "Garantir a qualidade criativa e técnica de todas as entregas realizadas pelas equipes.",
        "Desenvolver indicadores de desempenho (KPIs) das áreas, acompanhando produtividade, qualidade, prazos e eficiência operacional.",
        "Elaborar planos de ação para melhoria contínua dos processos criativos.",
        "Promover inovação por meio da adoção de novas ferramentas, metodologias e tendências do mercado.",
        "Gerenciar recursos, prioridades e capacidade produtiva das equipes.",
        "Realizar reuniões periódicas com Supervisores para acompanhamento de indicadores, desenvolvimento das equipes e alinhamento estratégico.",
        "Trabalhar em conjunto com Comercial, Marketing, Relacionamento, Produção e Diretoria para desenvolver soluções criativas alinhadas aos objetivos do negócio.",
        "Participar do planejamento anual das campanhas da empresa.",
        "Estruturar processos, documentação, templates e padrões que aumentem a escalabilidade da operação.",
        "Atuar como responsável pela gestão das crises relacionadas às áreas de Criação e Audiovisual.",
        "Elaborar apresentações gerenciais, relatórios estratégicos e planos de desenvolvimento para a Diretoria.",
        "Disseminar a cultura organizacional, incentivando criatividade, colaboração, inovação e alta performance.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade criativa das entregas.",
          "A produtividade das equipes.",
          "A inovação nos materiais produzidos.",
          "O desenvolvimento das lideranças.",
          "A integração entre Design e Audiovisual.",
          "A percepção de valor da marca ICOM TV.",
          "A eficiência dos processos criativos.",
          "A satisfação dos clientes internos e externos.",
        ],
        garantir: [
          "Alinhamento estratégico entre Design e Audiovisual.",
          "Excelência técnica e criativa em todas as entregas.",
          "Cumprimento dos prazos.",
          "Padronização da identidade visual da empresa.",
          "Desenvolvimento contínuo dos colaboradores.",
          "Gestão eficiente dos indicadores.",
          "Comunicação integrada entre todas as áreas.",
        ],
        reduzir: [
          "Retrabalho.",
          "Gargalos operacionais.",
          "Reprovações de materiais.",
          "Erros de comunicação.",
          "Atrasos em projetos.",
          "Desperdício de recursos.",
          "Falhas nos processos internos.",
          "Dependência técnica de pessoas específicas.",
        ],
      },
      conhecimentosTecnicos: [
        "Domínio avançado do pacote Adobe (Photoshop, Illustrator, InDesign, Premiere Pro e After Effects).",
        "Branding e posicionamento de marca.",
        "Direção de arte.",
        "Storytelling e comunicação visual.",
        "Gestão de projetos.",
        "Gestão de indicadores (KPIs).",
        "Planejamento estratégico.",
        "Gestão de processos.",
        "Planejamento de campanhas.",
        "Liderança de equipes multidisciplinares.",
        "Pacote Office avançado (principalmente Excel e PowerPoint).",
        "Ferramentas de gestão de tarefas e colaboração.",
        "Conhecimento em Inteligência Artificial aplicada à criação de conteúdo será considerado diferencial.",
      ],
      comportamentosEsperados: [
        "Liderança estratégica.",
        "Visão sistêmica.",
        "Inteligência emocional.",
        "Comunicação clara e inspiradora.",
        "Desenvolvimento de pessoas.",
        "Gestão de conflitos.",
        "Pensamento estratégico.",
        "Criatividade.",
        "Inovação.",
        "Planejamento.",
        "Organização.",
        "Gestão do tempo.",
        "Capacidade analítica.",
        "Tomada de decisão.",
        "Negociação.",
        "Adaptabilidade.",
        "Influência positiva.",
        "Orientação para resultados.",
        "Colaboração.",
        "Melhoria contínua.",
        "Mentalidade de crescimento.",
      ],
      formacaoAcademica: "Ensino Superior completo em Design Gráfico, Design Digital, Publicidade e Propaganda, Marketing, Comunicação Social, Audiovisual, Cinema, Produção Multimídia ou áreas correlatas. Será considerado diferencial possuir Pós-graduação ou MBA em Gestão de Pessoas, Liderança, Gestão de Projetos, Branding, Comunicação Estratégica, Marketing ou áreas relacionadas.",
      tempoMinimoPromocao: null,
      provaConhecimentos: null,
    },
  ],

  // pesos: { jr, pl, sr, sup, coord } — 0 a 3
  questions: [
    { id: "av1",  texto: "Reviso cuidadosamente áudio, imagem e sincronização antes de entregar um vídeo.", categoria: "organizacao", pesos: { jr: 3, pl: 3, sr: 2, sup: 1, coord: 0 } },
    { id: "av2",  texto: "Consigo identificar problemas técnicos (erro de exportação, sincronização) antes que o cliente perceba.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 3, sup: 1, coord: 0 } },
    { id: "av3",  texto: "Mantenho meus arquivos e projetos de vídeo organizados e fáceis de reaproveitar.", categoria: "organizacao", pesos: { jr: 2, pl: 2, sr: 2, sup: 1, coord: 0 } },
    { id: "av4",  texto: "Busco referências e tendências audiovisuais para trazer soluções criativas diferenciadas.", categoria: "inovacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "av5",  texto: "Já propus um novo template, animação ou padrão audiovisual que passou a ser usado pela equipe.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3, coord: 2 } },
    { id: "av6",  texto: "Questiono processos de produção existentes buscando formas mais eficientes de editar e finalizar.", categoria: "inovacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 2, coord: 2 } },
    { id: "av7",  texto: "Produzo e edito vídeos de média complexidade sem precisar de validação constante da liderança.", categoria: "autonomia", pesos: { jr: 1, pl: 3, sr: 2, sup: 1, coord: 0 } },
    { id: "av8",  texto: "Assumo a responsabilidade por produções de clientes estratégicos ou projetos especiais.", categoria: "autonomia", pesos: { jr: 0, pl: 1, sr: 3, sup: 2, coord: 1 } },
    { id: "av9",  texto: "Cumpro prazos de entrega mesmo quando surgem imprevistos técnicos na produção.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "av10", texto: "Oriento colegas juniores sobre técnica de edição, motion graphics ou uso das ferramentas.", categoria: "lideranca", pesos: { jr: 0, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "av11", texto: "Aplico feedbacks estruturados e acompanho planos de desenvolvimento individual da equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 2 } },
    { id: "av12", texto: "Desenvolvo outras lideranças dentro da equipe, formando novos supervisores ou referências técnicas.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 2, coord: 3 } },
    { id: "av13", texto: "Contribuo para reduzir a rotatividade e aumentar o engajamento da equipe audiovisual.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 2 } },
    { id: "av14", texto: "Acompanho meus indicadores de produtividade e qualidade regularmente, não só quando cobrado.", categoria: "gestao", pesos: { jr: 1, pl: 2, sr: 2, sup: 3, coord: 2 } },
    { id: "av15", texto: "Uso dados de retrabalho e erros técnicos para identificar onde o processo de produção precisa melhorar.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "av16", texto: "Monitoro o cumprimento de prazos e indicadores de toda a equipe, não só das minhas entregas.", categoria: "gestao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 3 } },
    { id: "av17", texto: "Consigo explicar ao cliente ou a outro setor por que uma escolha técnica de edição foi feita de determinada forma.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "av18", texto: "Documento decisões de produção (formatos, exportação, padrões) para que outros colegas consigam seguir.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "av19", texto: "Represento a área de Audiovisual em reuniões com outros setores ou lideranças.", categoria: "comunicacao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 3 } },

    { id: "av20", texto: "Trabalho de forma integrada com Criação, Produção e Relacionamento para cumprir prazos de entrega.", categoria: "relacionamento", pesos: { jr: 2, pl: 2, sr: 2, sup: 2, coord: 2 } },
    { id: "av21", texto: "Ajudo a resolver problemas que envolvem mais de um setor (ex: Audiovisual e Criação juntos).", categoria: "relacionamento", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "av22", texto: "Construo relação de confiança com clientes internos que dependem das minhas entregas.", categoria: "relacionamento", pesos: { jr: 1, pl: 2, sr: 2, sup: 2, coord: 1 } },
    { id: "av23", texto: "Avalio diferentes soluções técnicas de edição antes de escolher a mais eficiente para o objetivo do cliente.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "av24", texto: "Sou procurado(a) por colegas para revisar produções mais complexas antes da publicação final.", categoria: "analise", pesos: { jr: 0, pl: 1, sr: 3, sup: 2, coord: 1 } },
    { id: "av25", texto: "Tomo decisões técnicas com segurança mesmo sob pressão de prazo (ex: falha de exportação de última hora).", categoria: "analise", pesos: { jr: 0, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "av26", texto: "Penso no impacto da minha produção na percepção de marca do cliente, não só na tarefa isolada.", categoria: "estrategia", pesos: { jr: 1, pl: 2, sr: 3, sup: 3, coord: 3 } },
    { id: "av27", texto: "Participo do planejamento anual ou estratégico de campanhas audiovisuais da empresa.", categoria: "estrategia", pesos: { jr: 0, pl: 0, sr: 1, sup: 2, coord: 3 } },
    { id: "av28", texto: "Consigo antecipar necessidades futuras de vídeos ou campanhas para os clientes.", categoria: "estrategia", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },

    { id: "av29", texto: "Assumo a responsabilidade quando uma produção minha sai com erro técnico, corrigindo rapidamente.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 2, sup: 2, coord: 1 } },
    { id: "av30", texto: "Atuo de forma preventiva, revisando produções antes que o problema chegue até o cliente.", categoria: "autonomia", pesos: { jr: 2, pl: 3, sr: 2, sup: 1, coord: 1 } },
    { id: "av31", texto: "Ajudo a padronizar fluxos de trabalho e templates que aumentam a produtividade de toda a equipe.", categoria: "organizacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3, coord: 2 } },
    { id: "av32", texto: "Consigo gerenciar múltiplas produções simultâneas sem perder a qualidade das entregas.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 2, sup: 1, coord: 0 } },
    { id: "av33", texto: "Sigo rigorosamente os padrões técnicos e de identidade audiovisual definidos pela empresa antes de inovar por conta própria.", categoria: "organizacao", pesos: { jr: 3, pl: 2, sr: 2, sup: 1, coord: 1 } },
    { id: "av34", texto: "Sei gerenciar uma situação crítica (ex: produção com problema técnico próximo do prazo) sem perder a qualidade.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 2 } },
    { id: "av35", texto: "Defino prioridades e distribuo demandas entre a equipe de forma equilibrada.", categoria: "gestao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 2 } },
    { id: "av36", texto: "Compartilho conhecimento e boas práticas de produção audiovisual com o time de forma espontânea.", categoria: "relacionamento", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "av37", texto: "Sinto-me responsável pelo resultado da equipe, não apenas pelas minhas próprias entregas.", categoria: "relacionamento", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "av38", texto: "Pesquiso novas ferramentas ou tecnologias audiovisuais que possam melhorar a operação.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 2, coord: 3 } },
    { id: "av39", texto: "Já implementei uma melhoria de processo que reduziu retrabalho ou aumentou a produtividade da equipe.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "av40", texto: "Conduzo reuniões de alinhamento com clareza e objetividade.", categoria: "comunicacao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 3 } },
  ],

  recomendacoesPorCategoria: {
    comunicacao: "Documente decisões técnicas de produção e pratique explicar escolhas de edição de forma clara para clientes e outros setores.",
    lideranca: "Ofereça-se para orientar colegas juniores em técnica de edição, motion graphics e uso das ferramentas.",
    organizacao: "Padronize sua forma de revisar produções antes da entrega e mantenha projetos e bibliotecas de mídia organizados.",
    estrategia: "Pense no impacto de cada produção na percepção de marca do cliente, não apenas na tarefa isolada.",
    analise: "Aprofunde a checagem preventiva de problemas técnicos (áudio, sincronização, exportação) antes de publicar.",
    relacionamento: "Fortaleça a integração com Criação, Produção e Relacionamento nas demandas que dependem de mais de um setor.",
    gestao: "Acompanhe indicadores de retrabalho e erros técnicos com mais regularidade, usando dados para embasar melhorias.",
    autonomia: "Assuma mais produções e projetos de maior complexidade sem esperar validação constante da liderança.",
    inovacao: "Pesquise novas ferramentas e tecnologias audiovisuais e proponha padrões que outros colegas possam reaproveitar.",
  },
};
