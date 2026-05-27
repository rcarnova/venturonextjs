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
        subtitle="Il trasloco come leva di cambiamento culturale"
        credit="In collaborazione con Smartworking srl"
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
          },
          {
            title: "Emersione dei valori",
            description:
              "Sessioni di design thinking con tutti i dipendenti per identificare cosa doveva caratterizzare la nuova organizzazione. Quattro valori emersi dal gruppo — Leggerezza, Comunicazione, Innovazione, Squadra — sono diventati i principi guida del progetto: ogni scelta di spazio, strumento e processo è stata verificata rispetto a questi quattro criteri.",
          },
          {
            title: "Trasformazione digitale",
            description:
              "Parallelamente al progetto fisico: introduzione di strumenti UCC (Unified Communications and Collaboration), iniziativa paperless con digitalizzazione delle procedure interne, supporto alla trasformazione IT. La strategia digitale è stata progettata per rafforzare i nuovi comportamenti, non per sostituire quelli vecchi.",
          },
          {
            title: "Nuovo spazio",
            description:
              "Layout del nuovo ufficio progettato insieme agli architetti Raffaele Sabbadini e Rachele Storai. Sviluppo di moodboard che ha guidato palette colori e finiture. Fornitura degli arredi aggiudicata a Faram. Lo spazio fisico non è stato il punto di partenza, ma il punto di arrivo di un processo partecipativo.",
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
