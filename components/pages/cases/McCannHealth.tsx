import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const McCannHealth = () => {
  return (
    <>
      <SEO
        title="Ascolto e Envisioning per il nuovo ufficio — McCann Health — Venturo"
        description="Interviste al board, survey all'organizzazione e workshop di envisioning per definire i valori che il nuovo ufficio McCann Health doveva trasmettere."
        canonical="https://venturoconsulting.it/casi-studio/mccann-health"
        lang="it"
      />
      <CaseStudyLayout
        caseId="mccann-health"
        title="McCann Health"
        subtitle="Ascolto e Envisioning per definire i valori del nuovo ufficio"
        credit="In collaborazione con Smartworking Srl"
        logo="/logos/mccann_health_white.png"
        logoAlt="McCann Health"
        logoNeedsInvert={false}
        overview={[
          { label: "Settore", value: "Healthcare / Advertising" },
          { label: "Interlocutore", value: "Board + Organizzazione" },
          { label: "Partecipanti", value: "6 interviste board" },
          { label: "Approccio", value: "Listening & Envisioning" },
        ]}
        challenge={{
          description:
            "McCann Health stava ripensando il proprio spazio fisico. La domanda non era solo di design degli interni: era capire quali valori l'ufficio doveva trasmettere, e come allineare board e organizzazione su quella visione. Ascoltare prima di progettare — per fare in modo che le scelte spaziali rispecchiassero davvero l'identità dell'agenzia.",
          problems: [
            "Rischio di scelte spaziali non allineate con l'identità reale dell'organizzazione",
            "Board e organizzazione potenzialmente su frequenze diverse",
            "Necessità di trasformare percezioni soggettive in indicazioni progettuali concrete",
            "Far emergere i valori dal gruppo, non imporli dall'esterno",
          ],
        }}
        phases={[
          {
            title: "Interviste strutturate al Board",
            description:
              "Progettazione del protocollo di intervista e conduzione di 6 interviste strutturate ai membri del board. L'obiettivo era capire come il vertice descriveva l'organizzazione — ieri, oggi e domani — raccogliendo le percezioni individuali come base per il successivo allineamento collettivo.",
            image: {
              src: "/images/cases/mccann-health/cover.jpg",
              alt: "Workshop di envisioning McCann Health — team al lavoro con immagini e post-it",
              caption: "Il gruppo al lavoro durante la sessione di envisioning",
            },
          },
          {
            title: "Mini-survey all'organizzazione",
            description:
              "Progettazione, erogazione e analisi di una mini-survey con 4 domande aperte rivolta all'intera organizzazione. Classificazione e sintesi delle risposte per bilanciare le visioni del vertice con le percezioni di chi lavora ogni giorno nell'agenzia.",
          },
          {
            title: "Workshop di restituzione e Envisioning",
            description:
              "Progettazione e facilitazione di un workshop per restituire quanto emerso dalla fase di ascolto e avviare la fase di envisioning. Il gruppo ha esplorato tre orizzonti temporali — ieri, oggi, domani — attraverso esercizi visivi e narrativi. Le immagini e le parole emerse dal lavoro collettivo hanno definito la direzione valoriale e progettuale.",
          },
          {
            title: "Sintesi e definizione dei valori",
            description:
              "Elaborazione del report finale con le indicazioni sul modello di ufficio e i valori che lo spazio dovrà trasmettere. Dal lavoro del gruppo sono emerse quattro tensioni guida: Rinascita continua, Combattività e fantasia, Essere team nella diversità, Futuro digitale a misura d'uomo.",
            gallery: [
              { src: "/images/cases/mccann-health/sintesi.jpg", alt: "Board di sintesi — cosa contraddistingue McCann Health tra passato, presente e futuro" },
              { src: "/images/cases/mccann-health/nuova-sede.png", alt: "La nuova sede McCann Health — render architettonico esterno" },
            ],
            galleryCaption: "La board di sintesi e il render della nuova sede: dove la cultura diventa spazio",
          },
        ]}
        results={[
          "Report della fase di ascolto con le percezioni di board e organizzazione",
          "Indicazioni concrete sul modello di ufficio da realizzare",
          "4 valori emersi dal basso: Rinascita, Combattività, Team, Futuro a misura d'uomo",
          "Allineamento tra board e organizzazione sulle scelte progettuali",
          "Workshop di envisioning facilitato con output visivi e narrativi",
        ]}
      />
    </>
  );
};

export default McCannHealth;
