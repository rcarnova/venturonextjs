import AnimatedSection from "@/components/AnimatedSection";

const challenges = [
  {
    title: "Talent that leaves",
    symptom: "\"Talent leaves after 18 months\"",
    revelation: "A cultural readability problem - internal culture doesn't match the one perceived from outside",
  },
  {
    title: "Delegation that doesn't work",
    symptom: "\"Managers don't really delegate\"",
    revelation: "A cultural trust problem - if mistakes aren't allowed, no one takes responsibility",
  },
  {
    title: "Innovation on paper",
    symptom: "\"Ideas don't translate into action\"",
    revelation: "The culture rewards those who don't fail more than those who try new things",
  },
  {
    title: "Teams that don't understand each other",
    symptom: "\"Communication problems between functions\"",
    revelation: "Different cultures coexisting without a shared language",
  },
  {
    title: "Inside/outside gap",
    symptom: "\"Promises to clients don't match internal reality\"",
    revelation: "External identity built without starting from the internal one",
  },
  {
    title: "Hybrid without rules",
    symptom: "\"Every manager applies different rules\"",
    revelation: "Lack of shared definition of what smart working means",
  },
];

const LumenChallengesEN = ({ embedded }: { embedded?: boolean }) => {
  const Wrapper = embedded ? "div" : "section";
  return (
  <Wrapper className={embedded ? "pb-8" : "py-24 bg-background"}>
    <div className={embedded ? "" : "container-wide max-w-5xl"}>
      {!embedded && (
        <AnimatedSection>
          <p className="text-eyebrow font-mono text-primary mb-4">Common patterns</p>
          <h2 className="text-section mb-4">The challenges Lumen addresses</h2>
        </AnimatedSection>
      )}
      <AnimatedSection>
        <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
          Lumen enters organizations through different doors - employer branding, cultural transformation,
          onboarding, internal communication. But whatever the entry point, we always work on the same deep
          dynamics: making the invisible visible, naming what goes unsaid, aligning what is contradictory.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {challenges.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 80}>
            <div className="border border-border rounded-xl p-6 h-full flex flex-col gap-4 hover:border-primary/30 transition-colors group">
              <h3 className="font-bold text-base">{c.title}</h3>
              <p className="text-sm text-muted-foreground italic">{c.symptom}</p>
              <div className="border-t border-border/50 pt-3 mt-auto">
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Lumen revelation</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.revelation}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={500}>
        <p className="text-sm text-muted-foreground font-mono">
          These challenges seem like separate problems. Lumen reveals they are often faces of the same deep cultural system.
        </p>
      </AnimatedSection>
    </div>
  </Wrapper>
  );
};

export default LumenChallengesEN;
