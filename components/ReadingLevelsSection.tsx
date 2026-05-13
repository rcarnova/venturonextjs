import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";

const levels = [
  {
    label: "Livello 01",
    title: "Segnali digitali",
    body: "Cosa vede il mercato di voi come employer. Recensioni, careers page, percezione esterna. I dati che esistono già, spesso ignorati.",
  },
  {
    label: "Livello 02",
    title: "Esperienza vissuta",
    body: "Come i dipendenti vivono davvero l'organizzazione, mappata su quattro aree: cultura, persone, ambiente e tecnologia, employee journey.",
  },
  {
    label: "Livello 03",
    title: "Radici culturali",
    body: "Perché certe cose non cambiano nonostante le buone intenzioni. Le assunzioni di base che nessuna survey raggiunge.",
    cta: { text: "Scopri Lumen", href: "/lumen" },
  },
];

const ReadingLevelsSection = () => {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <GlowTitle className="text-3xl md:text-section text-foreground">
              Prima di intervenire, ascoltiamo.
            </GlowTitle>
            <p className="text-subheadline mt-4 text-muted-foreground">
              Tre livelli di lettura. Ognuno rivela quello che il precedente non vede.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {levels.map((level, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <div className={`border-t-2 border-accent pt-6 ${index === 2 ? 'md:border-l-2 md:border-l-primary md:pl-8' : ''}`}>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  {level.label}
                </p>
                <h3 className={`text-subtitle text-foreground mb-4 ${index === 2 ? 'text-primary' : ''}`}>
                  {level.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {level.body}
                </p>
                {level.cta && (
                  <Link
                    href={level.cta.href}
                    className="inline-flex items-center mt-6 text-primary font-mono font-medium group hover:underline"
                  >
                    {level.cta.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadingLevelsSection;
