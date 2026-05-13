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

const ReadingLevelsSection = lazy(() => import("@/components/ReadingLevelsSection"));
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
        <a
          href="/analisi-evp"
          className="block w-full bg-primary text-primary-foreground text-center text-[13px] font-normal py-[10px] hover:opacity-85 transition-opacity"
        >
          Nuovo — Analizza gratis come comunica la tua EVP →
        </a>
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
          <ReferencesSection />
          <LeversSection />
          
          <ReadingLevelsSection />
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
