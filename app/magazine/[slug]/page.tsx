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

type ArticleMeta = {
  title: string;
  description: string;
  enSlug: string;
  datePublished: string;
  Component: React.ComponentType;
};

const articles: Record<string, ArticleMeta> = {
  "la-responsabilita-non-si-delega": {
    title: "La responsabilità non si delega. Si conquista.",
    description: "Nelle organizzazioni sane le persone non aspettano che qualcuno assegni loro responsabilità. Le pretendono.",
    enSlug: "responsibility-is-claimed",
    datePublished: "2026-03-08",
    Component: ResponsabilitaNonSiDelega,
  },
  "i-valori-non-sono-poster": {
    title: "I valori non sono poster. Sono promesse.",
    description: "Le aziende fanno promesse continuamente. Ma come ci hanno insegnato da bambini: le promesse vanno mantenute.",
    enSlug: "values-are-promises",
    datePublished: "2026-03-01",
    Component: ValoriNonSonoPoster,
  },
  "la-cultura-non-e-mai-sbagliata": {
    title: "La cultura non è mai sbagliata. È solo cultura.",
    description: "Ho visto molte aziende arrendersi. Non parlo di business. Parlo di cultura.",
    enSlug: "culture-is-never-wrong",
    datePublished: "2026-03-15",
    Component: LaCulturaNonEMaiSbagliata,
  },
  "ai-ascolto": {
    title: "L'AI ci darà più ascolto. Ma ascolto è un'altra cosa.",
    description: "Come i nuovi strumenti di analisi del sentiment rischiano di ripetere l'errore delle survey: raccogliere dati senza cambiar nulla.",
    enSlug: "ai-listening",
    datePublished: "2026-03-22",
    Component: AIAscolto,
  },
  "il-costo-del-non-detto": {
    title: "Il costo del non detto. Perché il 70% dei dipendenti non c'è davvero.",
    description: "Il distacco dei dipendenti non nasce dal nulla: nasce dal non detto che si accumula, strato dopo strato, fino a diventare cultura.",
    enSlug: "cost-of-the-unsaid",
    datePublished: "2026-03-29",
    Component: CostoNonDetto,
  },
  "competenze-ai-cultura": {
    title: "Non è (solo) un problema di competenze. L'AI e la cultura organizzativa.",
    description: "I progetti AI non si arenano nei datacenter, ma nelle riunioni e nelle conversazioni che non avvengono.",
    enSlug: "ai-skills-culture",
    datePublished: "2026-04-05",
    Component: CompetenzeAI,
  },
  "presenza-intenzionalita": {
    title: "La vicinanza nasce dall'intenzionalità, non dalla tecnologia.",
    description: "Non è remoto vs ufficio. È presenti vs altrove. La qualità dell'attenzione che porti in una stanza vale più di dove quella stanza si trova.",
    enSlug: "presence-intentionality",
    datePublished: "2026-04-12",
    Component: PresenzaTerzani,
  },
  "presenza-identita": {
    title: "Chi è davvero presente? Identità, leadership ed employer branding.",
    description: "Le organizzazioni che non attraggono talenti non hanno un problema di strategia o budget: hanno un problema di presenza.",
    enSlug: "presence-identity",
    datePublished: "2026-04-19",
    Component: PresenzaIdentita,
  },
  "brand-manuale-reliquia": {
    title: "Il manuale di brand è una reliquia. L'identità è cultura.",
    description: "Un'identità forte non si misura dallo spessore del manuale, ma da quanto profondamente è entrata nelle persone.",
    enSlug: "brand-manual-relic",
    datePublished: "2026-04-14",
    Component: BrandManualeReliquia,
  },
  "trasparenza-salariale": {
    title: "Trasparenza salariale: lo specchio che le aziende non possono più evitare.",
    description: "La Direttiva UE 2023/970 non è solo compliance. È un'occasione per capire come pensa davvero la vostra organizzazione.",
    enSlug: "pay-transparency",
    datePublished: "2026-04-17",
    Component: TrasparenzaSalariale,
  },
  "remote-working-specchio": {
    title: "Il remote working non è un problema ambientale. È uno specchio.",
    description: "La Banca d'Italia misura le emissioni del lavoro ibrido. Il risultato è chiaro. La domanda interessante è un'altra: il remote non crea problemi, li rivela.",
    enSlug: "remote-work-as-mirror",
    datePublished: "2026-04-21",
    Component: RemoteWorkingSpecchio,
  },
  "bookish-talenti-sostanza": {
    title: "I bookish influencer e la nuova fame di sostanza dei talenti.",
    description: "Millennial e Gen Z seguono chi legge, non chi mostra. I talenti cercano ambienti in cui si pensa davvero.",
    enSlug: "bookish-talents-substance",
    datePublished: "2026-04-24",
    Component: BookishTalenti,
  },
  "linguaggio-opaco-e-competenza": {
    title: "Le buzzword non sono un problema stilistico. Sono un problema cognitivo.",
    description: "Una ricerca di Cornell conferma ciò che chi lavora nelle organizzazioni sente da anni: chi usa linguaggio aziendale opaco tende ad essere meno competente. Il problema non è stilistico.",
    enSlug: "corporate-jargon-and-competence",
    datePublished: "2026-05-14",
    Component: LinguaggioOpaco,
  },
  "identita-dichiarata-vissuta": {
    title: "L'identità dichiarata e l'identità vissuta: il cortocircuito silenzioso.",
    description: "Il 72% dei dipendenti non capisce la strategia della propria azienda. Non è un problema di comunicazione: è la distanza tra ciò che un'organizzazione dichiara di essere e ciò che le persone vivono ogni giorno.",
    enSlug: "declared-vs-lived-identity",
    datePublished: "2026-04-27",
    Component: IdentitaDichiarataVissuta,
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
      canonical: `https://venturoconsulting.it/magazine/${slug}`,
      languages: {
        it: `https://venturoconsulting.it/magazine/${slug}`,
        en: `https://venturoconsulting.it/en/magazine/${article.enSlug}`,
        "x-default": `https://venturoconsulting.it/magazine/${slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://venturoconsulting.it/magazine/${slug}`,
      locale: "it_IT",
      alternateLocale: ["en_US"],
      type: "article",
      publishedTime: article.datePublished,
    },
  };
}

export default async function ArticlePage({
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
