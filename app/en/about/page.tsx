import type { Metadata } from "next";
import AboutPage from "@/components/pages/en/About";

export const metadata: Metadata = {
  title: "About us: an organizational culture boutique",
  description:
    "Three partners, three crafts: coaching, storytelling, art direction. We bring out an organization's real culture, so people can recognize themselves in it.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/about",
    languages: {
      it: "https://venturoconsulting.it/chi-siamo",
      en: "https://venturoconsulting.it/en/about",
      "x-default": "https://venturoconsulting.it/chi-siamo",
    },
  },
  openGraph: {
    title: "About us: an organizational culture boutique",
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
