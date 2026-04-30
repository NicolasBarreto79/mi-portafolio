"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { TYPEWRITER_TITLES, SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TYPEWRITER_TITLES[currentTitle];
    const speed = isDeleting ? 30 : 60;
    if (!isDeleting && displayedText === fullText) {
      const t = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTitle((p) => (p + 1) % TYPEWRITER_TITLES.length);
      return;
    }
    const t = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [displayedText, isDeleting, currentTitle]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: "var(--color-accent)" }} />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[120px] opacity-10" style={{ background: "var(--color-accent2)" }} />

      <div className="container-main relative z-10 py-32 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-mono rounded-full"
              style={{ color: "var(--color-accent)", background: "var(--color-accent-subtle)", border: "1px solid var(--color-accent-dim)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--color-accent)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--color-accent)" }} />
              </span>
              Disponible para proyectos
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.1]">
              Nicolás <span className="gradient-text animate-gradient glitch-text" data-text="Barreto">Barreto</span>
            </h1>

            <div className="h-10 md:h-12 flex items-center mb-6">
              <span className="text-lg md:text-xl font-mono" style={{ color: "var(--color-accent)" }}>
                {">"} {displayedText}<span className="cursor-blink ml-0.5">|</span>
              </span>
            </div>

            <p className="text-base md:text-lg leading-relaxed mb-8 font-mono" style={{ color: "var(--color-text-secondary)" }}>
              Analista en Sistemas&nbsp;<span style={{ color: "var(--color-accent-dim)" }}>|</span>&nbsp;Futuro Licenciado en Sistemas&nbsp;<span style={{ color: "var(--color-accent-dim)" }}>|</span>&nbsp;Desarrollo de Software&nbsp;<span style={{ color: "var(--color-accent-dim)" }}>|</span>&nbsp;Bases de Datos
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button onClick={() => scrollTo("#proyectos")} className="btn-primary" aria-label="Ver proyectos">
                Ver proyectos <ExternalLink size={16} />
              </button>
              <button onClick={() => scrollTo("#contacto")} className="btn-outline" aria-label="Contactarme">
                Contactarme
              </button>
            </div>

            <div className="flex items-center gap-4">
              {[{ href: SOCIAL_LINKS.github, icon: <GithubIcon size={20} />, label: "GitHub" },
                { href: SOCIAL_LINKS.linkedin, icon: <LinkedinIcon size={20} />, label: "LinkedIn" }].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ color: "var(--color-text-secondary)", border: "1px solid var(--color-border)" }}
                  aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
          </motion.div>

          {/* Terminal decorativo */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block">
            <div className="terminal shadow-2xl shadow-[var(--color-accent-dim)]/20 bg-[#0d1117] rounded-xl border border-[#30363d] overflow-hidden">
              <div className="terminal-header bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="mx-auto text-xs font-mono text-[#8b949e]">bash — nicolas-barreto</span>
              </div>
              <div className="p-5 font-mono text-sm leading-7">
                <div>
                  <span className="text-[#3fb950] font-bold">➜</span> <span className="text-[#58a6ff] font-bold">~</span> <span className="text-[#f0f6fc]">npx nicolas-barreto --profile</span>
                </div>
                <div className="mt-2 text-[#8b949e]">Fetching profile data...</div>
                <div className="mt-2 border border-[#30363d] p-4 rounded-md bg-[#161b22]/50">
                  <div className="text-[#f0f6fc] font-bold text-lg mb-2">Nicolás Barreto</div>
                  <div className="flex gap-2 mb-1"><span className="text-[#58a6ff] w-24">Role:</span> <span className="text-[#c9d1d9]">Desarrollador de Software</span></div>
                  <div className="flex gap-2 mb-1"><span className="text-[#58a6ff] w-24">Location:</span> <span className="text-[#c9d1d9]">Argentina 🇦🇷</span></div>
                  <div className="flex gap-2 mb-1"><span className="text-[#58a6ff] w-24">Contact:</span> <span className="text-[#c9d1d9]">barretonicolas810@gmail.com</span></div>
                  <div className="flex gap-2"><span className="text-[#58a6ff] w-24">Status:</span> <span className="text-[#3fb950]">Disponible para proyectos</span></div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-[#3fb950] font-bold">➜</span> <span className="text-[#58a6ff] font-bold">~</span> <span className="animate-pulse w-2 h-4 bg-[#c9d1d9] ml-2 inline-block"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button onClick={() => scrollTo("#proyectos")}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hover:opacity-60"
        style={{ color: "var(--color-text-muted)" }} aria-label="Scroll abajo">
        <span className="text-xs font-mono">scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
