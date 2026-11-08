import type { Metadata } from "next";
import SimulatoreTurnoverPage from "@/components/pages/SimulatoreTurnover";

export const metadata: Metadata = {
  title: "Turnover cost calculator",
  description:
    "What does each person who leaves cost you? Recruiting, vacancy and onboarding in three scenarios, with assumptions you can change.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/turnover-calculator",
    languages: {
      it: "https://venturoconsulting.it/simulatore-turnover",
      en: "https://venturoconsulting.it/en/turnover-calculator",
      "x-default": "https://venturoconsulting.it/simulatore-turnover",
    },
  },
  openGraph: {
    title: "Turnover cost calculator",
    description:
      "What does each person who leaves cost you? Recruiting, vacancy and onboarding in three scenarios, with assumptions you can change.",
    url: "https://venturoconsulting.it/en/turnover-calculator",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function TurnoverCalculator() {
  return <SimulatoreTurnoverPage lang="en" />;
}
