"use client";

import Link from "next/link";

const ACCENT = "#E6FF3D";
const INK = "#111111";
const SERIF_ITALIC: React.CSSProperties = {
  fontFamily: "'Instrument Serif', Georgia, serif",
  fontStyle: "italic",
  fontWeight: 400,
};

const LINE: React.CSSProperties = {
  display: "block",
  fontSize: "clamp(32px, 5.4vw, 76px)",
};

/**
 * Hero della home. Parte dal sintomo che il cliente sa nominare (le persone
 * che si allontanano, cioe l'engagement che cala) e lo sposta sulla causa:
 * una storia in cui non si riconoscono.
 */
const HeroSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "0 clamp(24px, 6vw, 80px)",
        paddingTop: 88,
        paddingBottom: 48,
      }}
    >
      <h1
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: 0,
          lineHeight: 1.06,
          letterSpacing: "-0.03em",
          fontWeight: 700,
          color: INK,
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
        }}
      >
        <span style={LINE}>Le persone non si allontanano</span>
        <span style={{ ...LINE, marginBottom: "0.35em" }}>dall&apos;azienda.</span>

        <span style={{ ...LINE, textAlign: "right" }}>
          Si allontanano da una <em style={SERIF_ITALIC}>storia</em>
        </span>
        <span style={{ display: "block", textAlign: "right" }}>
          <span style={{ fontSize: LINE.fontSize }}>in cui </span>
          <span
            style={{
              fontSize: LINE.fontSize,
              backgroundColor: ACCENT,
              color: INK,
              padding: "0.02em 0.12em",
              display: "inline-block",
              lineHeight: 1.05,
            }}
          >
            non si riconoscono.
          </span>
        </span>
      </h1>

      <footer
        style={{
          marginTop: "clamp(32px, 5vh, 64px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "#555" }}>
            Quando l&apos;engagement cala, il problema raramente è nei benefit o nella
            comunicazione. È in una cultura che l&apos;organizzazione vive ogni giorno
            ma non riesce a vedere. Noi la facciamo emergere.
          </p>
          <p style={{ ...SERIF_ITALIC, margin: "16px 0 0", fontSize: 20, color: INK }}>
            L&apos;invisibile diventa strategia.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: INK,
              color: "#fff",
              padding: "14px 28px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              letterSpacing: "0.02em",
              textDecoration: "none",
            }}
          >
            Parliamone <span style={{ fontSize: 16 }}>→</span>
          </a>
          <Link
            href="/lumen"
            style={{
              color: INK,
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              textDecoration: "underline",
              textUnderlineOffset: 5,
            }}
          >
            Scopri Lumen
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;
