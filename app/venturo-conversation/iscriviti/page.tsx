import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VenturoConversationLogo from "@/components/VenturoConversationLogo";
import VCSignup from "@/components/VCSignup";
import { NEXT_EPISODE } from "@/lib/venturo-conversation";

const url = "https://venturoconsulting.it/venturo-conversation/iscriviti";

export const metadata: Metadata = {
  title: "Iscriviti a Venturo Conversation",
  description: `Iscriviti alla prossima Venturo Conversation, ${NEXT_EPISODE.dateLabel}, con ${NEXT_EPISODE.guest.name}. Ricevi il link per partecipare e l'invito per il calendario.`,
  alternates: { canonical: url },
  openGraph: { title: `Venturo Conversation: ${NEXT_EPISODE.title}`, url, locale: "it_IT" },
};

const INK = "#000000";
const ACCENT_ON_LIGHT = "#BE185D";
const MUTED = "#555555";

export default function IscrivitiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 md:pt-36">
        <div className="container-wide pb-16 md:pb-24">
          <VenturoConversationLogo imgClassName="w-[220px] md:w-[280px] h-auto" />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10" style={{ borderTop: `1px solid ${INK}` }}>
            <div className="lg:col-span-6 pt-10">
              <p className="font-mono text-eyebrow mb-4" style={{ color: ACCENT_ON_LIGHT }}>
                PROSSIMA CONVERSAZIONE · {NEXT_EPISODE.dateLabel.toUpperCase()}
              </p>
              <h1 className="font-bold m-0" style={{ color: INK, fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
                {NEXT_EPISODE.title}
              </h1>
              <dl className="mt-8">
                <div style={{ borderTop: `1px solid ${INK}` }} className="py-4">
                  <dt className="font-mono text-eyebrow mb-1" style={{ color: MUTED }}>NE PARLIAMO CON</dt>
                  <dd className="m-0" style={{ fontSize: 16, lineHeight: 1.5 }}>
                    <strong>{NEXT_EPISODE.guest.name}</strong>, {NEXT_EPISODE.guest.role}
                  </dd>
                </div>
                <div style={{ borderTop: "1px solid #dcdcdc" }} className="py-4">
                  <dt className="font-mono text-eyebrow mb-1" style={{ color: MUTED }}>HOST</dt>
                  <dd className="m-0" style={{ fontSize: 16, lineHeight: 1.5 }}>
                    {NEXT_EPISODE.hosts.map((h) => h.name).join(", ")}, Venturo
                  </dd>
                </div>
                <div style={{ borderTop: "1px solid #dcdcdc" }} className="py-4">
                  <dt className="font-mono text-eyebrow mb-1" style={{ color: MUTED }}>DOVE</dt>
                  <dd className="m-0" style={{ fontSize: 16, lineHeight: 1.5 }}>
                    Online, su Google Meet. {NEXT_EPISODE.duration}. Il link arriva con la mail di conferma.
                  </dd>
                </div>
              </dl>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={NEXT_EPISODE.image.src}
                alt=""
                width={NEXT_EPISODE.image.width}
                height={NEXT_EPISODE.image.height}
                className="block w-full h-auto mt-6"
                style={{ border: `1px solid ${INK}` }}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-8 pt-10">
              <VCSignup />
              <p className="text-sm mt-6" style={{ color: MUTED }}>
                È una conversazione, non un webinar: chi vuole può aprire il microfono e dire la sua.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
