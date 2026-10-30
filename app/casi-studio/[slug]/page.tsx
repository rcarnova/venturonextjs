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
import AmcItalia from "@/components/pages/cases/AmcItalia";
import McCannHealth from "@/components/pages/cases/McCannHealth";

import { CASES } from "@/lib/content/cases";
import { SITE_URL } from "@/lib/site";

const COMPONENTS: Record<string, React.ComponentType> = {
  "ricehouse": Ricehouse,
  "randstad": Randstad,
  "lely": Lely,
  "ufficio-pio": UfficioPio,
  "cve": CVE,
  "findomestic": Findomestic,
  "randstad-professionals": RandstadProfessionals,
  "eupromotions": EuPromotions,
  "comune-di-vercelli-violenza-di-genere": ComuneVercelli,
  "mccann-health": McCannHealth,
  "amc-italia": AmcItalia,
};

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return {};

  const url = `${SITE_URL}/casi-studio/${slug}`;
  return {
    title: c.seoTitle ?? c.title,
    description: c.description,
    alternates: {
      canonical: url,
      languages: { it: url, en: `${SITE_URL}/en/case-studies/${c.enSlug}`, "x-default": url },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url,
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
  const Component = COMPONENTS[slug];
  if (!CASES[slug] || !Component) notFound();

  return <Component />;
}
