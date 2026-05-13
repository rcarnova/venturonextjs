"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import GlowTitle from "./GlowTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useCallback, useEffect } from "react";

interface CaseSlide {
  category: string;
  title: string;
  body: string;
  cta: string;
  link: string;
  photo: string;
  photoAlt: string;
  photoSide: "left" | "right";
}

const slides: CaseSlide[] = [
  {
    category: "Talent Strategy / Employer Branding",
    title: "Identità di marca per chi seleziona i migliori",
    body: "EVP, Talent Personas e video employer branding per la divisione top management di Randstad. Un lavoro che parte dall'interno — dalla cultura del team — per costruire una proposta di valore credibile verso il mercato.",
    cta: "Leggi il caso completo",
    link: "/casi-studio/randstad-professionals",
    photo: "/cases/randstad-professionals-envisioning.webp",
    photoAlt: "Workshop di envisioning con il team Randstad Professionals",
    photoSide: "right",
  },
  {
    category: "Green Tech / Economia Circolare",
    title: "Dal riso alla bioedilizia: trovare persone che credono nel tuo perché",
    body: "Ricehouse trasforma gli scarti della lavorazione del riso in materiali da costruzione sostenibili. Come attrarre talenti quando lavori con paglia di riso? Employer branding che racconta il perché prima del cosa.",
    cta: "Leggi il caso completo",
    link: "/casi-studio/ricehouse",
    photo: "/workshop/ricehouse-envisioning-1.webp",
    photoAlt: "Workshop Ricehouse - Sessione di envisioning con il team",
    photoSide: "left",
  },
  {
    category: "Brand Identity / Cultura Organizzativa",
    title: "Identità scoperta, non inventata",
    body: "Brand identity e strategia contenuti per una PMI internazionale nel loyalty e retail marketing. Un percorso che ha fatto emergere l'identità culturale già presente — senza inventarne una nuova.",
    cta: "Leggi il caso completo",
    link: "/casi-studio/eupromotions",
    photo: "/cases/eupromotion-envisioning.webp",
    photoAlt: "Workshop di envisioning eu.promotions",
    photoSide: "right",
  },
];

const SlideContent = ({ slide }: { slide: CaseSlide }) => {
  const photoEl = (
    <div className={`order-first ${slide.photoSide === "right" ? "md:order-last" : "md:order-first"}`}>
      <img
        src={slide.photo}
        alt={slide.photoAlt}
        className="w-full h-[320px] md:h-[520px] object-cover md:rounded-lg"
        width={800}
        height={520}
        loading="lazy"
      />
    </div>
  );

  const textEl = (
    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-6">
      <span className="inline-block self-start rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
        {slide.category}
      </span>
      <h3 className="text-2xl md:text-3xl font-medium leading-tight text-foreground">
        {slide.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed max-w-lg">
        {slide.body}
      </p>
      <Link
        href={slide.link}
        className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
      >
        {slide.cta}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch max-w-7xl mx-auto">
      {photoEl}
      {textEl}
    </div>
  );
};

const ReferencesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api, onSelect]);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Casi studio
            </p>
            <GlowTitle className="text-3xl md:text-section text-foreground">
              Alcuni progetti in cui la cultura è diventata visibile.
            </GlowTitle>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="relative max-w-7xl mx-auto">
            <Carousel setApi={setApi} opts={{ loop: true }}>
              <CarouselContent>
                {slides.map((slide, i) => (
                  <CarouselItem key={i}>
                    <SlideContent slide={slide} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Arrows */}
            <button
              onClick={() => api?.scrollPrev()}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Slide precedente"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Slide successiva"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Vai alla slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/casi-studio"
              className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
            >
              Vedi tutti i casi studio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ReferencesSection;
