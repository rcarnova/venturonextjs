import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/en/CaseStudyLayoutEN";

const EuPromotionsEN = () => {
  return (
    <>
      <SEO
        title="Eu.promotions — Brand Identity & Organizational Culture | Venturo"
        description="How we built eu.promotions' brand identity starting from the team's real culture. Envisioning workshop, content strategy and EVP for an international SME in loyalty & retail marketing."
        canonical="https://venturoconsulting.it/en/case-studies/eupromotions"
        ogImage="https://venturoconsulting.it/cases/eupromotion-envisioning.webp"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio/eupromotions", en: "https://venturoconsulting.it/en/case-studies/eupromotions" }}
      />
      <CaseStudyLayoutEN
        caseId="eupromotions"
        logo="/logos/eupromotion_white.webp"
        logoAlt="Eu.promotions"
        logoNeedsInvert={false}
        logoClassName="h-16 sm:h-20 md:h-28 lg:h-32 w-auto object-contain mx-auto mb-8"
        title="Eu.promotions"
        subtitle="Identity discovered, not invented"
        overview={[
          { label: "Industry", value: "Loyalty & Retail Marketing" },
          { label: "Size", value: "International SME, 6 legal entities in Europe" },
          { label: "Duration", value: "3 months" },
          { label: "Stakeholders", value: "CEO, Marketing, Internal team" },
        ]}
        challenge={{
          description:
            "Eu.promotions is an Italian company with a presence in over 20 countries, specialized in loyalty programs for retail. A solid track record, concrete results, a team with years of experience. Yet the corporate communication couldn't tell this story: the brand spoke externally with a language that didn't reflect the real values and behaviors of the people who worked there every day. The risk was twofold: losing credibility with international clients and dispersing the internal identity that had made the company what it was.",
          problems: [
            "How to differentiate eu.promotions from global competitors with an authentic and recognizable brand",
            "How to build communication starting from the real values lived internally",
            "How to align external storytelling (website, LinkedIn, sales materials) with the team's culture",
            "How to involve business people in the process, not just marketing",
          ],
        }}
        phases={[
          {
            title: "Project Identity/Vision Workshop",
            description:
              "Intensive working sessions with the team — not just marketing, but also business profiles — to surface who eu.promotions really is: the lived values, ambitions, the unique way of working with clients. In a single workshop day, the team reached a level of alignment and clarity they didn't expect was possible in such a short time.",
            image: {
              src: "/cases/eupromotion-envisioning.webp",
              alt: "Envisioning workshop with the eu.promotions team, working with images and post-its",
              caption: "Project Identity workshop with the eu.promotions team",
            },
          },
          {
            title: "UX Analysis and Design",
            description:
              "Mapping the experience of different stakeholders: retailers, candidates, international partners. Definition of personas and experience maps to build truly relevant multichannel communication for the audience.",
          },
          {
            title: "Content Strategy",
            description:
              "Starting from the workshop outputs, we defined tone of voice, keywords, value stories and editorial plan. Not generic content, but narratives rooted in the team's real experience and the concrete results of their programs.",
            image: {
              src: "/cases/eupromotion-grease.png",
              alt: "Workshop slide: Status quo vs Vision with Grease movie reference",
              caption: "From the workshop: transformation as a visual metaphor",
            },
          },
        ]}
        results={[
          "Structured EVP shared internally",
          "Brand identity aligned between internal values and external communication",
          "Communication guidelines shared between marketing and business",
          "Distinctive tone of voice compared to global competitors",
          "Team aligned on vision, UVP and differentiators in a single working day",
          "Content strategy deployable on website, LinkedIn and sales materials",
          "Process co-built with people, not imposed from above",
        ]}
      />
    </>
  );
};

export default EuPromotionsEN;
