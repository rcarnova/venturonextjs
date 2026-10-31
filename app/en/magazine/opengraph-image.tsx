import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Articles on organizational culture and engagement";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Magazine",
    title: "Articles on organizational culture and engagement",
  });
}
