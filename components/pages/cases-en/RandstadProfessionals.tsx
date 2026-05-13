import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/en/CaseStudyLayoutEN";

const RandstadProfessionalsEN = () => {
  return (
    <>
      <SEO
        title="Randstad Professionals — Venturo"
        description="A division that tells its story through its people's voices. EVP, Talent Personas and employer branding videos for Randstad Professionals."
        canonical="https://venturoconsulting.it/en/case-studies/randstad-professionals"
        ogImage="https://venturoconsulting.it/cases/randstad-professionals-envisioning.webp"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio/randstad-professionals", en: "https://venturoconsulting.it/en/case-studies/randstad-professionals" }}
      />
      <CaseStudyLayoutEN
        caseId="randstad-professionals"
        logo="/logos/randstad_blue.svg"
        logoAlt="Randstad Professionals"
        logoClassName="h-16 sm:h-20 md:h-28 lg:h-32 mx-auto mb-8 brightness-0"
        title="Randstad Professionals"
        subtitle="Brand identity for those who select the best"
        overview={[
          { label: "Industry", value: "HR Search & Selection" },
          { label: "Size", value: "Specialized division — Italy" },
          { label: "Duration", value: "4-5 months" },
          { label: "Stakeholders", value: "HR, Marketing, Business Unit Leader" },
        ]}
        challenge={{
          description:
            "Randstad Professionals is Randstad's division dedicated to middle and top management profiles. Despite the high quality of service, the division struggled to tell its story in a way that was distinct from the parent company, both toward candidates and client companies. The team wanted to build a strong, recognizable and credible identity, capable of attracting the right professionals and positioning Randstad Professionals as the partner of choice in the qualified search market.",
          problems: [
            "How to differentiate Randstad Professionals from Randstad Italia in the eyes of the market",
            "How to build an authentic and recognizable EVP (Employee Value Proposition)",
            "How to give voice to team professionals through credible content",
            "How to align internal values and external communication",
          ],
        }}
        phases={[
          {
            title: "Envisioning Workshop",
            description:
              "Working sessions with the team to surface internal perceptions: who we are, how we see the market, how we want to present ourselves to the world. Through work with images and visual stimuli, we brought to light the real values and ambitions of the division.",
            image: {
              src: "/cases/randstad-professionals-envisioning.webp",
              alt: "Envisioning workshop with the Randstad Professionals team, working with vision boards and image clippings",
              caption: "Envisioning workshop with the Randstad Professionals team",
            },
          },
          {
            title: "EVP and Value Pillars Development",
            description:
              "Starting from the workshop outputs, we built the Employee Value Proposition for Randstad Professionals, organized around three pillars: Human (empathy, relationships, ethics), Professionals (expertise, consulting, growth), Forward (innovation, anticipation, ambition).",
          },
          {
            title: "Talent Personas",
            description:
              "Definition of target personas: the professionals that Randstad Professionals wants to attract and retain. Detailed profiles covering fears, desires, behaviors and lifestyles, to build truly relevant messages.",
            image: {
              src: "/cases/randstad-professionals-personas.png",
              alt: "Talent Personas working document for Randstad Professionals",
              caption: "Talent Personas developed for Randstad Professionals",
            },
          },
          {
            title: "Employer Branding Video Production",
            description:
              "Writing, directing and producing video interviews with team professionals. Each video tells the story of a real person: who they are, why they chose Randstad Professionals, what makes them stay. Authenticity as a strategic choice, not as an effect.",
            image: {
              src: "/cases/randstad-professionals-video.jpg",
              alt: "Employer branding video production set with clapperboard for Randstad Professionals",
              caption: "On set for employer branding video interviews",
            },
          },
        ]}
        results={[
          "Structured EVP shared internally",
          "Talent Personas defined for recruitment and communication",
          "Value pillars aligned across HR, marketing and business",
          "Employer branding videos produced with real faces and voices",
          "Distinctive identity from the Randstad Italia brand",
          "Material usable on LinkedIn, careers page and selection",
        ]}
      />
    </>
  );
};

export default RandstadProfessionalsEN;
