import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Quanto costa perdere un talento in azienda";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Guida gratuita",
    title: "Quanto costa perdere un talento in azienda.",
  });
}
