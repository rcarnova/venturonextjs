import { renderOg, ogContentType, ogSize } from "@/lib/og/render";
import { ARTICLES } from "@/lib/content/articles-en";
import { PEOPLE } from "@/lib/site";

export const alt = "Venturo article on organizational culture and engagement";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const item = ARTICLES[params.slug];
  if (!item) return renderOg({ eyebrow: "Venturo", title: "Non c'è engagement senza identità." });
  return renderOg({ eyebrow: `Magazine · ${PEOPLE[item.author].name}`, title: item.title });
}
