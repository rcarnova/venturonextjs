"use client";

import { SEO } from "@/components/SEO";

import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AnimatedSection from "@/components/AnimatedSection";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Rosario Carnovale",
    role: "Partner",
    title: "Business Coach & Brand Strategist",
    image: "/team/rosario.jpg",
    linkedin: "https://www.linkedin.com/in/rosariocarnovale/",
    bio: "Grew up as a manager at Oracle for 10 years. In 2016 he co-founded Smartworking Srl — the first consultancy dedicated to hybrid work in Italy. He worked as a coach and consultant on organizational change projects at Maxim Consulting and digital at Telnext (Deloitte Digital). In 2017 he founded Studio Miller with Massimo Benedetti.",
    bio2: "At Venturo he leads cultural transformation and strategic employer branding projects. He experienced firsthand the gap between promise and organizational reality in large companies, and methodized that experience into proprietary tools like the Smart Working Canvas. He brings one of the strongest track records in Italy on hybrid work and the conviction that culture changes by modifying concrete artifacts — meetings, rituals, language.",
  },
  {
    name: "Arianna Barisan",
    role: "Partner",
    title: "Art Director",
    image: "/team/arianna.jpg",
    linkedin: "https://www.linkedin.com/in/arianna-barisan/",
    bio: "Art Director with a trajectory in luxury: Miu Miu, Marco Bicego, Panerai — eight years leading concept, image, and events for international watchmaking and jewelry brands. Since 2019 she works as a freelance consultant on visual strategies, events, and communication processes.",
    bio2: "At Venturo she translates cultural insights into visual artifacts — not just design but materialized culture. First we understand who the organization truly is (through Lumen), then we create the symbols, colors, and visual languages that reinforce that identity. She brings aesthetic rigor and the conviction that building a brand coincides with building an internal culture.",
  },
  {
    name: "Massimo Benedetti",
    role: "Partner",
    title: "Communication & Storytelling Specialist",
    image: "/team/massimo.jpg",
    linkedin: "https://www.linkedin.com/in/massimobenedetti/",
    bio: "Graduated from Politecnico di Torino, in 2016 he earned a Corporate Storytelling Specialist qualification from IULM. Since 2017 he has been a trainer at Talent Garden's Innovation School. Co-founder of Studio Miller, he has years of experience in content strategy and narrative for brands like Randstad, Sambonet, Samsung, Findomestic.",
    bio2: "At Venturo he leads the Lumen methodology and facilitates workshops where organizations listen to themselves through their own voices. He owns the narrative dimension — Lumen's questions are not surveys but emergence devices that require expertise in facilitating deep conversations. He turns what organizations live through into stories people recognize as their own.",
  },
];

const AboutEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us — Venturo, Organizational Culture Consulting Italy"
        description="Venturo is founded by professionals with backgrounds in HR, marketing and communication. We work with Italian companies to make organizational culture visible."
        canonical="https://venturoconsulting.it/en/about"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/chi-siamo", en: "https://venturoconsulting.it/en/about" }}
      />
      <HeaderEN />
      <main>
        {/* Intro Section */}
        <div className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container-wide">
            <AnimatedSection className="mb-16 md:mb-24">
              <div className="max-w-2xl">
                <p className="text-eyebrow font-mono text-primary mb-4">
                  About us
                </p>
              <h1 className="text-hero text-foreground">
                Organizational culture is the most important promise a company makes.<br /> To the market and to its people.
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="max-w-3xl space-y-6">
                 <p className="text-body text-muted-foreground">
                  Venturo was born from a conviction forged in the field: organizations that don't make their culture visible eventually struggle on two fronts. Externally, with a brand that fails to attract the right people. Internally, with people who struggle to recognize themselves in the values they live every day.
                </p>
                <p className="text-body text-muted-foreground">
                  We come from both worlds. We know how organizational culture works and we know how to communicate it. Working on both dimensions together is not a strategic choice. It's the only way it makes sense.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Why we work together — Hero section */}
        <div className="bg-foreground py-20 md:py-32">
          <div className="container-wide">
            <AnimatedSection>
              <p className="text-eyebrow font-mono text-primary-foreground/60 mb-4">
                Synergy
              </p>
              <h2 className="text-section text-background mb-10">
                Why we work together
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="max-w-3xl space-y-6">
                 <p className="text-body text-background/80">
                  Venturo was born from the convergence of three competencies that rarely speak to each other.
                </p>
                 <p className="text-body text-background/80">
                  <strong className="text-background">Rosario</strong> brings culture from the inside — he lived in large organizations for 10 years at Oracle and methodized that experience into proprietary tools like the Smart Working Canvas. He knows that organizations don't change through top-down policies, but by consciously modifying everyday artifacts.
                </p>
                 <p className="text-body text-background/80">
                  <strong className="text-background">Massimo</strong> brings narrative as method — he knows that stories reveal more than numbers, and that facilitating deep conversations is a specific competency. <Link href="/en/lumen" className="text-background hover:underline">Lumen</Link>'s questions are not surveys — they are narrative emergence devices.
                </p>
                 <p className="text-body text-background/80">
                  <strong className="text-background">Arianna</strong> brings design as materialization — she translates cultural insights into visual artifacts that communicate and reinforce deep meanings. She doesn't "design the logo after the culture has been defined" — she works simultaneously on culture and identity.
                </p>
                <p className="text-body text-background/80">
                  This combination allows us to do something few others do: work on culture as the infrastructure of the brand promise — what makes every external communication, every hire, every client proposal credible or false.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 md:py-24">
          <div className="container-wide">
            <AnimatedSection>
              <div className="max-w-2xl mb-12">
                <p className="text-eyebrow font-mono text-primary mb-4">
                  Team
                </p>
                <h2 className="text-section text-foreground">
                  Partners
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={50}>
              <p className="text-body text-muted-foreground max-w-3xl mb-16">
                We've known each other since 2013, when we co-founded Bottega Miller — a space for independent professionals with different talents. Venturo was born from that story.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {team.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 100}>
                  <div className="group">
                    <div className="aspect-square overflow-hidden rounded-lg mb-6 bg-muted">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.title}, Venturo Partner`}
                        className="w-full h-full object-cover object-[center_30%] grayscale group-hover:grayscale-0 transition-all duration-500"
                        width={400}
                        height={400}
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {member.name}
                        </h3>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      </div>
                      <p className="text-sm font-mono uppercase tracking-widest text-primary">
                        {member.role}
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed mt-3">
                        {member.bio}
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed mt-3">
                        {member.bio2}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </main>
      <FooterEN />
    </div>
  );
};

export default AboutEN;
