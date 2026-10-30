"use client";

import { lazy, Suspense } from "react";
import { SEO } from "@/components/SEO";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const ClientsSection = lazy(() => import("@/components/ClientsSection"));

const WhyVenturoSection = lazy(() => import("@/components/WhyVenturoSection"));
const HowWeWorkSection = lazy(() => import("@/components/HowWeWorkSection"));
const LeversSection = lazy(() => import("@/components/LeversSection"));
const ConversationSection = lazy(() => import("@/components/ConversationSection"));

const TeamPreviewSection = lazy(() => import("@/components/TeamPreviewSection"));
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
        description="Quando l'engagement dei dipendenti cala, il problema è in una cultura che l'organizzazione non riesce a vedere. Venturo la fa emergere con Lumen: conversazioni, non survey."
        canonical="https://venturoconsulting.it/"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/", en: "https://venturoconsulting.it/en" }}
      />
      <Header />
      <main>
        {/*
          Ordine: tesi, prova (loghi), sintomo e causa, poi la scelta della porta
          con un invito a scriverci, poi il metodo (Lumen dentro, Venturo
          Conversation fuori), il team e il contatto. Le porte stanno in alto
          perche chi entra da Comunicazione o Employer branding sceglie prima di
          leggere il metodo. I casi studio stanno in /casi-studio.
        */}
        <HeroSection />
        <Suspense fallback={LazyFallback}>
          <ClientsSection />
        </Suspense>
        <Suspense fallback={LazyFallback}>
          <WhyVenturoSection />
        </Suspense>
        <Suspense fallback={LazyFallback}>
          <LeversSection />
          <HowWeWorkSection />
          <ConversationSection />
          <TeamPreviewSection />
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
