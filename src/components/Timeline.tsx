"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import { TIMELINE } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const typeConfig = {
  work: { icon: <Briefcase size={18} />, color: "var(--color-accent)" },
  education: { icon: <GraduationCap size={18} />, color: "var(--color-accent2)" },
  project: { icon: <Code2 size={18} />, color: "#f97583" },
};

export default function Timeline() {
  return (
    <section id="estudios" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container-main relative z-10">
        <SectionHeading tag="Estudios" title="Formación Académica" />

        <div className="relative max-w-3xl mx-auto">
          {/* Línea vertical del timeline */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {TIMELINE.map((item, i) => {
              const config = typeConfig[item.type];

              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex gap-6 md:gap-8 relative">
                    {/* Dot del timeline */}
                    <div className="hidden md:flex flex-col items-center">
                      <motion.div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 relative z-10"
                        style={{
                          background: "var(--color-bg-secondary)",
                          border: `2px solid ${config.color}`,
                          color: config.color,
                        }}
                        whileInView={{ scale: [0, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                      >
                        {config.icon}
                      </motion.div>
                    </div>

                    {/* Card del timeline */}
                    <motion.div
                      className="flex-1 rounded-xl p-5 md:p-6 glow-border"
                      style={{ background: "var(--color-bg-card)" }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        {/* Ícono mobile */}
                        <span
                          className="md:hidden p-1.5 rounded-lg"
                          style={{ background: "var(--color-accent-subtle)", color: config.color }}
                        >
                          {config.icon}
                        </span>

                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{
                            color: config.color,
                            background:
                              item.type === "work"
                                ? "var(--color-accent-subtle)"
                                : item.type === "education"
                                ? "rgba(139,92,246,0.1)"
                                : "rgba(249,115,131,0.1)",
                          }}
                        >
                          {item.year}
                        </span>

                        <span
                          className="text-xs font-mono uppercase tracking-wider"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {item.type === "work"
                            ? "Laboral"
                            : item.type === "education"
                            ? "Formación"
                            : "Proyecto"}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p
                        className="text-sm font-medium mb-2"
                        style={{ color: config.color }}
                      >
                        {item.subtitle}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
