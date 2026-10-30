"use client";

import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { challenges } from "@/lib/challenges";
import { DOORS } from "@/lib/doors";

const LeSfide = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Le sfide culturali delle organizzazioni — Venturo"
        description="Persone che non partecipano, comunicazione interna che non arriva, talenti che non si riconoscono nel brand. Le situazioni che riconosciamo più spesso, e come le affrontiamo."
        canonical="https://venturoconsulting.it/le-sfide"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/le-sfide", en: "https://venturoconsulting.it/en/challenges" }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="pt-32 md:pt-44 pb-20 md:pb-28">
          <div className="container-narrow">
            <AnimatedSection>
              <p className="text-eyebrow font-mono text-muted-foreground mb-6">
                Le sfide
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="text-hero md:!text-[52px] text-foreground max-w-3xl">
                Le situazioni che riconosciamo più spesso.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="mt-6 text-body text-muted-foreground max-w-2xl">
                Hanno tutte la stessa radice: un&apos;identità che l&apos;organizzazione non riesce a vedere, e un engagement che ne paga il prezzo. Le abbiamo divise per porta, a seconda di chi le vive per primo.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Challenges, raggruppate per porta (lib/doors.ts) */}
        {DOORS.map((door) => {
          const group = challenges.filter((c) => c.door === door.slug);
          if (group.length === 0) return null;
          return (
            <section key={door.slug} className="container-narrow mb-16 md:mb-24">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-foreground pb-4 mb-2">
                <h2 className="text-subtitle text-foreground">{door.homeLabel}</h2>
                <Link
                  href={`/${door.slug}`}
                  className="text-sm font-mono text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  {door.menuLabel} →
                </Link>
              </div>
              {group.map((challenge, index) => (
                <AnimatedSection key={challenge.title} delay={index * 80}>
                  <div className="py-12 md:py-16 border-t border-border first:border-t-0 rounded-lg px-4 -mx-4 glow-row glow-yellow hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="text-section text-foreground leading-snug mb-6">{challenge.title}</h3>
                    <div className="space-y-6">
                      <p className="text-body text-muted-foreground">{challenge.reframing}</p>
                      <div className="bg-charcoal rounded-lg px-5 py-4 md:px-6 md:py-5">
                        <div className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-warm-white/60 mt-1 flex-shrink-0" />
                          <p className="text-base text-warm-white font-medium leading-relaxed">{challenge.action}</p>
                        </div>
                        <p className="mt-3 text-sm text-warm-white/50">Approccio: {challenge.approccio}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </section>
          );
        })}

        {/* Closing CTA */}
        <section className="mt-20 md:mt-28 bg-charcoal">
          <div className="container-narrow py-20 md:py-24 text-center">
            <AnimatedSection>
              <p className="text-section text-warm-white leading-snug">
                Ti riconosci in una di queste situazioni?
              </p>
              <div className="mt-10">
                <Button
                  onClick={scrollToContact}
                  variant="hero"
                  size="lg"
                  className="glow-btn-light"
                >
                  Parliamone
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeSfide;
