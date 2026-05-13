const routeMap: Record<string, string> = {
  "/": "/en",
  "/le-sfide": "/en/challenges",
  "/casi-studio": "/en/case-studies",
  "/casi-studio/randstad": "/en/case-studies/randstad",
  "/casi-studio/randstad-professionals": "/en/case-studies/randstad-professionals",
  "/casi-studio/ricehouse": "/en/case-studies/ricehouse",
  "/casi-studio/lely": "/en/case-studies/lely",
  "/casi-studio/cve": "/en/case-studies/cve",
  "/casi-studio/findomestic": "/en/case-studies/findomestic",
  "/casi-studio/ufficio-pio": "/en/case-studies/ufficio-pio",
  "/casi-studio/eupromotions": "/en/case-studies/eupromotions",
  "/casi-studio/comune-di-vercelli-violenza-di-genere": "/en/case-studies/comune-di-vercelli-gender-violence",
  "/chi-siamo": "/en/about",
  "/magazine": "/en/magazine",
  "/magazine/brand-manuale-reliquia": "/en/magazine/brand-manual-relic",
  "/magazine/presenza-identita": "/en/magazine/presence-identity",
  "/magazine/presenza-intenzionalita": "/en/magazine/presence-intentionality",
  "/magazine/competenze-ai-cultura": "/en/magazine/ai-skills-culture",
  "/magazine/il-costo-del-non-detto": "/en/magazine/cost-of-the-unsaid",
  "/magazine/ai-ascolto": "/en/magazine/ai-listening",
  "/magazine/la-cultura-non-e-mai-sbagliata": "/en/magazine/culture-is-never-wrong",
  "/magazine/la-responsabilita-non-si-delega": "/en/magazine/responsibility-is-claimed",
  "/magazine/i-valori-non-sono-poster": "/en/magazine/values-are-promises",
  "/magazine/identita-dichiarata-vissuta": "/en/magazine/declared-vs-lived-identity",
  "/magazine/remote-working-specchio": "/en/magazine/remote-work-as-mirror",
  "/magazine/trasparenza-salariale": "/en/magazine/pay-transparency",
  "/magazine/bookish-talenti-sostanza": "/en/magazine/bookish-talents-substance",
  "/lumen": "/en/lumen",
  "/principi": "/en/principles",
  "/privacy": "/en/privacy",
  "/analisi-evp": "/en/evp-analysis",
};

// Build reverse map (skip identity mappings)
const reverseMap: Record<string, string> = {};
for (const [it, en] of Object.entries(routeMap)) {
  if (it !== en) {
    reverseMap[en] = it;
  }
}

export function getItRoute(currentPath: string): string {
  return reverseMap[currentPath] || "/";
}

export function getEnRoute(currentPath: string): string {
  return routeMap[currentPath] || "/en";
}
