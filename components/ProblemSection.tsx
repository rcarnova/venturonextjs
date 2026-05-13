import { UserMinus, FileX, MessageSquareWarning, Scale, Lock, LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";

interface Problem {
  text: string;
  icon: LucideIcon;
}

const problems: Problem[] = [
  { text: "Talenti che abbandonano dopo 18 mesi", icon: UserMinus },
  { text: "Processo di delega che non funziona", icon: Lock },
  { text: "Innovazione che resta sulla carta", icon: FileX },
  { text: "Team che non si capiscono perché parlano lingue diverse", icon: MessageSquareWarning },
  { text: "Gap tra promesse ai clienti e realtà interna", icon: Scale },
  { text: "Decisioni che si bloccano ai livelli intermedi", icon: Lock }
];

const ProblemSection = () => {
  return (
    <section id="le-sfide" className="section-padding bg-charcoal">
      <div className="container-narrow">
        <AnimatedSection>
          <GlowTitle className="text-2xl md:text-3xl font-medium text-warm-white" variant="light">
            Strategia solida, persone competenti.
            <span className="text-warm-white/60 block mt-2">Eppure...</span>
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
              Questi non sono problemi di processo.
              <span className="block text-warm-white/60">Sono problemi culturali.</span>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="mt-10 pt-6 border-t border-warm-white/10">
            <p className="text-base text-warm-white/60">
              Venturo è uno studio che conosce queste dinamiche dall'interno. Non dall'esterno.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSection;
