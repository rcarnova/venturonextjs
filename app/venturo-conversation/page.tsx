import type { Metadata } from "next";
import VenturoConversationPage from "@/components/pages/VenturoConversation";

const description =
  "Conversazioni online su cultura organizzativa, identità ed engagement. Una domanda forte, più punti di vista, nessuna risposta già scritta.";

export const metadata: Metadata = {
  // `absolute` evita il suffisso del template "%s — Venturo" definito in app/layout.tsx
  title: { absolute: "Venturo Conversation: dialoghi su engagement e cultura" },
  description,
  alternates: {
    canonical: "https://venturoconsulting.it/venturo-conversation",
  },
  openGraph: {
    title: "Venturo Conversation: dialoghi su engagement e cultura",
    description,
    url: "https://venturoconsulting.it/venturo-conversation",
    locale: "it_IT",
    type: "website",
  },
};

export default function VenturoConversation() {
  return <VenturoConversationPage />;
}
