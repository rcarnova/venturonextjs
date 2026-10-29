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
  title: string;
  dateLabel: string;
  guest: { name: string; role: string };
  image: { src: string; width: number; height: number };
  highlights?: ReadonlyArray<{
    videoId: string;
    title: string;
    image: { src: string; width: number; height: number };
  }>;
};

const VenturoConversationEpisode = ({ episode }: { episode: Episode }) => {
  return (
    <div className="min-h-screen bg-white">
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

        {episode.highlights && episode.highlights.length > 0 && (
          <section style={{ borderTop: `1px solid ${INK}` }}>
            <div className="container-wide py-16 md:py-24">
              <p className="font-mono text-eyebrow mb-3" style={{ color: ACCENT_ON_LIGHT }}>
                I MOMENTI
              </p>
              <p className="mb-10 max-w-[620px]" style={{ color: MUTED, fontSize: 16, lineHeight: 1.6 }}>
                Tre passaggi brevi, se non hai i cinquanta minuti.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {episode.highlights.map((clip, i) => (
                  <div key={clip.videoId}>
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
                    <p
                      className="font-semibold mt-1"
                      style={{ color: INK, fontSize: 17, lineHeight: 1.35 }}
                    >
                      {clip.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Dalla puntata passata a quella in arrivo */}
        <section style={{ borderTop: `1px solid ${INK}` }}>
          <div className="container-wide py-16 md:py-24">
            <p className="font-mono text-eyebrow mb-5" style={{ color: ACCENT_ON_LIGHT }}>
              LA PROSSIMA CONVERSAZIONE
            </p>
            <h2
              className="font-bold max-w-[760px]"
              style={{
                color: INK,
                fontSize: "clamp(22px, 2.8vw, 32px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              {NEXT_EPISODE.title}
            </h2>
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
