import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "We don't measure culture. We illuminate it.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Lumen, Venturo's method",
    title: "We don't measure culture. We illuminate it.",
    subtitle: ["Conversations, not surveys."],
  });
}
