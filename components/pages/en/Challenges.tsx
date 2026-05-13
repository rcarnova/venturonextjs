"use client";

import { SEO } from "@/components/SEO";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Challenge {
  title: string;
  reframing: string;
  action: string;
  approccio: string;
}

const challenges: Challenge[] = [
  {
    title: "Your brand doesn't attract the right people",
    reframing:
      "Candidates arrive with expectations that don't match reality. Or they don't arrive at all. The problem isn't the salary or the industry: it's that your brand communicates something generic that doesn't tell who you really are. The right people don't recognize themselves, and the wrong ones accept and leave after a year.",
    action:
      "We make your cultural identity readable from the very first touchpoint. Not with a campaign, but starting from who you really are.",
    approccio: "Lumen + Ingaze + Employer branding + Cultural identity workshop",
  },
  {
    title: "Internal communication doesn't work because there's no shared language",
    reframing:
      "Meetings that lead to no decisions. Emails that go unread. Messages interpreted differently from function to function. It's not a tools or channels problem: it's that different cultures coexist without ever having built a common vocabulary.",
    action:
      "We surface the invisible cultures that coexist within the same organization and build a shared language that respects them all.",
    approccio: "Lumen + Internal communication + Team workshop",
  },
  {
    title: "What you say outside doesn't match what you live inside",
    reframing:
      "Marketing tells the story of a company that internal people don't recognize. Clients perceive it. Candidates discover it after the first month. The problem isn't the message: it's that the external identity was built without starting from the internal one.",
    action:
      "We align who you are inside with what you communicate outside. Starting from the inside, not the outside.",
    approccio: "Lumen + Brand strategy",
  },
  {
    title: "Delegation that doesn't work",
    reframing:
      "Delegation isn't a process or tools problem. It's a problem of cultural trust. If mistakes aren't allowed, no one takes responsibility. If power has never truly been distributed, no framework will distribute it. And without a solid relationship between manager and collaborator, feedback doesn't flow and autonomy doesn't take root.",
    action:
      "We work on the quality of the relationship as the necessary infrastructure for real feedback and sustainable autonomy. Not on the delegation process itself.",
    approccio: "Lumen + Leadership coaching",
  },
  {
    title: "Innovation that stays on paper",
    reframing:
      "Innovation doesn't stall because of a lack of ideas or budget. It stalls because the culture rewards those who don't fail more than those who try new things. Changing tools or launching a hackathon doesn't change this equation.",
    action:
      "We identify which internal rituals and language are sabotaging innovation before it even starts.",
    approccio: "Lumen + Rituals & language workshop",
  },
  {
    title: "Hybrid work without shared rules",
    reframing:
      "Hybrid work entered companies often without anyone truly deciding what working smart means. The result is questions circulating in the hallways: why does Giorgio get to work remotely and I don't? Why can Milan do it and we can't? Why does it depend on my boss? When rules are missing or applied inconsistently, the problem isn't logistical. It's motivational and generational — younger talents consider flexibility a non-negotiable priority, and if they don't find it, they look elsewhere.",
    action:
      "We help the board and managers answer a strategic question: what does working smart truly mean in your organization? Not how to solve working from home. How to make it a conscious cultural lever.",
    approccio: "Strategic workshop + Board facilitation",
  },
];

const Challenges = () => {
  const scrollToContact = () => {
    window.location.href = "/en#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Organizational Culture Challenges — Venturo"
        description="Talent leaving, ineffective internal communication, gap between external brand and internal culture. Recognize any of these? Here's how we address them."
        canonical="https://venturoconsulting.it/en/challenges"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/le-sfide", en: "https://venturoconsulting.it/en/challenges" }}
      />
      <HeaderEN />

      <main className="pb-24">
        {/* Hero */}
        <section className="pt-32 md:pt-44 pb-20 md:pb-28">
          <div className="container-narrow">
            <AnimatedSection>
              <p className="text-eyebrow font-mono text-muted-foreground mb-6">
                The challenges
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="text-hero md:!text-[52px] text-foreground max-w-3xl">
                Making an organization's purpose visible isn't always simple.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="mt-6 text-body text-muted-foreground max-w-2xl">
                Here are the challenges we recognize most often.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Challenges */}
        <section className="container-narrow space-y-0">
          {challenges.map((challenge, index) => (
            <AnimatedSection key={index} delay={index * 80}>
              <div className="py-12 md:py-16 border-t border-border first:border-t-0 rounded-lg px-4 -mx-4 glow-row glow-yellow hover:scale-[1.02] transition-transform duration-300">
                {/* Title with large background number */}
                <div className="relative mb-6">
                  <span
                    className="absolute -top-6 -left-2 text-[8rem] md:text-[10rem] font-bold leading-none text-foreground/[0.06] select-none pointer-events-none font-mono"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h2 className="text-section text-foreground leading-snug">
                      {challenge.title}
                    </h2>
                  </div>
                </div>

                {/* Reframing */}
                <div className="space-y-6">
                  <p className="text-body text-muted-foreground">
                    {challenge.reframing}
                  </p>

                  {/* What we do — dark block */}
                  <div className="bg-charcoal rounded-lg px-5 py-4 md:px-6 md:py-5">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-warm-white/60 mt-1 flex-shrink-0" />
                      <p className="text-base text-warm-white font-medium leading-relaxed">
                        {challenge.action}
                      </p>
                    </div>
                    <p className="mt-3 text-sm text-warm-white/50">
                      Approach: {challenge.approccio}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </section>

        {/* Closing CTA */}
        <section className="mt-20 md:mt-28 bg-charcoal">
          <div className="container-narrow py-20 md:py-24 text-center">
            <AnimatedSection>
              <p className="text-section text-warm-white leading-snug">
                Do you recognize yourself in any of these situations?
              </p>
              <div className="mt-10">
                <Button
                  onClick={scrollToContact}
                  variant="hero"
                  size="lg"
                  className="glow-btn-light"
                >
                  Let's talk
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <FooterEN />
    </div>
  );
};

export default Challenges;
