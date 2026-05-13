import { SEO } from "@/components/SEO";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const LaCulturaNonEMaiSbagliata = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="La cultura non è mai sbagliata. È solo cultura."
        description="Ho visto molte aziende arrendersi. Non parlo di business. Parlo di cultura."
        canonical="https://venturoconsulting.it/magazine/la-cultura-non-e-mai-sbagliata"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/la-cultura-non-e-mai-sbagliata",
          en: "https://venturoconsulting.it/en/magazine/culture-is-never-wrong",
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
              La cultura non è mai sbagliata. È solo cultura.
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
              <span>15 mar 2026</span>
              <span>•</span>
              <span>4 min</span>
            </div>

            <div
              className="flex flex-wrap gap-2 mb-16"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {["cultura organizzativa", "cambiamento"].map((tag) => (
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
              <p>Ho visto molte aziende arrendersi.</p>

              <p>Non parlo di business. Parlo di cultura.</p>

              <p>
                Aziende in cui si accettano cose oggettivamente sbagliate. Situazioni
                paradossali dove tutti sanno che così non si fa — e nonostante questo,
                si fa lo stesso. Una forza a cui nessuno riesce a dire basta.
              </p>

              <p>
                Il mio esperimento preferito per spiegarlo è la fila per qualcosa che
                non esiste.
              </p>

              <p>
                Alcuni attori creano una piccola coda davanti a un divisore con un
                cordoncino — avete presente quello che si usa a teatro prima
                dell'apertura? Nel giro di pochi minuti si forma una fila sempre più
                lunga di persone che non hanno la minima idea di cosa stiano aspettando.
                Non lo sanno perché non esiste. Ma si fermano lo stesso. Perché si sono
                fermati gli altri.
              </p>

              <p>Siamo così. Anche al lavoro.</p>

              <p>
                Passiamo otto ore tra riunioni e call che tutti trovano inutili. Nessuno
                che alza la mano e dice: ma voi lo trovate produttivo questo modo di
                lavorare? Non lo facciamo perché se lo fanno tutti, diventa normale. Se
                è normale, diventa regola. Se è regola, diventa cultura.
              </p>

              <p className="font-semibold">
                E la cultura non è mai sbagliata. È solo cultura.
              </p>

              <p>
                Il problema non è che le persone siano passive o cieche. Il problema è
                che i sistemi sociali funzionano così: tra il bene e il male vince
                quello che fanno tutti. Non per cattiveria — per gravità. È la forza più
                potente nelle organizzazioni, e la meno presidiata.
              </p>

              <p>
                Allora la domanda non è come convincere le persone a cambiare. È come
                creare le condizioni perché qualcuno possa dire quello che tutti pensano,
                senza dover essere un eroe per farlo.
              </p>

              <p>
                Perché gli eroi nelle organizzazioni durano poco. I rituali durano.
              </p>

              <p>
                Questo blog nasce per esplorare quella domanda. Con tre voci diverse —
                cultura, narrazione, forma — perché il modo in cui un'organizzazione
                funziona non si capisce da un'angolazione sola.
              </p>

              <p>Benvenuti.</p>
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

export default LaCulturaNonEMaiSbagliata;
