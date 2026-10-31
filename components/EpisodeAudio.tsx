"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Lettore audio di una puntata di Venturo Conversation.
 * Nella prima puntata la webcam dell'ospite non funzionava: il video mostrava
 * solo lo schermo di Zoom. Qui si ascolta e basta, restando sul sito.
 * L'audio si scarica solo quando si preme play (preload="none").
 * I capitoli della sintesi lo comandano con <ListenFrom at={secondi} />.
 */

const INK = "#000000";
const ACCENT = "#EC4899";
const MUTED = "#666666";
const SEEK_EVENT = "vc-audio-seek";

const clock = (sec: number) => {
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = String(s % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${r}` : `${m}:${r}`;
};

/** Barre decorative dell'onda, stabili tra server e browser */
const BARS = Array.from({ length: 64 }, (_, i) => 20 + Math.round(70 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.31))));

type Props = {
  src: string;
  duration: number;
  title: string;
  guest: string;
  youtubeUrl: string;
};

export default function EpisodeAudio({ src, duration, title, guest, youtubeUrl }: Props) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const seekAndPlay = useCallback((at: number) => {
    const el = audio.current;
    if (!el) return;
    const go = () => {
      el.currentTime = at;
      void el.play();
    };
    // Prima del caricamento dei metadati il browser ignora currentTime
    if (el.readyState < 1) {
      el.addEventListener("loadedmetadata", go, { once: true });
      el.load();
    } else go();
  }, []);

  useEffect(() => {
    const onSeek = (e: Event) => {
      seekAndPlay((e as CustomEvent<number>).detail);
      document.getElementById("ascolta")?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    window.addEventListener(SEEK_EVENT, onSeek);
    return () => window.removeEventListener(SEEK_EVENT, onSeek);
  }, [seekAndPlay]);

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  };

  const progress = Math.min(1, time / duration);

  return (
    <div id="ascolta" className="p-6 md:p-8" style={{ border: `1px solid ${INK}`, scrollMarginTop: 96 }}>
      <audio
        ref={audio}
        src={src}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
      />
      <p className="font-mono text-eyebrow mb-4" style={{ color: "#BE185D" }}>
        ASCOLTA LA PUNTATA
      </p>

      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Metti in pausa" : `Ascolta: ${title}`}
          className="shrink-0 flex items-center justify-center rounded-full transition-transform hover:scale-105"
          style={{ width: 64, height: 64, backgroundColor: ACCENT, color: INK }}
        >
          {playing ? (
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="5" height="16" fill="currentColor" /><rect x="14" y="4" width="5" height="16" fill="currentColor" /></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="currentColor" /></svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          {/* Onda: la parte già ascoltata è rosa */}
          <div className="flex items-center gap-[3px] h-12" aria-hidden="true">
            {BARS.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-full"
                style={{ height: `${h}%`, backgroundColor: i / BARS.length < progress ? ACCENT : "#D4D4D4" }}
              />
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={duration}
            step={1}
            value={Math.floor(time)}
            onChange={(e) => seekAndPlay(Number(e.target.value))}
            aria-label="Posizione nella puntata"
            className="w-full mt-2"
            style={{ accentColor: ACCENT }}
          />
          <div className="flex justify-between font-mono text-eyebrow mt-1" style={{ color: MUTED }}>
            <span>{clock(time)}</span>
            <span>{clock(duration)}</span>
          </div>
        </div>
      </div>

      <p className="mt-5 mb-0 text-sm" style={{ color: MUTED }}>
        Con {guest}. Preferisci il video?{" "}
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black">
          Guardalo su YouTube ↗
        </a>
      </p>
    </div>
  );
}

/** Pulsante di un capitolo: fa partire l'audio da quel punto */
export function ListenFrom({ at }: { at: number }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(SEEK_EVENT, { detail: at }))}
      className="inline-flex items-center gap-2 font-mono text-eyebrow underline underline-offset-4 transition-colors hover:text-black"
      style={{ color: MUTED }}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3l15 9-15 9z" fill={ACCENT} /></svg>
      ASCOLTA DA {clock(at)}
    </button>
  );
}
