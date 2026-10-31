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
    title: "Coach & Culture Designer",
    image: "/team/rosario.jpg",
    linkedin: "https://www.linkedin.com/in/rosariocarnovale/",
    bio: "He grew up as a manager at Oracle for 10 years, then in 2016 co-founded Smartworking Srl, Italy's first hybrid work consultancy. He worked as a coach and consultant on organizational change projects at Maxim Consulting and on digital at Telnext (Deloitte Digital). In 2017 he founded Studio Miller with Massimo Benedetti.",
    bio2: "He works with leaders and with those who guide teams every day: that is where, in the daily relationship, engagement is decided. As a coach he works with many managers, often young ones, and beyond the right questions he gives them concrete tools. He has lived first-hand the gap between what an organization promises and what people experience. He knows culture does not change through top-down policies, but through everyday artifacts: meetings, rituals, language.",
  },
  {
    name: "Massimo Benedetti",
    role: "Partner",
    title: "Storyteller & Facilitator",
    image: "/team/massimo.jpg",
    linkedin: "https://www.linkedin.com/in/massimobenedetti/",
    bio: "A graduate of Politecnico di Torino, in 2016 he earned the Corporate Storytelling Specialist qualification at IULM. Since 2017 he has been a trainer at Talent Garden's Innovation School. Co-founder of Studio Miller, he has worked for years on content and narrative for brands such as Randstad, Sambonet, Samsung and Findomestic.",
    bio2: "He leads Lumen and facilitates the workshops where organizations listen to themselves. His work is getting people to talk: asking the right question, creating the space where the true answer arrives, recognizing in stories what no scored questionnaire can see. Then he gives back what emerged in a form people recognize as their own.",
  },
  {
    name: "Arianna Barisan",
    role: "Partner",
    title: "Art Director",
    image: "/team/arianna.jpg",
    linkedin: "https://www.linkedin.com/in/arianna-barisan/",
    bio: "Art Director with long experience in luxury: for eight years she led concept, image and events for international watch and jewelry brands, including Miu Miu, Marco Bicego and Panerai. Since 2019 she has worked as a consultant on visual strategy, events and communication processes.",
    bio2: "She makes visible the culture that Lumen brings to the surface: symbols, spaces, objects, visual languages. It is how we reach people who never read a company email, who work shifts, in stores or on the road. She does not come in afterwards, once the culture has been written: she works with Rosario and Massimo while it emerges. From luxury she brings rigor in detail and care for whoever receives each object.",
  },
];

const AboutEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us — Venturo, Organizational Culture Consulting Italy"
        description="Venturo is a boutique consultancy on organizational culture and employee engagement. We bring out an organization's real identity, so people can recognize themselves in what they do."
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
                People engage with what they recognize themselves in.<br /> We bring it to the surface.
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="max-w-3xl space-y-6">
                 <p className="text-body text-muted-foreground">
                  Venturo was born from a conviction forged in the field: when people do not recognize themselves in the organization they work for, engagement drops. Benefits do not bring it back, and neither do campaigns. What brings it back is an identity people see lived every day, starting with those who lead them.
                </p>
                <p className="text-body text-muted-foreground">
                  That is why we start from the inside. We listen to how people tell the story of their organization, we work with the managers who lead teams, and only then do we shape what gets communicated, inside and out.
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
                  Venturo was born from the meeting of three crafts that rarely work together: coaching, storytelling and art direction.
                </p>
                <p className="text-body text-background/80">
                  <strong className="text-background">Rosario</strong> works with leaders and with those who guide teams every day, because that is where engagement is decided.
                </p>
                <p className="text-body text-background/80">
                  <strong className="text-background">Massimo</strong> gets people talking and listens to what they say. He is the heart of <Link href="/en/lumen" className="text-background hover:underline">Lumen</Link>.
                </p>
                <p className="text-body text-background/80">
                  <strong className="text-background">Arianna</strong> makes culture visible, even to people who are never in the office.
                </p>
                <p className="text-body text-background/80">
                  Together we do one thing: bring out an organization&apos;s real identity, so people can recognize themselves in what they do. There is no engagement without identity.
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
                  <div className="group scroll-mt-28" id={member.name.toLowerCase().replace(/\s+/g, "-")}>
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
                        {member.role} · {member.title}
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
