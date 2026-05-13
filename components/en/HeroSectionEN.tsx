"use client";

import { Button } from "@/components/ui/button";

const HeroSectionEN = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-background overflow-x-hidden">
      <div className="container-wide relative z-10 px-5 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-[36px] md:!text-[80px] font-bold leading-[1.15] tracking-tight">
            <span
              className="inline-block animate-[heroFadeUp_0.8s_ease-out_0.1s_both]"
            >
              Every organization has a why<span className="text-[75%]">.</span>
            </span>
            <br />
            <span
              className="inline-block animate-[heroBlurIn_1.2s_ease-out_0.8s_both]"
            >
              We make it visible<span className="text-[75%]">.</span>
            </span>
          </h1>
          
          <p className="text-[20px] leading-[1.65] text-muted-foreground mt-8 max-w-none md:whitespace-nowrap animate-fade-up-delay-2 [animation-delay:1.2s] md:[animation-delay:2.5s]">
            Cultural challenges always have an inside and an outside.<br className="md:hidden" /> Venturo crosses both.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2 [animation-delay:1.5s] md:[animation-delay:3s]">
            <Button onClick={scrollToContact} variant="hero" className="glow-btn">
              Let's talk about your culture
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionEN;
