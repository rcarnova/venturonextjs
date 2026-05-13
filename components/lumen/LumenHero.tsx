import AnimatedSection from "@/components/AnimatedSection";

const LumenHero = () => (
  <section className="pt-32 pb-24 bg-background">
    <div className="container-wide max-w-4xl">
      <AnimatedSection>
        <p className="text-eyebrow font-mono text-primary mb-6">Metodologia</p>
        <h1 className="text-hero mb-8">
          Non misuriamo la cultura.<br />
          <span className="text-primary">La illuminiamo.</span>
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <div className="space-y-5 text-body text-muted-foreground max-w-3xl">
          <p>
            La cultura organizzativa è come l'acqua per chi ci nuota dentro: invisibile proprio perché
            onnipresente. Le persone respirano le sue regole non scritte ogni giorno, ma faticano a nominarle.
          </p>
          <p>
            Ecco perché Lumen non usa solo questionari o solo interviste. Combina tecniche narrative -
            interviste one-to-one, domande oblique, workshop di storytelling - per far emergere storie.
            E nelle storie, la cultura si rivela da sola.
          </p>
          <p>
            Il risultato non è un giudizio. È uno specchio. Un'immagine fedele di come le persone
            vivono davvero l'organizzazione, non di come pensano che dovrebbero viverla.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenHero;
