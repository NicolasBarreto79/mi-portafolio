import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Dynamic imports para optimizar el bundle — cada sección se carga lazy
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionSkeleton />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SectionSkeleton />,
});
const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton />,
});
const Timeline = dynamic(() => import("@/components/Timeline"), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionSkeleton />,
});

// Skeleton de carga para secciones lazy
function SectionSkeleton() {
  return (
    <div className="py-24 md:py-32">
      <div className="container-main">
        <div
          className="h-8 w-48 rounded-lg mb-8 animate-pulse"
          style={{ background: "var(--color-bg-card)" }}
        />
        <div
          className="h-64 rounded-xl animate-pulse"
          style={{ background: "var(--color-bg-card)" }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Timeline />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
