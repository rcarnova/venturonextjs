/**
 * Dati della prossima Venturo Conversation.
 *
 * Cambiano a ogni puntata: registrazione, grafica, ospite e data sono legati
 * al singolo incontro, non al format. Aggiornare qui e basta: pagina, pop-up
 * e file calendario leggono tutti da queste costanti.
 */

export const REGISTRATION_URL =
  "https://us06web.zoom.us/meeting/register/7k2pPKMQT7yAekG44wpx7A#/registration";

/** File .ics rigenerabile con: node scripts/build-ics.mjs */
export const CALENDAR_URL = "/venturo-conversation-20-ottobre.ics";

export const EPISODE = {
  title: "Motivazione ed engagement delle persone, cosa ne pensa un CFO?",

  /** Data in chiaro, usata nell'hero e sotto la grafica */
  dateLabel: "20 ottobre, ore 12",
  duration: "45-50 minuti",
  place: "Online",

  /** ISO con fuso italiano: il 20 ottobre 2026 l'Italia e ancora in CEST (UTC+2) */
  startsAt: "2026-10-20T12:00:00+02:00",
  endsAt: "2026-10-20T12:50:00+02:00",

  guest: {
    name: "Elena Alemanno",
    role: "CFO, Inter Ikea Systems",
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
    src: "/images/venturo-conversation-20-ottobre.webp",
    width: 1280,
    height: 720,
  },
} as const;
