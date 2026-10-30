/**
 * Dati dei casi studio in inglese, senza i componenti: li usano la pagina e
 * l'immagine di anteprima. seoTitle: titolo per Google, più corto.
 */
export type CaseMeta = {
  title: string;
  seoTitle?: string;
  description: string;
  itSlug: string;
};

export const CASES: Record<string, CaseMeta> = {
  "ricehouse": {
    title: "Employer branding for a green tech and circular economy startup",
    seoTitle: "Ricehouse: employer branding for a green tech startup",
    description: "How Ricehouse made its cultural identity visible to attract talent who believe in circular economy and bio-construction.",
    itSlug: "ricehouse",
  },
  "randstad": {
    title: "Randstad employer branding — Visible culture, aligned candidates",
    seoTitle: "Randstad employer branding: visible culture",
    description: "Employer branding campaign that translates Randstad's internal values into concrete messages for the job market.",
    itSlug: "randstad",
  },
  "lely": {
    title: "Tool for managing people without HR experience — Lely",
    description: "Practical framework for Lely technical managers who need to lead teams without specific HR experience.",
    itSlug: "lely",
  },
  "ufficio-pio": {
    title: "Naming that builds culture — Ufficio Pio",
    description: "Strategic naming project for Ufficio Pio: creating shared language for departments and making the beneficiaries' journey recognizable.",
    itSlug: "ufficio-pio",
  },
  "cve": {
    title: "The First Company Town Hall — CVE",
    description: "Design and facilitation of CVE's first Company Town Hall: a historic moment for the organization.",
    itSlug: "cve",
  },
  "findomestic": {
    title: "From institutional language to unified conversation — Findomestic",
    seoTitle: "Findomestic: one language for customer care and social",
    description: "Intensive workshop for Findomestic to unify language between customer service and social media teams.",
    itSlug: "findomestic",
  },
  "randstad-professionals": {
    title: "Brand identity for those who select the best — Randstad Professionals",
    seoTitle: "Randstad Professionals: a brand identity",
    description: "EVP, Talent Personas and employer branding video for Randstad's top management division.",
    itSlug: "randstad-professionals",
  },
  "eupromotions": {
    title: "Identity discovered, not invented — Eu.promotions",
    description: "Brand identity and content strategy for Eu.promotions, an international SME in loyalty & retail marketing.",
    itSlug: "eupromotions",
  },
  "comune-di-vercelli-gender-violence": {
    title: "Toxic — Giving voice to youth on gender violence — Comune di Vercelli",
    seoTitle: "Toxic: giving young people a voice on gender violence",
    description: "Participatory workshop in Vercelli's high schools, collection of testimonies and theatrical reading at the Raccolti Festival.",
    itSlug: "comune-di-vercelli-violenza-di-genere",
  },
  "amc-italia": {
    title: "Organizational transformation starting from office space — AMC Italia",
    seoTitle: "AMC Italia: change that started from the office space",
    description: "12 months of co-design with employees to turn a headquarter relocation into an organizational culture project.",
    itSlug: "amc-italia",
  },
  "mccann-health": {
    title: "Listening and Envisioning for the new office — McCann Health",
    seoTitle: "McCann Health: envisioning for the new office",
    description: "Board interviews, organisation-wide survey and envisioning workshop to define the values the new McCann Health office needed to convey.",
    itSlug: "mccann-health",
  },
};
