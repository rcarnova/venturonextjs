import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/en/CaseStudyLayoutEN";

const UfficioPioEN = () => {
  return (
    <>
      <SEO
        title="Strategic naming and cultural identity for the non-profit sector — Venturo"
        description="Strategic naming project to create shared language across departments and make beneficiaries' journeys recognizable."
        canonical="https://venturoconsulting.it/en/case-studies/ufficio-pio"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/ufficio-pio",
          en: "https://venturoconsulting.it/en/case-studies/ufficio-pio",
        }}
      />
      <CaseStudyLayoutEN
        caseId="ufficio-pio"
        logo="/logos/ufficio_pio_white.webp"
        logoAlt="Ufficio Pio"
        title="Ufficio Pio"
        subtitle="From 'poverty relief area' to Traguardi"
        overview={[
          { label: "Sector", value: "Historic non-profit (since 1595)" },
          { label: "Size", value: "~50 staff + volunteers" },
          { label: "Duration", value: "4 months" },
          { label: "Stakeholders", value: "Leadership, Marketing & Communications" },
        ]}
        challenge={{
          description:
            "Ufficio Pio, a historic Turin organization fighting poverty since 1595, faced a profound problem: the name of their strategic area — 'Poverty Relief Area' — conveyed passive welfare instead of active protagonism. Staff felt stuck between the weight of history (over 400 years) and the desire for change. Beneficiaries were perceived as 'people to help' rather than 'protagonists of their own future'.",
          problems: [
            "Institutional name reinforcing stigma and victimization",
            "Team torn between historical stasis and desire for movement",
            "Gap between intention (empowerment) and language (welfarism)",
            "Weight of history: 'We've always been this way'",
          ],
        }}
        phases={[
          {
            title: "Collective identity emergence (2 weeks)",
            description:
              "Yesterday/Today/Tomorrow temporal mapping workshop with the entire team. We didn't ask 'what do you call yourselves', but 'who were you, who are you, who do you want to become'. Three phases emerged: Yesterday = stasis and separation ('should I move or stay still?'), Today = struggle but team movement ('Ok, let's pedal!'), Tomorrow = determination and protagonism ('the best is yet to come'). Collective metaphor: from uncertain pedaling to looking at the horizon together.",
          },
          {
            title: "Personas & Empathy Map (2 weeks)",
            description:
              "Creation of 4 realistic beneficiary personas: Federica (single mother, survival mode), Francesco (resigned unemployed), Honorine (domestic violence victim, seeking autonomy), Miranda (migrant, children's future). Key insight: personas weren't seeking 'assistance', they were seeking concrete goals. The organization's language didn't reflect this truth.",
          },
          {
            title: "Storytelling & Collaborative naming (4 weeks)",
            description:
              "Each staff member shared a real success story using the COARS framework (Context, Obstacles, Actions, Results, Suggestions). Collective reframe: from 'we help the poor' to 'we facilitate goals'. Participatory naming process with 25 team members. Chosen name: TRAGUARDI (Goals/Milestones). Works because: everyone has their own goals, implies movement not stasis, positive and aspirational, usable without shame.",
          },
        ]}
        results={[
          "Internal identity shift: from 'we provide assistance' to 'we facilitate protagonism'",
          "Operational language: meetings and documents adopt 'personal goals' framework",
          "Beneficiary perception: less stigma, more dignity ('I'm going to Traguardi' vs 'I'm going to the welfare office')",
          "Communication coherence: new name aligns declared and lived culture",
        ]}
      />
    </>
  );
};

export default UfficioPioEN;
