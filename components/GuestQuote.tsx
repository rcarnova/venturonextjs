import { findMoment } from "@/lib/venturo-conversation";

/**
 * Citazione di un ospite di Venturo Conversation.
 *
 * Porta l'accento fucsia del format, cosi chi legge riconosce il filo che
 * lega le sezioni della home alla sezione Venturo Conversation. Il link
 * scorre al clip dentro la home (#vc-clip-<videoId>, in ConversationSection):
 * chi clicca resta sulla pagina e il video parte solo se lo sceglie.
 * Usare solo clip presenti in BEST_MOMENTS, altrimenti l'ancora non esiste.
 */
type Props = {
  quote: string;
  /** videoId del clip, uno degli highlights della puntata */
  clipId: string;
  /** "dark" su fondo nero, "light" su fondo chiaro */
  tone?: "dark" | "light";
  className?: string;
};

const ACCENT = "#EC4899";
// Su bianco il fucsia pieno non passa AA per il testo piccolo.
const ACCENT_ON_LIGHT = "#BE185D";

const GuestQuote = ({ quote, clipId, tone = "light", className = "" }: Props) => {
  const dark = tone === "dark";
  const accentText = dark ? ACCENT : ACCENT_ON_LIGHT;
  const guest = findMoment(clipId)?.episode.guest;
  return (
    <figure
      className={className}
      style={{
        margin: 0,
        borderLeft: `3px solid ${ACCENT}`,
        paddingLeft: 24,
        maxWidth: 720,
      }}
    >
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: accentText,
          margin: "0 0 12px",
        }}
      >
        Venturo Conversation
      </p>
      <blockquote style={{ margin: 0 }}>
        <p
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(19px, 2vw, 24px)",
            lineHeight: 1.5,
            color: dark ? "rgba(255,255,255,0.88)" : "#111",
            margin: 0,
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <figcaption
        style={{
          marginTop: 14,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          gap: "6px 16px",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,0.5)" : "#666",
        }}
      >
        {guest && (
          <span>
            {guest.name} · {guest.role}
          </span>
        )}
        <a
          href={`#vc-clip-${clipId}`}
          style={{ color: accentText, textDecoration: "underline", textUnderlineOffset: 4 }}
        >
          Guarda il clip, 1 min
        </a>
      </figcaption>
    </figure>
  );
};

export default GuestQuote;
