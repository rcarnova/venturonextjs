import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "We didn't invent anything";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Principles",
    title: "We didn't invent anything",
  });
}
