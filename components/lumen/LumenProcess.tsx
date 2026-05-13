import AnimatedSection from "@/components/AnimatedSection";
import { Eye, Users, MessageCircle, Target } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Raccolta",
    desc: "Interviste narrative one-to-one (45min ciascuna) e/o questionario narrativo con le 8 domande, a seconda del formato scelto. In alcuni progetti si usano entrambi - le interviste per profondità, il questionario per ampiezza.",
  },
  {
    icon: Eye,
    num: "02",
    title: "Analisi",
    desc: "Lettura tematica delle trascrizioni. Emersione dei pattern ricorrenti, delle tensioni, delle metafore spontanee usate dalle persone per descrivere la propria esperienza.",
  },
  {
    icon: Users,
    num: "03",
    title: "Workshop",
    desc: "Restituzione al team di leadership attraverso workshop facilitato. Non un report da leggere: una sessione dove l'organizzazione si ascolta attraverso le proprie voci. Le tensioni vengono nominate collettivamente. Poi si passa alla co-progettazione - lavoro in sottogruppi con dot voting per identificare le 2 sfide prioritarie su cui agire.",
  },
  {
    icon: Target,
    num: "04",
    title: "Progetto 3 mesi",
    desc: "Le 2 sfide selezionate diventano progetti concreti che operano a livello di artefatti modificabili - riunioni, onboarding, comunicazione, rituali. Piccoli cambiamenti che toccano le assunzioni profonde. Non è la soluzione finale - è la porta di ingresso verso un cambiamento più profondo.",
  },
];

const LumenProcess = () => (
  <section className="py-24 bg-muted/40">
    <div className="container-wide max-w-5xl">
      <AnimatedSection>
        <p className="text-eyebrow font-mono text-primary mb-4">Come funziona</p>
        <h2 className="text-section mb-4">Dallo specchio all'azione</h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
          Lumen non si esaurisce nella rilevazione. Ogni fase prepara la successiva,
          fino a trasformare la comprensione in progetto concreto.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <AnimatedSection key={step.num} delay={i * 100}>
              <div className="bg-background border border-border rounded-xl p-8 h-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">{step.num}</span>
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-base">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection delay={400}>
        <div className="bg-background border border-border rounded-xl p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">L'output</p>
          <p className="text-foreground leading-relaxed mb-4">
            Non un report di 80 pagine che finisce in un cassetto. Lumen produce uno <strong>specchio narrativo</strong>:
            un documento di 15-25 pagine in cui le persone dell'organizzazione riconoscono la propria voce,
            le proprie storie, le proprie tensioni - e capiscono finalmente perché certe cose non cambiano mai,
            nonostante le buone intenzioni.
          </p>
          <p className="text-foreground leading-relaxed">
            Più importante dello specchio è ciò che succede dopo: la <strong>mappa delle leve prioritarie</strong> con
            2 progetti concreti a 3 mesi che l'organizzazione porta avanti in autonomia o con accompagnamento Venturo.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenProcess;
