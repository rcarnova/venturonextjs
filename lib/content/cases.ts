/**
 * Dati dei casi studio, senza i componenti: li usano la pagina e
 * l'immagine di anteprima. seoTitle: titolo per Google, più corto.
 */
export type CaseMeta = {
  title: string;
  seoTitle?: string;
  description: string;
  enSlug: string;
};

export const CASES: Record<string, CaseMeta> = {
  "ricehouse": {
    title: "Employer branding per startup green tech ed economia circolare",
    seoTitle: "Ricehouse: employer branding per una startup green tech",
    description: "Come Ricehouse ha reso visibile la propria identità culturale per attrarre talenti che credono nell'economia circolare e nella bioedilizia.",
    enSlug: "ricehouse",
  },
  "randstad": {
    title: "Employer branding Randstad — Cultura visibile, candidati allineati",
    seoTitle: "Employer branding Randstad: cultura visibile",
    description: "Campagna employer branding che traduce i valori interni di Randstad in messaggi concreti per il mercato del lavoro.",
    enSlug: "randstad",
  },
  "lely": {
    title: "Tool per gestire persone senza esperienza HR — Lely",
    description: "Framework pratico per manager tecnici Lely che devono guidare team senza esperienza HR specifica.",
    enSlug: "lely",
  },
  "ufficio-pio": {
    title: "Naming che fa cultura — Ufficio Pio",
    description: "Progetto di naming strategico per Ufficio Pio: dare linguaggio condiviso ai dipartimenti e rendere riconoscibile il percorso dei beneficiari.",
    enSlug: "ufficio-pio",
  },
  "cve": {
    title: "La Prima Town Hall aziendale — CVE",
    description: "Progettazione e facilitazione della prima Town Hall aziendale di CVE: un momento storico per l'organizzazione.",
    enSlug: "cve",
  },
  "findomestic": {
    title: "Da linguaggio istituzionale a conversazione unificata — Findomestic",
    seoTitle: "Findomestic: una lingua comune tra assistenza e social",
    description: "Workshop intensivo per Findomestic per unificare il linguaggio tra assistenza clienti e team social.",
    enSlug: "findomestic",
  },
  "randstad-professionals": {
    title: "Identità di marca per chi seleziona i migliori — Randstad Professionals",
    seoTitle: "Randstad Professionals: un'identità di marca",
    description: "EVP, Talent Personas e video employer branding per la divisione top management di Randstad.",
    enSlug: "randstad-professionals",
  },
  "eupromotions": {
    title: "Identità scoperta, non inventata — Eu.promotions",
    description: "Brand identity e strategia contenuti per Eu.promotions, PMI internazionale nel loyalty & retail marketing.",
    enSlug: "eupromotions",
  },
  "comune-di-vercelli-violenza-di-genere": {
    title: "Toxic — Dare voce ai ragazzi sulla violenza di genere — Comune di Vercelli",
    seoTitle: "Toxic, la voce dei ragazzi sulla violenza di genere",
    description: "Laboratorio partecipativo nelle scuole superiori di Vercelli, raccolta di testimonianze e reading teatrale al Festival Raccolti.",
    enSlug: "comune-di-vercelli-gender-violence",
  },
  "mccann-health": {
    title: "Ascolto e Envisioning per il nuovo ufficio — McCann Health",
    seoTitle: "McCann Health: envisioning per il nuovo ufficio",
    description: "Interviste al board, survey all'organizzazione e workshop di envisioning per definire i valori che il nuovo ufficio McCann Health doveva trasmettere.",
    enSlug: "mccann-health",
  },
  "amc-italia": {
    title: "Trasformazione organizzativa partita dagli spazi — AMC Italia",
    seoTitle: "AMC Italia: il cambiamento partito dagli spazi",
    description: "12 mesi di co-design con le persone per trasformare un trasferimento di sede in un progetto di cultura organizzativa.",
    enSlug: "amc-italia",
  },
};
