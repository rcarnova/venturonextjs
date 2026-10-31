import { renderOg, ogContentType, ogSize } from "@/lib/og/render";
import { CASES } from "@/lib/content/cases-en";

export const alt = "Venturo case study";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const item = CASES[params.slug];
  if (!item) return renderOg({ eyebrow: "Venturo", title: "Non c'è engagement senza identità." });
  return renderOg({ eyebrow: "Case study", title: item.seoTitle ?? item.title });
}
