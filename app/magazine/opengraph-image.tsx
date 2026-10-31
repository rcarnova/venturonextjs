import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Articoli su cultura organizzativa ed engagement";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Articoli",
    title: "Articoli su cultura organizzativa ed engagement",
  });
}
