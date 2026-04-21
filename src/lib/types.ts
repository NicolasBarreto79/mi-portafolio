// Tipos para los repositorios de GitHub
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  pushed_at: string;
  topics: string[];
  homepage: string | null;
}

// Tipos para las secciones de navegación
export interface NavItem {
  label: string;
  href: string;
}

// Tipos para skills
export interface Skill {
  name: string;
  icon: string;
  level: number; // 0 a 100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Tipos para experiencia / timeline
export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "work" | "education" | "project";
}
