import type { Metadata } from "next";
import LeSfidePage from "@/components/pages/LeSfide";

export const metadata: Metadata = {
  title: "Le sfide culturali delle organizzazioni — Venturo",
  description:
    "Talenti che se ne vanno, comunicazione interna inefficace, gap tra brand esterno e cultura interna. Riconosci una di queste situazioni? Ecco come le affrontiamo.",
  alternates: {
    canonical: "https://venturoconsulting.it/le-sfide",
    languages: {
      it: "https://venturoconsulting.it/le-sfide",
      en: "https://venturoconsulting.it/en/challenges",
      "x-default": "https://venturoconsulting.it/le-sfide",
    },
  },
  openGraph: {
    title: "Le sfide culturali delle organizzazioni — Venturo",
    description:
      "Talenti che se ne vanno, comunicazione interna inefficace, gap tra brand esterno e cultura interna. Ecco come le affrontiamo.",
    url: "https://venturoconsulting.it/le-sfide",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function LeSfide() {
  return <LeSfidePage />;
}
