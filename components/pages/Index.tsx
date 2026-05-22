"use client";

import { lazy, Suspense } from "react";
import { SEO } from "@/components/SEO";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const ClientsSection = lazy(() => import("@/components/ClientsSection"));

const WhyVenturoSection = lazy(() => import("@/components/WhyVenturoSection"));
const HowWeWorkSection = lazy(() => import("@/components/HowWeWorkSection"));
const ReferencesSection = lazy(() => import("@/components/ReferencesSection"));
const LeversSection = lazy(() => import("@/components/LeversSection"));

const LeadingByPurposeSection = lazy(() => import("@/components/LeadingByPurposeSection"));
const ReadingLevelsSection = lazy(() => import("@/components/ReadingLevelsSection"));
const StudioMillerSection = lazy(() => import("@/components/StudioMillerSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const TeamPreviewSection = lazy(() => import("@/components/TeamPreviewSection"));
const LeadMagnetSection = lazy(() => import("@/components/LeadMagnetSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Venturo",
  "url": "https://venturoconsulting.it",
  "logo": "https://venturoconsulting.it/logo.png",
  "email": "info@venturoconsulting.it",
  "description": "Consulenza specializzata in cultura organizzativa ed employer branding. Rendiamo visibile il perché delle organizzazioni.",
  "areaServed": "IT",
  "knowsLanguage": ["it", "en"],
  "sameAs": ["https://linkedin.com/company/venturo-consulting"],
  "founder": [
    { "@type": "Person", "name": "Rosario Carnovale" },
    { "@type": "Person", "name": "Massimo Benedetti" },
    { "@type": "Person", "name": "Arianna Barisan" }
  ]
};

const LazyFallback = <div />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <SEO
        title="Venturo — Cultura Organizzativa ed Employer Branding"
        description="Rendiamo visibile la cultura della tua organizzazione. Lavoriamo su employer branding, comunicazione interna e trasformazione culturale per attrarre i talenti giusti."
        canonical="https://venturoconsulting.it/"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/", en: "https://venturoconsulting.it/en" }}
      />
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={LazyFallback}>
          <LeadingByPurposeSection />
        </Suspense>
        <Suspense fallback={LazyFallback}>
          <WhyVenturoSection />
        </Suspense>
        <Suspense fallback={LazyFallback}>
          <ClientsSection />
        </Suspense>
        <div className="flex justify-center px-6 pt-12 pb-12">
          <p className="text-base text-muted-foreground leading-relaxed max-w-[720px] text-left border-l-[3px] border-foreground pl-5">
            Venturo è una società di consulenza specializzata in cultura organizzativa, internal ed employer branding. Lavoriamo con aziende che vogliono rendere visibile la propria identità culturale, per attrarre i talenti giusti, allineare comunicazione interna ed esterna, e prendere decisioni coerenti con i propri valori.
          </p>
        </div>
        <Suspense fallback={LazyFallback}>
          <HowWeWorkSection />
          {/* EVP Tool section */}
          <section
            style={{
              backgroundColor: "#111",
              color: "#fff",
              padding: "clamp(48px, 8vh, 96px) clamp(24px, 6vw, 80px)",
            }}
          >
            <div style={{ maxWidth: 960, margin: "0 auto" }}>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#E6FF3D",
                  display: "block",
                  marginBottom: 24,
                }}
              >
                Tool gratuito · Analisi EVP
              </span>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: "clamp(28px, 4vw, 52px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  margin: "0 0 32px",
                  maxWidth: 720,
                }}
              >
                Vuoi sapere come i candidati percepiscono la vostra comunicazione?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: 600,
                  margin: "0 0 48px",
                }}
              >
                Scopri il tool sulle tre dimensioni che contano davvero.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 1,
                  marginBottom: 48,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                {[
                  { num: "01", label: "Identità", desc: "Quanto è riconoscibile la vostra identità rispetto ai competitor del settore." },
                  { num: "02", label: "Coerenza", desc: "Quanto è coerente il tono tra career page e job post: due superfici che spesso si contraddicono." },
                  { num: "03", label: "Profilo motivazionale", desc: "Quale profilo motivazionale viene implicitamente attratto dalla vostra comunicazione." },
                ].map(({ num, label, desc }) => (
                  <div key={num} style={{ backgroundColor: "#111", padding: "28px 24px", borderTop: "2px solid rgba(255,255,255,0.08)" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: "0.12em", color: "#E6FF3D", display: "block", marginBottom: 12 }}>{num}</span>
                    <strong style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 15, fontWeight: 600, display: "block", marginBottom: 8, color: "#fff" }}>{label}</strong>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>{desc}</p>
                  </div>
                ))}
              </div>
              <a
                href="/analisi-evp"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  backgroundColor: "#E6FF3D",
                  color: "#111",
                  padding: "14px 28px",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
              >
                Analizza la tua EVP — è gratis
                <span style={{ fontSize: 16 }}>→</span>
              </a>
            </div>
          </section>
          <ReferencesSection />
          <LeversSection />
          
          <ReadingLevelsSection />
          <StudioMillerSection />
          <PartnersSection />
          <TeamPreviewSection />
          <LeadMagnetSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={LazyFallback}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
