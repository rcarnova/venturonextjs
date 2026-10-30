import type { Metadata } from "next";
import LeadingByPurposePage from "@/components/pages/LeadingByPurpose";

export const metadata: Metadata = {
  title: "Leading by Purpose — Percorso di leadership per manager",
  description:
    "Il percorso di team coaching per chi guida persone, dal comitato di direzione ai capi intermedi. Per mettere engagement e senso al centro di come si guidano i team. 6 giornate, 3 sessioni, 2 facilitatori.",
  alternates: {
    canonical: "https://venturoconsulting.it/leading-by-purpose",
  },
  keywords: [
    "percorso leadership",
    "team coaching management",
    "sviluppo leadership HR",
    "engagement dei team",
    "cultura organizzativa leadership",
    "percorso team manageriale",
    "workshop leadership aziendale",
    "middle management",
    "capi intermedi",
    "programma sviluppo manager",
  ],
  openGraph: {
    title: "Leading by Purpose — Percorso di leadership per manager",
    description:
      "Il percorso di team coaching per chi guida persone, a qualsiasi livello: principi condivisi per mettere engagement e senso al centro della guida dei team. Non formazione tradizionale: il gruppo costruisce la propria identità collettiva.",
    url: "https://venturoconsulting.it/leading-by-purpose",
    siteName: "Venturo",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://venturoconsulting.it/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leading by Purpose — Venturo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leading by Purpose — Percorso di leadership per manager",
    description:
      "Team coaching per chi guida persone, dal comitato di direzione ai capi intermedi. Il gruppo costruisce la propria identità collettiva, non riceve contenuti dall'esterno.",
    images: ["https://venturoconsulting.it/og-image.png"],
  },
};

export default function LeadingByPurpose() {
  return <LeadingByPurposePage />;
}
