"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, FileText, Users } from "lucide-react";

const questions = [
  {
    title: "L'amico al bar",
    question: "Immagina di incontrare un amico che non vedi da mesi. Lui ti chiede com'è lavorare qui. Cosa gli racconti, in due minuti?",
    note: "Rivela la cultura percepita vs quella dichiarata. L'informalità della scena scioglie la difesa.",
  },
  {
    title: "L'errore permesso",
    question: "Pensa all'ultima volta che qualcosa è andato storto - una decisione sbagliata, un progetto che non ha funzionato. Come è andata a finire?",
    note: "Illumina la tolleranza al fallimento e il rapporto con l'accountability reale.",
  },
  {
    title: "Il nuovo collega",
    question: "Se dovessi spiegare a un nuovo collega le cose 'non scritte' - quelle che non troverà mai nel manuale - cosa gli diresti?",
    note: "Porta in superficie le assunzioni di base, il terzo livello di Schein, il più difficile da raggiungere.",
  },
  {
    title: "Il trasloco",
    question: "Se la vostra azienda si trasferisse, cosa portereste con voi e cosa lascereste - di fisico e di astratto?",
    note: "Rivela artefatti valorizzati, valori reali, e cosa viene tollerato ma non amato.",
  },
  {
    title: "L'ultima decisione",
    question: "Pensa all'ultima decisione importante presa in azienda - come l'hai saputo?",
    note: "Rivela sistemi di potere reale, canali di comunicazione, inclusione percepita.",
  },
  {
    title: "Le sfide future",
    question: "Se dovessi raccontare quali sono le grandi sfide future dell'azienda, di quali parleresti?",
    note: "Rivela allineamento strategico tra board e management.",
  },
  {
    title: "La celebrazione",
    question: "L'ultima volta che tu o il tuo team avete raggiunto qualcosa di importante, come avete festeggiato?",
    note: "Rivela sistemi di riconoscimento reale e coerenza emotiva.",
  },
  {
    title: "La riunione",
    question: "Ti trovi in una riunione che fai di frequente - qual è la sensazione che ti lascia appena terminata?",
    note: "Rivela qualità dei rituali organizzativi e vitalità culturale.",
  },
];

const techniques = [
  {
    id: "interviews",
    icon: MessageCircle,
    label: "Interviste narrative",
    when: "Quando serve profondità più che ampiezza. Quando i temi sono delicati.",
    reveals: "Episodi concreti, emozioni autentiche, contraddizioni che in gruppo non emergerebbero. Particolarmente efficaci per far emergere le assunzioni di base - quelle credenze così profonde che le persone non sanno di averle finché non raccontano una storia.",
  },
  {
    id: "questionnaire",
    icon: FileText,
    label: "Questionario narrativo",
    when: "Quando serve scala più che profondità. Quando l'organizzazione è ampia e serve comparare risposte tra livelli gerarchici.",
    reveals: "Meno profondità delle interviste ma maggiore ampiezza. Soprattutto produce tensioni comparative - le stesse domande a board e management rivelano scostamenti che sono già un dato culturale potente.",
  },
  {
    id: "workshop",
    icon: Users,
    label: "Workshop di team coaching e storytelling",
    when: "Quando serve consapevolezza condivisa e co-costruzione di significato.",
    reveals: "Consapevolezza in tempo reale. Le persone si ascoltano tra loro, riconoscono pattern, nominano tensioni, scoprono assunzioni condivise. La diversità di voci nello stesso momento rivela culture multiple che coesistono senza saperlo.",
  },
];

const LumenTechniques = ({ embedded }: { embedded?: boolean }) => {
  const [activeTab, setActiveTab] = useState("interviews");
  const active = techniques.find((t) => t.id === activeTab)!;
  const ActiveIcon = active.icon;

  const Wrapper = embedded ? "div" : "section";

  return (
    <Wrapper className={embedded ? "pb-8" : "py-24 bg-background"}>
      <div className={embedded ? "" : "container-wide max-w-5xl"}>
        {!embedded && (
          <AnimatedSection>
            <p className="text-eyebrow font-mono text-primary mb-4">Lo strumento</p>
            <h2 className="text-section mb-4">Le tecniche che compongono Lumen</h2>
          </AnimatedSection>
        )}
        <AnimatedSection>
          <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
            Lumen non è una procedura fissa - è un set di tecniche che si combinano in base al progetto.
            Ogni tecnica ha un ruolo specifico nel processo di rivelazione culturale.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-2 mb-8">
            {techniques.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === t.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Active technique detail */}
        <AnimatedSection delay={150}>
          <div className="border border-border rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <ActiveIcon className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">{active.label}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Quando</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{active.when}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Cosa rivela</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{active.reveals}</p>
              </div>
            </div>

            {activeTab === "workshop" && (
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sessioni facilitate in cui gruppi rispondono collettivamente a domande generative e lavorano
                  insieme per dare senso alle proprie esperienze. Usiamo tecniche di team coaching e storytelling
                  per far emergere narrazioni collettive.
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Le 8 domande - shown when questionnaire or interviews tab is active */}
        {(activeTab === "interviews" || activeTab === "questionnaire") && (
          <>
            <AnimatedSection delay={200}>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Le 8 domande</p>
              <p className="text-muted-foreground max-w-2xl mb-8 text-lg">
                Le 8 domande che attraversano i tre livelli di Schein.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {questions.map((q, i) => (
                <AnimatedSection key={q.title} delay={200 + i * 50}>
                  <div className="border border-border rounded-xl p-6 h-full flex flex-col gap-3 hover:border-primary/30 transition-colors">
                    <h4 className="font-bold text-sm">{q.title}</h4>
                    <p className="italic text-muted-foreground text-xs leading-relaxed flex-1">"{q.question}"</p>
                    <p className="text-xs text-muted-foreground border-t border-border/50 pt-3 leading-relaxed">{q.note}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default LumenTechniques;
