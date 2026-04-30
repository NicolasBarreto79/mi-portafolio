"use client";

import { MapPin, Mail, Phone, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const infoItems = [
    { icon: <MapPin size={20} />, label: "Ubicación", value: "Concepción del Uruguay, Entre Ríos, Argentina" },
    { icon: <Briefcase size={20} />, label: "Perfil", value: "Desarrollador de Software" },
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
                Tengo 22 años y soy de Concepción del Uruguay, Entre Ríos, Argentina. Actualmente curso el cuarto año de la <strong style={{ color: "var(--color-accent)" }}>Licenciatura en Sistemas de Información</strong>, con orientación en desarrollo de software, bases de datos y análisis funcional.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Consolido mis conocimientos a través de proyectos personales y cursos orientados al desarrollo real. Me interesa construir soluciones tecnológicas prácticas, con foco en la calidad del código, el modelado de datos y la eficiencia del sistema.
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
