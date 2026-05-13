import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Venturo",
  description:
    "Informativa sulla privacy di Venturo. Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
  alternates: {
    canonical: "https://venturoconsulting.it/privacy",
    languages: {
      it: "https://venturoconsulting.it/privacy",
      en: "https://venturoconsulting.it/en/privacy",
      "x-default": "https://venturoconsulting.it/privacy",
    },
  },
};

export default function Privacy() {
  return <PrivacyPage />;
}
