import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Ricehouse from "@/components/pages/cases/Ricehouse";
import Randstad from "@/components/pages/cases/Randstad";
import Lely from "@/components/pages/cases/Lely";
import UfficioPio from "@/components/pages/cases/UfficioPio";
import CVE from "@/components/pages/cases/CVE";
import Findomestic from "@/components/pages/cases/Findomestic";
import RandstadProfessionals from "@/components/pages/cases/RandstadProfessionals";
import EuPromotions from "@/components/pages/cases/EuPromotions";
import ComuneVercelli from "@/components/pages/cases/ComuneVercelli";

type CaseMeta = {
  title: string;
  description: string;
  enSlug: string;
  Component: React.ComponentType;
};

const cases: Record<string, CaseMeta> = {
  ricehouse: {
    title: "Employer branding per startup green tech ed economia circolare — Venturo",
    description: "Come Ricehouse ha reso visibile la propria identità culturale per attrarre talenti che credono nell'economia circolare e nella bioedilizia.",
    enSlug: "ricehouse",
    Component: Ricehouse,
  },
  randstad: {
    title: "Employer branding Randstad — Cultura visibile, candidati allineati — Venturo",
    description: "Campagna employer branding che traduce i valori interni di Randstad in messaggi concreti per il mercato del lavoro.",
    enSlug: "randstad",
    Component: Randstad,
  },
  lely: {
    title: "Tool per gestire persone senza esperienza HR — Lely — Venturo",
    description: "Framework pratico per manager tecnici Lely che devono guidare team senza esperienza HR specifica.",
    enSlug: "lely",
    Component: Lely,
  },
  "ufficio-pio": {
    title: "Naming che fa cultura — Ufficio Pio — Venturo",
    description: "Progetto di naming strategico per Ufficio Pio: dare linguaggio condiviso ai dipartimenti e rendere riconoscibile il percorso dei beneficiari.",
    enSlug: "ufficio-pio",
    Component: UfficioPio,
  },
  cve: {
    title: "La Prima Town Hall aziendale — CVE — Venturo",
    description: "Progettazione e facilitazione della prima Town Hall aziendale di CVE: un momento storico per l'organizzazione.",
    enSlug: "cve",
    Component: CVE,
  },
  findomestic: {
    title: "Da linguaggio istituzionale a conversazione unificata — Findomestic — Venturo",
    description: "Workshop intensivo per Findomestic per unificare il linguaggio tra assistenza clienti e team social.",
    enSlug: "findomestic",
    Component: Findomestic,
  },
  "randstad-professionals": {
    title: "Identità di marca per chi seleziona i migliori — Randstad Professionals — Venturo",
    description: "EVP, Talent Personas e video employer branding per la divisione top management di Randstad.",
    enSlug: "randstad-professionals",
    Component: RandstadProfessionals,
  },
  eupromotions: {
    title: "Identità scoperta, non inventata — Eu.promotions — Venturo",
    description: "Brand identity e strategia contenuti per Eu.promotions, PMI internazionale nel loyalty & retail marketing.",
    enSlug: "eupromotions",
    Component: EuPromotions,
  },
  "comune-di-vercelli-violenza-di-genere": {
    title: "Toxic — Dare voce ai ragazzi sulla violenza di genere — Comune di Vercelli — Venturo",
    description: "Laboratorio partecipativo nelle scuole superiori di Vercelli, raccolta di testimonianze e reading teatrale al Festival Raccolti.",
    enSlug: "comune-di-vercelli-gender-violence",
    Component: ComuneVercelli,
  },
};

export function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) return {};

  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `https://venturoconsulting.it/casi-studio/${slug}`,
      languages: {
        it: `https://venturoconsulting.it/casi-studio/${slug}`,
        en: `https://venturoconsulting.it/en/case-studies/${c.enSlug}`,
        "x-default": `https://venturoconsulting.it/casi-studio/${slug}`,
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `https://venturoconsulting.it/casi-studio/${slug}`,
      locale: "it_IT",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = cases[slug];
  if (!caseData) notFound();

  const { Component } = caseData;
  return <Component />;
}
