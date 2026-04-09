export type Lang = 'es' | 'en';

export interface Job {
  title: string;
  meta: string;
  badge?: string;
  bilateral?: string;
  desc?: string;
  bullets: string[];
}

export interface Project {
  title: string;
  context: string;
  desc: string;
  stack: string[];
}

export interface SkillGroup {
  title: string;
  chips: string[];
  highlights: number[];
}

export interface EduItem {
  degree: string;
  honor?: string;
  institution: string;
  date: string;
}

export interface CertRow {
  name: string;
  institution: string;
  year: string;
}

export interface CVTranslation {
  langBtn: string;
  themeLight: string;
  themeDark: string;
  heroTitle: string;
  heroDownload: string;
  contactLocation: string;
  summaryTitle: string;
  summaryText: string;
  experienceTitle: string;
  jobs: Job[];
  projectsTitle: string;
  projects: Project[];
  skillsTitle: string;
  skillGroups: SkillGroup[];
  educationTitle: string;
  education: EduItem[];
  honor: string;
  certsTitle: string;
  certsHeaders: [string, string, string];
  certs: CertRow[];
  langsTitle: string;
  langItems: { name: string; level: string; cls: string }[];
  contactTitle: string;
  footer: string;
}

export const translations: Record<Lang, CVTranslation> = {
  es: {
    langBtn: 'English',
    themeLight: 'Modo claro',
    themeDark: 'Modo oscuro',
    heroTitle: 'Ingeniero de Software · Desarrollador Backend &amp; AI · Automatización',
    heroDownload: '⬇ Descargar CV PDF',
    contactLocation: 'Ñuñoa, Santiago, Chile',
    summaryTitle: 'Resumen Profesional',
    summaryText: `Ingeniero Informático <strong>egresado con Máximo Honor</strong> con más de 4 años de experiencia en desarrollo backend,
      automatización de procesos y gestión operacional en el sector asegurador. Especializado en desarrollo backend
      (<strong>.NET, Python</strong>), integración de soluciones de <strong>IA/LLM</strong> y arquitecturas cloud. Participé en el
      programa internacional <strong>Move On ELA 2025 de Bupa</strong>, trabajando junto a un equipo de ingeniería de IA en la
      configuración y ajuste de agentes conversacionales para la mejora de la experiencia del cliente en múltiples canales de atención
      en Sanitas España. Interés activo en proyectos de inteligencia artificial, agentes autónomos (LLM) e infraestructura cloud.`,
    experienceTitle: 'Experiencia Profesional',
    jobs: [
      {
        title: 'Bupa Chile / Sanitas España — Move On ELA 2025',
        meta: '🇪🇸 España · 2025',
        badge: '🌍 Experiencia Internacional',
        bilateral: '🇨🇱 Intercambio Bupa Chile ↔ Sanitas España',
        desc: `Seleccionado para participar en <strong>Move On ELA 2025</strong>, programa de intercambio laboral internacional entre
          Bupa Chile y Sanitas España, con foco en la mejora de la experiencia del cliente en canales digitales de atención.`,
        bullets: [
          `Colaboración activa con el equipo de <strong>ingeniería de IA</strong> en la configuración, ajuste y optimización de
            <strong>agentes conversacionales</strong> desplegados en múltiples canales de atención al cliente.`,
          `Análisis de procesos de atención al cliente end-to-end, identificando fricciones y proponiendo mejoras en sistemas y flujos operativos.`,
          `Exposición a la arquitectura tecnológica completa de Sanitas España (frontend, backend y bases de datos), obteniendo visión integral del stack a escala europea.`,
          `Desarrollo de propuestas de mejora aplicables al mercado chileno, alineadas con la misión de transferencia de conocimiento entre filiales.`,
        ]
      },
      {
        title: 'Bupa Seguros — Analista TI | Desarrollador Backend .NET &amp; Python RPA',
        meta: 'Octubre 2023 – Actualidad · Santiago, Chile',
        bullets: [
          `Desarrollo y mantenimiento de APIs REST y servicios backend en <strong>.NET/C#</strong> para el programa <strong>Pyme Digital</strong>, optimizando flujos para más de 500 empresas aseguradas.`,
          `Implementación de automatizaciones RPA con <strong>Python y Power Automate</strong>, reduciendo tiempos de procesamiento manual en operaciones de cobranza y suscripción.`,
          `Colaboración en equipos ágiles <strong>(Scrum)</strong> para definir requerimientos y entregar incrementos funcionales en sprints de tres semanas.`,
          `Configuración y gestión de entornos de despliegue en <strong>Azure</strong> y contenedores <strong>Docker</strong>.`,
        ]
      },
      {
        title: 'Bupa Seguros — Supervisor de Movimientos y Cobranzas',
        meta: 'Octubre 2022 – Septiembre 2023 · Santiago, Chile',
        bullets: [
          `Liderazgo de equipo de <strong>9 profesionales</strong> en el área de movimientos y cobranzas.`,
          `Diseño e implementación de formulario de gestión de requerimientos en <strong>Zendesk</strong>, estandarizando la atención y trazabilidad de tickets.`,
          `Gestión de reportes de KPIs operacionales en <strong>Power BI</strong> para toma de decisiones gerenciales en tiempo real.`,
          `Puente activo entre negocio y TI en proyectos de automatización de flujos operativos.`,
        ]
      },
      {
        title: 'Bupa Seguros — Ejecutivo de Operaciones y Suscripción',
        meta: 'Mayo 2019 – Septiembre 2022 · Santiago, Chile',
        bullets: [
          `Gestión integral de la suscripción de seguros de vida y salud, evaluando perfiles de riesgo en sistemas core.`,
          `Desarrollo de automatizaciones en <strong>Excel (VBA/Macros y Power Query ETL)</strong> para optimizar tiempos operativos.`,
          `Análisis y normalización de datos de carteras de clientes aplicando <strong>SQL</strong>.`,
        ]
      },
      {
        title: 'Soporte Técnico — Comunicaciones Morlain C.A. &amp; Cooperativa Orinokia Seguros',
        meta: 'Agosto 2013 – Diciembre 2017 · Venezuela',
        bullets: [
          `Administración de infraestructura de redes, servidores y sistemas de respaldo.`,
          `Soporte técnico a usuarios, mantenimiento de equipos y configuración de sistemas de seguridad perimetral.`,
        ]
      }
    ],
    projectsTitle: 'Proyectos Destacados',
    projects: [
      {
        title: 'Agente de Procesamiento de Documentos con LLM',
        context: 'Personal / Freelance',
        desc: 'Pipeline en Python con integración de modelos LLM (Ollama / Open-WebUI) para extracción y análisis automatizado de documentos. Arquitectura modular con API REST y procesamiento asíncrono.',
        stack: ['Python', 'Ollama', 'Open-WebUI', 'FastAPI', 'Docker']
      },
      {
        title: 'Plataforma de Automatización con n8n',
        context: 'Freelance',
        desc: 'Orquestación de flujos multi-sistema integrando APIs REST, bases de datos y servicios cloud para automatización end-to-end de procesos de negocio.',
        stack: ['n8n', 'REST APIs', 'SQL', 'Docker', 'Azure']
      }
    ],
    skillsTitle: 'Habilidades Técnicas',
    skillGroups: [
      { title: 'Lenguajes y Desarrollo', chips: ['C# / .NET', 'Python', 'SQL', 'JavaScript', 'Bash / Shell'], highlights: [] },
      { title: 'Backend & APIs', chips: ['ASP.NET Core', 'REST APIs', 'FastAPI', 'Microservicios', 'POO'], highlights: [] },
      { title: 'IA & Automatización', chips: ['Agentes conversacionales', 'LLM (Ollama, Open-WebUI)', 'Python RPA', 'Power Automate', 'n8n', 'GitHub Copilot', 'Claude CLI'], highlights: [0, 1] },
      { title: 'Cloud & DevOps', chips: ['Azure', 'Docker', 'Git / GitHub', 'CI/CD', 'Linux (Ubuntu)'], highlights: [] },
      { title: 'Datos & Analytics', chips: ['SQL Server', 'SQLite', 'Pandas', 'NumPy', 'Power BI', 'Excel Avanzado (VBA, Power Query)'], highlights: [] },
      { title: 'Seguridad & Metodologías', chips: ['Ethical Hacking', 'Cisco CyberOps', 'Informática Forense', 'Scrum / Agile'], highlights: [] },
    ],
    educationTitle: 'Formación Académica',
    education: [
      { degree: 'Ingeniería Informática', honor: 'Egresado con Máximo Honor', institution: 'Universidad Mayor, Chile', date: '2021 – 2025' },
      { degree: 'Administración Comercial', institution: 'Universidad de Carabobo, Venezuela', date: '2013 – 2017' },
    ],
    honor: 'Egresado con Máximo Honor',
    certsTitle: 'Certificaciones',
    certsHeaders: ['Certificación', 'Institución', 'Año'],
    certs: [
      { name: 'Cisco CyberOps Associate', institution: 'Cisco Networking Academy', year: '2024' },
      { name: 'Cisco Cybersecurity Essentials', institution: 'Cisco Networking Academy', year: '2024' },
      { name: 'Cisco Networking (CCNA fundamentos)', institution: 'Cisco Networking Academy', year: '2023' },
      { name: 'Cambridge English Placement Test (B2)', institution: 'Cambridge Assessment', year: '2021' },
      { name: 'Power BI (20 hrs)', institution: 'ProgramBI', year: '2020' },
      { name: 'SQL Server Aplicado (15 hrs)', institution: 'ProgramBI', year: '2020' },
      { name: 'Excel Avanzado (50 hrs)', institution: 'OTC Capacitación Ltda.', year: '2019' },
      { name: 'Pentester / Ethical Hacking (28 hrs)', institution: 'Centro Lazarus', year: '2017' },
      { name: 'Informática Forense (32 hrs)', institution: 'Contramedida PMI / Lazarus', year: '2017' },
    ],
    langsTitle: 'Idiomas',
    langItems: [
      { name: 'Español', level: 'Nativo', cls: 'native' },
      { name: 'Inglés', level: 'B2 — Cambridge English Placement Test', cls: 'b2' },
    ],
    contactTitle: 'Contacto',
    footer: 'Sergio Hernández · Santiago, Chile · 2026',
  },

  en: {
    langBtn: 'Español',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    heroTitle: 'Software Engineer · Backend &amp; AI Developer · Automation',
    heroDownload: '⬇ Download CV PDF',
    contactLocation: 'Ñuñoa, Santiago, Chile',
    summaryTitle: 'Professional Summary',
    summaryText: `Computer Engineer <strong>graduated with Highest Honors</strong> with over 4 years of experience in backend development,
      process automation and operational management in the insurance sector. Specialized in backend development
      (<strong>.NET, Python</strong>), <strong>AI/LLM</strong> solution integration and cloud architectures. Participated in the
      international program <strong>Move On ELA 2025 by Bupa</strong>, collaborating with an AI engineering team on the configuration
      and tuning of conversational agents to improve customer experience across multiple service channels at Sanitas Spain.
      Actively interested in artificial intelligence, autonomous agents (LLM) and cloud infrastructure projects.`,
    experienceTitle: 'Professional Experience',
    jobs: [
      {
        title: 'Bupa Chile / Sanitas Spain — Move On ELA 2025',
        meta: '🇪🇸 Spain · 2025',
        badge: '🌍 International Experience',
        bilateral: '🇨🇱 Exchange: Bupa Chile ↔ Sanitas Spain',
        desc: `Selected to participate in <strong>Move On ELA 2025</strong>, Bupa's international job exchange program between
          Bupa Chile and Sanitas Spain, focused on improving customer experience across digital service channels.`,
        bullets: [
          `Active collaboration with the <strong>AI engineering team</strong> on the configuration, tuning and optimization of
            <strong>conversational agents</strong> deployed across multiple customer service channels.`,
          `End-to-end analysis of customer service processes, identifying friction points and proposing improvements to systems and operational workflows.`,
          `Exposure to Sanitas Spain's full technology stack (frontend, backend and databases), gaining a comprehensive view of architecture at European scale.`,
          `Development of improvement proposals applicable to the Chilean market, aligned with the program's knowledge transfer mission between subsidiaries.`,
        ]
      },
      {
        title: 'Bupa Seguros — IT Analyst | Backend Developer .NET &amp; Python RPA',
        meta: 'October 2023 – Present · Santiago, Chile',
        bullets: [
          `Development and maintenance of REST APIs and backend services in <strong>.NET/C#</strong> for the <strong>Pyme Digital</strong> program, optimizing workflows for over 500 insured companies.`,
          `Implementation of RPA automations with <strong>Python and Power Automate</strong>, reducing manual processing times in billing and underwriting operations.`,
          `Collaboration in agile teams <strong>(Scrum)</strong> to define requirements and deliver functional increments in three-week sprints.`,
          `Configuration and management of deployment environments on <strong>Azure</strong> and <strong>Docker</strong> containers.`,
        ]
      },
      {
        title: 'Bupa Seguros — Movements & Collections Supervisor',
        meta: 'October 2022 – September 2023 · Santiago, Chile',
        bullets: [
          `Leadership of a team of <strong>9 professionals</strong> in the movements and collections area.`,
          `Design and implementation of a request management form in <strong>Zendesk</strong>, standardizing service workflows and ticket traceability.`,
          `Management of operational KPI reports in <strong>Power BI</strong> to support real-time managerial decision-making.`,
          `Active bridge between business and IT in operational workflow automation projects.`,
        ]
      },
      {
        title: 'Bupa Seguros — Operations & Underwriting Executive',
        meta: 'May 2019 – September 2022 · Santiago, Chile',
        bullets: [
          `Comprehensive management of life and health insurance underwriting, evaluating risk profiles in core systems.`,
          `Development of automations in <strong>Excel (VBA/Macros and Power Query ETL)</strong> to optimize operational processing times.`,
          `Analysis and normalization of client portfolio data using <strong>SQL</strong>.`,
        ]
      },
      {
        title: 'IT Support — Comunicaciones Morlain C.A. &amp; Cooperativa Orinokia Seguros',
        meta: 'August 2013 – December 2017 · Venezuela',
        bullets: [
          `Administration of network infrastructure, servers and backup systems.`,
          `Technical support for users, equipment maintenance and perimeter security system configuration.`,
        ]
      }
    ],
    projectsTitle: 'Featured Projects',
    projects: [
      {
        title: 'Document Processing Agent with LLM',
        context: 'Personal / Freelance',
        desc: 'Python pipeline with LLM model integration (Ollama / Open-WebUI) for automated document extraction and analysis. Modular architecture with REST API and asynchronous processing.',
        stack: ['Python', 'Ollama', 'Open-WebUI', 'FastAPI', 'Docker']
      },
      {
        title: 'Automation Platform with n8n',
        context: 'Freelance',
        desc: 'Multi-system workflow orchestration integrating REST APIs, databases and cloud services for end-to-end business process automation.',
        stack: ['n8n', 'REST APIs', 'SQL', 'Docker', 'Azure']
      }
    ],
    skillsTitle: 'Technical Skills',
    skillGroups: [
      { title: 'Languages & Development', chips: ['C# / .NET', 'Python', 'SQL', 'JavaScript', 'Bash / Shell'], highlights: [] },
      { title: 'Backend & APIs', chips: ['ASP.NET Core', 'REST APIs', 'FastAPI', 'Microservices', 'OOP'], highlights: [] },
      { title: 'AI & Automation', chips: ['Conversational agents', 'LLM (Ollama, Open-WebUI)', 'Python RPA', 'Power Automate', 'n8n', 'GitHub Copilot', 'Claude CLI'], highlights: [0, 1] },
      { title: 'Cloud & DevOps', chips: ['Azure', 'Docker', 'Git / GitHub', 'CI/CD', 'Linux (Ubuntu)'], highlights: [] },
      { title: 'Data & Analytics', chips: ['SQL Server', 'SQLite', 'Pandas', 'NumPy', 'Power BI', 'Advanced Excel (VBA, Power Query)'], highlights: [] },
      { title: 'Security & Methodologies', chips: ['Ethical Hacking', 'Cisco CyberOps', 'Digital Forensics', 'Scrum / Agile'], highlights: [] },
    ],
    educationTitle: 'Education',
    education: [
      { degree: 'Computer Engineering', honor: 'Graduated with Highest Honors', institution: 'Universidad Mayor, Chile', date: '2021 – 2025' },
      { degree: 'Business Administration', institution: 'Universidad de Carabobo, Venezuela', date: '2013 – 2017' },
    ],
    honor: 'Graduated with Highest Honors',
    certsTitle: 'Certifications',
    certsHeaders: ['Certification', 'Institution', 'Year'],
    certs: [
      { name: 'Cisco CyberOps Associate', institution: 'Cisco Networking Academy', year: '2024' },
      { name: 'Cisco Cybersecurity Essentials', institution: 'Cisco Networking Academy', year: '2024' },
      { name: 'Cisco Networking (CCNA Fundamentals)', institution: 'Cisco Networking Academy', year: '2023' },
      { name: 'Cambridge English Placement Test (B2)', institution: 'Cambridge Assessment', year: '2021' },
      { name: 'Power BI (20 hrs)', institution: 'ProgramBI', year: '2020' },
      { name: 'Applied SQL Server (15 hrs)', institution: 'ProgramBI', year: '2020' },
      { name: 'Advanced Excel (50 hrs)', institution: 'OTC Capacitación Ltda.', year: '2019' },
      { name: 'Pentester / Ethical Hacking (28 hrs)', institution: 'Centro Lazarus', year: '2017' },
      { name: 'Digital Forensics (32 hrs)', institution: 'Contramedida PMI / Lazarus', year: '2017' },
    ],
    langsTitle: 'Languages',
    langItems: [
      { name: 'Spanish', level: 'Native', cls: 'native' },
      { name: 'English', level: 'B2 — Cambridge English Placement Test', cls: 'b2' },
    ],
    contactTitle: 'Contact',
    footer: 'Sergio Hernández · Santiago, Chile · 2026',
  }
};
