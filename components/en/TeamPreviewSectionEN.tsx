import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "../AnimatedSection";

const team = [
  {
    name: "Rosario Carnovale",
    title: "Coach & Culture Designer",
    image: "/team/rosario.jpg",
    description: "Works with leaders and with those who guide teams every day, where engagement is decided.",
  },
  {
    name: "Massimo Benedetti",
    title: "Storyteller & Facilitator",
    image: "/team/massimo.jpg",
    description: "Gets people talking and listens to what they say. He is the heart of Lumen.",
  },
  {
    name: "Arianna Barisan",
    title: "Art Director",
    image: "/team/arianna.jpg",
    description: "Makes culture visible, even to people who are never in the office.",
  },
];

const TeamPreviewSectionEN = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-section text-foreground">
            The people behind Venturo
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 100}>
              <div className="text-center">
                <div className="aspect-square overflow-hidden rounded-lg mb-5 bg-muted max-w-[280px] mx-auto">
                  <img
                    src={member.image}
                    alt={`${member.name} - Venturo Partner, organizational culture consulting`}
                    className="w-full h-full object-cover object-[center_30%] grayscale hover:grayscale-0 transition-all duration-500"
                    width={280}
                    height={280}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1 mb-3">
                  Partner · {member.title}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto">
                  {member.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link
            href="/en/about"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-colors"
          >
            Discover who we are
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TeamPreviewSectionEN;
