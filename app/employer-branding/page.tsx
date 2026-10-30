import type { Metadata } from "next";
import DoorPage from "@/components/pages/DoorPage";
import { getDoor } from "@/lib/doors";

const door = getDoor("employer-branding");
const url = "https://venturoconsulting.it/employer-branding";

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
  },
};

export default function Page() {
  return <DoorPage slug="employer-branding" />;
}
