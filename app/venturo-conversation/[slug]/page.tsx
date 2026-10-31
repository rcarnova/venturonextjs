import type { Metadata } from "next";
import { notFound } from "next/navigation";

import VenturoConversationEpisode from "@/components/pages/VenturoConversationEpisode";
import { PAST_EPISODES } from "@/lib/venturo-conversation";

const SITE = "https://venturoconsulting.it";

const bySlug = (slug: string) => PAST_EPISODES.find((e) => e.slug === slug);

export function generateStaticParams() {
  return PAST_EPISODES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ep = bySlug(slug);
  if (!ep) return {};

  const url = `${SITE}/venturo-conversation/${ep.slug}`;
  const description =
    ("seoDescription" in ep && ep.seoDescription) ||
    `Venturo Conversation del ${ep.dateLabel}, con ${ep.guest.name}, ${ep.guest.role}. Guarda la registrazione.`;

  return {
    // `absolute` evita il suffisso del template "%s — Venturo" di app/layout.tsx
    // Con il nome del format se ci sta nel risultato di Google, altrimenti solo il titolo
    title: { absolute: `${ep.title} | Venturo Conversation`.length <= 65 ? `${ep.title} | Venturo Conversation` : ep.title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ep.title,
      description,
      url,
      type: "video.other",
      locale: "it_IT",
      // La copertina della puntata e gia 16:9: funziona come anteprima social
      // senza doverne produrre un'altra.
      images: [
        {
          url: `${SITE}${ep.ogImage}`,
          width: ep.image.width,
          height: ep.image.height,
          alt: `${ep.title} — con ${ep.guest.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ep.title,
      description,
      images: [`${SITE}${ep.ogImage}`],
    },
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ep = bySlug(slug);
  if (!ep) notFound();

  return <VenturoConversationEpisode episode={ep} />;
}
