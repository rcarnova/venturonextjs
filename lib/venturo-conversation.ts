/**
 * Dati di Venturo Conversation.
 *
 * NEXT_EPISODE e la puntata in arrivo: cambia ogni volta, insieme al link di
 * registrazione e alla grafica. PAST_EPISODES e l'archivio: una voce in piu
 * per ogni puntata andata online.
 *
 * Per pubblicare una nuova puntata:
 *   1. sposta NEXT_EPISODE in testa a PAST_EPISODES, aggiungendo videoId
 *   2. aggiorna NEXT_EPISODE e REGISTRATION_URL / CALENDAR_URL
 *   3. metti la nuova grafica in public/images/
 *   4. node scripts/build-ics.mjs
 */

export const REGISTRATION_URL =
  "https://us06web.zoom.us/meeting/register/V4TZo_D3Rk6L9Y6-X5rRnA#/registration";

export const CALENDAR_URL = "/venturo-conversation-6-novembre.ics";

export const NEXT_EPISODE = {
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

/** Puntate gia andate online, dalla piu recente. */
export const PAST_EPISODES = [
  {
    videoId: "XrSQZ1B_jG4",
    title: "Motivazione ed engagement delle persone, cosa ne pensa un CFO?",
    dateLabel: "20 ottobre 2026",
    guest: {
      name: "Elena Alemanno",
      role: "CFO, Inter Ikea Systems",
    },
    /** La copertina della puntata fa da anteprima al video: e gia sul nostro
     *  dominio, quindi nemmeno l'anteprima contatta server esterni. */
    image: {
      src: "/images/venturo-conversation-20-ottobre.webp",
      width: 1280,
      height: 720,
    },
  },
] as const;
