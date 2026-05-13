import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const CVE = () => {
  return (
    <>
      <SEO
        title="Facilitazione e cultura organizzativa per azienda energetica — Venturo"
        description="Progettazione e facilitazione della prima Town Hall aziendale di CVE. Un momento storico per allineare leadership e persone su valori e direzione strategica."
        canonical="https://venturoconsulting.it/casi-studio/cve"
        lang="it"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/cve",
          en: "https://venturoconsulting.it/en/case-studies/cve",
        }}
      />
      <CaseStudyLayout
        caseId="cve"
        logo="/logos/cve_white.webp"
        logoClassName="h-24 md:h-32 mx-auto mb-8 invert grayscale"
        logoAlt="CVE Group"
        title="CVE Group"
        subtitle="Prima town hall per allineare 30 persone su valori e sfide"
        overview={[
          { label: "Settore", value: "System integration, video & security" },
          { label: "Dimensione", value: "~30 persone (Milano e Roma)" },
          { label: "Durata", value: "6 settimane (progettazione + primo evento)" },
          { label: "Interlocutori", value: "CEO, Leadership team" },
        ]}
        challenge={{
          description:
            "CVE Group, system integrator specializzato in video e security, aveva vissuto una crescita importante di organico negli ultimi anni. Con l'espansione, erano emerse sfide tipiche della crescita veloce: silos tra team, individualismo sui progetti, percezione confusa della direzione aziendale. Non esisteva un momento collettivo in cui tutti — da Milano a Roma, da junior a senior — si sentissero parte della stessa sfida. La cultura esisteva nei fatti, ma non era mai stata resa esplicita e condivisa.",
          problems: [
            "Assenza di momenti di allineamento collettivo su tutta l'organizzazione",
            "Crescita veloce che aveva creato silos tra gruppi di lavoro",
            "Individualismo sui progetti: 'questo è il mio progetto' vs 'è il nostro progetto'",
            "Valori aziendali impliciti ma mai esplicitati formalmente",
            "Gap di consapevolezza su sfide di mercato e direzione strategica",
          ],
        }}
        phases={[
          {
            title: "Progettazione DNA e narrativa (3 settimane)",
            description:
              "Workshop con ownership e management per far emergere i valori che guidano CVE. Non abbiamo chiesto 'quali sono i vostri valori?', ma 'raccontate l'ultima volta che qualcuno ha fatto qualcosa che vi ha fatto dire: questo è CVE'. Emersione DNA: Responsabilità→Autonomia, Disponibilità→Collaborazione, Flessibilità→Agilità, Dedizione clienti→Focus obiettivi. Costruzione narrativa: 'Aggiungiamo valore alla tecnologia tramite il rapporto umano dentro e fuori CVE'. Progettazione struttura town hall e rituali futuri.",
          },
          {
            title: "Progettazione contenuti town hall (2 settimane)",
            description:
              "Co-creazione struttura town hall con ownership: Intro e obiettivi → DNA CVE (valori+comportamenti) → Sfide e KPI economici → People & Organization → Progetti strategici → Feedback. Focus su rendere i valori concreti attraverso comportamenti osservabili. Preparazione momento 'benvenuto' per nuovi ingressi. Progettazione survey post-evento per intercettare percezioni e co-costruire prossimi incontri.",
          },
          {
            title: "Primo aperitivo aziendale (1 evento + follow-up)",
            description:
              "Primo 'Aperitivo CVE' virtuale con 30 persone. Ownership presenta DNA esplicito: non solo 'siamo responsabili', ma 'responsabilità significa che ognuno è autonomo nel prendere decisioni'. Condivisi KPI economici, sfide mercato, obiettivi team. Messaggio chiave: 'Per vincere le sfide non dobbiamo fare altro che agire i nostri principi'. Survey post-evento: 85% rating 4-5/5, richieste concrete per prossimi incontri (frequenza, temi, formato). Creazione nuovo rituale aziendale.",
          },
        ]}
        results={[
          "Prima town hall con 30 persone allineate su DNA, sfide e direzione",
          "Valori aziendali esplicitati e tradotti in comportamenti concreti",
          "Survey post-evento: 85% rating 4-5/5, richieste chiare per miglioramenti",
          "Shift linguistico: da 'mio progetto' a 'siamo tutti sulla stessa barca'",
          "Nuovo rituale aziendale: incontri regolari per mantenere allineamento",
          "Feedback actionable: frequenza, temi, formato raccolti per iterare",
        ]}
      />
    </>
  );
};

export default CVE;
