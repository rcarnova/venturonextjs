import type { Metadata } from "next";
import ExAssessmentPage from "@/components/pages/ExAssessment";

export const metadata: Metadata = {
  title: "EX Assessment — Venturo",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ExAssessment() {
  return <ExAssessmentPage />;
}
