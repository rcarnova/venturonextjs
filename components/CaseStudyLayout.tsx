"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";
import SuggestedCases from "./SuggestedCases";
import { allCases } from "@/data/cases";

interface OverviewItem {
  label: string;
  value: string;
}

interface Phase {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  videoEmbed?: string;
  videoCaption?: string;
}

interface CaseStudyLayoutProps {
  logo?: string;
  logoAlt?: string;
  logoPlaceholder?: string;
  logoNeedsInvert?: boolean;
  logoClassName?: string;
  caseId: string;
  title: string;
  subtitle: string;
  overview: OverviewItem[];
  challenge: {
    description: string;
    problems: string[];
  };
  phases: Phase[];
  results: string[];
}

const CaseStudyLayout = ({
  logo,
  logoAlt,
  logoPlaceholder,
  logoNeedsInvert = true,
  logoClassName,
  caseId,
  title,
  subtitle,
  overview,
  challenge,
  phases,
  results,
}: CaseStudyLayoutProps) => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <Link
            href="/casi-studio"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna ai casi
          </Link>
        </div>

        {/* Hero */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-narrow text-center">
            <AnimatedSection>
              {logo ? (
                <img
                  src={logo}
                  alt={logoAlt || title}
                  className={logoClassName || `h-24 md:h-32 w-auto object-contain mx-auto mb-8 ${logoNeedsInvert ? 'invert' : ''}`}
                  width={200}
                  height={128}
                />
              ) : (
                <div className="inline-block px-8 py-4 bg-charcoal text-warm-white text-2xl font-semibold rounded-lg mb-8">
                  {logoPlaceholder || title.toUpperCase()}
                </div>
              )}
              <h1 className="text-display text-charcoal">{title}</h1>
              <p className="text-subheadline mt-4 max-w-2xl mx-auto">{subtitle}</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 bg-accent/50">
          <div className="container-narrow">
            <AnimatedSection>
              <div className={`grid gap-6 text-center ${overview.length <= 3 ? 'md:grid-cols-3' : overview.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3 lg:grid-cols-5'}`}>
                {overview.map((item, index) => (
                  <div key={index}>
                    <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-medium text-charcoal">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* La Sfida */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-section text-charcoal mb-6">La sfida</h2>
              <p className="text-body-large text-muted-foreground mb-8">
                {challenge.description}
              </p>
              <div className="bg-muted/50 rounded-xl p-6 glow-yellow hover:scale-[1.01] transition-all duration-300">
                <p className="font-medium text-charcoal mb-4">Problemi principali:</p>
                <ul className="space-y-3">
                  {challenge.problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Come abbiamo lavorato */}
        <section className="section-padding bg-muted/30">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-section text-charcoal mb-12">Come abbiamo lavorato</h2>
            </AnimatedSection>
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="mb-12">
                    {phase.image ? (
                      <div className="grid md:grid-cols-[1.5fr,1fr] gap-8 items-start">
                        <div className="flex gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                              {index + 1}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-charcoal mb-2">
                              {phase.title}
                            </h3>
                            <p className="text-muted-foreground">{phase.description}</p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={phase.image.src}
                            alt={phase.image.alt}
                            className="w-full h-auto max-h-[600px] object-cover rounded-lg"
                            loading="lazy"
                            width={600}
                            height={400}
                          />
                          <p className="text-sm text-muted-foreground mt-3 italic">
                            {phase.image.caption}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-charcoal mb-2">
                            {phase.title}
                          </h3>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                    )}
                    {phase.videoEmbed && (
                      <div className="mt-8">
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                          <iframe
                            src={phase.videoEmbed}
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Video case study"
                            loading="lazy"
                          />
                        </div>
                        {phase.videoCaption && (
                          <p className="text-sm text-muted-foreground mt-3 italic">{phase.videoCaption}</p>
                        )}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Risultati */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-section text-charcoal mb-8">Risultati</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg glow-yellow hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="text-primary font-semibold">✓</span>
                    <p className="text-charcoal">{result}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Suggested Cases */}
        <SuggestedCases currentCaseId={caseId} allCases={allCases} />

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="text-section text-primary-foreground mb-4">
                Vuoi risultati simili per la tua organizzazione?
              </h2>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Parliamone
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
