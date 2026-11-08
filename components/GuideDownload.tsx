"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Lead magnet del simulatore turnover: la guida in PDF in cambio dell'email.
 * Dopo l'invio mostra subito il link al PDF; la stessa cosa arriva per mail.
 */
export default function GuideDownload() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [azienda, setAzienda] = useState("");
  const [website, setWebsite] = useState("");
  const [consenso, setConsenso] = useState(false);
  const [aggiornamenti, setAggiornamenti] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!consenso) return setError("Per ricevere la guida serve il consenso all'informativa privacy.");
    setSending(true);
    try {
      const res = await fetch("/api/guida-turnover", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ nome, email, azienda, consenso, aggiornamenti, website }),
      });
      const json = await res.json();
      if (!res.ok || json.error) throw new Error(json.error || "Invio non riuscito.");
      setUrl(json.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invio non riuscito.");
    } finally {
      setSending(false);
    }
  };

  const field = "w-full h-10 rounded-md border border-input bg-background px-3 text-base md:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div id="guida" className="rounded-xl p-6 md:p-8 mb-14" style={{ backgroundColor: "#0A0A0A", color: "#fff", scrollMarginTop: 96 }}>
      <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "#E1FF00" }}>
        Guida gratuita · PDF, 10 pagine
      </p>
      <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">Fate il conto per bene, con i vostri numeri.</h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "#cfcfcf" }}>
        Una guida onesta: quali uscite contare, le cinque voci di costo e dove trovare i dati, i tre scenari da portare in direzione,
        cosa non si può misurare e come raccontarlo. Con una scheda da compilare.
      </p>

      {url ? (
        <div role="status">
          <p className="text-sm mb-4" style={{ color: "#cfcfcf" }}>Fatto. Ve l&apos;abbiamo mandata anche per email.</p>
          <a
            href={url}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-6 py-4 transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#E1FF00", color: "#0A0A0A" }}
          >
            Scarica la guida (PDF) ↓
          </a>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="grid gap-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <input className={field} style={{ color: "#111" }} placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="given-name" />
            <input className={field} style={{ color: "#111" }} placeholder="Email di lavoro" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
          </div>
          <input className={field} style={{ color: "#111" }} placeholder="Azienda (facoltativo)" value={azienda} onChange={(e) => setAzienda(e.target.value)} autoComplete="organization" />
          <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <label className="flex gap-3 items-start text-xs mt-1" style={{ color: "#cfcfcf" }}>
            <input type="checkbox" checked={consenso} onChange={(e) => setConsenso(e.target.checked)} className="mt-0.5 h-4 w-4" />
            <span>
              Ho letto l&apos;
              <Link href="/privacy" className="underline underline-offset-4 text-white">informativa privacy</Link> e acconsento a ricevere la guida via email.
            </span>
          </label>
          <label className="flex gap-3 items-start text-xs" style={{ color: "#cfcfcf" }}>
            <input type="checkbox" checked={aggiornamenti} onChange={(e) => setAggiornamenti(e.target.checked)} className="mt-0.5 h-4 w-4" />
            <span>Mandatemi ogni tanto altri contenuti di Venturo (facoltativo).</span>
          </label>
          {error && (
            <p className="text-sm m-0" role="alert" style={{ color: "#FF6B9E" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={sending}
            className="mt-2 justify-self-start inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-6 py-4 transition-opacity hover:opacity-85 disabled:opacity-60"
            style={{ backgroundColor: "#E1FF00", color: "#0A0A0A" }}
          >
            {sending ? "Invio in corso…" : "Ricevi la guida →"}
          </button>
        </form>
      )}
    </div>
  );
}
