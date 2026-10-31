import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Non ci siamo inventati niente";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Principi",
    title: "Non ci siamo inventati niente",
  });
}
