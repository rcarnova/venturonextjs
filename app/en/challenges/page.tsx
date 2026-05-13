import type { Metadata } from "next";
import ChallengesPage from "@/components/pages/en/Challenges";

export const metadata: Metadata = {
  title: "Organizational culture challenges — Venturo",
  description:
    "Talent retention, ineffective internal communication, gap between external brand and internal culture. Do you recognize any of these situations? Here's how we address them.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/challenges",
    languages: {
      it: "https://venturoconsulting.it/le-sfide",
      en: "https://venturoconsulting.it/en/challenges",
      "x-default": "https://venturoconsulting.it/le-sfide",
    },
  },
  openGraph: {
    title: "Organizational culture challenges — Venturo",
    description:
      "Talent retention, ineffective internal communication, gap between external brand and internal culture. Here's how we address them.",
    url: "https://venturoconsulting.it/en/challenges",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function Challenges() {
  return <ChallengesPage />;
}
