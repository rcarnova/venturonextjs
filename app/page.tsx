import type { Metadata } from "next";
import IndexPage from "@/components/pages/Index";
import JsonLd from "@/components/JsonLd";
import { organizationLd, websiteLd, personLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Venturo — Cultura organizzativa ed engagement delle persone",
  description:
    "Quando l'engagement dei dipendenti cala, il problema è in una cultura che l'organizzazione non vede. La facciamo emergere con Lumen: conversazioni, non survey.",
  alternates: {
    canonical: "https://venturoconsulting.it/",
    languages: {
      it: "https://venturoconsulting.it/",
      en: "https://venturoconsulting.it/en",
      "x-default": "https://venturoconsulting.it/",
    },
  },
  openGraph: {
    title: "Venturo — Cultura organizzativa ed engagement delle persone",
    description:
      "Quando l'engagement dei dipendenti cala, il problema è in una cultura che l'organizzazione non vede. La facciamo emergere con Lumen: conversazioni, non survey.",
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
        alt: "Venturo — Cultura organizzativa ed engagement delle persone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venturo — Cultura organizzativa ed engagement delle persone",
    description:
      "Quando l'engagement dei dipendenti cala, il problema è in una cultura che l'organizzazione non vede. La facciamo emergere con Lumen: conversazioni, non survey.",
    images: ["https://venturoconsulting.it/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      {/* Chi è Venturo, per Google: nome, logo, persone, profili. Serve anche a
          distinguerci dalle altre aziende che si chiamano Venturo. */}
      <JsonLd data={[organizationLd, websiteLd, personLd("rosario"), personLd("massimo"), personLd("arianna")]} />
      <IndexPage />
    </>
  );
}
