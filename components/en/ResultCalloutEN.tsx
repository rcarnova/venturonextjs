import { Package } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const ResultCalloutEN = () => {
  return (
    <section className="pt-[40px] pb-0">
      <div className="container-wide">
        <AnimatedSection animation="fade-up">
          <div 
            className="rounded-xl p-8 md:p-10 border-l-[6px] border-l-[#FF006E] flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 transition-all duration-300 hover:scale-[1.02] hover:border-l-[8px] cursor-default group callout-glow"
            style={{ 
              background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)'
            }}
          >
            <div className="flex-shrink-0">
              <Package className="w-12 h-12 text-white opacity-90" />
            </div>
            <div className="text-center md:text-left">
               <h3 className="text-subtitle text-white mb-4">
                 The result? Concrete artifacts
              </h3>
              <p className="text-body text-white/90">
                Our projects don't end with summary slides. We produce tools that stay in your company and get used: operational playbooks, decision canvases, toolkits for managers. We don't leave you with insights, we leave you with what you need to act.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResultCalloutEN;
