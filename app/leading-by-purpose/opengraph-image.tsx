import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Leading by Purpose";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Percorso per manager · Team coaching",
    title: "Leading by Purpose",
    subtitle: ["Il percorso per chi guida persone, dal board ai capi intermedi.", "Engagement e senso al centro di come si guidano i team."],
  });
}
