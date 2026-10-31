import type { PersonKey } from "@/lib/site";

/**
 * Dati degli articoli, senza i componenti: li usano la pagina (metadati e
 * dati strutturati), l'immagine di anteprima e il layout (firma).
 * seoTitle: titolo per Google, entro i limiti del risultato di ricerca.
 * Il titolo creativo resta in pagina e nell'immagine di anteprima.
 */
export type ArticleMeta = {
  title: string;
  seoTitle?: string;
  description: string;
  enSlug: string;
  datePublished: string;
  author: PersonKey;
};

export const ARTICLES: Record<string, ArticleMeta> = {
  "i-valori-non-si-vedono": {
    title: "I valori non si vedono. I comportamenti sì.",
    seoTitle: "Valori e comportamenti: la lezione di una CFO di IKEA",
    description: "Una CFO di IKEA su engagement, coerenza tra valori e comportamenti e diritto di sbagliare. Cosa ci siamo portati a casa dalla prima Venturo Conversation.",
    enSlug: "values-are-invisible",
    datePublished: "2026-10-31",
    author: "rosario",
  },
  "la-responsabilita-non-si-delega": {
    title: "La responsabilità non si delega. Si conquista.",
    description: "Nelle organizzazioni sane le persone non aspettano che qualcuno assegni loro responsabilità. Le pretendono.",
    enSlug: "responsibility-is-claimed",
    datePublished: "2026-03-08",
    author: "rosario",
  },
  "i-valori-non-sono-poster": {
    title: "I valori non sono poster. Sono promesse.",
    description: "Le aziende fanno promesse continuamente. Ma come ci hanno insegnato da bambini: le promesse vanno mantenute.",
    enSlug: "values-are-promises",
    datePublished: "2026-03-01",
    author: "rosario",
  },
  "la-cultura-non-e-mai-sbagliata": {
    title: "La cultura non è mai sbagliata. È solo cultura.",
    description: "Ho visto molte aziende arrendersi. Non parlo di business. Parlo di cultura.",
    enSlug: "culture-is-never-wrong",
    datePublished: "2026-03-15",
    author: "rosario",
  },
  "ai-ascolto": {
    title: "L'AI ci darà più ascolto. Ma ascolto è un'altra cosa.",
    description: "Come i nuovi strumenti di analisi del sentiment rischiano di ripetere l'errore delle survey: raccogliere dati senza cambiar nulla.",
    enSlug: "ai-listening",
    datePublished: "2026-03-22",
    author: "rosario",
  },
  "il-costo-del-non-detto": {
    title: "Il costo del non detto. Perché il 70% dei dipendenti non c'è davvero.",
    seoTitle: "Il costo del non detto e l'engagement dei dipendenti",
    description: "Il distacco dei dipendenti non nasce dal nulla: nasce dal non detto che si accumula, strato dopo strato, fino a diventare cultura.",
    enSlug: "cost-of-the-unsaid",
    datePublished: "2026-03-29",
    author: "rosario",
  },
  "competenze-ai-cultura": {
    title: "Non è (solo) un problema di competenze. L'AI e la cultura organizzativa.",
    seoTitle: "AI e cultura organizzativa: non solo competenze",
    description: "I progetti AI non si arenano nei datacenter, ma nelle riunioni e nelle conversazioni che non avvengono.",
    enSlug: "ai-skills-culture",
    datePublished: "2026-04-05",
    author: "rosario",
  },
  "presenza-intenzionalita": {
    title: "La vicinanza nasce dall'intenzionalità, non dalla tecnologia.",
    seoTitle: "Lavoro ibrido: la vicinanza nasce dall'intenzionalità",
    description: "Non è remoto vs ufficio. È presenti vs altrove. La qualità dell'attenzione che porti in una stanza vale più di dove quella stanza si trova.",
    enSlug: "presence-intentionality",
    datePublished: "2026-04-12",
    author: "rosario",
  },
  "presenza-identita": {
    title: "Chi è davvero presente? Identità, leadership ed employer branding.",
    seoTitle: "Chi è davvero presente? Identità ed employer branding",
    description: "Le organizzazioni che non attraggono talenti non hanno un problema di strategia o budget: hanno un problema di presenza.",
    enSlug: "presence-identity",
    datePublished: "2026-04-19",
    author: "rosario",
  },
  "brand-manuale-reliquia": {
    title: "Il manuale di brand è una reliquia. L'identità è cultura.",
    seoTitle: "Manuale di brand, una reliquia: l'identità è cultura",
    description: "Un'identità forte non si misura dallo spessore del manuale, ma da quanto profondamente è entrata nelle persone.",
    enSlug: "brand-manual-relic",
    datePublished: "2026-04-14",
    author: "rosario",
  },
  "trasparenza-salariale": {
    title: "Trasparenza salariale: lo specchio che le aziende non possono più evitare.",
    seoTitle: "Trasparenza salariale: la direttiva UE come specchio",
    description: "La Direttiva UE 2023/970 non è solo compliance. È un'occasione per capire come pensa davvero la vostra organizzazione.",
    enSlug: "pay-transparency",
    datePublished: "2026-04-17",
    author: "rosario",
  },
  "remote-working-specchio": {
    title: "Il remote working non è un problema ambientale. È uno specchio.",
    seoTitle: "Il remote working è uno specchio dell'organizzazione",
    description: "La Banca d'Italia misura le emissioni del lavoro ibrido. Il risultato è chiaro. La domanda interessante è un'altra: il remote non crea problemi, li rivela.",
    enSlug: "remote-work-as-mirror",
    datePublished: "2026-04-21",
    author: "rosario",
  },
  "bookish-talenti-sostanza": {
    title: "I bookish influencer e la nuova fame di sostanza dei talenti.",
    seoTitle: "Bookish influencer e talenti: la fame di sostanza",
    description: "Millennial e Gen Z seguono chi legge, non chi mostra. I talenti cercano ambienti in cui si pensa davvero.",
    enSlug: "bookish-talents-substance",
    datePublished: "2026-04-24",
    author: "rosario",
  },
  "la-cultura-batte-i-numeri": {
    title: "La cultura batte i numeri: la lezione di Tim Cook",
    description: "Quindici anni alla guida di Apple rivelano che i risultati straordinari sono una conseguenza della cultura, non il suo obiettivo.",
    enSlug: "culture-beats-numbers",
    datePublished: "2026-09-11",
    author: "rosario",
  },
  "il-motore-e-la-benzina": {
    title: "Il motore e la benzina. Cosa spinge davvero le organizzazioni.",
    seoTitle: "Il motore e la benzina: cosa muove le organizzazioni",
    description: "Ogni azienda investe nel motore: processi, OKR, tool. Ma senza carburante culturale il motore resta fermo, soprattutto alla prima vera salita.",
    enSlug: "engine-and-fuel",
    datePublished: "2026-05-27",
    author: "rosario",
  },
  "linguaggio-opaco-e-competenza": {
    title: "Le buzzword non sono un problema stilistico. Sono un problema cognitivo.",
    seoTitle: "Buzzword aziendali: un problema cognitivo, non di stile",
    description: "Una ricerca di Cornell conferma ciò che molti sentono da anni: chi usa linguaggio aziendale opaco tende a essere meno competente. Non è una questione di stile.",
    enSlug: "corporate-jargon-and-competence",
    datePublished: "2026-05-14",
    author: "rosario",
  },
  "identita-dichiarata-vissuta": {
    title: "L'identità dichiarata e l'identità vissuta: il cortocircuito silenzioso.",
    seoTitle: "Identità dichiarata e identità vissuta in azienda",
    description: "Il 72% dei dipendenti non capisce la strategia della propria azienda. Non è un problema di comunicazione: è la distanza tra identità dichiarata e vissuta.",
    enSlug: "declared-vs-lived-identity",
    datePublished: "2026-04-27",
    author: "rosario",
  },
};
