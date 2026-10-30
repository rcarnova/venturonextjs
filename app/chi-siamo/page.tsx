import type { Metadata } from "next";
import ChiSiamoPage from "@/components/pages/ChiSiamo";

export const metadata: Metadata = {
  title: "Chi siamo — Venturo, consulenza cultura organizzativa Italia",
  description:
    "Venturo è una boutique di consulenza su cultura organizzativa ed engagement delle persone. Facciamo emergere l'identità reale dell'organizzazione, perché le persone possano riconoscersi in ciò che fanno.",
  alternates: {
    canonical: "https://venturoconsulting.it/chi-siamo",
    languages: {
      it: "https://venturoconsulting.it/chi-siamo",
      en: "https://venturoconsulting.it/en/about",
      "x-default": "https://venturoconsulting.it/chi-siamo",
    },
  },
  openGraph: {
    title: "Chi siamo — Venturo, consulenza cultura organizzativa Italia",
    description:
      "Venturo è una boutique di consulenza su cultura organizzativa ed engagement delle persone. Facciamo emergere l'identità reale dell'organizzazione, perché le persone possano riconoscersi in ciò che fanno.",
    url: "https://venturoconsulting.it/chi-siamo",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function ChiSiamo() {
  return <ChiSiamoPage />;
}
