import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const team = [
  {
    name: "Rosario Carnovale",
    image: "/team/rosario.jpg",
    description: "Consulente e coach con un'ossessione: rendere concreto ciò che nelle organizzazioni resta invisibile.",
  },
  {
    name: "Massimo Benedetti",
    image: "/team/massimo.jpg",
    description: "Sa che le storie rivelano più dei numeri. Facilita le conversazioni in cui le organizzazioni si ascoltano davvero.",
  },
  {
    name: "Arianna Barisan",
    image: "/team/arianna.jpg",
    description: "Art Director che lavora sulla cultura prima che sull'estetica. I suoi visual raccontano la lingua madre dell'organizzazione.",
  },
];

const TeamPreviewSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-section text-foreground">
            Le persone dietro Venturo
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 100}>
              <div className="text-center">
                <div className="aspect-square overflow-hidden rounded-lg mb-5 bg-muted max-w-[280px] mx-auto">
                  <img
                    src={member.image}
                    alt={`${member.name} - Partner Venturo, consulenza cultura organizzativa`}
                    className="w-full h-full object-cover object-[center_30%] grayscale hover:grayscale-0 transition-all duration-500"
                    width={280}
                    height={280}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1 mb-3">
                  Partner
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
            href="/chi-siamo"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-colors"
          >
            Scopri chi siamo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TeamPreviewSection;
