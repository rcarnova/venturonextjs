import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "What does your EVP really communicate?";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Free EVP analysis",
    title: "What does your EVP really communicate?",
  });
}
