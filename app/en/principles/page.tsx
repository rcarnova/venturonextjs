import type { Metadata } from "next";
import PrinciplesPage from "@/components/pages/en/Principles";

export const metadata: Metadata = {
  title: "Our principles: how we work",
  description:
    "The principles that guide Venturo's work on organizational culture and employer branding. How we work, what we believe and why.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/principles",
    languages: {
      it: "https://venturoconsulting.it/principi",
      en: "https://venturoconsulting.it/en/principles",
      "x-default": "https://venturoconsulting.it/principi",
    },
  },
  openGraph: {
    title: "Our principles: how we work",
    description:
      "The principles that guide Venturo's work on organizational culture and employer branding.",
    url: "https://venturoconsulting.it/en/principles",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function Principles() {
  return <PrinciplesPage />;
}
