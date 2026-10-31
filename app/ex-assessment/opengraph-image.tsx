import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Leggere l'organizzazione dall'interno.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "EX Assessment gratuito",
    title: "Leggere l'organizzazione dall'interno.",
  });
}
