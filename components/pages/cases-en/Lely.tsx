import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/en/CaseStudyLayoutEN";

const LelyEN = () => {
  return (
    <>
      <SEO
        title="Leadership and team management for a manufacturing company — Venturo"
        description="A practical framework for technical managers who need to lead teams without HR experience in the agricultural and manufacturing sector."
        canonical="https://venturoconsulting.it/en/case-studies/lely"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio/lely", en: "https://venturoconsulting.it/en/case-studies/lely" }}
      />
      <CaseStudyLayoutEN
      caseId="lely"
      logo="/logos/lely_white.svg"
      logoAlt="Lely"
      title="Lely"
      subtitle="Concrete tools for managing people"
      overview={[
        { label: "Industry", value: "Agriculture / Agritech" },
        { label: "Size", value: "Agricultural entrepreneurs" },
        { label: "Duration", value: "1 day + 2 weeks" },
        { label: "Stakeholders", value: "Marketing, HR" },
      ]}
      challenge={{
        description:
          "Lely works with agricultural entrepreneurs who manage people without structured managerial training. They needed simple, concrete, and immediately applicable tools to evaluate collaborators on observable behaviors, not vague judgments.",
        problems: [
          "Low managerial maturity of clients",
          "Lack of shared language for people management",
          "Need for autonomous and practical tools",
        ],
      }}
      phases={[
        {
          title: "Intensive workshop (1 day)",
          description:
            "Workshop focused on observable behaviors instead of subjective evaluations. Co-construction of framework with agricultural managers to ensure real applicability.",
        },
        {
          title: "Evaluation meter (2 weeks)",
          description:
            "Creation of the \"Behavior Evaluation Meter\": simple tool with \"Needs training\", \"On track\", \"Exemplary\" scale. Each level based on concrete and observable behaviors, not impressions.",
        },
        {
          title: "Handover for autonomy",
          description:
            "Method transfer to managers. Coaching until they are autonomous in applying the tool without external support.",
        },
      ]}
      results={[
        "Evaluation Meter tool usable autonomously",
        "Shared language for people management",
        "Individual action plan for each collaborator",
        "Managers more confident in evaluations",
        "Shift from vague judgments to constructive and improvable feedback",
      ]}
    />
    </>
  );
};

export default LelyEN;
