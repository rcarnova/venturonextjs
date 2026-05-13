import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const FeaturedCaseSectionEN = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Content column - Left */}
              <div className="space-y-8">
                {/* Brand name + subtitle */}
                <div>
                  <img 
                    src="/logos/randstad_blue.svg" 
                    alt="Randstad logo - HR and recruiting agency" 
                    className="h-6 md:h-7 w-auto brightness-0"
                    width={140}
                    height={28}
                    loading="lazy"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    HR & Recruiting
                  </p>
                </div>

                {/* Data point hero */}
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-7xl md:text-8xl font-bold text-foreground leading-none">
                      30
                    </span>
                    <span className="text-base text-muted-foreground">
                      managers involved in the workshop
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <h2 className="text-2xl md:text-3xl font-medium leading-tight text-foreground">
                  From 4.2/5 rating to actual cultural alignment
                </h2>

                {/* Body copy */}
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  Workshop with 30 managers to surface who truly thrives at
                  Randstad. We didn't create aspirational personas — we extracted
                  patterns from real stories. Result: candidates pre-filtered for
                  cultural fit before technical assessment.
                </p>

                {/* CTA minimale */}
                <Link
                  href="/en/case-studies/randstad"
                  className="inline-flex items-center text-primary font-mono font-medium group hover:underline"
                >
                  Read the full case study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Image column - Right */}
              <div className="order-first md:order-last">
                <img
                  src="/cases/randstad-envisioning.jpg"
                  alt="Randstad Workshop - Participants working with visual thinking and materials on the table"
                  className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedCaseSectionEN;
