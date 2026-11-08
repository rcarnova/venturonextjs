import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideDownload from "@/components/GuideDownload";
import Link from "next/link";

/**
 * Pagina dedicata della guida sul costo del turnover: il link da usare nei post
 * LinkedIn e nelle mail (aggiungendo ?da=linkedin, ?da=newsletter… per sapere da dove arriva).
 */

const DESCRIPTION =
  "Guida gratuita in PDF per calcolare il costo del turnover con i vostri numeri: uscite da contare, cinque voci di costo, tre scenari e una scheda da compilare.";

export const metadata: Metadata = {
  title: "Costo del turnover: guida pratica per calcolarlo",
  description: DESCRIPTION,
  alternates: { canonical: "https://venturoconsulting.it/guida-costo-turnover" },
  openGraph: {
    title: "Quanto costa perdere un talento in azienda",
    description: DESCRIPTION,
    url: "https://venturoconsulting.it/guida-costo-turnover",
    locale: "it_IT",
  },
};

const INSIDE = [
  { n: "01", t: "Il metodo e le fonti", d: "Il modello in cinque voci, tre principi per un numero difendibile, da dove vengono le stime." },
  { n: "02", t: "Contare le uscite giuste", d: "Organico medio, uscite evitabili e non, dove si concentrano: per area, ruolo, anzianità." },
  { n: "03", t: "Il costo di una singola uscita", d: "Separazione, recruiting, onboarding, posto scoperto, inserimento. E dove trovate ogni dato." },
  { n: "04", t: "Tre scenari, non un numero", d: "Conservativo, realistico, completo. Come presentarli in direzione e come calcolare il pareggio di un progetto." },
  { n: "05", t: "Quello che non si misura", d: "Know-how, colleghi, effetto contagio, clienti: come raccontarli senza inventare numeri. E gli errori più comuni." },
  { n: "06", t: "Una scheda da compilare", d: "Da stampare e riempire con i vostri dati, un gruppo di ruoli alla volta." },
];

const PREVIEWS = [
  { src: "/guide/anteprima-01.webp", alt: "Copertina della guida" },
  { src: "/guide/anteprima-02.webp", alt: "Pagina sul metodo e le fonti" },
  { src: "/guide/anteprima-06.webp", alt: "Pagina sui tre scenari" },
  { src: "/guide/anteprima-09.webp", alt: "Scheda di lavoro" },
];

export default function GuidaCostoTurnover() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 md:gap-14 items-start mb-20">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Guida gratuita · PDF, 10 pagine</p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">Quanto costa perdere un talento in azienda.</h1>
              <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed mb-0 md:mb-5">
                Una guida pratica per fare il conto con i vostri numeri, senza gonfiarlo. Per arrivare in direzione con un costo che
                si può difendere voce per voce, non con una percentuale presa da un benchmark.
              </p>
              <p className="hidden md:block text-base text-muted-foreground leading-relaxed">
                Il numero serve ad aprire la conversazione. Per questo la guida finisce con le domande da farsi dopo il conto: perché
                le persone se ne vanno, e dove si vedono i segnali prima della lettera di dimissioni.
              </p>
            </div>
            <GuideDownload compact />
          </div>

          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Cosa c&apos;è dentro</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-20">
            {INSIDE.map((it) => (
              <div key={it.n} className="border-t-2 border-foreground pt-4">
                <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground block mb-2">{it.n}</span>
                <h2 className="text-lg font-semibold text-foreground mb-2">{it.t}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed m-0">{it.d}</p>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Alcune pagine</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            {PREVIEWS.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                width={720}
                height={1019}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/[0.06]"
              />
            ))}
          </div>

          <div className="border-t border-border/40 pt-10 max-w-[680px]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preferite fare il conto subito?{" "}
              <Link href="/simulatore-turnover" className="text-foreground underline underline-offset-4">
                Usate il simulatore online
              </Link>
              . Volete sapere perché in Italia le persone lasciano il lavoro?{" "}
              <Link href="/magazine/le-dimissioni-si-sentono-prima" className="text-foreground underline underline-offset-4">
                Leggete l&apos;articolo
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
