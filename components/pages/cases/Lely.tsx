import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const Lely = () => {
  return (
    <>
      <SEO
        title="Leadership e gestione team per azienda manifatturiera — Venturo"
        description="Framework pratico per manager tecnici che devono guidare team senza esperienza HR nel settore agricolo e manifatturiero."
        canonical="https://venturoconsulting.it/casi-studio/lely"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio/lely", en: "https://venturoconsulting.it/en/case-studies/lely" }}
      />
      <CaseStudyLayout
      caseId="lely"
      logo="/logos/lely_white.svg"
      logoAlt="Lely"
      title="Lely"
      subtitle="Strumenti concreti per gestire persone"
      overview={[
        { label: "Settore", value: "Agricoltura / Agritech" },
        { label: "Dimensione", value: "Imprenditori agricoli" },
        { label: "Durata", value: "1 giornata + 2 settimane" },
        { label: "Interlocutori", value: "Marketing, HR" },
      ]}
      challenge={{
        description:
          "Lely lavora con imprenditori agricoli che gestiscono persone senza formazione manageriale strutturata. Servivano strumenti semplici, concreti e applicabili immediatamente per valutare collaboratori su comportamenti osservabili, non su giudizi vaghi.",
        problems: [
          "Bassa maturità manageriale dei clienti",
          "Mancanza di linguaggio condiviso per gestione persone",
          "Necessità di tool autonomi e pratici",
        ],
      }}
      phases={[
        {
          title: "Workshop intensivo (1 giornata)",
          description:
            "Workshop focalizzato su comportamenti osservabili invece che su valutazioni soggettive. Co-costruzione di framework con i manager agricoli per garantire applicabilità reale.",
        },
        {
          title: "Metro di valutazione (2 settimane)",
          description:
            "Creazione del \"Metro Valutazione Comportamenti\": tool semplice con scala \"Da allenare\", \"In linea\", \"Di esempio\". Ogni livello basato su comportamenti concreti e osservabili, non su impressioni.",
        },
        {
          title: "Handover per autonomia",
          description:
            "Trasferimento del metodo ai manager. Affiancamento fino a quando non sono autonomi nell'applicare il tool senza supporto esterno.",
        },
      ]}
      results={[
        "Tool Metro Valutazione utilizzabile autonomamente",
        "Linguaggio condiviso per gestione persone",
        "Piano d'azione individuale per ogni collaboratore",
        "Manager più sicuri nelle valutazioni",
        "Passaggio da giudizi vaghi a feedback costruttivi e migliorabili",
      ]}
    />
    </>
  );
};

export default Lely;
