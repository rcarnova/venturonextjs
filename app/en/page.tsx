import type { Metadata } from "next";
import IndexENPage from "@/components/pages/en/Index";

export const metadata: Metadata = {
  title: "Venturo — Organizational Culture and Employer Branding",
  description:
    "We make your organization's culture visible by involving the people who live it. Employer branding, internal communication and programs that build belonging.",
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
      "We make your organization's culture visible by involving the people who live it. Employer branding, internal communication and programs that build belonging.",
    url: "https://venturoconsulting.it/en",
    siteName: "Venturo",
    locale: "en_US",
    alternateLocale: ["it_IT"],
    type: "website",
    images: [
      {
        url: "https://venturoconsulting.it/og-image.png",
        width: 1200,
        height: 630,
        alt: "Venturo — Organizational Culture and Employer Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venturo — Organizational Culture and Employer Branding",
    description:
      "We make your organization's culture visible by involving the people who live it. Employer branding, internal communication and programs that build belonging.",
    images: ["https://venturoconsulting.it/og-image.png"],
  },
};

export default function HomeEN() {
  return <IndexENPage />;
}
