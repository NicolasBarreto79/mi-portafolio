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

                {/* Skills con barras de progreso */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm flex items-center gap-2">
                          <span>{skill.icon}</span>
                          <span>{skill.name}</span>
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Barra de progreso animada */}
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "var(--color-bg-primary)" }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, var(--color-accent), var(--color-accent2))`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIdx * 0.1 + skillIdx * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
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
