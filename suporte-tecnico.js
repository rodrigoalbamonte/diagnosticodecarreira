/**
 * Setor: Suporte Técnico
 * Fonte: "Competências Plano de Carreira suporte técnico ao cliente.xlsx".
 *
 * Observação: a planilha original rotulava os cargos como "Consultor Jr/Pl/Sr" e
 * "Supervisor" (aparentemente copiados do modelo de Relacionamento), mesmo o título
 * da matriz sendo "MATRIZ DE DESENVOLVIMENTO ANALISTAS" e as descrições sendo todas
 * de perfil técnico. Por decisão do gestor da área, os cargos foram renomeados aqui
 * para "Analista de Suporte Técnico" — o conteúdo (objetivo, atividades, desafios,
 * formação, tempo mínimo) é transcrito fielmente da planilha.
 *
 * Este setor tem apenas 4 níveis (não há Coordenador na planilha de origem).
 *
 * EDITE ESTE ARQUIVO PARA ATUALIZAR CARGOS, PERGUNTAS, PESOS E CONTEÚDO DA BIBLIOTECA
 * DE PLANO DE CARREIRA DESTE SETOR. Nenhuma alteração aqui afeta outros setores.
 */

const SETOR_SUPORTE_TECNICO = {
  id: "suporte-tecnico",
  nome: "Suporte Técnico",

  visaoGeral: {
    objetivo:
      "A área de Suporte Técnico garante o correto funcionamento dos equipamentos ICOM TV nos clientes — desde a " +
      "configuração e homologação até a instalação, ativação e resolução de chamados técnicos — assegurando a " +
      "continuidade do serviço e a estabilidade da operação.",
    responsabilidades: [
      "Configuração, homologação e validação de equipamentos ICOM TV antes da implantação.",
      "Instalação e ativação de novos pontos junto aos clientes.",
      "Diagnóstico e resolução de problemas técnicos de hardware, software, rede e conectividade.",
      "Gestão de estoque de equipamentos e insumos, e liderança/desenvolvimento da equipe técnica.",
    ],
    importancia:
      "A estabilidade dos equipamentos e serviços afeta diretamente a experiência do cliente e o trabalho de outras " +
      "áreas (Relacionamento, Produção) — falhas técnicas recorrentes geram retrabalho, reclamações e risco de " +
      "cancelamento em toda a cadeia.",
    competenciasValorizadas: ["Análise", "Organização", "Autonomia", "Gestão", "Inovação"],
  },

  cargos: [
    {
      id: "jr",
      ordem: 1,
      nome: "Analista de Suporte Técnico Jr",
      objetivo:
        "Responsável por prestar suporte técnico aos clientes da ICOM TV, realizando atendimentos de baixa e média " +
        "complexidade, garantindo o correto funcionamento dos equipamentos e a continuidade dos serviços. Atua " +
        "seguindo os processos estabelecidos pela empresa, buscando solucionar problemas com agilidade, qualidade e " +
        "foco na satisfação do cliente, ao mesmo tempo em que desenvolve seus conhecimentos técnicos e operacionais.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Configurar equipamentos ICOM TV para implantação em novos clientes.",
        "Realizar testes básicos de funcionamento antes do envio dos equipamentos.",
        "Efetuar instalações e ativações de novos pontos junto aos clientes.",
        "Atender chamados técnicos relacionados a equipamentos, conectividade e funcionamento do sistema.",
        "Executar atualizações de programação e configurações dos equipamentos.",
        "Registrar corretamente todas as atividades realizadas nos sistemas internos.",
        "Orientar clientes durante os atendimentos, utilizando comunicação clara e objetiva.",
        "Seguir os procedimentos e padrões definidos pelo setor.",
        "Apoiar na organização dos equipamentos e materiais do suporte técnico.",
        "Identificar situações que necessitem escalonamento para analistas mais experientes.",
        "Contribuir para a boa experiência do cliente durante todo o atendimento.",
      ],
      indicadores: {
        aumentar: [
          "O índice de clientes conectados e atualizados.",
          "A produtividade diária nos atendimentos.",
          "O conhecimento técnico sobre equipamentos e sistemas.",
        ],
        garantir: [
          "O cumprimento dos processos internos.",
          "A qualidade dos atendimentos realizados.",
          "A atualização correta das programações dos clientes.",
          "O bom funcionamento dos equipamentos enviados.",
        ],
        reduzir: [
          "O tempo de resposta aos chamados.",
          "Erros operacionais.",
          "Retrabalho nas configurações.",
          "Chamados recorrentes por falhas simples.",
        ],
      },
      conhecimentosTecnicos: [],
      formacaoAcademica: "Ensino Superior cursando ou concluído em Tecnologia da Informação, Sistemas de Informação, Ciência da Computação, Engenharia da Computação, Redes de Computadores, Eletrônica, Processos Gerenciais ou áreas correlatas.",
      tempoMinimoPromocao: "1 ano",
      provaConhecimentos: false,
    },
    {
      id: "pl",
      ordem: 2,
      nome: "Analista de Suporte Técnico Pleno",
      objetivo:
        "Responsável por executar atendimentos técnicos de média e alta complexidade, garantindo a continuidade dos " +
        "serviços da ICOM TV e a excelência na experiência do cliente. Atua com autonomia na resolução de problemas, " +
        "identifica oportunidades de melhoria nos processos, apoia o desenvolvimento dos analistas juniores e " +
        "contribui para o aumento da eficiência operacional do setor.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Configurar, validar e homologar equipamentos ICOM TV antes da implantação.",
        "Realizar instalações e configurações de novos pontos junto aos clientes.",
        "Diagnosticar e solucionar problemas técnicos relacionados a hardware, software, rede e conectividade.",
        "Executar análises técnicas para identificar a melhor solução antes da substituição de equipamentos.",
        "Gerenciar atualizações, configurações e sincronizações dos equipamentos na plataforma.",
        "Realizar atendimento ativo e receptivo com foco na resolução definitiva dos problemas.",
        "Apoiar os analistas juniores em dúvidas técnicas e operacionais.",
        "Participar da organização e controle do estoque de equipamentos e insumos.",
        "Identificar oportunidades de melhoria nos processos do setor.",
        "Participar da criação e atualização de procedimentos operacionais.",
        "Garantir o correto registro das atividades realizadas nos sistemas internos.",
        "Contribuir para o cumprimento dos indicadores de desempenho do setor.",
      ],
      indicadores: {
        aumentar: [
          "A eficiência operacional da equipe.",
          "O índice de resolução no primeiro atendimento.",
          "O conhecimento técnico aplicado às rotinas do setor.",
          "A produtividade individual.",
        ],
        garantir: [
          "A estabilidade dos equipamentos e serviços.",
          "O cumprimento dos prazos de atendimento.",
          "A qualidade técnica das soluções aplicadas.",
          "A padronização dos processos internos.",
        ],
        reduzir: [
          "Retrabalho operacional.",
          "Tempo médio de resolução dos chamados.",
          "Falhas recorrentes.",
          "Trocas desnecessárias de equipamentos.",
        ],
      },
      conhecimentosTecnicos: [],
      formacaoAcademica: "Ensino Superior cursando ou concluído em Tecnologia da Informação, Sistemas de Informação, Ciência da Computação, Engenharia da Computação, Redes de Computadores, Eletrônica, Processos Gerenciais ou áreas correlatas.",
      tempoMinimoPromocao: "1 ano e 6 meses",
      provaConhecimentos: true,
    },
    {
      id: "sr",
      ordem: 3,
      nome: "Analista de Suporte Técnico Sênior",
      objetivo:
        "Responsável por atuar como referência técnica do setor de Suporte Técnico, conduzindo atendimentos de alta " +
        "complexidade, apoiando o desenvolvimento da equipe e promovendo a melhoria contínua dos processos. Exerce " +
        "papel estratégico na estabilidade operacional da ICOM TV, garantindo a qualidade dos serviços prestados, " +
        "contribuindo para o alcance dos indicadores do setor e disseminando conhecimento técnico para elevar o " +
        "desempenho da equipe. Experiência sólida em suporte técnico, Help Desk ou Service Desk, atuando na " +
        "resolução de problemas complexos, melhoria de processos e apoio ao desenvolvimento técnico de equipes.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Configurar, homologar e validar equipamentos ICOM TV assegurando seu pleno funcionamento.",
        "Realizar instalações e configurações avançadas junto aos clientes.",
        "Diagnosticar e solucionar problemas técnicos de alta complexidade relacionados a hardware, software, conectividade e infraestrutura.",
        "Realizar análises técnicas aprofundadas antes da substituição de equipamentos, buscando sempre a solução mais eficiente.",
        "Monitorar e garantir a atualização das programações e sincronização dos equipamentos dos clientes.",
        "Atuar no gerenciamento de bloqueios, liberações, reativações e demais configurações do sistema.",
        "Prestar atendimento técnico especializado, garantindo agilidade, qualidade e excelência na experiência do cliente.",
        "Atuar como referência técnica para os Analistas Júnior e Pleno, orientando, acompanhando e apoiando na resolução de problemas complexos.",
        "Apoiar a integração e o desenvolvimento técnico de novos colaboradores.",
        "Participar da criação, revisão e padronização dos procedimentos operacionais.",
        "Propor melhorias que aumentem a produtividade, reduzam falhas e otimizem os processos do setor.",
        "Apoiar o Supervisor na análise de indicadores técnicos e operacionais.",
        "Auxiliar no controle de estoque e na gestão de equipamentos quando necessário.",
        "Garantir o correto registro das informações e atendimentos nos sistemas internos.",
        "Atuar de forma preventiva na identificação de riscos e oportunidades de melhoria da operação.",
      ],
      indicadores: {
        aumentar: [
          "A eficiência operacional do setor.",
          "O índice de resolução no primeiro atendimento.",
          "A disponibilidade dos equipamentos em operação.",
          "O nível técnico da equipe por meio do compartilhamento de conhecimento.",
          "A satisfação dos clientes com o suporte prestado.",
        ],
        garantir: [
          "A estabilidade dos serviços ICOM TV.",
          "O cumprimento dos processos internos.",
          "A qualidade técnica dos atendimentos.",
          "A padronização das operações.",
          "O cumprimento dos indicadores do setor.",
        ],
        reduzir: [
          "Retrabalho operacional.",
          "Tempo médio de resolução dos chamados.",
          "Falhas recorrentes.",
          "Trocas desnecessárias de equipamentos.",
          "Ocorrências críticas causadas por falhas operacionais.",
        ],
      },
      conhecimentosTecnicos: [],
      formacaoAcademica: "Ensino Superior completo em Tecnologia da Informação, Sistemas de Informação, Ciência da Computação, Engenharia da Computação, Redes de Computadores, Eletrônica, Processos Gerenciais ou áreas correlatas.",
      tempoMinimoPromocao: "2 Anos",
      provaConhecimentos: true,
    },
    {
      id: "sup",
      ordem: 4,
      nome: "Supervisor de Suporte Técnico",
      objetivo:
        "Responsável por liderar a equipe de Suporte Técnico, garantindo a eficiência operacional, a excelência no " +
        "atendimento ao cliente e o cumprimento dos indicadores estratégicos da área. Atua no desenvolvimento dos " +
        "colaboradores, na gestão dos processos e na implementação de melhorias contínuas, assegurando que o setor " +
        "opere de forma padronizada, produtiva e alinhada aos objetivos da ICOM TV.",
      competenciasEsperadas: [
        "Experiência consolidada em suporte técnico, Help Desk ou Service Desk.",
        "Experiência anterior em liderança de equipes.",
        "Vivência em gestão de indicadores, processos e desempenho.",
        "Experiência em desenvolvimento e treinamento de colaboradores.",
        "Vivência na implementação de melhorias operacionais.",
      ],
      responsabilidades: [
        "Liderar, acompanhar e desenvolver a equipe de Suporte Técnico, promovendo um ambiente colaborativo e de alta performance.",
        "Planejar, distribuir e acompanhar as atividades da equipe, garantindo equilíbrio da carga de trabalho e cumprimento dos prazos.",
        "Monitorar indicadores de desempenho, produtividade, qualidade, SLA e satisfação dos clientes.",
        "Realizar reuniões periódicas de alinhamento, acompanhamento de resultados e desenvolvimento da equipe.",
        "Aplicar feedbacks contínuos, avaliações de desempenho e planos de desenvolvimento individual (PDI).",
        "Conduzir a integração, treinamento e capacitação de novos colaboradores.",
        "Garantir o cumprimento dos processos, políticas e padrões operacionais da empresa.",
        "Identificar gargalos operacionais e implementar ações de melhoria contínua.",
        "Desenvolver, revisar e padronizar procedimentos internos do setor.",
        "Atuar em conjunto com outras áreas para solucionar problemas que impactem a experiência do cliente.",
        "Gerenciar o estoque de equipamentos e insumos, assegurando disponibilidade e controle dos ativos.",
        "Apoiar tecnicamente a equipe em situações de alta complexidade quando necessário.",
        "Participar da definição de metas, indicadores e estratégias do setor.",
        "Elaborar relatórios gerenciais e apresentar resultados à coordenação.",
        "Garantir a qualidade dos atendimentos e promover ações para melhoria da experiência do cliente.",
        "Assegurar o cumprimento da cultura organizacional, dos valores e das boas práticas da ICOM TV.",
      ],
      indicadores: {
        aumentar: [
          "A produtividade da equipe.",
          "O índice de resolução no primeiro atendimento.",
          "O nível técnico e comportamental dos colaboradores.",
          "A satisfação dos clientes.",
          "A eficiência operacional do setor.",
          "O engajamento e desenvolvimento da equipe.",
        ],
        garantir: [
          "O cumprimento dos SLAs estabelecidos.",
          "A qualidade dos atendimentos.",
          "O cumprimento das metas e indicadores.",
          "A padronização dos processos.",
          "A disponibilidade e funcionamento dos equipamentos.",
          "O alinhamento da equipe com a cultura da empresa.",
        ],
        reduzir: [
          "Retrabalho operacional.",
          "Tempo médio de atendimento e resolução.",
          "Reclamações de clientes.",
          "Falhas operacionais.",
          "Erros de processo.",
          "Rotatividade da equipe.",
          "Custos relacionados à operação.",
        ],
      },
      conhecimentosTecnicos: [
        "Excel intermediário/avançado.",
        "Ferramentas de gestão e indicadores.",
        "Sistemas internos da ICOM TV.",
        "Android avançado.",
        "Redes e conectividade.",
        "Hardware de equipamentos Android e Smart TVs.",
        "Gestão de processos.",
        "Gestão de estoque.",
        "Planejamento operacional.",
        "Análise de indicadores (KPIs).",
        "Elaboração de relatórios gerenciais.",
        "Metodologias de melhoria contínua.",
        "Gestão de projetos (desejável).",
      ],
      formacaoAcademica: "Ensino Superior completo em Tecnologia da Informação, Sistemas de Informação, Ciência da Computação, Engenharia da Computação, Redes de Computadores, Administração, Processos Gerenciais ou áreas correlatas. Pós-graduação ou cursos em Gestão de Pessoas, Liderança ou Gestão de Projetos serão considerados diferenciais.",
      tempoMinimoPromocao: null,
      provaConhecimentos: null,
    },
  ],

  // pesos: { jr, pl, sr, sup } — 0 a 3 (este setor não possui nível Coordenador)
  questions: [
    { id: "st1",  texto: "Oriento o cliente durante o atendimento técnico de forma clara, mesmo quando ele não tem conhecimento técnico.", categoria: "relacionamento", pesos: { jr: 3, pl: 3, sr: 2, sup: 1 } },
    { id: "st2",  texto: "Apoio colegas juniores em dúvidas técnicas e operacionais, mesmo sem ser minha obrigação formal.", categoria: "lideranca", pesos: { jr: 0, pl: 2, sr: 3, sup: 2 } },
    { id: "st3",  texto: "Trabalho de forma integrada com outras áreas (Relacionamento, Produção) para resolver problemas do cliente.", categoria: "relacionamento", pesos: { jr: 2, pl: 2, sr: 2, sup: 2 } },
    { id: "st4",  texto: "Já criei ou ajudei a criar materiais de treinamento técnico para a equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 2, sup: 3 } },
    { id: "st5",  texto: "Registro corretamente todas as atividades e atendimentos realizados nos sistemas internos.", categoria: "organizacao", pesos: { jr: 3, pl: 2, sr: 2, sup: 1 } },
    { id: "st6",  texto: "Acompanho meus indicadores de produtividade e qualidade de forma regular, não só quando cobrado.", categoria: "gestao", pesos: { jr: 1, pl: 2, sr: 2, sup: 3 } },
    { id: "st7",  texto: "Sei identificar quando devo escalonar um chamado para um colega mais experiente.", categoria: "autonomia", pesos: { jr: 3, pl: 2, sr: 1, sup: 1 } },
    { id: "st8",  texto: "Já propus uma mudança em um procedimento que reduziu falhas ou retrabalho no setor.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3 } },
    { id: "st9",  texto: "Consigo traduzir um problema técnico complexo em uma explicação simples para o cliente.", categoria: "comunicacao", pesos: { jr: 2, pl: 3, sr: 2, sup: 1 } },
    { id: "st10", texto: "Penso no impacto das minhas decisões técnicas na operação geral do setor, não só no chamado individual.", categoria: "estrategia", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "st11", texto: "Realizo testes de funcionamento antes de enviar ou entregar um equipamento ao cliente.", categoria: "autonomia", pesos: { jr: 3, pl: 2, sr: 1, sup: 1 } },
    { id: "st12", texto: "Tomo decisões técnicas com segurança mesmo sem ter certeza absoluta da causa do problema.", categoria: "analise", pesos: { jr: 0, pl: 2, sr: 3, sup: 2 } },
    { id: "st13", texto: "Consigo deixar o cliente tranquilo mesmo em situações de falha crítica do equipamento.", categoria: "relacionamento", pesos: { jr: 2, pl: 3, sr: 3, sup: 1 } },
    { id: "st14", texto: "Conduzo a integração e o treinamento técnico de novos colaboradores do time.", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "st15", texto: "Participo ativamente da organização e controle de estoque de equipamentos do setor.", categoria: "organizacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 3 } },
    { id: "st16", texto: "Uso dados de indicadores (SLA, resolução no primeiro atendimento) para embasar decisões.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "st17", texto: "Resolvo chamados técnicos de média complexidade sem precisar de supervisão constante.", categoria: "autonomia", pesos: { jr: 1, pl: 3, sr: 2, sup: 1 } },
    { id: "st18", texto: "Busco entender a causa de falhas recorrentes ao invés de apenas resolver o chamado do momento.", categoria: "inovacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },

    { id: "st19", texto: "Acompanho o atendimento até a resolução definitiva, sem deixar demandas em aberto.", categoria: "relacionamento", pesos: { jr: 2, pl: 3, sr: 3, sup: 2 } },
    { id: "st20", texto: "Aplico feedbacks estruturados para o desenvolvimento técnico e comportamental da equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "st21", texto: "Apoio tecnicamente outras áreas quando um problema técnico impacta o atendimento delas.", categoria: "relacionamento", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "st22", texto: "Contribuo para reduzir a rotatividade e aumentar o engajamento da equipe técnica.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "st23", texto: "Mantenho o controle de estoque de equipamentos e insumos organizado e atualizado.", categoria: "organizacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 3 } },
    { id: "st24", texto: "Monitoro o cumprimento de prazos e metas da equipe, não só das minhas próprias tarefas.", categoria: "gestao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "st25", texto: "Assumo a responsabilidade por atendimentos críticos mesmo sob pressão de prazo.", categoria: "autonomia", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "st26", texto: "Participo da criação ou revisão de procedimentos operacionais do setor.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "st27", texto: "Documento soluções técnicas de forma clara para que outros colegas consigam reaplicá-las.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "st28", texto: "Participo do planejamento de metas, indicadores ou estratégias do setor.", categoria: "estrategia", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "st29", texto: "Atuo de forma preventiva, identificando riscos antes que eles se tornem problemas para o cliente.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "st30", texto: "Avalio diferentes soluções técnicas antes de escolher a mais eficiente para o cliente.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "st31", texto: "Antes de trocar um equipamento, investigo a fundo se o problema pode ser resolvido por configuração.", categoria: "analise", pesos: { jr: 1, pl: 3, sr: 3, sup: 1 } },
    { id: "st32", texto: "Comunico proativamente à liderança quando identifico um risco operacional relevante.", categoria: "comunicacao", pesos: { jr: 1, pl: 1, sr: 2, sup: 3 } },
    { id: "st33", texto: "Represento o setor de Suporte Técnico em reuniões com outras áreas ou lideranças.", categoria: "relacionamento", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "st34", texto: "Avalio o custo-benefício antes de decidir entre reparar ou substituir um equipamento.", categoria: "estrategia", pesos: { jr: 0, pl: 2, sr: 3, sup: 2 } },
    { id: "st35", texto: "Assumo a responsabilidade quando um atendimento meu não resolve o problema, buscando corrigir rapidamente.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 2, sup: 2 } },
    { id: "st36", texto: "Consigo diagnosticar problemas de hardware, software e conectividade sem apoio de terceiros.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },

    { id: "st37", texto: "Sigo rigorosamente os procedimentos e padrões definidos pelo setor antes de agir por conta própria.", categoria: "organizacao", pesos: { jr: 3, pl: 2, sr: 1, sup: 1 } },
    { id: "st38", texto: "Sou procurado(a) por colegas para ajudar a resolver chamados técnicos mais complexos.", categoria: "analise", pesos: { jr: 0, pl: 1, sr: 3, sup: 2 } },
    { id: "st39", texto: "Consigo manter a qualidade do atendimento mesmo com alto volume de chamados simultâneos.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 2, sup: 1 } },
    { id: "st40", texto: "Sinto-me confortável em atuar em situações de alta pressão, como uma falha crítica afetando vários clientes.", categoria: "autonomia", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "st41", texto: "Questiono processos existentes buscando formas mais eficientes de configurar ou homologar equipamentos.", categoria: "inovacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 2 } },
    { id: "st42", texto: "Consigo antecipar necessidades futuras de equipamentos ou infraestrutura para os clientes.", categoria: "estrategia", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "st43", texto: "Garanto que a atualização de programações e sincronizações dos equipamentos dos clientes esteja sempre em dia.", categoria: "gestao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "st44", texto: "Ajudo a padronizar as melhores práticas técnicas para toda a equipe seguir.", categoria: "organizacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3 } },
    { id: "st45", texto: "Consigo conduzir reuniões técnicas de alinhamento com clareza e objetividade.", categoria: "comunicacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "st46", texto: "Planejo minhas atividades do dia considerando prioridades e prazos de SLA.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 2, sup: 2 } },
  ],

  recomendacoesPorCategoria: {
    comunicacao: "Documente soluções técnicas de forma clara e pratique explicar problemas complexos em linguagem simples para o cliente.",
    lideranca: "Ofereça-se para apoiar e treinar colegas juniores, e busque estruturar materiais de treinamento técnico.",
    organizacao: "Padronize sua forma de registrar atendimentos e mantenha o controle de estoque/insumos sempre atualizado.",
    estrategia: "Pense no impacto das suas decisões técnicas na operação geral do setor, não apenas no chamado individual.",
    analise: "Aprofunde o diagnóstico da causa raiz antes de substituir equipamentos ou fechar um chamado.",
    relacionamento: "Fortaleça a comunicação com outras áreas (Relacionamento, Produção) que dependem do seu suporte técnico.",
    gestao: "Acompanhe indicadores de SLA e produtividade com regularidade, usando dados para embasar decisões.",
    autonomia: "Assuma mais chamados de maior complexidade sem esperar validação constante da liderança.",
    inovacao: "Proponha melhorias de processo baseadas em padrões de falhas recorrentes que você identifica no dia a dia.",
  },
};
