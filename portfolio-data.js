// Portfolio Data - Unified structure for all projects
// Merged from Smart-Adapt-CV/backend/data/portfolio/*.json

const portfolioProjects = [
    {
        id: 'mambo-fitness',
        name: 'Mambo Fitness',
        shortName: 'Mambo',
        description: 'Ecosistema fitness completo con IA, seguridad RLS y arquitectura escalable para 100k+ usuarios.',
        longDescription: 'Aplicación móvil fitness con inteligencia artificial que incluye seguimiento de entrenamientos, planes personalizados, gamificación y monetización integrada. Destaca por su arquitectura segura con Row Level Security y capacidad de escalar a 100,000 usuarios.',
        category: 'mobile',
        categories: ['mobile', 'fullstack', 'ai'],
        stack: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'RLS', 'RevenueCat', 'AI'],
        githubUrl: 'https://github.com/Nitram2704/mambo',
        liveUrl: null,
        impactMetrics: 'Arquitectura segura y monetizable diseñada para escalar a 100k usuarios',
        featured: true,
        status: 'in-progress',
        color: '#10b981', // Emerald
        icon: '💪',
        highlights: [
            'Row Level Security (RLS) para protección de datos',
            'Integración con RevenueCat para monetización',
            'Arquitectura escalable para 100k+ usuarios',
            'Gamificación con sistema de logros'
        ],
        metrics: {
            type: 'chart',
            data: [1000, 100000],
            labels: ['MVP Estándar', 'Arquitectura Mambo']
        }
    },
    {
        id: 'autoqa',
        name: 'AutoQA',
        shortName: 'AutoQA',
        description: 'Herramienta de testing agentic con auto-reparación usando IA para analizar fallos y generar fixes automáticos.',
        longDescription: 'Sistema de automatización de pruebas que utiliza IA (Gemini) para analizar fallos de tests, generar correcciones automáticas y ejecutar loops de auto-sanación. Reduce el tiempo de mantenimiento de tests en un 70%.',
        category: 'ai',
        categories: ['ai', 'backend', 'devtools'],
        stack: ['TypeScript', 'Playwright', 'Gemini API', 'Node.js'],
        githubUrl: 'https://github.com/Nitram2704/AutoQA',
        liveUrl: null,
        impactMetrics: 'Reducción del 70% en tiempo de mantenimiento de tests mediante auto-sanación',
        featured: true,
        status: 'completed',
        color: '#f59e0b', // Amber
        icon: '🤖',
        highlights: [
            'Auto-sanación de tests con IA',
            'Análisis inteligente de fallos',
            'Integración con Playwright',
            'Reducción 70% tiempo de mantenimiento'
        ],
        metrics: {
            type: 'stat',
            value: '70%',
            label: 'Reducción en Tiempo de Mantenimiento'
        }
    },
    {
        id: 'smart-adapt-cv',
        name: 'Smart-Adapt CV',
        shortName: 'Smart CV',
        description: 'Motor de optimización de carrera con IA que adapta CVs a vacantes específicas usando LLMs locales.',
        longDescription: 'Sistema inteligente que utiliza modelos de lenguaje locales (Ollama + GLM-4.7) para analizar ofertas de trabajo y adaptar automáticamente CVs y cartas de presentación. Reduce el esfuerzo manual en un 90%.',
        category: 'ai',
        categories: ['ai', 'fullstack', 'backend'],
        stack: ['Python', 'FastAPI', 'React', 'Ollama', 'GLM-4.7', 'PostgreSQL'],
        githubUrl: 'https://github.com/Nitram2704/Smart-Adapt-CV',
        liveUrl: null,
        impactMetrics: 'Automatización del 90% del proceso de adaptación de CVs',
        featured: true,
        status: 'completed',
        color: '#8b5cf6', // Purple
        icon: '📄',
        highlights: [
            'LLMs locales (Ollama + GLM-4.7)',
            'Análisis inteligente de ofertas',
            'Generación automática de cartas',
            'Reducción 90% esfuerzo manual'
        ],
        metrics: {
            type: 'stat',
            value: '90%',
            label: 'Reducción en Esfuerzo Manual'
        }
    },
    {
        id: 'repo-whisperer',
        name: 'RepoWhisperer',
        shortName: 'Whisperer',
        description: 'Generador de documentación agentic que automatiza la creación de archivos Markdown mediante análisis de código con LLMs.',
        longDescription: 'Herramienta avanzada de productividad que orquesta agentes de IA para analizar repositorios, extraer estructuras de código y generar documentación profesional. Utiliza procesamiento asíncrono e incremental para mantener el conocimiento técnico siempre sincronizado.',
        category: 'ai',
        categories: ['ai', 'devtools', 'backend'],
        stack: ['Python', 'FastAPI', 'FastEmbed', 'Gemini API', 'DeepSeek', 'OpenRouter'],
        githubUrl: 'https://github.com/Nitram2704/RepoWhisperer-',
        liveUrl: null,
        impactMetrics: 'Automatización total de la documentación técnica con actualización incremental',
        featured: true,
        status: 'completed',
        color: '#0ea5e9', // Cyan
        icon: '📚',
        highlights: [
            'Orquestación de agentes con LLMs',
            'Análisis semántico con FastEmbed',
            'Generación incremental de contenido',
            'Soporte multi-modelo (Gemini/DeepSeek)'
        ],
        metrics: {
            type: 'stat',
            value: '100%',
            label: 'Documentación Automatizada'
        }
    },
    {
        id: 'jailbreakforge',
        name: 'JailbreakForge',
        shortName: 'Forge',
        description: 'Framework de Red Teaming para LLMs que automatiza pruebas de jailbreak y genera reportes de seguridad puntuados.',
        longDescription: 'Herramienta de seguridad avanzada que utiliza un motor evolutivo para mutar ataques y evaluar las defensas de modelos de IA. Incluye un sistema de "LLM-as-Judge" para clasificar vulnerabilidades y generar reportes profesionales con una puntuación de seguridad (Security Score).',
        category: 'ai',
        categories: ['ai', 'devtools', 'backend'],
        stack: ['Python', 'Typer', 'Groq', 'OpenRouter', 'SQLite', 'Jinja2'],
        githubUrl: 'https://github.com/Nitram2704/JailBreakForge',
        liveUrl: null,
        impactMetrics: 'Automatización total de auditorías de seguridad para LLMs con reportes ejecutivos',
        featured: true,
        status: 'completed',
        color: '#ef4444', // Red
        icon: '🛡️',
        highlights: [
            'Motor de ataque evolutivo',
            'Evaluación LLM-as-Judge',
            'Reportes de seguridad dinámicos',
            'Integración multi-modelo (Groq/OpenRouter)'
        ],
        metrics: {
            type: 'stat',
            value: '0-100',
            label: 'Security Score Range'
        }
    },
    {
        id: 'stock-iot',
        name: 'Stock Management IoT',
        shortName: 'Stock IoT',
        description: 'Sistema de control de inventarios en tiempo real con integración de sensores IoT y panel de control industrial.',
        longDescription: 'Plataforma premium diseñada para la gestión de stocks con latencia menor a 2s. Incluye un dashboard industrial interactivo, API para sensores IoT, y sistema de réplica en tiempo real con Supabase para una trazabilidad perfecta.',
        category: 'fullstack',
        categories: ['fullstack', 'data', 'backend', 'frontend'],
        stack: ['Next.js 15', 'NestJS', 'Supabase Realtime', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Nitram2704/Stock',
        liveUrl: null,
        impactMetrics: 'Latencia <2s en actualizaciones de inventario vía IoT',
        featured: true,
        status: 'completed',
        color: '#3b82f6', // Blue
        icon: '📦',
        highlights: [
            'Actualizaciones en tiempo real (<2s)',
            'Dashboard industrial con Next.js 15',
            'Backend robusto con NestJS y RBAC',
            'Integración mediante simulación IoT'
        ],
        metrics: {
            type: 'stat',
            value: '<2s',
            label: 'Latencia de Actualización'
        }
    },
    {
        id: 'pascualbet',
        name: 'PascualBet Casino',
        shortName: 'PascualBet',
        description: 'Plataforma de apuestas con lógica compleja en tiempo real y gestión de saldo sincronizada mediante SQL Server.',
        longDescription: 'Sistema de casino y apuestas con lógica transaccional compleja. Implementa sincronización de saldo en tiempo real, gestión de juegos múltiples y arquitectura segura con lógica protegida en backend.',
        category: 'fullstack',
        categories: ['fullstack', 'backend', 'frontend'],
        stack: ['Vue 3', 'Node.js', 'SQL Server', 'Vite', 'Express'],
        githubUrl: 'https://github.com/samuelmontoya1314/pascualbet',
        liveUrl: null,
        impactMetrics: 'Sincronización de saldo en tiempo real con 100% de precisión',
        featured: false,
        status: 'completed',
        color: '#eab308', // Yellow
        icon: '🎰',
        highlights: [
            'Lógica transaccional protegida',
            'Sincronización tiempo real',
            'Múltiples juegos de casino',
            'Arquitectura segura backend'
        ],
        metrics: {
            type: 'stat',
            value: '100%',
            label: 'Sincronización de Saldo en Tiempo Real'
        }
    },
    {
        id: 'pos-system',
        name: 'POS System',
        shortName: 'POS',
        description: 'Sistema punto de venta integrado con WooCommerce para sincronizar inventario y ventas con e-commerce en vivo.',
        longDescription: 'Sistema completo de punto de venta para gestión retail con integración total a WooCommerce. Sincroniza inventario y ventas entre tienda física y e-commerce. Procesa 1,000+ transacciones diarias con 99.9% uptime.',
        category: 'fullstack',
        categories: ['fullstack', 'backend'],
        stack: ['Java', 'Spring Boot', 'MySQL', 'WooCommerce API', 'REST'],
        githubUrl: 'https://github.com/Nitram2704/POS',
        liveUrl: null,
        impactMetrics: 'Procesamiento de 1,000+ transacciones diarias con 99.9% uptime',
        featured: false,
        status: 'completed',
        color: '#3b82f6', // Blue
        icon: '🏪',
        highlights: [
            'Integración WooCommerce completa',
            'Sincronización inventario tiempo real',
            '1,000+ transacciones diarias',
            '99.9% uptime'
        ],
        metrics: {
            type: 'stat',
            value: '1,000+',
            label: 'Transacciones Diarias'
        }
    },
    {
        id: 'h3-muelitas',
        name: 'H3 Muelitas',
        shortName: 'Muelitas',
        description: 'Sistema de gestión clínica robusta con arquitectura de 4 capas y optimización mediante Stored Procedures.',
        longDescription: 'Sistema empresarial para gestión de clínica dental con arquitectura de 4 capas desacoplada. Utiliza Stored Procedures para optimización de rendimiento y mantiene separación clara entre presentación, lógica y datos.',
        category: 'backend',
        categories: ['backend', 'fullstack'],
        stack: ['C# .NET', 'WinForms', 'SQL Server', 'Stored Procedures', 'ADO.NET'],
        githubUrl: 'https://github.com/stivenalexs/h3_muelitas',
        liveUrl: null,
        impactMetrics: 'Mejora en eficiencia de gestión de registros dentales',
        featured: false,
        status: 'completed',
        color: '#6366f1', // Indigo
        icon: '🦷',
        highlights: [
            'Arquitectura 4 capas desacoplada',
            'Stored Procedures optimizados',
            'Gestión clínica completa',
            'Separación clara de responsabilidades'
        ],
        metrics: {
            type: 'diagram',
            layers: ['Presentación', 'Lógica', 'Datos', 'SQL Server']
        }
    },
    {
        id: 'finanzas-personales',
        name: 'Finanzas Personales',
        shortName: 'Finanzas',
        description: 'Tracker de finanzas personales con sincronización Google Sheets y gestión de presupuestos.',
        longDescription: 'Sistema completo de seguimiento financiero personal con integración a Google Sheets. Automatiza el tracking financiero para 50+ usuarios con alertas de presupuesto en tiempo real y análisis de gastos.',
        category: 'backend',
        categories: ['backend', 'data'],
        stack: ['Python', 'Pandas', 'Google Sheets API', 'FastAPI'],
        githubUrl: null, // No GitHub URL provided
        liveUrl: null,
        impactMetrics: 'Tracking financiero automatizado para 50+ usuarios con alertas en tiempo real',
        featured: false,
        status: 'completed',
        color: '#14b8a6', // Teal
        icon: '💰',
        highlights: [
            'Integración Google Sheets',
            'Alertas presupuesto tiempo real',
            '50+ usuarios activos',
            'Análisis automático de gastos'
        ],
        metrics: {
            type: 'stat',
            value: '50+',
            label: 'Usuarios Activos'
        }
    }
];

// Category definitions
const categories = {
    all: { name: 'Todos', color: '#64748b', icon: '📦' },
    mobile: { name: 'Mobile', color: '#10b981', icon: '📱' },
    fullstack: { name: 'Fullstack', color: '#3b82f6', icon: '🔧' },
    backend: { name: 'Backend', color: '#6366f1', icon: '⚙️' },
    frontend: { name: 'Frontend', color: '#ec4899', icon: '🎨' },
    ai: { name: 'AI/ML', color: '#f59e0b', icon: '🤖' },
    devtools: { name: 'DevTools', color: '#8b5cf6', icon: '🛠️' },
    data: { name: 'Data', color: '#14b8a6', icon: '📊' }
};

// Get projects by category
function getProjectsByCategory(category) {
    if (category === 'all') return portfolioProjects;
    return portfolioProjects.filter(p => p.categories.includes(category));
}

// Get featured projects
function getFeaturedProjects() {
    return portfolioProjects.filter(p => p.featured);
}

// Get project by ID
function getProjectById(id) {
    return portfolioProjects.find(p => p.id === id);
}

// Export for use in CV.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioProjects, categories, getProjectsByCategory, getFeaturedProjects, getProjectById };
}
