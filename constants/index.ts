import { Project, Skill, NavLink, Metric, ContactInfo, SkillGroup, StrategyBlock } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "work", href: "/work" },
  { label: "skills", href: "/skills" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

export const HERO_CONTENT = {
  status: "open to opportunities · May 2026",
  headline: "Building interfaces that feel inevitable.",
  headlineEmphasis: "interfaces",
  description: "Full-stack web developer based in Kerala, India. I specialise in React ecosystems, performant UIs, and shipping products that users actually love.",
  primaryCTA: "View my work",
  secondaryCTA: "Download résumé",
  stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "Tailwind"],
};

export const PROJECTS: Project[] = [
  {
    slug: "taskflow",
    title: "Taskflow — team productivity dashboard",
    description: "Real-time project tracker pulling GitHub, Linear, and Slack into a single view. Built solo, adopted by 3 teams without being asked.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind", "Vercel"],
    category: "saas",
    production: true,
    featured: true,
    timeToBuild: "6 weeks",
    impactMetrics: [
      { value: "40%", label: "faster standups" },
      { value: "3", label: "teams using it" },
      { value: "98", label: "lighthouse score" },
      { value: "<1.2s", label: "LCP" },
    ],
    links: [
      { label: "Live demo", href: "#", isPrimary: true },
      { label: "GitHub", href: "#" },
      { label: "Case study", href: "#" },
    ],
  },
  {
    slug: "markdiff",
    title: "MarkDiff — markdown comparison tool",
    description: "Side-by-side character-level differ for markdown. Shipped in a weekend. 420 stars organically.",
    tags: ["Next.js", "Monaco", "Node", "Vercel"],
    category: "tool",
    production: true,
    isLive: true,
    impactMetrics: [
      { value: "420", label: "GitHub stars" },
      { value: "10k+", label: "monthly users" },
    ],
    links: [
      { label: "Live demo", href: "#", isPrimary: true },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    slug: "glaze-ui",
    title: "Glaze UI — React component library",
    description: "18 accessible components with Storybook docs, Figma kit, and zero runtime CSS-in-JS.",
    tags: ["React", "Storybook", "Radix", "CSS Modules"],
    category: "ui",
    impactMetrics: [
      { value: "18", label: "components" },
      { value: "0", label: "runtime CSS" },
    ],
    links: [
      { label: "Storybook", href: "#", isPrimary: true },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    slug: "contextsearch",
    title: "ContextSearch — AI site search widget",
    description: "Drop-in search widget powered by Claude API. Understands intent, not just keywords. Currently in beta.",
    tags: ["Next.js", "Claude API", "TypeScript", "Supabase"],
    category: "tool",
    timeToBuild: "WIP",
    isLive: true,
    production: true,
    impactMetrics: [
      { value: "AI", label: "powered" },
      { value: "Beta", label: "status" },
    ],
    links: [
      { label: "Early access", href: "#", isPrimary: true },
      { label: "GitHub", href: "#" },
    ],
  },
];

export const SKILL_TIERS: Skill[] = [
  { name: "React", years: "3 yrs", status: "expert" },
  { name: "TypeScript", years: "2.5 yrs", status: "expert" },
  { name: "CSS / Tailwind", years: "3 yrs", status: "expert" },
  { name: "Next.js", years: "2 yrs", status: "proficient" },
  { name: "Node / Express", years: "1.5 yrs", status: "proficient" },
  { name: "PostgreSQL", years: "1 yr", status: "proficient" },
  { name: "AI / Claude API", years: "6 mo", status: "growing" },
  { name: "Rust", years: "3 mo", status: "growing" },
  { name: "WebGL / Three.js", years: "4 mo", status: "growing" },
];

export const SKILL_CATEGORIES: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion", "Radix UI"],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Tooling & Infra",
    skills: ["Git / GitHub", "Vercel", "Docker", "Vitest", "Figma"],
  },
  {
    category: "AI & Emerging",
    skills: ["Claude API", "LangChain", "RAG", "WebAssembly"],
  },
];

export const CURRENTLY_BUILDING: StrategyBlock = {
  title: "Al-powered web features using Claude API + Next.js",
  description: "Building a context-aware search widget as a side project",
};

export const STACK_STRATEGY: StrategyBlock[] = [
  {
    title: "Honesty over inflation",
    description: "Listing \"Growing\" skills alongside expert ones shows self-awareness. Engineers respect this far more than claiming everything at 90%.",
  },
  {
    title: "Years over percentages",
    description: "A year count is verifiable. A percentage bar is meaningless — 90% of what? Replace bars with time or project count.",
  },
  {
    title: "AI column is mandatory now",
    description: "In 2026, any dev without AI tools in their stack reads as behind. Even listing 2-3 tools in a \"growing\" tier is enough.",
  },
  {
    title: "\"Currently building\" signal",
    description: "A live \"what I'm working on right now\" card shows you're active. Update it monthly. It's the most human part of the skills section.",
  },
];

export const GLASS_STATS: Metric[] = [
  { label: "Experience", value: "3 yrs", sub: "frontend & fullstack" },
  { label: "GitHub commits", value: "847", sub: "in the last 12 months" },
  { label: "Currently learning", value: "WebGL · Rust · Claude API", sub: "" },
];

export const STAT_BAR: Metric[] = [
  { label: "projects shipped", value: 12 },
  { label: "Lighthouse score", value: 100 },
  { label: "open source libs", value: 4 },
  { label: "avg page load", value: "2.1s" },
];

export const ABOUT_METADATA: ContactInfo[] = [
  { label: "role", value: "Frontend / Fullstack" },
  { label: "seniority", value: "Mid-level" },
  { label: "timezone", value: "IST (UTC +5:30)" },
  { label: "available", value: "May 2026" },
  { label: "work type", value: "Remote / Hybrid" },
];

export const CONTACT_CONTENT = {
  headline: "Let's build something worth using.",
  description: "I'm actively interviewing for mid/senior frontend or fullstack roles, fully remote or Kerala-hybrid.",
  availableCards: [
    { label: "role type", value: "Full-time" },
    { label: "seniority", value: "Mid-level" },
    { label: "timezone", value: "IST ±3" },
    { label: "start date", value: "May 2026" },
  ]
};
