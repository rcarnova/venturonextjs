import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Non misuriamo la cultura. La illuminiamo.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Lumen, il metodo di Venturo",
    title: "Non misuriamo la cultura. La illuminiamo.",
    subtitle: ["Conversazioni, non survey."],
  });
}
