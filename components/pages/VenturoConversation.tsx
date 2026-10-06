import Header from "@/components/Header";
import VenturoConversationLogo from "@/components/VenturoConversationLogo";
import { REGISTRATION_URL, CALENDAR_URL, EPISODE } from "@/lib/venturo-conversation";
import Footer from "@/components/Footer";

const INK = "#000000";
const TEXT = "#333333";
const MUTED = "#666666";
const SURFACE = "#f4f4f4";
const ACCENT = "#EC4899";
// Su bianco #EC4899 da 3.5:1 e non passa AA a 12px: per il testo su fondo chiaro serve piu scuro (6.0:1).
const ACCENT_ON_LIGHT = "#BE185D";

const details = [
  { label: "SI PARTE", value: EPISODE.dateLabel },
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

/** Freccia di link esterno: segnala che si apre un'altra scheda. */
const ExternalArrow = () => (
  <span aria-hidden="true" style={{ fontSize: "0.9em" }}>
    &#8599;
  </span>
);

const SubscribeButton = ({ className = "" }: { className?: string }) => (
  <a
    href={REGISTRATION_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Iscriviti a: ${EPISODE.title} (si apre in una nuova scheda)`}
    className={`inline-flex items-center gap-2 font-mono text-eyebrow px-8 py-4 transition-opacity hover:opacity-85 ${className}`}
    style={{ backgroundColor: ACCENT, color: INK }}
  >
    ISCRIVITI
    <ExternalArrow />
  </a>
);

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

              {/* Iscrizione disponibile subito, senza dover scorrere tutta la pagina */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <SubscribeButton />
                <span style={{ color: MUTED, fontSize: 14 }}>
                  Prossima: <strong style={{ color: TEXT }}>{EPISODE.dateLabel}</strong>
                </span>
              </div>
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

        {/* ───────────── Prossima conversazione ───────────── */}
        <section style={{ borderTop: `1px solid ${INK}` }}>
          <div className="container-wide py-16 md:py-24">
            <p className="font-mono text-eyebrow mb-6" style={{ color: ACCENT_ON_LIGHT }}>
              PROSSIMA CONVERSAZIONE
            </p>

            {/* La grafica porta al modulo di iscrizione: e l'elemento piu cliccato a istinto */}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Iscriviti a: ${EPISODE.title} (si apre in una nuova scheda)`}
              className="block border border-black transition-opacity hover:opacity-90"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={EPISODE.image.src}
                alt=""
                width={EPISODE.image.width}
                height={EPISODE.image.height}
                className="block w-full h-auto"
              />
            </a>

            {/*
              Gli stessi dati della grafica, come testo vero: dentro l'immagine
              su telefono scenderebbero a 5px e sarebbero illeggibili.
            */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
              <div className="lg:col-span-7">
                <h3
                  className="font-bold"
                  style={{
                    color: INK,
                    fontSize: "clamp(22px, 2.6vw, 30px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {EPISODE.title}
                </h3>
                <p className="font-mono text-eyebrow mt-4" style={{ color: ACCENT_ON_LIGHT }}>
                  {EPISODE.dateLabel} · {EPISODE.duration} · {EPISODE.place}
                </p>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <dl>
                  <div style={{ borderTop: `1px solid ${INK}` }} className="py-4">
                    <dt className="font-mono text-eyebrow mb-1" style={{ color: MUTED }}>
                      NE PARLIAMO CON
                    </dt>
                    <dd style={{ color: TEXT, fontSize: 15, lineHeight: 1.5 }}>
                      <strong style={{ color: INK }}>{EPISODE.guest.name}</strong>
                      <br />
                      {EPISODE.guest.role}
                    </dd>
                  </div>
                  <div style={{ borderTop: "1px solid #dcdcdc" }} className="py-4">
                    <dt className="font-mono text-eyebrow mb-1" style={{ color: MUTED }}>
                      HOST
                    </dt>
                    <dd style={{ color: TEXT, fontSize: 15, lineHeight: 1.5 }}>
                      {EPISODE.hosts.map((h) => h.name).join(", ")}
                      <br />
                      Venturo
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <SubscribeButton />
              <a
                href={CALENDAR_URL}
                download
                className="font-mono text-eyebrow underline underline-offset-4 transition-colors hover:text-black"
                style={{ color: MUTED }}
              >
                AGGIUNGI AL CALENDARIO
              </a>
              <a
                href="mailto:info@venturoconsulting.it?subject=Venturo%20Conversation"
                className="font-mono transition-colors hover:text-black"
                style={{ color: MUTED, fontSize: 14 }}
              >
                info@venturoconsulting.it
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VenturoConversation;
