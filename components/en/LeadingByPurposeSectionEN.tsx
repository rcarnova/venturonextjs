"use client";


const phases = [
  {
    n: "01",
    label: "Kick-off",
    title: "Envisioning",
    desc: "The group explores the organization's future, surfaces real challenges and defines together the 4 guiding principles of the programme. They emerge from the group's voice, facilitated by the process.",
    days: "2 days",
  },
  {
    n: "02",
    label: "Session 2",
    title: "Deepening",
    desc: "Team exercises, storytelling and maieutic techniques to give substance and concreteness to the first two principles. The group doesn't learn new concepts: it makes existing ones explicit and shared.",
    days: "2 days",
  },
  {
    n: "03",
    label: "Session 3",
    title: "Implementation",
    desc: "The group reflects on how to extend the principles to the whole organization. The foundations are built for a more operational and widespread journey.",
    days: "2 days",
  },
];

const LeadingByPurposeSectionEN = () => {
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
              Programme · Top management · Team coaching
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
              A team coaching programme for the leadership group. The goal is not
              to impose values from the outside: it's to surface from the group
              itself the principles that already guide — or should guide — the way
              of working. And make them explicit, shared, acted upon.
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
              days
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
              ~2 months
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
            An organization's why is not a poster. It is the only real lever to
            inspire people to grow and give their best, even when no one is
            watching.
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
          <a
            href="/en/leading-by-purpose"
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
            Learn more
            <span style={{ fontSize: 16 }}>→</span>
          </a>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            bespoke programme · 6 days · 2 facilitators
          </span>
        </div>

      </div>
    </section>
  );
};

export default LeadingByPurposeSectionEN;
