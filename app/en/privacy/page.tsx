import type { Metadata } from "next";
import PrivacyENPage from "@/components/pages/en/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Venturo",
  description:
    "Venturo's privacy policy. How we collect, use and protect your personal data.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/privacy",
    languages: {
      it: "https://venturoconsulting.it/privacy",
      en: "https://venturoconsulting.it/en/privacy",
      "x-default": "https://venturoconsulting.it/privacy",
    },
  },
  openGraph: {
    title: "Privacy Policy — Venturo",
    description:
      "Venturo's privacy policy. How we collect, use and protect your personal data.",
    url: "https://venturoconsulting.it/en/privacy",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function PrivacyEN() {
  return <PrivacyENPage />;
}
