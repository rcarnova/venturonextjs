/**
 * Chi è Venturo, in forma leggibile dai motori di ricerca (schema.org).
 * Un solo posto per nome, persone e profili: lo usano la home, Chi siamo,
 * gli articoli e le pagine porta. Gli @id permettono alle pagine di
 * richiamare la stessa organizzazione e le stesse persone senza ripeterle.
 */

export const SITE_URL = "https://venturoconsulting.it";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/logo.png`;

export type PersonKey = "rosario" | "massimo" | "arianna";

type Person = {
  name: string;
  jobTitle: string;
  linkedin: string;
  /** ancora nella pagina Chi siamo */
  anchor: string;
};

export const PEOPLE: Record<PersonKey, Person> = {
  rosario: {
    name: "Rosario Carnovale",
    jobTitle: "Partner, Coach & Culture Designer",
    linkedin: "https://www.linkedin.com/in/rosariocarnovale/",
    anchor: "rosario-carnovale",
  },
  massimo: {
    name: "Massimo Benedetti",
    jobTitle: "Partner, Storyteller & Facilitator",
    linkedin: "https://www.linkedin.com/in/massimobenedetti/",
    anchor: "massimo-benedetti",
  },
  arianna: {
    name: "Arianna Barisan",
    jobTitle: "Partner, Art Director",
    linkedin: "https://www.linkedin.com/in/arianna-barisan/",
    anchor: "arianna-barisan",
  },
};

export const personId = (key: PersonKey) => `${SITE_URL}/chi-siamo#${PEOPLE[key].anchor}`;

export function personLd(key: PersonKey) {
  const p = PEOPLE[key];
  return {
    "@type": "Person",
    "@id": personId(key),
    name: p.name,
    jobTitle: p.jobTitle,
    url: `${SITE_URL}/chi-siamo`,
    sameAs: [p.linkedin],
    worksFor: { "@id": ORG_ID },
  };
}

export const organizationLd = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Venturo",
  alternateName: "Venturo Consulting",
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
  email: "info@venturoconsulting.it",
  vatID: "IT02662900022",
  description:
    "Boutique di consulenza su cultura organizzativa ed engagement delle persone. Facciamo emergere la cultura reale dell'organizzazione con Lumen, un metodo fatto di conversazioni, non di survey.",
  slogan: "L'invisibile diventa strategia.",
  areaServed: { "@type": "Country", name: "Italia" },
  knowsLanguage: ["it", "en"],
  knowsAbout: [
    "Cultura organizzativa",
    "Engagement dei dipendenti",
    "Leadership",
    "Comunicazione interna",
    "Employer branding",
    "Employee Value Proposition",
  ],
  sameAs: ["https://www.linkedin.com/company/venturo-consulting/"],
  founder: (Object.keys(PEOPLE) as PersonKey[]).map((k) => ({ "@id": personId(k) })),
};

export const websiteLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Venturo",
  alternateName: ["Venturo Consulting", "venturoconsulting.it"],
  url: `${SITE_URL}/`,
  inLanguage: "it-IT",
  publisher: { "@id": ORG_ID },
};

/** Riferimento breve all'organizzazione, per publisher e provider. */
export const orgRef = { "@id": ORG_ID, name: "Venturo", url: `${SITE_URL}/` };
