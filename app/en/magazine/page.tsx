import type { Metadata } from "next";
import MagazineENPage from "@/components/pages/en/Magazine";

export const metadata: Metadata = {
  title: "WHY — Articles on organizational culture and employer branding — Venturo",
  description:
    "Every organization has a why. Articles on employer branding, organizational culture, leadership and internal communication.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/magazine",
    languages: {
      it: "https://venturoconsulting.it/magazine",
      en: "https://venturoconsulting.it/en/magazine",
      "x-default": "https://venturoconsulting.it/magazine",
    },
  },
  openGraph: {
    title: "WHY — Articles on organizational culture and employer branding",
    description:
      "Every organization has a why. Articles on employer branding, organizational culture, leadership and internal communication.",
    url: "https://venturoconsulting.it/en/magazine",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function MagazineEN() {
  return <MagazineENPage />;
}
