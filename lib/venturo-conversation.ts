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
    /** Allineato al titolo attuale su YouTube */
    title: "Motivazione, engagement e cultura, cosa ne pensa una CFO?",
    dateLabel: "20 ottobre 2026",
    guest: {
      name: "Elena Alemanno",
      role: "CFO, Inter IKEA Systems",
    },
    /** Descrizione per Google, entro 160 caratteri */
    seoDescription:
      "Elena Alemanno, CFO di Inter IKEA Systems, su valori, comportamenti, diritto di sbagliare e leadership diffusa. Sintesi e video della prima puntata.",

    /**
     * Sintesi scritta della puntata, dalla trascrizione. "at" e il secondo del
     * video da cui parte il capitolo: diventa un link a YouTube e un momento
     * chiave per Google (Clip nei dati strutturati).
     */
    summary: {
      intro: [
        "Elena Alemanno lavora in IKEA da 36 anni. Ha cominciato nel reparto lampade, scaricando camion con una laurea in economia in tasca. Oggi è CFO di Inter IKEA Systems, la società che detiene il concept IKEA, e guida il business steering del gruppo.",
        "Le abbiamo chiesto cosa vede chi guarda i numeri quando in azienda si parla di motivazione ed engagement. Di solito ne parliamo con le risorse umane. Questa volta volevamo il punto di vista del business.",
      ],
      chapters: [
        {
          at: 540,
          title: "La motivazione è una questione di affinità",
          text: [
            "Per Elena la motivazione nasce quando i valori di una persona e quelli che l'azienda dichiara si somigliano. Allora le decisioni diventano più semplici, anche davanti a situazioni mai viste: la risposta si trova con il gruppo, a partire da valori comuni.",
            "La responsabilità però non è di una parte sola. L'azienda deve dichiarare i valori e poi agirli. La persona deve sapere che cosa è importante per sé, che cosa è disposta ad accettare e che cosa no.",
          ],
          quote: "La responsabilità va da entrambe le parti: l'azienda deve dichiarare i valori, ma deve anche agirli.",
        },
        {
          at: 900,
          title: "La cultura era già nel catalogo",
          text: [
            "Fine anni Ottanta, IKEA arriva in Italia. Elena studia in Bocconi e trova il catalogo nella buca delle lettere: si innamora della semplicità delle linee e dei prezzi. Quando arriva il momento di scegliere tra Fiat, IBM, una banca e quell'azienda sconosciuta, sceglie la quarta.",
            "Quella semplicità l'ha ritrovata dentro, nei valori. IKEA non ha fatto employer branding: ha mandato sé stessa. Quando l'identità è chiara, comunica da sola.",
          ],
          quote: "Quello che l'azienda vendeva l'ho ritrovato anche all'interno, nei valori.",
        },
        {
          at: 1320,
          title: "Da dove vengono i valori",
          text: [
            "La cultura di IKEA viene dallo Småland, dove è nato il fondatore Ingvar Kamprad: campi pieni di sassi da togliere a mano, possibile solo aiutandosi tra vicini. I muretti a secco sono il simbolo della togetherness. Pochi mezzi, quindi attenzione ai costi: nessuno vola in prima classe, CEO e CFO compresi.",
            "Dalla Svezia del dopoguerra arriva anche l'idea che il bello sia per tutti, e un modo di decidere basato sul consenso. È più lento, ammette Elena, ma crea fiducia: nessuno si sente giudicato per quello che dice.",
          ],
          quote: "Quando si passa all'implementazione c'è l'engagement, perché tutti hanno partecipato alla decisione.",
        },
        {
          at: 1800,
          title: "I valori non si vedono, i comportamenti sì",
          text: [
            "La cultura di un'organizzazione è la somma dei valori delle persone che la compongono. Ma i valori sono invisibili: si vedono solo i comportamenti. Quando un comportamento non è coerente con un valore dichiarato, si crea una distonia, e prima o poi qualcuno la nomina.",
            "Per questo la leadership non coincide con il ruolo. Elena non si presenta come la CFO, ma come una persona accessibile, che spiega e cerca di portare chiarezza.",
          ],
          quote: "La cultura è il modo in cui facciamo le cose quando nessuno ci guarda.",
        },
        {
          at: 2400,
          title: "Business & People Together",
          text: [
            "Alla domanda su che cosa la tenga legata all'azienda dopo 36 anni, Elena risponde con la visione: creare una vita migliore per la maggioranza delle persone. E con tre domande che guidano ogni scelta: è buono per i clienti? È buono per le persone che ci lavorano? È buono per il pianeta?",
            "Il tema non è HR o non HR. Business e persone vanno tenuti insieme, e le persone sono anche i fornitori, i clienti e quelli che clienti non lo sono ancora.",
          ],
          quote: "L'azienda siamo noi. Non mi aspetto che siano altri a darmi la motivazione.",
        },
        {
          at: 2550,
          title: "Il diritto di sbagliare",
          text: [
            "Tra i motivi per cui le piace lavorare lì, Elena mette la possibilità di sbagliare. Il mondo va troppo veloce per avere tutte le risposte: bisogna sbagliare in fretta, capire dove, riparare. Funziona solo dove ci si sente al sicuro.",
          ],
          quote: "Lo puoi fare solo se ti prendi la responsabilità e se non sei punito quando sbagli.",
        },
        {
          at: 2670,
          title: "Una leadership di tutti",
          text: [
            "Elena non crede più nei modelli gerarchici: un leader con persone che si limitano a seguirlo è uno spreco. Meglio una responsabilità distribuita, più inclusiva, con più attenzione al benessere delle persone. Senza perdere la performance: a un certo punto si decide, e da lì ognuno risponde della sua parte.",
          ],
          quote: "Avere solo persone che ti seguono è uno spreco.",
        },
        {
          at: 2970,
          title: "Come si tiene viva una cultura",
          text: [
            "Il suo gruppo, circa 80 persone tra Olanda e Svezia, si incontra tre volte l'anno. In ogni incontro c'è una sessione su leadership e valori, e da due anni un premio per l'errore più grande: chi lo racconta spiega che cosa ha imparato, e la discussione continua in piccoli gruppi. Il premio è una borraccia del Museo IKEA.",
            "Quando si notano comportamenti lontani dai valori se ne parla in gruppi di lavoro, senza fare nomi. Il feedback va anche dal gruppo verso il manager. Per i casi seri c'è una Trust Line con una commissione indipendente.",
            "Massimo racconta delle aziende che vogliono scrivere i valori una volta sola, per appenderli e non toccarli per vent'anni. Per Elena la cultura è una palestra: va allenata di continuo.",
          ],
          quote: "Se vivi secondo valori diversi da quelli che dichiari, stai creando un'altra cultura.",
        },
      ],
      takeaways: [
        "L'engagement non si chiede alle persone: si vede quando i comportamenti di chi guida coincidono con i valori dichiarati.",
        "Quando l'identità è chiara, l'employer branding diventa quasi superfluo. IKEA ha mandato sé stessa, ed Elena l'ha riconosciuta.",
        "Un premio all'errore più grande tiene viva la cultura più di qualsiasi manifesto appeso in sala riunioni.",
      ],
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
