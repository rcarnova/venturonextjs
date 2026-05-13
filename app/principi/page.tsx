import type { Metadata } from "next";
import PrincipiPage from "@/components/pages/Principi";

export const metadata: Metadata = {
  title: "I principi di Venturo — Come lavoriamo — Venturo",
  description:
    "I principi che guidano il lavoro di Venturo sulla cultura organizzativa e l'employer branding. Come lavoriamo, cosa crediamo e perché.",
  alternates: {
    canonical: "https://venturoconsulting.it/principi",
    languages: {
      it: "https://venturoconsulting.it/principi",
      en: "https://venturoconsulting.it/en/principles",
      "x-default": "https://venturoconsulting.it/principi",
    },
  },
  openGraph: {
    title: "I principi di Venturo — Come lavoriamo",
    description:
      "I principi che guidano il lavoro di Venturo sulla cultura organizzativa e l'employer branding.",
    url: "https://venturoconsulting.it/principi",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function Principi() {
  return <PrincipiPage />;
}
