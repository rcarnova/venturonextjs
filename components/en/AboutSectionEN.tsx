import { Users, Puzzle, Palette, BarChart3, Sparkles, PenTool } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowTitle from "../GlowTitle";

const competenze = [
  { icon: Users, label: "Coaching & facilitation" },
  { icon: Puzzle, label: "Organizational design" },
  { icon: Sparkles, label: "Internal branding" },
  { icon: BarChart3, label: "Cultural data analysis" },
  { icon: Palette, label: "Art direction" },
  { icon: PenTool, label: "Editorial design" },
];

const AboutSectionEN = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <GlowTitle className="text-2xl md:text-3xl font-medium text-charcoal">
              Who We Are
            </GlowTitle>
            <p className="text-xl font-medium text-charcoal mt-4">
              A hybrid studio that knows organizations from the inside
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <div className="max-w-3xl mx-auto space-y-6 text-center mb-16">
            <p className="text-muted-foreground leading-relaxed">
              We're not outside observers. We're people who have lived organizational dynamics from within, in both operational and strategic roles. We know what it means to try to change a culture while managing the day-to-day.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We integrate diverse competencies — coaching, facilitation, design, communication, data analysis — because culture isn't changed with a single tool. We work on a tailored basis, with projects that always have a beginning, a development phase, and continuous reinforcement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our method always starts with listening and analysis, continues with concrete planning, and concludes with materials and tools that the organization can continue to use.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-charcoal uppercase tracking-wider">
              Our competencies
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competenze.map((competenza, index) => (
            <AnimatedSection key={index} animation="scale" delay={300 + index * 75}>
              <div className="card-subtle group hover:bg-card hover:shadow-medium transition-all duration-300 flex items-center gap-4 p-5 glow-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <competenza.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-charcoal">
                  {competenza.label}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionEN;
