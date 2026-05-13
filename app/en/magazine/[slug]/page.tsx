import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BrandManualRelic from "@/components/pages/magazine-en/BrandManualRelic";
import PresenceIdentity from "@/components/pages/magazine-en/PresenceIdentity";
import PresenceIntentionality from "@/components/pages/magazine-en/PresenceIntentionality";
import AISkillsCulture from "@/components/pages/magazine-en/AISkillsCulture";
import CostOfTheUnsaid from "@/components/pages/magazine-en/CostOfTheUnsaid";
import AIListening from "@/components/pages/magazine-en/AIListening";
import CultureIsNeverWrong from "@/components/pages/magazine-en/CultureIsNeverWrong";
import ResponsibilityIsClaimed from "@/components/pages/magazine-en/ResponsibilityIsClaimed";
import ValuesArePromises from "@/components/pages/magazine-en/ValuesArePromises";
import BookishTalents from "@/components/pages/magazine-en/BookishTalents";
import DeclaredVsLivedIdentity from "@/components/pages/magazine-en/DeclaredVsLivedIdentity";
import RemoteWorkAsMirror from "@/components/pages/magazine-en/RemoteWorkAsMirror";
import PayTransparency from "@/components/pages/magazine-en/PayTransparency";

type ArticleMeta = {
  title: string;
  description: string;
  itSlug: string;
  datePublished: string;
  Component: React.ComponentType;
};

const articles: Record<string, ArticleMeta> = {
  "responsibility-is-claimed": {
    title: "Responsibility is claimed. Not delegated.",
    description: "In healthy organizations, people don't wait for someone to assign them responsibility. They demand it.",
    itSlug: "la-responsabilita-non-si-delega",
    datePublished: "2026-03-08",
    Component: ResponsibilityIsClaimed,
  },
  "values-are-promises": {
    title: "Values are promises. Not posters.",
    description: "Companies make promises constantly. But as we learned as children: promises must be kept.",
    itSlug: "i-valori-non-sono-poster",
    datePublished: "2026-03-01",
    Component: ValuesArePromises,
  },
  "culture-is-never-wrong": {
    title: "Culture is never wrong. It's just culture.",
    description: "I've seen many companies give up. Not talking about business. Talking about culture.",
    itSlug: "la-cultura-non-e-mai-sbagliata",
    datePublished: "2026-03-15",
    Component: CultureIsNeverWrong,
  },
  "ai-listening": {
    title: "AI will give us more listening. But listening is something else.",
    description: "How new sentiment analysis tools risk repeating the survey error: collecting data without changing anything.",
    itSlug: "ai-ascolto",
    datePublished: "2026-03-22",
    Component: AIListening,
  },
  "cost-of-the-unsaid": {
    title: "The cost of the unsaid. Why 70% of employees aren't really there.",
    description: "Employee disengagement doesn't come from nowhere: it comes from the unsaid that accumulates, layer by layer, until it becomes culture.",
    itSlug: "il-costo-del-non-detto",
    datePublished: "2026-03-29",
    Component: CostOfTheUnsaid,
  },
  "ai-skills-culture": {
    title: "It's not (just) a skills problem. AI and organizational culture.",
    description: "AI projects don't stall in data centers, but in meetings and conversations that don't happen. Adoption is first and foremost a matter of identity.",
    itSlug: "competenze-ai-cultura",
    datePublished: "2026-04-05",
    Component: AISkillsCulture,
  },
  "presence-intentionality": {
    title: "Closeness comes from intentionality, not technology.",
    description: "It's not remote vs office. It's present vs elsewhere. The quality of attention you bring to a room matters more than where that room is.",
    itSlug: "presenza-intenzionalita",
    datePublished: "2026-04-12",
    Component: PresenceIntentionality,
  },
  "presence-identity": {
    title: "Who is truly present? Identity, leadership and employer branding.",
    description: "Organizations that don't attract talent don't have a strategy or budget problem: they have a presence problem.",
    itSlug: "presenza-identita",
    datePublished: "2026-04-19",
    Component: PresenceIdentity,
  },
  "brand-manual-relic": {
    title: "The brand manual is a relic. Identity is culture.",
    description: "A strong identity isn't measured by the thickness of the manual, but by how deeply it has entered into people.",
    itSlug: "brand-manuale-reliquia",
    datePublished: "2026-04-14",
    Component: BrandManualRelic,
  },
  "pay-transparency": {
    title: "Pay transparency: the mirror companies can no longer avoid.",
    description: "EU Directive 2023/970 isn't just compliance. It's an opportunity to understand how your organization really thinks.",
    itSlug: "trasparenza-salariale",
    datePublished: "2026-04-17",
    Component: PayTransparency,
  },
  "remote-work-as-mirror": {
    title: "Remote work isn't an environmental problem. It's a mirror.",
    description: "Banca d'Italia measures the emissions of hybrid work. The result is clear. The interesting question is another: remote doesn't create problems, it reveals them.",
    itSlug: "remote-working-specchio",
    datePublished: "2026-04-21",
    Component: RemoteWorkAsMirror,
  },
  "bookish-talents-substance": {
    title: "Bookish influencers and talent's new hunger for substance.",
    description: "Millennials and Gen Z follow those who read, not those who show off. Talents seek environments where real thinking happens.",
    itSlug: "bookish-talenti-sostanza",
    datePublished: "2026-04-24",
    Component: BookishTalents,
  },
  "declared-vs-lived-identity": {
    title: "Declared identity vs lived identity: the silent short circuit.",
    description: "72% of employees don't understand their company's strategy. It's not a communication problem: it's the distance between what an organization claims to be and what people live every day.",
    itSlug: "identita-dichiarata-vissuta",
    datePublished: "2026-04-27",
    Component: DeclaredVsLivedIdentity,
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://venturoconsulting.it/en/magazine/${slug}`,
      languages: {
        it: `https://venturoconsulting.it/magazine/${article.itSlug}`,
        en: `https://venturoconsulting.it/en/magazine/${slug}`,
        "x-default": `https://venturoconsulting.it/magazine/${article.itSlug}`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://venturoconsulting.it/en/magazine/${slug}`,
      locale: "en_US",
      alternateLocale: ["it_IT"],
      type: "article",
      publishedTime: article.datePublished,
    },
  };
}

export default async function ArticlePageEN({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const { Component } = article;
  return <Component />;
}
