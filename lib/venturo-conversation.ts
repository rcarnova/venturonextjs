/**
 * Dati della prossima Venturo Conversation.
 *
 * Cambiano a ogni puntata: registrazione, grafica, ospite e data sono legati
 * al singolo incontro, non al format.
 *
 * Per cambiare puntata:
 *   1. aggiorna le costanti qui sotto
 *   2. metti la nuova grafica in public/images/
 *   3. node scripts/build-ics.mjs   (rigenera il file calendario)
 */

export const REGISTRATION_URL =
  "https://us06web.zoom.us/meeting/register/V4TZo_D3Rk6L9Y6-X5rRnA#/registration";

export const CALENDAR_URL = "/venturo-conversation-6-novembre.ics";

export const EPISODE = {
  title: "Motivazione ed engagement delle persone, cosa ne pensa un Change Agent?",

  dateLabel: "6 novembre, ore 12",
  duration: "45-50 minuti",
  place: "Online",

  /**
   * ISO con fuso esplicito. Attenzione: l'ora legale finisce il 25 ottobre
   * 2026, quindi novembre e CET (+01:00) mentre ottobre era CEST (+02:00).
   * Sbagliare l'offset sposta l'evento di un'ora nei calendari.
   */
  startsAt: "2026-11-06T12:00:00+01:00",
  endsAt: "2026-11-06T12:50:00+01:00",

  guest: {
    name: "Matteo Lo Bue",
    role: "Agile Topic Leader, Reale Group",
  },

  hosts: [
    { name: "Rosario Carnovale", org: "Venturo" },
    { name: "Massimo Benedetti", org: "Venturo" },
  ],

  /**
   * La grafica e decorativa: titolo, data, ospite e host esistono come testo
   * vero accanto, quindi l'immagine ha alt vuoto per non farli leggere due
   * volte agli screen reader. Il nome accessibile sta sul link che la avvolge.
   */
  image: {
    src: "/images/venturo-conversation-6-novembre.webp",
    width: 1280,
    height: 720,
  },
} as const;
