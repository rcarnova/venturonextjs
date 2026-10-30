import type { PersonKey } from "@/lib/site";

/**
 * Dati degli articoli in inglese, senza i componenti: li usano la pagina (metadati e
 * dati strutturati), l'immagine di anteprima e il layout (firma).
 * seoTitle: titolo per Google, entro i limiti del risultato di ricerca.
 * Il titolo creativo resta in pagina e nell'immagine di anteprima.
 */
export type ArticleMeta = {
  title: string;
  seoTitle?: string;
  description: string;
  itSlug: string;
  datePublished: string;
  author: PersonKey;
};

export const ARTICLES: Record<string, ArticleMeta> = {
  "responsibility-is-claimed": {
    title: "Responsibility is claimed. Not delegated.",
    description: "In healthy organizations, people don't wait for someone to assign them responsibility. They demand it.",
    itSlug: "la-responsabilita-non-si-delega",
    datePublished: "2026-03-08",
    author: "rosario",
  },
  "values-are-promises": {
    title: "Values are promises. Not posters.",
    description: "Companies make promises constantly. But as we learned as children: promises must be kept.",
    itSlug: "i-valori-non-sono-poster",
    datePublished: "2026-03-01",
    author: "rosario",
  },
  "culture-is-never-wrong": {
    title: "Culture is never wrong. It's just culture.",
    description: "I've seen many companies give up. Not talking about business. Talking about culture.",
    itSlug: "la-cultura-non-e-mai-sbagliata",
    datePublished: "2026-03-15",
    author: "rosario",
  },
  "ai-listening": {
    title: "AI will give us more listening. But listening is something else.",
    seoTitle: "AI gives us more listening. Listening is something else",
    description: "How new sentiment analysis tools risk repeating the survey error: collecting data without changing anything.",
    itSlug: "ai-ascolto",
    datePublished: "2026-03-22",
    author: "rosario",
  },
  "cost-of-the-unsaid": {
    title: "The cost of the unsaid. Why 70% of employees aren't really there.",
    seoTitle: "The cost of the unsaid and employee engagement",
    description: "Employee disengagement doesn't come from nowhere: it comes from the unsaid that accumulates, layer by layer, until it becomes culture.",
    itSlug: "il-costo-del-non-detto",
    datePublished: "2026-03-29",
    author: "rosario",
  },
  "ai-skills-culture": {
    title: "It's not (just) a skills problem. AI and organizational culture.",
    seoTitle: "AI and organizational culture: not just skills",
    description: "AI projects don't stall in data centers, but in meetings and conversations that don't happen. Adoption is first and foremost a matter of identity.",
    itSlug: "competenze-ai-cultura",
    datePublished: "2026-04-05",
    author: "rosario",
  },
  "presence-intentionality": {
    title: "Closeness comes from intentionality, not technology.",
    description: "It's not remote vs office. It's present vs elsewhere. The quality of attention you bring to a room matters more than where that room is.",
    itSlug: "presenza-intenzionalita",
    datePublished: "2026-04-12",
    author: "rosario",
  },
  "presence-identity": {
    title: "Who is truly present? Identity, leadership and employer branding.",
    seoTitle: "Who is truly present? Identity and employer branding",
    description: "Organizations that don't attract talent don't have a strategy or budget problem: they have a presence problem.",
    itSlug: "presenza-identita",
    datePublished: "2026-04-19",
    author: "rosario",
  },
  "brand-manual-relic": {
    title: "The brand manual is a relic. Identity is culture.",
    description: "A strong identity isn't measured by the thickness of the manual, but by how deeply it has entered into people.",
    itSlug: "brand-manuale-reliquia",
    datePublished: "2026-04-14",
    author: "rosario",
  },
  "pay-transparency": {
    title: "Pay transparency: the mirror companies can no longer avoid.",
    seoTitle: "Pay transparency: the EU directive as a mirror",
    description: "EU Directive 2023/970 isn't just compliance. It's an opportunity to understand how your organization really thinks.",
    itSlug: "trasparenza-salariale",
    datePublished: "2026-04-17",
    author: "rosario",
  },
  "remote-work-as-mirror": {
    title: "Remote work isn't an environmental problem. It's a mirror.",
    seoTitle: "Remote work is a mirror of the organization",
    description: "Banca d'Italia measures the emissions of hybrid work. The result is clear. The interesting question is another: remote doesn't create problems, it reveals them.",
    itSlug: "remote-working-specchio",
    datePublished: "2026-04-21",
    author: "rosario",
  },
  "bookish-talents-substance": {
    title: "Bookish influencers and talent's new hunger for substance.",
    seoTitle: "Bookish influencers and talent's hunger for substance",
    description: "Millennials and Gen Z follow those who read, not those who show off. Talents seek environments where real thinking happens.",
    itSlug: "bookish-talenti-sostanza",
    datePublished: "2026-04-24",
    author: "rosario",
  },
  "declared-vs-lived-identity": {
    title: "Declared identity vs lived identity: the silent short circuit.",
    seoTitle: "Declared vs lived identity: the silent short circuit",
    description: "72% of employees don't understand their company's strategy. It's not a communication problem: it's the gap between declared and lived identity.",
    itSlug: "identita-dichiarata-vissuta",
    datePublished: "2026-04-27",
    author: "rosario",
  },
};
