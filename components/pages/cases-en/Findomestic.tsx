import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/en/CaseStudyLayoutEN";

const FindomesticEN = () => {
  return (
    <>
      <SEO
        title="Internal communication and organizational culture in the financial sector — Venturo"
        description="Intensive workshop to unify language between customer service and social team in one of Italy's leading consumer credit companies."
        canonical="https://venturoconsulting.it/en/case-studies/findomestic"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/findomestic",
          en: "https://venturoconsulting.it/en/case-studies/findomestic"
        }}
      />
      <CaseStudyLayoutEN
        caseId="findomestic"
        logo="/logos/findomestic_white.webp"
        logoAlt="Findomestic"
        title="Findomestic"
        subtitle="From corporate language to unified conversation"
        overview={[
          { label: "Sector", value: "Finance & consumer credit" },
          { label: "Teams involved", value: "Customer service + Social media" },
          { label: "Duration", value: "2-day intensive workshop + follow-up" },
          { label: "Stakeholders", value: "HR, Marketing & Communications" },
        ]}
        challenge={{
          description:
            "With social media growth — particularly Facebook — Findomestic found itself like many finance companies handling customer service requests through public channels. The marketing team managing social became the first point of contact for requests requiring actual customer service intervention. The problem: when customer service stepped in, they used formal, procedural corporate language that clashed with social's conversational tone, creating perceived inconsistency and lowering community trust.",
          problems: [
            "Language collision: formal service vs conversational social",
            "Marketing team as first contact without technical service expertise",
            "When service intervenes, corporate language 'scares' public users",
            "Communication inconsistency damages brand perception on public channels",
            "Department silos: service and social didn't speak the same language",
          ],
        }}
        phases={[
          {
            title: "Unified language workshop (2 days)",
            description:
              "Two intensive days with customer service AND social teams together — not separated. We didn't ask 'what's your tone of voice?', but 'tell me about the last time you responded to an angry customer publicly: what did you want to say? what did you say? what stopped you?'. Real frictions emerged: service feared being 'too informal', social feared seeming 'cold' like service.",
          },
          {
            title: "Co-creating engagement rules",
            description:
              "Shared construction of engagement rules for public social requests. Not top-down, but co-created by teams. Examples: 'When do we use formal vs informal?', 'When can we use emojis?', 'What do we never say publicly?', 'How do we handle escalations?'. Each rule tested on real cases brought by participants. Framework: acknowledge emotion → respond human → resolve technical.",
          },
          {
            title: "Common operational vocabulary",
            description:
              "Building common vocabulary: technical terms translated into conversational language. Not an abstract glossary, but concrete use cases. Example: 'suspended payment' becomes 'let's pause your payment'. 'Document verification' becomes 'we need to check a document'. Each term validated by both teams to balance clarity (social) and precision (service).",
          },
        ]}
        results={[
          "Unified language: service and social speak the same language publicly",
          "Increased business opportunities: service requests become sales occasions",
          "Community satisfaction: improved service perception on social channels",
          "Unified teams: end of communication silos between service and marketing",
          "Operational vocabulary: living glossary used daily by both teams",
        ]}
      />
    </>
  );
};

export default FindomesticEN;
