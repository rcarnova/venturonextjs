import { renderOg, ogContentType, ogSize } from "@/lib/og/render";

export const alt = "There is no engagement without identity.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Organizational culture and engagement",
    title: "There is no engagement without identity.",
    subtitle: ["Organizational culture and employee engagement consulting.", "The invisible becomes strategy."],
  });
}
