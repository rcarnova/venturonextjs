import type { Metadata } from "next";
import IndexENPage from "@/components/pages/en/Index";

export const metadata: Metadata = {
  title: "Venturo — Organizational Culture and Employer Branding",
  description:
    "We make your organization's culture visible. We work on employer branding, internal communication and cultural transformation to attract the right talent.",
  alternates: {
    canonical: "https://venturoconsulting.it/en",
    languages: {
      it: "https://venturoconsulting.it/",
      en: "https://venturoconsulting.it/en",
      "x-default": "https://venturoconsulting.it/",
    },
  },
  openGraph: {
    title: "Venturo — Organizational Culture and Employer Branding",
    description:
      "We make your organization's culture visible. We work on employer branding, internal communication and cultural transformation to attract the right talent.",
    url: "https://venturoconsulting.it/en",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function HomeEN() {
  return <IndexENPage />;
}
