"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-12 border-t"
      style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo y copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold mb-1">
              <span style={{ color: "var(--color-accent)" }}>&lt;</span>
              NB
              <span style={{ color: "var(--color-accent)" }}> /&gt;</span>
            </p>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              Analista en Sistemas & futuro Lic. en Sistemas de Información
            </p>
          </div>

          {/* Links sociales */}
          <div className="flex items-center gap-3">
            {[
              { href: SOCIAL_LINKS.github, icon: <GithubIcon size={18} />, label: "GitHub" },
              { href: SOCIAL_LINKS.linkedin, icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
              { href: `mailto:${SOCIAL_LINKS.email}`, icon: <Mail size={18} />, label: "Email" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{ color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
            style={{ color: "var(--color-accent)", border: "1px solid var(--color-border)" }}
            aria-label="Volver al inicio"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid var(--color-border)" }}>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Nicolás Barreto — Construido con Next.js, TypeScript y pasión por la tecnología.
          </p>
        </div>
      </div>
    </footer>
  );
}
