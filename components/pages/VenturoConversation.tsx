import Header from "@/components/Header";
import VenturoConversationLogo from "@/components/VenturoConversationLogo";
import Footer from "@/components/Footer";

const INK = "#000000";
const TEXT = "#333333";
const MUTED = "#666666";
const SURFACE = "#f4f4f4";
const ACCENT = "#EC4899";
// Su bianco #EC4899 da 3.5:1 e non passa AA a 12px: per il testo su fondo chiaro serve piu scuro (6.0:1).
const ACCENT_ON_LIGHT = "#BE185D";
// Su fondo nero #666666 darebbe 3.7:1 e non passerebbe AA: qui serve un grigio piu chiaro.
const MUTED_ON_DARK = "#999999";

const details = [
  { label: "SI PARTE", value: "Ottobre 2026" },
  { label: "RITMO", value: "Circa ogni due settimane" },
  { label: "DURATA", value: "45-50 minuti" },
  { label: "DOVE", value: "Online" },
];

const segments = [
  {
    amount: "5",
    unit: "MIN",
    title: "Apertura",
    desc: "La domanda e perché vale la pena discuterne.",
  },
  {
    amount: "30-40",
    unit: "MIN",
    title: "Tavola rotonda",
    desc: "Un confronto aperto, a cui partecipa anche chi ascolta.",
  },
  {
    amount: "5",
    unit: "MIN",
    title: "Conversation Starter",
    desc: "Una domanda da riportare nella propria organizzazione.",
  },
];

const VenturoConversation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* ───────────── Hero ───────────── */}
        <section className="container-wide pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Colonna sinistra: 7 colonne */}
            <div className="lg:col-span-7">
              <VenturoConversationLogo
                wrapperClassName="mb-10 md:mb-14"
                imgClassName="w-full max-w-[420px] h-auto"
                fallbackSize={44}
              />
              <h1
                className="font-bold"
                style={{
                  color: INK,
                  fontSize: "clamp(32px, 5vw, 56px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Conversazioni online su cultura organizzativa, identità, engagement.
              </h1>
              <p
                className="mt-6"
                style={{
                  color: MUTED,
                  fontSize: "clamp(22px, 3.2vw, 36px)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                }}
              >
                Una domanda forte, più punti di vista, nessuna risposta già scritta.
              </p>
            </div>

            {/* Colonna destra: 4 colonne (9-12), allineata in basso */}
            <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <dl style={{ borderTop: `1px solid ${INK}` }}>
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-baseline justify-between gap-4 py-4"
                    style={{ borderBottom: "1px solid #dcdcdc" }}
                  >
                    <dt
                      className="font-mono text-eyebrow shrink-0"
                      style={{ color: ACCENT_ON_LIGHT }}
                    >
                      {d.label}
                    </dt>
                    <dd
                      className="text-right"
                      style={{ color: TEXT, fontSize: 15, lineHeight: 1.5 }}
                    >
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ───────────── Il format ───────────── */}
        <section style={{ borderTop: `1px solid ${INK}` }}>
          <div className="container-wide pt-16 pb-16 md:pt-24 md:pb-24">
            <p className="font-mono text-eyebrow mb-6" style={{ color: ACCENT_ON_LIGHT }}>
              IL FORMAT
            </p>
            <h2
              className="font-bold mb-8"
              style={{
                color: INK,
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Non è un webinar.
            </h2>
            <p
              className="max-w-[720px]"
              style={{ color: TEXT, fontSize: 17, lineHeight: 1.65 }}
            >
              Ogni puntata nasce da una domanda che mette in tensione due forze con cui
              le organizzazioni devono convivere. Venturo la apre e facilita il confronto
              tra gli ospiti, lasciando spazio a chi partecipa. L&apos;obiettivo non è
              arrivare a una risposta, ma far emergere quello che di solito resta
              invisibile.
            </p>

            {/* Tre riquadri */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-12 md:mt-16 border border-black">
              {segments.map((s, i) => (
                <div
                  key={s.title}
                  /* separatore: orizzontale su mobile, verticale da md in su */
                  className={`p-8 md:p-10 ${
                    i > 0 ? "border-t border-black md:border-t-0 md:border-l md:border-l-black" : ""
                  }`}
                  style={{ backgroundColor: i === 1 ? SURFACE : "transparent" }}
                >
                  <p className="flex items-baseline gap-2 mb-6">
                    <span
                      className="font-bold"
                      style={{
                        color: INK,
                        fontSize: "clamp(36px, 4.5vw, 52px)",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {s.amount}
                    </span>
                    <span className="font-mono text-eyebrow" style={{ color: MUTED }}>
                      {s.unit}
                    </span>
                  </p>
                  <h3
                    className="font-semibold mb-3"
                    style={{ color: INK, fontSize: 20, lineHeight: 1.3 }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Contatto ───────────── */}
        <section style={{ backgroundColor: INK }}>
          <div className="container-wide py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 lg:items-end">
              <div className="lg:col-span-7">
                <p className="font-mono text-eyebrow mb-6" style={{ color: ACCENT }}>
                  RESTA AGGIORNATO
                </p>
                <h2
                  className="font-bold text-white"
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  La prima conversazione arriva a ottobre.
                </h2>
                <p
                  className="mt-6 max-w-[560px]"
                  style={{ color: MUTED_ON_DARK, fontSize: 17, lineHeight: 1.65 }}
                >
                  Vuoi sapere quando si parte, o hai una domanda che vorresti vedere al
                  centro di una conversazione? Scrivici.
                </p>
              </div>

              <div className="lg:col-span-4 lg:col-start-9 flex flex-col items-start lg:items-end gap-5">
                <a
                  href="mailto:info@venturoconsulting.it"
                  className="font-mono transition-colors hover:text-white"
                  style={{ color: MUTED_ON_DARK, fontSize: 14 }}
                >
                  info@venturoconsulting.it
                </a>
                <a
                  href="mailto:info@venturoconsulting.it?subject=Venturo%20Conversation"
                  className="inline-block font-mono text-eyebrow px-8 py-4 transition-opacity hover:opacity-85"
                  style={{ backgroundColor: ACCENT, color: INK }}
                >
                  SCRIVICI
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VenturoConversation;
