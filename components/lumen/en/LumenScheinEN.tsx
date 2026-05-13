import AnimatedSection from "@/components/AnimatedSection";

const levels = [
  {
    num: "1",
    label: "Artifacts",
    desc: "What you can see: physical spaces, visible rituals, internal jargon, symbols, stories told to newcomers. Everything an outside observer would notice when walking into the office.",
    examples: ["Meetings standing or seated?", "High five or handshake?", "Who speaks in meetings?"],
  },
  {
    num: "2",
    label: "Espoused values",
    desc: "What is said: company mission, framed values, guidelines, HR policies. What the organization claims to be and believe.",
    examples: ["\"We're flat and agile\"", "\"We put people first\"", "\"We encourage autonomy\""],
  },
  {
    num: "3",
    label: "Basic assumptions",
    desc: "What is taken for granted: unconscious beliefs, unwritten rules that no one ever decided but everyone follows. The real cultural DNA, often invisible even to founders.",
    examples: ["Is failure met with help or punishment?", "Is admitting an error seen as weakness?", "Is doing well enough, or must you also be seen?"],
  },
];

const LumenScheinEN = () => (
  <section className="py-24 bg-muted/40">
    <div className="container-wide max-w-5xl">
      <AnimatedSection>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Theoretical foundation</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Edgar Schein's model</h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
          Every organization has three cultural layers, stacked like concentric circles.
          Most measurement tools only see the first. Lumen goes all the way to the third.
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
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Methodological principle</p>
          <p className="text-foreground leading-relaxed">
            Traditional surveys reach the second level at most. People answer based on what they think
            is correct to say, not based on what they actually experience. Lumen bypasses this filter
            through narrative questions: when you tell a story, the truth emerges before you can censor it.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenScheinEN;
