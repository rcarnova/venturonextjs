"use client";

import { useState } from "react";
import Link from "next/link";
import { NEXT_EPISODE } from "@/lib/venturo-conversation";

/**
 * Modulo di iscrizione alla prossima Venturo Conversation, nello stile del
 * format (bianco, filetti neri, mono maiuscolo, fucsia). Dopo l'invio mostra
 * il link di Meet e i pulsanti per il calendario; la stessa cosa arriva per mail.
 */

const INK = "#000000";
const ACCENT = "#EC4899";
const ACCENT_ON_LIGHT = "#BE185D";
const MUTED = "#555555";
const MONO = "font-mono text-eyebrow";

type Done = { join: string; google: string; outlook: string; ics: string };

const field = "w-full bg-white px-4 py-3 text-base outline-none focus:ring-2 focus:ring-black";

export default function VCSignup() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [azienda, setAzienda] = useState("");
  const [website, setWebsite] = useState("");
  const [consenso, setConsenso] = useState(false);
  const [aggiornamenti, setAggiornamenti] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<Done | null>(null);

  const ended = Date.now() > Date.parse(NEXT_EPISODE.endsAt);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!consenso) {
      setError("Per iscriverti serve il consenso all'informativa privacy.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/vc-iscrizione", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ nome, email, azienda, consenso, aggiornamenti, website }),
      });
      const json = await res.json();
      if (!res.ok || json.error) throw new Error(json.error || "Iscrizione non riuscita.");
      setDone(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Iscrizione non riuscita.");
    } finally {
      setSending(false);
    }
  };

  const downloadIcs = () => {
    if (!done) return;
    const url = URL.createObjectURL(new Blob([done.ics], { type: "text/calendar" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "venturo-conversation.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (ended) {
    return (
      <div className="p-6 md:p-8" style={{ border: `1px solid ${INK}` }}>
        <p className={`${MONO} mb-3`} style={{ color: ACCENT_ON_LIGHT }}>ISCRIZIONI CHIUSE</p>
        <p className="text-body m-0" style={{ color: MUTED }}>
          Questa puntata è già andata in onda. Stiamo preparando la prossima: intanto puoi{" "}
          <Link href="/venturo-conversation" className="underline underline-offset-4" style={{ color: INK }}>
            ascoltare le puntate precedenti
          </Link>
          .
        </p>
      </div>
    );
  }

  if (done) {
    const btn = "inline-flex items-center gap-2 font-mono text-eyebrow px-6 py-4 transition-opacity hover:opacity-85";
    return (
      <div className="p-6 md:p-8" style={{ border: `1px solid ${INK}` }} role="status">
        <p className={`${MONO} mb-3`} style={{ color: ACCENT_ON_LIGHT }}>SEI ISCRITTO</p>
        <p className="text-body mb-6" style={{ color: MUTED }}>
          Ti abbiamo mandato una mail con il link e l&apos;invito per il calendario. Se non la trovi, controlla nello spam.
        </p>
        <a href={done.join} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: ACCENT, color: INK }}>
          ENTRA SU GOOGLE MEET <span aria-hidden="true">&#8599;</span>
        </a>
        <p className={`${MONO} mt-8 mb-3`} style={{ color: MUTED }}>AGGIUNGI AL CALENDARIO</p>
        <div className="flex flex-wrap gap-3">
          <a href={done.google} target="_blank" rel="noopener noreferrer" className={btn} style={{ border: `1px solid ${INK}`, color: INK }}>
            GOOGLE CALENDAR
          </a>
          <a href={done.outlook} target="_blank" rel="noopener noreferrer" className={btn} style={{ border: `1px solid ${INK}`, color: INK }}>
            OUTLOOK
          </a>
          <button type="button" onClick={downloadIcs} className={btn} style={{ border: `1px solid ${INK}`, color: INK }}>
            APPLE E ALTRI (.ICS)
          </button>
        </div>
        <p className="text-sm mt-6 mb-0" style={{ color: MUTED }}>
          Link della stanza: <a href={done.join} className="underline underline-offset-4" style={{ color: INK }}>{done.join}</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="p-6 md:p-8" style={{ border: `1px solid ${INK}` }} noValidate>
      <p className={`${MONO} mb-6`} style={{ color: ACCENT_ON_LIGHT }}>ISCRIVITI, È GRATUITO</p>
      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className={MONO} style={{ color: MUTED }}>NOME E COGNOME</span>
          <input className={field} style={{ border: `1px solid ${INK}` }} value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" required />
        </label>
        <label className="grid gap-2">
          <span className={MONO} style={{ color: MUTED }}>EMAIL</span>
          <input className={field} style={{ border: `1px solid ${INK}` }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        </label>
        <label className="grid gap-2">
          <span className={MONO} style={{ color: MUTED }}>AZIENDA (FACOLTATIVO)</span>
          <input className={field} style={{ border: `1px solid ${INK}` }} value={azienda} onChange={(e) => setAzienda(e.target.value)} autoComplete="organization" />
        </label>
        {/* Trappola per i bot: invisibile alle persone */}
        <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        <label className="flex gap-3 items-start text-sm mt-2" style={{ color: MUTED }}>
          <input type="checkbox" checked={consenso} onChange={(e) => setConsenso(e.target.checked)} className="mt-1 h-4 w-4 accent-black" />
          <span>
            Ho letto l&apos;
            <Link href="/privacy" className="underline underline-offset-4" style={{ color: INK }}>informativa privacy</Link>
            {" "}e acconsento a ricevere la mail con il link per partecipare.
          </span>
        </label>
        <label className="flex gap-3 items-start text-sm" style={{ color: MUTED }}>
          <input type="checkbox" checked={aggiornamenti} onChange={(e) => setAggiornamenti(e.target.checked)} className="mt-1 h-4 w-4 accent-black" />
          <span>Avvisatemi anche delle prossime puntate (facoltativo).</span>
        </label>

        {error && (
          <p className="text-sm m-0" role="alert" style={{ color: "#B91C1C" }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={sending}
          className="mt-2 inline-flex justify-center items-center gap-2 font-mono text-eyebrow px-7 py-4 transition-opacity hover:opacity-85 disabled:opacity-60"
          style={{ backgroundColor: ACCENT, color: INK }}
        >
          {sending ? "INVIO IN CORSO…" : "ISCRIVIMI"}
        </button>
      </div>
    </form>
  );
}
