import { UserMinus, FileX, MessageSquareWarning, Scale, Lock, LucideIcon } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowTitle from "../GlowTitle";

interface Problem {
  text: string;
  icon: LucideIcon;
}

const problems: Problem[] = [
  { text: "Talents leaving after 18 months", icon: UserMinus },
  { text: "Delegation processes that don't work", icon: Lock },
  { text: "Innovation that stays on paper", icon: FileX },
  { text: "Teams that don't understand each other because they speak different languages", icon: MessageSquareWarning },
  { text: "Gap between promises to clients and internal reality", icon: Scale },
  { text: "Decisions that get stuck at middle management", icon: Lock }
];

const ProblemSectionEN = () => {
  return (
    <section id="challenges" className="section-padding bg-charcoal">
      <div className="container-narrow">
        <AnimatedSection>
          <GlowTitle className="text-2xl md:text-3xl font-medium text-warm-white" variant="light">
            Solid strategy, competent people.
            <span className="text-warm-white/60 block mt-2">And yet...</span>
          </GlowTitle>
        </AnimatedSection>

        <ul className="mt-12 space-y-4">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <li className="flex items-start gap-4 text-lg text-warm-white/80">
                  <IconComponent className="w-5 h-5 text-warm-white/60 mt-1 flex-shrink-0" />
                  <span>{problem.text}</span>
                </li>
              </AnimatedSection>
            );
          })}
        </ul>

        <AnimatedSection delay={500}>
          <div className="mt-12 pt-8 border-t border-warm-white/10">
            <p className="text-xl text-warm-white font-medium">
              These aren't process problems.
              <span className="block text-warm-white/60">They're cultural problems.</span>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="mt-10 pt-6 border-t border-warm-white/10">
            <p className="text-base text-warm-white/60">
              Venturo is a firm that knows these dynamics from the inside. Not from the outside.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSectionEN;
