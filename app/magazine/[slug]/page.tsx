import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ResponsabilitaNonSiDelega from "@/components/pages/magazine/ResponsabilitaNonSiDelega";
import ValoriNonSonoPoster from "@/components/pages/magazine/ValoriNonSonoPoster";
import LaCulturaNonEMaiSbagliata from "@/components/pages/magazine/LaCulturaNonEMaiSbagliata";
import AIAscolto from "@/components/pages/magazine/AIAscolto";
import CostoNonDetto from "@/components/pages/magazine/CostoNonDetto";
import CompetenzeAI from "@/components/pages/magazine/CompetenzeAI";
import PresenzaTerzani from "@/components/pages/magazine/PresenzaTerzani";
import PresenzaIdentita from "@/components/pages/magazine/PresenzaIdentita";
import BrandManualeReliquia from "@/components/pages/magazine/BrandManualeReliquia";
import TrasparenzaSalariale from "@/components/pages/magazine/TrasparenzaSalariale";
import RemoteWorkingSpecchio from "@/components/pages/magazine/RemoteWorkingSpecchio";
import BookishTalenti from "@/components/pages/magazine/BookishTalenti";
import IdentitaDichiarataVissuta from "@/components/pages/magazine/IdentitaDichiarataVissuta";
import LinguaggioOpaco from "@/components/pages/magazine/LinguaggioOpaco";
import MotoreEBenzina from "@/components/pages/magazine/MotoreEBenzina";
import LaCulturaBatteINumeri from "@/components/pages/magazine/LaCulturaBatteINumeri";
import ValoriComportamenti from "@/components/pages/magazine/ValoriComportamenti";

import JsonLd from "@/components/JsonLd";
import { ARTICLES } from "@/lib/content/articles";
import { ARTICLES as ARTICLES_EN } from "@/lib/content/articles-en";
import { LOGO_URL, PEOPLE, SITE_URL, WEBSITE_ID, orgRef, personLd } from "@/lib/site";

const COMPONENTS: Record<string, React.ComponentType> = {
  "i-valori-non-si-vedono": ValoriComportamenti,
  "la-responsabilita-non-si-delega": ResponsabilitaNonSiDelega,
  "i-valori-non-sono-poster": ValoriNonSonoPoster,
  "la-cultura-non-e-mai-sbagliata": LaCulturaNonEMaiSbagliata,
  "ai-ascolto": AIAscolto,
  "il-costo-del-non-detto": CostoNonDetto,
  "competenze-ai-cultura": CompetenzeAI,
  "presenza-intenzionalita": PresenzaTerzani,
  "presenza-identita": PresenzaIdentita,
  "brand-manuale-reliquia": BrandManualeReliquia,
  "trasparenza-salariale": TrasparenzaSalariale,
  "remote-working-specchio": RemoteWorkingSpecchio,
  "bookish-talenti-sostanza": BookishTalenti,
  "la-cultura-batte-i-numeri": LaCulturaBatteINumeri,
  "il-motore-e-la-benzina": MotoreEBenzina,
  "linguaggio-opaco-e-competenza": LinguaggioOpaco,
  "identita-dichiarata-vissuta": IdentitaDichiarataVissuta,
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

  const url = `${SITE_URL}/magazine/${slug}`;
  // L'alternativa inglese solo se l'articolo è tradotto: un hreflang verso
  // una pagina che non esiste è un errore per Google.
  const enUrl = article.enSlug in ARTICLES_EN ? `${SITE_URL}/en/magazine/${article.enSlug}` : undefined;

  return {
    // Su Google il titolo breve, sui social il titolo intero dell'articolo
    title: article.seoTitle ?? article.title,
    description: article.description,
    alternates: {
      canonical: url,
      ...(enUrl && { languages: { it: url, en: enUrl, "x-default": url } }),
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      locale: "it_IT",
      ...(enUrl && { alternateLocale: ["en_US"] }),
      type: "article",
      publishedTime: article.datePublished,
      authors: [PEOPLE[article.author].name],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  const Component = COMPONENTS[slug];
  if (!article || !Component) notFound();

  const url = `${SITE_URL}/magazine/${slug}`;
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
            inLanguage: "it-IT",
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
              { "@type": "ListItem", position: 1, name: "Venturo", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Articoli", item: `${SITE_URL}/magazine` },
              { "@type": "ListItem", position: 3, name: article.title, item: url },
            ],
          },
        ]}
      />
      <Component />
    </>
  );
}
