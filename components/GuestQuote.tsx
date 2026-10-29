import Link from "next/link";
import { PAST_EPISODES } from "@/lib/venturo-conversation";

/**
 * Citazione di un ospite di Venturo Conversation, con il link al clip.
 *
 * Il link porta alla pagina della puntata sul nostro sito, non a YouTube:
 * chi clicca resta da noi, e il video parte solo se lo sceglie (VideoFacade).
 * L'ancora #clip-<videoId> e definita nella pagina della puntata.
 */
type Props = {
  quote: string;
  /** videoId del clip, uno degli highlights della puntata */
  clipId: string;
  /** "dark" su fondo nero, "light" su fondo chiaro */
  tone?: "dark" | "light";
  className?: string;
};

const EPISODE = PAST_EPISODES[0];

const GuestQuote = ({ quote, clipId, tone = "light", className = "" }: Props) => {
  const dark = tone === "dark";
  return (
    <figure
      className={className}
      style={{
        margin: 0,
        borderLeft: `2px solid ${dark ? "#E6FF3D" : "#111"}`,
        paddingLeft: 24,
        maxWidth: 720,
      }}
    >
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
        <span>
          {EPISODE.guest.name} · {EPISODE.guest.role}
        </span>
        <Link
          href={`/venturo-conversation/${EPISODE.slug}#clip-${clipId}`}
          style={{
            color: dark ? "#E6FF3D" : "#111",
            textDecoration: "underline",
            textUnderlineOffset: 4,
          }}
        >
          Guarda, 1 min →
        </Link>
      </figcaption>
    </figure>
  );
};

export default GuestQuote;
