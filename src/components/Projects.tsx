"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

type ProjectCategory = "Todos" | "Personales" | "Universitarios" | "Laborales";

const FEATURED_PROJECTS = [
  {
    id: "ecommerce",
    name: "Ecommerce Amargo y Dulce",
    description: "Plataforma de comercio electrónico fullstack con catálogo de productos, carrito de compras, checkout, integración de pagos y panel de administración dinámico.",
    url: "https://github.com/NicolasBarreto79/frontend-ecommerce-amargo-y-dulce",
    language: "TypeScript",
    langColor: "#3178c6",
    date: "Abr 2026",
    tags: ["Next.js", "Tailwind", "Strapi", "TypeScript"],
    category: "Universitarios" as ProjectCategory,
  },
  {
    id: "eventos-bancarios",
    name: "Sistema de Eventos Bancarios",
    description: "Sistema backend robusto para la gestión y procesamiento de eventos y transacciones bancarias, implementando arquitectura escalable y seguridad.",
    url: "https://github.com/NicolasBarreto79/TP7---Sistema-de-eventos-bancarios",
    language: "JavaScript",
    langColor: "#f1e05a",
    date: "Nov 2025",
    tags: ["Node.js", "Express", "API REST", "Bases de Datos"],
    category: "Universitarios" as ProjectCategory,
  },
  {
    id: "uxui",
    name: "Proyecto Final UX/UI",
    description: "Investigación de usuarios, wireframes, prototipado de alta fidelidad y diseño de interfaces centradas en el usuario final.",
    url: "https://github.com/NicolasBarreto79/TP-Final-UXUI",
    language: "Figma",
    langColor: "#f24e1e",
    date: "Dic 2025",
    tags: ["UX/UI", "Diseño", "Figma", "Prototipado"],
    category: "Universitarios" as ProjectCategory,
  },
  {
    id: "transporte-app",
    name: "Transporte App",
    description: "Aplicación de logística y transporte para gestión de envíos, seguimiento en tiempo real y administración de flotas de vehículos.",
    url: "https://github.com/NicolasBarreto79",
    language: "React Native",
    langColor: "#61dafb",
    date: "2026",
    tags: ["Mobile", "React Native", "Logística"],
    category: "Personales" as ProjectCategory,
  }
];

const CATEGORIES: ProjectCategory[] = ["Todos", "Personales", "Universitarios", "Laborales"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 md:py-32 relative">
      <div className="container-main">
        <SectionHeading tag="Proyectos" title="Proyectos destacados" />

        {/* Filtros */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-[var(--color-bg-primary)] bg-[var(--color-accent)] shadow-lg shadow-[var(--color-accent)]/30"
                    : "text-[var(--color-text-secondary)] bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
                aria-label={`Filtrar por ${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid de proyectos */}
        <div className="min-h-[300px]">
          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center h-48 text-center p-6 border border-dashed rounded-xl"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p style={{ color: "var(--color-text-muted)" }}>
                Aún no hay proyectos en esta categoría.
              </p>
            </motion.div>
          ) : (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                  >
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block h-full rounded-xl p-6 glow-border transition-all duration-300 flex flex-col relative overflow-hidden cursor-pointer"
                      style={{ background: "var(--color-bg-card)" }}
                      aria-label={`Ver proyecto ${project.name}`}
                    >
                      {/* Elemento decorativo */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-5 rounded-bl-[100px] -z-10 group-hover:opacity-10 transition-opacity"></div>
                      <div className="absolute -top-6 -right-6 w-16 h-16 bg-[var(--color-accent)]/20 blur-xl rounded-full group-hover:bg-[var(--color-accent)]/30 transition-all"></div>

                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2.5 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/50 transition-colors">
                          <Code2 size={20} className="text-[var(--color-accent)]" />
                        </div>
                        <ExternalLink size={18} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" style={{ color: "var(--color-accent)" }} />
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                        {project.name}
                      </h3>

                      <p className="text-sm mb-6 line-clamp-3 leading-relaxed flex-grow" style={{ color: "var(--color-text-secondary)" }}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-mono" style={{ background: "var(--color-bg-primary)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center justify-between text-xs pt-4 border-t border-[var(--color-border)]" style={{ color: "var(--color-text-muted)" }}>
                        <div className="flex items-center gap-1.5 font-medium">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: project.langColor }} />
                          {project.language}
                        </div>
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {project.date}</span>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Botón ver todos */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <a href="https://github.com/NicolasBarreto79" target="_blank" rel="noopener noreferrer" className="btn-outline group">
              Ver más en GitHub 
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
