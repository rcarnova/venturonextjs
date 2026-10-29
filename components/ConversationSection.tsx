"use client";

import Link from "next/link";
import VenturoConversationLogo from "@/components/VenturoConversationLogo";
import VideoFacade from "@/components/VideoFacade";
import { NEXT_EPISODE, PAST_EPISODES, REGISTRATION_URL } from "@/lib/venturo-conversation";

/**
 * Venturo Conversation in home, con la grafica del format (bianco, filetti
 * neri, mono maiuscolo, fucsia). E il punto in cui la home dice in pratica
 * quello che sostiene in teoria: l'engagement nasce dalle conversazioni.
 * Lumen le fa dentro le organizzazioni, Venturo Conversation in pubblico.
 *
 * I clip usano VideoFacade: nessuna richiesta a Google finche non si clicca.
 */

const INK = "#000000";
const TEXT = "#333333";
const MUTED = "#666666";
const ACCENT = "#EC4899";
// Su bianco #EC4899 non passa AA per il testo piccolo: per il testo serve piu scuro.
const ACCENT_ON_LIGHT = "#BE185D";

const EPISODE = PAST_EPISODES[0];

const ConversationSection = () => {
  return (
    <section id="venturo-conversation" className="bg-white" style={{ borderTop: `1px solid ${INK}` }}>
      <div className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Tesi */}
          <div className="lg:col-span-7">
            <VenturoConversationLogo
              wrapperClassName="mb-10"
              imgClassName="w-full max-w-[300px] h-auto"
              fallbackSize={32}
            />
            <p className="font-mono text-eyebrow mb-5" style={{ color: ACCENT_ON_LIGHT }}>
              CONVERSAZIONE = ENGAGEMENT
            </p>
            <h2
              className="font-bold"
              style={{
                color: INK,
                fontSize: "clamp(30px, 4.4vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
              }}
            >
              L&apos;engagement non si comunica. Si conversa.
            </h2>
            <p className="mt-6 max-w-[620px]" style={{ color: TEXT, fontSize: 17, lineHeight: 1.65 }}>
              Le persone si coinvolgono quando qualcuno fa loro una domanda vera e ascolta
              la risposta. Dentro le organizzazioni lo facciamo con Lumen. Fuori, in
              pubblico, con Venturo Conversation: ogni due settimane una domanda forte su
              cultura ed engagement, più punti di vista, nessuna risposta già scritta.
            </p>
          </div>

          {/* Prossima puntata */}
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="font-mono text-eyebrow mb-4" style={{ color: ACCENT_ON_LIGHT }}>
              PROSSIMA CONVERSAZIONE
            </p>
            <dl style={{ borderTop: `1px solid ${INK}` }}>
              <div className="py-4" style={{ borderBottom: "1px solid #dcdcdc" }}>
                <dt className="sr-only">Tema</dt>
                <dd className="font-semibold" style={{ color: INK, fontSize: 17, lineHeight: 1.35 }}>
                  {NEXT_EPISODE.title}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-4" style={{ borderBottom: "1px solid #dcdcdc" }}>
                <dt className="font-mono text-eyebrow shrink-0" style={{ color: MUTED }}>QUANDO</dt>
                <dd className="text-right" style={{ color: TEXT, fontSize: 15 }}>{NEXT_EPISODE.dateLabel}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-4" style={{ borderBottom: "1px solid #dcdcdc" }}>
                <dt className="font-mono text-eyebrow shrink-0" style={{ color: MUTED }}>CON</dt>
                <dd className="text-right" style={{ color: TEXT, fontSize: 15, lineHeight: 1.45 }}>
                  <strong style={{ color: INK }}>{NEXT_EPISODE.guest.name}</strong>
                  <br />
                  {NEXT_EPISODE.guest.role}
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Iscriviti a: ${NEXT_EPISODE.title} (si apre in una nuova scheda)`}
                className="inline-flex items-center gap-2 font-mono text-eyebrow px-7 py-4 transition-opacity hover:opacity-85"
                style={{ backgroundColor: ACCENT, color: INK }}
              >
                ISCRIVITI <span aria-hidden="true">&#8599;</span>
              </a>
              <Link
                href="/venturo-conversation"
                className="font-mono text-eyebrow underline underline-offset-4 hover:text-black"
                style={{ color: MUTED }}
              >
                IL FORMAT
              </Link>
            </div>
          </div>
        </div>

        {/* I momenti della puntata passata */}
        {EPISODE.highlights && EPISODE.highlights.length > 0 && (
          <div className="mt-16 md:mt-24 pt-10" style={{ borderTop: `1px solid ${INK}` }}>
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
              <div>
                <p className="font-mono text-eyebrow" style={{ color: ACCENT_ON_LIGHT }}>
                  RIVEDI · {EPISODE.dateLabel.toUpperCase()}
                </p>
                <h3 className="font-bold mt-2" style={{ color: INK, fontSize: "clamp(20px, 2.2vw, 26px)", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
                  {EPISODE.title}
                </h3>
                <p className="mt-1" style={{ color: MUTED, fontSize: 15 }}>
                  Con {EPISODE.guest.name}, {EPISODE.guest.role}
                </p>
              </div>
              <Link
                href={`/venturo-conversation/${EPISODE.slug}`}
                className="font-mono text-eyebrow underline underline-offset-4 hover:text-black"
                style={{ color: ACCENT_ON_LIGHT }}
              >
                LA PUNTATA INTERA →
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 md:gap-8">
              {EPISODE.highlights.map((clip, i) => (
                <div key={clip.videoId} id={`vc-clip-${clip.videoId}`} style={{ scrollMarginTop: 96 }}>
                  <VideoFacade
                    videoId={clip.videoId}
                    poster={clip.image}
                    label={clip.title}
                    aspect={1}
                    playSize={48}
                  />
                  <p className="font-mono text-eyebrow mt-4" style={{ color: MUTED }}>
                    CLIP #{String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="font-semibold mt-1" style={{ color: INK, fontSize: 16, lineHeight: 1.35 }}>
                    {clip.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConversationSection;
