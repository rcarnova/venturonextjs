import type { Metadata } from "next";
import SimulatoreTurnoverPage from "@/components/pages/SimulatoreTurnover";

export const metadata: Metadata = {
  title: "Calcolo del costo del turnover: simulatore gratuito",
  description:
    "Quanto vi costa ogni persona che se ne va? Recruiting, posto scoperto e inserimento in tre scenari, con ipotesi che potete cambiare.",
  alternates: {
    canonical: "https://venturoconsulting.it/simulatore-turnover",
    languages: {
      it: "https://venturoconsulting.it/simulatore-turnover",
      en: "https://venturoconsulting.it/en/turnover-calculator",
      "x-default": "https://venturoconsulting.it/simulatore-turnover",
    },
  },
  openGraph: {
    title: "Simulatore del costo del turnover",
    description:
      "Quanto vi costa ogni persona che se ne va? Recruiting, posto scoperto e inserimento in tre scenari, con ipotesi che potete cambiare.",
    url: "https://venturoconsulting.it/simulatore-turnover",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
};

export default function SimulatoreTurnover() {
  return <SimulatoreTurnoverPage />;
}
