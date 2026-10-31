import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Privacy Policy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Privacy",
    title: "Privacy Policy",
  });
}
