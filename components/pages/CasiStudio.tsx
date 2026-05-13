"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SEO } from "@/components/SEO";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    company: "Randstad",
    result: "Cultura visibile, candidati allineati",
    description: "Campagna employer branding che traduce valori interni in messaggi concreti per il mercato del lavoro.",
    slug: "randstad",
    hasDetail: true,
    logo: "/logos/randstad_blue.svg",
    invertLogo: true,
    tags: ["CMO / Marketing", "CHO / HR"],
  },
  {
    company: "Randstad Professionals",
    result: "Identità di marca per chi seleziona i migliori",
    description: "EVP, Talent Personas e video employer branding per la divisione top management di Randstad.",
    slug: "randstad-professionals",
    hasDetail: true,
    logo: "/logos/randstad_blue.svg",
    invertLogo: true,
    tags: ["CHO / HR", "CMO / Marketing"],
  },
  {
    company: "Findomestic",
    result: "Da linguaggio istituzionale a conversazione unificata",
    description: "Workshop intensivo per unificare il linguaggio tra assistenza clienti e team social.",
    slug: "findomestic",
    hasDetail: true,
    logo: "/logos/findomestic_white.webp",
    logoScale: 2.5,
    tags: ["CMO / Marketing", "CHO / HR"],
  },
  {
    company: "Ufficio Pio",
    result: "Naming che fa cultura",
    description: "Progetto di naming strategico per dare linguaggio condiviso ai dipartimenti e rendere riconoscibile il percorso dei beneficiari.",
    slug: "ufficio-pio",
    hasDetail: true,
    logo: "/logos/ufficio_pio_white.webp",
    tags: ["CMO / Marketing", "CEO / Leadership"],
  },
  {
    company: "Lely",
    result: "Tool per gestire persone senza esperienza HR",
    description: "Framework pratico per manager tecnici che devono guidare team.",
    slug: "lely",
    hasDetail: true,
    logo: "/logos/lely_white.svg",
    logoScale: 1.3,
    tags: ["CHO / HR", "CMO / Marketing"],
  },
  {
    company: "Ricehouse",
    result: "Da identità forte a candidature qualificate",
    description: "Ridefinizione completa dell'employer brand e della proposta di valore.",
    slug: "ricehouse",
    hasDetail: true,
    logo: "/logos/ricehouse_white.webp",
    tags: ["CHO / HR", "CMO / Marketing"],
  },
  {
    company: "Eu.promotions",
    result: "Identità scoperta, non inventata",
    description: "Brand identity e strategia contenuti per una PMI internazionale nel loyalty & retail marketing.",
    slug: "eupromotions",
    hasDetail: true,
    logo: "/logos/eupromotion_white.webp",
    invertLogo: false,
    logoScale: 3,
    tags: ["CEO / Leadership", "CMO / Marketing"],
  },
  {
    company: "CVE",
    result: "La Prima Town Hall aziendale",
    description: "Progettazione e facilitazione di un momento storico per l'azienda.",
    slug: "cve",
    hasDetail: true,
    logo: "/logos/cve_mono.webp",
    logoScale: 0.8,
    tags: ["CEO / Leadership"],
  },
  {
    company: "Comune di Vercelli",
    result: "Toxic: dare voce ai ragazzi sulla violenza di genere",
    description: "Laboratorio partecipativo nelle scuole superiori, raccolta di testimonianze e reading teatrale al Festival Raccolti.",
    slug: "comune-di-vercelli-violenza-di-genere",
    hasDetail: true,
    logo: "/logos/comune_vercelli_wordmark.png",
    logoScale: 1,
    invertLogo: true,
    tags: ["CEO / Leadership", "CMO / Marketing"],
  },
];

const CasiStudio = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Casi studio — Progetti di cultura organizzativa ed employer branding — Venturo"
        description="Employer branding, comunicazione interna, naming strategico, facilitazione. Progetti reali in cui la cultura organizzativa è diventata visibile."
        canonical="https://venturoconsulting.it/casi-studio"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio", en: "https://venturoconsulting.it/en/case-studies" }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20">
          <div className="container-wide text-center">
            <AnimatedSection>
              <h1 className="text-display text-charcoal">Progetti in cui la cultura è diventata visibile</h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseStudy, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <Link href={`/casi-studio/${caseStudy.slug}`} className="block h-full">
                    <div className="card-subtle group hover:bg-card transition-all duration-300 cursor-pointer h-full flex flex-col glow-yellow hover:scale-[1.02]">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {caseStudy.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs font-normal text-muted-foreground border-border"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-start justify-between">
                        <div>
                          {caseStudy.logo ? (
                            <div className={`bg-charcoal rounded-lg overflow-hidden inline-flex items-center justify-center mb-2 h-10 min-w-[110px] ${(caseStudy.logoScale || 1) >= 3 ? 'px-6' : 'px-4'}`}>
                              <img
                                src={caseStudy.logo}
                                alt={caseStudy.company}
                                className={`h-5 w-auto ${caseStudy.invertLogo ? 'invert brightness-0 invert' : ''}`}
                                style={{ transform: `scale(${caseStudy.logoScale || 1})` }}
                                width={80}
                                height={20}
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">
                              {caseStudy.company}
                            </span>
                          )}
                          <h3 className="text-xl font-semibold text-charcoal mt-2">
                            {caseStudy.result}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-4 flex-grow">
                        {caseStudy.description}
                      </p>
                      <p className="text-sm text-primary font-medium mt-4 group-hover:underline">
                        Leggi il caso →
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="text-section text-charcoal mb-4">Vuoi risultati simili?</h2>
              <Button onClick={scrollToContact} variant="default" size="lg">
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

export default CasiStudio;
