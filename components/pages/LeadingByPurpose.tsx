"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Users,
  Compass,
  Layers,
  MessageCircle,
  CheckCircle2,
  Mic2,
  ChevronDown,
} from "lucide-react";

const phases = [
  {
    n: "01",
    label: "Kick-off",
    title: "Envisioning",
    icon: Compass,
    desc: "Il gruppo immagina il futuro dell'organizzazione e porta in superficie le sfide reali attraverso storie vere e momenti di ascolto profondo tra pari. Le sfide diventano principi: il gruppo identifica i comportamenti chiave e seleziona (attraverso dot voting) i 4 Principi che diventeranno i capitoli del percorso.",
    days: "2 giornate",
  },
  {
    n: "02",
    label: "Sessione 2",
    title: "Approfondimento",
    icon: Layers,
    desc: "Esercizi in team, storytelling e tecniche maieutiche per dare sostanza e concretezza ai primi due principi. Il gruppo non impara concetti nuovi: rende espliciti e condivisi quelli che già guidano il modo di lavorare.",
    days: "2 giornate",
  },
  {
    n: "03",
    label: "Sessione 3",
    title: "Implementazione",
    icon: CheckCircle2,
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
        {/* ── Hero — nero ── */}
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
                margin: "0 0 28px",
              }}
            >
              Leading by{" "}
              <em style={{ ...SERIF_ITALIC, color: ACCENT }}>Purpose</em>
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 20px)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.7)",
                maxWidth: 600,
                margin: "0 0 48px",
              }}
            >
              Un percorso di team coaching per il gruppo di leadership. Il perché di
              un'organizzazione non è un poster: è l'unica leva reale per ispirare
              le persone a crescere e dare il meglio, anche quando nessuno sta
              guardando.
            </p>

            {/* Counters — flex-wrap per mobile */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "24px 40px",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                paddingTop: 28,
              }}
            >
              {[
                { n: "6", label: "giornate totali" },
                { n: "3", label: "sessioni" },
                { n: "2", label: "facilitatori" },
                { n: "~2", label: "mesi" },
              ].map(({ n, label }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 56 }}>
                  <span style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 36, fontWeight: 700, color: ACCENT, lineHeight: 1 }}>{n}</span>
                  <span style={{ ...MONO, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Approccio — bianco ── */}
        <section style={{ padding: "clamp(56px, 9vh, 96px) clamp(24px, 6vw, 80px)", backgroundColor: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: 32 }}>
              Il nostro approccio
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                margin: "0 0 40px",
                maxWidth: 600,
              }}
            >
              Non è formazione. È costruzione di identità collettiva.
            </h2>

            {/* Two icon points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  Icon: Users,
                  title: "Il gruppo è protagonista",
                  body: "Il valore non sta nell'imparare concetti nuovi. Sta nel trovare come gruppo i principi che già guidano, o dovrebbero guidare, il modo di lavorare, e nel renderli espliciti, condivisi e agiti.",
                },
                {
                  Icon: MessageCircle,
                  title: "Un sistema operativo, non slogan",
                  body: "I valori e i principi diventano strumenti di guida culturale. Non poster da appendere alle pareti, ma un sistema che orienta decisioni, comportamenti e relazioni ogni giorno.",
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  style={{
                    padding: "28px 24px",
                    border: "1px solid #E8E8E8",
                    borderTop: `3px solid ${INK}`,
                  }}
                >
                  <Icon size={22} style={{ marginBottom: 16, color: INK }} />
                  <strong style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 16, fontWeight: 700, display: "block", marginBottom: 10 }}>
                    {title}
                  </strong>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#555" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fasi — giallo ── */}
        <section style={{ padding: "clamp(56px, 9vh, 96px) clamp(24px, 6vw, 80px)", backgroundColor: ACCENT }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", display: "block", marginBottom: 32 }}>
              La struttura del percorso
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {phases.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.n} style={{ backgroundColor: "#fff", padding: "28px 24px", borderTop: `3px solid ${INK}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                      <Icon size={20} style={{ color: INK }} />
                      <span style={{ ...MONO, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaa" }}>{p.days}</span>
                    </div>
                    <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.1em", color: "#888", display: "block", marginBottom: 8 }}>{p.n} · {p.label}</span>
                    <strong style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 18, fontWeight: 700, display: "block", marginBottom: 10 }}>{p.title}</strong>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: "#555" }}>{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Discovery — scuro ── */}
        <section style={{ padding: "clamp(56px, 9vh, 96px) clamp(24px, 6vw, 80px)", backgroundColor: "#1a1a1a", color: "#fff" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24 }}>
            <Mic2 size={28} style={{ color: ACCENT }} />
            <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
              Prima del kick-off
            </span>
            <p style={{ ...SERIF_ITALIC, fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", margin: 0 }}>
              Conduciamo interviste individuali con AD e HR per raccogliere visione,
              tensioni e aspettative, e progettare un percorso che parta dalla realtà
              della vostra organizzazione, non da un template.
            </p>
          </div>
        </section>

        {/* ── FAQ — grigio chiaro ── */}
        <section style={{ padding: "clamp(56px, 9vh, 96px) clamp(24px, 6vw, 80px)", backgroundColor: "#F7F7F5" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <span style={{ ...MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", display: "block", marginBottom: 32 }}>
              Domande frequenti
            </span>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderTop: "1px solid #E0E0E0", padding: "24px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 10 }}>
                    <p style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 600, fontSize: 15, margin: 0 }}>{faq.q}</p>
                    <ChevronDown size={16} style={{ color: "#aaa", flexShrink: 0, marginTop: 2 }} />
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: "#555", margin: 0 }}>{faq.a}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E0E0E0" }} />
            </div>
          </div>
        </section>

        {/* ── CTA — nero ── */}
        <section style={{ backgroundColor: INK, padding: "clamp(64px, 10vh, 100px) clamp(24px, 6vw, 80px)", textAlign: "center" }}>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 20px" }}>
              Vuoi portare questo percorso nel vostro gruppo di leadership?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", margin: "0 0 36px" }}>
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
