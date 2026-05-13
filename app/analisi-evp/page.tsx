import type { Metadata } from "next";
import AnalisiEVPPage from "@/components/pages/AnalisiEVP";

export const metadata: Metadata = {
  title: "Analisi EVP gratuita — Scopri come comunica la tua Employee Value Proposition — Venturo",
  description:
    "Analizza gratis come la tua azienda comunica la propria Employee Value Proposition. Scopri gap, punti di forza e opportunità di miglioramento.",
  alternates: {
    canonical: "https://venturoconsulting.it/analisi-evp",
    languages: {
      it: "https://venturoconsulting.it/analisi-evp",
      en: "https://venturoconsulting.it/en/evp-analysis",
      "x-default": "https://venturoconsulting.it/analisi-evp",
    },
  },
  openGraph: {
    title: "Analisi EVP gratuita — Scopri come comunica la tua Employee Value Proposition",
    description:
      "Analizza gratis come la tua azienda comunica la propria Employee Value Proposition. Scopri gap, punti di forza e opportunità.",
    url: "https://venturoconsulting.it/analisi-evp",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function AnalisiEVP() {
  return <AnalisiEVPPage />;
}
