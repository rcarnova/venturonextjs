import type { Metadata } from "next";
import DoorPage from "@/components/pages/DoorPage";
import { getDoor } from "@/lib/doors";

const door = getDoor("comunicazione-interna");
const url = "https://venturoconsulting.it/comunicazione-interna";

export const metadata: Metadata = {
  title: door.seoTitle,
  description: door.seoDescription,
  alternates: { canonical: url },
  openGraph: {
    title: door.seoTitle,
    description: door.seoDescription,
    url,
    siteName: "Venturo",
    locale: "it_IT",
    type: "website",
    images: [{ url: "https://venturoconsulting.it/og-image.png", width: 1200, height: 630, alt: door.seoTitle }],
  },
};

export default function Page() {
  return <DoorPage slug="comunicazione-interna" />;
}
