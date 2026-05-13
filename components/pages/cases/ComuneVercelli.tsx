"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import SuggestedCases from "@/components/SuggestedCases";
import { allCases } from "@/data/cases";

const meta = [
  { label: "Cliente", value: "Comune di Vercelli" },
  { label: "Tema", value: "Violenza di genere" },
  { label: "Output", value: "Reading teatrale" },
  { label: "Anno", value: "2025" },
];

const quotes = [
  "Non potevo uscire con i maschi e vestire come volevo e quando chiudevamo il rapporto lui poteva andare con altre tipe ma io no.",
  "Mio padre non mi fa fare box perché sono donna.",
  "Io consiglio a me stessa di non darmi più colpe di cose che non ho fatto io e soprattutto di avere il coraggio di parlarne.",
];

const method = [
  {
    title: "Progettazione",
    description: "Disegno del laboratorio partecipativo: setting, domande, cornice di sicurezza per studenti e studentesse.",
  },
  {
    title: "Facilitazione",
    description: "Conduzione degli incontri e raccolta delle testimonianze scritte, in forma anonima e tutelata.",
  },
  {
    title: "Trasformazione",
    description: "Elaborazione del materiale e scrittura drammaturgica per restituire le voci in forma di reading teatrale.",
  },
];

const results = [
  "Reading teatrale presentata al Festival Raccolti di Vercelli",
  "Partecipazione attiva di studenti e studentesse delle scuole superiori",
  "Spazio di ascolto e consapevolezza su un tema socialmente rilevante",
];

const ComuneVercelli = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <SEO
        title="Toxic — laboratorio sulla violenza di genere — Venturo"
        description="Laboratorio con studenti delle scuole superiori di Vercelli sulla violenza di genere. Reading teatrale al Festival Raccolti, commissionato dal Comune di Vercelli."
        canonical="https://venturoconsulting.it/casi-studio/comune-di-vercelli-violenza-di-genere"
        lang="it"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/comune-di-vercelli-violenza-di-genere",
          en: "https://venturoconsulting.it/en/case-studies/comune-di-vercelli-gender-violence",
        }}
      />
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
                <img
                  src="/logos/comune_vercelli_transparent.png"
                  alt="Comune di Vercelli"
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain mx-auto mb-8"
                  width={733}
                  height={200}
                />
                <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Caso studio
                </p>
                <h1 className="text-display text-charcoal">Toxic</h1>
                <p className="text-subheadline mt-4 max-w-2xl mx-auto">
                  Un laboratorio con studenti delle scuole superiori di Vercelli sulla violenza di genere, commissionato dal Comune di Vercelli.
                </p>

                {/* Meta chips */}
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

          {/* Locandina */}
          <section className="py-12 bg-background">
            <div className="container-narrow">
              <AnimatedSection>
                <figure>
                  <img
                    src="/cases/toxic-locandina.webp"
                    alt="Locandina del progetto Toxic — laboratorio per ragazze e ragazzi sul tema della violenza di genere"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    width={1200}
                    height={675}
                  />
                  <figcaption className="text-sm text-muted-foreground mt-3 italic text-center">
                    Locandina del progetto Toxic, Comune di Vercelli, 2025
                  </figcaption>
                </figure>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <figure className="mt-12">
                  <img
                    src="/cases/toxic-pubblico-raccolti.webp"
                    alt="Il pubblico del Raccolti Festival al reading di Toxic"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                    width={1920}
                    height={1279}
                  />
                  <figcaption className="text-sm text-muted-foreground mt-3 italic text-center">
                    Il pubblico del Raccolti Festival al reading di Toxic
                  </figcaption>
                </figure>
              </AnimatedSection>
            </div>
          </section>

          {/* Il progetto */}
          <section className="section-padding">
            <div className="container-narrow">
              <AnimatedSection>
                <h2 className="text-section text-charcoal mb-8">Il progetto</h2>
                <div className="space-y-6 text-body-large text-muted-foreground">
                  <p>
                    Venturo ha lavorato con studenti delle scuole superiori di Vercelli per raccogliere testimonianze dirette su esperienze di discriminazione di genere vissute nella quotidianità.
                  </p>
                  <p>
                    Il metodo: un laboratorio partecipativo con raccolta di testimonianze scritte, elaborazione del materiale e trasformazione in testo drammaturgico.
                  </p>
                  <p>
                    L'output finale è stato una reading teatrale delle testimonianze, presentata in occasione del Festival Raccolti di Vercelli.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Voci dal laboratorio */}
          <section className="section-padding bg-muted/30">
            <div className="container-narrow">
              <AnimatedSection>
                <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Voci dal laboratorio
                </p>
                <h2 className="text-section text-charcoal mb-12">Le testimonianze</h2>
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

          {/* Cosa ha fatto Venturo */}
          <section className="section-padding">
            <div className="container-narrow">
              <AnimatedSection>
                <h2 className="text-section text-charcoal mb-12">Cosa ha fatto Venturo</h2>
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

          {/* Risultati */}
          <section className="section-padding bg-muted/30">
            <div className="container-narrow">
              <AnimatedSection>
                <h2 className="text-section text-charcoal mb-8">Risultati</h2>
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

          {/* Suggested */}
          <SuggestedCases currentCaseId="comune-vercelli" allCases={allCases} />

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
    </>
  );
};

export default ComuneVercelli;
