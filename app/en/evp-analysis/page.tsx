import type { Metadata } from "next";
import EVPAnalysisPage from "@/components/pages/en/EVPAnalysis";

export const metadata: Metadata = {
  title: "Free EVP Analysis — Discover how your Employee Value Proposition communicates — Venturo",
  description:
    "Analyze for free how your company communicates its Employee Value Proposition. Discover gaps, strengths and improvement opportunities.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/evp-analysis",
    languages: {
      it: "https://venturoconsulting.it/analisi-evp",
      en: "https://venturoconsulting.it/en/evp-analysis",
      "x-default": "https://venturoconsulting.it/analisi-evp",
    },
  },
  openGraph: {
    title: "Free EVP Analysis — Discover how your Employee Value Proposition communicates",
    description:
      "Analyze for free how your company communicates its Employee Value Proposition.",
    url: "https://venturoconsulting.it/en/evp-analysis",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function EVPAnalysis() {
  return <EVPAnalysisPage />;
}
