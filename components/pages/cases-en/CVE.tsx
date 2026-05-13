import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/en/CaseStudyLayoutEN";

const CVEEN = () => {
  return (
    <>
      <SEO
        title="Facilitation and organizational culture for an energy company — Venturo"
        description="Design and facilitation of CVE's first company Town Hall. A landmark moment to align leadership and people on values and strategic direction."
        canonical="https://venturoconsulting.it/en/case-studies/cve"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/cve",
          en: "https://venturoconsulting.it/en/case-studies/cve",
        }}
      />
      <CaseStudyLayoutEN
        caseId="cve"
        logo="/logos/cve_white.webp"
        logoClassName="h-24 md:h-32 mx-auto mb-8 invert grayscale"
        logoAlt="CVE Group"
        title="CVE Group"
        subtitle="First town hall to align 30 people on values and challenges"
        overview={[
          { label: "Sector", value: "System integration, video & security" },
          { label: "Size", value: "~30 people (Milan and Rome)" },
          { label: "Duration", value: "6 weeks (design + first event)" },
          { label: "Stakeholders", value: "CEO, Leadership team" },
        ]}
        challenge={{
          description:
            "CVE Group, a system integrator specialized in video and security, had experienced important headcount growth in recent years. With expansion came typical fast-growth challenges: team silos, project individualism, unclear perception of company direction. There was no collective moment when everyone — from Milan to Rome, junior to senior — felt part of the same challenge. The culture existed in practice, but had never been made explicit and shared.",
          problems: [
            "Absence of company-wide alignment moments across the entire organization",
            "Rapid growth creating silos between work groups",
            "Project individualism: 'this is my project' vs 'this is our project'",
            "Company values implicit but never formally articulated",
            "Awareness gap about market challenges and strategic direction",
          ],
        }}
        phases={[
          {
            title: "DNA and narrative design (3 weeks)",
            description:
              "Workshops with ownership and management to surface CVE's guiding values. We didn't ask 'what are your values?', but 'tell me about the last time someone did something that made you say: this is CVE'. DNA emergence: Responsibility→Autonomy, Availability→Collaboration, Flexibility→Agility, Customer Dedication→Goal Focus. Narrative construction: 'We add value to technology through human relationships inside and outside CVE'. Town hall structure and future rituals design.",
          },
          {
            title: "Town hall content design (2 weeks)",
            description:
              "Co-creating town hall structure with ownership: Intro & objectives → CVE DNA (values+behaviors) → Challenges & economic KPIs → People & Organization → Strategic projects → Feedback. Focus on making values concrete through observable behaviors. Preparing 'welcome' moment for new hires. Designing post-event survey to capture perceptions and co-build next meetings.",
          },
          {
            title: "First company aperitivo (1 event + follow-up)",
            description:
              "First virtual 'CVE Aperitivo' with 30 people. Ownership presents explicit DNA: not just 'we're responsible', but 'responsibility means everyone is autonomous in decision-making'. Shared economic KPIs, market challenges, team objectives. Key message: 'To win these challenges we just need to act on our principles'. Post-event survey: 85% rating 4-5/5, concrete requests for next meetings (frequency, topics, format). New company ritual created.",
          },
        ]}
        results={[
          "First town hall with 30 people aligned on DNA, challenges and direction",
          "Company values articulated and translated into concrete behaviors",
          "Post-event survey: 85% rating 4-5/5, clear improvement requests",
          "Linguistic shift: from 'my project' to 'we're all in the same boat'",
          "New company ritual: regular meetings to maintain alignment",
          "Actionable feedback: frequency, topics, format collected for iteration",
        ]}
      />
    </>
  );
};

export default CVEEN;
