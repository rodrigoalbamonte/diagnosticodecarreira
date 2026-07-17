/**
 * Setor: Produção
 * Fonte: "Competências Plano de Carreira produção.xlsx".
 *
 * Este setor tem 4 níveis (Analista Jr/Pleno/Sênior e Supervisor — sem Coordenador),
 * mesmo padrão do Suporte Técnico. O cargo de Supervisor desta planilha lidera de forma
 * integrada as equipes de Produção E Suporte Técnico (conforme descrito na própria
 * planilha de origem).
 *
 * EDITE ESTE ARQUIVO PARA ATUALIZAR CARGOS, PERGUNTAS, PESOS E CONTEÚDO DA BIBLIOTECA
 * DE PLANO DE CARREIRA DESTE SETOR. Nenhuma alteração aqui afeta outros setores.
 */

const SETOR_PRODUCAO = {
  id: "producao",
  nome: "Produção",

  visaoGeral: {
    objetivo:
      "A área de Produção é responsável por publicar, organizar e manter as programações exibidas nas TVs dos " +
      "clientes ICOM TV, garantindo qualidade visual, precisão e atualização constante dos conteúdos, playlists e " +
      "campanhas veiculadas.",
    responsabilidades: [
      "Criação, configuração e publicação de programações, playlists e campanhas nas TVs dos clientes.",
      "Revisão de conteúdos antes da publicação, garantindo qualidade visual e conformidade com os padrões da ICOM TV.",
      "Integração com Criação, Relacionamento e Suporte Técnico para garantir alinhamento e cumprimento de prazos.",
      "Liderança integrada das operações de Produção e Suporte Técnico, incluindo gestão de equipamentos e indicadores.",
    ],
    importancia:
      "A qualidade e a atualização das programações publicadas impactam diretamente a experiência do cliente nas " +
      "TVs — erros de publicação, atrasos ou inconsistências geram retrabalho e reclamações em toda a cadeia de " +
      "atendimento.",
    competenciasValorizadas: ["Organização", "Análise", "Gestão", "Autonomia", "Inovação"],
  },

  cargos: [
    {
      id: "jr",
      ordem: 1,
      nome: "Analista de Produção Júnior",
      objetivo:
        "O Analista de Produção Júnior é responsável por executar e acompanhar as atividades relacionadas à " +
        "publicação, organização e manutenção das programações exibidas nas TVs dos clientes da ICOM TV. Atua " +
        "garantindo que todos os conteúdos sejam revisados, configurados e publicados conforme os padrões de " +
        "qualidade da empresa, assegurando uma comunicação visual eficiente, organizada e alinhada aos objetivos de " +
        "cada cliente. Também é responsável por apoiar a organização dos processos internos e contribuir para uma " +
        "operação ágil, precisa e livre de erros.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Revisar conteúdos antes da publicação, verificando ortografia, qualidade das imagens, vídeos e demais materiais.",
        "Criar e configurar novas programações para clientes no sistema interno da ICOM TV.",
        "Realizar a implantação inicial das programações para novos clientes.",
        "Atualizar e manter as programações individuais das clínicas conforme as solicitações recebidas.",
        "Gerenciar campanhas, conteúdos institucionais, currículos profissionais, casos de sucesso e demais materiais exibidos nas TVs.",
        "Atualizar e manter as playlists musicais e programações padrão da ICOM TV.",
        "Garantir que as barras informativas e demais elementos visuais estejam corretamente configurados.",
        "Organizar e atualizar planilhas e controles internos relacionados à operação.",
        "Validar a qualidade das publicações antes da disponibilização aos clientes.",
        "Trabalhar de forma integrada com os setores de Criação, Relacionamento e Suporte Técnico para garantir o cumprimento dos prazos.",
        "Registrar corretamente as atividades realizadas e seguir os padrões operacionais da empresa.",
        "Contribuir para a organização e padronização dos processos do setor.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade das programações entregues aos clientes.",
          "A produtividade da operação.",
          "A precisão das publicações.",
          "A eficiência dos processos internos.",
        ],
        garantir: [
          "Que todas as programações sejam publicadas corretamente.",
          "O cumprimento dos prazos estabelecidos.",
          "A qualidade visual e técnica dos conteúdos.",
          "O alinhamento das programações com as solicitações dos clientes.",
          "A organização dos processos operacionais.",
        ],
        reduzir: [
          "Erros de publicação.",
          "Retrabalho.",
          "Falhas de configuração das programações.",
          "Atrasos nas entregas.",
          "Inconsistências entre a solicitação do cliente e a programação publicada.",
        ],
      },
      conhecimentosTecnicos: [],
      formacaoAcademica: "Ensino Superior cursando em Publicidade e Propaganda, Marketing, Rádio e TV, Audiovisual, Jornalismo, Produção Multimídia, Letras ou áreas correlatas.",
      tempoMinimoPromocao: "1 ano",
      provaConhecimentos: false,
    },
    {
      id: "pl",
      ordem: 2,
      nome: "Analista de Produção Pleno",
      objetivo:
        "O Analista de Produção Pleno é responsável por executar e gerenciar atividades de produção de conteúdo e " +
        "programação das TVs com autonomia, assegurando a qualidade, organização e eficiência operacional. Atua na " +
        "criação e manutenção das programações dos clientes, participa da melhoria contínua dos processos, " +
        "identifica oportunidades de otimização da operação e contribui para que todas as entregas atendam aos " +
        "padrões de qualidade da ICOM TV.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Gerenciar e atualizar as programações individuais dos clientes, garantindo alinhamento com suas necessidades e objetivos.",
        "Criar, configurar e publicar novas programações no sistema interno da ICOM TV.",
        "Inserir conteúdos para novos clientes conforme briefing e formulário de onboarding.",
        "Desenvolver programações para campanhas sazonais, promocionais e ações estratégicas.",
        "Revisar conteúdos, verificando ortografia, qualidade visual, padronização e conformidade antes da publicação.",
        "Administrar playlists musicais e garantir sua atualização conforme os padrões estabelecidos.",
        "Pesquisar e selecionar conteúdos audiovisuais adequados ao perfil dos clientes.",
        "Realizar manutenção das barras informativas e demais elementos da programação.",
        "Controlar e acompanhar demandas junto aos setores de Relacionamento, Criação e Suporte Técnico.",
        "Participar da criação, revisão e otimização dos processos operacionais do setor.",
        "Identificar oportunidades de melhoria na qualidade das entregas e na eficiência da operação.",
        "Garantir o correto registro das atividades e o cumprimento dos prazos estabelecidos.",
        "Apoiar tecnicamente os Analistas de Produção Júnior, compartilhando conhecimento e boas práticas.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade das programações entregues.",
          "A produtividade da equipe.",
          "A eficiência dos processos operacionais.",
          "A assertividade das publicações.",
          "O padrão de qualidade dos conteúdos exibidos.",
        ],
        garantir: [
          "Publicações corretas e livres de erros.",
          "Cumprimento dos prazos de produção.",
          "Padronização das programações.",
          "Alinhamento das entregas com as necessidades dos clientes.",
          "Integração eficiente entre Produção, Criação, Relacionamento e Suporte.",
        ],
        reduzir: [
          "Retrabalho.",
          "Erros de publicação.",
          "Inconsistências na programação.",
          "Atrasos nas entregas.",
          "Falhas de comunicação entre os setores.",
        ],
      },
      conhecimentosTecnicos: [],
      formacaoAcademica: "Ensino Superior cursando ou completo em Publicidade e Propaganda, Marketing, Rádio e TV, Audiovisual, Jornalismo, Produção Multimídia, Letras ou áreas correlatas.",
      tempoMinimoPromocao: "1 ano e 6 meses",
      provaConhecimentos: true,
    },
    {
      id: "sr",
      ordem: 3,
      nome: "Analista de Produção Sênior",
      objetivo:
        "O Analista de Produção Sênior é responsável por atuar como referência técnica da área de Produção, " +
        "garantindo a excelência na execução das programações, o cumprimento dos padrões de qualidade e a evolução " +
        "contínua dos processos. Além da gestão das demandas de maior complexidade, apoia o desenvolvimento técnico " +
        "da equipe, identifica oportunidades de melhoria operacional e contribui para que as entregas sejam " +
        "realizadas com eficiência, organização e alto padrão de qualidade, fortalecendo a experiência dos clientes " +
        "da ICOM TV.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Gerenciar e executar programações de alta complexidade, assegurando qualidade e precisão nas entregas.",
        "Atuar como referência técnica para os Analistas de Produção Júnior e Pleno, oferecendo orientação e suporte nas demandas da operação.",
        "Revisar conteúdos antes da publicação, garantindo conformidade com os padrões de qualidade, identidade visual e comunicação da ICOM TV.",
        "Criar e estruturar programações especiais, campanhas sazonais e conteúdos personalizados para clientes estratégicos.",
        "Garantir que todas as programações estejam atualizadas, organizadas e alinhadas às necessidades dos clientes.",
        "Liderar iniciativas de padronização, documentação e melhoria dos processos da Produção.",
        "Identificar gargalos operacionais e propor soluções que aumentem a produtividade e reduzam falhas.",
        "Apoiar a integração e o treinamento de novos colaboradores da área.",
        "Monitorar a qualidade das entregas da equipe, realizando análises preventivas para minimizar erros e retrabalho.",
        "Trabalhar em conjunto com os setores de Criação, Relacionamento e Suporte Técnico para garantir alinhamento e eficiência operacional.",
        "Participar de projetos de melhoria contínua e inovação dos processos da Produção.",
        "Garantir o correto registro das atividades e o cumprimento dos indicadores da área.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade das entregas da equipe.",
          "A produtividade da operação.",
          "O nível técnico dos colaboradores.",
          "A eficiência dos processos internos.",
          "A padronização das programações.",
          "A satisfação dos clientes com as entregas realizadas.",
        ],
        garantir: [
          "O cumprimento dos padrões de qualidade da ICOM TV.",
          "A excelência das programações publicadas.",
          "O alinhamento entre Produção, Criação, Relacionamento e Suporte.",
          "O cumprimento dos prazos estabelecidos.",
          "A evolução contínua dos processos operacionais.",
        ],
        reduzir: [
          "Retrabalho.",
          "Erros de publicação.",
          "Inconsistências nas programações.",
          "Falhas operacionais.",
          "Atrasos nas entregas.",
          "Problemas recorrentes na operação.",
        ],
      },
      conhecimentosTecnicos: [],
      formacaoAcademica: "Ensino Superior completo em Publicidade e Propaganda, Marketing, Rádio e TV, Audiovisual, Jornalismo, Produção Multimídia, Letras ou áreas correlatas. Especializações em Marketing de Conteúdo, Comunicação Digital, Produção Audiovisual ou Gestão de Processos serão consideradas diferenciais.",
      tempoMinimoPromocao: "2 anos",
      provaConhecimentos: true,
    },
    {
      id: "sup",
      ordem: 4,
      nome: "Supervisor de Produção",
      objetivo:
        "O Supervisor de Produção é responsável por liderar de forma integrada as operações dos setores de Produção " +
        "e Suporte Técnico da ICOM TV, garantindo a eficiência dos processos, a qualidade das entregas, o pleno " +
        "funcionamento da operação e a satisfação dos clientes. Atua na gestão de pessoas, indicadores e processos, " +
        "promovendo a integração entre as equipes, eliminando gargalos operacionais e assegurando que os conteúdos " +
        "produzidos sejam publicados corretamente e permaneçam disponíveis nas TVs dos clientes. Também é " +
        "responsável por desenvolver a equipe, fortalecer a cultura organizacional e impulsionar a melhoria " +
        "contínua da operação.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Liderar e desenvolver as equipes de Produção e Suporte Técnico, promovendo uma cultura de colaboração, responsabilidade e alta performance.",
        "Acompanhar diariamente os indicadores operacionais das duas áreas, garantindo produtividade, qualidade e cumprimento dos prazos.",
        "Planejar, distribuir e acompanhar as demandas entre Produção e Suporte, equilibrando a capacidade operacional das equipes.",
        "Monitorar a qualidade das programações publicadas e o funcionamento dos equipamentos instalados nos clientes.",
        "Garantir que os processos operacionais sejam executados conforme os padrões estabelecidos pela ICOM TV.",
        "Identificar gargalos operacionais e implementar melhorias que aumentem a eficiência da operação.",
        "Atuar na resolução de problemas críticos que envolvam Produção, Suporte Técnico ou integração entre setores.",
        "Promover reuniões de alinhamento, acompanhamento e desenvolvimento das equipes.",
        "Aplicar feedbacks, avaliações de desempenho e acompanhar os Planos de Desenvolvimento Individual (PDIs).",
        "Desenvolver treinamentos técnicos e comportamentais para evolução contínua dos colaboradores.",
        "Garantir a organização do estoque de equipamentos, insumos e materiais operacionais.",
        "Acompanhar processos de instalação, manutenção, substituição e atualização dos equipamentos da ICOM TV.",
        "Garantir a qualidade das publicações, programações, playlists e campanhas exibidas nas TVs.",
        "Elaborar relatórios gerenciais e apresentar indicadores, análises e planos de ação à Coordenação.",
        "Trabalhar em conjunto com Relacionamento, Criação, Comercial e demais setores para assegurar uma operação integrada.",
        "Disseminar a cultura organizacional, os valores e as boas práticas da empresa.",
      ],
      indicadores: {
        aumentar: [
          "A produtividade das equipes.",
          "A qualidade das entregas.",
          "A disponibilidade das TVs e equipamentos.",
          "A eficiência operacional.",
          "A integração entre Produção e Suporte.",
          "O desenvolvimento técnico das equipes.",
          "A satisfação dos clientes.",
        ],
        garantir: [
          "Funcionamento pleno da operação.",
          "Cumprimento dos indicadores operacionais.",
          "Publicações corretas e dentro dos padrões.",
          "Agilidade na resolução de problemas técnicos.",
          "Organização dos processos internos.",
          "Comunicação eficiente entre os setores.",
          "Desenvolvimento contínuo das equipes.",
        ],
        reduzir: [
          "Retrabalho operacional.",
          "Erros de programação.",
          "Falhas técnicas recorrentes.",
          "Tempo de resposta.",
          "Tempo de resolução de chamados.",
          "Atrasos nas entregas.",
          "Perdas de equipamentos.",
          "Reclamações dos clientes.",
          "Ineficiências operacionais.",
        ],
      },
      conhecimentosTecnicos: [],
      formacaoAcademica: "Ensino Superior completo em Tecnologia da Informação, Engenharia da Computação, Sistemas de Informação, Administração, Processos Gerenciais, Marketing, Publicidade e Propaganda, Audiovisual, Produção Multimídia ou áreas correlatas. Será considerado diferencial possuir Pós-graduação em Gestão de Pessoas, Gestão de Processos, Gestão de Operações, Liderança ou áreas relacionadas.",
      tempoMinimoPromocao: "2 Anos",
      provaConhecimentos: true,
    },
  ],

  // pesos: { jr, pl, sr, sup } — 0 a 3 (este setor não possui nível Coordenador)
  questions: [
    { id: "pr1",  texto: "Reviso cuidadosamente ortografia, qualidade de imagens e vídeos antes de publicar uma programação.", categoria: "organizacao", pesos: { jr: 3, pl: 3, sr: 2, sup: 1 } },
    { id: "pr2",  texto: "Faço uma checagem preventiva das publicações para evitar erros antes que o cliente perceba.", categoria: "analise", pesos: { jr: 2, pl: 3, sr: 3, sup: 1 } },
    { id: "pr3",  texto: "Atualizo e mantenho as programações da minha carteira de clientes sem precisar de lembretes.", categoria: "autonomia", pesos: { jr: 2, pl: 3, sr: 2, sup: 1 } },
    { id: "pr4",  texto: "Trabalho de forma integrada com Criação, Relacionamento e Suporte Técnico para cumprir os prazos das entregas.", categoria: "relacionamento", pesos: { jr: 2, pl: 2, sr: 2, sup: 2 } },
    { id: "pr5",  texto: "Oriento colegas juniores sobre como configurar ou revisar uma programação corretamente.", categoria: "lideranca", pesos: { jr: 0, pl: 2, sr: 3, sup: 2 } },
    { id: "pr6",  texto: "Acompanho meus indicadores de produtividade e qualidade regularmente, não só quando cobrado.", categoria: "gestao", pesos: { jr: 1, pl: 2, sr: 2, sup: 3 } },
    { id: "pr7",  texto: "Já propus uma mudança em processo de produção que reduziu erros ou retrabalho.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3 } },
    { id: "pr8",  texto: "Participo do acompanhamento de instalação, manutenção ou substituição de equipamentos da operação.", categoria: "organizacao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "pr9",  texto: "Consigo explicar de forma simples para o cliente por que uma programação precisou de ajuste.", categoria: "comunicacao", pesos: { jr: 2, pl: 2, sr: 2, sup: 1 } },
    { id: "pr10", texto: "Penso no impacto das minhas decisões de programação na experiência geral do cliente, não só na tarefa isolada.", categoria: "estrategia", pesos: { jr: 1, pl: 2, sr: 3, sup: 3 } },
    { id: "pr11", texto: "Assumo a responsabilidade quando uma publicação minha sai errada, corrigindo rapidamente.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 2, sup: 2 } },
    { id: "pr12", texto: "Tomo decisões rápidas sobre como resolver um problema de programação sob pressão de prazo.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "pr13", texto: "Consigo manter a qualidade das entregas mesmo com alto volume de demandas simultâneas.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 2, sup: 1 } },
    { id: "pr14", texto: "Sinto-me responsável pelo resultado da operação como um todo, não apenas pelas minhas entregas individuais.", categoria: "autonomia", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "pr15", texto: "Consigo antecipar necessidades futuras de conteúdo ou campanhas para os clientes.", categoria: "estrategia", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "pr16", texto: "Ajudo a padronizar as melhores práticas de produção para toda a equipe seguir.", categoria: "organizacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3 } },
    { id: "pr17", texto: "Conduzo reuniões de alinhamento com clareza e objetividade.", categoria: "comunicacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "pr18", texto: "Contribuo para reduzir a rotatividade e aumentar o engajamento da equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },

    { id: "pr19", texto: "Consigo identificar inconsistências entre o que o cliente pediu e o que foi programado antes de publicar.", categoria: "analise", pesos: { jr: 2, pl: 3, sr: 2, sup: 1 } },
    { id: "pr20", texto: "Apoio a integração e o treinamento técnico de novos colaboradores da equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "pr21", texto: "Uso dados de erros e retrabalho para identificar onde a operação precisa melhorar.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "pr22", texto: "Participo da criação ou revisão de processos operacionais do setor.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "pr23", texto: "Garanto a organização do estoque de materiais e insumos operacionais sob minha responsabilidade.", categoria: "organizacao", pesos: { jr: 0, pl: 1, sr: 1, sup: 3 } },
    { id: "pr24", texto: "Documento decisões e ajustes de programação de forma clara para outros colegas entenderem.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "pr25", texto: "Atuo de forma preventiva, revisando programações antes que o problema chegue até o cliente.", categoria: "autonomia", pesos: { jr: 2, pl: 3, sr: 2, sup: 1 } },
    { id: "pr26", texto: "Avalio diferentes formas de resolver uma demanda de produção antes de escolher a mais eficiente.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },

    { id: "pr27", texto: "Sigo rigorosamente os padrões de identidade visual e comunicação da ICOM TV antes de publicar qualquer conteúdo.", categoria: "organizacao", pesos: { jr: 3, pl: 2, sr: 2, sup: 1 } },
    { id: "pr28", texto: "Sou procurado(a) por colegas para revisar entregas mais complexas antes da publicação final.", categoria: "analise", pesos: { jr: 0, pl: 1, sr: 3, sup: 2 } },
    { id: "pr29", texto: "Resolvo demandas de programação com autonomia, sem precisar validar cada publicação com a liderança.", categoria: "autonomia", pesos: { jr: 1, pl: 3, sr: 2, sup: 1 } },
    { id: "pr30", texto: "Assumo responsabilidade por campanhas e programações especiais de clientes estratégicos.", categoria: "autonomia", pesos: { jr: 0, pl: 1, sr: 3, sup: 2 } },
    { id: "pr31", texto: "Comunico claramente aos outros setores quando uma demanda não pode ser cumprida no prazo original.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 3 } },
    { id: "pr32", texto: "Ajudo a resolver problemas que envolvem mais de um setor (ex: Produção e Suporte Técnico juntos).", categoria: "relacionamento", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "pr33", texto: "Aplico feedbacks estruturados e acompanho planos de desenvolvimento individual da equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "pr34", texto: "Monitoro o cumprimento de prazos e indicadores de toda a equipe, não só das minhas entregas.", categoria: "gestao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "pr35", texto: "Questiono processos existentes buscando formas mais eficientes de publicar e organizar conteúdos.", categoria: "inovacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 2 } },
    { id: "pr36", texto: "Participo do planejamento de metas, indicadores ou melhorias estratégicas do setor.", categoria: "estrategia", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "pr37", texto: "Cumpro prazos de entrega mesmo quando surgem imprevistos na operação.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 3, sup: 2 } },
    { id: "pr38", texto: "Represento a área de Produção em reuniões com outros setores ou lideranças.", categoria: "comunicacao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "pr39", texto: "Consigo gerenciar múltiplas programações de clientes diferentes sem perder a qualidade das entregas.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 3, sup: 1 } },
    { id: "pr40", texto: "Lidero iniciativas de padronização e documentação de processos que outros colegas passam a seguir.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3 } },
  ],

  recomendacoesPorCategoria: {
    comunicacao: "Documente decisões e ajustes de programação de forma clara e pratique explicar mudanças ao cliente de forma simples.",
    lideranca: "Ofereça-se para orientar colegas juniores na revisão e configuração de programações mais complexas.",
    organizacao: "Padronize sua forma de revisar conteúdos antes da publicação e mantenha controles internos sempre atualizados.",
    estrategia: "Pense no impacto das suas decisões de programação na experiência geral do cliente, não apenas na tarefa isolada.",
    analise: "Aprofunde a checagem preventiva de inconsistências antes de publicar, evitando que erros cheguem ao cliente.",
    relacionamento: "Fortaleça a integração com Criação, Relacionamento e Suporte Técnico nas demandas que dependem de mais de um setor.",
    gestao: "Acompanhe indicadores de qualidade e retrabalho com mais regularidade, usando dados para embasar melhorias.",
    autonomia: "Assuma mais campanhas e programações de maior complexidade sem esperar validação constante da liderança.",
    inovacao: "Proponha melhorias de processo baseadas em padrões de erros ou retrabalho que você identifica no dia a dia.",
  },
};
