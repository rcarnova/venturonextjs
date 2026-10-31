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

import JsonLd from "@/components/JsonLd";
import { ARTICLES } from "@/lib/content/articles-en";
import { LOGO_URL, PEOPLE, SITE_URL, WEBSITE_ID, orgRef, personLd } from "@/lib/site";

const COMPONENTS: Record<string, React.ComponentType> = {
  "responsibility-is-claimed": ResponsibilityIsClaimed,
  "values-are-promises": ValuesArePromises,
  "culture-is-never-wrong": CultureIsNeverWrong,
  "ai-listening": AIListening,
  "cost-of-the-unsaid": CostOfTheUnsaid,
  "ai-skills-culture": AISkillsCulture,
  "presence-intentionality": PresenceIntentionality,
  "presence-identity": PresenceIdentity,
  "brand-manual-relic": BrandManualRelic,
  "pay-transparency": PayTransparency,
  "remote-work-as-mirror": RemoteWorkAsMirror,
  "bookish-talents-substance": BookishTalents,
  "declared-vs-lived-identity": DeclaredVsLivedIdentity,
};

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return {};

  const url = `${SITE_URL}/en/magazine/${slug}`;
  const itUrl = `${SITE_URL}/magazine/${article.itSlug}`;

  return {
    title: article.seoTitle ?? article.title,
    description: article.description,
    alternates: {
      canonical: url,
      languages: { it: itUrl, en: url, "x-default": itUrl },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      locale: "en_US",
      alternateLocale: ["it_IT"],
      type: "article",
      publishedTime: article.datePublished,
      authors: [PEOPLE[article.author].name],
    },
  };
}

export default async function ArticlePageEN({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  const Component = COMPONENTS[slug];
  if (!article || !Component) notFound();

  const url = `${SITE_URL}/en/magazine/${slug}`;
  return (
    <>
      <JsonLd
        data={[
          {
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: article.title,
            description: article.description,
            datePublished: article.datePublished,
            dateModified: article.datePublished,
            inLanguage: "en",
            url,
            mainEntityOfPage: url,
            image: `${url}/opengraph-image`,
            author: personLd(article.author),
            publisher: { ...orgRef, logo: { "@type": "ImageObject", url: LOGO_URL } },
            isPartOf: { "@id": WEBSITE_ID },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Venturo", item: `${SITE_URL}/en` },
              { "@type": "ListItem", position: 2, name: "Magazine", item: `${SITE_URL}/en/magazine` },
              { "@type": "ListItem", position: 3, name: article.title, item: url },
            ],
          },
        ]}
      />
      <Component />
    </>
  );
}
