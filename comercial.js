/**
 * Setor: Comercial
 * Fonte: "Competências Plano de Carreira comercial.xlsx".
 *
 * Este setor tem 4 níveis (Analista Comercial Jr/Pleno/Sênior e Supervisor Comercial —
 * sem Coordenador), mesmo padrão do Suporte Técnico, Produção e Sucesso do Cliente.
 *
 * EDITE ESTE ARQUIVO PARA ATUALIZAR CARGOS, PERGUNTAS, PESOS E CONTEÚDO DA BIBLIOTECA
 * DE PLANO DE CARREIRA DESTE SETOR. Nenhuma alteração aqui afeta outros setores.
 */

const SETOR_COMERCIAL = {
  id: "comercial",
  nome: "Comercial",

  visaoGeral: {
    objetivo:
      "A área Comercial é responsável pela prospecção, negociação e fechamento de novos clientes para a ICOM TV, " +
      "aplicando uma metodologia comercial consultiva ao longo de todo o funil de vendas, da qualificação de leads " +
      "até a assinatura do contrato.",
    responsabilidades: [
      "Prospecção ativa e receptiva de novos clientes, com diagnóstico consultivo das necessidades.",
      "Condução de negociações e propostas comerciais alinhadas aos objetivos de cada cliente.",
      "Gestão do funil de vendas e atualização constante do CRM.",
      "Integração com Marketing, Relacionamento e Customer Success para uma jornada comercial completa.",
    ],
    importancia:
      "O crescimento da base de clientes e o faturamento da ICOM TV dependem diretamente da capacidade da equipe " +
      "comercial de gerar, qualificar e converter oportunidades — ciclos de venda longos ou leads sem " +
      "acompanhamento representam receita perdida.",
    competenciasValorizadas: ["Comunicação", "Autonomia", "Análise", "Gestão", "Estratégia"],
  },

  cargos: [
    {
      id: "jr",
      ordem: 1,
      nome: "Analista Comercial Júnior",
      objetivo:
        "O Analista Comercial Júnior é responsável por identificar oportunidades de negócio, realizar prospecção " +
        "consultiva e conduzir as primeiras etapas do processo comercial da ICOM TV. Atua utilizando a metodologia " +
        "comercial da empresa para compreender o cenário dos clientes, despertar interesse na solução e conduzir " +
        "negociações consultivas, sempre buscando gerar valor antes da venda. Seu objetivo é desenvolver " +
        "relacionamentos, qualificar oportunidades e contribuir para o crescimento sustentável da empresa.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Prospectar novos clientes por meio de canais ativos e receptivos.",
        "Realizar contatos consultivos por telefone, WhatsApp, e-mail e videoconferência.",
        "Aplicar a metodologia comercial da ICOM TV durante todo o processo de vendas.",
        "Diagnosticar as necessidades dos clientes por meio de perguntas estratégicas.",
        "Identificar oportunidades de geração de valor para clínicas e consultórios.",
        "Apresentar a solução ICOM TV de forma consultiva, demonstrando benefícios e diferenciais.",
        "Alimentar corretamente o CRM com todas as informações das negociações.",
        "Gerenciar seu funil de vendas, mantendo follow-ups organizados e dentro dos prazos estabelecidos.",
        "Trabalhar a recuperação de leads mornos e oportunidades não convertidas.",
        "Encaminhar contratos, acompanhar assinaturas e apoiar o fechamento das vendas.",
        "Participar dos treinamentos comerciais e das reuniões de desenvolvimento da equipe.",
        "Buscar constantemente o aprimoramento das técnicas de vendas, negociação e comunicação.",
      ],
      indicadores: {
        aumentar: [
          "O número de oportunidades qualificadas.",
          "A taxa de conversão das negociações.",
          "O número de reuniões realizadas.",
          "O faturamento proveniente das vendas.",
          "A produtividade comercial.",
        ],
        garantir: [
          "Aplicação da metodologia comercial da ICOM TV.",
          "Atualização correta do CRM.",
          "Atendimento consultivo e profissional.",
          "Cumprimento das metas individuais.",
          "Organização do funil de vendas.",
        ],
        reduzir: [
          "Perda de oportunidades.",
          "Leads sem acompanhamento.",
          "Erros de cadastro no CRM.",
          "Tempo entre os contatos comerciais.",
          "Objeções não trabalhadas adequadamente.",
        ],
      },
      conhecimentosTecnicos: [],
      comportamentosEsperados: [],
      formacaoAcademica: "Ensino Superior cursando ou concluído em Administração, Gestão Comercial, Marketing, Publicidade e Propaganda, Comunicação Social, Processos Gerenciais ou áreas correlatas. Cursos em Vendas Consultivas, Negociação, CRM, SPIN Selling, Inside Sales ou áreas relacionadas serão considerados diferenciais.",
      tempoMinimoPromocao: "1 ano",
      provaConhecimentos: false,
    },
    {
      id: "pl",
      ordem: 2,
      nome: "Analista Comercial Pleno",
      objetivo:
        "O Analista Comercial Pleno é responsável por conduzir negociações consultivas de média e alta " +
        "complexidade, gerenciando todo o ciclo comercial desde a prospecção até o fechamento da venda. Atua como " +
        "consultor estratégico, compreendendo as necessidades dos clientes, identificando oportunidades de geração " +
        "de valor e apresentando soluções personalizadas da ICOM TV. Além de alcançar resultados consistentes, " +
        "contribui para a melhoria dos processos comerciais e compartilha conhecimento com os profissionais mais " +
        "juniores da equipe.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Gerenciar todo o ciclo comercial, desde a prospecção até o fechamento da venda.",
        "Aplicar a metodologia comercial da ICOM TV de forma consultiva e estratégica.",
        "Conduzir diagnósticos comerciais aprofundados para identificar necessidades, desafios e oportunidades dos clientes.",
        "Apresentar soluções personalizadas alinhadas aos objetivos de cada clínica ou consultório.",
        "Conduzir reuniões comerciais presenciais ou por videoconferência com autonomia.",
        "Negociar propostas comerciais, contornando objeções de forma consultiva e ética.",
        "Gerenciar sua carteira de oportunidades utilizando corretamente o CRM.",
        "Executar follow-ups estratégicos visando aumentar a taxa de conversão.",
        "Trabalhar a recuperação de oportunidades perdidas e leads em fase de reaquecimento.",
        "Identificar oportunidades de venda de produtos complementares e novas soluções da ICOM TV.",
        "Apoiar o desenvolvimento dos Analistas Comerciais Juniores, compartilhando boas práticas e técnicas de vendas.",
        "Participar da melhoria contínua dos processos comerciais e da construção de estratégias de prospecção e conversão.",
      ],
      indicadores: {
        aumentar: [
          "A taxa de conversão de vendas.",
          "O faturamento individual.",
          "O ticket médio das vendas.",
          "A produtividade comercial.",
          "A geração de oportunidades qualificadas.",
          "A venda de soluções complementares.",
        ],
        garantir: [
          "Aplicação consistente da metodologia comercial da ICOM TV.",
          "Diagnósticos comerciais de alta qualidade.",
          "Organização e atualização do CRM.",
          "Cumprimento das metas comerciais.",
          "Excelente experiência durante todo o processo de venda.",
        ],
        reduzir: [
          "Perda de oportunidades qualificadas.",
          "Ciclos comerciais longos.",
          "Objeções não contornadas.",
          "Retrabalho nas negociações.",
          "Erros de cadastro e acompanhamento no CRM.",
        ],
      },
      conhecimentosTecnicos: [],
      comportamentosEsperados: [
        "Comunicação consultiva.",
        "Escuta ativa.",
        "Persuasão ética.",
        "Inteligência emocional.",
        "Organização.",
        "Gestão do tempo.",
        "Resiliência.",
        "Proatividade.",
        "Adaptabilidade.",
        "Capacidade analítica.",
        "Negociação.",
        "Trabalho em equipe.",
        "Influência positiva.",
        "Disciplina.",
        "Orientação para resultados.",
        "Aprendizado contínuo.",
        "Mentalidade de crescimento.",
        "Foco no cliente.",
      ],
      formacaoAcademica: "Ensino Superior completo ou em fase final de conclusão em Administração, Gestão Comercial, Marketing, Publicidade e Propaganda, Comunicação Social, Processos Gerenciais ou áreas correlatas. Cursos em Vendas Consultivas, SPIN Selling, Inside Sales, Negociação, Gestão Comercial ou áreas relacionadas serão considerados diferenciais.",
      tempoMinimoPromocao: "1 ano e 6 meses",
      provaConhecimentos: true,
    },
    {
      id: "sr",
      ordem: 3,
      nome: "Analista Comercial Sênior",
      objetivo:
        "O Analista Comercial Sênior é responsável por conduzir negociações estratégicas e de alta complexidade, " +
        "atuando como referência técnica da equipe comercial. Seu papel é gerar resultados consistentes por meio de " +
        "vendas consultivas, fortalecer o relacionamento com clientes estratégicos, apoiar o desenvolvimento dos " +
        "demais vendedores e contribuir para a evolução dos processos comerciais da ICOM TV. Atua com visão " +
        "analítica, foco em resultados e profundo conhecimento da metodologia comercial da empresa, influenciando " +
        "diretamente o crescimento sustentável do negócio.",
      competenciasEsperadas: [
        "Experiência consolidada em vendas consultivas e negociação B2B.",
        "Histórico consistente de superação de metas comerciais.",
        "Vivência na condução de negociações estratégicas.",
        "Experiência com gestão de carteira e vendas de maior complexidade.",
        "Participação em treinamentos ou desenvolvimento de vendedores será considerada um diferencial.",
      ],
      responsabilidades: [
        "Conduzir negociações estratégicas e de alta complexidade com autonomia.",
        "Gerenciar oportunidades de maior potencial de faturamento e clientes estratégicos.",
        "Aplicar e disseminar a metodologia comercial da ICOM TV, garantindo sua correta execução pela equipe.",
        "Realizar diagnósticos comerciais aprofundados, identificando necessidades, oportunidades e soluções de alto valor.",
        "Desenvolver estratégias para contorno de objeções complexas e negociações de longo ciclo.",
        "Elaborar propostas comerciais personalizadas e alinhadas aos objetivos dos clientes.",
        "Atuar na recuperação de negociações críticas e oportunidades consideradas perdidas.",
        "Identificar oportunidades de expansão da receita por meio de vendas complementares e novos produtos.",
        "Apoiar o treinamento e desenvolvimento técnico dos Analistas Comerciais Júnior e Pleno.",
        "Compartilhar boas práticas comerciais e contribuir para a evolução contínua da equipe.",
        "Participar da construção e melhoria dos processos, playbooks, scripts e estratégias comerciais.",
        "Acompanhar indicadores individuais e da equipe, propondo planos de ação para melhoria dos resultados.",
        "Trabalhar em conjunto com Marketing, Relacionamento, Customer Success e demais áreas para fortalecer a experiência do cliente durante toda a jornada comercial.",
      ],
      indicadores: {
        aumentar: [
          "O faturamento gerado pelas negociações.",
          "A taxa de conversão de oportunidades estratégicas.",
          "O ticket médio das vendas.",
          "A venda de soluções complementares.",
          "A previsibilidade dos resultados comerciais.",
          "O desenvolvimento técnico da equipe comercial.",
        ],
        garantir: [
          "A aplicação da metodologia comercial da ICOM TV.",
          "Diagnósticos consultivos de alto nível.",
          "Excelente experiência durante o processo de venda.",
          "Cumprimento das metas comerciais.",
          "Qualidade das negociações.",
          "Integração entre Comercial e demais áreas da empresa.",
        ],
        reduzir: [
          "Perda de oportunidades estratégicas.",
          "Ciclos comerciais excessivamente longos.",
          "Objeções sem tratamento adequado.",
          "Retrabalho comercial.",
          "Erros de registro e acompanhamento no CRM.",
          "Dependência operacional da liderança para negociações.",
        ],
      },
      conhecimentosTecnicos: [
        "Domínio da metodologia comercial da ICOM TV.",
        "Técnicas avançadas de vendas consultivas.",
        "Diagnóstico comercial estratégico.",
        "Gestão de funil de vendas.",
        "CRM.",
        "Técnicas avançadas de negociação.",
        "Gestão de carteira.",
        "Planejamento comercial.",
        "Contorno de objeções complexas.",
        "Técnicas de fechamento.",
        "Forecast comercial.",
        "Indicadores de performance comercial.",
        "Pacote Office intermediário/avançado, principalmente Excel e PowerPoint.",
        "Conhecimento dos produtos, soluções e mercado de atuação da ICOM TV.",
      ],
      comportamentosEsperados: [
        "Comunicação de alto impacto.",
        "Inteligência emocional.",
        "Escuta ativa.",
        "Liderança técnica.",
        "Influência positiva.",
        "Capacidade analítica.",
        "Visão estratégica.",
        "Organização.",
        "Gestão do tempo.",
        "Negociação.",
        "Resolução de problemas.",
        "Proatividade.",
        "Adaptabilidade.",
        "Resiliência.",
        "Trabalho em equipe.",
        "Orientação para resultados.",
        "Foco no cliente.",
        "Aprendizado contínuo.",
        "Capacidade de desenvolver pessoas.",
      ],
      formacaoAcademica: "Ensino Superior completo em Administração, Gestão Comercial, Marketing, Publicidade e Propaganda, Comunicação Social, Processos Gerenciais ou áreas correlatas. Será considerado diferencial possuir certificações ou especializações em Vendas Consultivas, SPIN Selling, Inside Sales, Negociação, Gestão Comercial, Liderança Comercial ou áreas relacionadas.",
      tempoMinimoPromocao: "2 Anos",
      provaConhecimentos: true,
    },
    {
      id: "sup",
      ordem: 4,
      nome: "Supervisor Comercial",
      objetivo:
        "O Supervisor Comercial é responsável por liderar a equipe de vendas da ICOM TV, garantindo a execução da " +
        "estratégia comercial, o desenvolvimento contínuo dos vendedores e o atingimento das metas da empresa. Atua " +
        "na gestão da performance da equipe, acompanhamento dos indicadores comerciais, melhoria dos processos e " +
        "fortalecimento da cultura de vendas consultivas. Seu objetivo é formar uma equipe de alta performance, " +
        "assegurando previsibilidade de resultados, excelência na experiência do cliente e crescimento sustentável " +
        "das vendas.",
      competenciasEsperadas: [
        "Experiência consolidada em vendas consultivas B2B.",
        "Histórico consistente de alta performance comercial.",
        "Experiência em liderança, treinamento ou desenvolvimento de equipes.",
        "Vivência na gestão de indicadores comerciais.",
        "Experiência com CRM e gestão de pipeline.",
        "Experiência em planejamento e acompanhamento de metas.",
      ],
      responsabilidades: [
        "Liderar, desenvolver e acompanhar a equipe comercial, promovendo uma cultura de alta performance.",
        "Realizar reuniões individuais (1:1) e coletivas para acompanhamento de resultados, desenvolvimento e alinhamento estratégico.",
        "Monitorar indicadores comerciais como taxa de conversão, faturamento, ticket médio, produtividade, forecast, ciclo de vendas e cumprimento das metas.",
        "Garantir a correta aplicação da metodologia comercial da ICOM TV durante todas as etapas do funil de vendas.",
        "Acompanhar negociações estratégicas e apoiar a equipe no tratamento de objeções complexas e fechamento de grandes oportunidades.",
        "Realizar coaching e feedbacks contínuos, desenvolvendo competências técnicas e comportamentais dos vendedores.",
        "Monitorar a qualidade do CRM, garantindo registros completos, atualização das oportunidades e previsibilidade das vendas.",
        "Desenvolver planos de ação para melhoria dos indicadores individuais e coletivos.",
        "Participar da definição de metas, campanhas comerciais e estratégias de prospecção.",
        "Trabalhar em conjunto com Marketing, Customer Success e Relacionamento para otimizar a geração de oportunidades e a experiência do cliente.",
        "Identificar oportunidades de melhoria nos processos comerciais, propondo soluções que aumentem a produtividade da equipe.",
        "Garantir a integração e disseminação das melhores práticas comerciais entre os vendedores.",
        "Apoiar processos de recrutamento, integração e desenvolvimento de novos integrantes da equipe.",
      ],
      indicadores: {
        aumentar: [
          "O faturamento da equipe comercial.",
          "A taxa de conversão das oportunidades.",
          "O ticket médio das vendas.",
          "A produtividade individual e coletiva da equipe.",
          "A previsibilidade dos resultados comerciais.",
          "A geração de novas oportunidades de negócio.",
          "O desenvolvimento técnico e comportamental dos vendedores.",
          "A aderência ao método comercial da ICOM TV.",
        ],
        garantir: [
          "O cumprimento das metas comerciais individuais e da equipe.",
          "A correta utilização e atualização do CRM.",
          "A execução padronizada do processo comercial.",
          "A qualidade dos diagnósticos e apresentações comerciais.",
          "A realização dos follow-ups previstos na cadência comercial.",
          "A integração entre Comercial, Marketing, Relacionamento, Customer Success e demais áreas.",
          "Um ambiente de alta performance, colaboração e aprendizado contínuo.",
        ],
        reduzir: [
          "A perda de oportunidades por falhas no processo comercial.",
          "O tempo médio do ciclo de vendas.",
          "A quantidade de leads sem acompanhamento.",
          "O retrabalho operacional.",
          "A variação excessiva de performance entre vendedores.",
          "A dependência do gestor em negociações simples.",
          "O turnover da equipe comercial.",
        ],
      },
      conhecimentosTecnicos: [
        "Domínio completo da metodologia comercial da ICOM TV.",
        "Gestão de equipes comerciais.",
        "Técnicas avançadas de vendas consultivas.",
        "Gestão de pipeline e CRM.",
        "Forecast comercial.",
        "Gestão por indicadores (KPIs).",
        "Técnicas de negociação e fechamento.",
        "Planejamento comercial.",
        "Gestão de metas.",
        "Desenvolvimento e treinamento de vendedores.",
        "Análise de indicadores de performance.",
        "Pacote Office intermediário/avançado (principalmente Excel e PowerPoint).",
        "Conhecimento dos produtos, mercado e posicionamento da ICOM TV.",
      ],
      comportamentosEsperados: [
        "Liderança inspiradora.",
        "Comunicação assertiva.",
        "Inteligência emocional.",
        "Capacidade de desenvolver pessoas.",
        "Pensamento estratégico.",
        "Visão de negócio.",
        "Organização.",
        "Gestão do tempo.",
        "Tomada de decisão.",
        "Capacidade analítica.",
        "Negociação.",
        "Gestão de conflitos.",
        "Influência positiva.",
        "Resiliência.",
        "Adaptabilidade.",
        "Orientação para resultados.",
        "Proatividade.",
        "Trabalho em equipe.",
        "Cultura de melhoria contínua.",
      ],
      formacaoAcademica: "Ensino Superior completo em Administração, Gestão Comercial, Marketing, Publicidade e Propaganda, Comunicação Social, Processos Gerenciais ou áreas correlatas. Será considerado diferencial possuir Pós-graduação ou MBA em Gestão Comercial, Gestão de Pessoas, Liderança, Negociação ou Gestão Estratégica.",
      tempoMinimoPromocao: null,
      provaConhecimentos: true,
    },
  ],

  // pesos: { jr, pl, sr, sup } — 0 a 3 (este setor não possui nível Coordenador)
  questions: [
    { id: "co1",  texto: "Prospecto novos clientes de forma ativa, sem depender apenas de leads recebidos.", categoria: "autonomia", pesos: { jr: 3, pl: 2, sr: 1, sup: 0 } },
    { id: "co2",  texto: "Qualifico oportunidades antes de investir tempo em uma negociação longa.", categoria: "autonomia", pesos: { jr: 2, pl: 3, sr: 3, sup: 1 } },
    { id: "co3",  texto: "Consigo identificar rapidamente se um lead tem real potencial de fechamento.", categoria: "autonomia", pesos: { jr: 1, pl: 2, sr: 3, sup: 1 } },
    { id: "co4",  texto: "Faço perguntas estratégicas para entender o real cenário e necessidade do cliente antes de apresentar a solução.", categoria: "analise", pesos: { jr: 2, pl: 3, sr: 3, sup: 1 } },
    { id: "co5",  texto: "Analiso indicadores como taxa de conversão e ticket médio para entender minha própria performance.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 2, sup: 3 } },
    { id: "co6",  texto: "Avalio diferentes abordagens de negociação antes de escolher a mais adequada para cada cliente.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "co7",  texto: "Conduzo negociações de média complexidade com autonomia, sem precisar de apoio constante.", categoria: "autonomia", pesos: { jr: 1, pl: 3, sr: 2, sup: 1 } },
    { id: "co8",  texto: "Contorno objeções complexas do cliente sem perder a venda.", categoria: "autonomia", pesos: { jr: 0, pl: 2, sr: 3, sup: 2 } },
    { id: "co9",  texto: "Assumo negociações estratégicas ou de clientes de maior potencial de faturamento.", categoria: "autonomia", pesos: { jr: 0, pl: 1, sr: 3, sup: 2 } },
    { id: "co10", texto: "Mantenho meu CRM sempre atualizado, com todas as informações das negociações registradas.", categoria: "organizacao", pesos: { jr: 3, pl: 3, sr: 2, sup: 1 } },
    { id: "co11", texto: "Organizo meu funil de vendas garantindo follow-ups dentro do prazo estabelecido.", categoria: "organizacao", pesos: { jr: 3, pl: 2, sr: 2, sup: 1 } },
    { id: "co12", texto: "Consigo gerenciar múltiplas negociações simultâneas sem perder o timing de nenhuma.", categoria: "organizacao", pesos: { jr: 1, pl: 3, sr: 2, sup: 1 } },
    { id: "co13", texto: "Compartilho boas práticas de vendas com colegas juniores da equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 2, sr: 3, sup: 2 } },
    { id: "co14", texto: "Aplico coaching e feedbacks contínuos para desenvolver competências da equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "co15", texto: "Apoio processos de recrutamento e integração de novos vendedores.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "co16", texto: "Acompanho meus indicadores comerciais regularmente, não só quando cobrado no fechamento do mês.", categoria: "gestao", pesos: { jr: 1, pl: 2, sr: 2, sup: 3 } },
    { id: "co17", texto: "Uso dados de ciclo de vendas e taxa de conversão para identificar onde posso melhorar.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "co18", texto: "Monitoro o cumprimento de metas de toda a equipe, não só as minhas próprias.", categoria: "gestao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "co19", texto: "Apresento propostas comerciais de forma clara e persuasiva, adaptando a linguagem ao perfil do cliente.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "co20", texto: "Comunico com transparência quando uma solução não é a mais indicada para o cliente naquele momento.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 1 } },

    { id: "co21", texto: "Conduzo reuniões comerciais de forma estruturada e objetiva.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 2 } },
    { id: "co22", texto: "Trabalho de forma integrada com Marketing, Relacionamento e Customer Success para melhorar a jornada do cliente.", categoria: "relacionamento", pesos: { jr: 1, pl: 2, sr: 2, sup: 2 } },
    { id: "co23", texto: "Ajudo a resolver situações que envolvem mais de um setor durante o processo comercial.", categoria: "relacionamento", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "co24", texto: "Aplico rigorosamente a metodologia comercial da empresa em todas as etapas do funil.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 2, sup: 1 } },
    { id: "co25", texto: "Ajudo a construir ou revisar processos, scripts e playbooks comerciais que outros colegas seguem.", categoria: "organizacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3 } },
    { id: "co26", texto: "Penso no potencial de expansão futura do cliente, não só no fechamento da venda inicial.", categoria: "estrategia", pesos: { jr: 0, pl: 2, sr: 3, sup: 2 } },
    { id: "co27", texto: "Participo do planejamento de metas e campanhas comerciais da equipe.", categoria: "estrategia", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "co28", texto: "Consigo identificar oportunidades de vendas complementares (upsell/cross-sell) na minha carteira.", categoria: "estrategia", pesos: { jr: 0, pl: 2, sr: 3, sup: 2 } },
    { id: "co29", texto: "Mantenho a motivação e o ritmo de trabalho mesmo após uma sequência de negociações perdidas.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 2, sup: 2 } },
    { id: "co30", texto: "Assumo a responsabilidade quando uma negociação minha não avança, buscando entender o que faltou.", categoria: "autonomia", pesos: { jr: 1, pl: 2, sr: 2, sup: 1 } },

    { id: "co31", texto: "Cumpro minhas metas mesmo quando o cenário do mês está mais difícil.", categoria: "autonomia", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "co32", texto: "Trabalho ativamente a recuperação de leads mornos ou negociações estagnadas.", categoria: "analise", pesos: { jr: 2, pl: 2, sr: 3, sup: 1 } },
    { id: "co33", texto: "Sou procurado(a) por colegas para ajudar a recuperar uma negociação considerada perdida.", categoria: "analise", pesos: { jr: 0, pl: 1, sr: 3, sup: 2 } },
    { id: "co34", texto: "Contribuo para reduzir o turnover e aumentar o engajamento da equipe comercial.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3 } },
    { id: "co35", texto: "Ajudo a disseminar as melhores práticas comerciais entre os vendedores da equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 1, sr: 2, sup: 3 } },
    { id: "co36", texto: "Tomo decisões rápidas durante uma negociação mesmo sob pressão do cliente.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2 } },
    { id: "co37", texto: "Sei quando insistir em uma negociação e quando é hora de redirecionar meu esforço para outra oportunidade.", categoria: "analise", pesos: { jr: 0, pl: 2, sr: 3, sup: 2 } },
    { id: "co38", texto: "Entendo como minhas vendas impactam os resultados gerais da empresa, não só minha meta individual.", categoria: "estrategia", pesos: { jr: 1, pl: 2, sr: 2, sup: 3 } },
    { id: "co39", texto: "Busco entender o mercado e a concorrência para melhorar minha abordagem comercial.", categoria: "estrategia", pesos: { jr: 0, pl: 1, sr: 2, sup: 2 } },
    { id: "co40", texto: "Já propus uma melhoria no processo comercial que aumentou a taxa de conversão da equipe.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3 } },
  ],

  recomendacoesPorCategoria: {
    comunicacao: "Pratique apresentar propostas de forma clara e persuasiva, adaptando a linguagem ao perfil de cada cliente.",
    lideranca: "Ofereça-se para compartilhar boas práticas de vendas com colegas juniores e apoiar seu desenvolvimento.",
    organizacao: "Mantenha o CRM sempre atualizado e organize seu funil de vendas com follow-ups dentro do prazo.",
    estrategia: "Pense no potencial de expansão futura do cliente e busque identificar oportunidades de upsell/cross-sell.",
    analise: "Aprofunde o diagnóstico das necessidades do cliente antes de apresentar soluções, usando dados para embasar decisões.",
    relacionamento: "Fortaleça a integração com Marketing, Relacionamento e Customer Success ao longo da jornada comercial.",
    gestao: "Acompanhe seus indicadores comerciais com mais regularidade, usando dados para identificar onde melhorar.",
    autonomia: "Assuma negociações de maior complexidade sem esperar apoio constante da liderança.",
    inovacao: "Proponha melhorias no processo comercial baseadas em padrões de objeções ou perdas que você identifica no dia a dia.",
  },
};
