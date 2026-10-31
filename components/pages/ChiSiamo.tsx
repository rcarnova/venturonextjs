"use client";

import { SEO } from "@/components/SEO";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Rosario Carnovale",
    role: "Partner",
    title: "Coach & Culture Designer",
    image: "/team/rosario.jpg",
    linkedin: "https://www.linkedin.com/in/rosariocarnovale/",
    bio: "Cresciuto come manager in Oracle per 10 anni, nel 2016 ha cofondato Smartworking Srl, la prima società di consulenza sul lavoro ibrido in Italia. Ha lavorato come coach e consulente su progetti di cambiamento organizzativo in Maxim Consulting e sul digitale in Telnext (Deloitte Digital). Nel 2017 fonda Studio Miller con Massimo Benedetti.",
    bio2: "Lavora con i leader e con chi guida i team ogni giorno: è lì, nel rapporto quotidiano, che l'engagement si decide. Come coach segue molti manager, spesso giovani, e oltre alle domande giuste porta loro strumenti concreti. Ha vissuto dall'interno lo scarto tra ciò che un'organizzazione promette e ciò che le persone vivono. Sa che la cultura non cambia con le policy dall'alto, ma con gli artefatti di ogni giorno: riunioni, rituali, linguaggi.",
  },
  {
    name: "Massimo Benedetti",
    role: "Partner",
    title: "Storyteller & Facilitator",
    image: "/team/massimo.jpg",
    linkedin: "https://www.linkedin.com/in/massimobenedetti/",
    bio: "Laureato al Politecnico di Torino, nel 2016 ha conseguito la qualifica di Corporate Storytelling Specialist allo IULM. Dal 2017 è formatore alla Innovation School di Talent Garden. Cofondatore di Studio Miller, lavora da anni su contenuti e narrazione per brand come Randstad, Sambonet, Samsung e Findomestic.",
    bio2: "Guida Lumen e facilita i workshop in cui le organizzazioni si ascoltano. Il suo lavoro è far parlare le persone: fare la domanda giusta, creare lo spazio in cui arriva la risposta vera, riconoscere nelle storie quello che nessun questionario a punteggio può vedere. Poi restituisce ciò che è emerso in una forma che le persone riconoscono come propria.",
  },
  {
    name: "Arianna Barisan",
    role: "Partner",
    title: "Art Director",
    image: "/team/arianna.jpg",
    linkedin: "https://www.linkedin.com/in/arianna-barisan/",
    bio: "Art Director con una lunga esperienza nel lusso: per otto anni è stata responsabile di concept, immagine ed eventi per brand internazionali di orologeria e gioielleria, tra cui Miu Miu, Marco Bicego e Panerai. Dal 2019 lavora come consulente su strategie visive, eventi e processi di comunicazione.",
    bio2: "Rende visibile la cultura che Lumen fa emergere: simboli, spazi, oggetti, linguaggi visivi. È il modo per arrivare anche a chi non legge una mail aziendale, a chi lavora su turni, in negozio o in strada. Non arriva dopo, quando la cultura è già stata scritta: lavora insieme a Rosario e Massimo mentre emerge. Dal lusso porta il rigore del dettaglio e la cura per chi riceve ogni oggetto.",
  },
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chi siamo — Venturo, consulenza cultura organizzativa Italia"
        description="Venturo è una boutique di consulenza su cultura organizzativa ed engagement delle persone. Facciamo emergere l'identità reale dell'organizzazione, perché le persone possano riconoscersi in ciò che fanno."
        canonical="https://venturoconsulting.it/chi-siamo"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/chi-siamo", en: "https://venturoconsulting.it/en/about" }}
      />
      <Header />
      <main>
        {/* Intro Section */}
        <div className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container-wide">
            <AnimatedSection className="mb-16 md:mb-24">
              <div className="max-w-2xl">
                <p className="text-eyebrow font-mono text-primary mb-4">
                  Chi siamo
                </p>
              <h1 className="text-hero text-foreground">
                Le persone si coinvolgono in ciò in cui si riconoscono.<br /> Noi lo facciamo emergere.
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="max-w-3xl space-y-6">
                 <p className="text-body text-muted-foreground">
                  Venturo nasce da una convinzione maturata sul campo: quando le persone non si riconoscono nell&apos;organizzazione in cui lavorano, l&apos;engagement cala. Non lo riportano su i benefit, né le campagne. Lo riporta un&apos;identità che le persone vedono vissuta ogni giorno, a partire da chi le guida.
                </p>
                <p className="text-body text-muted-foreground">
                  Per questo partiamo da dentro. Ascoltiamo come le persone raccontano l&apos;organizzazione, lavoriamo con i manager che guidano i team, e solo dopo diamo forma a ciò che si comunica, dentro e fuori.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Perché lavoriamo insieme — Hero section */}
        <div className="bg-foreground py-20 md:py-32">
          <div className="container-wide">
            <AnimatedSection>
              <p className="text-eyebrow font-mono text-primary-foreground/60 mb-4">
                Sinergia
              </p>
              <h2 className="text-section text-background mb-10">
                Perché lavoriamo insieme
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="max-w-3xl space-y-6">
                <p className="text-body text-background/80">
                  Venturo nasce dall&apos;incontro di tre mestieri che raramente lavorano insieme: il coaching, lo storytelling e la direzione artistica.
                </p>
                <p className="text-body text-background/80">
                  <strong className="text-background">Rosario</strong> lavora con i leader e con chi guida i team ogni giorno, perché è lì che l&apos;engagement si decide.
                </p>
                <p className="text-body text-background/80">
                  <strong className="text-background">Massimo</strong> fa parlare le persone e ascolta quello che raccontano. È il cuore di <Link href="/lumen" className="text-background hover:underline">Lumen</Link>.
                </p>
                <p className="text-body text-background/80">
                  <strong className="text-background">Arianna</strong> rende visibile la cultura, anche a chi in ufficio non c&apos;è mai.
                </p>
                <p className="text-body text-background/80">
                  Insieme facciamo una cosa sola: far emergere l&apos;identità reale di un&apos;organizzazione, perché le persone possano riconoscersi in ciò che fanno. Non c&apos;è engagement senza identità.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 md:py-24">
          <div className="container-wide">
            <AnimatedSection>
              <div className="max-w-2xl mb-12">
                <p className="text-eyebrow font-mono text-primary mb-4">
                  Team
                </p>
                <h2 className="text-section text-foreground">
                  I partner
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={50}>
              <p className="text-body text-muted-foreground max-w-3xl mb-16">
                Tre partner, tre mestieri, la stessa visione: far emergere la cultura che già esiste nelle organizzazioni.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {team.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 100}>
                  <div className="group scroll-mt-28" id={member.name.toLowerCase().replace(/\s+/g, "-")}>
                    <div className="aspect-square overflow-hidden rounded-lg mb-6 bg-muted">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.title}, Partner Venturo`}
                        className="w-full h-full object-cover object-[center_30%] grayscale group-hover:grayscale-0 transition-all duration-500"
                        width={400}
                        height={400}
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {member.name}
                        </h3>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn di ${member.name}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      </div>
                      <p className="text-sm font-mono uppercase tracking-widest text-primary">
                        {member.role} · {member.title}
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed mt-3">
                        {member.bio}
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed mt-3">
                        {member.bio2}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
