"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Fondo sutil */}
      <div className="absolute inset-0 opacity-40 dot-grid" />

      <div className="container-main relative z-10">
        <SectionHeading tag="Conocimientos" title="Skills & Stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {SKILLS.map((category, catIdx) => (
            <ScrollReveal key={category.title} delay={catIdx * 0.1}>
              <div
                className="rounded-xl p-6 h-full glow-border flex flex-col"
                style={{ background: "var(--color-bg-card)" }}
              >
                {/* Título de categoría */}
                <h3
                  className="text-lg font-semibold mb-6 flex items-center gap-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                  />
                  {category.title}
                </h3>

                {/* Skills renderizadas como etiquetas (tags) */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
                      style={{ 
                        background: "var(--color-bg-primary)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-primary)"
                      }}
                    >
                      {skill.icon && <span className="text-base">{skill.icon}</span>}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
