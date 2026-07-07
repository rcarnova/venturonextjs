import type { Metadata } from "next";
import SimulatoreTurnoverPage from "@/components/pages/SimulatoreTurnover";

export const metadata: Metadata = {
  title: "Simulatore costo turnover — Venturo",
  description:
    "Calcola il costo reale del turnover nella tua azienda. Confronta attrition e retention per capire dove conviene investire.",
  alternates: {
    canonical: "https://venturoconsulting.it/simulatore-turnover",
    languages: {
      it: "https://venturoconsulting.it/simulatore-turnover",
      en: "https://venturoconsulting.it/en/turnover-calculator",
      "x-default": "https://venturoconsulting.it/simulatore-turnover",
    },
  },
  openGraph: {
    title: "Simulatore costo turnover — Venturo",
    description:
      "Calcola il costo reale del turnover nella tua azienda. Confronta attrition e retention per capire dove conviene investire.",
    url: "https://venturoconsulting.it/simulatore-turnover",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function SimulatoreTurnover() {
  return <SimulatoreTurnoverPage />;
}
