import { 
  ServiceCompact, 
  SolutionItem, 
  MethodologyStep, 
  StatItem, 
  DifferentialItem, 
  PortfolioProject, 
  TestimonialItem, 
  EcoNode 
} from "./types";

export const HERO_CONTENT = {
  titleStart: "Gêneses — ",
  titleEnd: "Onde Grandes Marcas São Criadas",
  subtitle: "Transformamos sua visão em presença digital de alta performance. Sites, aplicativos e estratégias que geram resultados reais."
};

export const COMPACT_SERVICES: ServiceCompact[] = [
  {
    id: "serv-1",
    number: "01",
    title: "Sites & Aplicativos",
    description: "Interfaces premium que convertem visitantes em clientes."
  },
  {
    id: "serv-2",
    number: "02",
    title: "Marketing Digital",
    description: "Estratégias orientadas por dados para maximizar ROI."
  },
  {
    id: "serv-3",
    number: "03",
    title: "Branding & Identidade",
    description: "Marcas que comunicam autoridade e geram confiança."
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "sol-1",
    badge: "SITES PREMIUM",
    title: "Sites de Alta Conversão",
    description: "Desenvolvemos sites institucionais, landing pages e e-commerces com foco em UX/UI premium, velocidade de carregamento e otimização para conversão. Cada pixel é pensado estrategicamente.",
    imageSrc: "/src/assets/images/website_case_laptop_1780403123957.png"
  },
  {
    id: "sol-2",
    badge: "MOBILE WORKFLOWS",
    title: "Aplicativos Inteligentes",
    description: "Criamos aplicativos mobile e web que simplificam processos, engajam usuários e escalam com o crescimento do seu negócio. Tecnologia robusta com design intuitivo.",
    imageSrc: "/src/assets/images/app_case_phone_1780403135308.png"
  },
  {
    id: "sol-3",
    badge: "PERFORMANCE TRÁFEGO",
    title: "Estratégia de Marketing Digital",
    description: "SEO, tráfego pago, automação e funis de vendas integrados. Construímos ecossistemas digitais que trabalham 24h por dia para atrair, nutrir e converter leads qualificados.",
    imageSrc: "/src/assets/images/marketing_case_dashboard_1780403152594.png"
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    id: "step-1",
    title: "Diagnóstico",
    description: "Análise completa do seu cenário digital atual, mapeamento de processos e identificação de oportunidades de crescimento ocultas.",
    deliverables: ["Auditoria de Performance", "Mapeamento de Concorrência", "Relatório de Oportunidades"],
    iconName: "Search"
  },
  {
    id: "step-2",
    title: "Estratégia",
    description: "Planejamento tático de canais, definição de infraestrutura técnica e funis de captação formatados especificamente para seu público-alvo.",
    deliverables: ["Arquitetura de Conversão", "Estrutura Tecnológica", "Plano de Canais Integrados"],
    iconName: "Compass"
  },
  {
    id: "step-3",
    title: "Criação",
    description: "Desenvolvimento visual de alta fidelidade e implementação de engenharia limpa com foco absoluto em velocidade de carregamento.",
    deliverables: ["Figma Prototyping premium", "Desenvolvimento Clean-Code", "UX Writing Orientado a Vendas"],
    iconName: "User"
  },
  {
    id: "step-4",
    title: "Lançamento",
    description: "Deployment estável, homologação rigorosa de performance em múltiplos aparelhos e configuração minuciosa de métricas analíticas.",
    deliverables: ["Setup de Tags Analytics", "Protocolo SSL de Alta Segurança", "Otimização CDN Integrada"],
    iconName: "Rocket"
  },
  {
    id: "step-5",
    title: "Otimização",
    description: "Análise analítica ativa de funis de uso, testes A/B estruturados e recalibração constante de ativos de aquisição.",
    deliverables: ["Relatórios Computacionais Calor", "Aprimoramentos de Conversão", "Reuniões Mensais de Growth"],
    iconName: "Microscope"
  }
];

export const STATS: StatItem[] = [
  {
    id: "stat-1",
    value: "200+",
    label: "Projetos Entregues",
    description: "Soluções digitais executadas com excelência para empresas de múltiplos segmentos."
  },
  {
    id: "stat-2",
    value: "98%",
    label: "Satisfação dos Clientes",
    description: "Índice de aprovação medido ao final de cada projeto entregue."
  },
  {
    id: "stat-3",
    value: "3x",
    label: "Média de ROI",
    description: "Retorno médio sobre investimento gerado para nossos clientes em 12 meses."
  },
  {
    id: "stat-4",
    value: "8+",
    label: "Anos de Mercado",
    description: "Uma trajetória sólida construída sobre resultados e inovação constante."
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: "diff-1",
    title: "Tecnologia de Ponta",
    description: "Utilizamos as mais recentes ferramentas e frameworks do mercado, garantindo que seu produto digital esteja sempre à frente da concorrência."
  },
  {
    id: "diff-2",
    title: "Equipe Especializada",
    description: "Designers, desenvolvedores e estrategistas de alto nível trabalhando em sinergia absoluta para superar suas expectativas."
  },
  {
    id: "diff-3",
    title: "Foco em Resultados",
    description: "Não entregamos apenas projetos bonitos — entregamos soluções que aumentam receita, reduzem custos e fortalecem sua marca."
  },
  {
    id: "diff-4",
    title: "Suporte Contínuo",
    description: "Nossa parceria não termina no lançamento. Acompanhamos, otimizamos e evoluímos seus produtos digitais continuamente."
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "port-1",
    title: "Bero Beskos",
    category: "site",
    description: "Plataforma corporativa internacional de análise financeira, focando em UX sob medida e performance incomparável.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    client: "Bero Beskos Ltd",
    outcome: "Melhoria de +140% no carregamento de tabelas complexas",
    accentColor: "#3E8BFF"
  },
  {
    id: "port-2",
    title: "Cuppoy Tables",
    category: "site",
    description: "Landing page e catálogo digital dinâmico premium interativo para um estúdio de arquitetura gastronômica.",
    imageSrc: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80",
    client: "Cuppoy Group",
    outcome: "Redução de 45% do bounce rate de usuários móveis",
    accentColor: "#e2a075"
  },
  {
    id: "port-3",
    title: "ApexWallet",
    category: "app",
    description: "Painel mobile inteligente de microtransações financeiras e portfólio criptográfico integrado de alta agilidade.",
    imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&q=80",
    client: "ApexWallet S.A.",
    outcome: "+300k downloads orgânicos nos primeiros 6 meses",
    accentColor: "#10B981"
  },
  {
    id: "port-4",
    title: "SaaS CRM Panel",
    category: "marketing",
    description: "Configuração estratégica de funil multi-etapa, rastreamento de links quentes e sincronização de vendas automatizadas.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    client: "LeadSphere",
    outcome: "Crescimento de 3.2x nas vendas convertidas por e-mail",
    accentColor: "#F59E0B"
  },
  {
    id: "port-5",
    title: "Beeicocvos Stirlet",
    category: "marketing",
    description: "Portal moderno para a indústria de marketing de afiliados impulsionada por posicionamento SEO de longa cauda.",
    imageSrc: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80",
    client: "Affiliate Stirlet Network",
    outcome: "Alcançou o top 3 do Google em 14 termos difíceis",
    accentColor: "#EC4899"
  },
  {
    id: "port-6",
    title: "Aureum Studio",
    category: "branding",
    description: "Rebranding visual luxuoso de uma incorporadora imobiliária, desenhando guias, logos e manual completo de tom de voz.",
    imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    client: "Aureum Empreendimentos",
    outcome: "Valor de marca percebido qualificado para vendas High-End",
    accentColor: "#FBBF24"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    author: "Carlos Mendes",
    role: "CEO",
    company: "TechBrasil Soluções",
    quote: "A Gêneses transformou completamente nossa presença digital. O novo site triplicou nossa taxa de conversão em menos de 90 dias. Parceria indispensável para qualquer empresa séria."
  },
  {
    id: "test-2",
    author: "Fernanda Lima",
    role: "Diretora de Marketing",
    company: "Grupo Ávance",
    quote: "Profissionalismo, criatividade e entrega no prazo. A estratégia de marketing digital desenvolvida pela Gêneses foi decisiva para alcançarmos novos mercados e batermos nossas metas."
  },
  {
    id: "test-3",
    author: "Ricardo Souza",
    role: "Diretor de Inovação",
    company: "Nexum Capital",
    quote: "O aplicativo desenvolvido pela equipe superou todas as expectativas. Interface intuitiva, performance excelente e suporte pós-lançamento impecável. Altamente recomendo."
  }
];

export const ECO_NODES: EcoNode[] = [
  {
    id: "eco-1",
    label: "Design de Sites",
    description: "UI/UX premium, landing pages, e-commerce",
    subText: "Design sob medida altamente responsivo focado em leads",
    color: "#e2a075",
    position: { x: 50, y: 15 }
  },
  {
    id: "eco-2",
    label: "Desenvolvimento",
    description: "mobile iOS/Android, web apps",
    subText: "Sistemas nativos rápidos com TypeScript escalável",
    color: "#3E8BFF",
    position: { x: 80, y: 30 }
  },
  {
    id: "eco-3",
    label: "Marketing Digital",
    description: "SEO, tráfego pago, automação",
    subText: "Campanhas precisas orientadas à otimização de custo",
    color: "#10B981",
    position: { x: 75, y: 70 }
  },
  {
    id: "eco-4",
    label: "Branding & Identidade",
    description: "logo, brand book, naming",
    subText: "Construção de marcas que nascem prontas para o topo",
    color: "#EC4899",
    position: { x: 50, y: 85 }
  },
  {
    id: "eco-5",
    label: "Gestão Redes Sociais",
    description: "conteúdo, engajamento, crescimento",
    subText: "Criação de marcas envolventes e criativos de alto impacto",
    color: "#F59E0B",
    position: { x: 25, y: 70 }
  },
  {
    id: "eco-6",
    label: "Consultoria Estratégica",
    description: "diagnóstico digital, planejamento, mensuração",
    subText: "Direcionamento focado em crescimento sólido e lucrativo",
    color: "#a855f7",
    position: { x: 20, y: 30 }
  }
];
