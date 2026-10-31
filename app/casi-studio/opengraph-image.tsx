import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Progetti in cui la cultura è diventata visibile";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Casi studio",
    title: "Progetti in cui la cultura è diventata visibile",
  });
}
