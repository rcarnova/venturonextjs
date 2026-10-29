import { HeartHandshake, UserPlus, Target, LucideIcon } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";

/**
 * Le conseguenze. L'engagement e il primo effetto di un'organizzazione che
 * sa chi e; attrazione dei talenti e coerenza esterna arrivano a cascata.
 * Tre colonne fisse, non tab: si leggono tutte senza cliccare.
 * L'ordine e la catena: non va cambiato.
 */
interface Effect {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: { href: string; text: string };
}

const effects: Effect[] = [
  {
    title: "Engagement",
    description:
      "Le persone smettono di eseguire e iniziano a contribuire. Non perché qualcuno le ha motivate, ma perché sanno dove stanno andando e perché.",
    icon: HeartHandshake,
    link: { href: "/leading-by-purpose", text: "Leading by Purpose, il percorso per i leader" },
  },
  {
    title: "Attrazione dei talenti",
    description:
      "Chi è dentro sa raccontare com'è lavorare qui, e le persone giuste si riconoscono prima di candidarsi. Meno uscite durante il periodo di prova.",
    icon: UserPlus,
    link: { href: "/analisi-evp", text: "Analizza la vostra EVP" },
  },
  {
    title: "Coerenza esterna",
    description:
      "I clienti incontrano la vostra cultura nella persona che hanno davanti. Quando le persone stanno meglio dentro, ciò che dite fuori diventa credibile.",
    icon: Target,
  },
];

const LeversSection = () => {
  return (
    <section id="conseguenze" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
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

        <AnimatedSection animation="fade-up" delay={150}>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 m-0">
            {effects.map((e, i) => {
              const Icon = e.icon;
              return (
                <li
                  key={e.title}
                  className="bg-white rounded-xl p-7 md:p-8 border border-black/[0.06] flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{e.title}</h3>
                  <p className="text-body text-muted-foreground m-0 flex-1">{e.description}</p>
                  {e.link && (
                    <Link
                      href={e.link.href}
                      className="inline-block mt-6 text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
                    >
                      {e.link.text} →
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-center text-xl md:text-2xl font-semibold text-primary-foreground mt-14">
            L&apos;identità non è un tema soft. È l&apos;unica strategia che regge.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeversSection;
