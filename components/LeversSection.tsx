"use client";

import { useState } from "react";
import { HeartHandshake, UserPlus, Target, LucideIcon } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";
import GuestQuote from "./GuestQuote";

/**
 * Le conseguenze. L'engagement e il primo effetto di un'organizzazione che
 * sa chi e; attrazione dei talenti e coerenza esterna arrivano a cascata.
 * L'ordine dei tab e la catena: non va cambiato.
 */
interface Effect {
  title: string;
  description: string;
  icon: LucideIcon;
  quote: { text: string; clipId: string; note?: string };
  link?: { href: string; text: string };
}

const effects: Effect[] = [
  {
    title: "Engagement",
    description:
      "Le persone smettono di eseguire e iniziano a contribuire. Non perché qualcuno le ha motivate, ma perché vedono dove stanno andando e perché.",
    icon: HeartHandshake,
    quote: {
      text: "Da due anni abbiamo istituito un premio: si celebra l'errore più grande che hai fatto. Davanti a tutti racconti cosa hai imparato, e si apre la discussione. È il modo per noi di mantenere viva la cultura.",
      clipId: "x-5EpW4a0yQ",
    },
  },
  {
    title: "Attrazione dei talenti",
    description:
      "Chi è dentro sa raccontare com'è lavorare qui. Le persone giuste si riconoscono prima di candidarsi, quelle sbagliate si autoselezionano. Meno uscite durante il periodo di prova.",
    icon: UserPlus,
    quote: {
      text: "Mi sono innamorata della semplicità del catalogo. Col senno di poi, quello che l'azienda vendeva l'ho ritrovato anche all'interno, nei valori.",
      clipId: "wN0bEE-mlck",
      note: "IKEA non ha fatto employer branding. Ha mandato sé stessa.",
    },
    link: {
      href: "/analisi-evp",
      text: "Analizza lo scarto tra ciò che comunicate e ciò che le persone raccontano di voi",
    },
  },
  {
    title: "Coerenza esterna",
    description:
      "I clienti incontrano la vostra cultura prima del vostro brand: nella persona che hanno davanti. Dipendenti e clienti descrivono lo stesso sistema da due lati. Quando le persone stanno meglio dentro, ciò che dite fuori smette di essere una campagna e diventa credibile.",
    icon: Target,
    quote: {
      text: "Il tema non è HR o non HR. È business and people together.",
      clipId: "Q8vjrjqGZkY",
    },
  },
];

const LeversSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = effects[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="conseguenze" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-mono text-eyebrow text-primary-foreground/60 mb-4">Le conseguenze</p>
            <GlowTitle className="text-3xl md:text-section text-primary-foreground" variant="light">
              Quando le persone si riconoscono, cambia tutto il resto.
            </GlowTitle>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              L&apos;engagement non è un obiettivo a sé. È il primo effetto di
              un&apos;organizzazione che sa chi è. Gli altri arrivano a cascata.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div
            role="tablist"
            aria-label="Le conseguenze"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto"
          >
            {effects.map((e, index) => (
              <button
                key={e.title}
                role="tab"
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-3 rounded-lg text-base font-medium transition-all duration-200 text-center glow-yellow ${
                  index === activeIndex
                    ? "bg-white text-foreground shadow-lg"
                    : "bg-transparent text-white border border-white/60 hover:border-white"
                }`}
              >
                <span className="font-mono text-xs opacity-60 mr-2">{String(index + 1).padStart(2, "0")}</span>
                {e.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-10 md:mt-12">
            <div
              key={activeIndex}
              role="tabpanel"
              className="bg-white rounded-xl p-8 md:p-12 border border-black/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.12)] animate-fade-in"
            >
              <ActiveIcon className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-6" strokeWidth={1.5} />
              <h3 className="text-subtitle text-foreground mb-4">{active.title}</h3>
              <p className="text-body text-muted-foreground max-w-3xl mb-10">{active.description}</p>
              <GuestQuote quote={active.quote.text} clipId={active.quote.clipId} />
              {active.quote.note && (
                <p className="text-body font-medium text-foreground mt-6">{active.quote.note}</p>
              )}
              {active.link && (
                <Link
                  href={active.link.href}
                  className="inline-block mt-8 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  {active.link.text} →
                </Link>
              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-center text-xl md:text-2xl font-semibold text-primary-foreground mt-16">
            L&apos;identità non è un tema soft. È l&apos;unica strategia che regge.
          </p>
          <div className="text-center mt-6">
            <Link
              href="/le-sfide"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground underline underline-offset-4 transition-colors"
            >
              Leggi come affrontiamo queste sfide →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeversSection;
