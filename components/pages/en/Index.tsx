"use client";

import { lazy, Suspense } from "react";
import { SEO } from "@/components/SEO";

import HeaderEN from "@/components/en/HeaderEN";
import HeroSectionEN from "@/components/en/HeroSectionEN";

const ClientsSectionEN = lazy(() => import("@/components/en/ClientsSectionEN"));

const WhyVenturoSectionEN = lazy(() => import("@/components/en/WhyVenturoSectionEN"));
const HowWeWorkSectionEN = lazy(() => import("@/components/en/HowWeWorkSectionEN"));
const ReferencesSectionEN = lazy(() => import("@/components/en/ReferencesSectionEN"));
const LeversSectionEN = lazy(() => import("@/components/en/LeversSectionEN"));

const ReadingLevelsSectionEN = lazy(() => import("@/components/en/ReadingLevelsSectionEN"));
const PartnersSectionEN = lazy(() => import("@/components/en/PartnersSectionEN"));
const TeamPreviewSectionEN = lazy(() => import("@/components/en/TeamPreviewSectionEN"));
const LeadMagnetSectionEN = lazy(() => import("@/components/en/LeadMagnetSectionEN"));
const ContactSectionEN = lazy(() => import("@/components/en/ContactSectionEN"));
const FooterEN = lazy(() => import("@/components/en/FooterEN"));

const LazyFallback = <div />;

const IndexEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Venturo — Organizational Culture & Employer Branding Consulting"
        description="We make your organization's culture visible. Venturo works on employer branding, internal communication and cultural transformation for companies that want to attract and retain the right talent."
        canonical="https://venturoconsulting.it/en"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/", en: "https://venturoconsulting.it/en" }}
      />
      <HeaderEN />
      <main>
        <HeroSectionEN />
        <a
          href="/en/evp-analysis"
          className="block w-full bg-primary text-primary-foreground text-center text-[13px] font-normal py-[10px] hover:opacity-85 transition-opacity"
        >
          New - Analyze how your EVP communicates for free →
        </a>
        <Suspense fallback={LazyFallback}>
          <WhyVenturoSectionEN />
        </Suspense>
        <Suspense fallback={LazyFallback}>
          <ClientsSectionEN />
        </Suspense>
        <div className="flex justify-center px-6 pt-12 pb-12">
          <p className="text-base text-muted-foreground leading-relaxed max-w-[720px] text-left border-l-[3px] border-foreground pl-5">
            Venturo is a consulting firm specializing in organizational culture, internal and employer branding. We work with companies that want to make their cultural identity visible, to attract the right talent, align internal and external communication, and make decisions that are coherent with their values.
          </p>
        </div>
        <Suspense fallback={LazyFallback}>
          <HowWeWorkSectionEN />
          <ReferencesSectionEN />
          <LeversSectionEN />
          
          <ReadingLevelsSectionEN />
          <PartnersSectionEN />
          <TeamPreviewSectionEN />
          <LeadMagnetSectionEN />
          <ContactSectionEN />
        </Suspense>
      </main>
      <Suspense fallback={LazyFallback}>
        <FooterEN />
      </Suspense>
    </div>
  );
};

export default IndexEN;
