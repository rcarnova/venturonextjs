import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/en/CaseStudyLayoutEN";

const RandstadEN = () => {
  return (
    <>
      <SEO
        title="Employer branding and cultural identity for a recruiting agency — Venturo"
        description="How we helped Randstad make its organizational culture visible to attract candidates more aligned with company values."
        canonical="https://venturoconsulting.it/en/case-studies/randstad"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio/randstad", en: "https://venturoconsulting.it/en/case-studies/randstad" }}
      />
      <CaseStudyLayoutEN
      caseId="randstad"
      logo="/logos/randstad_blue.svg"
      logoAlt="Randstad"
      logoClassName="h-16 sm:h-20 md:h-28 lg:h-32 mx-auto mb-8 brightness-0"
      title="Randstad Italia"
      subtitle="Visible culture, aligned candidates"
      overview={[
        { label: "Industry", value: "HR Search & Selection" },
        { label: "Size", value: "Multinational - 40 countries" },
        { label: "Duration", value: "3-4 months" },
        { label: "Stakeholders", value: "HR Manager, Marketing & Communications" },
      ]}
      challenge={{
        description:
          "Randstad Italia, part of a Dutch multinational leader in job search, was looking for a way to authentically tell the story of the company's internal life. Mara (internal communication), Paola (HR) and Fulvia (marketing) wanted to translate the company culture into credible content through employees' voices.",
        problems: [
          "How to tell the Randstad reality authentically",
          "What to say and how to say it without HR rhetoric",
          "How to involve the internal community in the storytelling",
        ],
      }}
      phases={[
        {
          title: "Values identification (workshop)",
          description:
            "Facilitated workshops to bring out the real values on which Randstad Italia is based. Not aspirational values, but those actually lived and transmitted daily.",
          image: {
            src: "/workshop/randstad-postit-wall.jpg",
            alt: "Workshop employer perception analysis with Randstad team",
            caption: "Employer perception mapping workshop, 2024",
          },
        },
        {
          title: "Community involvement",
          description:
            "We directly asked the Randstad community to share their experience with the company. Bottom-up approach to capture authenticity.",
        },
        {
          title: "Interviews and storytelling",
          description:
            "Conducting interviews with employees who live the company's challenges daily. We wanted them to tell the Randstad story, not marketing.",
        },
        {
          title: "Employer branding video",
          description:
            "Video creation based on the emerged values and collected interviews. Editing that extracts and conveys the true essence of Randstad through real faces and stories.",
        },
      ]}
      results={[
        "Authentic employer branding video with employees' voices",
        "Company values made explicit and recognizable",
        "Community actively involved in storytelling",
        "Credible messages because based on real experiences",
        "Material usable for attraction and internal communication",
      ]}
    />
    </>
  );
};

export default RandstadEN;
