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
  fontSize: "clamp(44px, 7.6vw, 112px)",
};

/**
 * Hero della home. Parte dal tema che il cliente sa nominare (l'engagement)
 * e lo sposta sulla causa: un'identita che l'organizzazione non vede.
 */
const HeroSection = () => {
  return (
    <section
      /* A tutta altezza solo da tablet in su: su telefono lasciava un vuoto che
         spingeva il pulsante Parliamone in fondo allo schermo. */
      className="md:min-h-screen"
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        paddingTop: 88,
        paddingBottom: 48,
      }}
    >
      {/* Stessa griglia del menu (container-wide): titolo e pulsanti allineati al logo. */}
      <div className="container-wide w-full flex flex-col md:flex-1">
      <h1
        className="md:flex-1 pt-16 md:pt-0"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: 0,
          lineHeight: 1.06,
          rowGap: "0.08em",
          letterSpacing: "-0.03em",
          fontWeight: 700,
          color: INK,
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
        }}
      >
        <span style={LINE}>Non c&apos;è engagement</span>
        <span style={{ display: "block", textAlign: "right" }}>
          <span style={{ fontSize: LINE.fontSize }}>senza </span>
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
            identità.
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
            className="inline-block py-3"
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
      </div>
    </section>
  );
};

export default HeroSection;
