"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SEO } from "@/components/SEO";

import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ReferencesSectionEN from "@/components/en/ReferencesSectionEN";

const cases = [
  {
    company: "Ricehouse",
    result: "From strong identity to qualified applications",
    description: "Complete redefinition of employer brand and value proposition.",
    slug: "ricehouse",
    hasDetail: true,
    logo: "/logos/ricehouse_white.webp",
    tags: ["CHO / HR", "CMO / Marketing"],
  },
  {
    company: "Randstad",
    result: "Visible culture, aligned candidates",
    description: "Employer branding campaign that translates internal values into concrete messages for the job market.",
    slug: "randstad",
    hasDetail: true,
    logo: "/logos/randstad_blue.svg",
    invertLogo: true,
    tags: ["CMO / Marketing", "CHO / HR"],
  },
  {
    company: "Lely",
    result: "Tools for managing people without HR experience",
    description: "Practical framework for technical managers who need to lead teams.",
    slug: "lely",
    hasDetail: true,
    logo: "/logos/lely_white.svg",
    logoScale: 1.3,
    tags: ["CHO / HR", "CMO / Marketing"],
  },
  {
    company: "Ufficio Pio",
    result: "Naming that creates culture",
    description: "Strategic naming project to give departments a shared language and make the beneficiaries' journey recognizable.",
    slug: "ufficio-pio",
    hasDetail: true,
    logo: "/logos/ufficio_pio_white.webp",
    tags: ["CMO / Marketing", "CEO / Leadership"],
  },
  {
    company: "CVE",
    result: "The First Company Town Hall",
    description: "Design and facilitation of a historic moment for the company.",
    slug: "cve",
    hasDetail: true,
    logo: "/logos/cve_mono.webp",
    logoScale: 0.8,
    tags: ["CEO / Leadership"],
  },
  {
    company: "Findomestic",
    result: "From corporate language to unified conversation",
    description: "Intensive workshop to unify language between customer service and social media team.",
    slug: "findomestic",
    hasDetail: true,
    logo: "/logos/findomestic_white.webp",
    logoScale: 2.5,
    tags: ["CMO / Marketing", "CHO / HR"],
  },
  {
    company: "Randstad Professionals",
    result: "Brand identity for those who select the best",
    description: "EVP, Talent Personas and employer branding videos for Randstad's top management division.",
    slug: "randstad-professionals",
    hasDetail: true,
    logo: "/logos/randstad_blue.svg",
    invertLogo: true,
    tags: ["CHO / HR", "CMO / Marketing"],
  },
  {
    company: "Eu.promotions",
    result: "Identity discovered, not invented",
    description: "Brand identity and content strategy for an international SME in loyalty & retail marketing.",
    slug: "eupromotions",
    hasDetail: true,
    logo: "/logos/eupromotion_white.webp",
    invertLogo: false,
    logoScale: 3,
    tags: ["CEO / Leadership", "CMO / Marketing"],
  },
  {
    company: "City of Vercelli",
    result: "Toxic: giving voice to teenagers on gender-based violence",
    description: "Participatory workshop in high schools, collection of testimonies and theatrical reading at Festival Raccolti.",
    slug: "comune-di-vercelli-gender-violence",
    hasDetail: true,
    logo: "/logos/comune_vercelli_wordmark.png",
    logoScale: 1,
    invertLogo: true,
    tags: ["CEO / Leadership", "CMO / Marketing"],
  },
  {
    company: "AMC Italia",
    result: "The new headquarters as a lever for cultural change",
    description: "12 months of co-design with employees to turn a headquarter relocation into an organizational culture project.",
    slug: "amc-italia",
    hasDetail: true,
    logo: "/logos/amc_italia_white.png",
    logoScale: 1,
    tags: ["CEO / Leadership", "CHO / HR"],
  },
  {
    company: "McCann Health",
    result: "Listening and Envisioning to define the values of the new office",
    description: "Board interviews, organisation-wide survey and envisioning workshop to define the values the new office needed to convey.",
    slug: "mccann-health",
    hasDetail: true,
    logo: "/logos/mccann_health_white.png",
    logoScale: 1,
    tags: ["CEO / Leadership", "CHO / HR"],
  },
];

const CaseStudies = () => {
  const scrollToContact = () => {
    window.location.href = "/en#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies — Organizational Culture & Employer Branding Projects — Venturo"
        description="Employer branding, internal communication, strategic naming, facilitation. Real projects where organizational culture became visible."
        canonical="https://venturoconsulting.it/en/case-studies"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio", en: "https://venturoconsulting.it/en/case-studies" }}
      />
      <HeaderEN />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20">
          <div className="container-wide text-center">
            <AnimatedSection>
              <h1 className="text-display text-charcoal">Projects where culture became visible</h1>
            </AnimatedSection>
          </div>
        </section>
        {/* Featured Case */}
        <ReferencesSectionEN />

        {/* Grid */}
        <section className="pb-20">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseStudy, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <Link href={`/en/case-studies/${caseStudy.slug}`} className="block h-full">
                    <div className="card-subtle group hover:bg-card transition-all duration-300 cursor-pointer h-full flex flex-col glow-yellow hover:scale-[1.02]">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {caseStudy.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs font-normal text-muted-foreground border-border"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-start justify-between">
                        <div>
                          {caseStudy.logo ? (
                            <div className="bg-charcoal rounded px-3 py-1.5 inline-flex items-center justify-center mb-2">
                              <img
                                src={caseStudy.logo}
                                alt={caseStudy.company}
                                className={`h-5 w-auto ${caseStudy.invertLogo ? 'invert brightness-0 invert' : ''}`}
                                width={80}
                                height={20}
                                loading="lazy"
                                style={{ transform: `scale(${caseStudy.logoScale || 1})` }}
                              />
                            </div>
                          ) : (
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">
                              {caseStudy.company}
                            </span>
                          )}
                          <h3 className="text-xl font-semibold text-charcoal mt-2">
                            {caseStudy.result}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-4 flex-grow">
                        {caseStudy.description}
                      </p>
                      <p className="text-sm text-primary font-medium mt-4 group-hover:underline">
                        Read the case →
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container-narrow text-center">
            <AnimatedSection>
              <h2 className="text-section text-charcoal mb-4">Want similar results?</h2>
              <Button onClick={scrollToContact} variant="default" size="lg">
                Let's talk
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <FooterEN />
    </div>
  );
};

export default CaseStudies;
