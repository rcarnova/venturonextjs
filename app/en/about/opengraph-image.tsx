import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "People engage with what they recognize themselves in. We bring it to the surface.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "About us",
    title: "People engage with what they recognize themselves in. We bring it to the surface.",
    subtitle: ["Rosario Carnovale · Massimo Benedetti · Arianna Barisan"],
  });
}
