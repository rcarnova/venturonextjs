import type { Metadata } from "next";
import IndexPage from "@/components/pages/Index";

export const metadata: Metadata = {
  title: "Venturo — Cultura Organizzativa ed Employer Branding",
  description:
    "Rendiamo visibile la cultura della tua organizzazione. Lavoriamo su employer branding, comunicazione interna e trasformazione culturale per attrarre i talenti giusti.",
  alternates: {
    canonical: "https://venturoconsulting.it/",
    languages: {
      it: "https://venturoconsulting.it/",
      en: "https://venturoconsulting.it/en",
      "x-default": "https://venturoconsulting.it/",
    },
  },
  openGraph: {
    title: "Venturo — Cultura Organizzativa ed Employer Branding",
    description:
      "Rendiamo visibile la cultura della tua organizzazione. Lavoriamo su employer branding, comunicazione interna e trasformazione culturale per attrarre i talenti giusti.",
    url: "https://venturoconsulting.it/",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function Home() {
  return <IndexPage />;
}
