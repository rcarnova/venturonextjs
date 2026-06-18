// Static map for routes that differ between IT and EN
const staticRouteMap: Record<string, string> = {
  "/": "/en",
  "/le-sfide": "/en/challenges",
  "/casi-studio": "/en/case-studies",
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
  "/magazine/il-motore-e-la-benzina": "/en/magazine",
  "/lumen": "/en/lumen",
  "/principi": "/en/principles",
  "/privacy": "/en/privacy",
  "/analisi-evp": "/en/evp-analysis",
  // Case study with different slug
  "/casi-studio/comune-di-vercelli-violenza-di-genere": "/en/case-studies/comune-di-vercelli-gender-violence",
};

const staticReverseMap: Record<string, string> = {};
for (const [it, en] of Object.entries(staticRouteMap)) {
  staticReverseMap[en] = it;
}

export function getEnRoute(currentPath: string): string {
  if (staticRouteMap[currentPath]) return staticRouteMap[currentPath];
  // Dynamic: /casi-studio/{slug} → /en/case-studies/{slug}
  const caseMatch = currentPath.match(/^\/casi-studio\/(.+)$/);
  if (caseMatch) return `/en/case-studies/${caseMatch[1]}`;
  return "/en";
}

export function getItRoute(currentPath: string): string {
  if (staticReverseMap[currentPath]) return staticReverseMap[currentPath];
  // Dynamic: /en/case-studies/{slug} → /casi-studio/{slug}
  const caseMatch = currentPath.match(/^\/en\/case-studies\/(.+)$/);
  if (caseMatch) return `/casi-studio/${caseMatch[1]}`;
  return "/";
}
