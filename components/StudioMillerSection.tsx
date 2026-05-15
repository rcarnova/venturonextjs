import Image from "next/image";

const StudioMillerSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "clamp(40px, 8vh, 100px) clamp(24px, 6vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background watermark — desktop only */}
      <span
        aria-hidden="true"
        className="hidden lg:block"
        style={{
          position: "absolute",
          right: "-0.05em",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(100px, 18vw, 260px)",
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontWeight: 700,
          color: "rgba(255,255,255,0.03)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        MILLER
      </span>

      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative" }}>

        {/* ── Mobile: logo + title inline ── */}
        <div className="flex lg:hidden items-center gap-4 mb-5">
          <a href="https://www.studiomiller.it" target="_blank" rel="noopener noreferrer">
            <Image
              src="/studio-miller-logo.png"
              alt="Studio Miller"
              width={72}
              height={72}
              style={{ borderRadius: "50%", display: "block" }}
            />
          </a>
          <div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#E6FF3D",
                display: "block",
                marginBottom: 4,
              }}
            >
              Braccio visivo · Branding
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: 24,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Studio Miller
            </h2>
          </div>
        </div>

        {/* Mobile body — single compact paragraph */}
        <div className="block lg:hidden">
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: "0 0 24px" }}>
            Lo studio di branding da cui Venturo è nata. Produce i materiali
            visivi dei progetti Venturo — libri aziendali, identità visive,
            campagne interne — con standard da agenzia di marketing.
          </p>
          <a
            href="https://www.studiomiller.it"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#fff",
              fontSize: 13,
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              paddingBottom: 2,
            }}
          >
            Vedi il portfolio Studio Miller <span>→</span>
          </a>
        </div>

        {/* ── Desktop: full two-column layout ── */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "1fr auto",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* Text column */}
          <div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#E6FF3D",
                display: "block",
                marginBottom: 20,
              }}
            >
              Braccio visivo · Branding &amp; Comunicazione
            </span>

            <h2
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                margin: "0 0 8px",
              }}
            >
              Studio Miller
            </h2>

            <p
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 28px",
                fontStyle: "italic",
              }}
            >
              Lo studio di branding e comunicazione che produce gli artefatti della pratica Venturo.
            </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.65)",
                maxWidth: 560,
                margin: "0 0 16px",
              }}
            >
              Quando un progetto Venturo richiede materiali visivi che reggano il
              confronto con la comunicazione esterna — libri aziendali, video,
              identità visive, campagne di lancio interno — li produce Studio
              Miller con standard da agenzia di marketing.
            </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.45)",
                maxWidth: 560,
                margin: "0 0 40px",
              }}
            >
              Studio Miller è la pratica originaria da cui Venturo è nata. Oggi
              opera come braccio visivo dei progetti di cultura organizzativa, e
              in autonomia su progetti di branding esterno.
            </p>

            <a
              href="https://www.studiomiller.it"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "#fff",
                fontSize: 14,
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.02em",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.3)",
                paddingBottom: 2,
              }}
            >
              Vedi il portfolio Studio Miller
              <span style={{ fontSize: 16 }}>→</span>
            </a>
          </div>

          {/* Logo column */}
          <div style={{ flexShrink: 0 }}>
            <a
              href="https://www.studiomiller.it"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <Image
                src="/studio-miller-logo.png"
                alt="Studio Miller"
                width={160}
                height={160}
                style={{
                  borderRadius: "50%",
                  display: "block",
                  filter: "drop-shadow(0 0 40px rgba(220,40,40,0.25))",
                }}
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudioMillerSection;
