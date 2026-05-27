"use client";

import { lazy, Suspense } from "react";
import { SEO } from "@/components/SEO";

import HeaderEN from "@/components/en/HeaderEN";
import HeroSectionEN from "@/components/en/HeroSectionEN";

const LeadingByPurposeSectionEN = lazy(() => import("@/components/en/LeadingByPurposeSectionEN"));
const ClientsSectionEN = lazy(() => import("@/components/en/ClientsSectionEN"));

const WhyVenturoSectionEN = lazy(() => import("@/components/en/WhyVenturoSectionEN"));
const HowWeWorkSectionEN = lazy(() => import("@/components/en/HowWeWorkSectionEN"));
const ReferencesSectionEN = lazy(() => import("@/components/en/ReferencesSectionEN"));
const LeversSectionEN = lazy(() => import("@/components/en/LeversSectionEN"));

const ReadingLevelsSectionEN = lazy(() => import("@/components/en/ReadingLevelsSectionEN"));
const StudioMillerSectionEN = lazy(() => import("@/components/en/StudioMillerSectionEN"));
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
        <Suspense fallback={LazyFallback}>
          <LeadingByPurposeSectionEN />
        </Suspense>
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
                Free tool · EVP Analysis
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
                Want to know how candidates perceive your communication?
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
                Discover the tool across the three dimensions that really matter.
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
                  { num: "01", label: "Identity", desc: "How recognisable your identity is compared to competitors in your sector." },
                  { num: "02", label: "Consistency", desc: "How consistent the tone is between your careers page and job posts: two surfaces that often contradict each other." },
                  { num: "03", label: "Motivational profile", desc: "Which motivational profile is implicitly attracted by your communication." },
                ].map(({ num, label, desc }) => (
                  <div key={num} style={{ backgroundColor: "#111", padding: "28px 24px", borderTop: "2px solid rgba(255,255,255,0.08)" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: "0.12em", color: "#E6FF3D", display: "block", marginBottom: 12 }}>{num}</span>
                    <strong style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 15, fontWeight: 600, display: "block", marginBottom: 8, color: "#fff" }}>{label}</strong>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>{desc}</p>
                  </div>
                ))}
              </div>
              <a
                href="/en/evp-analysis"
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
                Analyse your EVP — it's free
                <span style={{ fontSize: 16 }}>→</span>
              </a>
            </div>
          </section>
          <ReferencesSectionEN />
          <LeversSectionEN />

          <ReadingLevelsSectionEN />
          <StudioMillerSectionEN />
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
