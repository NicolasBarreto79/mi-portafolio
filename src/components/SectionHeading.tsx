"use client";

import ScrollReveal from "./ScrollReveal";

/**
 * Encabezado reutilizable para cada sección del portfolio.
 * Incluye un tag decorativo estilo monospace, el título principal
 * y una línea divisoria con gradiente.
 */
interface SectionHeadingProps {
  tag: string;
  title: string;
  id?: string;
}

export default function SectionHeading({ tag, title, id }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-12 md:mb-16">
      <div id={id} className="scroll-mt-24">
        <span
          className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-wider uppercase rounded-full"
          style={{
            color: "var(--color-accent)",
            background: "var(--color-accent-subtle)",
            border: "1px solid var(--color-accent-dim)",
          }}
        >
          {tag}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h2>
        <div className="section-divider w-24" />
      </div>
    </ScrollReveal>
  );
}
