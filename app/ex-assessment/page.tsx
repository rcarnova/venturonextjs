import type { Metadata } from "next";
import ExAssessmentPage from "@/components/pages/ExAssessment";

export const metadata: Metadata = {
  title: "EX Assessment — Misura l'esperienza dei tuoi dipendenti — Venturo",
  description:
    "Strumento di assessment per misurare e migliorare l'Employee Experience nella tua organizzazione. Identifica gap culturali e priorità di intervento.",
  alternates: {
    canonical: "https://venturoconsulting.it/ex-assessment",
    languages: {
      it: "https://venturoconsulting.it/ex-assessment",
      en: "https://venturoconsulting.it/en/evp-analysis",
      "x-default": "https://venturoconsulting.it/ex-assessment",
    },
  },
  openGraph: {
    title: "EX Assessment — Misura l'esperienza dei tuoi dipendenti",
    description:
      "Strumento di assessment per misurare e migliorare l'Employee Experience nella tua organizzazione.",
    url: "https://venturoconsulting.it/ex-assessment",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function ExAssessment() {
  return <ExAssessmentPage />;
}
