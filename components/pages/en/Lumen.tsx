"use client";

import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { SEO } from "@/components/SEO";
import LumenHeroEN from "@/components/lumen/en/LumenHeroEN";
import LumenTechniquesEN from "@/components/lumen/en/LumenTechniquesEN";
import LumenChallengesEN from "@/components/lumen/en/LumenChallengesEN";
import LumenProcessEN from "@/components/lumen/en/LumenProcessEN";
import LumenFormatsEN from "@/components/lumen/en/LumenFormatsEN";
import LumenFondamenti from "@/components/lumen/LumenFondamenti";
import LumenCTAEN from "@/components/lumen/en/LumenCTAEN";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const LumenEN = () => {
  return (
    <>
      <SEO
        title="Lumen — Organizational Culture Analysis Method — Venturo"
        description="Lumen is Venturo's proprietary method to surface organizational culture through stories, not surveys. Narrative interviews, workshops and cultural mirror."
        canonical="https://venturoconsulting.it/en/lumen"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/lumen", en: "https://venturoconsulting.it/en/lumen" }}
      />
      <HeaderEN />
      <LumenHeroEN />

      <div className="bg-background">
        <div className="container-wide max-w-5xl py-8">
          <Accordion type="multiple" className="w-full space-y-4">
            <AccordionItem value="techniques" className="border border-border rounded-xl overflow-hidden">
              <AccordionTrigger className="text-xl md:text-2xl font-bold py-6 px-8 hover:no-underline">
                The techniques that make up Lumen
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 pb-4">
                  <LumenTechniquesEN embedded />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="challenges" className="border border-border rounded-xl overflow-hidden">
              <AccordionTrigger className="text-xl md:text-2xl font-bold py-6 px-8 hover:no-underline">
                The challenges Lumen addresses
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 pb-4">
                  <LumenChallengesEN embedded />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <LumenProcessEN />

      <div className="bg-background">
        <div className="container-wide max-w-5xl py-8">
          <Accordion type="multiple" className="w-full space-y-4">
            <AccordionItem value="formats" className="border border-border rounded-xl overflow-hidden">
              <AccordionTrigger className="text-xl md:text-2xl font-bold py-6 px-8 hover:no-underline">
                Delivery formats
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 pb-4">
                  <LumenFormatsEN embedded />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fondamenti" className="border border-border rounded-xl overflow-hidden">
              <AccordionTrigger className="text-xl md:text-2xl font-bold py-6 px-8 hover:no-underline">
                Foundations
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-8 pb-4">
                  <LumenFondamenti lang="en" embedded />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <LumenCTAEN />
      <FooterEN />
    </>
  );
};

export default LumenEN;
