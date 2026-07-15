/**
 * Setor: Relacionamento com Cliente
 * Fonte: "Competências Plano de Carreira atendimento ao cliente.xlsx" (versão atualizada).
 *
 * EDITE ESTE ARQUIVO PARA ATUALIZAR CARGOS, PERGUNTAS, PESOS E CONTEÚDO DA BIBLIOTECA
 * DE PLANO DE CARREIRA DESTE SETOR. Nenhuma alteração aqui afeta outros setores.
 *
 * Perguntas: cada uma tem `pesos` (0 a 3) para cada id de cargo deste setor
 * (jr, pl, sr, sup, coord) e uma `categoria` (uma das chaves de CATEGORIAS em
 * js/shared-data.js, usada no radar). Resposta vale 0 (Nunca) a 4 (Sempre).
 * % de aderência de um cargo = soma(resposta × peso) / soma(4 × peso), só nas
 * perguntas com peso > 0 para aquele cargo.
 */

const SETOR_RELACIONAMENTO = {
  id: "relacionamento",
  nome: "Relacionamento com Cliente",

  visaoGeral: {
    objetivo:
      "A área de Relacionamento com Cliente é o principal canal de comunicação entre a ICOM TV e sua base de clientes, " +
      "responsável por garantir uma experiência positiva, consultiva e humanizada em toda a jornada — do onboarding à " +
      "fidelização de longo prazo.",
    responsabilidades: [
      "Gestão de carteiras de clientes, do atendimento inicial ao acompanhamento estratégico de contas Prime.",
      "Direcionamento de solicitações aos setores responsáveis (Criação, Produção, Suporte Técnico).",
      "Definição e acompanhamento de estratégias de retenção, satisfação e crescimento da base de clientes.",
      "Desenvolvimento das lideranças e da cultura organizacional dentro do setor.",
    ],
    importancia:
      "É a área que sustenta a retenção e a percepção de valor dos clientes ICOM TV — cancelamentos, reclamações e a " +
      "satisfação medida em indicadores como NPS e CSAT dependem diretamente da qualidade do trabalho deste time.",
    competenciasValorizadas: ["Relacionamento", "Comunicação", "Organização", "Gestão", "Liderança"],
  },

  cargos: [
    {
      id: "jr",
      ordem: 1,
      nome: "Consultor Jr",
      objetivo:
        "O Analista de Relacionamento Júnior é responsável por garantir uma comunicação clara, ágil e eficiente entre " +
        "os clientes e a ICOM TV, atuando como o principal ponto de contato para acompanhamento das demandas, " +
        "esclarecimento de dúvidas e direcionamento das solicitações aos setores responsáveis. Seu papel é assegurar " +
        "que o cliente tenha uma experiência positiva desde o início da jornada, mantendo as informações organizadas, " +
        "acompanhando as entregas e contribuindo para a fidelização por meio de um atendimento humanizado e de excelência.",
      competenciasEsperadas: [
        "Desejável experiência em atendimento ao cliente, relacionamento, pós-venda, Customer Service, recepção ou áreas correlatas.",
      ],
      responsabilidades: [
        "Gerenciar uma carteira de clientes, realizando contatos ativos para acompanhamento do serviço e fortalecimento do relacionamento.",
        "Atender clientes por WhatsApp, ligações e demais canais oficiais de atendimento.",
        "Conduzir reuniões virtuais quando necessário para alinhamento de demandas e orientações.",
        "Apoiar o processo de onboarding de novos clientes, garantindo uma experiência organizada e acolhedora.",
        "Identificar as necessidades dos clientes e direcionar corretamente as demandas aos setores responsáveis.",
        "Acompanhar as solicitações até sua conclusão, mantendo o cliente informado durante todo o processo.",
        "Atualizar e manter organizadas as informações dos clientes nos sistemas internos.",
        "Garantir que a programação das TVs esteja alinhada às necessidades e expectativas de cada cliente.",
        "Solicitar e organizar os materiais necessários para atendimento das demandas junto aos clientes.",
        "Trabalhar de forma integrada com os setores de Criação, Produção e Suporte Técnico.",
        "Garantir o cumprimento dos prazos de resposta estabelecidos pela empresa.",
        "Registrar corretamente todas as interações realizadas com os clientes.",
        "Contribuir para a satisfação, retenção e fidelização da carteira de clientes.",
      ],
      indicadores: {
        aumentar: [
          "O engajamento dos clientes com os serviços da ICOM TV.",
          "O nível de satisfação da carteira de clientes.",
          "A utilização dos serviços e soluções oferecidas pela empresa.",
          "A qualidade do relacionamento com os clientes.",
        ],
        garantir: [
          "Atendimento humanizado, consultivo e ágil.",
          "Comunicação clara entre cliente e equipe interna.",
          "Atualização constante das informações dos clientes.",
          "Cumprimento dos prazos de atendimento.",
          "Organização das demandas da carteira.",
        ],
        reduzir: [
          "Tempo de resposta aos clientes.",
          "Retrabalho causado por informações incompletas.",
          "Falhas de comunicação entre setores.",
          "Reclamações relacionadas ao atendimento.",
          "Cancelamentos ocasionados por falta de acompanhamento.",
        ],
      },
      formacaoAcademica: "Ensino Superior cursando em Marketing, Publicidade e Propaganda, Jornalismo, Relações Públicas, Administração, Gestão Comercial ou áreas correlatas.",
      tempoMinimoPromocao: "1 ano",
      provaConhecimentos: false,
    },
    {
      id: "pl",
      ordem: 2,
      nome: "Consultor Pleno",
      objetivo:
        "O Analista de Relacionamento Pleno é responsável por gerenciar sua carteira de clientes de forma consultiva, " +
        "identificando oportunidades de melhoria, fortalecendo o relacionamento e garantindo uma experiência de " +
        "excelência. Atua com autonomia na condução das demandas, realiza o onboarding de novos clientes, propõe " +
        "soluções alinhadas aos objetivos de cada clínica e trabalha de forma integrada com os demais setores para " +
        "assegurar a entrega de valor e a fidelização dos clientes.",
      competenciasEsperadas: [
        "Experiência em atendimento ao cliente, relacionamento, Customer Success, pós-venda ou áreas correlatas, atuando na gestão de carteira e resolução de demandas com autonomia.",
      ],
      responsabilidades: [
        "Gerenciar uma carteira de clientes, mantendo relacionamento ativo e acompanhamento contínuo.",
        "Realizar contatos consultivos para identificar necessidades, oportunidades e possíveis riscos de insatisfação.",
        "Conduzir reuniões de onboarding e alinhamento estratégico com novos clientes.",
        "Elaborar sugestões de campanhas e ações que contribuam para melhores resultados dos clientes.",
        "Garantir que a programação das TVs esteja sempre atualizada, estratégica e alinhada aos objetivos da clínica.",
        "Identificar oportunidades de utilização de novos produtos e serviços da ICOM TV.",
        "Atuar como elo entre clientes e equipes internas, garantindo clareza e eficiência na comunicação.",
        "Registrar, acompanhar e garantir a conclusão das demandas dentro dos prazos estabelecidos.",
        "Antecipar possíveis problemas e atuar preventivamente para evitar impactos na experiência do cliente.",
        "Apoiar os Analistas Júnior no esclarecimento de dúvidas e compartilhamento de boas práticas.",
        "Contribuir para a melhoria dos processos internos do setor.",
        "Manter atualizadas todas as informações da carteira nos sistemas internos.",
        "Trabalhar para aumentar o engajamento, retenção e satisfação dos clientes.",
      ],
      indicadores: {
        aumentar: [
          "O engajamento dos clientes com os serviços da ICOM TV.",
          "A retenção e fidelização da carteira.",
          "A percepção de valor dos serviços oferecidos.",
          "O número de clientes utilizando campanhas e soluções estratégicas.",
          "A eficiência dos processos de relacionamento.",
        ],
        garantir: [
          "Atendimento consultivo, ágil e personalizado.",
          "Comunicação clara entre cliente e equipes internas.",
          "Cumprimento dos prazos de atendimento.",
          "Qualidade das entregas realizadas.",
          "Organização das informações da carteira.",
        ],
        reduzir: [
          "Reclamações e insatisfações dos clientes.",
          "Tempo de resolução das demandas.",
          "Retrabalho ocasionado por falhas de comunicação.",
          "Cancelamentos relacionados à experiência do cliente.",
          "Demandas recorrentes por falta de acompanhamento.",
        ],
      },
      formacaoAcademica: "Ensino Superior cursando ou concluído em Marketing, Publicidade e Propaganda, Jornalismo, Relações Públicas, Administração, Gestão Comercial ou áreas correlatas.",
      tempoMinimoPromocao: "1 ano e 6 meses",
      provaConhecimentos: true,
    },
    {
      id: "sr",
      ordem: 3,
      nome: "Consultor Sênior",
      objetivo:
        "O Analista de Relacionamento Sênior é responsável por atuar como referência técnica e consultiva do setor de " +
        "Relacionamento, gerenciando clientes estratégicos e de alta complexidade, promovendo uma experiência " +
        "excepcional e fortalecendo a parceria entre os clientes e a ICOM TV. Além da gestão de sua carteira, apoia o " +
        "desenvolvimento dos Analistas Júnior e Pleno, contribui para a melhoria contínua dos processos e atua de " +
        "forma estratégica para aumentar a retenção, satisfação e geração de resultados para os clientes.",
      competenciasEsperadas: [
        "Experiência consolidada de 3 a 5 anos em atendimento ao cliente, relacionamento, Customer Success, pós-venda ou áreas correlatas, com atuação em gestão de carteiras estratégicas, retenção de clientes e desenvolvimento de soluções consultivas.",
      ],
      responsabilidades: [
        "Gerenciar uma carteira de clientes estratégicos e de maior complexidade, garantindo relacionamento próximo e consultivo.",
        "Atender clientes Prime e acompanhar casos críticos ou que demandem maior atenção.",
        "Conduzir reuniões estratégicas para compreender objetivos, identificar oportunidades e fortalecer a parceria com os clientes.",
        "Desenvolver estratégias e campanhas que contribuam para o aumento dos resultados obtidos pelos clientes através da ICOM TV.",
        "Analisar indicadores de desempenho da carteira, propondo ações para retenção, engajamento e crescimento dos clientes.",
        "Garantir que toda a programação das TVs esteja atualizada, estratégica e alinhada às necessidades de cada cliente.",
        "Atuar como elo entre clientes e equipes internas, assegurando agilidade, clareza e qualidade na comunicação.",
        "Acompanhar as demandas até sua conclusão, garantindo excelência nas entregas.",
        "Apoiar tecnicamente os Analistas Júnior e Pleno, compartilhando conhecimento e boas práticas.",
        "Participar da criação, revisão e melhoria dos processos do setor.",
        "Identificar oportunidades de otimização da jornada do cliente e propor ações para melhoria da experiência.",
        "Manter atualizadas todas as informações da carteira nos sistemas internos.",
        "Atuar preventivamente na identificação de riscos de cancelamento e desenvolver planos de ação para retenção.",
        "Representar o setor em projetos internos relacionados à experiência do cliente e melhoria operacional.",
      ],
      indicadores: {
        aumentar: [
          "A satisfação e fidelização dos clientes.",
          "O engajamento dos clientes com os serviços da ICOM TV.",
          "A percepção de valor da solução.",
          "Os resultados obtidos pelos clientes por meio das estratégias desenvolvidas.",
          "O nível técnico e consultivo da equipe através do compartilhamento de conhecimento.",
        ],
        garantir: [
          "Atendimento consultivo de excelência.",
          "Comunicação clara, segura e eficiente com clientes e equipes internas.",
          "Cumprimento dos indicadores de retenção, satisfação e qualidade.",
          "Acompanhamento estratégico da carteira.",
          "Padronização das melhores práticas do setor.",
        ],
        reduzir: [
          "Cancelamentos por insatisfação.",
          "Tempo de resolução de demandas críticas.",
          "Reclamações recorrentes.",
          "Retrabalho causado por falhas de comunicação.",
          "Problemas relacionados à experiência do cliente.",
        ],
      },
      formacaoAcademica: "Ensino Superior completo em Marketing, Publicidade e Propaganda, Jornalismo, Relações Públicas, Administração, Gestão Comercial ou áreas correlatas. Pós-graduação ou especializações em Customer Success, Marketing, Gestão Comercial ou áreas relacionadas serão consideradas diferenciais.",
      tempoMinimoPromocao: "2 anos",
      provaConhecimentos: true,
    },
    {
      id: "sup",
      ordem: 4,
      nome: "Supervisor",
      objetivo:
        "O Supervisor de Relacionamento é responsável por liderar, desenvolver e acompanhar a equipe de Relacionamento " +
        "com o Cliente, garantindo a excelência no atendimento, a satisfação dos clientes e o alcance dos indicadores " +
        "estratégicos da área. Atua na gestão de pessoas, processos e resultados, promovendo um ambiente colaborativo, " +
        "produtivo e alinhado aos valores da ICOM TV. Também é responsável por identificar oportunidades de melhoria, " +
        "otimizar processos internos e fortalecer a integração entre os setores para proporcionar uma experiência " +
        "cada vez melhor aos clientes.",
      competenciasEsperadas: [
        "Experiência consolidada em atendimento ao cliente, Customer Success, Relacionamento ou Pós-venda.",
        "Experiência em liderança e desenvolvimento de equipes.",
        "Vivência em gestão de indicadores, processos e produtividade.",
        "Experiência na implementação de melhorias operacionais.",
        "Experiência na gestão de conflitos e relacionamento com clientes estratégicos.",
      ],
      responsabilidades: [
        "Liderar, desenvolver e acompanhar o desempenho da equipe de Relacionamento.",
        "Planejar, distribuir e acompanhar as atividades da equipe, garantindo equilíbrio da operação e cumprimento dos prazos.",
        "Realizar reuniões individuais e coletivas de acompanhamento, alinhamento e desenvolvimento.",
        "Aplicar feedbacks contínuos, avaliações de desempenho e acompanhar os Planos de Desenvolvimento Individual (PDI).",
        "Identificar necessidades de treinamento e promover o desenvolvimento técnico e comportamental da equipe.",
        "Monitorar indicadores de produtividade, qualidade, satisfação, retenção e desempenho da área.",
        "Garantir o cumprimento dos processos, políticas e padrões de atendimento da empresa.",
        "Atuar na resolução de conflitos internos e apoiar a equipe em atendimentos críticos ou clientes estratégicos.",
        "Identificar gargalos operacionais e implementar ações de melhoria contínua.",
        "Padronizar processos e garantir a qualidade das entregas realizadas pela equipe.",
        "Promover integração entre Relacionamento, Criação, Produção, Suporte Técnico e demais setores.",
        "Gerenciar grupos de comunicação, bases de clientes e fluxos operacionais da área.",
        "Elaborar relatórios gerenciais e apresentar indicadores e planos de ação à Coordenação.",
        "Garantir a disseminação da cultura organizacional, dos valores e das boas práticas da ICOM TV.",
        "Atuar como referência para o time, promovendo um ambiente de confiança, colaboração e alta performance.",
      ],
      indicadores: {
        aumentar: [
          "A produtividade e eficiência da equipe.",
          "A satisfação e retenção dos clientes.",
          "O engajamento dos colaboradores.",
          "A qualidade dos atendimentos.",
          "A integração entre os setores.",
          "A evolução técnica e comportamental da equipe.",
        ],
        garantir: [
          "O cumprimento dos indicadores e metas da área.",
          "Atendimento consultivo, humanizado e de excelência.",
          "Comunicação clara e eficiente entre equipes.",
          "Padronização dos processos.",
          "Desenvolvimento contínuo dos colaboradores.",
          "A disseminação da cultura organizacional.",
        ],
        reduzir: [
          "Cancelamentos de clientes.",
          "Reclamações relacionadas ao atendimento.",
          "Retrabalho operacional.",
          "Falhas de comunicação entre setores.",
          "Tempo de resposta às demandas.",
          "Conflitos internos.",
          "Erros operacionais.",
        ],
      },
      formacaoAcademica: "Ensino Superior completo em Marketing, Publicidade e Propaganda, Jornalismo, Relações Públicas, Administração, Gestão Comercial ou áreas correlatas. Será considerado diferencial possuir Pós-graduação ou especialização em Gestão de Pessoas, Liderança, Customer Success, Gestão de Negócios ou áreas relacionadas.",
      tempoMinimoPromocao: "2 Anos",
      provaConhecimentos: true,
    },
    {
      id: "coord",
      ordem: 5,
      nome: "Coordenador",
      objetivo:
        "O Coordenador de Relacionamento é responsável pela gestão estratégica da área de Relacionamento com o " +
        "Cliente, garantindo a excelência da operação, o desenvolvimento das lideranças, a evolução dos processos e o " +
        "alcance dos resultados da área. Atua na definição de estratégias para retenção, satisfação e crescimento da " +
        "base de clientes, promovendo integração entre os setores e assegurando que a experiência do cliente esteja " +
        "alinhada aos objetivos da ICOM TV. É responsável por transformar indicadores em ações, desenvolver líderes e " +
        "promover uma cultura de melhoria contínua e alta performance.",
      competenciasEsperadas: [
        "Experiência consolidada em Customer Success, Relacionamento com Clientes, Pós-venda ou áreas correlatas.",
        "Experiência em liderança de equipes e desenvolvimento de líderes.",
        "Vivência em gestão estratégica de indicadores e processos.",
        "Experiência em planejamento, implementação e acompanhamento de projetos de melhoria.",
        "Experiência em gestão de mudanças e desenvolvimento organizacional.",
      ],
      responsabilidades: [
        "Coordenar as operações do setor de Relacionamento, garantindo o alcance dos indicadores estratégicos da área.",
        "Liderar e desenvolver os Supervisores e demais lideranças do setor, promovendo autonomia, engajamento e alta performance.",
        "Definir, acompanhar e analisar indicadores de desempenho, produtividade, qualidade, retenção e satisfação dos clientes.",
        "Desenvolver estratégias para aumentar a retenção, fidelização e geração de valor aos clientes.",
        "Identificar oportunidades de melhoria e liderar projetos de otimização dos processos internos.",
        "Garantir a padronização dos processos e a excelência operacional da área.",
        "Atuar na resolução de situações críticas envolvendo clientes estratégicos ou casos de alta complexidade.",
        "Promover integração entre Relacionamento, Comercial, Criação, Produção, Suporte Técnico e demais áreas da empresa.",
        "Elaborar planos de ação baseados em indicadores e acompanhar sua execução.",
        "Participar do planejamento estratégico da empresa, contribuindo com informações e análises da área de Relacionamento.",
        "Realizar reuniões periódicas com a equipe de liderança para acompanhamento de resultados e definição de prioridades.",
        "Acompanhar o dimensionamento da equipe, apoiando processos seletivos, movimentações internas e planejamento de quadro de colaboradores.",
        "Desenvolver programas de treinamento, capacitação e desenvolvimento contínuo da equipe.",
        "Elaborar relatórios gerenciais e apresentar resultados, análises e propostas de melhoria para a Gerência.",
        "Garantir a disseminação da cultura organizacional, dos valores e das boas práticas da ICOM TV.",
      ],
      indicadores: {
        aumentar: [
          "A retenção e fidelização dos clientes.",
          "A satisfação dos clientes (NPS, CSAT e demais indicadores).",
          "A produtividade e eficiência operacional da equipe.",
          "O desenvolvimento das lideranças.",
          "A integração entre os setores.",
          "A inovação e melhoria contínua dos processos.",
          "A geração de valor percebido pelos clientes.",
        ],
        garantir: [
          "O cumprimento dos indicadores estratégicos da área.",
          "A excelência na experiência do cliente.",
          "O desenvolvimento contínuo das equipes.",
          "A padronização dos processos.",
          "A qualidade dos atendimentos.",
          "O alinhamento da operação com os objetivos da empresa.",
          "A disseminação da cultura organizacional.",
        ],
        reduzir: [
          "Cancelamentos de clientes.",
          "Reclamações recorrentes.",
          "Retrabalho operacional.",
          "Falhas de comunicação entre áreas.",
          "Tempo de resolução de problemas críticos.",
          "Rotatividade da equipe.",
          "Ineficiências operacionais.",
        ],
      },
      formacaoAcademica: "Ensino Superior completo em Marketing, Publicidade e Propaganda, Jornalismo, Relações Públicas, Administração, Gestão Comercial, Processos Gerenciais ou áreas correlatas. Será considerado diferencial possuir Pós-graduação ou MBA em Gestão de Pessoas, Liderança, Gestão de Negócios, Customer Success, Gestão Estratégica ou áreas relacionadas.",
      tempoMinimoPromocao: null,
      provaConhecimentos: null,
    },
  ],

  // pesos: { jr, pl, sr, sup, coord } — 0 a 3
  questions: [
    { id: "q1",  texto: "Colegas recorrem a mim espontaneamente para pedir orientação ou conselho.", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 2 } },
    { id: "q2",  texto: "Resolvo demandas de clientes com autonomia, sem precisar recorrer a colegas mais experientes.", categoria: "relacionamento", pesos: { jr: 3, pl: 3, sr: 2, sup: 1, coord: 0 } },
    { id: "q3",  texto: "Medeio conflitos entre colegas, ou entre cliente e equipe, buscando uma solução equilibrada.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 2 } },
    { id: "q4",  texto: "Acompanho indicadores (KPIs) da minha atuação de forma regular, não só quando pedem.", categoria: "gestao", pesos: { jr: 1, pl: 2, sr: 3, sup: 3, coord: 2 } },
    { id: "q5",  texto: "Tomo decisões do dia a dia sem precisar validar cada passo com a liderança.", categoria: "autonomia", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "q6",  texto: "Ajudo colegas de outras áreas mesmo quando isso não é diretamente minha função.", categoria: "relacionamento", pesos: { jr: 1, pl: 2, sr: 2, sup: 2, coord: 2 } },
    { id: "q7",  texto: "Organizo minha rotina de forma que raramente preciso ser cobrado(a) sobre prazos.", categoria: "organizacao", pesos: { jr: 3, pl: 3, sr: 2, sup: 1, coord: 1 } },
    { id: "q8",  texto: "Adapto minha forma de comunicar de acordo com o perfil de cada cliente ou colega.", categoria: "comunicacao", pesos: { jr: 2, pl: 3, sr: 2, sup: 1, coord: 1 } },
    { id: "q9",  texto: "Busco ativamente referências fora da empresa para trazer novas ideias para a área.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q10", texto: "Construo relações de confiança duradouras com os clientes que atendo.", categoria: "relacionamento", pesos: { jr: 2, pl: 3, sr: 2, sup: 1, coord: 1 } },
    { id: "q11", texto: "Consigo influenciar decisões da equipe mesmo sem autoridade formal para isso.", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q12", texto: "Já apoiei a integração ou treinamento de novos colaboradores (padrinho/madrinha).", categoria: "lideranca", pesos: { jr: 0, pl: 2, sr: 2, sup: 2, coord: 1 } },
    { id: "q13", texto: "Penso no impacto das minhas decisões nos resultados gerais da área, além da minha tarefa individual.", categoria: "estrategia", pesos: { jr: 1, pl: 2, sr: 3, sup: 3, coord: 3 } },
    { id: "q14", texto: "Antes de agir, busco entender a causa raiz de um problema, não apenas o sintoma.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "q15", texto: "Reviso minhas próprias entregas buscando pontos de melhoria, mesmo sem ser solicitado.", categoria: "inovacao", pesos: { jr: 2, pl: 2, sr: 2, sup: 1, coord: 1 } },
    { id: "q16", texto: "Domino os conceitos de marketing/publicidade aplicados às soluções que ofereço ao cliente.", categoria: "estrategia", pesos: { jr: 1, pl: 2, sr: 3, sup: 3, coord: 2 } },
    { id: "q17", texto: "Assumo publicamente meus erros e busco corrigi-los sem esperar ser cobrado(a).", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 2, sup: 2, coord: 2 } },
    { id: "q18", texto: "Tomo decisões rápidas mesmo com informações incompletas, quando necessário.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 3, coord: 3 } },

    { id: "q19", texto: "Assumo a frente em situações de equipe mesmo sem ser formalmente responsável por isso.", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q20", texto: "Identifico necessidades do cliente que não foram explicitamente pedidas.", categoria: "relacionamento", pesos: { jr: 2, pl: 3, sr: 3, sup: 1, coord: 0 } },
    { id: "q21", texto: "Mantenho a calma e conduzo bem situações de tensão com o cliente.", categoria: "gestao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "q22", texto: "Sou responsável por definir ou propor indicadores para a equipe.", categoria: "gestao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 3 } },
    { id: "q23", texto: "Assumo responsabilidade por entregas mesmo quando não há ninguém supervisionando de perto.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "q24", texto: "Compartilho conhecimento e boas práticas com o time de forma espontânea.", categoria: "relacionamento", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "q25", texto: "Consigo dar conta de múltiplas demandas simultâneas sem perder a qualidade.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 3, sup: 2, coord: 1 } },
    { id: "q26", texto: "Consigo explicar temas complexos de forma simples para quem não tem o mesmo conhecimento técnico.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 3, coord: 2 } },
    { id: "q27", texto: "Já propus uma melhoria de processo que gerou resultado mensurável para a equipe.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q28", texto: "Sou uma referência de relacionamento para clientes estratégicos ou mais complexos.", categoria: "relacionamento", pesos: { jr: 0, pl: 1, sr: 3, sup: 3, coord: 2 } },
    { id: "q29", texto: "Minha opinião costuma ser considerada relevante nas discussões da área.", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q30", texto: "Estruturo materiais ou conteúdos de treinamento para a equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 2 } },
    { id: "q31", texto: "Participo da definição de metas ou do planejamento da área para os próximos meses.", categoria: "estrategia", pesos: { jr: 0, pl: 0, sr: 1, sup: 2, coord: 3 } },
    { id: "q32", texto: "Sou procurado(a) por colegas para ajudar a resolver problemas mais complexos.", categoria: "analise", pesos: { jr: 0, pl: 1, sr: 3, sup: 3, coord: 2 } },
    { id: "q33", texto: "Incentivo a equipe a testar novas formas de fazer o trabalho, mesmo com risco de erro.", categoria: "inovacao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 3 } },
    { id: "q34", texto: "Sou referência da equipe em estratégias de marketing interno para os clientes atendidos.", categoria: "estrategia", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 2 } },
    { id: "q35", texto: "Cumpro compromissos assumidos mesmo quando surgem imprevistos.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "q36", texto: "Considero múltiplos cenários e impactos antes de tomar decisões importantes.", categoria: "analise", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },

    { id: "q37", texto: "Reconheço e valorizo publicamente boas entregas dos meus colegas.", categoria: "lideranca", pesos: { jr: 1, pl: 2, sr: 2, sup: 3, coord: 2 } },
    { id: "q38", texto: "Uso experiências de atendimento como base para propor melhorias em processos internos.", categoria: "relacionamento", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "q39", texto: "Ajudo a equipe a alinhar posições divergentes até chegar a um consenso.", categoria: "gestao", pesos: { jr: 0, pl: 0, sr: 2, sup: 3, coord: 2 } },
    { id: "q40", texto: "Uso dados e indicadores para justificar decisões, não apenas percepção pessoal.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q41", texto: "Defino minhas prioridades sem precisar que alguém as defina por mim.", categoria: "autonomia", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "q42", texto: "Busco alinhamento com outras áreas antes de tomar decisões que impactam o todo.", categoria: "relacionamento", pesos: { jr: 0, pl: 0, sr: 1, sup: 2, coord: 3 } },
    { id: "q43", texto: "Estruturo fluxos ou rotinas que outras pessoas da equipe passam a seguir.", categoria: "organizacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q44", texto: "Represento a área em conversas com outros times ou lideranças da empresa.", categoria: "comunicacao", pesos: { jr: 0, pl: 0, sr: 2, sup: 3, coord: 3 } },
    { id: "q45", texto: "Acompanho o resultado das mudanças que implemento para validar se realmente funcionaram.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q46", texto: "Consigo manter bom relacionamento mesmo com pessoas de perfil difícil.", categoria: "relacionamento", pesos: { jr: 2, pl: 2, sr: 2, sup: 2, coord: 1 } },
    { id: "q47", texto: "Inspiro colegas a melhorar sua atuação através do meu próprio exemplo.", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 2 } },
    { id: "q48", texto: "Avalio a evolução de outras pessoas e dou feedback estruturado para o desenvolvimento delas.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 3 } },
    { id: "q49", texto: "Consigo antecipar mudanças de mercado e sugerir ajustes na estratégia da equipe.", categoria: "estrategia", pesos: { jr: 0, pl: 0, sr: 1, sup: 2, coord: 3 } },
    { id: "q50", texto: "Consigo resolver problemas inéditos, para os quais não existe um processo já definido.", categoria: "analise", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q51", texto: "Ajudo a estruturar estratégias de marketing interno para diferentes perfis de cliente.", categoria: "estrategia", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q52", texto: "Sinto-me responsável pelo resultado da equipe, não apenas pelo meu resultado individual.", categoria: "autonomia", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "q53", texto: "Questiono processos existentes buscando formas mais eficientes de trabalhar.", categoria: "inovacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 2, coord: 2 } },
    { id: "q54", texto: "Assumo as consequências das decisões que tomo, mesmo quando dão errado.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 2, sup: 3, coord: 3 } },
  ],

  recomendacoesPorCategoria: {
    comunicacao: "Pratique comunicar temas complexos de forma simples, adaptando a linguagem para diferentes públicos.",
    lideranca: "Busque orientar colegas e assumir a frente em iniciativas da equipe, mesmo sem cargo formal de liderança.",
    organizacao: "Estruture e documente rotinas que outras pessoas da equipe possam seguir, não apenas a sua própria.",
    estrategia: "Participe mais das discussões de planejamento e conecte suas entregas diárias aos objetivos da área.",
    analise: "Aprofunde a investigação da causa raiz dos problemas antes de propor soluções, considerando múltiplos cenários.",
    relacionamento: "Fortaleça vínculos de confiança com clientes e colegas de outras áreas, ampliando sua rede de relacionamento.",
    gestao: "Acompanhe indicadores com mais regularidade e use dados para embasar suas decisões, não apenas percepção.",
    autonomia: "Assuma mais responsabilidade por decisões do dia a dia sem esperar validação constante da liderança.",
    inovacao: "Proponha e implemente melhorias de processo, medindo o resultado obtido depois da mudança.",
  },
};
