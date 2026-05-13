"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import LumenHero from "@/components/lumen/LumenHero";
import LumenTechniques from "@/components/lumen/LumenTechniques";
import LumenChallenges from "@/components/lumen/LumenChallenges";
import LumenProcess from "@/components/lumen/LumenProcess";
import LumenFormats from "@/components/lumen/LumenFormats";
import LumenFondamenti from "@/components/lumen/LumenFondamenti";
import LumenCTA from "@/components/lumen/LumenCTA";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Lumen = () => {
  return (
    <>
      <SEO
        title="Lumen — Metodo di analisi della cultura organizzativa — Venturo"
        description="Lumen è il metodo proprietario di Venturo per far emergere la cultura organizzativa attraverso storie, non questionari. Interviste narrative, workshop e specchio culturale."
        canonical="https://venturoconsulting.it/lumen"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/lumen", en: "https://venturoconsulting.it/en/lumen" }}
      />
      <Header />
      <LumenHero />

      <div className="bg-background">
        <div className="container-wide max-w-5xl py-8">
          <Accordion type="multiple" className="w-full space-y-4">
            <AccordionItem value="techniques" className="border border-border rounded-xl overflow-hidden">
              <AccordionTrigger className="text-xl md:text-2xl font-bold py-6 px-8 hover:no-underline">
                Le tecniche che compongono Lumen
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 pb-4">
                  <LumenTechniques embedded />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="challenges" className="border border-border rounded-xl overflow-hidden">
              <AccordionTrigger className="text-xl md:text-2xl font-bold py-6 px-8 hover:no-underline">
                Le sfide che Lumen affronta
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 pb-4">
                  <LumenChallenges embedded />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <LumenProcess />

      <section className="py-20 md:py-28 bg-background">
        <div className="container-wide max-w-3xl text-center space-y-4">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground">
            A volte quello che emerge non richiede una nuova comunicazione.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground">
            Richiede un cambiamento reale.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground">
            Anche in quel caso, sappiamo dove andare.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container-wide max-w-5xl py-8">
          <Accordion type="multiple" className="w-full space-y-4">
            <AccordionItem value="formats" className="border border-border rounded-xl overflow-hidden">
              <AccordionTrigger className="text-xl md:text-2xl font-bold py-6 px-8 hover:no-underline">
                Modalità di erogazione
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 pb-4">
                  <LumenFormats embedded />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fondamenti" className="border border-border rounded-xl overflow-hidden">
              <AccordionTrigger className="text-xl md:text-2xl font-bold py-6 px-8 hover:no-underline">
                Fondamenti
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 pb-4">
                  <LumenFondamenti embedded />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <LumenCTA />
      <Footer />
    </>
  );
};

export default Lumen;
