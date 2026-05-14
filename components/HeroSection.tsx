"use client";

const ACCENT = "#E6FF3D";
const INK = "#111111";
const MUTED = "#888";

const MONO: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
};
const SERIF_ITALIC: React.CSSProperties = {
  fontFamily: "'Instrument Serif', Georgia, serif",
  fontStyle: "italic",
  fontWeight: 400,
};

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
        <span style={{ display: "block", fontSize: "clamp(36px, 6.5vw, 88px)" }}>
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
              <circle cx="180" cy="35" r="2" fill="#888" />
              <text x="188" y="22" style={{ ...SERIF_ITALIC, fontSize: 11, fill: "#666" }}>
                la cultura vera
              </text>
              <text x="188" y="37" style={{ ...SERIF_ITALIC, fontSize: 11, fill: "#666" }}>
                non si dichiara,
              </text>
              <text x="188" y="52" style={{ ...SERIF_ITALIC, fontSize: 11, fill: "#666" }}>
                si vive.
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
        <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 380 }}>
          <span
            style={{
              ...MONO,
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "#666",
              textTransform: "uppercase",
            }}
          >
            → Sintesi
          </span>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "#555" }}>
            Rendiamo visibile la cultura della tua organizzazione. Lavoriamo su
            employer branding, comunicazione interna e trasformazione culturale.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
          <button
            onClick={scrollToContact}
            style={{
              backgroundColor: INK,
              color: "#fff",
              border: "none",
              padding: "14px 28px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              letterSpacing: "0.02em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Parliamone
            <span style={{ fontSize: 16 }}>→</span>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;
