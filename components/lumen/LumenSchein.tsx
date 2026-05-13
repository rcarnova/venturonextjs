import AnimatedSection from "@/components/AnimatedSection";

const levels = [
  {
    num: "1",
    label: "Artefatti",
    desc: "Ciò che si vede: spazi fisici, rituali visibili, gergo interno, simboli, storie raccontate ai nuovi. Tutto ciò che un osservatore esterno potrebbe notare entrando in ufficio.",
    examples: ["Riunioni in piedi o seduti?", "Si batte un cinque o si stringe la mano?", "Chi parla nei meeting?"],
  },
  {
    num: "2",
    label: "Valori dichiarati",
    desc: "Ciò che si dice: mission aziendale, valori incorniciati, linee guida, politiche HR. Quello che l'organizzazione afferma di essere e di credere.",
    examples: ["\"Siamo flat e agili\"", "\"Mettiamo le persone al centro\"", "\"Favoriamo l'autonomia\""],
  },
  {
    num: "3",
    label: "Assunzioni di base",
    desc: "Ciò che si dà per scontato: credenze inconsce, regole non scritte che nessuno ha mai deciso ma che tutti seguono. Il vero DNA culturale, spesso invisibile anche ai fondatori.",
    examples: ["Chi sbaglia viene aiutato o punito?", "L'errore ammesso è visto come debolezza?", "Basta fare bene o serve anche apparire?"],
  },
];

const LumenSchein = () => (
  <section className="py-24 bg-muted/40">
    <div className="container-wide max-w-5xl">
      <AnimatedSection>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Fondamento teorico</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Il modello di Edgar Schein</h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
          Ogni organizzazione ha tre strati culturali, sovrapposti come cerchi concentrici.
          La maggior parte degli strumenti di misurazione vede solo il primo. Lumen scende fino al terzo.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {levels.map((level, i) => (
          <AnimatedSection key={level.num} delay={i * 100}>
            <div className="bg-background border border-border rounded-xl p-8 h-full flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-mono font-bold flex items-center justify-center">
                  {level.num}
                </span>
                <h3 className="font-bold text-lg">{level.label}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{level.desc}</p>
              <ul className="mt-auto space-y-1">
                {level.examples.map((ex) => (
                  <li key={ex} className="text-xs font-mono text-muted-foreground italic">"{ex}"</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={300}>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Principio metodologico</p>
          <p className="text-foreground leading-relaxed">
            Le survey tradizionali raggiungono al massimo il secondo livello. Le persone rispondono
            in base a ciò che pensano sia corretto dire, non in base a ciò che vivono. Lumen bypassa
            questo filtro attraverso domande narrative: quando racconti una storia, la verità emerge
            prima che tu possa censurarla.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenSchein;
