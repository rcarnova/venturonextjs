"use client";

import { useState } from "react";
import { UserPlus, Sparkles, Users2, Home, Target, Handshake, LucideIcon } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "../AnimatedSection";
import GlowTitle from "../GlowTitle";

interface Lever {
  title: string;
  description: string;
  icon: LucideIcon;
}

const levers: Lever[] = [
  {
    title: "Talent Attraction",
    description: "Candidates arrive with expectations that don't match reality. Or they don't arrive at all. The problem isn't the salary or the industry: it's that your brand communicates something generic that doesn't tell who you really are. The right people don't recognize themselves, and the wrong ones accept and leave after a year.",
    icon: UserPlus
  },
  {
    title: "Internal Communication",
    description: "Seniors defend a way of doing things that has worked. Newcomers bring a different one. Neither is wrong, but they don't talk to each other. We surface the different cultures that coexist within the same organization and build a shared language.",
    icon: Users2
  },
  {
    title: "Marketing & External Coherence",
    description: "Marketing tells the story of a company that internal people don't recognize. Clients perceive it. Candidates discover it after the first month. The problem isn't the message: it's that the external identity was built without starting from the internal one. We align who you are inside with what you communicate outside. Starting from the inside, not the outside.",
    icon: Target
  },
  {
    title: "Delegation Process",
    description: "The sales team sells in a way that doesn't resemble the company. Or the client relationship depends on a single person. In complex B2B contexts, we make the sales model coherent with your real identity.",
    icon: Handshake
  },
  {
    title: "Innovation & AI Readiness",
    description: "You've invested in tools, training, hackathons. But ideas always stop at the same point. If the internal culture punishes mistakes, no technology will make you innovative. We work on the invisible assumptions that block change before it starts.",
    icon: Sparkles
  },
  {
    title: "Hybrid Work Culture",
    description: "Hybrid work exists, but it works more as a compromise than a choice. Trust is fragile, visibility counts more than results. We design accountability and trust systems that work even without physical presence.",
    icon: Home
  }
];

const LeversSectionEN = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = levers[activeIndex].icon;

  return (
    <section id="levers" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <GlowTitle className="text-3xl md:text-section text-primary-foreground" variant="light">
              Intervention areas
            </GlowTitle>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              Making an organization's purpose visible isn't always simple. Here are the challenges we recognize most often.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection animation="fade-up" delay={200}>
          {/* Mobile: single scrollable row */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 flex-nowrap scrollbar-hide md:hidden">
            {levers.map((lever, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap glow-yellow ${
                  index === activeIndex
                    ? "bg-white text-foreground shadow-lg"
                    : "bg-transparent text-white border border-white/60 hover:border-white"
                }`}
              >
                {lever.title}
              </button>
            ))}
          </div>
          {/* Desktop: 2 rows of 3 */}
          <div className="hidden md:grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {levers.map((lever, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 text-center glow-yellow ${
                  index === activeIndex
                    ? "bg-white text-foreground shadow-lg"
                    : "bg-transparent text-white border border-white/60 hover:border-white"
                }`}
              >
                {lever.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="text-center mt-6">
          <Link
            href="/en/challenges"
            className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Discover all the challenges →
          </Link>
        </div>

        {/* Content */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-10 md:mt-12">
            <div
              key={activeIndex}
              className="bg-white rounded-xl p-8 md:p-12 border border-black/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.12)] animate-fade-in"
            >
              <ActiveIcon className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-6" strokeWidth={1.5} />
              <h3 className="text-subtitle text-foreground mb-4">
                {levers[activeIndex].title}
              </h3>
              <p className="text-body text-muted-foreground max-w-3xl">
                {levers[activeIndex].description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="text-center mt-16">
            <Link
              href="/en/challenges"
              className="inline-flex items-center text-primary-foreground/90 hover:text-primary-foreground font-medium text-lg underline underline-offset-4 decoration-primary-foreground/40 hover:decoration-primary-foreground transition-all duration-300"
            >
              Recognize any of these situations? Read how we address them.
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeversSectionEN;
