import { Users, Puzzle, Palette, BarChart3, Sparkles, PenTool } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";

const competenze = [
  { icon: Users, label: "Coaching & facilitazione" },
  { icon: Puzzle, label: "Design organizzativo" },
  { icon: Sparkles, label: "Internal branding" },
  { icon: BarChart3, label: "Data analysis culturale" },
  { icon: Palette, label: "Art direction" },
  { icon: PenTool, label: "Progettazione editoriale" },
];

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="section-padding bg-muted/30">
      <div className="container-wide">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <GlowTitle className="text-2xl md:text-3xl font-medium text-charcoal">
              Chi Siamo
            </GlowTitle>
            <p className="text-xl font-medium text-charcoal mt-4">
              Uno studio ibrido che conosce le organizzazioni dall'interno
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <div className="max-w-3xl mx-auto space-y-6 text-center mb-16">
            <p className="text-muted-foreground leading-relaxed">
              Non siamo osservatori esterni. Siamo persone che hanno vissuto le dinamiche organizzative da dentro, in ruoli operativi e strategici. Sappiamo cosa significa provare a cambiare una cultura mentre si gestisce il quotidiano.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Integriamo competenze diverse — coaching, facilitazione, design, comunicazione, analisi dati — perché la cultura non si cambia con un solo strumento. Lavoriamo su misura, con progetti che hanno sempre un inizio, uno sviluppo e un rinforzo continuo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il nostro metodo parte sempre dall'ascolto e dall'analisi, prosegue con una progettualità concreta, e si conclude con materiali e strumenti che l'organizzazione può continuare a usare.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-charcoal uppercase tracking-wider">
              Le nostre competenze
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

export default AboutSection;
