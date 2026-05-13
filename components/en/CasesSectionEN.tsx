import { ArrowUpRight, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "../AnimatedSection";
import GlowTitle from "../GlowTitle";
import { Button } from "../ui/button";

const cases = [
  {
    company: "Randstad",
    result: "Visible culture, aligned candidates",
    description: "Employer branding campaign that translates internal values into concrete messages for the job market.",
    logo: "/logos/randstad_blue.svg",
    logoScale: 1,
    invertLogo: true,
    slug: "randstad",
  },
  {
    company: "Randstad Professionals",
    result: "Brand identity for those who select the best",
    description: "EVP, Talent Personas and employer branding videos for Randstad's top management division.",
    logo: "/logos/randstad_blue.svg",
    logoScale: 1,
    invertLogo: true,
    slug: "randstad-professionals",
  },
  {
    company: "Ricehouse",
    result: "From strong identity to qualified applications",
    description: "Complete redefinition of employer brand and value proposition.",
    logo: "/logos/ricehouse_white.webp",
    logoScale: 1,
    slug: "ricehouse",
  },
  {
    company: "Findomestic",
    result: "From corporate language to unified conversation",
    description: "Intensive workshop to unify language between customer service and social media team.",
    logo: "/logos/findomestic_white.webp",
    logoScale: 2.5,
    slug: "findomestic",
  },
  {
    company: "Ufficio Pio",
    result: "Naming that builds culture",
    description: "Strategic naming project to give shared language to departments and make beneficiaries' journeys recognizable.",
    logo: "/logos/ufficio_pio_white.webp",
    logoScale: 1,
  },
  {
    company: "Eu.promotions",
    result: "Identity discovered, not invented",
    description: "Brand identity and content strategy for an international SME in loyalty & retail marketing.",
    logo: "/logos/eupromotion_white.webp",
    logoScale: 3,
    slug: "eupromotions",
  },
  {
    company: "CVE",
    result: "The First Company Town Hall",
    rating: "4.3/5",
    description: "Design and facilitation of a historic moment for the company.",
    logo: "/logos/cve_mono.webp",
    logoScale: 0.8,
  },
];

const CasesSectionEN = () => {
  return (
    <section id="cases" className="section-padding">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <GlowTitle className="text-3xl md:text-section text-charcoal">
              Concrete results
            </GlowTitle>
            <p className="text-subheadline mt-4">
              Some projects where culture became visible.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseStudy, index) => {
            const content = (
              <div className="card-subtle group hover:bg-card transition-all duration-300 cursor-pointer h-full glow-yellow hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {caseStudy.logo && (
                        <div className={`bg-charcoal rounded-lg overflow-hidden py-2.5 inline-flex items-center justify-center ${(caseStudy.logoScale || 1) >= 3 ? 'px-6' : 'px-4'}`}>
                          <img 
                            src={caseStudy.logo} 
                            alt={`${caseStudy.company} logo`} 
                            className={`h-5 w-auto ${caseStudy.invertLogo ? 'invert brightness-0 invert' : ''}`}
                            style={{ transform: `scale(${caseStudy.logoScale || 1})` }}
                            width={80}
                            height={20}
                            loading="lazy"
                          />
                        </div>
                      )}
                      {!caseStudy.logo && (
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                          {caseStudy.company}
                        </span>
                      )}
                    </div>
                    <h3 className="text-subtitle text-charcoal mt-2">
                      {caseStudy.result}
                    </h3>
                    {caseStudy.rating && (
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-sm font-medium text-primary">{caseStudy.rating}</span>
                      </div>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  {caseStudy.description}
                </p>
              </div>
            );

            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                {caseStudy.slug ? (
                  <Link href={`/en/case-studies/${caseStudy.slug}`} className="block h-full">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </AnimatedSection>
            );
          })}
        </div>

        {/* Link to all cases */}
        <AnimatedSection delay={600}>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/en/case-studies" className="inline-flex items-center gap-2 glow-btn">
                Discover all case studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CasesSectionEN;
