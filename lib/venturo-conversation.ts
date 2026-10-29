/**
 * Dati di Venturo Conversation.
 *
 * NEXT_EPISODE e la puntata in arrivo: cambia ogni volta, insieme al link di
 * registrazione e alla grafica. PAST_EPISODES e l'archivio: una voce in piu
 * per ogni puntata andata online.
 *
 * Per pubblicare una nuova puntata:
 *   1. sposta NEXT_EPISODE in testa a PAST_EPISODES, aggiungendo slug e videoId
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
    /** Usato per l'indirizzo della pagina dedicata: /venturo-conversation/<slug> */
    slug: "motivazione-engagement-cfo",
    videoId: "XrSQZ1B_jG4",
    /** Letti da YouTube: servono a VideoObject, che senza uploadDate non e valido. */
    uploadDate: "2026-10-21T06:14:18-07:00",
    duration: "PT58M53S",
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
    /**
     * Copia JPEG per l'anteprima social. LinkedIn non gestisce il WebP in modo
     * affidabile nelle schede og:image, e LinkedIn e il canale dove questi link
     * finiscono. Il WebP resta per la pagina, che pesa un terzo.
     */
    ogImage: "/images/venturo-conversation-20-ottobre-og.jpg",

    /**
     * Clip brevi tratte dalla puntata, pubblicate come Short su YouTube ma
     * girate in quadrato: da qui l'aspect 1 nel player. Le anteprime sono
     * scaricate da YouTube e servite dal nostro dominio, come per il video
     * intero, cosi la pagina non contatta Google finche non si clicca.
     */
    highlights: [
      {
        videoId: "wN0bEE-mlck",
        /** Data non leggibile da YouTube (pagina di consenso): allineata agli altri
         *  tre clip, pubblicati lo stesso giorno. Da confermare in YouTube Studio. */
        uploadDate: "2026-10-29",
        title: "La cultura era già nel catalogo",
        image: { src: "/images/venturo-conversation-clip-01.webp", width: 720, height: 720 },
      },
      {
        videoId: "Q8vjrjqGZkY",
        uploadDate: "2026-10-29T08:55:44-07:00",
        duration: "PT1M2S",
        title: "Business & People Together",
        image: { src: "/images/venturo-conversation-clip-02.webp", width: 720, height: 720 },
      },
      {
        videoId: "sf6iapyW5ww",
        uploadDate: "2026-10-29T08:54:34-07:00",
        duration: "PT1M13S",
        /** Su YouTube il titolo ha un refuso ("comportamnti"): qui corretto. */
        title: "I valori non si vedono, i comportamenti sì",
        image: { src: "/images/venturo-conversation-clip-03.webp", width: 720, height: 720 },
      },
      {
        videoId: "x-5EpW4a0yQ",
        uploadDate: "2026-10-29T09:57:11-07:00",
        duration: "PT1M6S",
        title: "Il premio all'errore più grande",
        image: { src: "/images/venturo-conversation-clip-04.webp", width: 720, height: 720 },
      },
    ],
  },
] as const;

/**
 * I momenti migliori, scelti a mano, da tutte le puntate.
 *
 * E la selezione che compare in home (ConversationSection). Ogni voce e il videoId di
 * un clip che esiste tra gli highlights di una delle PAST_EPISODES: puntata
 * e ospite si ricavano da li. L'ordine qui e l'ordine in home.
 *
 * Quando esce una nuova puntata: aggiungi i suoi clip migliori e togli quelli
 * che non reggono piu il confronto. Tienine quattro, al massimo otto, e cerca
 * di non avere tutti i momenti dallo stesso ospite.
 */
export const BEST_MOMENTS: ReadonlyArray<string> = [
  "x-5EpW4a0yQ", // Il premio all'errore più grande, Elena Alemanno
  "sf6iapyW5ww", // I valori non si vedono, i comportamenti sì, Elena Alemanno
  "wN0bEE-mlck", // La cultura era già nel catalogo, Elena Alemanno
  "Q8vjrjqGZkY", // Business & People Together, Elena Alemanno
];

type Episode = (typeof PAST_EPISODES)[number];
type Clip = NonNullable<Episode["highlights"]>[number];

export type Moment = {
  clip: Clip;
  episode: Episode;
};

/** Trova un clip per videoId tra tutte le puntate, con la sua puntata. */
export function findMoment(videoId: string): Moment | undefined {
  for (const episode of PAST_EPISODES) {
    const clips: ReadonlyArray<Clip> = episode.highlights ?? [];
    const clip = clips.find((c) => c.videoId === videoId);
    if (clip) return { clip, episode };
  }
  return undefined;
}

/** I momenti migliori risolti: scarta in silenzio le voci che non esistono piu. */
export function getBestMoments(): Moment[] {
  return BEST_MOMENTS.map((id) => findMoment(id)).filter(
    (m): m is Moment => m !== undefined,
  );
}
