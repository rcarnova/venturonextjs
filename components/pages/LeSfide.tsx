"use client";

import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Challenge {
  title: string;
  reframing: string;
  action: string;
  approccio: string;
}

const challenges: Challenge[] = [
  {
    title: "Cultura interna: culture diverse che non si parlano",
    reframing:
      "Riunioni che non portano a decisioni. Email che non vengono lette. Messaggi interpretati in modo diverso da funzione a funzione. Non è un problema di strumenti o di canali: è che convivono culture diverse che non hanno mai costruito un vocabolario comune.",
    action:
      "Facciamo emergere le culture invisibili che coesistono nella stessa organizzazione e costruiamo un linguaggio condiviso che le rispetti tutte.",
    approccio: "Lumen + Comunicazione interna + Workshop team",
  },
  {
    title: "Il brand non attrae le persone giuste",
    reframing:
      "I candidati arrivano con aspettative che non corrispondono alla realtà. O non arrivano affatto. Il problema non è l'offerta economica né il settore: è che il brand comunica qualcosa di generico che non racconta chi siete davvero. Le persone giuste non si riconoscono, e quelle sbagliate accettano e se ne vanno dopo un anno.",
    action:
      "Rendiamo la vostra identità culturale leggibile già dal primo contatto. Non con una campagna, ma partendo da chi siete davvero.",
    approccio: "Lumen + Ingaze + Employer branding + Workshop identità culturale",
  },
  {
    title: "Quello che dite fuori non corrisponde a quello che vivete dentro",
    reframing:
      "Il marketing racconta un'azienda che le persone interne non riconoscono. I clienti lo percepiscono. I candidati lo scoprono dopo il primo mese. Il problema non è il messaggio: è che l'identità esterna è stata costruita senza partire da quella interna.",
    action:
      "Allineiamo chi siete dentro con quello che comunicate fuori. Partendo da dentro, non dall'esterno.",
    approccio: "Lumen + Brand strategy",
  },
  {
    title: "Processo di delega che non funziona",
    reframing:
      "La delega non è un problema di processo o di strumenti. È un problema di fiducia culturale. Se l'errore non è permesso, nessuno si prende responsabilità. Se il potere non è mai stato distribuito davvero, nessun framework lo distribuirà. E senza una relazione solida tra manager e collaboratore, il feedback non passa e l'autonomia non attecchisce.",
    action:
      "Lavoriamo sulla qualità della relazione come infrastruttura necessaria per il feedback reale e per l'autonomia sostenibile. Non sul processo di delega in sé.",
    approccio: "Lumen + Coaching leadership",
  },
  {
    title: "Innovazione che resta sulla carta",
    reframing:
      "L'innovazione non si blocca per mancanza di idee o di budget. Si blocca perché la cultura premia chi non sbaglia più di chi prova cose nuove. Cambiare tool o lanciare un hackathon non cambia questa equazione.",
    action:
      "Identifichiamo quali rituali e linguaggi interni stanno sabotando l'innovazione prima ancora che parta.",
    approccio: "Lumen + Workshop rituali e linguaggi",
  },
  {
    title: "Lavoro ibrido senza regole condivise",
    reframing:
      "L'ibrido è entrato in azienda spesso senza che nessuno decidesse davvero cosa significa lavorare in modo smart. Il risultato sono le domande che circolano nei corridoi: perché Giorgio fa smart working e io no? Perché Milano può e noi no? Perché dipende dal mio capo? Quando le regole mancano o sono applicate in modo disomogeneo, il problema non è logistico. È motivazionale e generazionale — i talenti più giovani considerano la flessibilità una priorità non negoziabile, e se non la trovano, cercano altrove.",
    action:
      "Aiutiamo il board e i manager a rispondere a una domanda strategica: cosa significa davvero lavorare smart nella vostra organizzazione? Non come risolvere il lavoro da casa. Come renderlo una leva culturale consapevole.",
    approccio: "Workshop strategico + Facilitazione board",
  },
];

const LeSfide = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Le sfide culturali delle organizzazioni — Venturo"
        description="Talenti che se ne vanno, comunicazione interna inefficace, gap tra brand esterno e cultura interna. Riconosci una di queste situazioni? Ecco come le affrontiamo."
        canonical="https://venturoconsulting.it/le-sfide"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/le-sfide", en: "https://venturoconsulting.it/en/challenges" }}
      />
      <Header />

      <main className="pb-24">
        {/* Hero */}
        <section className="pt-32 md:pt-44 pb-20 md:pb-28">
          <div className="container-narrow">
            <AnimatedSection>
              <p className="text-eyebrow font-mono text-muted-foreground mb-6">
                Le sfide
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="text-hero md:!text-[52px] text-foreground max-w-3xl">
                Rendere visibile il perché di un'organizzazione non è sempre semplice.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="mt-6 text-body text-muted-foreground max-w-2xl">
                Ecco le sfide che riconosciamo più spesso.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Challenges */}
        <section className="container-narrow space-y-0">
          {challenges.map((challenge, index) => (
            <AnimatedSection key={index} delay={index * 80}>
              <div className="py-12 md:py-16 border-t border-border first:border-t-0 rounded-lg px-4 -mx-4 glow-row glow-yellow hover:scale-[1.02] transition-transform duration-300">
                {/* Title with large background number */}
                <div className="relative mb-6">
                  {/* Large decorative number */}
                  <span
                    className="absolute -top-6 -left-2 text-[8rem] md:text-[10rem] font-bold leading-none text-foreground/[0.06] select-none pointer-events-none font-mono"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h2 className="text-section text-foreground leading-snug">
                      {challenge.title}
                    </h2>
                  </div>
                </div>

                {/* Reframing */}
                <div className="space-y-6">
                  <p className="text-body text-muted-foreground">
                    {challenge.reframing}
                  </p>

                  {/* What we do — dark block */}
                  <div className="bg-charcoal rounded-lg px-5 py-4 md:px-6 md:py-5">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-warm-white/60 mt-1 flex-shrink-0" />
                      <p className="text-base text-warm-white font-medium leading-relaxed">
                        {challenge.action}
                      </p>
                    </div>
                    <p className="mt-3 text-sm text-warm-white/50">
                      Approccio: {challenge.approccio}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </section>

        {/* Closing CTA */}
        <section className="mt-20 md:mt-28 bg-charcoal">
          <div className="container-narrow py-20 md:py-24 text-center">
            <AnimatedSection>
              <p className="text-section text-warm-white leading-snug">
                Ti riconosci in una di queste situazioni?
              </p>
              <div className="mt-10">
                <Button
                  onClick={scrollToContact}
                  variant="hero"
                  size="lg"
                  className="glow-btn-light"
                >
                  Parliamone
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeSfide;
