import type { Metadata } from "next";
import LumenPage from "@/components/pages/Lumen";

export const metadata: Metadata = {
  title: "Lumen — Scopri i valori reali della tua organizzazione — Venturo",
  description:
    "Lumen è lo strumento di Venturo per far emergere l'identità culturale reale di un'organizzazione attraverso conversazioni profonde e artefatti visivi.",
  alternates: {
    canonical: "https://venturoconsulting.it/lumen",
    languages: {
      it: "https://venturoconsulting.it/lumen",
      en: "https://venturoconsulting.it/en/lumen",
      "x-default": "https://venturoconsulting.it/lumen",
    },
  },
  openGraph: {
    title: "Lumen — Scopri i valori reali della tua organizzazione — Venturo",
    description:
      "Lumen è lo strumento di Venturo per far emergere l'identità culturale reale di un'organizzazione attraverso conversazioni profonde e artefatti visivi.",
    url: "https://venturoconsulting.it/lumen",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function Lumen() {
  return <LumenPage />;
}
