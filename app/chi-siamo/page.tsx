import type { Metadata } from "next";
import ChiSiamoPage from "@/components/pages/ChiSiamo";
import JsonLd from "@/components/JsonLd";
import { ORG_ID, SITE_URL, WEBSITE_ID, personLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi siamo: la boutique di cultura organizzativa",
  description:
    "Tre partner, tre mestieri: coaching, storytelling, art direction. Facciamo emergere la cultura reale delle organizzazioni, perché le persone vi si riconoscano.",
  alternates: {
    canonical: "https://venturoconsulting.it/chi-siamo",
    languages: {
      it: "https://venturoconsulting.it/chi-siamo",
      en: "https://venturoconsulting.it/en/about",
      "x-default": "https://venturoconsulting.it/chi-siamo",
    },
  },
  openGraph: {
    title: "Chi siamo: la boutique di cultura organizzativa",
    description:
      "Tre partner, tre mestieri: coaching, storytelling, art direction. Facciamo emergere la cultura reale delle organizzazioni, perché le persone vi si riconoscano.",
    url: "https://venturoconsulting.it/chi-siamo",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function ChiSiamo() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@type": "AboutPage",
            "@id": `${SITE_URL}/chi-siamo#page`,
            url: `${SITE_URL}/chi-siamo`,
            name: "Chi siamo",
            inLanguage: "it-IT",
            about: { "@id": ORG_ID },
            isPartOf: { "@id": WEBSITE_ID },
          },
          personLd("rosario"),
          personLd("massimo"),
          personLd("arianna"),
        ]}
      />
      <ChiSiamoPage />
    </>
  );
}
