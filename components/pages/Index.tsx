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
const ConversationSection = lazy(() => import("@/components/ConversationSection"));

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
  "description": "Consulenza in cultura organizzativa ed engagement delle persone. Facciamo emergere la cultura reale dell'organizzazione con Lumen, un metodo basato su conversazioni, non survey.",
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
        title="Venturo — Cultura organizzativa ed engagement delle persone"
        description="Quando l'engagement cala, il problema è in una cultura che l'organizzazione non riesce a vedere. Venturo la fa emergere con Lumen: conversazioni, non survey."
        canonical="https://venturoconsulting.it/"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/", en: "https://venturoconsulting.it/en" }}
      />
      <Header />
      <main>
        {/* La catena della home: sintomo, causa, metodo (conversazioni dentro e fuori: Lumen e Venturo Conversation), conseguenze, prova. */}
        <HeroSection />
        <Suspense fallback={LazyFallback}>
          <WhyVenturoSection />
        </Suspense>
        <Suspense fallback={LazyFallback}>
          <ClientsSection />
        </Suspense>
        <Suspense fallback={LazyFallback}>
          <HowWeWorkSection />
          <ConversationSection />
          <LeversSection />
          <ReferencesSection />
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
