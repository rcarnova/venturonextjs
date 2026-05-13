import AnimatedSection from "@/components/AnimatedSection";
import { Eye, Users, MessageCircle, Target } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Collection",
    desc: "One-to-one narrative interviews (45min each) and/or narrative questionnaire with the 8 questions, depending on the chosen format. In some projects both are used - interviews for depth, the questionnaire for breadth.",
  },
  {
    icon: Eye,
    num: "02",
    title: "Analysis",
    desc: "Thematic reading of transcripts. Emergence of recurring patterns, tensions, and spontaneous metaphors people use to describe their experience.",
  },
  {
    icon: Users,
    num: "03",
    title: "Workshop",
    desc: "Restitution to the leadership team through a facilitated workshop. Not a report to read: a session where the organization listens to itself through its own voices. Tensions are named collectively. Then co-design follows - subgroup work with dot voting to identify the 2 priority challenges to act on.",
  },
  {
    icon: Target,
    num: "04",
    title: "3-month project",
    desc: "The 2 selected challenges become concrete projects operating at the level of modifiable artifacts - meetings, onboarding, communication, rituals. Small changes that touch deep assumptions. It's not the final solution - it's the gateway to deeper change.",
  },
];

const LumenProcessEN = () => (
  <section className="py-24 bg-muted/40">
    <div className="container-wide max-w-5xl">
      <AnimatedSection>
        <p className="text-eyebrow font-mono text-primary mb-4">How it works</p>
        <h2 className="text-section mb-4">From mirror to action</h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
          Lumen doesn't stop at data collection. Each phase prepares the next,
          until understanding becomes a concrete project.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <AnimatedSection key={step.num} delay={i * 100}>
              <div className="bg-background border border-border rounded-xl p-8 h-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">{step.num}</span>
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-base">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection delay={400}>
        <div className="bg-background border border-border rounded-xl p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">The output</p>
          <p className="text-foreground leading-relaxed mb-4">
            Not an 80-page report that ends up in a drawer. Lumen produces a <strong>narrative mirror</strong>:
            a 15-25 page document in which the organization's people recognize their own voice,
            their own stories, their own tensions - and finally understand why certain things never change,
            despite good intentions.
          </p>
          <p className="text-foreground leading-relaxed">
            More important than the mirror is what happens after: the <strong>priority levers map</strong> with
            2 concrete 3-month projects that the organization carries forward autonomously or with Venturo support.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenProcessEN;
