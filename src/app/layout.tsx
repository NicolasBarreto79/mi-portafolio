import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Nicolás Barreto — Portfolio",
  description:
    "Portfolio de Nicolás Barreto — Analista en Sistemas & futuro Licenciado en Sistemas de Información. Python, Java, JavaScript, TypeScript, SQL.",
  keywords: [
    "Nicolás Barreto",
    "Analista en Sistemas",
    "Desarrollador",
    "Portfolio",
    "Argentina",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Nicolás Barreto" }],
  openGraph: {
    title: "Nicolás Barreto — Portfolio",
    description:
      "Analista en Sistemas & futuro Licenciado en Sistemas de Información. Apasionado por la tecnología.",
    url: "https://nicolasbarreto.dev",
    siteName: "Nicolás Barreto Portfolio",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        {/* Google Fonts: Inter + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
