/**
 * Setor: Criação (Design Gráfico)
 * Fonte: "Competências Plano de Carreira criacao designer.xlsx".
 *
 * Este setor tem 5 níveis: Designer Gráfico Jr/Pleno/Sênior, Supervisor de Criação e
 * Coordenador de Criação. O cargo de Coordenador é COMPARTILHADO com o setor Audiovisual
 * (a planilha de origem descreve um único Coordenador de Criação responsável por
 * coordenar, ao mesmo tempo, as áreas de Design Gráfico e Audiovisual) — por isso o mesmo
 * conteúdo aparece também em data/audiovisual.js. Se o cargo mudar, atualize os dois
 * arquivos.
 *
 * EDITE ESTE ARQUIVO PARA ATUALIZAR CARGOS, PERGUNTAS, PESOS E CONTEÚDO DA BIBLIOTECA
 * DE PLANO DE CARREIRA DESTE SETOR. Nenhuma alteração aqui afeta outros setores.
 */

const SETOR_CRIACAO = {
  id: "criacao",
  nome: "Criação",

  visaoGeral: {
    objetivo:
      "A área de Criação (Design Gráfico) desenvolve as peças visuais exibidas nas TVs dos clientes ICOM TV — " +
      "campanhas, materiais institucionais, conteúdos personalizados — garantindo comunicação visual clara, " +
      "criativa e alinhada à identidade da marca.",
    responsabilidades: [
      "Criação e atualização de artes, campanhas e templates para a programação das TVs dos clientes.",
      "Revisão técnica e ortográfica de todo material antes da publicação.",
      "Definição e manutenção dos padrões de identidade visual da ICOM TV.",
      "Integração com Audiovisual, Produção, Relacionamento e Marketing para garantir entregas alinhadas.",
    ],
    importancia:
      "A qualidade visual das peças produzidas afeta diretamente a percepção de valor da marca ICOM TV pelos " +
      "clientes finais — erros de diagramação, inconsistências visuais ou atrasos geram retrabalho e reclamações " +
      "em toda a cadeia.",
    competenciasValorizadas: ["Inovação", "Organização", "Análise", "Comunicação", "Autonomia"],
  },

  cargos: [
    {
      id: "jr",
      ordem: 1,
      nome: "Designer Gráfico Júnior",
      objetivo:
        "O Designer Gráfico Júnior é responsável por desenvolver peças gráficas para a programação das TVs da " +
        "ICOM TV, garantindo comunicação visual clara, criativa e alinhada à identidade da empresa e às " +
        "necessidades dos clientes. Atua na criação, atualização e adaptação de materiais gráficos, seguindo os " +
        "padrões de qualidade estabelecidos e contribuindo para proporcionar uma experiência visual atrativa que " +
        "fortaleça a comunicação das clínicas e gere valor para seus pacientes.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Desenvolver artes gráficas para a programação das TVs dos clientes, seguindo os padrões visuais da ICOM TV.",
        "Criar materiais personalizados para campanhas, procedimentos, datas comemorativas, comunicados, parceiros e conteúdos institucionais.",
        "Atualizar e adaptar peças gráficas já existentes conforme solicitações dos clientes e necessidades da operação.",
        "Modernizar layouts antigos, mantendo a identidade visual da empresa.",
        "Garantir a qualidade estética, legibilidade e organização visual das peças produzidas.",
        "Revisar textos, ortografia e informações antes da entrega dos materiais.",
        "Organizar corretamente os arquivos e projetos da área.",
        "Alimentar e atualizar o sistema de gestão de tarefas, garantindo rastreabilidade das demandas.",
        "Cumprir prazos estabelecidos e priorizar atividades conforme a necessidade da operação.",
        "Trabalhar em conjunto com Audiovisual, Produção e Relacionamento para garantir entregas alinhadas aos objetivos dos clientes.",
        "Seguir os processos internos e padrões de criação definidos pela empresa.",
        "Buscar referências e tendências de design para aprimorar continuamente a qualidade das entregas.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade visual das artes produzidas.",
          "A criatividade das soluções gráficas.",
          "A produtividade nas entregas.",
          "O impacto da comunicação visual para os clientes.",
        ],
        garantir: [
          "Artes alinhadas à identidade visual da ICOM TV.",
          "Excelente legibilidade e organização das informações.",
          "Cumprimento dos prazos.",
          "Qualidade estética consistente em todas as entregas.",
          "Padronização visual dos materiais.",
        ],
        reduzir: [
          "Erros ortográficos.",
          "Retrabalho.",
          "Reclamações relacionadas às artes.",
          "Inconsistências visuais.",
          "Atrasos nas entregas.",
        ],
      },
      conhecimentosTecnicos: [
        "Conhecimento básico/intermediário do pacote Adobe (Photoshop, Illustrator, After Effects e Premiere).",
        "Noções de tipografia.",
        "Teoria das cores.",
        "Hierarquia visual.",
        "Composição gráfica.",
        "Identidade visual.",
        "Organização de arquivos digitais.",
        "Pacote Office básico.",
        "Gramática da língua portuguesa.",
        "Noções de marketing e comunicação visual.",
      ],
      comportamentosEsperados: [],
      formacaoAcademica: "Ensino Técnico ou Superior cursando ou concluído em Design Gráfico, Design Digital, Publicidade e Propaganda, Marketing, Comunicação Visual ou áreas correlatas. Cursos em Branding, UI Design, Tipografia, Direção de Arte ou Design para Marketing serão considerados diferenciais.",
      tempoMinimoPromocao: "1 ano",
      provaConhecimentos: false,
    },
    {
      id: "pl",
      ordem: 2,
      nome: "Designer Gráfico Pleno",
      objetivo:
        "O Designer Gráfico Pleno é responsável por desenvolver soluções visuais criativas e estratégicas para os " +
        "clientes da ICOM TV, garantindo excelência estética, comunicação eficiente e alinhamento com a identidade " +
        "visual da empresa. Atua com autonomia em projetos de média e alta complexidade, participa da evolução dos " +
        "processos criativos e contribui para a melhoria contínua da qualidade das entregas, fortalecendo a " +
        "experiência dos clientes e dos pacientes.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Desenvolver artes e materiais gráficos personalizados para a programação das TVs dos clientes.",
        "Criar campanhas promocionais, institucionais e sazonais para mídias digitais e mídia indoor.",
        "Desenvolver vídeos personalizados de média e alta complexidade utilizando recursos gráficos e animações.",
        "Atualizar e modernizar peças gráficas e vídeos existentes, mantendo a identidade visual da ICOM TV.",
        "Criar novos layouts, templates e modelos visuais para otimizar a produtividade da equipe.",
        "Garantir a qualidade estética, legibilidade e eficiência da comunicação visual dos materiais produzidos.",
        "Revisar textos, ortografia e padronização visual antes da entrega.",
        "Trabalhar em conjunto com os setores de Audiovisual, Produção, Marketing e Relacionamento para garantir entregas alinhadas aos objetivos dos clientes.",
        "Participar da criação, revisão e melhoria dos processos internos da área de Criação.",
        "Pesquisar tendências de design, comunicação visual e marketing para aplicar soluções inovadoras às produções.",
        "Auxiliar tecnicamente os Designers Juniores, compartilhando conhecimento e boas práticas.",
        "Garantir o cumprimento dos prazos e padrões de qualidade da empresa.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade visual das entregas.",
          "A criatividade das soluções gráficas.",
          "A produtividade da equipe.",
          "A inovação nas peças produzidas.",
          "A padronização da identidade visual da empresa.",
        ],
        garantir: [
          "Comunicação visual clara, atrativa e estratégica.",
          "Cumprimento dos prazos.",
          "Consistência da identidade visual em todos os materiais.",
          "Qualidade técnica e estética das produções.",
          "Organização dos arquivos e projetos.",
        ],
        reduzir: [
          "Retrabalho.",
          "Erros ortográficos.",
          "Inconsistências visuais.",
          "Reprovações de materiais.",
          "Atrasos nas entregas.",
        ],
      },
      conhecimentosTecnicos: [
        "Domínio intermediário/avançado do pacote Adobe (Photoshop, Illustrator, After Effects e Premiere).",
        "Tipografia.",
        "Teoria das cores.",
        "Direção de arte.",
        "Hierarquia visual.",
        "Diagramação.",
        "Identidade visual e branding.",
        "Motion Design básico.",
        "Organização de arquivos e bibliotecas digitais.",
        "Pacote Office intermediário.",
        "Excelente domínio da gramática da língua portuguesa.",
        "Noções de marketing e comunicação estratégica.",
      ],
      comportamentosEsperados: [],
      formacaoAcademica: "Ensino Superior cursando ou concluído em Design Gráfico, Design Digital, Publicidade e Propaganda, Marketing, Comunicação Visual ou áreas correlatas. Cursos de especialização em Branding, Direção de Arte, UX/UI, Motion Design ou Comunicação Visual serão considerados diferenciais.",
      tempoMinimoPromocao: "1 ano e 6 meses",
      provaConhecimentos: true,
    },
    {
      id: "sr",
      ordem: 3,
      nome: "Designer Gráfico Sênior",
      objetivo:
        "O Designer Gráfico Sênior é a principal referência técnica e criativa da área de Criação, sendo responsável " +
        "por desenvolver soluções visuais estratégicas, liderar tecnicamente projetos de maior complexidade e " +
        "garantir a excelência das entregas da equipe. Atua na evolução dos padrões de design da ICOM TV, no " +
        "desenvolvimento dos colaboradores e na melhoria contínua dos processos criativos, assegurando que todas as " +
        "peças produzidas fortaleçam a comunicação dos clientes e transmitam valor por meio de uma identidade " +
        "visual consistente e inovadora.",
      competenciasEsperadas: [],
      responsabilidades: [
        "Desenvolver materiais gráficos e campanhas de alta complexidade para clientes, ações institucionais e projetos estratégicos da ICOM TV.",
        "Atuar como referência técnica da equipe, apoiando e orientando Designers Juniores e Plenos no desenvolvimento das demandas.",
        "Criar conceitos visuais, identidades, layouts e peças que elevem o padrão criativo da empresa.",
        "Desenvolver materiais para campanhas promocionais, institucionais, lançamentos e projetos especiais.",
        "Criar materiais para clientes estratégicos e demandas que exijam maior nível de personalização.",
        "Participar do planejamento criativo juntamente com os setores de Relacionamento, Comercial, Marketing e Audiovisual.",
        "Desenvolver templates, bibliotecas e padrões visuais que aumentem a produtividade e a padronização da equipe.",
        "Revisar tecnicamente as entregas da área antes da publicação, garantindo qualidade visual, ortográfica e estratégica.",
        "Identificar oportunidades de melhoria nos processos criativos e propor soluções inovadoras.",
        "Pesquisar tendências de design, comunicação, branding e marketing para manter a empresa atualizada.",
        "Apoiar a integração, capacitação e desenvolvimento técnico dos novos colaboradores.",
        "Garantir que todas as entregas estejam alinhadas à identidade visual, aos objetivos estratégicos e aos padrões da ICOM TV.",
        "Participar de projetos de inovação relacionados ao design, comunicação visual e experiência do cliente.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade criativa das entregas.",
          "A inovação das soluções visuais.",
          "O impacto das campanhas produzidas.",
          "O nível técnico da equipe.",
          "A produtividade da área.",
          "A percepção de valor dos materiais entregues aos clientes.",
        ],
        garantir: [
          "Excelência visual em todas as peças produzidas.",
          "Consistência da identidade visual da ICOM TV.",
          "Desenvolvimento contínuo da equipe.",
          "Cumprimento dos prazos.",
          "Padronização dos materiais gráficos.",
          "Integração eficiente entre Criação, Audiovisual, Produção e Relacionamento.",
        ],
        reduzir: [
          "Retrabalho.",
          "Erros ortográficos e de diagramação.",
          "Inconsistências visuais.",
          "Reprovações de materiais.",
          "Atrasos nas entregas.",
          "Falhas de comunicação entre as áreas.",
        ],
      },
      conhecimentosTecnicos: [
        "Domínio avançado do pacote Adobe (Photoshop, Illustrator, InDesign, After Effects e Premiere).",
        "Direção de arte.",
        "Branding e identidade visual.",
        "Tipografia avançada.",
        "Hierarquia visual.",
        "Teoria das cores.",
        "Diagramação editorial.",
        "Motion Design básico/intermediário.",
        "Comunicação visual estratégica.",
        "Planejamento criativo.",
        "Organização de bibliotecas e sistemas de design.",
        "Pacote Office intermediário/avançado.",
        "Excelente domínio da gramática da língua portuguesa.",
        "Noções de marketing, comportamento do consumidor e design para conversão.",
      ],
      comportamentosEsperados: [],
      formacaoAcademica: "Ensino Superior completo em Design Gráfico, Design Digital, Publicidade e Propaganda, Marketing, Comunicação Visual ou áreas correlatas. Será considerado diferencial possuir especializações em Branding, Direção de Arte, UX/UI Design, Motion Design, Comunicação Visual ou áreas relacionadas.",
      tempoMinimoPromocao: "2 Anos",
      provaConhecimentos: true,
    },
    {
      id: "sup",
      ordem: 4,
      nome: "Supervisor de Criação",
      objetivo:
        "O Supervisor de Criação é responsável por liderar a equipe de Design Gráfico, garantindo a excelência " +
        "criativa, a qualidade das entregas e o desenvolvimento contínuo dos colaboradores. Atua na gestão de " +
        "pessoas, processos e indicadores da área, promovendo inovação, padronização e integração com os demais " +
        "setores da empresa. Seu objetivo é assegurar que todas as peças gráficas produzidas fortaleçam a " +
        "comunicação dos clientes, representem os padrões de qualidade da ICOM TV e contribuam para uma experiência " +
        "visual diferenciada.",
      competenciasEsperadas: [
        "Experiência consolidada em Design Gráfico, Comunicação Visual ou Direção de Arte.",
        "Experiência em liderança e desenvolvimento de equipes criativas.",
        "Vivência em gestão de projetos e processos.",
        "Experiência em gestão de indicadores de desempenho.",
        "Experiência na condução de campanhas e projetos estratégicos.",
      ],
      responsabilidades: [
        "Liderar, desenvolver e acompanhar o desempenho da equipe de Design Gráfico.",
        "Planejar, distribuir e acompanhar as demandas da equipe, garantindo equilíbrio operacional e cumprimento dos prazos.",
        "Realizar reuniões individuais e coletivas para alinhamento, acompanhamento e desenvolvimento dos colaboradores.",
        "Aplicar feedbacks contínuos, avaliações de desempenho e acompanhar os Planos de Desenvolvimento Individual (PDIs).",
        "Desenvolver treinamentos técnicos e criativos para evolução da equipe.",
        "Garantir a qualidade visual, estratégica e técnica de todas as peças produzidas antes da entrega.",
        "Definir e manter os padrões de identidade visual, comunicação e direção de arte da ICOM TV.",
        "Criar e revisar processos, fluxos de trabalho, templates e bibliotecas de design para aumentar a produtividade e a padronização da equipe.",
        "Acompanhar indicadores de produtividade, qualidade, retrabalho, prazos e satisfação dos clientes internos.",
        "Liderar projetos criativos estratégicos, campanhas institucionais e ações especiais da empresa.",
        "Trabalhar em conjunto com Audiovisual, Produção, Relacionamento, Comercial e Marketing para garantir alinhamento entre as áreas.",
        "Identificar oportunidades de inovação em ferramentas, metodologias e tendências de design.",
        "Gerenciar situações críticas relacionadas às entregas criativas, definindo planos de ação para correção e melhoria.",
        "Elaborar relatórios gerenciais e apresentar indicadores, análises e planos de ação à Coordenação.",
        "Promover um ambiente colaborativo, estimulando criatividade, autonomia, aprendizado contínuo e disseminação da cultura organizacional.",
      ],
      indicadores: {
        aumentar: [
          "A qualidade criativa das entregas.",
          "A produtividade da equipe.",
          "A inovação nas soluções visuais.",
          "O desenvolvimento técnico dos colaboradores.",
          "A eficiência dos processos criativos.",
          "A percepção de valor dos materiais entregues aos clientes.",
          "A integração entre os setores.",
        ],
        garantir: [
          "O cumprimento dos padrões de identidade visual da ICOM TV.",
          "Entregas dentro dos prazos estabelecidos.",
          "Excelência técnica e criativa em todas as peças.",
          "Desenvolvimento contínuo da equipe.",
          "Organização e padronização dos processos da área.",
          "Comunicação eficiente entre Criação e os demais setores.",
        ],
        reduzir: [
          "Retrabalho.",
          "Erros ortográficos e de diagramação.",
          "Reprovações de materiais.",
          "Atrasos nas entregas.",
          "Gargalos operacionais.",
          "Falhas de comunicação entre equipes.",
          "Reclamações relacionadas às entregas da área.",
        ],
      },
      conhecimentosTecnicos: [
        "Domínio avançado do pacote Adobe (Photoshop, Illustrator, InDesign, After Effects e Premiere).",
        "Direção de arte.",
        "Branding e identidade visual.",
        "Comunicação visual estratégica.",
        "Gestão de projetos.",
        "Gestão de indicadores (KPIs).",
        "Planejamento de campanhas.",
        "Gestão de processos criativos.",
        "Organização de sistemas de design e bibliotecas de ativos.",
        "Pacote Office intermediário/avançado.",
        "Excelente domínio da língua portuguesa.",
        "Ferramentas de gestão de tarefas e colaboração.",
      ],
      comportamentosEsperados: [
        "Liderança inspiradora.",
        "Comunicação clara e assertiva.",
        "Inteligência emocional.",
        "Criatividade.",
        "Gestão de pessoas.",
        "Gestão de conflitos.",
        "Pensamento estratégico.",
        "Visão sistêmica.",
        "Organização.",
        "Gestão do tempo.",
        "Proatividade.",
        "Capacidade analítica.",
        "Adaptabilidade.",
        "Influência positiva.",
        "Responsabilidade.",
        "Orientação para resultados.",
        "Desenvolvimento de pessoas.",
        "Trabalho em equipe.",
        "Foco na inovação.",
        "Melhoria contínua.",
      ],
      formacaoAcademica: "Ensino Superior completo em Design Gráfico, Design Digital, Publicidade e Propaganda, Marketing, Comunicação Visual ou áreas correlatas. Será considerado diferencial possuir Pós-graduação em Gestão de Pessoas, Liderança, Gestão de Projetos, Branding, Direção de Arte ou áreas relacionadas.",
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
    { id: "cr1",  texto: "Reviso cuidadosamente ortografia, cores e diagramação antes de entregar uma peça gráfica.", categoria: "organizacao", pesos: { jr: 3, pl: 3, sr: 2, sup: 1, coord: 0 } },
    { id: "cr2",  texto: "Consigo identificar inconsistências visuais em uma peça antes que o cliente perceba.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 3, sup: 1, coord: 0 } },
    { id: "cr3",  texto: "Mantenho meus arquivos e bibliotecas de design organizados e fáceis de reaproveitar.", categoria: "organizacao", pesos: { jr: 2, pl: 2, sr: 2, sup: 1, coord: 0 } },
    { id: "cr4",  texto: "Busco referências e tendências de design para trazer soluções visuais diferenciadas.", categoria: "inovacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "cr5",  texto: "Já propus um novo template ou padrão visual que passou a ser usado por toda a equipe.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3, coord: 2 } },
    { id: "cr6",  texto: "Questiono processos criativos existentes buscando formas mais eficientes de produzir.", categoria: "inovacao", pesos: { jr: 1, pl: 2, sr: 2, sup: 2, coord: 2 } },
    { id: "cr7",  texto: "Desenvolvo peças de média complexidade sem precisar de validação constante da liderança.", categoria: "autonomia", pesos: { jr: 1, pl: 3, sr: 2, sup: 1, coord: 0 } },
    { id: "cr8",  texto: "Assumo a responsabilidade por campanhas e projetos especiais de clientes estratégicos.", categoria: "autonomia", pesos: { jr: 0, pl: 1, sr: 3, sup: 2, coord: 1 } },
    { id: "cr9",  texto: "Cumpro prazos de entrega mesmo quando surgem imprevistos na produção.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "cr10", texto: "Oriento colegas juniores sobre técnica, composição ou uso das ferramentas de design.", categoria: "lideranca", pesos: { jr: 0, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "cr11", texto: "Aplico feedbacks estruturados e acompanho planos de desenvolvimento individual da equipe.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 2 } },
    { id: "cr12", texto: "Desenvolvo outras lideranças dentro da equipe, formando novos supervisores ou referências técnicas.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 2, coord: 3 } },
    { id: "cr13", texto: "Contribuo para reduzir a rotatividade e aumentar o engajamento da equipe criativa.", categoria: "lideranca", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 2 } },
    { id: "cr14", texto: "Acompanho meus indicadores de produtividade e qualidade regularmente, não só quando cobrado.", categoria: "gestao", pesos: { jr: 1, pl: 2, sr: 2, sup: 3, coord: 2 } },
    { id: "cr15", texto: "Uso dados de retrabalho e reprovações para identificar onde o processo criativo precisa melhorar.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "cr16", texto: "Monitoro o cumprimento de prazos e indicadores de toda a equipe, não só das minhas entregas.", categoria: "gestao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 3 } },
    { id: "cr17", texto: "Consigo explicar ao cliente ou a outro setor por que uma escolha visual foi feita de determinada forma.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "cr18", texto: "Documento decisões de design (cores, fontes, padrões) para que outros colegas consigam seguir.", categoria: "comunicacao", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "cr19", texto: "Represento a área de Criação em reuniões com outros setores ou lideranças.", categoria: "comunicacao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 3 } },

    { id: "cr20", texto: "Trabalho de forma integrada com Audiovisual, Produção e Relacionamento para cumprir prazos de entrega.", categoria: "relacionamento", pesos: { jr: 2, pl: 2, sr: 2, sup: 2, coord: 2 } },
    { id: "cr21", texto: "Ajudo a resolver problemas que envolvem mais de um setor (ex: Criação e Audiovisual juntos).", categoria: "relacionamento", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "cr22", texto: "Construo relação de confiança com clientes internos que dependem das minhas entregas.", categoria: "relacionamento", pesos: { jr: 1, pl: 2, sr: 2, sup: 2, coord: 1 } },
    { id: "cr23", texto: "Avalio diferentes soluções visuais antes de escolher a mais eficiente para o objetivo do cliente.", categoria: "analise", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "cr24", texto: "Sou procurado(a) por colegas para revisar entregas mais complexas antes da publicação final.", categoria: "analise", pesos: { jr: 0, pl: 1, sr: 3, sup: 2, coord: 1 } },
    { id: "cr25", texto: "Tomo decisões técnicas de design com segurança mesmo sob pressão de prazo.", categoria: "analise", pesos: { jr: 0, pl: 2, sr: 3, sup: 2, coord: 2 } },
    { id: "cr26", texto: "Penso no impacto da minha peça na percepção de marca do cliente, não só na tarefa isolada.", categoria: "estrategia", pesos: { jr: 1, pl: 2, sr: 3, sup: 3, coord: 3 } },
    { id: "cr27", texto: "Participo do planejamento anual ou estratégico de campanhas da empresa.", categoria: "estrategia", pesos: { jr: 0, pl: 0, sr: 1, sup: 2, coord: 3 } },
    { id: "cr28", texto: "Consigo antecipar necessidades futuras de campanhas ou materiais para os clientes.", categoria: "estrategia", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },

    { id: "cr29", texto: "Assumo a responsabilidade quando uma peça minha sai com erro, corrigindo rapidamente.", categoria: "autonomia", pesos: { jr: 2, pl: 2, sr: 2, sup: 2, coord: 1 } },
    { id: "cr30", texto: "Atuo de forma preventiva, revisando materiais antes que o problema chegue até o cliente.", categoria: "autonomia", pesos: { jr: 2, pl: 3, sr: 2, sup: 1, coord: 1 } },
    { id: "cr31", texto: "Ajudo a padronizar processos e templates que aumentam a produtividade de toda a equipe.", categoria: "organizacao", pesos: { jr: 0, pl: 1, sr: 3, sup: 3, coord: 2 } },
    { id: "cr32", texto: "Consigo gerenciar múltiplas demandas criativas simultâneas sem perder a qualidade.", categoria: "organizacao", pesos: { jr: 2, pl: 3, sr: 2, sup: 1, coord: 0 } },
    { id: "cr33", texto: "Sigo rigorosamente os padrões de identidade visual definidos pela empresa antes de inovar por conta própria.", categoria: "organizacao", pesos: { jr: 3, pl: 2, sr: 2, sup: 1, coord: 1 } },
    { id: "cr34", texto: "Sei gerenciar uma situação crítica (ex: material reprovado próximo do prazo) sem perder a qualidade.", categoria: "gestao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 2 } },
    { id: "cr35", texto: "Defino prioridades e distribuo demandas entre a equipe de forma equilibrada.", categoria: "gestao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 2 } },
    { id: "cr36", texto: "Compartilho conhecimento e boas práticas de design com o time de forma espontânea.", categoria: "relacionamento", pesos: { jr: 1, pl: 2, sr: 3, sup: 2, coord: 1 } },
    { id: "cr37", texto: "Sinto-me responsável pelo resultado da equipe, não apenas pelas minhas próprias entregas.", categoria: "relacionamento", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "cr38", texto: "Pesquiso novas ferramentas ou tecnologias (como IA aplicada à criação) que possam melhorar a operação.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 2, coord: 3 } },
    { id: "cr39", texto: "Já implementei uma melhoria de processo que reduziu retrabalho ou aumentou a produtividade da equipe.", categoria: "inovacao", pesos: { jr: 0, pl: 1, sr: 2, sup: 3, coord: 3 } },
    { id: "cr40", texto: "Conduzo reuniões de alinhamento com clareza e objetividade.", categoria: "comunicacao", pesos: { jr: 0, pl: 0, sr: 1, sup: 3, coord: 3 } },
  ],

  recomendacoesPorCategoria: {
    comunicacao: "Documente suas decisões de design e pratique explicar escolhas visuais de forma clara para clientes e outros setores.",
    lideranca: "Ofereça-se para orientar colegas juniores em técnica, composição e uso das ferramentas de design.",
    organizacao: "Padronize sua forma de revisar peças antes da entrega e mantenha bibliotecas de design sempre organizadas.",
    estrategia: "Pense no impacto de cada peça na percepção de marca do cliente, não apenas na tarefa isolada.",
    analise: "Aprofunde a checagem preventiva de inconsistências visuais antes de publicar qualquer material.",
    relacionamento: "Fortaleça a integração com Audiovisual, Produção e Relacionamento nas demandas que dependem de mais de um setor.",
    gestao: "Acompanhe indicadores de retrabalho e reprovações com mais regularidade, usando dados para embasar melhorias.",
    autonomia: "Assuma mais campanhas e projetos de maior complexidade sem esperar validação constante da liderança.",
    inovacao: "Pesquise tendências e proponha novos templates ou padrões visuais que outros colegas possam reaproveitar.",
  },
};
