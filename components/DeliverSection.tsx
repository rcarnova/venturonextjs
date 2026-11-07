import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

/**
 * "Dall'ascolto alle cose": cosa succede dopo Lumen. Le competenze operative
 * di Venturo come conseguenza di ciò che emerge, non come elenco di servizi.
 * È la differenza con chi consegna un piano d'azione e si ferma lì:
 * lo stesso team che ascolta progetta e realizza.
 */

type Item = {
  n: string;
  title: string;
  text: string;
  stays: string;
  link: { href: string; label: string; external?: boolean };
};

const ITEMS: Item[] = [
  {
    n: "01",
    title: "Percorsi per manager",
    text: "Leading by Purpose: sei giornate in circa due mesi, due facilitatori. I principi di guida nascono dal gruppo, non da un manuale.",
    stays: "Principi condivisi, rituali di team, un linguaggio comune tra chi guida.",
    link: { href: "/leading-by-purpose", label: "Il percorso" },
  },
  {
    n: "02",
    title: "Comunicazione interna",
    text: "Cosa dire e come dirlo, a partire da come le persone raccontano l'organizzazione. Anche per chi lavora su turni, in negozio o in strada.",
    stays: "Glossario condiviso, tone of voice, rituali ridisegnati, oggetti e spazi.",
    link: { href: "/comunicazione-interna", label: "Comunicazione interna" },
  },
  {
    n: "03",
    title: "EVP ed employer branding",
    text: "Una proposta di valore costruita con le persone che lavorano da voi, non copiata da un benchmark di settore.",
    stays: "EVP, talent personas, career page, materiali di selezione.",
    link: { href: "/employer-branding", label: "Employer branding" },
  },
  {
    n: "04",
    title: "Artefatti",
    text: "Quello che è emerso prende forma in oggetti che le persone tengono in mano. Li realizziamo con standard da agenzia, insieme a Studio Miller.",
    stays: "Libri aziendali, video, identità visive, campagne di lancio interno.",
    link: { href: "https://www.studiomiller.it", label: "Il lavoro di Studio Miller", external: true },
  },
];

const DeliverSection = () => {
  return (
    <section id="dopo-lascolto" className="pt-10 md:pt-16 pb-16 md:pb-24">
      <div className="container-wide">
        <AnimatedSection>
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="text-eyebrow font-mono text-muted-foreground">Dopo l&apos;ascolto</span>
            <h2 className="text-section text-foreground mt-4 mb-5">
              Prima facciamo emergere.
              <br />
              Poi diamo forma.
            </h2>
            <p className="text-body text-muted-foreground m-0">
              Lo stesso team che vi ascolta progetta e realizza. Quello che emerge con Lumen
              diventa percorsi, parole e oggetti, non un piano d&apos;azione da affidare ad altri.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {ITEMS.map((it, i) => (
            <AnimatedSection key={it.n} delay={i * 80}>
              <article className="h-full flex flex-col border-t-2 border-foreground pt-5">
                <span className="font-mono text-[11px] tracking-[0.12em] text-primary block mb-3">{it.n}</span>
                <h3 className="text-xl font-semibold text-foreground mb-3">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{it.text}</p>
                <div className="mt-auto">
                  <span className="text-eyebrow font-mono text-muted-foreground/70 block mb-2">Cosa vi resta</span>
                  <p className="text-sm text-foreground leading-relaxed mb-5">{it.stays}</p>
                  {it.link.external ? (
                    <a
                      href={it.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:gap-3 transition-all"
                    >
                      {it.link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <Link
                      href={it.link.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:gap-3 transition-all"
                    >
                      {it.link.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverSection;
