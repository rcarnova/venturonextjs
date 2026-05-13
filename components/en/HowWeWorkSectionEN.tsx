import { Users, MessageSquare, Repeat, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "../AnimatedSection";
import GlowTitle from "../GlowTitle";

const services = [
  {
    icon: Users,
    title: "Culture & Identity",
    items: [
      "Facilitated workshops that reveal who you really are",
      "Materials that make visible who you already are",
      "Cultural profiles extracted from real stories"
    ]
  },
  {
    icon: MessageSquare,
    title: "Language & Communication",
    items: [
      "Strategic naming",
      "Shared glossaries",
      "Tone of voice that comes from within, not imposed from outside"
    ]
  },
  {
    icon: Repeat,
    title: "Rituals & Operations",
    items: [
      "Rituals redesigned from the ones that already work",
      "Decision-making processes that reflect actual culture",
      "Coaching with handover"
    ]
  }
];

const HowWeWorkSectionEN = () => {
  return (
    <section id="how-we-work" className="pt-0 pb-[60px]">
      <div className="container-wide">
        {/* Lumen Section */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mb-16 rounded-2xl p-8 md:p-12 lg:p-16" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)' }}>
            <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
              {/* Left column - 60% */}
              <div className="md:col-span-3">
                <span className="text-eyebrow font-mono text-white/50">
                  Our method
                </span>
                <h3 className="text-section text-white mt-4 mb-5">
                  Lumen — We don't measure culture. We illuminate it.
                </h3>
                <p className="text-body text-white/70 mb-6">
                  Organizational culture is invisible precisely because it's omnipresent. Lumen is how we bring it to the surface — through stories, not questionnaires. The result is a faithful mirror of how people truly experience the organization.
                </p>
                <Link
                  href="/en/lumen"
                  className="inline-flex items-center gap-2 text-white font-medium underline underline-offset-4 hover:gap-3 transition-all duration-300"
                >
                  Discover how Lumen works
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right column - 40% */}
              <div className="md:col-span-2">
                <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-6 md:p-8">
                  <span className="text-eyebrow font-mono text-white/40 block mb-4">
                    One of the questions we ask
                  </span>
                  <p className="text-lg md:text-xl italic leading-relaxed text-white/90">
                    "Imagine meeting a friend you haven't seen in months. They ask you what it's like to work here. What do you tell them, in two minutes?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default HowWeWorkSectionEN;
