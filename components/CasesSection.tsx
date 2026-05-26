import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";
import { Button } from "./ui/button";

const CasesSection = () => {
  return (
    <section id="casi" className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <GlowTitle className="text-3xl md:text-section text-foreground">
              Risultati concreti
            </GlowTitle>
            <p className="text-subheadline mt-4 text-muted-foreground">
              Alcuni progetti in cui la cultura è diventata visibile.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
              {/* Image column */}
              <div className="order-first">
                <img
                  src="/cases/randstad-professionals-envisioning.webp"
                  alt="Workshop di envisioning con il team Randstad Professionals"
                  className="w-full h-[360px] md:h-full object-cover md:rounded-l-lg"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>

              {/* Content column */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-6 bg-card md:rounded-r-lg">
                {/* Label */}
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Caso studio
                </p>

                {/* Category tag */}
                <span className="inline-block self-start rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  Talent Strategy / Employer Branding
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-medium leading-tight text-foreground">
                  EVP costruita dalle persone
                </h3>

                {/* Body */}
                <p className="text-muted-foreground leading-relaxed">
                  EVP, Talent Personas e video employer branding per la divisione top management di Randstad. Un lavoro che parte dall'interno — dalla cultura del team — per costruire una proposta di valore credibile verso il mercato.
                </p>

                {/* CTA */}
                <Link
                  href="/casi-studio/randstad-professionals"
                  className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
                >
                  Leggi il caso completo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Link to all cases */}
        <AnimatedSection delay={200}>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/casi-studio" className="inline-flex items-center gap-2 glow-btn">
                Vedi tutti i casi studio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CasesSection;
