import type { Metadata } from "next";
import MagazinePage from "@/components/pages/Magazine";

export const metadata: Metadata = {
  title: "WHY — Articoli su cultura organizzativa ed employer branding — Venturo",
  description:
    "Ogni organizzazione ha un perché. Articoli su employer branding, cultura organizzativa, leadership e comunicazione interna.",
  alternates: {
    canonical: "https://venturoconsulting.it/magazine",
    languages: {
      it: "https://venturoconsulting.it/magazine",
      en: "https://venturoconsulting.it/en/magazine",
      "x-default": "https://venturoconsulting.it/magazine",
    },
  },
  openGraph: {
    title: "WHY — Articoli su cultura organizzativa ed employer branding",
    description:
      "Ogni organizzazione ha un perché. Articoli su employer branding, cultura organizzativa, leadership e comunicazione interna.",
    url: "https://venturoconsulting.it/magazine",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function Magazine() {
  return <MagazinePage />;
}
