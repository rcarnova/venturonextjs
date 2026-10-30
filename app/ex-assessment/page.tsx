import type { Metadata } from "next";
import ExAssessmentPage from "@/components/pages/ExAssessment";

export const metadata: Metadata = {
  title: "EX Assessment gratuito: valuta l'employee experience",
  description:
    "Valuta l'employee experience e l'engagement dei dipendenti su quattro aree: cultura, persone, ambiente, journey. Strumento gratuito, mappa delle priorità in pochi minuti.",
  alternates: { canonical: "https://venturoconsulting.it/ex-assessment" },
};

export default function ExAssessment() {
  return <ExAssessmentPage />;
}
