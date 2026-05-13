import type { Metadata } from "next";
import ChiSiamoPage from "@/components/pages/ChiSiamo";

export const metadata: Metadata = {
  title: "Chi siamo — Venturo, consulenza cultura organizzativa Italia",
  description:
    "Venturo è fondato da professionisti con background in HR, marketing e comunicazione. Lavoriamo con aziende italiane per rendere visibile la cultura organizzativa.",
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
      "Venturo è fondato da professionisti con background in HR, marketing e comunicazione. Lavoriamo con aziende italiane per rendere visibile la cultura organizzativa.",
    url: "https://venturoconsulting.it/chi-siamo",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function ChiSiamo() {
  return <ChiSiamoPage />;
}
