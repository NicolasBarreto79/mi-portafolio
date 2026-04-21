"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import { SOCIAL_LINKS, FORMSPREE_URL } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", reason: "Consulta general", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Tu nombre es requerido";
    if (!form.email.trim()) errs.email = "Tu email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Email inválido";
    if (!form.message.trim()) errs.message = "Escribí un mensaje";
    else if (form.message.trim().length < 10) errs.message = "El mensaje es muy corto";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    
    if (Object.keys(errs).length === 0) {
      setStatus("submitting");

      if (!FORMSPREE_URL) {
        // Simulación si no hay URL configurada
        setTimeout(() => {
          setStatus("success");
          setForm({ name: "", email: "", reason: "Consulta general", message: "" });
          setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
        return;
      }

      try {
        const response = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setStatus("success");
          setForm({ name: "", email: "", reason: "Consulta general", message: "" });
          setTimeout(() => setStatus("idle"), 5000);
        } else {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
        }
      } catch (error) {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    }
  };

  const socialLinks = [
    { icon: <GithubIcon size={20} />, label: "GitHub", href: SOCIAL_LINKS.github, user: "NicolasBarreto79" },
    { icon: <LinkedinIcon size={20} />, label: "LinkedIn", href: SOCIAL_LINKS.linkedin, user: "nicolas-barreto" },
    { icon: <InstagramIcon size={20} />, label: "Instagram", href: SOCIAL_LINKS.instagram, user: "@nicobarreto26" },
    { icon: <Mail size={20} />, label: "Email", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${SOCIAL_LINKS.email}`, user: SOCIAL_LINKS.email },
  ];

  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      <div className="container-main">
        <SectionHeading tag="Contacto" title="Hablemos" />

        <ScrollReveal>
          <p className="text-base md:text-lg max-w-2xl mb-12 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Estoy disponible para{" "}
            <strong style={{ color: "var(--color-accent)" }}>proyectos freelance</strong>,{" "}
            <strong style={{ color: "var(--color-accent)" }}>oportunidades laborales</strong> y{" "}
            <strong style={{ color: "var(--color-accent)" }}>colaboraciones</strong>.
            Si tenés un proyecto en mente y querés un presupuesto, o simplemente charlar, no dudes en escribirme.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Formulario */}
          <ScrollReveal className="lg:col-span-3" direction="left">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      background: "var(--color-bg-card)",
                      border: errors.name ? "1px solid #f97583" : "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    aria-label="Tu nombre"
                  />
                  {errors.name && <p className="text-xs mt-1" style={{ color: "#f97583" }}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      background: "var(--color-bg-card)",
                      border: errors.email ? "1px solid #f97583" : "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    aria-label="Tu email"
                  />
                  {errors.email && <p className="text-xs mt-1" style={{ color: "#f97583" }}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-reason" className="block text-sm font-medium mb-2">
                  Motivo de contacto
                </label>
                <select
                  id="contact-reason"
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-2 cursor-pointer"
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  aria-label="Motivo de contacto"
                >
                  <option value="Consulta general">Consulta general</option>
                  <option value="Presupuesto de proyecto">Presupuesto de proyecto / Desarrollo</option>
                  <option value="Oferta laboral">Oferta laboral</option>
                  <option value="Otro">Otro motivo</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Contame sobre tu proyecto o idea..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none focus:ring-2"
                  style={{
                    background: "var(--color-bg-card)",
                    border: errors.message ? "1px solid #f97583" : "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  aria-label="Tu mensaje"
                />
                {errors.message && <p className="text-xs mt-1" style={{ color: "#f97583" }}>{errors.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed" 
                aria-label="Enviar mensaje"
              >
                {status === "submitting" ? (
                  <>
                    Enviando... <Loader2 size={16} className="animate-spin" />
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} /> ¡Mensaje enviado!
                  </>
                ) : status === "error" ? (
                  <>
                    Hubo un error. Intentá de nuevo.
                  </>
                ) : (
                  <>
                    Enviar mensaje <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* Links de contacto */}
          <ScrollReveal className="lg:col-span-2" direction="right">
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glow-border transition-all"
                  style={{ background: "var(--color-bg-card)" }}
                  whileHover={{ x: 4 }}
                  aria-label={link.label}
                >
                  <div
                    className="p-2.5 rounded-lg"
                    style={{ background: "var(--color-accent-subtle)", color: "var(--color-accent)" }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{link.label}</p>
                    <p className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                      {link.user}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Card de disponibilidad */}
            <div
              className="mt-6 p-5 rounded-xl"
              style={{
                background: "var(--color-accent-subtle)",
                border: "1px solid var(--color-accent-dim)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--color-accent)" }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "var(--color-accent)" }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
                  Disponible
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Estoy abierto a nuevas oportunidades, proyectos freelance y colaboraciones
                interesantes. ¡No dudes en contactarme!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
