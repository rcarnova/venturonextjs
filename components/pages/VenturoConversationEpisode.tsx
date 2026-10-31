import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoFacade from "@/components/VideoFacade";
import { NEXT_EPISODE, REGISTRATION_URL } from "@/lib/venturo-conversation";

const INK = "#000000";
const TEXT = "#333333";
const MUTED = "#666666";
const ACCENT = "#EC4899";
const ACCENT_ON_LIGHT = "#BE185D";

type Episode = {
  slug: string;
  videoId: string;
  ogImage: string;
  title: string;
  dateLabel: string;
  guest: { name: string; role: string };
  image: { src: string; width: number; height: number };
  uploadDate?: string;
  duration?: string;
  seoDescription?: string;
  summary?: {
    intro: ReadonlyArray<string>;
    chapters: ReadonlyArray<{ at: number; title: string; text: ReadonlyArray<string>; quote?: string }>;
    takeaways: ReadonlyArray<string>;
    related?: { href: string; title: string };
  };
  highlights?: ReadonlyArray<{
    videoId: string;
    title: string;
    uploadDate?: string;
    duration?: string;
    image: { src: string; width: number; height: number };
  }>;
};

/** 2550 -> "42:30" */
const clock = (sec: number) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

/** "PT58M53S" -> secondi, per chiudere l'ultimo capitolo */
const isoSeconds = (iso?: string) => {
  const m = iso?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  return m ? Number(m[1] ?? 0) * 3600 + Number(m[2] ?? 0) * 60 + Number(m[3] ?? 0) : undefined;
};

const VenturoConversationEpisode = ({ episode }: { episode: Episode }) => {
  const SITE = "https://venturoconsulting.it";
  const pageUrl = `${SITE}/venturo-conversation/${episode.slug}`;

  /**
   * Senza questo blocco Google non sa che la pagina contiene video: il player
   * si monta solo al clic, quindi nell'HTML non esiste ne <video> ne <iframe>.
   * VideoObject e il modo che Google stesso indica per i player caricati in
   * differita. Le miniature puntano a JPEG perche per thumbnailUrl il WebP
   * non e garantito.
   */
  const videos = [
    {
      "@type": "VideoObject",
      name: episode.title,
      description:
        episode.seoDescription ??
        `Venturo Conversation del ${episode.dateLabel}, con ${episode.guest.name}, ${episode.guest.role}.`,
      thumbnailUrl: [`${SITE}${episode.ogImage}`],
      // I capitoli della sintesi come momenti chiave del video
      hasPart: episode.summary?.chapters.map((c, i, all) => ({
        "@type": "Clip",
        name: c.title,
        startOffset: c.at,
        endOffset: all[i + 1]?.at ?? isoSeconds(episode.duration),
        url: `https://www.youtube.com/watch?v=${episode.videoId}&t=${c.at}s`,
      })),
      uploadDate: episode.uploadDate,
      duration: episode.duration,
      embedUrl: `https://www.youtube.com/embed/${episode.videoId}`,
      contentUrl: `https://www.youtube.com/watch?v=${episode.videoId}`,
      publisher: { "@type": "Organization", name: "Venturo", url: SITE },
      isPartOf: { "@type": "WebPage", "@id": pageUrl },
    },
    ...(episode.highlights ?? []).map((c) => ({
      "@type": "VideoObject",
      name: c.title,
      description: `Un momento della Venturo Conversation con ${episode.guest.name}, ${episode.guest.role}.`,
      thumbnailUrl: [`${SITE}${c.image.src.replace(/\.webp$/, ".jpg")}`],
      uploadDate: c.uploadDate,
      duration: c.duration,
      embedUrl: `https://www.youtube.com/embed/${c.videoId}`,
      contentUrl: `https://www.youtube.com/watch?v=${c.videoId}`,
      publisher: { "@type": "Organization", name: "Venturo", url: SITE },
      isPartOf: { "@type": "WebPage", "@id": pageUrl },
    })),
  ];

  // i campi non noti si tolgono: meglio assenti che vuoti nei dati strutturati
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": videos.map((v) =>
      Object.fromEntries(Object.entries(v).filter(([, x]) => x !== undefined))
    ),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        <section className="container-wide pt-28 pb-16 md:pt-36 md:pb-24">
          <Link
            href="/venturo-conversation"
            className="font-mono text-eyebrow transition-colors hover:text-black"
            style={{ color: MUTED }}
          >
            ← VENTURO CONVERSATION
          </Link>

          <p
            className="font-mono text-eyebrow mt-10 mb-5"
            style={{ color: ACCENT_ON_LIGHT }}
          >
            PUNTATA DEL {episode.dateLabel.toUpperCase()}
          </p>

          <h1
            className="font-bold max-w-[900px]"
            style={{
              color: INK,
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {episode.title}
          </h1>

          <div className="mt-10 md:mt-14">
            <VideoFacade
              videoId={episode.videoId}
              poster={episode.image}
              label={episode.title}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-eyebrow mb-2" style={{ color: MUTED }}>
                NE ABBIAMO PARLATO CON
              </p>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.5 }}>
                <strong style={{ color: INK }}>{episode.guest.name}</strong>
                <br />
                {episode.guest.role}
              </p>
            </div>
            <div className="lg:col-span-4">
              <p className="font-mono text-eyebrow mb-2" style={{ color: MUTED }}>
                HOST
              </p>
              <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.5 }}>
                Rosario Carnovale, Massimo Benedetti
                <br />
                Venturo
              </p>
            </div>
          </div>
        </section>

        {/* La conversazione per chi legge: sintesi dalla trascrizione, a capitoli */}
        {episode.summary && (
          <section style={{ borderTop: `1px solid ${INK}` }}>
            <div className="container-wide py-16 md:py-24">
              <h2 className="font-mono text-eyebrow mb-8" style={{ color: ACCENT_ON_LIGHT }}>
                LA CONVERSAZIONE, IN SINTESI
              </h2>
              <div className="max-w-[720px]">
                {episode.summary.intro.map((p) => (
                  <p key={p} className="mb-5" style={{ color: TEXT, fontSize: 18, lineHeight: 1.65 }}>
                    {p}
                  </p>
                ))}

                {episode.summary.chapters.map((c) => (
                  <div key={c.at} className="mt-14">
                    <a
                      href={`https://www.youtube.com/watch?v=${episode.videoId}&t=${c.at}s`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-eyebrow underline underline-offset-4 transition-colors hover:text-black"
                      style={{ color: MUTED }}
                      aria-label={`Guarda da ${clock(c.at)} su YouTube (si apre in una nuova scheda)`}
                    >
                      DAL MINUTO {clock(c.at)} ↗
                    </a>
                    <h3
                      className="font-bold mt-3 mb-4"
                      style={{ color: INK, fontSize: "clamp(22px, 2.6vw, 28px)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
                    >
                      {c.title}
                    </h3>
                    {c.text.map((p) => (
                      <p key={p} className="mb-4" style={{ color: TEXT, fontSize: 17, lineHeight: 1.65 }}>
                        {p}
                      </p>
                    ))}
                    {c.quote && (
                      <blockquote className="mt-6 mb-0" style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 24 }}>
                        <p
                          className="m-0"
                          style={{ color: INK, fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "clamp(20px, 2.2vw, 26px)", lineHeight: 1.4 }}
                        >
                          &ldquo;{c.quote}&rdquo;
                        </p>
                        <footer className="font-mono text-eyebrow mt-3" style={{ color: MUTED }}>
                          {episode.guest.name}
                        </footer>
                      </blockquote>
                    )}
                  </div>
                ))}

                <div className="mt-16 p-8" style={{ backgroundColor: "#F5F5F5" }}>
                  <h3 className="font-mono text-eyebrow mb-5" style={{ color: ACCENT_ON_LIGHT }}>
                    COSA CI PORTIAMO A CASA
                  </h3>
                  <ul className="m-0 p-0 list-none space-y-4">
                    {episode.summary.takeaways.map((t) => (
                      <li key={t} style={{ color: INK, fontSize: 17, lineHeight: 1.55 }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  {episode.summary.related && (
                    <p className="mt-6 mb-0" style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>
                      Ne abbiamo scritto anche in{" "}
                      <Link href={episode.summary.related.href} className="underline underline-offset-4 hover:text-black">
                        {episode.summary.related.title}
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {episode.highlights && episode.highlights.length > 0 && (
          <section style={{ borderTop: `1px solid ${INK}` }}>
            <div className="container-wide py-16 md:py-24">
              <h2 className="font-mono text-eyebrow mb-3" style={{ color: ACCENT_ON_LIGHT }}>
                I MOMENTI
              </h2>
              <p className="mb-10 max-w-[620px]" style={{ color: MUTED, fontSize: 16, lineHeight: 1.6 }}>
                Quattro passaggi brevi, se non hai i cinquanta minuti.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {episode.highlights.map((clip, i) => (
                  <div key={clip.videoId} id={`clip-${clip.videoId}`} style={{ scrollMarginTop: 96 }}>
                    <VideoFacade
                      videoId={clip.videoId}
                      poster={clip.image}
                      label={clip.title}
                      aspect={1}
                      playSize={56}
                    />
                    <p className="font-mono text-eyebrow mt-4" style={{ color: MUTED }}>
                      CLIP #{String(i + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className="font-semibold mt-1"
                      style={{ color: INK, fontSize: 17, lineHeight: 1.35 }}
                    >
                      {clip.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Dalla puntata passata a quella in arrivo */}
        <section style={{ borderTop: `1px solid ${INK}` }}>
          <div className="container-wide py-16 md:py-24">
            <h2 className="font-mono text-eyebrow mb-5" style={{ color: ACCENT_ON_LIGHT }}>
              LA PROSSIMA CONVERSAZIONE
            </h2>
            <h3
              className="font-bold max-w-[760px]"
              style={{
                color: INK,
                fontSize: "clamp(22px, 2.8vw, 32px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              {NEXT_EPISODE.title}
            </h3>
            <p className="font-mono text-eyebrow mt-4" style={{ color: MUTED }}>
              {NEXT_EPISODE.dateLabel} · {NEXT_EPISODE.guest.name}, {NEXT_EPISODE.guest.role}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Iscriviti a: ${NEXT_EPISODE.title} (si apre in una nuova scheda)`}
                className="inline-flex items-center gap-2 font-mono text-eyebrow px-8 py-4 transition-opacity hover:opacity-85"
                style={{ backgroundColor: ACCENT, color: INK }}
              >
                ISCRIVITI
                <span aria-hidden="true" style={{ fontSize: "0.9em" }}>
                  &#8599;
                </span>
              </a>
              <Link
                href="/venturo-conversation"
                className="font-mono text-eyebrow underline underline-offset-4 transition-colors hover:text-black"
                style={{ color: MUTED }}
              >
                SCOPRI IL FORMAT
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VenturoConversationEpisode;
