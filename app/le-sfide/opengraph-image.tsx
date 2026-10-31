import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Le situazioni che riconosciamo più spesso.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Le sfide",
    title: "Le situazioni che riconosciamo più spesso.",
  });
}
