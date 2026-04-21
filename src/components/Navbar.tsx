"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

/**
 * Navbar sticky con scroll spy.
 * - Detecta qué sección está visible y resalta el link correspondiente.
 * - Cambia de fondo al hacer scroll (glassmorphism).
 * - Menú hamburguesa responsive en mobile.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy: observar qué sección está en el viewport
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container-main flex items-center justify-between h-16 md:h-18">
          {/* Logo / Nombre */}
          <button
            onClick={() => handleNavClick("#inicio")}
            className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
            aria-label="Ir al inicio"
          >
            <span style={{ color: "var(--color-accent)" }}>&lt;</span>
            NB
            <span style={{ color: "var(--color-accent)" }}> /&gt;</span>
          </button>

          {/* Links — Desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-[var(--color-accent)] bg-[var(--color-accent-subtle)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5"
                    }`}
                    aria-label={`Ir a ${item.label}`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Disponibilidad badge — Desktop */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono" style={{ color: "var(--color-accent)" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--color-accent)" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--color-accent)" }} />
            </span>
            Disponible
          </div>

          {/* Hamburguesa — Mobile */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 bottom-0 w-72 p-6 pt-20"
              style={{ background: "var(--color-bg-secondary)", borderLeft: "1px solid var(--color-border)" }}
            >
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          isActive
                            ? "text-[var(--color-accent)] bg-[var(--color-accent-subtle)]"
                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Disponibilidad — Mobile */}
              <div className="mt-8 flex items-center gap-2 text-xs font-mono px-4" style={{ color: "var(--color-accent)" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--color-accent)" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--color-accent)" }} />
                </span>
                Disponible para proyectos
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
