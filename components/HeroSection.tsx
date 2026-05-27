"use client";

const ACCENT = "#E6FF3D";
const INK = "#111111";
const MONO: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
};
const SERIF_ITALIC: React.CSSProperties = {
  fontFamily: "'Instrument Serif', Georgia, serif",
  fontStyle: "italic",
  fontWeight: 400,
};

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
      {/* H1 */}
      <h1
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: 0,
          lineHeight: 1.03,
          letterSpacing: "-0.03em",
          fontWeight: 700,
          color: INK,
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
        }}
      >
        {/* Line 1 */}
        <span style={{ display: "block", fontSize: "clamp(36px, 6.5vw, 88px)", marginBottom: "0.25em" }}>
          Ogni organizzazione
        </span>

        {/* Line 2 — "ha un perché." with annotation */}
        <span
          style={{
            display: "block",
            fontSize: "clamp(36px, 6.5vw, 88px)",
            position: "relative",
          }}
        >
          ha un{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            <em style={SERIF_ITALIC}>perché</em>

            {/* Dashed arc annotation — xl+ only */}
            <svg
              aria-hidden="true"
              className="hidden xl:block"
              style={{
                position: "absolute",
                top: "-14px",
                left: "105%",
                width: 220,
                height: 90,
                overflow: "visible",
                pointerEvents: "none",
              }}
              viewBox="0 0 220 90"
              fill="none"
            >
              <path
                d="M 0 30 C 40 -10 130 -5 180 35"
                stroke="#888"
                strokeWidth="0.8"
                strokeDasharray="3 4"
                fill="none"
              />
              <circle cx="180" cy="35" r="1.5" fill="#888" />
              <text x="188" y="22" style={{ ...SERIF_ITALIC, fontSize: 12, fill: "#666" }}>
                Le persone non acquistano
              </text>
              <text x="188" y="37" style={{ ...SERIF_ITALIC, fontSize: 12, fill: "#666" }}>
                ciò che fai, acquistano
              </text>
              <text x="188" y="52" style={{ ...SERIF_ITALIC, fontSize: 12, fill: "#666" }}>
                il perché lo fai.
              </text>
            </svg>
          </span>
          .
        </span>

        {/* Line 3 — right-aligned */}
        <span
          style={{
            display: "block",
            fontSize: "clamp(36px, 6.5vw, 88px)",
            textAlign: "right",
          }}
        >
          Noi lo rendiamo
        </span>

        {/* Line 4 — "visibile." with yellow fill, right-aligned */}
        <span style={{ display: "block", textAlign: "right" }}>
          <span
            style={{
              fontSize: "clamp(36px, 6.5vw, 88px)",
              backgroundColor: ACCENT,
              color: INK,
              padding: "0.02em 0.12em",
              display: "inline-block",
              lineHeight: 1.05,
            }}
          >
            visibile.
          </span>
        </span>
      </h1>

      {/* Footer */}
      <footer style={{ marginTop: "clamp(32px, 5vh, 64px)" }}>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "#555", maxWidth: 420 }}>
          Interveniamo quando l'identità reale di un'organizzazione non emerge
          nei momenti che contano: cambiamento, onboarding, comunicazione interna.
        </p>
      </footer>
    </section>
  );
};

export default HeroSection;
