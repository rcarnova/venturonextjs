import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "Making an organization's purpose visible isn't always simple.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Challenges",
    title: "Making an organization's purpose visible isn't always simple.",
  });
}
