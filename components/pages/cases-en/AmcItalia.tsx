import { SEO } from "@/components/SEO";
import CaseStudyLayoutEN from "@/components/CaseStudyLayoutEN";

const AmcItaliaEN = () => {
  return (
    <>
      <SEO
        title="Organizational transformation starting from office space — AMC Italia — Venturo"
        description="12 months of co-design with employees to turn a headquarter relocation into an organizational culture project. Four values that emerged bottom-up, not imposed from above."
        canonical="https://venturoconsulting.it/en/case-studies/amc-italia"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/amc-italia",
          en: "https://venturoconsulting.it/en/case-studies/amc-italia",
        }}
      />
      <CaseStudyLayoutEN
        caseId="amc-italia"
        title="AMC Italia"
        subtitle="The new headquarters as a lever for cultural change"
        credit="In collaboration with Smartworking srl"
        overview={[
          { label: "Sector", value: "Consumer / Housewares" },
          { label: "Stakeholders", value: "CFO, HR, Management" },
          { label: "Duration", value: "12 months" },
          { label: "Approach", value: "Participatory design" },
        ]}
        challenge={{
          description:
            "AMC Italia needed to relocate its headquarters. The question was not where to put the desks, but how to use the move to genuinely change the way people work. The goal was to turn a facilities project into a lever for organizational transformation — without people experiencing it as change imposed from above.",
          problems: [
            "Deeply ingrained working habits difficult to modify",
            "Risk of a purely aesthetic intervention with no cultural impact",
            "Need to involve all organizational levels, not just leadership",
            "Alignment between physical spaces, digital processes and real behaviours",
          ],
        }}
        phases={[
          {
            title: "Participatory discovery",
            description:
              "Survey on real behaviours: how people use spaces, how long they commute, which collaboration tools they rely on. Behavioural observations to measure actual desk occupancy. Visioning workshops with the board to align expectations before any design decision.",
            image: {
              src: "/images/cases/amc-italia/workshop-discovery.jpg",
              alt: "Participatory discovery workshop with the AMC Italia team",
              caption: "Strategy-sharing session with employees",
            },
          },
          {
            title: "Values emergence",
            description:
              "Design thinking sessions with all employees to identify what should define the new organization. Four values emerged from the group — Lightness, Communication, Innovation, Team — and became the guiding principles of the project: every choice around space, tools and processes was measured against these four criteria.",
            image: {
              src: "/images/cases/amc-italia/workshop-valori.jpg",
              alt: "Value assimilation workshop with AMC Italia employees",
              caption: "Value assimilation workshop: values emerge from the group, not from the top",
            },
          },
          {
            title: "Digital transformation",
            description:
              "Running in parallel with the physical project: introduction of UCC (Unified Communications and Collaboration) tools, a paperless initiative with digitisation of internal procedures, and IT transformation support. The digital strategy was designed to reinforce new behaviours, not to replace old ones.",
            image: {
              src: "/images/cases/amc-italia/workshop-comunicazione.jpg",
              alt: "Internal communication plan workshop at AMC Italia",
              caption: "Working session on the internal communication plan",
            },
          },
          {
            title: "New space",
            description:
              "The new office layout was designed together with architects Raffaele Sabbadini and Rachele Storai. A moodboard process guided the colour palette and finishes. Furniture supply was awarded to Faram. The physical space was not the starting point — it was the destination of a participatory process.",
            gallery: [
              { src: "/images/cases/amc-italia/ufficio-1.jpg", alt: "New AMC Italia office — open space area" },
              { src: "/images/cases/amc-italia/ufficio-2.jpg", alt: "New AMC Italia office — meeting room" },
              { src: "/images/cases/amc-italia/ufficio-3.jpg", alt: "New AMC Italia office — furniture detail" },
              { src: "/images/cases/amc-italia/ufficio-4.jpg", alt: "New AMC Italia office — collaboration zone" },
              { src: "/images/cases/amc-italia/ufficio-5.jpg", alt: "New AMC Italia office — workstations" },
              { src: "/images/cases/amc-italia/ufficio-6.jpg", alt: "New AMC Italia office — entrance" },
              { src: "/images/cases/amc-italia/ufficio-7.jpg", alt: "New AMC Italia office — corridor" },
              { src: "/images/cases/amc-italia/ufficio-8.jpg", alt: "New AMC Italia office — overview" },
            ],
            galleryCaption: "The new space: the destination of 12 months of participatory co-design",
          },
        ]}
        results={[
          "Four organisational values identified by employees, not by managers",
          "New office layout designed through a co-creative process",
          "Paperless initiative launched with digitisation of internal procedures",
          "Active involvement of all organisational levels",
          "Reduced resistance to change through early engagement",
          "New space as a tangible reference point for cultural transformation",
        ]}
      />
    </>
  );
};

export default AmcItaliaEN;
