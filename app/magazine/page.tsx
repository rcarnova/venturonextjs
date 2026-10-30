import type { Metadata } from "next";
import MagazinePage from "@/components/pages/Magazine";

export const metadata: Metadata = {
  title: "Articoli su cultura organizzativa ed engagement",
  description:
    "Articoli su cultura organizzativa, engagement dei dipendenti, leadership, comunicazione interna ed employer branding.",
  alternates: {
    canonical: "https://venturoconsulting.it/magazine",
    languages: {
      it: "https://venturoconsulting.it/magazine",
      en: "https://venturoconsulting.it/en/magazine",
      "x-default": "https://venturoconsulting.it/magazine",
    },
  },
  openGraph: {
    title: "Articoli su cultura organizzativa ed engagement",
    description:
      "Articoli su cultura organizzativa, engagement dei dipendenti, leadership, comunicazione interna ed employer branding.",
    url: "https://venturoconsulting.it/magazine",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function Magazine() {
  return <MagazinePage />;
}
