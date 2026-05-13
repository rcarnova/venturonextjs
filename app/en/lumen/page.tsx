import type { Metadata } from "next";
import LumenENPage from "@/components/pages/en/Lumen";

export const metadata: Metadata = {
  title: "Lumen — Discover the real values of your organization — Venturo",
  description:
    "Lumen is Venturo's methodology for surfacing an organization's real cultural identity through deep conversations and visual artefacts.",
  alternates: {
    canonical: "https://venturoconsulting.it/en/lumen",
    languages: {
      it: "https://venturoconsulting.it/lumen",
      en: "https://venturoconsulting.it/en/lumen",
      "x-default": "https://venturoconsulting.it/lumen",
    },
  },
  openGraph: {
    title: "Lumen — Discover the real values of your organization",
    description:
      "Lumen is Venturo's methodology for surfacing an organization's real cultural identity through deep conversations and visual artefacts.",
    url: "https://venturoconsulting.it/en/lumen",
    locale: "en_US",
    alternateLocale: ["it_IT"],
  },
};

export default function LumenEN() {
  return <LumenENPage />;
}
