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
import AmcItaliaEN from "@/components/pages/cases-en/AmcItalia";
import McCannHealthEN from "@/components/pages/cases-en/McCannHealth";

import { CASES } from "@/lib/content/cases-en";
import { SITE_URL } from "@/lib/site";

const COMPONENTS: Record<string, React.ComponentType> = {
  "ricehouse": RicehouseEN,
  "randstad": RandstadEN,
  "lely": LelyEN,
  "ufficio-pio": UfficioPioEN,
  "cve": CVEEN,
  "findomestic": FindomesticEN,
  "randstad-professionals": RandstadProfessionalsEN,
  "eupromotions": EuPromotionsEN,
  "comune-di-vercelli-gender-violence": ComuneVercelliEN,
  "amc-italia": AmcItaliaEN,
  "mccann-health": McCannHealthEN,
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

  const url = `${SITE_URL}/en/case-studies/${slug}`;
  return {
    title: c.seoTitle ?? c.title,
    description: c.description,
    alternates: {
      canonical: url,
      languages: { it: `${SITE_URL}/casi-studio/${c.itSlug}`, en: url, "x-default": `${SITE_URL}/casi-studio/${c.itSlug}` },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url,
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
  const Component = COMPONENTS[slug];
  if (!CASES[slug] || !Component) notFound();

  return <Component />;
}
