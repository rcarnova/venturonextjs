import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/CaseStudyLayoutEN";

const McCannHealthEN = () => {
  return (
    <>
      <SEO
        title="Listening and Envisioning for the new office — McCann Health — Venturo"
        description="Board interviews, organisation-wide survey and envisioning workshop to define the values the new McCann Health office needed to convey."
        canonical="https://venturoconsulting.it/en/case-studies/mccann-health"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/mccann-health",
          en: "https://venturoconsulting.it/en/case-studies/mccann-health",
        }}
      />
      <CaseStudyLayoutEN
        caseId="mccann-health"
        title="McCann Health"
        subtitle="Listening and Envisioning to define the values of the new office"
        credit="In collaboration with Smartworking Srl"
        logo="/logos/mccann_health_white.png"
        logoAlt="McCann Health"
        logoNeedsInvert={false}
        logoClassName="h-24 md:h-32 w-auto object-contain mx-auto mb-8 bg-charcoal px-6 py-4 rounded-lg"
        overview={[
          { label: "Sector", value: "Healthcare / Advertising" },
          { label: "Stakeholders", value: "Board + Organisation" },
          { label: "Participants", value: "6 board interviews" },
          { label: "Approach", value: "Listening & Envisioning" },
        ]}
        challenge={{
          description:
            "McCann Health was rethinking its physical space. The question was not just about interior design: it was about understanding which values the office needed to convey, and how to align the board and the organisation around that vision. Listen before designing — so that the spatial choices genuinely reflected the agency's identity.",
          problems: [
            "Risk of spatial choices misaligned with the organisation's real identity",
            "Board and organisation potentially on different wavelengths",
            "Need to translate subjective perceptions into concrete design directions",
            "Making values emerge from the group, not imposing them from outside",
          ],
        }}
        phases={[
          {
            title: "Structured board interviews",
            description:
              "Design of the interview protocol and delivery of 6 structured interviews with board members. The goal was to understand how leadership described the organisation — yesterday, today and tomorrow — collecting individual perceptions as the basis for subsequent collective alignment.",
            image: {
              src: "/images/cases/mccann-health/cover.jpg",
              alt: "McCann Health envisioning workshop — team at work with images and post-its",
              caption: "The group at work during the envisioning session",
            },
          },
          {
            title: "Organisation-wide mini-survey",
            description:
              "Design, delivery and analysis of a mini-survey with 4 open-ended questions sent to the entire organisation. Classification and synthesis of responses to balance leadership's vision with the perceptions of those who work in the agency every day.",
          },
          {
            title: "Restitution and Envisioning workshop",
            description:
              "Design and facilitation of a workshop to feed back what emerged from the listening phase and launch the envisioning phase. The group explored three time horizons — yesterday, today, tomorrow — through visual and narrative exercises. The images and words that emerged from the collective work defined the values and design direction.",
          },
          {
            title: "Synthesis and values definition",
            description:
              "Drafting of the final report with guidance on the office model and the values the space should convey. Four guiding tensions emerged from the group's work: Continuous rebirth, Fighting spirit and imagination, Being a team in diversity, Human-scale digital future.",
            image: {
              src: "/images/cases/mccann-health/nuova-sede.png",
              alt: "New McCann Health headquarters — architectural render exterior",
              caption: "The new headquarters render: where culture becomes space",
            },
          },
        ]}
        results={[
          "Listening phase report with board and organisation perceptions",
          "Concrete guidance on the office model to be built",
          "4 values that emerged bottom-up: Rebirth, Fighting spirit, Team, Human-scale future",
          "Alignment between board and organisation on design choices",
          "Envisioning workshop facilitated with visual and narrative outputs",
        ]}
      />
    </>
  );
};

export default McCannHealthEN;
