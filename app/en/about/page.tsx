import type { Metadata } from "next";
import AboutPage from "@/components/pages/en/About";

export const metadata: Metadata = {
  title: "About Us — Venturo, organizational culture consulting Italy",
  description:
    "Venturo is a boutique consultancy on organizational culture and employee engagement. We bring out an organization's real identity, so people can recognize themselves in what they do.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/about",
    languages: {
      it: "https://venturoconsulting.it/chi-siamo",
      en: "https://venturoconsulting.it/en/about",
      "x-default": "https://venturoconsulting.it/chi-siamo",
    },
  },
  openGraph: {
    title: "About Us — Venturo, organizational culture consulting",
    description:
      "Venturo is a boutique consultancy on organizational culture and employee engagement.",
    url: "https://venturoconsulting.it/en/about",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function About() {
  return <AboutPage />;
}
