"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const phases = [
  {
    n: "01",
    label: "Kick-off",
    title: "Envisioning",
    desc: "Il gruppo immagina il futuro dell'organizzazione e porta in superficie le sfide reali attraverso storie vere e momenti di ascolto profondo tra pari. Nella seconda giornata le sfide diventano principi: il gruppo identifica i comportamenti chiave e seleziona (attraverso dot voting) i 4 Principi che diventeranno i capitoli del percorso.",
    days: "2 giornate",
  },
  {
    n: "02",
    label: "Sessione 2",
    title: "Approfondimento",
    desc: "Esercizi in team, storytelling e tecniche maieutiche per dare sostanza e concretezza ai primi due principi. Il gruppo non impara concetti nuovi: rende espliciti e condivisi quelli che già guidano il modo di lavorare.",
    days: "2 giornate",
  },
  {
    n: "03",
    label: "Sessione 3",
    title: "Implementazione",
    desc: "Il gruppo codifica i principi in comportamenti osservabili e costruisce la strategia per estenderli all'intera organizzazione. Si gettano le basi per un percorso più operativo e diffuso.",
    days: "2 giornate",
  },
];

const faqs = [
  {
    q: "A chi è rivolto Leading by Purpose?",
    a: "Al gruppo di leadership di un'organizzazione: AD, riporti diretti e HR. Funziona meglio con team tra 6 e 16 persone che si trovano a gestire una fase di cambiamento, crescita o riorganizzazione.",
  },
  {
    q: "Quanto dura il percorso?",
    a: "6 giornate distribuite in circa due mesi, organizzate in 3 sessioni da 2 giorni ciascuna. Prima del kick-off sono previste interviste di discovery individuali con AD e HR.",
  },
  {
    q: "In cosa è diverso dalla formazione tradizionale?",
    a: "Leading by Purpose non trasferisce contenuti dall'esterno. Il gruppo è protagonista attivo: non riceve valori, li costruisce. I principi emergono dalla voce del gruppo, facilitati dal processo.",
  },
  {
    q: "Dove si svolge?",
    a: "In sede o presso una location esterna a scelta del cliente. I costi di trasferta fuori dalla sede concordata sono esclusi dall'investimento base.",
  },
];

const ACCENT = "#E6FF3D";
const INK = "#111";
const MONO: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" };
const SERIF_ITALIC: React.CSSProperties = {
  fontFamily: "'Instrument Serif', Georgia, serif",
  fontStyle: "italic",
  fontWeight: 400,
};

const LeadingByPurposePage = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: INK }}>
      <SEO
        title="Leading by Purpose — Percorso di Leadership per il Top Management"
        description="Un percorso di team coaching per il gruppo di leadership. Aiutiamo il top management a costruire una cultura manageriale riconoscibile, capace di ispirare e trattenere i talenti."
        canonical="https://venturoconsulting.it/leading-by-purpose"
        lang="it"
      />
      <Header />

      <main>
        {/* Hero */}
        <section
          style={{
            backgroundColor: INK,
            color: "#fff",
            padding: "clamp(100px, 14vh, 160px) clamp(24px, 6vw, 80px) clamp(64px, 10vh, 100px)",
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: ACCENT, display: "block", marginBottom: 20 }}>
              Percorso · Top management · Team coaching
            </span>
            <h1
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "clamp(40px, 6vw, 80px)",
                fontWeight: 700,
                lineHeight: 1.03,
                letterSpacing: "-0.03em",
                margin: "0 0 32px",
              }}
            >
              Leading by{" "}
              <em style={{ ...SERIF_ITALIC, color: ACCENT }}>Purpose</em>
            </h1>
            <p
              style={{
                fontSize: "clamp(17px, 1.8vw, 22px)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.7)",
                maxWidth: 640,
                margin: "0 0 48px",
              }}
            >
              Un percorso di team coaching per il gruppo di leadership. Il perché di
              un'organizzazione non è un poster: è l'unica leva reale per ispirare
              le persone a crescere e dare il meglio, anche quando nessuno sta
              guardando.
            </p>
            <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
              {[
                { n: "6", label: "giornate totali" },
                { n: "3", label: "sessioni" },
                { n: "2", label: "facilitatori" },
                { n: "~2", label: "mesi" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <span style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 36, fontWeight: 700, color: ACCENT, display: "block", lineHeight: 1 }}>{n}</span>
                  <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: 6, display: "block" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What it is */}
        <section style={{ padding: "clamp(64px, 10vh, 100px) clamp(24px, 6vw, 80px)", backgroundColor: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }} className="grid-single-col-mobile">
            <div>
              <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: 20 }}>
                Il nostro approccio
              </span>
              <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 24px" }}>
                Non è formazione. È costruzione di identità collettiva.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "#444", margin: "0 0 20px" }}>
                In un gruppo piccolo e ad alto impatto come il vostro, il valore non sta nell'imparare concetti nuovi. Sta nel trovare come gruppo i principi che già guidano, o dovrebbero guidare, il modo di lavorare, e nel renderli espliciti, condivisi e agiti.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "#444", margin: 0 }}>
                I valori e i principi diventano strumenti di guida culturale. Non slogan da appendere alle pareti, ma un sistema operativo che orienta decisioni, comportamenti e relazioni ogni giorno.
              </p>
            </div>
          </div>
        </section>

        {/* Three phases */}
        <section style={{ padding: "clamp(64px, 10vh, 100px) clamp(24px, 6vw, 80px)", backgroundColor: "#F7F7F5" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: 40 }}>
              La struttura del percorso
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {phases.map((p) => (
                <div key={p.n} style={{ backgroundColor: "#fff", padding: "32px 28px", borderTop: `3px solid ${INK}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.12em", color: "#888" }}>{p.n} · {p.label}</span>
                    <span style={{ ...MONO, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bbb" }}>{p.days}</span>
                  </div>
                  <strong style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 18, fontWeight: 700, display: "block", marginBottom: 12 }}>{p.title}</strong>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#666" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery interviews */}
        <section style={{ padding: "clamp(64px, 10vh, 100px) clamp(24px, 6vw, 80px)", backgroundColor: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <blockquote style={{ borderLeft: `3px solid ${INK}`, paddingLeft: 28, margin: "0 0 48px" }}>
              <p style={{ ...SERIF_ITALIC, fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.6, color: "#222", margin: 0 }}>
                Prima del kick-off conduciamo interviste individuali con AD e HR per raccogliere visione, tensioni e aspettative, e progettare un percorso che parta dalla realtà della vostra organizzazione, non da un template.
              </p>
            </blockquote>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "clamp(64px, 10vh, 100px) clamp(24px, 6vw, 80px)", backgroundColor: "#F7F7F5" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: 40 }}>
              Domande frequenti
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderTop: "1px solid #E0E0E0", padding: "28px 0" }}>
                  <p style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 600, fontSize: 16, margin: "0 0 10px" }}>{faq.q}</p>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", margin: 0 }}>{faq.a}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E0E0E0" }} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: INK, padding: "clamp(64px, 10vh, 100px) clamp(24px, 6vw, 80px)", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 24px" }}>
              Vuoi portare questo percorso nel vostro gruppo di leadership?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: "0 0 40px" }}>
              Raccontaci il contesto. Capiamo insieme se Leading by Purpose è lo strumento giusto per voi.
            </p>
            <a
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: ACCENT,
                color: INK,
                padding: "16px 32px",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
            >
              Parliamone
              <span style={{ fontSize: 18 }}>→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeadingByPurposePage;
