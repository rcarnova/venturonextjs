import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const Findomestic = () => {
  return (
    <>
      <SEO
        title="Comunicazione interna e cultura organizzativa nel settore finanziario — Venturo"
        description="Workshop intensivo per unificare il linguaggio tra assistenza clienti e team social in una delle principali realtà del credito al consumo italiano."
        canonical="https://venturoconsulting.it/casi-studio/findomestic"
        lang="it"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/findomestic",
          en: "https://venturoconsulting.it/en/case-studies/findomestic"
        }}
      />
      <CaseStudyLayout
        caseId="findomestic"
        logo="/logos/findomestic_white.webp"
        logoAlt="Findomestic"
        title="Findomestic"
        subtitle="Da linguaggio istituzionale a conversazione unificata"
        overview={[
          { label: "Settore", value: "Finance & consumer credit" },
          { label: "Team coinvolti", value: "Assistenza clienti + Social media" },
          { label: "Durata", value: "2 giorni workshop intensivo + follow-up" },
          { label: "Interlocutori", value: "HR, Marketing e Comunicazione" },
        ]}
        challenge={{
          description:
            "Con la crescita dei social — in particolare Facebook — Findomestic si è trovata come molte aziende finance a gestire richieste di assistenza clienti attraverso canali pubblici. Il team marketing, che gestiva i social, diventava primo interlocutore per richieste che richiedevano l'intervento dell'assistenza vera e propria. Il problema: quando l'assistenza interveniva, usava un linguaggio corporate formale e procedurale che stonava con il tono conversazionale dei social, creando incoerenza percepita dalla community e abbassando il trust.",
          problems: [
            "Collision linguistica: assistenza formale vs social conversazionale",
            "Team marketing primo interlocutore senza competenze tecniche assistenza",
            "Quando assistenza interviene, linguaggio corporate 'spaventa' utenti pubblici",
            "Incoerenza comunicativa danneggia percezione brand su canali pubblici",
            "Silos tra dipartimenti: assistenza e social non parlavano la stessa lingua",
          ],
        }}
        phases={[
          {
            title: "Workshop linguaggio unificato (2 giorni)",
            description:
              "Due giorni intensivi con team assistenza clienti E team social insieme — non separati. Non abbiamo chiesto 'qual è il vostro tone of voice?', ma 'raccontate l'ultima volta che avete risposto a un cliente arrabbiato in pubblico: cosa avreste voluto dire? cosa avete detto? cosa vi ha bloccato?'. Emerse le frizioni reali: assistenza temeva di essere 'troppo informale', social temeva di sembrare 'freddo' come assistenza.",
          },
          {
            title: "Co-creazione regole di ingaggio",
            description:
              "Costruzione condivisa di regole di ingaggio per richieste pubbliche sui social. Non calate dall'alto, ma co-create dai team. Esempi: 'Quando usiamo tu vs lei?', 'Quando possiamo usare emoji?', 'Cosa non diciamo mai in pubblico?', 'Come gestiamo escalation?'. Ogni regola testata su casi reali portati dai partecipanti. Framework: riconoscere emozione → rispondere human → risolvere tecnico.",
          },
          {
            title: "Vocabolario comune operativo",
            description:
              "Costruzione vocabolario comune: termini tecnici tradotti in linguaggio conversazionale. Non un glossario astratto, ma casi d'uso concreti. Esempio: 'rata sospesa' diventa 'mettiamo in pausa la tua rata'. 'Verifica documentale' diventa 'abbiamo bisogno di controllare un documento'. Ogni termine validato da entrambi i team per bilanciare chiarezza (social) e precisione (assistenza).",
          },
        ]}
        results={[
          "Linguaggio unificato: assistenza e social parlano la stessa lingua in pubblico",
          "Incremento opportunità business: richieste assistenza diventano occasioni di vendita",
          "Gradimento community: percezione servizio migliorata su canali social",
          "Team unificato: fine silos comunicativi tra assistenza e marketing",
          "Vocabolario operativo: glossario vivo usato quotidianamente da entrambi i team",
        ]}
      />
    </>
  );
};

export default Findomestic;
