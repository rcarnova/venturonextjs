import { renderOg, ogContentType, ogSize } from "@/lib/og/render";
import { getDoor } from "@/lib/doors";

const door = getDoor("comunicazione-interna");

export const alt = door.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: door.eyebrow, title: door.title });
}
