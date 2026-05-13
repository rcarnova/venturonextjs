import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const ReferencesSectionEN = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-eyebrow font-mono text-primary mb-4">
              References
            </p>
            <h2 className="text-section text-foreground mb-6">
              Leading companies ask important questions
            </h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Not "how do we improve our values?", but "which values do we already live?".
              Not "how do we motivate people?", but "why do people stay?".
              Here's who works with us to answer these questions.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Case - Ricehouse */}
        <AnimatedSection delay={200}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <img 
                    src="/logos/ricehouse_logo.webp" 
                    alt="Ricehouse logo - circular economy green building startup" 
                    className="h-5 md:h-6 w-auto brightness-0"
                    width={120}
                    height={24}
                    loading="lazy"
                  />
                  <p className="text-small text-muted-foreground mt-1">
                    Green Tech / Circular Economy
                  </p>
                </div>

                <h3 className="text-subtitle text-foreground">
                  From rice to green building: finding people who believe in your why
                </h3>

                <p className="text-body text-muted-foreground max-w-lg">
                  Ricehouse transforms rice processing waste into sustainable building
                  materials. A circular economy startup with a clear challenge: how do
                  you attract talent when you work with rice straw? Our job: employer
                  branding that tells the why before the what.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/50">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Challenge
                    </p>
                    <p className="font-semibold text-foreground">
                      Employer branding for circular economy
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Industry
                    </p>
                    <p className="font-semibold text-foreground">
                      Green Tech / Bio-construction
                    </p>
                  </div>
                </div>

                <Link
                  href="/en/case-studies/ricehouse"
                  className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
                >
                  Read the full case study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="order-first md:order-last">
                <img
                  src="/workshop/ricehouse-envisioning-1.webp"
                  alt="Ricehouse Workshop - Envisioning session with the team to define identity and employer brand"
                  className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={400}>
          <div className="max-w-7xl mx-auto mt-12 text-center">
            <Link
              href="/en/case-studies"
              className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
            >
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ReferencesSectionEN;
