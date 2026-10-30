import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Conversazioni online su cultura organizzativa, identità, engagement.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Venturo Conversation",
    title: "Conversazioni online su cultura organizzativa, identità, engagement.",
    subtitle: ["Una domanda forte, più punti di vista, nessuna risposta già scritta."],
  });
}
