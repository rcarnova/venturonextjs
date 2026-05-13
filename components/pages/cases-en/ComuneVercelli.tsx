"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import SuggestedCasesEN from "@/components/en/SuggestedCasesEN";
import { allCasesEN } from "@/data/casesEN";

const meta = [
  { label: "Client", value: "City of Vercelli" },
  { label: "Topic", value: "Gender-based violence" },
  { label: "Output", value: "Theatrical reading" },
  { label: "Year", value: "2025" },
];

const quotes = [
  "I wasn't allowed to go out with boys or dress how I wanted, and when we broke up he could go with other girls but I couldn't.",
  "My father won't let me do boxing because I'm a woman.",
  "I tell myself to stop blaming myself for things I didn't do, and above all to find the courage to talk about it.",
];

const method = [
  {
    title: "Design",
    description: "Designing the participatory workshop: setting, questions, and a safe frame for high-school students.",
  },
  {
    title: "Facilitation",
    description: "Leading the sessions and collecting written testimonies, anonymously and with care.",
  },
  {
    title: "Transformation",
    description: "Editing the material and writing the dramaturgical script that returns the voices as a theatrical reading.",
  },
];

const results = [
  "Theatrical reading presented at the Festival Raccolti in Vercelli",
  "Active participation of female and male high-school students",
  "A space for listening and awareness on a socially relevant topic",
];

const ComuneVercelliEN = () => {
  const scrollToContact = () => {
    window.location.href = "/en#contact";
  };

  return (
    <>
      <SEO
        title="Toxic — workshop on gender-based violence — Venturo"
        description="Workshop with high-school students in Vercelli on gender-based violence. Theatrical reading at Festival Raccolti, commissioned by the City of Vercelli."
        canonical="https://venturoconsulting.it/en/case-studies/comune-di-vercelli-gender-violence"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/comune-di-vercelli-violenza-di-genere",
          en: "https://venturoconsulting.it/en/case-studies/comune-di-vercelli-gender-violence",
        }}
      />
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
                <img
                  src="/logos/comune_vercelli_transparent.png"
                  alt="City of Vercelli"
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain mx-auto mb-8"
                  width={733}
                  height={200}
                />
                <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Case study
                </p>
                <h1 className="text-display text-charcoal">Toxic</h1>
                <p className="text-subheadline mt-4 max-w-2xl mx-auto">
                  A workshop with high-school students in Vercelli on gender-based violence, commissioned by the City of Vercelli.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs md:text-sm font-mono text-muted-foreground">
                  {meta.map((m, i) => (
                    <span key={m.label} className="flex items-center gap-3">
                      <span>
                        <span className="uppercase tracking-wider">{m.label}:</span>{" "}
                        <span className="text-charcoal">{m.value}</span>
                      </span>
                      {i < meta.length - 1 && <span aria-hidden>·</span>}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Poster */}
          <section className="py-12 bg-background">
            <div className="container-narrow">
              <AnimatedSection>
                <figure>
                  <img
                    src="/cases/toxic-locandina.webp"
                    alt="Poster of the Toxic project — workshop for girls and boys on gender-based violence"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    width={1200}
                    height={675}
                  />
                  <figcaption className="text-sm text-muted-foreground mt-3 italic text-center">
                    Toxic project poster, City of Vercelli, 2025
                  </figcaption>
                </figure>
              </AnimatedSection>
            </div>
          </section>

          {/* The project */}
          <section className="section-padding">
            <div className="container-narrow">
              <AnimatedSection>
                <h2 className="text-section text-charcoal mb-8">The project</h2>
                <div className="space-y-6 text-body-large text-muted-foreground">
                  <p>
                    Venturo worked with high-school students in Vercelli to gather first-hand testimonies of gender discrimination experienced in everyday life.
                  </p>
                  <p>
                    The method: a participatory workshop with the collection of written testimonies, careful editing of the material, and its transformation into a dramaturgical text.
                  </p>
                  <p>
                    The final output was a theatrical reading of the testimonies, presented at the Festival Raccolti in Vercelli.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Voices */}
          <section className="section-padding bg-muted/30">
            <div className="container-narrow">
              <AnimatedSection>
                <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Voices from the workshop
                </p>
                <h2 className="text-section text-charcoal mb-12">The testimonies</h2>
              </AnimatedSection>

              <div className="space-y-10">
                {quotes.map((quote, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <blockquote className="border-l-2 border-charcoal/80 pl-6 md:pl-10">
                      <p className="text-2xl md:text-3xl leading-snug text-charcoal italic font-light">
                        “{quote}”
                      </p>
                    </blockquote>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* What Venturo did */}
          <section className="section-padding">
            <div className="container-narrow">
              <AnimatedSection>
                <h2 className="text-section text-charcoal mb-12">What Venturo did</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-3 gap-6">
                {method.map((m, i) => (
                  <AnimatedSection key={m.title} delay={i * 100}>
                    <div className="h-full p-6 bg-muted/40 rounded-xl border border-border/60">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mb-4">
                        {i + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">{m.title}</h3>
                      <p className="text-muted-foreground">{m.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="section-padding bg-muted/30">
            <div className="container-narrow">
              <AnimatedSection>
                <h2 className="text-section text-charcoal mb-8">Results</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {results.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg glow-yellow hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="text-primary font-semibold">✓</span>
                      <p className="text-charcoal">{r}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          <SuggestedCasesEN currentCaseId="comune-vercelli" allCases={allCasesEN} />

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
    </>
  );
};

export default ComuneVercelliEN;
