"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import HeaderEN from "./HeaderEN";
import FooterEN from "./FooterEN";
import AnimatedSection from "../AnimatedSection";
import { Button } from "../ui/button";
import SuggestedCasesEN from "./SuggestedCasesEN";
import { allCasesEN } from "@/data/casesEN";

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
}

interface CaseStudyLayoutENProps {
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

const CaseStudyLayoutEN = ({
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
}: CaseStudyLayoutENProps) => {
  const scrollToContact = () => {
    window.location.href = "/en#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderEN />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <Link
            href="/en/case-studies"
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to cases
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

        {/* The Challenge */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-section text-charcoal mb-6">The challenge</h2>
              <p className="text-body-large text-muted-foreground mb-8">
                {challenge.description}
              </p>
              <div className="bg-muted/50 rounded-xl p-6 glow-yellow hover:scale-[1.01] transition-all duration-300">
                <p className="font-medium text-charcoal mb-4">Main problems:</p>
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

        {/* How we worked */}
        <section className="section-padding bg-muted/30">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-section text-charcoal mb-12">How we worked</h2>
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
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding">
          <div className="container-narrow">
            <AnimatedSection>
              <h2 className="text-section text-charcoal mb-8">Results</h2>
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
        <SuggestedCasesEN currentCaseId={caseId} allCases={allCasesEN} />

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="text-section text-primary-foreground mb-4">
                Want similar results for your organization?
              </h2>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Let's talk
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <FooterEN />
    </div>
  );
};

export default CaseStudyLayoutEN;
