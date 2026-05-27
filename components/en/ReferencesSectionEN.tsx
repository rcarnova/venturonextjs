"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
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
    title: "Brand identity for those who select the best",
    body: "EVP, Talent Personas and employer branding video for Randstad's top management division. Work that starts from the inside — from the team's culture — to build a credible value proposition for the market.",
    cta: "Read the full case study",
    link: "/en/case-studies/randstad-professionals",
    photo: "/cases/randstad-professionals-envisioning.webp",
    photoAlt: "Envisioning workshop with the Randstad Professionals team",
    photoSide: "right",
  },
  {
    category: "Organisational Culture / Participatory Design",
    title: "The new headquarters as a lever for cultural change",
    body: "AMC Italia needed to relocate. The question was not where to put the desks, but how to use the move to genuinely change the way people work. 12 months of co-design with employees: four values that emerged bottom-up, not imposed from the top.",
    cta: "Read the full case study",
    link: "/en/case-studies/amc-italia",
    photo: "/images/cases/amc-italia/ufficio-2.jpg",
    photoAlt: "New AMC Italia office — the destination of 12 months of participatory co-design",
    photoSide: "left",
  },
  {
    category: "Green Tech / Circular Economy",
    title: "From rice to green building: finding people who believe in your why",
    body: "Ricehouse transforms rice processing waste into sustainable building materials. How do you attract talent when you work with rice straw? Employer branding that tells the why before the what.",
    cta: "Read the full case study",
    link: "/en/case-studies/ricehouse",
    photo: "/workshop/ricehouse-envisioning-1.webp",
    photoAlt: "Ricehouse Workshop — Envisioning session with the team",
    photoSide: "left",
  },
  {
    category: "Brand Identity / Organisational Culture",
    title: "Identity discovered, not invented",
    body: "Brand identity and content strategy for an international SME in loyalty and retail marketing. A process that surfaced the cultural identity already present — without inventing a new one.",
    cta: "Read the full case study",
    link: "/en/case-studies/eupromotions",
    photo: "/cases/eupromotion-envisioning.webp",
    photoAlt: "Eu.promotions envisioning workshop",
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

const ReferencesSectionEN = () => {
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
              Case studies
            </p>
            <h2 className="text-3xl md:text-section text-foreground">
              Some projects where culture became visible.
            </h2>
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
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Next slide"
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
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/en/case-studies"
              className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
            >
              View all case studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ReferencesSectionEN;
