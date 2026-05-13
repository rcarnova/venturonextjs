import type { Metadata } from "next";
import CasiStudioPage from "@/components/pages/CasiStudio";

export const metadata: Metadata = {
  title: "Casi studio — Progetti di cultura organizzativa ed employer branding — Venturo",
  description:
    "Employer branding, comunicazione interna, naming strategico, facilitazione. Progetti reali in cui la cultura organizzativa è diventata visibile.",
  alternates: {
    canonical: "https://venturoconsulting.it/casi-studio",
    languages: {
      it: "https://venturoconsulting.it/casi-studio",
      en: "https://venturoconsulting.it/en/case-studies",
      "x-default": "https://venturoconsulting.it/casi-studio",
    },
  },
  openGraph: {
    title: "Casi studio — Progetti di cultura organizzativa ed employer branding",
    description:
      "Employer branding, comunicazione interna, naming strategico, facilitazione. Progetti reali in cui la cultura organizzativa è diventata visibile.",
    url: "https://venturoconsulting.it/casi-studio",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function CasiStudio() {
  return <CasiStudioPage />;
}
