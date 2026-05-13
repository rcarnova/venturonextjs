"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const scrollToContact = () => {
  if (window.location.pathname === '/en') {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = '/en#contact';
  }
};

const LumenCTAEN = () => (
  <section className="py-24 bg-muted/40">
    <div className="container-wide max-w-3xl text-center">
      <AnimatedSection>
        <p className="text-eyebrow font-mono text-primary mb-6">Next step</p>
        <h2 className="text-section mb-6">
          Want to see what emerges<br />when people really talk?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          A 30-minute exploratory conversation is enough to understand whether Lumen
          is the right tool for your organization - and in which format.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" onClick={scrollToContact}>
            Let's talk
          </Button>
          <Button variant="heroOutline" asChild>
            <Link href="/en/case-studies">See the projects</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenCTAEN;
