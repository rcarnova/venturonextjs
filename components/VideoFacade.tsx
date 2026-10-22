"use client";

import { useState } from "react";

/**
 * Anteprima di un video YouTube che carica l'iframe solo al clic.
 *
 * Un embed YouTube normale installa cookie di profilazione Google al
 * caricamento della pagina, senza che nessuno prema play: contraddirebbe la
 * nostra privacy policy, che dichiara solo cookie tecnici. Qui finche non si
 * clicca non parte nessuna richiesta verso Google, e l'anteprima e servita
 * dal nostro dominio. Chi clicca compie una scelta esplicita.
 *
 * Si usa youtube-nocookie.com, che non traccia la visione ai fini pubblicitari.
 */
type Props = {
  videoId: string;
  poster: { src: string; width: number; height: number };
  /** Titolo del video: etichetta del pulsante e title dell'iframe */
  label: string;
};

const ACCENT = "#EC4899";
const INK = "#000000";

const VideoFacade = ({ videoId, poster, label }: Props) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full border border-black"
      style={{ paddingTop: "56.25%" }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={label}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Guarda il video: ${label}`}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster.src}
            alt=""
            width={poster.width}
            height={poster.height}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span
              className="flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
              style={{ width: 72, height: 72, backgroundColor: ACCENT }}
            >
              <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">
                <path d="M0 0 L22 13 L0 26 Z" fill={INK} />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

export default VideoFacade;
