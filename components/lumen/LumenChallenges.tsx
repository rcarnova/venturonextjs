import AnimatedSection from "@/components/AnimatedSection";

const challenges = [
  {
    title: "Talenti che abbandonano",
    symptom: "I talenti se ne vanno dopo 18 mesi",
    revelation: "Problema di leggibilità culturale - la cultura interna non corrisponde a quella percepita fuori",
  },
  {
    title: "Delega che non funziona",
    symptom: "I manager non delegano davvero",
    revelation: "Problema di fiducia culturale - se l'errore non è permesso, nessuno si prende responsabilità",
  },
  {
    title: "Innovazione sulla carta",
    symptom: "Le idee non si traducono in azione",
    revelation: "La cultura premia chi non sbaglia più di chi prova cose nuove",
  },
  {
    title: "Team che non si capiscono",
    symptom: "Problemi di comunicazione tra funzioni",
    revelation: "Culture diverse che convivono senza linguaggio condiviso",
  },
  {
    title: "Gap dentro/fuori",
    symptom: "Le promesse ai clienti non corrispondono alla realtà interna",
    revelation: "Identità esterna costruita senza partire da quella interna",
  },
  {
    title: "Ibrido senza regole",
    symptom: "Ogni manager applica regole diverse",
    revelation: "Mancanza di definizione condivisa di cosa significa lavorare smart",
  },
];

const LumenChallenges = ({ embedded }: { embedded?: boolean }) => {
  const Wrapper = embedded ? "div" : "section";
  return (
  <Wrapper className={embedded ? "pb-8" : "py-24 bg-background"}>
    <div className={embedded ? "" : "container-wide max-w-5xl"}>
      {!embedded && (
        <AnimatedSection>
          <p className="text-eyebrow font-mono text-primary mb-4">Applicazioni</p>
          <h2 className="text-section mb-4">Le sfide che Lumen affronta</h2>
        </AnimatedSection>
      )}
      <AnimatedSection>
        <p className="text-muted-foreground max-w-3xl mb-12 text-lg">
          Lumen entra nelle organizzazioni da porte diverse - employer branding, trasformazione culturale,
          onboarding, comunicazione interna. Ma qualunque sia il punto di ingresso, lavoriamo sempre sulle
          stesse dinamiche profonde: rendere visibile ciò che è invisibile, nominare ciò che non viene detto,
          allineare ciò che è contraddittorio.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {challenges.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 80}>
            <div className="group border border-border rounded-xl p-6 h-full flex flex-col gap-4 hover:border-primary/40 transition-all">
              <h3 className="font-bold text-base">{c.title}</h3>
              <p className="text-sm text-muted-foreground italic">"{c.symptom}"</p>
              <div className="mt-auto pt-4 border-t border-border/50">
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Rivelazione Lumen</p>
                <p className="text-sm text-foreground leading-relaxed">{c.revelation}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={500}>
        <p className="text-sm text-muted-foreground font-mono max-w-3xl">
          Queste sfide sembrano problemi separati. Lumen rivela che sono spesso facce dello stesso sistema culturale profondo.
        </p>
      </AnimatedSection>
    </div>
  </Wrapper>
  );
};

export default LumenChallenges;
