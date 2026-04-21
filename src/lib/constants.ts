import { NavItem, SkillCategory, TimelineItem } from "./types";

// ============================================
// Navegación principal
// ============================================
export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Skills", href: "#skills" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Estudios", href: "#estudios" },
  { label: "Contacto", href: "#contacto" },
];

// ============================================
// Títulos rotativos del hero (typewriter)
// ============================================
export const TYPEWRITER_TITLES = [
  "Analista en Sistemas",
  "Futuro Lic. en Sistemas de Información",
  "Backend Developer",
  "Apasionado por la tecnología",
];

// ============================================
// Skills organizadas por categoría
// ============================================
export const SKILLS: SkillCategory[] = [
  {
    title: "Backend & Lenguajes",
    skills: [
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "Express", icon: "🚀", level: 80 },
      { name: "Java", icon: "☕", level: 80 },
      { name: "Python", icon: "🐍", level: 75 },
      { name: "Strapi", icon: "🔧", level: 70 },
      { name: "REST APIs", icon: "🔗", level: 90 },
      { name: "Microservicios", icon: "🧩", level: 65 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", level: 80 },
      { name: "Next.js", icon: "▲", level: 75 },
      { name: "JavaScript", icon: "⚡", level: 90 },
      { name: "TypeScript", icon: "🔷", level: 75 },
      { name: "HTML5 & CSS3", icon: "🌐", level: 95 },
      { name: "Tailwind CSS", icon: "💨", level: 85 },
      { name: "Figma (UI/UX)", icon: "🖌️", level: 60 },
    ],
  },
  {
    title: "Bases de Datos",
    skills: [
      { name: "PostgreSQL", icon: "🐘", level: 80 },
      { name: "MySQL", icon: "🐬", level: 85 },
      { name: "SQL Server", icon: "🗃️", level: 70 },
      { name: "MongoDB", icon: "🍃", level: 75 },
      { name: "Modelado E-R", icon: "📊", level: 90 },
    ],
  },
  {
    title: "Herramientas & Arquitectura",
    skills: [
      { name: "Git & GitHub", icon: "📦", level: 90 },
      { name: "Docker", icon: "🐳", level: 65 },
      { name: "Testing (QA)", icon: "🧪", level: 70 },
      { name: "Metodologías Ágiles", icon: "🔄", level: 85 },
      { name: "UML & Diseño de Sistemas", icon: "📐", level: 80 },
      { name: "Postman", icon: "📮", level: 90 },
    ],
  },
];

// ============================================
// Timeline — Experiencia y formación
// ============================================
export const TIMELINE: TimelineItem[] = [
  {
    year: "Recién Recibido",
    title: "Analista en Sistemas",
    subtitle: "Búsqueda activa",
    description:
      "Soy Analista en Sistemas recién recibido y actualmente me encuentro en la búsqueda activa de trabajo y nuevas oportunidades profesionales.",
    type: "education",
  },
  {
    year: "En curso",
    title: "Licenciatura en Sistemas de Información",
    subtitle: "Cursando 4to año",
    description:
      "Futuro Licenciado en Sistemas de Información. Actualmente me encuentro cursando el cuarto año de la carrera universitaria.",
    type: "education",
  },
];

// ============================================
// Links sociales
// ============================================
export const SOCIAL_LINKS = {
  github: "https://github.com/NicolasBarreto79",
  linkedin: "https://www.linkedin.com/in/nicolas-barreto-6412823a2/",
  email: "barretonicolas810@gmail.com",
  phone: "+54 9 3442 648399",
  whatsapp: "https://wa.me/5493442648399",
  instagram: "https://www.instagram.com/nicobarreto26/",
};

// ============================================
// Configuración de Email (Formspree)
// ============================================
// Reemplazá el string vacío por tu URL de Formspree cuando la tengas (ej: "https://formspree.io/f/xyzababc")
export const FORMSPREE_URL = "";

// ============================================
// GitHub API
// ============================================
export const GITHUB_USERNAME = "NicolasBarreto79";
export const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`;

// Mapeo de lenguajes a colores (estilo GitHub)
export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};
