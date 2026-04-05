export interface Metric {
  label: string;
  value: string | number;
  sub?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: 'saas' | 'tool' | 'ui' | 'oss';
  links: ProjectLink[];
  thumbnailClass?: string;
  isLive?: boolean;
  production?: boolean;
  featured?: boolean;
  timeToBuild?: string;
  impactMetrics?: Metric[];
  caseStudy?: {
    problem: string;
    decision: string;
    impact: string;
    metricValue?: string;
  };
}

export interface Skill {
  name: string;
  years?: string;
  status: "expert" | "proficient" | "growing";
  isBuilding?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface StrategyBlock {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  label: string;
  value: string;
}
