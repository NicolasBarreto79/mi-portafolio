"use client";

import { MapPin, Mail, Phone, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const infoItems = [
    { icon: <MapPin size={20} />, label: "Ubicación", value: "Concepción del Uruguay, Entre Ríos, Argentina" },
    { icon: <Briefcase size={20} />, label: "Perfil", value: "Fullstack Developer" },
    { icon: <Mail size={20} />, label: "Email", value: "barretonicolas810@gmail.com" },
    { icon: <Phone size={20} />, label: "Teléfono", value: "+54 9 3442 648399" },
  ];

  return (
    <section id="sobre-mi" className="py-24 md:py-32 relative">
      <div className="container-main">
        <SectionHeading tag="Sobre mí" title="Conóceme un poco más" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Texto */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-text-primary)" }}>
                Soy de Argentina, Entre Ríos, Concepción del Uruguay. Soy <strong style={{ color: "var(--color-accent)" }}>Fullstack Developer</strong>.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Me apasiona el desarrollo de software y la resolución de problemas a través del código. Siempre busco aprender nuevas tecnologías, perfeccionar mis habilidades y construir soluciones tecnológicas eficientes, robustas y centradas en la experiencia del usuario.
              </p>
            </div>
          </ScrollReveal>

          {/* Tarjetas de Información */}
          <ScrollReveal direction="right">
            <div className="grid sm:grid-cols-2 gap-4">
              {infoItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)" }}
                >
                  <div className="p-2.5 rounded-lg self-start" style={{ background: "var(--color-accent-subtle)", color: "var(--color-accent)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-text-muted)" }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
