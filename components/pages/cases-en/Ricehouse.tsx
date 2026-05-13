import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/en/CaseStudyLayoutEN";

const RicehouseEN = () => {
  return (
    <>
      <SEO
        title="Employer branding for a green tech startup and circular economy — Venturo"
        description="How Ricehouse made its cultural identity visible to attract talent who believe in circular economy and green building."
        canonical="https://venturoconsulting.it/en/case-studies/ricehouse"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio/ricehouse", en: "https://venturoconsulting.it/en/case-studies/ricehouse" }}
      />
      <CaseStudyLayoutEN
      caseId="ricehouse"
      logo="/logos/ricehouse_white.webp"
      logoAlt="Ricehouse"
      title="Ricehouse"
      subtitle="From rice to green building: finding people who believe in your why"
      overview={[
        { label: "Industry", value: "Green Tech / Bio-construction" },
        { label: "Size", value: "25 people" },
        { label: "Duration", value: "6-8 weeks" },
        { label: "Stakeholders", value: "Founder, HR, Marketing" },
      ]}
      challenge={{
        description:
          "Ricehouse transforms rice processing waste into sustainable building materials. A circular economy startup with a clear challenge: how do you attract talent when you work with rice straw? Traditional job ads didn't communicate the \"why\". Candidates couldn't clearly perceive what it meant to work at Ricehouse and which values guided daily decisions.",
        problems: [
          "Strong identity but not explicit externally",
          "Difficulty attracting qualified profiles aligned with the circular mission",
          "Gap between promises and actual candidate experience",
        ],
      }}
      phases={[
        {
          title: "Identity emergence (2 weeks)",
          description:
            "\"Who do we want with us?\" workshop with founders and management. We didn't ask \"what are your values?\" but \"tell us about the last time someone made a mistake - what happened?\". Identity emerged from facts, not aspirations.",
          image: {
            src: "/workshop/ricehouse-envisioning-1.webp",
            alt: "Ricehouse envisioning workshop - team working on visual thinking and identity definition",
            caption: "Envisioning workshop: building identity through images and storytelling, 2024",
          },
        },
        {
          title: "Employer Personas (2 weeks)",
          description:
            "Building concrete personas: who we know will thrive here, who will struggle. Cultural fit definition verifiable from the interview. Not aspirational personas, but patterns extracted from real stories.",
        },
        {
          title: "Operational application (2-3 weeks)",
          description:
            "Redesign of operational rituals. Weekly meetings went from 90 minutes to 45 minutes while maintaining effectiveness. Job posting and interview process revision to tell the why before the what.",
        },
      ]}
      results={[
        "More qualified applications aligned with company values",
        "Coherence between declared identity and daily practices",
        "More effective meetings: from 90' to 45' maintaining output",
        "Clearer and more transparent onboarding process",
      ]}
    />
    </>
  );
};

export default RicehouseEN;
