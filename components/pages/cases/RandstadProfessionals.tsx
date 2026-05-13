import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const RandstadProfessionals = () => {
  return (
    <>
      <SEO
        title="Randstad Professionals — Venturo"
        description="Una divisione che si racconta con le voci delle sue persone. EVP, Talent Personas e video employer branding per Randstad Professionals."
        canonical="https://venturoconsulting.it/casi-studio/randstad-professionals"
        ogImage="https://venturoconsulting.it/cases/randstad-professionals-envisioning.webp"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio/randstad-professionals", en: "https://venturoconsulting.it/en/case-studies/randstad-professionals" }}
      />
      <CaseStudyLayout
        caseId="randstad-professionals"
        logo="/logos/randstad_blue.svg"
        logoAlt="Randstad Professionals"
        logoClassName="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain mx-auto mb-8 brightness-0"
        title="Randstad Professionals"
        subtitle="Una divisione che si racconta con le voci delle sue persone"
        overview={[
          { label: "Settore", value: "Ricerca e selezione HR" },
          { label: "Dimensione", value: "Divisione specializzata — Italia" },
          { label: "Durata", value: "4-5 mesi" },
          { label: "Interlocutori", value: "HR, Marketing, Business Unit Leader" },
        ]}
        challenge={{
          description:
            "Randstad Professionals è la divisione dedicata alla ricerca e selezione di middle, senior e top management. Con un piano di crescita ambizioso, la divisione aveva bisogno di costruire un'identità forte e riconoscibile su due fronti: verso il mercato esterno, dove il brand Randstad era associato principalmente alla somministrazione, e verso i talenti da attrarre, che faticavano a percepire cosa rendesse questa divisione davvero diversa. Il team aveva valori chiari e un modo di lavorare distintivo, ma mancava il linguaggio per renderli visibili e condivisi.",
          problems: [
            "Come differenziare Randstad Professionals da Randstad Italia agli occhi del mercato",
            "Come costruire una EVP autentica per attrarre i professionisti giusti",
            "Come rendere visibili i valori agiti della divisione, non solo quelli aspirazionali",
            "Come coinvolgere il team nelle scelte strategiche invece di calare decisioni dall'alto",
          ],
        }}
        phases={[
          {
            title: "Workshop di progettazione",
            description:
              "Prima di costruire qualsiasi messaggio, abbiamo lavorato con Marketing, HR, Director e management di Professionals per definire la direzione strategica. L'obiettivo non era produrre una lista di valori, ma capire cosa la divisione voleva davvero che emergesse dalle proprie persone.",
          },
          {
            title: "Workshop di Envisioning",
            description:
              "Quindici persone, immagini, stimoli visivi e tre domande: chi siamo, come vediamo il mercato, come vogliamo mostrarci al mondo. Un approccio bottom-up per rispondere alla domanda più concreta dell'employer branding: cosa vuol dire lavorare qui? I valori emersi — empatia, competenza, ambizione, etica — non erano stati scritti da nessun consulente. Erano già lì, vissuti ogni giorno.",
            image: {
              src: "/cases/randstad-professionals-envisioning.webp",
              alt: "Workshop di envisioning con il team Randstad Professionals, lavoro con vision board e ritagli di immagini",
              caption: "Workshop di envisioning con il team Randstad Professionals",
            },
          },
          {
            title: "EVP, Positioning e Talent Personas",
            description:
              "Dagli output dei workshop abbiamo costruito la Employee Value Proposition e il positioning statement della divisione, organizzati attorno a tre pillar: Human (empatia, relazione, etica), Professionals (competenza, consulenza, crescita), Forward (innovazione, anticipazione, ambizione). In parallelo abbiamo definito le Talent Personas target — profili dettagliati per paure, desideri, comportamenti e stili di vita — per costruire messaggi davvero rilevanti per chi la divisione voleva attrarre.",
            image: {
              src: "/cases/randstad-professionals-personas.png",
              alt: "Documento di lavoro sulle Talent Personas di Randstad Professionals",
              caption: "Talent Personas sviluppate per Randstad Professionals",
            },
          },
          {
            title: "Video strategy e produzione",
            description:
              "Il positioning è diventato un sistema narrativo strutturato in cinque temi: chi siamo, come lo facciamo, perché lo facciamo, crescere, realizzarsi. Da questa architettura abbiamo scritto, diretto e prodotto un video principale e una serie di pillole da 30 secondi, con i professionisti del team come protagonisti. Ogni video racconta una persona reale. Autenticità come scelta strategica, non come effetto collaterale.",
            image: {
              src: "/cases/randstad-professionals-video.jpg",
              alt: "Set di produzione video employer branding con ciak per Randstad Professionals",
              caption: "Sul set delle video interviste employer branding",
            },
            videoEmbed: "https://player.vimeo.com/video/386510579?h=ad05a1a149&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
            videoCaption: "Video principale Randstad Professionals",
          },
        ]}
        results={[
          "Positioning statement sviluppato e condiviso internamente",
          "EVP strutturata attorno a tre pillar valoriali",
          "Talent Personas definite per recruitment e comunicazione",
          "Sistema narrativo a cinque temi per la comunicazione video",
          "Video principale e serie di pillole da 30 secondi prodotti",
          "Identità distintiva rispetto al brand Randstad Italia",
          "Materiale utilizzabile su LinkedIn, careers page e selezione",
        ]}
      />
    </>
  );
};

export default RandstadProfessionals;
