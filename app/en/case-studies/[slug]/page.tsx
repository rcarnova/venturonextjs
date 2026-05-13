import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RicehouseEN from "@/components/pages/cases-en/Ricehouse";
import RandstadEN from "@/components/pages/cases-en/Randstad";
import LelyEN from "@/components/pages/cases-en/Lely";
import UfficioPioEN from "@/components/pages/cases-en/UfficioPio";
import CVEEN from "@/components/pages/cases-en/CVE";
import FindomesticEN from "@/components/pages/cases-en/Findomestic";
import RandstadProfessionalsEN from "@/components/pages/cases-en/RandstadProfessionals";
import EuPromotionsEN from "@/components/pages/cases-en/EuPromotions";
import ComuneVercelliEN from "@/components/pages/cases-en/ComuneVercelli";

type CaseMeta = {
  title: string;
  description: string;
  itSlug: string;
  Component: React.ComponentType;
};

const cases: Record<string, CaseMeta> = {
  ricehouse: {
    title: "Employer branding for a green tech and circular economy startup — Venturo",
    description: "How Ricehouse made its cultural identity visible to attract talent who believe in circular economy and bio-construction.",
    itSlug: "ricehouse",
    Component: RicehouseEN,
  },
  randstad: {
    title: "Randstad employer branding — Visible culture, aligned candidates — Venturo",
    description: "Employer branding campaign that translates Randstad's internal values into concrete messages for the job market.",
    itSlug: "randstad",
    Component: RandstadEN,
  },
  lely: {
    title: "Tool for managing people without HR experience — Lely — Venturo",
    description: "Practical framework for Lely technical managers who need to lead teams without specific HR experience.",
    itSlug: "lely",
    Component: LelyEN,
  },
  "ufficio-pio": {
    title: "Naming that builds culture — Ufficio Pio — Venturo",
    description: "Strategic naming project for Ufficio Pio: creating shared language for departments and making the beneficiaries' journey recognizable.",
    itSlug: "ufficio-pio",
    Component: UfficioPioEN,
  },
  cve: {
    title: "The First Company Town Hall — CVE — Venturo",
    description: "Design and facilitation of CVE's first Company Town Hall: a historic moment for the organization.",
    itSlug: "cve",
    Component: CVEEN,
  },
  findomestic: {
    title: "From institutional language to unified conversation — Findomestic — Venturo",
    description: "Intensive workshop for Findomestic to unify language between customer service and social media teams.",
    itSlug: "findomestic",
    Component: FindomesticEN,
  },
  "randstad-professionals": {
    title: "Brand identity for those who select the best — Randstad Professionals — Venturo",
    description: "EVP, Talent Personas and employer branding video for Randstad's top management division.",
    itSlug: "randstad-professionals",
    Component: RandstadProfessionalsEN,
  },
  eupromotions: {
    title: "Identity discovered, not invented — Eu.promotions — Venturo",
    description: "Brand identity and content strategy for Eu.promotions, an international SME in loyalty & retail marketing.",
    itSlug: "eupromotions",
    Component: EuPromotionsEN,
  },
  "comune-di-vercelli-gender-violence": {
    title: "Toxic — Giving voice to youth on gender violence — Comune di Vercelli — Venturo",
    description: "Participatory workshop in Vercelli's high schools, collection of testimonies and theatrical reading at the Raccolti Festival.",
    itSlug: "comune-di-vercelli-violenza-di-genere",
    Component: ComuneVercelliEN,
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
      canonical: `https://venturoconsulting.it/en/case-studies/${slug}`,
      languages: {
        it: `https://venturoconsulting.it/casi-studio/${c.itSlug}`,
        en: `https://venturoconsulting.it/en/case-studies/${slug}`,
        "x-default": `https://venturoconsulting.it/casi-studio/${c.itSlug}`,
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `https://venturoconsulting.it/en/case-studies/${slug}`,
      locale: "en_US",
      alternateLocale: ["it_IT"],
    },
  };
}

export default async function CaseStudyPageEN({
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
