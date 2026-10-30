import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Informativa Privacy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Privacy",
    title: "Informativa Privacy",
  });
}
