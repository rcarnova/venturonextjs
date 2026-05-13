import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowTitle from "../GlowTitle";

const levels = [
  {
    label: "Level 01",
    title: "Digital signals",
    body: "What the market sees of you as an employer. Reviews, careers page, external perception. Data that already exists, often ignored.",
  },
  {
    label: "Level 02",
    title: "Lived experience",
    body: "How employees actually experience the organization, mapped across four areas: culture, people, environment and technology, employee journey.",
  },
  {
    label: "Level 03",
    title: "Cultural roots",
    body: "Why certain things don't change despite good intentions. The underlying assumptions that no survey can reach.",
    cta: { text: "Discover Lumen", href: "/en/lumen" },
  },
];

const ReadingLevelsSectionEN = () => {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <GlowTitle className="text-3xl md:text-section text-foreground">
              Before we act, we listen.
            </GlowTitle>
            <p className="text-subheadline mt-4 text-muted-foreground">
              Three reading levels. Each reveals what the previous one can't see.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {levels.map((level, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <div className={`border-t-2 border-accent pt-6 ${index === 2 ? 'md:border-l-2 md:border-l-primary md:pl-8' : ''}`}>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  {level.label}
                </p>
                <h3 className={`text-subtitle text-foreground mb-4 ${index === 2 ? 'text-primary' : ''}`}>
                  {level.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {level.body}
                </p>
                {level.cta && (
                  <Link
                    href={level.cta.href}
                    className="inline-flex items-center mt-6 text-primary font-mono font-medium group hover:underline"
                  >
                    {level.cta.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadingLevelsSectionEN;
