import type { Metadata } from "next";
import ExAssessmentPage from "@/components/pages/ExAssessment";

export const metadata: Metadata = {
  title: "EX Assessment gratuito: valuta l'employee experience",
  description:
    "Valuta employee experience ed engagement dei dipendenti su quattro aree: cultura, persone, ambiente, journey. Gratuito, la mappa delle priorità in pochi minuti.",
  alternates: { canonical: "https://venturoconsulting.it/ex-assessment" },
};

export default function ExAssessment() {
  return <ExAssessmentPage />;
}
