import { SEO } from "@/components/SEO";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResponsabilitaNonSiDelega = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="La responsabilità non si delega. Si conquista."
        description="Nelle organizzazioni sane le persone non aspettano che qualcuno assegni loro responsabilità. Le pretendono."
        canonical="https://venturoconsulting.it/magazine/la-responsabilita-non-si-delega"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/la-responsabilita-non-si-delega",
          en: "https://venturoconsulting.it/en/magazine/responsibility-is-claimed",
        }}
        lang="it"
      />
      <Header />
      <main className="pt-20">
        <article className="py-12 md:py-16">
          <div className="max-w-[720px] mx-auto px-5 md:px-8">
            {/* Breadcrumb */}
            <Link
              href="/magazine"
              className="inline-flex items-center gap-2 text-[0.9rem] mb-12 transition-opacity hover:opacity-80"
              style={{ color: "#FF006E" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Torna agli Articoli
            </Link>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                color: "#1a1a1a",
                lineHeight: 1.15,
              }}
            >
              La responsabilità non si delega. Si conquista.
            </h1>

            {/* Author & Tags */}
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-16 text-sm"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "#666",
              }}
            >
              <span>Rosario</span>
              <span>•</span>
              <span>8 mar 2026</span>
              <span>•</span>
              <span>4 min</span>
            </div>

            <div
              className="flex flex-wrap gap-2 mb-16"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {["organizzazione"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border"
                  style={{
                    borderColor: "#e0e0e0",
                    color: "#555",
                    letterSpacing: "0.06em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Body */}
            <div
              className="space-y-8 text-base md:text-lg"
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                color: "#1a1a1a",
                lineHeight: 1.85,
              }}
            >
              <p>Nelle organizzazioni sane le persone non aspettano che qualcuno assegni loro responsabilità. Le pretendono.</p>

              <p>
                È un indicatore sottile ma preciso di come sta una cultura. Quando le persone vogliono essere responsabili di qualcosa — di un progetto, di una decisione, di un risultato — significa che si sentono abbastanza sicure da esporsi. Che sanno cosa succede se sbagliano, e ci stanno lo stesso.
              </p>

              <p>Quando invece nessuno alza la mano, il problema non è l'organigramma.</p>

              <p>
                Il sintomo più comune è la vaghezza. Ruoli indefiniti, confini sfumati, decisioni che aspettano settimane senza che nessuno si muova. Tutti contribuiscono, nessuno decide. Si chiama collaborazione — ma spesso è qualcos'altro.
              </p>

              <p className="font-semibold">È paura.</p>

              <p>O peggio: è convenienza.</p>

              <p>
                C'è una dinamica che nelle organizzazioni esiste ma raramente viene nominata. Il capo vuole fare lui? Meglio così — non mi prendo la responsabilità, non rischio di sbagliare, non mi espongo. È una forma di collusione silenziosa che non produce conflitti visibili ma svuota lentamente l'organizzazione di energia e iniziativa.
              </p>

              <p>Nessuno la dichiara. Tutti la praticano.</p>

              <p>
                Il risultato è un'organizzazione in cui le persone imparano che stare in ombra è più sicuro che esporsi. E quando questa diventa la regola non scritta — quando tutti sanno che così si fa — è diventata cultura.
              </p>

              <p className="font-semibold">E la cultura non è mai sbagliata. È solo cultura.</p>

              <p>
                Uscirne non è una questione di job description più chiare o di matrice RACI compilata meglio. È una questione di creare le condizioni perché qualcuno possa di nuovo pretendere responsabilità senza sentirsi in pericolo.
              </p>

              <p>Quella è la domanda che vale la pena fare.</p>
            </div>

            {/* CTA Section */}
            <div
              className="mt-20 p-8 md:p-12 rounded-xl text-center"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <p
                className="text-lg md:text-xl mb-6"
                style={{ color: "#1a1a1a" }}
              >
                Vuoi trasformare questi insight in azioni concrete nella tua
                organizzazione?
              </p>
              <Button
                asChild
                className="px-8 py-6 h-auto text-base font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF006E" }}
              >
                <Link href="/#contact">Parliamone</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ResponsabilitaNonSiDelega;
