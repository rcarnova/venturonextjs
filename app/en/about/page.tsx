import type { Metadata } from "next";
import AboutPage from "@/components/pages/en/About";

export const metadata: Metadata = {
  title: "About Us — Venturo, organizational culture consulting Italy",
  description:
    "Venturo is founded by professionals with backgrounds in HR, marketing and communication. We work with Italian and international companies to make organizational culture visible.",
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
      "Venturo is founded by professionals with backgrounds in HR, marketing and communication. We make organizational culture visible.",
    url: "https://venturoconsulting.it/en/about",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function About() {
  return <AboutPage />;
}
