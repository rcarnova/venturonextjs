import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const AmcItalia = () => {
  return (
    <>
      <SEO
        title="Trasformazione organizzativa partita dagli spazi — AMC Italia — Venturo"
        description="12 mesi di co-design con le persone per trasformare un trasferimento di sede in un progetto di cultura organizzativa. Quattro valori emersi dal basso, non imposti dall'alto."
        canonical="https://venturoconsulting.it/casi-studio/amc-italia"
        lang="it"
      />
      <CaseStudyLayout
        caseId="amc-italia"
        title="AMC Italia"
        subtitle="La nuova sede come leva di cambiamento culturale"
        credit="In collaborazione con Smartworking srl"
        logo="/logos/amc_italia_white.png"
        logoAlt="AMC Italia"
        logoNeedsInvert={false}
        logoClassName="h-24 md:h-32 w-auto object-contain mx-auto mb-8 bg-charcoal px-6 py-4 rounded-lg"
        overview={[
          { label: "Settore", value: "Consumer / Casalinghi" },
          { label: "Interlocutore", value: "CFO, HR, Management" },
          { label: "Durata", value: "12 mesi" },
          { label: "Approccio", value: "Participatory design" },
        ]}
        challenge={{
          description:
            "AMC Italia doveva trasferire sede. La domanda non era dove mettere le scrivanie, ma come usare il trasloco per cambiare davvero il modo di lavorare. L'obiettivo era trasformare un progetto di facilities in una leva di trasformazione organizzativa — senza che le persone lo vivessero come un cambiamento calato dall'alto.",
          problems: [
            "Abitudini di lavoro consolidate difficili da modificare",
            "Rischio di intervento puramente estetico senza impatto culturale",
            "Necessità di coinvolgere tutti i livelli organizzativi, non solo il vertice",
            "Allineamento tra spazi fisici, processi digitali e comportamenti reali",
          ],
        }}
        phases={[
          {
            title: "Discovery partecipata",
            description:
              "Survey sui comportamenti reali: come le persone usano gli spazi, quanto impiegano per raggiungere l'ufficio, quali strumenti di collaborazione usano. Osservazioni comportamentali per misurare l'occupazione effettiva delle postazioni. Workshop di visioning con il board per allineare le aspettative prima di qualsiasi scelta progettuale.",
            image: {
              src: "/images/cases/amc-italia/workshop-discovery.jpg",
              alt: "Workshop di discovery partecipata con il team AMC Italia",
              caption: "Sessione di condivisione della strategia con i dipendenti",
            },
          },
          {
            title: "Emersione dei valori",
            description:
              "Sessioni di design thinking con tutti i dipendenti per identificare cosa doveva caratterizzare la nuova organizzazione. Quattro valori emersi dal gruppo — Leggerezza, Comunicazione, Innovazione, Squadra — sono diventati i principi guida del progetto: ogni scelta di spazio, strumento e processo è stata verificata rispetto a questi quattro criteri.",
            image: {
              src: "/images/cases/amc-italia/workshop-valori.jpg",
              alt: "Workshop di value assimilation con i dipendenti AMC Italia",
              caption: "Workshop di value assimilation: i valori emergono dal gruppo, non dall'alto",
            },
          },
          {
            title: "Trasformazione digitale",
            description:
              "Parallelamente al progetto fisico: introduzione di strumenti UCC (Unified Communications and Collaboration), iniziativa paperless con digitalizzazione delle procedure interne, supporto alla trasformazione IT. La strategia digitale è stata progettata per rafforzare i nuovi comportamenti, non per sostituire quelli vecchi.",
            image: {
              src: "/images/cases/amc-italia/workshop-comunicazione.jpg",
              alt: "Workshop sul piano di comunicazione interno AMC Italia",
              caption: "Sessione di lavoro sul piano di comunicazione interna",
            },
          },
          {
            title: "Nuovo spazio",
            description:
              "Layout del nuovo ufficio progettato insieme agli architetti Raffaele Sabbadini e Rachele Storai. Sviluppo di moodboard che ha guidato palette colori e finiture. Fornitura degli arredi aggiudicata a Faram. Lo spazio fisico non è stato il punto di partenza, ma il punto di arrivo di un processo partecipativo.",
            gallery: [
              { src: "/images/cases/amc-italia/ufficio-1.jpg", alt: "Nuovo ufficio AMC Italia — area open space" },
              { src: "/images/cases/amc-italia/ufficio-2.jpg", alt: "Nuovo ufficio AMC Italia — sala riunioni" },
              { src: "/images/cases/amc-italia/ufficio-3.jpg", alt: "Nuovo ufficio AMC Italia — dettaglio arredi" },
              { src: "/images/cases/amc-italia/ufficio-4.jpg", alt: "Nuovo ufficio AMC Italia — zona collaborazione" },
              { src: "/images/cases/amc-italia/ufficio-5.jpg", alt: "Nuovo ufficio AMC Italia — postazioni lavoro" },
              { src: "/images/cases/amc-italia/ufficio-6.jpg", alt: "Nuovo ufficio AMC Italia — ingresso" },
              { src: "/images/cases/amc-italia/ufficio-7.jpg", alt: "Nuovo ufficio AMC Italia — corridoio" },
              { src: "/images/cases/amc-italia/ufficio-8.jpg", alt: "Nuovo ufficio AMC Italia — panoramica" },
            ],
            galleryCaption: "Il nuovo spazio: punto di arrivo di 12 mesi di co-design partecipativo",
          },
        ]}
        results={[
          "Quattro valori organizzativi identificati dalle persone, non dai manager",
          "Nuovo layout ufficio progettato con processo co-creativo",
          "Iniziativa paperless avviata con digitalizzazione procedure interne",
          "Coinvolgimento attivo di tutti i livelli organizzativi",
          "Riduzione della resistenza al cambiamento grazie al coinvolgimento anticipato",
          "Nuovo spazio come punto di riferimento tangibile per la trasformazione culturale",
        ]}
      />
    </>
  );
};

export default AmcItalia;
