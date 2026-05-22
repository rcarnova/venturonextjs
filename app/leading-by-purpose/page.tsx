import type { Metadata } from "next";
import LeadingByPurposePage from "@/components/pages/LeadingByPurpose";

export const metadata: Metadata = {
  title: "Leading by Purpose — Percorso di Leadership per il Top Management",
  description:
    "Un percorso di team coaching per il gruppo di leadership. Aiutiamo il top management a costruire una cultura manageriale riconoscibile, capace di ispirare e trattenere i talenti. 6 giornate, 3 sessioni, 2 facilitatori.",
  alternates: {
    canonical: "https://venturoconsulting.it/leading-by-purpose",
  },
  keywords: [
    "percorso leadership",
    "team coaching management",
    "sviluppo leadership HR",
    "coaching top management",
    "cultura organizzativa leadership",
    "percorso team manageriale",
    "workshop leadership aziendale",
    "coaching gruppo dirigenziale",
    "employer branding cultura interna",
    "programma sviluppo manager",
  ],
  openGraph: {
    title: "Leading by Purpose — Percorso di Leadership per il Top Management",
    description:
      "Un percorso di team coaching che aiuta il gruppo di leadership a costruire principi condivisi e una cultura manageriale autentica. Non formazione tradizionale: il gruppo costruisce la propria identità collettiva.",
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
    title: "Leading by Purpose — Percorso di Leadership per il Top Management",
    description:
      "Team coaching per il gruppo di leadership. Il gruppo costruisce la propria identità collettiva — non riceve contenuti dall'esterno.",
    images: ["https://venturoconsulting.it/og-image.png"],
  },
};

export default function LeadingByPurpose() {
  return <LeadingByPurposePage />;
}
