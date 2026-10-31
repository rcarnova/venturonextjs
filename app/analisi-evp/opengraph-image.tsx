import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Cosa comunica davvero la vostra EVP?";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Analisi EVP gratuita",
    title: "Cosa comunica davvero la vostra EVP?",
  });
}
