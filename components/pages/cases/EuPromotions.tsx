import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const EuPromotions = () => {
  return (
    <>
      <SEO
        title="Eu.promotions — Brand identity e cultura organizzativa | Venturo"
        description="Come abbiamo costruito la brand identity di eu.promotions partendo dalla cultura reale del team. Workshop di envisioning, strategia contenuti e EVP per una PMI internazionale nel loyalty & retail marketing."
        canonical="https://venturoconsulting.it/casi-studio/eupromotions"
        ogImage="https://venturoconsulting.it/cases/eupromotion-envisioning.webp"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/casi-studio/eupromotions", en: "https://venturoconsulting.it/en/case-studies/eupromotions" }}
      />
      <CaseStudyLayout
        caseId="eupromotions"
        logo="/logos/eupromotion_white.webp"
        logoAlt="Eu.promotions"
        logoNeedsInvert={false}
        logoClassName="h-16 sm:h-20 md:h-28 lg:h-32 w-auto object-contain mx-auto mb-8"
        title="Eu.promotions"
        subtitle="Identità scoperta, non inventata"
        overview={[
          { label: "Settore", value: "Loyalty & Retail Marketing" },
          { label: "Dimensione", value: "PMI internazionale, 6 legal entity in Europa" },
          { label: "Durata", value: "3 mesi" },
          { label: "Interlocutori", value: "CEO, Marketing, Team interno" },
        ]}
        challenge={{
          description:
            "Eu.promotions è una realtà italiana con presenza in oltre 20 paesi, specializzata in programmi di loyalty per il retail. Una storia solida, risultati concreti, un team con anni di esperienza. Eppure la comunicazione corporate non riusciva a raccontare tutto questo: il brand parlava all'esterno con un linguaggio che non rispecchiava i valori e i comportamenti reali delle persone che ci lavoravano ogni giorno. Il rischio era duplice: perdere credibilità verso i clienti internazionali e disperdere l'identità interna che aveva reso l'azienda quello che era.",
          problems: [
            "Come differenziare eu.promotions dai competitor globali con un brand autentico e riconoscibile",
            "Come costruire una comunicazione che partisse dai valori reali vissuti internamente",
            "Come allineare il racconto esterno (sito, LinkedIn, materiali commerciali) con la cultura del team",
            "Come coinvolgere le persone di business nel processo, non solo il marketing",
          ],
        }}
        phases={[
          {
            title: "Workshop di Project Identity/Vision",
            description:
              "Sessioni di lavoro intensive con il team — non solo marketing, ma anche profili di business — per far emergere chi è davvero eu.promotions: i valori vissuti, le ambizioni, il modo unico di lavorare con i clienti. In un solo giorno di workshop, il team ha raggiunto un livello di allineamento e chiarezza che non si aspettava fosse possibile in tempi così brevi.",
            image: {
              src: "/cases/eupromotion-envisioning.webp",
              alt: "Workshop di envisioning con il team eu.promotions, lavoro con immagini e post-it",
              caption: "Workshop di Project Identity con il team eu.promotions",
            },
          },
          {
            title: "Analisi e progettazione UX",
            description:
              "Mappatura dell'esperienza dei diversi interlocutori: retailer, candidati, partner internazionali. Definizione di personas e experience map per costruire una comunicazione multicanale davvero rilevante per chi la riceve.",
          },
          {
            title: "Strategia dei contenuti",
            description:
              "A partire dagli output dei workshop, abbiamo definito tono di voce, parole chiave, storie di valore e piano editoriale. Non contenuti generici, ma narrazioni radicate nell'esperienza reale del team e nei risultati concreti dei programmi.",
            image: {
              src: "/cases/eupromotion-grease.png",
              alt: "Slide del workshop: Status quo vs Vision con riferimento al film Grease",
              caption: "Dal workshop: la trasformazione come metafora visiva",
            },
          },
        ]}
        results={[
          "EVP strutturata e condivisa internamente",
          "Brand identity allineata tra valori interni e comunicazione esterna",
          "Linee guida di comunicazione condivise tra marketing e business",
          "Tono di voce distintivo rispetto ai competitor globali",
          "Team allineato su vision, UVP e differenziatori in una singola giornata di lavoro",
          "Strategia contenuti declinabile su sito, LinkedIn e materiali commerciali",
          "Processo co-costruito con le persone, non calato dall'alto",
        ]}
      />
    </>
  );
};

export default EuPromotions;
