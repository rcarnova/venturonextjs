import AnimatedSection from "@/components/AnimatedSection";

/**
 * Sintomo e causa. Il blocco chiaro accoglie il problema con le parole del
 * cliente (l'engagement e il punteggio della survey); il blocco scuro lo
 * sposta sulla cultura che l'organizzazione non vede.
 */

const signals = [
  { n: "01", text: "Il punteggio medio nasconde due aziende sotto lo stesso nome: chi sta bene e chi no." },
  { n: "02", text: "Il clima cambia da team a team, e dipende da chi gestisce le persone ogni giorno, non dai canali di comunicazione." },
  { n: "03", text: "Nei commenti aperti la parola che torna non è motivazione. È rispetto." },
  { n: "04", text: "Metà delle persone lavora su turni, in strada o in negozio, e nessun canale aziendale le raggiunge davvero." },
];

/** Gli stessi tre livelli della pagina Lumen (Schein), con le stesse parole. */
const levels = [
  {
    title: "Ciò che si vede",
    desc: "Spazi, rituali, riunioni, cosa si celebra. Lo nota chiunque, anche da fuori.",
  },
  {
    title: "Ciò che si dice",
    desc: "Valori, priorità, promesse fatte a persone e clienti. È il livello che le survey misurano.",
  },
  {
    title: "Ciò che si dà per scontato",
    desc: "Le regole non scritte che nessuno ha deciso ma tutti seguono. Quasi nessuno le vede. Qui nasce il distacco.",
  },
];

const WhyVenturoSection = () => {
  return (
    <>
      {/* Il sintomo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide px-6 md:px-8">
          <AnimatedSection>
            <p className="font-mono text-eyebrow text-[#666] mb-4">Il sintomo</p>
            <h2 className="text-section font-bold text-foreground mb-6 md:max-w-[75%]">
              Conoscete il punteggio. Non conoscete la storia.
            </h2>
            <p className="text-body text-[#555] mb-4 md:max-w-[60%]">
              La survey di engagement arriva, i numeri scendono, si lancia un piano
              d&apos;azione. Più benefit, più comunicazione, un evento. L&apos;anno dopo il
              punteggio è ancora lì.
            </p>
            <p className="text-body text-[#555] mb-12 md:max-w-[60%]">
              Non perché le azioni fossero sbagliate. Perché partivano dal numero, non da
              ciò che lo produce.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {signals.map((s) => (
                <div key={s.n} className="border border-[#E8E8E8] rounded-lg p-6">
                  <span className="font-mono text-2xl font-bold text-[#111] block mb-3">{s.n}</span>
                  <p className="text-foreground font-medium text-base leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-body font-medium text-foreground mt-10 md:max-w-[60%]">
              Se vi riconoscete in uno di questi, il problema non è l&apos;engagement. È
              quello che c&apos;è sotto.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* La causa */}
      <section className="py-16 md:py-24 bg-[#111]">
        <div className="container-wide px-6 md:px-8">
          <AnimatedSection>
            <p className="font-mono text-eyebrow text-[#E6FF3D] mb-4">La causa</p>
            <h2 className="text-section font-bold text-white mb-6 md:max-w-[80%]">
              Le organizzazioni non possono crescere su ciò che non vedono di sé stesse.
            </h2>
            <p className="text-body text-[rgba(255,255,255,0.65)] mb-12 md:max-w-[62%]">
              La cultura è come l&apos;acqua per chi ci nuota dentro: invisibile proprio
              perché onnipresente. Le persone ne seguono le regole ogni giorno, ma
              faticano a nominarle. È lì che l&apos;engagement si decide, soprattutto nel
              rapporto con chi gestisce le persone ogni giorno. Il capo diretto conta più
              di qualsiasi canale.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.08)]">
              {levels.map((l, i) => (
                <div
                  key={l.title}
                  className={`bg-[#111] p-6 border-t-2 ${i === 2 ? "border-t-[#E6FF3D]" : "border-t-[rgba(255,255,255,0.25)]"}`}
                >
                  <span className="font-bold text-xl text-white block mb-2">{l.title}</span>
                  <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-body text-white mt-10 md:max-w-[62%]">
              Le survey arrivano al secondo livello. Il distacco nasce nello scarto tra il
              secondo e il terzo: tra ciò che l&apos;organizzazione promette e ciò che le
              persone vivono.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default WhyVenturoSection;
