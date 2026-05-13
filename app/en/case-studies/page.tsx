import type { Metadata } from "next";
import CaseStudiesPage from "@/components/pages/en/CaseStudies";

export const metadata: Metadata = {
  title: "Case Studies — Organizational culture and employer branding projects — Venturo",
  description:
    "Employer branding, internal communication, strategic naming, facilitation. Real projects where organizational culture became visible.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/case-studies",
    languages: {
      it: "https://venturoconsulting.it/casi-studio",
      en: "https://venturoconsulting.it/en/case-studies",
      "x-default": "https://venturoconsulting.it/casi-studio",
    },
  },
  openGraph: {
    title: "Case Studies — Organizational culture and employer branding projects",
    description:
      "Employer branding, internal communication, strategic naming, facilitation. Real projects where organizational culture became visible.",
    url: "https://venturoconsulting.it/en/case-studies",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function CaseStudiesEN() {
  return <CaseStudiesPage />;
}
