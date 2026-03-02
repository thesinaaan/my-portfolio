export interface Project {
    slug: string;
    title: string;
    category: string;
    image: string;
    year: string;
    description: string;
    tech: string[];
    link: string;
    mission: {
        brief: string;
        outcome: string;
    };
}

export const PROJECTS: Project[] = [
    {
        slug: "nexus",
        title: "Nexus Dashboard",
        category: "SaaS Analytics Platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop",
        year: "2024",
        description: "A comprehensive analytics dashboard for enterprise data visualization, featuring real-time WebSocket updates and complex filtering.",
        tech: ["Next.js 14", "TypeScript", "Tremor UI", "Supabase"],
        link: "https://example.com",
        mission: {
            brief: "Build a scalable dashboard to visualize 1M+ rows of data without pagination lag.",
            outcome: "Implemented virtualized tables and server-side aggregation, reducing load times by 90%."
        }
    },
    {
        slug: "aether",
        title: "Aether Commerce",
        category: "Headless E-Com API",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=3540&auto=format&fit=crop",
        year: "2023",
        description: "A high-performance headless commerce API handling global payments and inventory sync across multiple channels.",
        tech: ["NestJS", "GraphQL", "Redis", "Stripe Connect"],
        link: "https://example.com",
        mission: {
            brief: "Architect a fault-tolerant API that can sustain 5000 requests/second during flash sales.",
            outcome: "Zero downtime during Black Friday launch; sub-50ms response times globally."
        }
    },
    {
        slug: "chronos",
        title: "Chronos System",
        category: "Design System & UI Kit",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=3540&auto=format&fit=crop",
        year: "2023",
        description: "A pixel-perfect, accessible component library used across 12+ internal products, enforcing strict brand consistency.",
        tech: ["React", "Tailwind CSS", "Storybook", "Radix UI"],
        link: "https://example.com",
        mission: {
            brief: "Unify the UI across all company products to reduce development time.",
            outcome: "Reduced frontend shipping time by 40% and eliminated design drift."
        }
    },
];
