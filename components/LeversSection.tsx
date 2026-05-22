"use client";

import { useState } from "react";
import { UserPlus, Users2, Target, LucideIcon } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";

interface Lever {
  title: string;
  description: string;
  icon: LucideIcon;
}

const levers: Lever[] = [
  {
    title: "Attrarre e Trattenere i Talenti",
    description: "I candidati arrivano con aspettative che non corrispondono alla realtà. O non arrivano affatto. Il problema non è l'offerta economica né il settore: è che il brand comunica qualcosa di generico che non racconta chi siete davvero. Le persone giuste non si riconoscono, e quelle sbagliate accettano e se ne vanno dopo un anno.",
    icon: UserPlus
  },
  {
    title: "Cultura Interna",
    description: "I senior difendono un modo di fare che ha funzionato. I nuovi arrivati ne portano un altro. Nessuno dei due ha torto, ma non si parlano. Facciamo emergere le culture diverse che convivono nella stessa organizzazione e costruiamo un linguaggio condiviso.",
    icon: Users2
  },
  {
    title: "Marketing & Coerenza Esterna",
    description: "Il marketing racconta un'azienda che le persone interne non riconoscono. I clienti lo percepiscono. I candidati lo scoprono dopo il primo mese. Il problema non è il messaggio: è che l'identità esterna è stata costruita senza partire da quella interna. Allineiamo chi siete dentro con quello che comunicate fuori. Partendo da dentro, non dall'esterno.",
    icon: Target
  }
];

const LeversSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = levers[activeIndex].icon;

  return (
    <section id="leve" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <GlowTitle className="text-3xl md:text-section text-primary-foreground" variant="light">
              Le aree di intervento
            </GlowTitle>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              Rendere visibile il perché di un'organizzazione non è sempre semplice. Ecco le sfide che riconosciamo più spesso.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection animation="fade-up" delay={200}>
          {/* Mobile: single scrollable row */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 flex-nowrap scrollbar-hide md:hidden">
            {levers.map((lever, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap glow-yellow ${
                  index === activeIndex
                    ? "bg-white text-foreground shadow-lg"
                    : "bg-transparent text-white border border-white/60 hover:border-white"
                }`}
              >
                {lever.title}
              </button>
            ))}
          </div>
          {/* Desktop: 2 rows of 3 */}
          <div className="hidden md:grid md:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {levers.map((lever, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 text-center glow-yellow ${
                  index === activeIndex
                    ? "bg-white text-foreground shadow-lg"
                    : "bg-transparent text-white border border-white/60 hover:border-white"
                }`}
              >
                {lever.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="text-center mt-6">
          <Link
            href="/le-sfide"
            className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Scopri tutte le sfide →
          </Link>
        </div>

        {/* Content */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-10 md:mt-12">
            <div
              key={activeIndex}
              className="bg-white rounded-xl p-8 md:p-12 border border-black/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.12)] animate-fade-in"
            >
              <ActiveIcon className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-6" strokeWidth={1.5} />
              <h3 className="text-subtitle text-foreground mb-4">
                {levers[activeIndex].title}
              </h3>
              <p className="text-body text-muted-foreground max-w-3xl">
                {levers[activeIndex].description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="text-center mt-16">
            <Link
              href="/le-sfide"
              className="inline-flex items-center text-primary-foreground/90 hover:text-primary-foreground font-medium text-lg underline underline-offset-4 decoration-primary-foreground/40 hover:decoration-primary-foreground transition-all duration-300"
            >
              Riconosci una di queste situazioni? Leggi come le affrontiamo.
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeversSection;
