import AnimatedSection from "@/components/AnimatedSection";

const consequences = [
  { n: "01", text: "assumi le persone sbagliate" },
  { n: "02", text: "perdi quelle giuste" },
  { n: "03", text: "prendi decisioni incoerenti" },
  { n: "04", text: "e ogni iniziativa HR diventa cosmetica" },
];

const levels = [
  {
    title: "Ciò che si vede",
    desc: "Come l'organizzazione si racconta e si comporta: comunicazione, rituali, segnali visibili",
  },
  {
    title: "Ciò che si fa",
    desc: "I pattern che si ripetono ogni giorno, anche senza essere stati decisi",
  },
  {
    title: "Ciò che si dà per scontato",
    desc: "Le regole non scritte che tutti seguono, ma che nessuno ha mai esplicitato",
  },
];

const WhyVenturoSection = () => {
  return (
    <>
      {/* Light top block */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide px-6 md:px-8">
          <AnimatedSection>
            <h2 className="text-section font-bold text-foreground mb-4">
              Perché esiste Venturo
            </h2>
            <p className="text-body text-[#666] mb-12 md:max-w-[60%]">
              Quando non è chiaro chi sei come organizzazione, succede questo:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {consequences.map((c) => (
                <div
                  key={c.n}
                  className="border border-[#E8E8E8] rounded-lg p-6"
                >
                  <span className="font-mono text-2xl font-bold text-[#111] block mb-3">
                    {c.n}
                  </span>
                  <p className="text-foreground font-medium text-base">{c.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dark bottom block */}
      <section className="py-16 md:py-20 bg-[#111]">
        <div className="container-wide px-6 md:px-8">
          <AnimatedSection>
            <p className="text-body text-[rgba(255,255,255,0.55)] mb-10">
              Per questo lavoriamo su tre livelli:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.08)]">
              {levels.map((l) => (
                <div
                  key={l.title}
                  className="bg-[#111] p-6 border-t-2 border-t-[#E6FF3D]"
                >
                  <span className="font-bold text-xl text-white block mb-2">
                    {l.title}
                  </span>
                  <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
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

export default WhyVenturoSection;
