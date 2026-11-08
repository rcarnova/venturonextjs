import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "What does losing one person really cost?";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Free calculator",
    title: "What does losing one person really cost?",
  });
}
