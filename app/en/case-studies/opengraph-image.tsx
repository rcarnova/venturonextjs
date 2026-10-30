import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Projects where culture became visible";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Case studies",
    title: "Projects where culture became visible",
  });
}
