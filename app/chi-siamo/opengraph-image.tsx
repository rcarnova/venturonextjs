import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Le persone si coinvolgono in ciò in cui si riconoscono. Noi lo facciamo emergere.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Chi siamo",
    title: "Le persone si coinvolgono in ciò in cui si riconoscono. Noi lo facciamo emergere.",
    subtitle: ["Rosario Carnovale · Massimo Benedetti · Arianna Barisan"],
  });
}
