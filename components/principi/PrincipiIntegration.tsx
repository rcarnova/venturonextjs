import AnimatedSection from "@/components/AnimatedSection";

interface Props {
  lang?: "it" | "en";
}

const copy = {
  it: {
    label: "Il nostro metodo",
    title: "Il metodo Venturo",
    intro: "Questi libri non sono citazioni di circostanza — sono i fondamenti del nostro modo di lavorare. E il nostro approccio distintivo nasce esattamente dall'aver messo insieme mondi che raramente dialogano.",
    pillars: [
      { bold: "Brand strategy", rest: " (Aaker, Neumeier, Olins) ci ha insegnato che le promesse vanno mantenute dall'interno, non dichiarate dall'esterno." },
      { bold: "Organizational culture", rest: " (Schein, Laloux, Lencioni, Kotter) ci ha mostrato come funzionano davvero le organizzazioni — a tre livelli, con assunzioni invisibili che guidano tutto." },
      { bold: "Design thinking & innovation", rest: " (Brown, Kelley) ci ha dato il metodo — ascolto, co-progettazione, prototipazione, iterazione." },
      { bold: "Behavioral science", rest: " (Kahneman, Taleb, Heath) ci ha spiegato come le persone pensano, decidono, raccontano — e perché le storie rivelano più dei questionari." },
    ],
    closing: "Venturo esiste perché abbiamo capito una cosa semplice: la cultura organizzativa è la promessa di brand interna. E se quella promessa non regge, nessuna comunicazione esterna salverà l'employer branding, nessun tool salverà l'innovazione, nessuna policy salverà la retention.\n\nLavoriamo sull'infrastruttura della promessa — e usiamo questi principi per farlo.",
  },
  en: {
    label: "Our method",
    title: "The Venturo method",
    intro: "These books are not token references — they are the foundations of how we work. And our distinctive approach comes precisely from bringing together worlds that rarely talk to each other.",
    pillars: [
      { bold: "Brand strategy", rest: " (Aaker, Neumeier, Olins) taught us that promises must be kept from the inside, not declared from the outside." },
      { bold: "Organizational culture", rest: " (Schein, Laloux, Lencioni, Kotter) showed us how organizations really work — on three levels, with invisible assumptions driving everything." },
      { bold: "Design thinking & innovation", rest: " (Brown, Kelley) gave us the method — listening, co-design, prototyping, iteration." },
      { bold: "Behavioral science", rest: " (Kahneman, Taleb, Heath) explained how people think, decide, tell stories — and why stories reveal more than questionnaires." },
    ],
    closing: "Venturo exists because we understood something simple: organizational culture is the internal brand promise. And if that promise doesn't hold, no external communication will save your employer branding, no tool will save innovation, no policy will save retention.\n\nWe work on the infrastructure of the promise — and we use these principles to do it.",
  },
};

const PrincipiIntegration = ({ lang = "it" }: Props) => {
  const t = copy[lang];

  return (
    <section className="py-24 bg-muted/40">
      <div className="container-wide max-w-5xl">
        <AnimatedSection>
          <p className="text-eyebrow font-mono text-primary mb-4">{t.label}</p>
          <h2 className="text-section mb-6">{t.title}</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-10 leading-relaxed">{t.intro}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {t.pillars.map((p, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="bg-background border border-border rounded-xl p-6 h-full">
                <p className="text-foreground text-sm leading-relaxed">
                  <strong>{p.bold}</strong>{p.rest}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <p className="text-foreground leading-relaxed whitespace-pre-line">{t.closing}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PrincipiIntegration;
