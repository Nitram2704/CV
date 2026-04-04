// Portfolio Data - Unified structure for all projects
// Merged from Smart-Adapt-CV/backend/data/portfolio/*.json

const portfolioProjects = [
    {
        id: 'mambo-fitness',
        name: 'Mambo Fitness',
        shortName: 'Mambo',
        description: 'Full fitness ecosystem with AI, RLS security and scalable architecture for 100k+ users.',
        longDescription: 'AI-powered mobile fitness application featuring workout tracking, personalized plans, gamification and integrated monetization. Stands out for its secure architecture with Row Level Security and ability to scale to 100,000 users.',
        category: 'mobile',
        categories: ['mobile', 'fullstack', 'ai'],
        stack: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'RLS', 'RevenueCat', 'AI'],
        githubUrl: 'https://github.com/Nitram2704/mambo',
        liveUrl: null,
        impactMetrics: 'Secure and monetizable architecture designed to scale to 100k users',
        featured: true,
        status: 'in-progress',
        color: '#10b981', // Emerald
        icon: '💪',
        highlights: [
            'Row Level Security (RLS) for data protection',
            'RevenueCat integration for monetization',
            'Scalable architecture for 100k+ users',
            'Gamification with achievement system'
        ],
        metrics: {
            type: 'chart',
            data: [1000, 100000],
            labels: ['Standard MVP', 'Mambo Architecture']
        }
    },
    {
        id: 'autoqa',
        name: 'AutoQA',
        shortName: 'AutoQA',
        description: 'Agentic testing tool with self-healing using AI to analyze failures and generate automatic fixes.',
        longDescription: 'Test automation system leveraging AI (Gemini) to analyze test failures, generate automatic corrections and execute self-healing loops. Reduces test maintenance time by 70%.',
        category: 'ai',
        categories: ['ai', 'backend', 'devtools'],
        stack: ['TypeScript', 'Playwright', 'Gemini API', 'Node.js'],
        githubUrl: 'https://github.com/Nitram2704/AutoQA',
        liveUrl: null,
        impactMetrics: '70% reduction in test maintenance time through self-healing',
        featured: true,
        status: 'completed',
        color: '#f59e0b', // Amber
        icon: '🤖',
        highlights: [
            'AI-powered test self-healing',
            'Intelligent failure analysis',
            'Playwright integration',
            '70% maintenance time reduction'
        ],
        metrics: {
            type: 'stat',
            value: '70%',
            label: 'Maintenance Time Reduction'
        }
    },
    {
        id: 'smart-adapt-cv',
        name: 'Smart-Adapt CV',
        shortName: 'Smart CV',
        description: 'AI-powered career optimization engine that adapts CVs to specific job postings using local LLMs.',
        longDescription: 'Intelligent system using local language models (Ollama + GLM-4.7) to analyze job postings and automatically adapt CVs and cover letters. Reduces manual effort by 90%.',
        category: 'ai',
        categories: ['ai', 'fullstack', 'backend'],
        stack: ['Python', 'FastAPI', 'React', 'Ollama', 'GLM-4.7', 'PostgreSQL'],
        githubUrl: 'https://github.com/Nitram2704/Smart-Adapt-CV',
        liveUrl: null,
        impactMetrics: '90% automation of the CV adaptation process',
        featured: true,
        status: 'completed',
        color: '#8b5cf6', // Purple
        icon: '📄',
        highlights: [
            'Local LLMs (Ollama + GLM-4.7)',
            'Intelligent job posting analysis',
            'Automatic cover letter generation',
            '90% manual effort reduction'
        ],
        metrics: {
            type: 'stat',
            value: '90%',
            label: 'Manual Effort Reduction'
        }
    },
    {
        id: 'repo-whisperer',
        name: 'RepoWhisperer',
        shortName: 'Whisperer',
        description: 'Agentic documentation generator that automates Markdown file creation through LLM-powered code analysis.',
        longDescription: 'Advanced productivity tool that orchestrates AI agents to analyze repositories, extract code structures and generate professional documentation. Uses async and incremental processing to keep technical knowledge always in sync.',
        category: 'ai',
        categories: ['ai', 'devtools', 'backend'],
        stack: ['Python', 'FastAPI', 'FastEmbed', 'Gemini API', 'DeepSeek', 'OpenRouter'],
        githubUrl: 'https://github.com/Nitram2704/RepoWhisperer-',
        liveUrl: null,
        impactMetrics: 'Full automation of technical documentation with incremental updates',
        featured: true,
        status: 'completed',
        color: '#0ea5e9', // Cyan
        icon: '📚',
        highlights: [
            'LLM agent orchestration',
            'Semantic analysis with FastEmbed',
            'Incremental content generation',
            'Multi-model support (Gemini/DeepSeek)'
        ],
        metrics: {
            type: 'stat',
            value: '100%',
            label: 'Automated Documentation'
        }
    },
    {
        id: 'jailbreakforge',
        name: 'JailbreakForge',
        shortName: 'Forge',
        description: 'Red Teaming framework for LLMs that automates jailbreak testing and generates scored security reports.',
        longDescription: 'Advanced security tool using an evolutionary engine to mutate attacks and evaluate AI model defenses. Includes an "LLM-as-Judge" system to classify vulnerabilities and generate professional reports with a Security Score.',
        category: 'ai',
        categories: ['ai', 'devtools', 'backend'],
        stack: ['Python', 'Typer', 'Groq', 'OpenRouter', 'SQLite', 'Jinja2'],
        githubUrl: 'https://github.com/Nitram2704/JailBreakForge',
        liveUrl: null,
        impactMetrics: 'Full automation of LLM security audits with executive reports',
        featured: true,
        status: 'completed',
        color: '#ef4444', // Red
        icon: '🛡️',
        highlights: [
            'Evolutionary attack engine',
            'LLM-as-Judge evaluation',
            'Dynamic security reports',
            'Multi-model integration (Groq/OpenRouter)'
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
        description: 'Real-time inventory control system with IoT sensor integration and industrial control dashboard.',
        longDescription: 'Premium platform designed for stock management with sub-2s latency. Features an interactive industrial dashboard, IoT sensor API, and real-time replication system with Supabase for perfect traceability.',
        category: 'fullstack',
        categories: ['fullstack', 'data', 'backend', 'frontend'],
        stack: ['Next.js 15', 'NestJS', 'Supabase Realtime', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
        githubUrl: 'https://github.com/Nitram2704/Stock',
        liveUrl: null,
        impactMetrics: '<2s latency on inventory updates via IoT',
        featured: true,
        status: 'completed',
        color: '#3b82f6', // Blue
        icon: '📦',
        highlights: [
            'Real-time updates (<2s)',
            'Industrial dashboard with Next.js 15',
            'Robust backend with NestJS and RBAC',
            'IoT simulation integration'
        ],
        metrics: {
            type: 'stat',
            value: '<2s',
            label: 'Update Latency'
        }
    },
    {
        id: 'pascualbet',
        name: 'PascualBet Casino',
        shortName: 'PascualBet',
        description: 'Betting platform with complex real-time logic and synchronized balance management via SQL Server.',
        longDescription: 'Casino and betting system with complex transactional logic. Implements real-time balance synchronization, multi-game management and secure architecture with protected backend logic.',
        category: 'fullstack',
        categories: ['fullstack', 'backend', 'frontend'],
        stack: ['Vue 3', 'Node.js', 'SQL Server', 'Vite', 'Express'],
        githubUrl: 'https://github.com/samuelmontoya1314/pascualbet',
        liveUrl: null,
        impactMetrics: 'Real-time balance synchronization with 100% accuracy',
        featured: false,
        status: 'completed',
        color: '#eab308', // Yellow
        icon: '🎰',
        highlights: [
            'Protected transactional logic',
            'Real-time synchronization',
            'Multiple casino games',
            'Secure backend architecture'
        ],
        metrics: {
            type: 'stat',
            value: '100%',
            label: 'Real-Time Balance Sync'
        }
    },
    {
        id: 'pos-system',
        name: 'POS System',
        shortName: 'POS',
        description: 'Point-of-sale system integrated with WooCommerce for syncing inventory and sales with live e-commerce.',
        longDescription: 'Complete point-of-sale system for retail management with full WooCommerce integration. Syncs inventory and sales between physical store and e-commerce. Processes 1,000+ daily transactions with 99.9% uptime.',
        category: 'fullstack',
        categories: ['fullstack', 'backend'],
        stack: ['Java', 'Spring Boot', 'MySQL', 'WooCommerce API', 'REST'],
        githubUrl: 'https://github.com/Nitram2704/POS',
        liveUrl: null,
        impactMetrics: '1,000+ daily transactions processed with 99.9% uptime',
        featured: false,
        status: 'completed',
        color: '#3b82f6', // Blue
        icon: '🏪',
        highlights: [
            'Full WooCommerce integration',
            'Real-time inventory sync',
            '1,000+ daily transactions',
            '99.9% uptime'
        ],
        metrics: {
            type: 'stat',
            value: '1,000+',
            label: 'Daily Transactions'
        }
    },
    {
        id: 'h3-muelitas',
        name: 'H3 Muelitas',
        shortName: 'Muelitas',
        description: 'Robust clinic management system with 4-layer architecture and optimization through Stored Procedures.',
        longDescription: 'Enterprise system for dental clinic management with decoupled 4-layer architecture. Uses Stored Procedures for performance optimization and maintains clear separation between presentation, logic and data layers.',
        category: 'backend',
        categories: ['backend', 'fullstack'],
        stack: ['C# .NET', 'WinForms', 'SQL Server', 'Stored Procedures', 'ADO.NET'],
        githubUrl: 'https://github.com/stivenalexs/h3_muelitas',
        liveUrl: null,
        impactMetrics: 'Improved efficiency in dental records management',
        featured: false,
        status: 'completed',
        color: '#6366f1', // Indigo
        icon: '🦷',
        highlights: [
            'Decoupled 4-layer architecture',
            'Optimized Stored Procedures',
            'Complete clinic management',
            'Clear separation of concerns'
        ],
        metrics: {
            type: 'diagram',
            layers: ['Presentation', 'Logic', 'Data', 'SQL Server']
        }
    },
    {
        id: 'finanzas-personales',
        name: 'Personal Finance Tracker',
        shortName: 'Finance',
        description: 'Personal finance tracker with Google Sheets sync and budget management.',
        longDescription: 'Complete personal financial tracking system with Google Sheets integration. Automates financial tracking for 50+ users with real-time budget alerts and expense analysis.',
        category: 'backend',
        categories: ['backend', 'data'],
        stack: ['Python', 'Pandas', 'Google Sheets API', 'FastAPI'],
        githubUrl: null,
        liveUrl: null,
        impactMetrics: 'Automated financial tracking for 50+ users with real-time alerts',
        featured: false,
        status: 'completed',
        color: '#14b8a6', // Teal
        icon: '💰',
        highlights: [
            'Google Sheets integration',
            'Real-time budget alerts',
            '50+ active users',
            'Automated expense analysis'
        ],
        metrics: {
            type: 'stat',
            value: '50+',
            label: 'Active Users'
        }
    }
];

// Category definitions
const categories = {
    all: { name: 'All', color: '#64748b', icon: '📦' },
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
