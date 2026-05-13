import AnimatedSection from "@/components/AnimatedSection";

const consequences = [
  { n: "01", text: "you hire the wrong people" },
  { n: "02", text: "you lose the right ones" },
  { n: "03", text: "you make inconsistent decisions" },
  { n: "04", text: "and every HR initiative becomes cosmetic" },
];

const levels = [
  {
    title: "What is seen",
    desc: "How the organization tells its story and behaves: communication, rituals, visible signals",
  },
  {
    title: "What is done",
    desc: "The patterns that repeat every day, even without being decided",
  },
  {
    title: "What is taken for granted",
    desc: "The unwritten rules everyone follows, but no one has ever made explicit",
  },
];

const WhyVenturoSectionEN = () => {
  return (
    <>
      {/* Dark top block */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="container-wide px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-section font-bold text-white mb-4">
              Why Venturo exists
            </h2>
            <p className="text-body text-[#888888] mb-12 md:max-w-[60%]">
              When it's not clear who you are as an organization, this is what happens:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {consequences.map((c) => (
                <div
                  key={c.n}
                  className="bg-[#111111] border border-[#222222] rounded-lg p-6"
                >
                  <span className="font-mono text-2xl font-bold text-[#E1FF00] block mb-3">
                    {c.n}
                  </span>
                  <p className="text-white font-medium text-base">{c.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Light bottom block */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide px-6 md:px-8">
          <AnimatedSection>
            <p className="text-body text-foreground mb-10">
              That's why we work on three levels:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {levels.map((l) => (
                <div
                  key={l.title}
                  className="bg-background border border-[#EEEEEE] rounded-lg p-6 border-t-[3px] border-t-[#E1FF00] transition-shadow duration-300 hover:shadow-[0_0_20px_-4px_rgba(225,255,0,0.15)]"
                >
                  <span className="font-bold text-xl text-foreground block mb-2">
                    {l.title}
                  </span>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default WhyVenturoSectionEN;
