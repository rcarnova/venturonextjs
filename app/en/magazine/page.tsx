import type { Metadata } from "next";
import MagazineENPage from "@/components/pages/en/Magazine";

export const metadata: Metadata = {
  title: "Articles on organizational culture and engagement",
  description:
    "Articles on organizational culture, employee engagement, leadership, internal communication and employer branding.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/magazine",
    languages: {
      it: "https://venturoconsulting.it/magazine",
      en: "https://venturoconsulting.it/en/magazine",
      "x-default": "https://venturoconsulting.it/magazine",
    },
  },
  openGraph: {
    title: "Articles on organizational culture and engagement",
    description:
      "Articles on organizational culture, employee engagement, leadership, internal communication and employer branding.",
    url: "https://venturoconsulting.it/en/magazine",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function MagazineEN() {
  return <MagazineENPage />;
}
