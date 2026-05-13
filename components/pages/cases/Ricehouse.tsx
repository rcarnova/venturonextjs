import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const Ricehouse = () => {
  return (
    <>
      <SEO
        title="Employer branding per startup green tech ed economia circolare — Venturo"
        description="Come Ricehouse ha reso visibile la propria identità culturale per attrarre talenti che credono nell'economia circolare e nella bioedilizia."
        canonical="https://venturoconsulting.it/casi-studio/ricehouse"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio/ricehouse", en: "https://venturoconsulting.it/en/case-studies/ricehouse" }}
      />
      <CaseStudyLayout
      caseId="ricehouse"
      logo="/logos/ricehouse_white.webp"
      logoAlt="Ricehouse"
      title="Ricehouse"
      subtitle="Dal riso alla bioedilizia: trovare persone che credono nel tuo perché"
      overview={[
        { label: "Settore", value: "Green Tech / Bioedilizia" },
        { label: "Dimensione", value: "25 persone" },
        { label: "Durata", value: "6-8 settimane" },
        { label: "Interlocutori", value: "Founder, HR, Marketing" },
      ]}
      challenge={{
        description:
          "Ricehouse trasforma gli scarti della lavorazione del riso in materiali da costruzione sostenibili. Una startup dell'economia circolare con una sfida chiara: come attrarre talenti quando lavori con paglia di riso? Gli annunci classici non comunicavano il \"perché\". I candidati non percepivano chiaramente cosa significasse lavorare in Ricehouse e quali valori guidassero le decisioni quotidiane.",
        problems: [
          "Identità forte ma non esplicita verso l'esterno",
          "Difficoltà ad attrarre profili qualificati allineati alla mission circolare",
          "Gap tra promesse ed esperienza reale dei candidati",
        ],
      }}
      phases={[
        {
          title: "Emersione identità (2 settimane)",
          description:
            "Workshop \"Chi vogliamo con noi?\" con founder e management. Non abbiamo chiesto \"quali sono i vostri valori?\" ma \"raccontaci l'ultima volta che qualcuno ha sbagliato - cosa è successo?\". Identità emersa dai fatti, non dalle aspirazioni.",
          image: {
            src: "/workshop/ricehouse-envisioning-1.webp",
            alt: "Workshop envisioning Ricehouse - il team lavora su visual thinking e definizione identità",
            caption: "Envisioning workshop: costruzione identità attraverso immagini e storytelling, 2024",
          },
        },
        {
          title: "Employer Personas (2 settimane)",
          description:
            "Costruzione di personas concrete: chi sappiamo che qui si troverà bene, chi farà fatica. Definizione cultural fit verificabile già dal colloquio. Non personas aspirazionali, ma pattern estratti da storie reali.",
        },
        {
          title: "Applicazione operativa (2-3 settimane)",
          description:
            "Ridisegno rituali operativi. I meeting settimanali sono passati da 90 minuti a 45 minuti mantenendo efficacia. Revisione job posting e processo colloqui per raccontare il perché prima del cosa.",
        },
      ]}
      results={[
        "Candidature più qualificate e allineate ai valori aziendali",
        "Coerenza tra identità dichiarata e pratiche quotidiane",
        "Meeting più efficaci: da 90' a 45' mantenendo output",
        "Processo di onboarding più chiaro e trasparente",
      ]}
    />
    </>
  );
};

export default Ricehouse;
