/**
 * Le tre porte del sito. L'engagement e il centro: ogni porta parte dal
 * problema di chi entra e lo porta li.
 *
 * Le usano il menu "Per chi" (Header), la home (sezione "Da dove partite?")
 * e le pagine /leadership, /comunicazione-interna, /employer-branding.
 * Per ora nessuna persona del team e in primo piano: le pagine presentano
 * Venturo.
 */
import type { DoorSlug } from "@/lib/challenges";

export type Door = {
  slug: DoorSlug;
  /** Voce del menu "Per chi" */
  menuLabel: string;
  /** Riquadro in home: chi siete, in seconda persona plurale */
  homeLabel: string;
  homeText: string;
  /** Pagina. eyebrow = la parola chiave della pagina: sta dentro l'H1, sopra lo slogan. */
  eyebrow: string;
  title: string;
  intro: string[];
  bridgeTitle: string;
  bridge: string[];
  offers: { title: string; text: string; href?: string; external?: boolean; cta?: string }[];
  tool?: {
    eyebrow: string;
    title: string;
    text: string;
    href: string;
    cta: string;
    /** un secondo strumento, in una riga sotto il primo */
    more?: { text: string; href: string; label: string };
  };
  cases?: { title: string; href: string }[];
  /**
   * Momenti di Venturo Conversation che parlano a chi entra da questa porta.
   * videoId = un clip presente negli highlights di PAST_EPISODES.
   */
  moments?: { videoId: string; quote: string; lead: string }[];
  /** Articoli del magazine da leggere (slug in app/magazine/[slug]/page.tsx) */
  readings?: { slug: string; title: string }[];
  /** Nome del servizio per i dati strutturati (schema.org Service) */
  serviceName: string;
  seoTitle: string;
  seoDescription: string;
};

export const DOORS: Door[] = [
  {
    slug: "leadership",
    menuLabel: "Leadership e manager",
    homeLabel: "Se guidate persone",
    homeText:
      "Il clima di un team lo fa chi lo guida. Lavoriamo con i manager, a ogni livello, perché è lì che l'engagement si decide.",
    eyebrow: "Leadership ed engagement dei team",
    serviceName: "Percorsi di leadership ed engagement dei dipendenti",
    title: "Il clima di un team lo fa chi lo guida.",
    intro: [
      "La survey di engagement misura un'azienda intera. Le persone, però, vivono un capo, un team, una giornata. È nel rapporto quotidiano con chi guida che l'engagement cresce o si spegne.",
    ],
    bridgeTitle: "Lavoriamo con i manager, a ogni livello.",
    bridge: [
      "Dal board ai capi intermedi. Non per insegnare un modello di leadership preso da un libro, ma per far emergere i principi che già guidano il loro modo di lavorare, e renderli espliciti, condivisi, agiti.",
      "Quando chi guida sa dove sta andando e perché, le persone smettono di eseguire e iniziano a contribuire.",
    ],
    offers: [
      {
        title: "Leading by Purpose",
        text: "Il percorso di team coaching per chi guida persone. Sei giornate in circa due mesi, due facilitatori, principi che nascono dal gruppo e non da un manuale.",
        href: "/leading-by-purpose",
        cta: "Scopri il percorso",
      },
      {
        title: "Lumen, prima di intervenire",
        text: "Ascoltiamo come le persone vivono i loro team. Nelle organizzazioni grandi partiamo dai numeri, con Ingaze o con una survey su misura, per capire dove il clima si decide.",
        href: "/lumen",
        cta: "Come funziona Lumen",
      },
    ],
    moments: [
      {
        videoId: "sf6iapyW5ww",
        quote: "Io non vedo i tuoi valori, ma vedo i tuoi comportamenti. E quando il comportamento non è coerente con il valore, c'è una distonia.",
        lead: "Per chi guida un team, i valori si giocano nei comportamenti di ogni giorno. È lì che le persone decidono se crederci.",
      },
      {
        videoId: "Q8vjrjqGZkY",
        quote: "Il tema non è HR o non HR. È business and people together.",
        lead: "Detto da una CFO. L'engagement non è un progetto delle risorse umane: è il modo in cui l'azienda fa business.",
      },
    ],
    tool: {
      eyebrow: "Strumento gratuito · EX Assessment",
      title: "Da dove partire?",
      text: "Valutate l'employee experience della vostra organizzazione su quattro aree: cultura, persone, ambiente, journey. In pochi minuti una mappa delle priorità.",
      href: "/ex-assessment",
      cta: "Fai l'EX Assessment",
    },
    readings: [
      { slug: "il-costo-del-non-detto", title: "Il costo del non detto. Perché il 70% dei dipendenti non c'è davvero." },
      { slug: "la-responsabilita-non-si-delega", title: "La responsabilità non si delega. Si conquista." },
      { slug: "i-valori-non-sono-poster", title: "I valori non sono poster. Sono promesse." },
    ],
    seoTitle: "Leadership ed engagement dei team: percorsi per manager",
    seoDescription:
      "Il clima di un team lo fa chi lo guida. Lavoriamo con i manager, dal board ai capi intermedi, per mettere identità e senso al centro della guida dei team.",
  },
  {
    slug: "comunicazione-interna",
    menuLabel: "Comunicazione interna",
    homeLabel: "Se curate la comunicazione interna",
    homeText:
      "Le persone credono a ciò che vedono succedere, non a ciò che leggono. Diamo alla comunicazione una storia in cui riconoscersi.",
    eyebrow: "Comunicazione interna ed engagement",
    serviceName: "Comunicazione interna e coinvolgimento dei dipendenti",
    title: "Le persone credono a ciò che vedono succedere, non a ciò che leggono.",
    intro: [
      "Newsletter, intranet, eventi. I canali ci sono, ma molte persone non li leggono, e chi li legge spesso non ci si riconosce. Non è un problema di canali: manca una storia comune in cui riconoscersi.",
    ],
    bridgeTitle: "Prima cosa vivono le persone. Poi cosa dire.",
    bridge: [
      "Prima di decidere cosa comunicare, facciamo emergere ciò che le persone vivono davvero. Poi diamo a quella storia una forma che arrivi a tutti, anche a chi lavora su turni, in negozio o in strada.",
      "Quando la comunicazione racconta ciò che succede, smette di essere una campagna. E le persone tornano ad ascoltare.",
    ],
    offers: [
      {
        title: "Lumen, per sapere cosa raccontare",
        text: "Ascoltiamo come le persone raccontano l'organizzazione, con le loro parole e le loro metafore. È da lì che nasce cosa dire, e come dirlo.",
        href: "/lumen",
        cta: "Come funziona Lumen",
      },
      {
        title: "Linguaggio, rituali, artefatti",
        text: "Glossari condivisi, tone of voice che nasce da dentro, rituali ridisegnati, oggetti e spazi. I materiali visivi li produce Studio Miller, con standard da agenzia.",
        href: "https://www.studiomiller.it",
        external: true,
        cta: "Il lavoro di Studio Miller",
      },
      {
        title: "Venturo Conversation",
        text: "Ogni due settimane una conversazione pubblica su cultura ed engagement, con ospiti dalle aziende. Il modo più diretto per vedere il nostro metodo in azione.",
        href: "/venturo-conversation",
        cta: "Le puntate",
      },
    ],
    moments: [
      {
        videoId: "x-5EpW4a0yQ",
        quote: "Da due anni abbiamo istituito un premio: si celebra l'errore più grande che hai fatto. È il modo per noi di mantenere viva la cultura.",
        lead: "Un rituale comunica più di cento newsletter. Le persone ricordano ciò che succede davanti a loro, non ciò che ricevono via mail.",
      },
    ],
    readings: [
      { slug: "linguaggio-opaco-e-competenza", title: "Le buzzword non sono un problema stilistico. Sono un problema cognitivo." },
      { slug: "identita-dichiarata-vissuta", title: "L'identità dichiarata e l'identità vissuta: il cortocircuito silenzioso." },
      { slug: "brand-manuale-reliquia", title: "Il manuale di brand è una reliquia. L'identità è cultura." },
    ],
    seoTitle: "Comunicazione interna e coinvolgimento dei dipendenti",
    seoDescription:
      "Comunicazione interna che arriva a tutti, anche a chi non sta alla scrivania. Facciamo emergere la storia comune in cui le persone si riconoscono.",
  },
  {
    slug: "employer-branding",
    menuLabel: "Employer branding",
    homeLabel: "Se dovete attrarre talenti",
    homeText:
      "L'employer branding che regge parte da dentro. Le persone giuste arrivano dove chi lavora sa raccontare com'è lavorare lì.",
    eyebrow: "Employer branding ed engagement",
    serviceName: "Employer branding ed employer value proposition",
    title: "L'employer branding che regge parte da dentro.",
    intro: [
      "I candidati arrivano con aspettative che non corrispondono alla realtà, oppure non arrivano. E chi entra se ne va nei primi mesi, a volte prima della fine del periodo di prova. Il problema raramente è la campagna.",
    ],
    bridgeTitle: "Prima l'identità, poi il racconto.",
    bridge: [
      "Le persone giuste arrivano dove chi è dentro sa raccontare com'è lavorare lì. Per questo, per noi, l'employer branding è una conseguenza dell'engagement.",
      "Prima facciamo emergere l'identità reale dell'organizzazione, poi la rendiamo leggibile dal primo contatto. Così le persone giuste si riconoscono, quelle sbagliate si autoselezionano, e meno persone se ne vanno nei primi mesi.",
    ],
    offers: [
      {
        title: "Una EVP costruita con le persone",
        text: "Proposta di valore, talent personas, contenuti: partono dalla cultura del team, non da un benchmark di settore.",
        href: "/lumen",
        cta: "Come funziona Lumen",
      },
      {
        title: "I dati, con Ingaze",
        text: "Recensioni, sentiment e confronto con i competitor, per capire cosa vedono i candidati prima ancora di entrare.",
        href: "https://ingaze.ai",
        external: true,
        cta: "Ingaze",
      },
      {
        title: "I contenuti, con Studio Miller",
        text: "Video, career page, materiali di selezione. Prodotti con standard da agenzia, a partire da ciò che è emerso.",
        href: "https://www.studiomiller.it",
        external: true,
        cta: "Il lavoro di Studio Miller",
      },
    ],
    tool: {
      eyebrow: "Strumento gratuito · Analisi EVP",
      title: "Cosa vede chi si candida?",
      text: "Incollate la career page o un annuncio. Analizziamo identità, coerenza e profilo motivazionale che la vostra comunicazione attira.",
      href: "/analisi-evp",
      cta: "Analizza la vostra EVP",
      more: {
        text: "E quanto costa ogni persona che se ne va?",
        href: "/simulatore-turnover",
        label: "Simulatore del costo del turnover",
      },
    },
    moments: [
      {
        videoId: "wN0bEE-mlck",
        quote: "Col senno di poi, quello che l'azienda vendeva l'ho ritrovato anche all'interno, nei valori.",
        lead: "IKEA non ha fatto employer branding. Ha mandato sé stessa: il catalogo raccontava la stessa semplicità che si viveva dentro.",
      },
    ],
    cases: [
      { title: "Randstad Professionals: identità di marca per chi seleziona i migliori", href: "/casi-studio/randstad-professionals" },
      { title: "Ricehouse: trovare persone che credono nel tuo perché", href: "/casi-studio/ricehouse" },
      { title: "eu.promotions: identità scoperta, non inventata", href: "/casi-studio/eupromotions" },
    ],
    readings: [
      { slug: "presenza-identita", title: "Chi è davvero presente? Identità, leadership ed employer branding." },
      { slug: "bookish-talenti-sostanza", title: "I bookish influencer e la nuova fame di sostanza dei talenti." },
      { slug: "trasparenza-salariale", title: "Trasparenza salariale: lo specchio che le aziende non possono più evitare." },
    ],
    seoTitle: "Employer branding ed EVP che partono da dentro",
    seoDescription:
      "Le persone giuste arrivano dove chi è dentro sa raccontare com'è lavorare lì. Costruiamo l'employer branding dall'identità reale e dall'engagement interno.",
  },
];

/** Articolo del magazine -> porta a cui rimanda (link "Per approfondire"). */
export const ARTICLE_DOOR: Record<string, DoorSlug> = Object.fromEntries(
  DOORS.flatMap((d) => (d.readings ?? []).map((r) => [r.slug, d.slug])),
) as Record<string, DoorSlug>;

export const getDoor = (slug: DoorSlug): Door => {
  const door = DOORS.find((d) => d.slug === slug);
  if (!door) throw new Error(`Porta sconosciuta: ${slug}`);
  return door;
};
