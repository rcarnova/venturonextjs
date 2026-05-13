// Shared abstract gradient palette used both on Magazine index cards
// and as the editorial hero band inside each article page.
// Keep in sync between ArticleCard and ArticleLayout / ArticleLayoutEN.

export const COVER_BACKGROUNDS: string[] = [
  // 1 — Magenta / indigo grain mesh
  "radial-gradient(120% 90% at 100% 60%, #FF1F8F 0%, transparent 55%), radial-gradient(90% 80% at 80% 100%, #FF4FA8 0%, transparent 60%), radial-gradient(80% 70% at 20% 30%, #1E3A8A 0%, transparent 60%), radial-gradient(60% 60% at 0% 0%, #0B1020 0%, #050510 100%)",
  // 2 — Sunset prism
  "linear-gradient(135deg, #0B1233 0%, #2A1A5E 25%, #C0185C 55%, #FF6B3D 85%, #FFC15E 100%)",
  // 3 — Monochrome wave
  "radial-gradient(120% 100% at 100% 0%, #1A1A1A 0%, #0A0A0A 60%), repeating-linear-gradient(115deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 6px)",
  // 4 — Fuchsia noir
  "radial-gradient(100% 80% at 0% 100%, #FF006E 0%, transparent 55%), radial-gradient(90% 90% at 100% 0%, #2A0A1F 0%, #0A0A0A 70%)",
  // 5 — Electric teal storm
  "radial-gradient(110% 90% at 0% 0%, #00D4C8 0%, transparent 50%), radial-gradient(90% 80% at 100% 100%, #6B21A8 0%, transparent 60%), linear-gradient(180deg, #0A0F1F 0%, #0A0A1A 100%)",
  // 6 — Ember
  "radial-gradient(120% 100% at 100% 100%, #FF3D00 0%, transparent 55%), radial-gradient(80% 80% at 0% 30%, #7A0F1F 0%, transparent 65%), linear-gradient(180deg, #1A0808 0%, #050202 100%)",
  // 7 — Cobalt grain
  "radial-gradient(100% 90% at 50% 0%, #1E40AF 0%, transparent 60%), radial-gradient(80% 70% at 100% 100%, #FF006E 0%, transparent 55%), linear-gradient(180deg, #050818 0%, #0A0A1A 100%)",
  // 8 — Yellow-fuchsia clash
  "radial-gradient(90% 80% at 100% 0%, #E1FF00 0%, transparent 45%), radial-gradient(110% 90% at 0% 100%, #FF006E 0%, transparent 55%), linear-gradient(135deg, #0F0F0F 0%, #1A0A1A 100%)",
  // 9 — Deep violet aurora
  "radial-gradient(120% 100% at 0% 0%, #4C1D95 0%, transparent 60%), radial-gradient(90% 80% at 100% 60%, #DB2777 0%, transparent 55%), linear-gradient(180deg, #0A051A 0%, #08040F 100%)",
  // 10 — Forest dusk
  "radial-gradient(110% 90% at 100% 0%, #0F766E 0%, transparent 55%), radial-gradient(90% 80% at 0% 100%, #064E3B 0%, transparent 60%), linear-gradient(180deg, #04140F 0%, #020A07 100%)",
  // 11 — Crimson noir
  "radial-gradient(100% 90% at 50% 100%, #B91C1C 0%, transparent 55%), radial-gradient(80% 70% at 0% 0%, #1F0606 0%, transparent 60%), linear-gradient(180deg, #0A0303 0%, #050101 100%)",
  // 12 — Cyan / magenta split
  "linear-gradient(125deg, #0EA5E9 0%, #1E3A8A 40%, #831843 75%, #FF006E 100%)",
  // 13 — Charcoal lines
  "radial-gradient(100% 80% at 30% 30%, #2A2A2A 0%, transparent 60%), repeating-linear-gradient(75deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 8px), linear-gradient(180deg, #0F0F0F 0%, #050505 100%)",
];

// Stable hash from a slug so each article keeps the same gradient
// in the index card and on its own page.
export function gradientForSlug(slug: string): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return COVER_BACKGROUNDS[h % COVER_BACKGROUNDS.length];
}
