import type { Metadata } from "next";
import IndexPage from "@/components/pages/Index";

export const metadata: Metadata = {
  title: "Venturo — Cultura Organizzativa ed Employer Branding",
  description:
    "Rendiamo visibile la cultura della tua organizzazione coinvolgendo chi la vive. Employer branding, comunicazione interna e percorsi che generano appartenenza.",
  alternates: {
    canonical: "https://venturoconsulting.it/",
    languages: {
      it: "https://venturoconsulting.it/",
      en: "https://venturoconsulting.it/en",
      "x-default": "https://venturoconsulting.it/",
    },
  },
  openGraph: {
    title: "Venturo — Cultura Organizzativa ed Employer Branding",
    description:
      "Rendiamo visibile la cultura della tua organizzazione coinvolgendo chi la vive. Employer branding, comunicazione interna e percorsi che generano appartenenza.",
    url: "https://venturoconsulting.it/",
    siteName: "Venturo",
    locale: "it_IT",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://venturoconsulting.it/og-image.png",
        width: 1200,
        height: 630,
        alt: "Venturo — Cultura Organizzativa ed Employer Branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venturo — Cultura Organizzativa ed Employer Branding",
    description:
      "Rendiamo visibile la cultura della tua organizzazione coinvolgendo chi la vive. Employer branding, comunicazione interna e percorsi che generano appartenenza.",
    images: ["https://venturoconsulting.it/og-image.png"],
  },
};

export default function Home() {
  return <IndexPage />;
}
