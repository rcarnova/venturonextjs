import Link from "next/link";

const phases = [
  {
    n: "01",
    label: "Kick-off",
    title: "Envisioning",
    desc: "Il gruppo esplora il futuro dell'organizzazione, porta in superficie le sfide reali e definisce insieme i 4 Principi guida del percorso. Nascono dalla voce del gruppo, facilitati dal processo.",
    days: "2 giornate",
  },
  {
    n: "02",
    label: "Sessione 2",
    title: "Approfondimento",
    desc: "Esercizi in team, storytelling e tecniche maieutiche per dare sostanza e concretezza ai primi due principi. Il gruppo non impara concetti nuovi: li rende espliciti e condivisi.",
    days: "2 giornate",
  },
  {
    n: "03",
    label: "Sessione 3",
    title: "Implementazione",
    desc: "Il gruppo riflette su come estendere i principi all'intera organizzazione. Si costruiscono le basi per un percorso più operativo e diffuso.",
    days: "2 giornate",
  },
];

const LeadingByPurposeSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "clamp(64px, 10vh, 120px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-start",
            gap: 32,
            marginBottom: "clamp(48px, 7vh, 80px)",
          }}
          className="block-on-mobile"
        >
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
              Percorso · Top management · Team coaching
            </span>

            <h2
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: "0 0 24px",
              }}
            >
              Leading by{" "}
              <em
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#E6FF3D",
                }}
              >
                Purpose
              </em>
            </h2>

            <p
              style={{
                fontSize: "clamp(16px, 1.5vw, 19px)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.7)",
                maxWidth: 600,
                margin: 0,
              }}
            >
              Un percorso di team coaching per il gruppo di leadership. L'obiettivo
              non è trasmettere valori dall'esterno — è far emergere dal gruppo
              stesso i principi che già guidano, o dovrebbero guidare, il modo di
              lavorare. E renderli espliciti, condivisi, agiti.
            </p>
          </div>

          {/* Duration badge */}
          <div
            className="hidden md:flex"
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "24px 28px",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: 40,
                fontWeight: 700,
                lineHeight: 1,
                color: "#E6FF3D",
                display: "block",
              }}
            >
              6
            </span>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                display: "block",
                marginTop: 6,
              }}
            >
              giornate
            </span>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                display: "block",
                marginTop: 4,
              }}
            >
              ~2 mesi
            </span>
          </div>
        </div>

        {/* Central idea */}
        <blockquote
          style={{
            borderLeft: "2px solid #E6FF3D",
            paddingLeft: 24,
            margin: "0 0 clamp(48px, 7vh, 80px)",
          }}
        >
          <p
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.8vw, 22px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.85)",
              margin: 0,
            }}
          >
            Il perché di un'organizzazione non è un poster. È l'unica leva reale
            per ispirare le persone a crescere e a dare il meglio — anche quando
            nessuno sta guardando.
          </p>
        </blockquote>

        {/* Three phases */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 1,
            backgroundColor: "rgba(255,255,255,0.06)",
            marginBottom: "clamp(40px, 6vh, 64px)",
          }}
        >
          {phases.map((p) => (
            <div
              key={p.n}
              style={{
                backgroundColor: "#111",
                padding: "28px 24px",
                borderTop: "2px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    color: "#E6FF3D",
                  }}
                >
                  {p.n} · {p.label}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.25)",
                    textTransform: "uppercase",
                  }}
                >
                  {p.days}
                </span>
              </div>
              <strong
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 10,
                  color: "#fff",
                }}
              >
                {p.title}
              </strong>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#E6FF3D",
              color: "#111",
              padding: "14px 28px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              letterSpacing: "0.02em",
              textDecoration: "none",
            }}
          >
            Parliamone
            <span style={{ fontSize: 16 }}>→</span>
          </Link>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            percorso su misura · 6 giornate · 2 facilitatori
          </span>
        </div>

      </div>
    </section>
  );
};

export default LeadingByPurposeSection;
