"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { CaseData } from "@/data/cases";

interface SuggestedCasesProps {
  currentCaseId: string;
  allCases: CaseData[];
}

const SuggestedCases = ({ currentCaseId, allCases }: SuggestedCasesProps) => {
  const currentIndex = allCases.findIndex((c) => c.id === currentCaseId);
  const suggested: CaseData[] = [];

  for (let i = 1; suggested.length < 2 && i < allCases.length; i++) {
    const nextCase = allCases[(currentIndex + i) % allCases.length];
    suggested.push(nextCase);
  }

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-medium text-charcoal mb-8">Altri progetti</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {suggested.map((caseStudy, index) => {
            const card = (
              <div className="card-subtle group hover:bg-card transition-all duration-300 cursor-pointer h-full glow-yellow hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {caseStudy.logo ? (
                        <div className="bg-charcoal rounded px-3 py-1.5 inline-flex items-center justify-center">
                          <img
                            src={caseStudy.logo}
                            alt={`Logo ${caseStudy.company}`}
                            className={`h-5 w-auto ${caseStudy.invertLogo ? "invert brightness-0 invert" : ""}`}
                            style={{ transform: `scale(${caseStudy.logoScale || 1})` }}
                            width={80}
                            height={20}
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                          {caseStudy.company}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mt-2">
                      {caseStudy.result}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 line-clamp-2">
                  {caseStudy.description}
                </p>
              </div>
            );

            return (
              <AnimatedSection key={caseStudy.id} animation="fade-up" delay={(index + 1) * 200}>
                {caseStudy.hasDetail && caseStudy.slug ? (
                  <Link href={caseStudy.url} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuggestedCases;
