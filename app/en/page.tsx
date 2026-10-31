import type { Metadata } from "next";
import IndexENPage from "@/components/pages/en/Index";

export const metadata: Metadata = {
  // `absolute`: senza il suffisso "— Venturo" del layout (il nome è già in testa)
  title: { absolute: "Venturo — Organizational culture and employee engagement" },
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
    title: "Venturo — Organizational culture and employee engagement",
    description:
      "We make your organization's culture visible by involving the people who live it. Employer branding, internal communication and programs that build belonging.",
    url: "https://venturoconsulting.it/en",
    siteName: "Venturo",
    locale: "en_US",
    alternateLocale: ["it_IT"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venturo — Organizational culture and employee engagement",
    description:
      "We make your organization's culture visible by involving the people who live it. Employer branding, internal communication and programs that build belonging.",
  },
};

export default function HomeEN() {
  return <IndexENPage />;
}
