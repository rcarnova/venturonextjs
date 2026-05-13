"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const scrollToContact = () => {
  if (window.location.pathname === '/') {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = '/#contact';
  }
};

const LumenCTA = () => (
  <section className="py-24 bg-muted/40">
    <div className="container-wide max-w-3xl text-center">
      <AnimatedSection>
        <p className="text-eyebrow font-mono text-primary mb-6">Prossimo passo</p>
        <h2 className="text-section mb-6">
          Volete vedere cosa emerge<br />quando le persone raccontano davvero?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Una conversazione esplorativa di 30 minuti è sufficiente per capire se Lumen
          è lo strumento giusto per la vostra organizzazione - e in quale formato.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" onClick={scrollToContact}>
            Parliamone
          </Button>
          <Button variant="heroOutline" asChild>
            <Link href="/casi-studio">Vedi i progetti</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenCTA;
