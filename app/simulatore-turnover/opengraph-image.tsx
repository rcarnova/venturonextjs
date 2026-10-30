import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Quanto costa davvero perdere una persona?";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Simulatore gratuito",
    title: "Quanto costa davvero perdere una persona?",
  });
}
