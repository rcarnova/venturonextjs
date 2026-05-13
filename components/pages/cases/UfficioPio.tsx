import { SEO } from "@/components/SEO";
import CaseStudyLayout from "@/components/CaseStudyLayout";

const UfficioPio = () => {
  return (
    <>
      <SEO
        title="Naming strategico e identità culturale per il terzo settore — Venturo"
        description="Progetto di naming strategico per dare linguaggio condiviso ai dipartimenti e rendere riconoscibile il percorso dei beneficiari."
        canonical="https://venturoconsulting.it/casi-studio/ufficio-pio"
        lang="it"
        alternateUrls={{
          it: "https://venturoconsulting.it/casi-studio/ufficio-pio",
          en: "https://venturoconsulting.it/en/case-studies/ufficio-pio",
        }}
      />
      <CaseStudyLayout
        caseId="ufficio-pio"
        logo="/logos/ufficio_pio_white.webp"
        logoAlt="Ufficio Pio"
        title="Ufficio Pio"
        subtitle="Da 'area contrasto povertà' a Traguardi"
        overview={[
          { label: "Settore", value: "Non-profit storico (dal 1595)" },
          { label: "Dimensione", value: "~50 operatori + volontari" },
          { label: "Durata", value: "4 mesi" },
          { label: "Interlocutori", value: "Direzione, Marketing e Comunicazione" },
        ]}
        challenge={{
          description:
            "L'Ufficio Pio, storica organizzazione torinese di contrasto alla povertà attiva dal 1595, affrontava un problema profondo: il nome della loro area strategica — 'Area Contrasto della Povertà' — trasmetteva assistenzialismo passivo invece di protagonismo attivo. Gli operatori si sentivano bloccati tra il peso della storia (oltre 400 anni) e la voglia di cambiare. I beneficiari venivano percepiti come 'persone da aiutare' invece che 'protagonisti del proprio futuro'.",
          problems: [
            "Nome istituzionale che rinforzava stigma e vittimizzazione",
            "Team diviso tra staticità storica e desiderio di movimento",
            "Gap tra intenzione (empowerment) e linguaggio (assistenzialismo)",
            "Peso della storicità: 'Siamo sempre stati così'",
          ],
        }}
        phases={[
          {
            title: "Emersione identità collettiva (2 settimane)",
            description:
              "Workshop di mappatura temporale Ieri/Oggi/Domani con tutto il team. Non abbiamo chiesto 'come vi chiamate', ma 'chi eravate, chi siete, chi volete diventare'. Emerse tre fasi: Ieri = staticità e separazione ('mi muovo o sto fermo?'), Oggi = fatica ma movimento di squadra ('Ok pedaliamo!'), Domani = determinazione e protagonismo ('il meglio deve ancora venire'). Metafora collettiva: dal pedalare incerti al guardare l'orizzonte insieme.",
          },
          {
            title: "Personas & Empathy Map (2 settimane)",
            description:
              "Costruzione di 4 personas realistiche dei beneficiari: Federica (madre monogenitoriale, sopravvivenza), Francesco (disoccupato rassegnato), Honorine (vittima di violenza, cerca autonomia), Miranda (migrante, futuro dei figli). Insight chiave: le personas non cercano 'assistenza', cercano traguardi concreti. Il linguaggio dell'ente non rispecchiava questa verità.",
          },
          {
            title: "Storytelling & Naming collaborativo (4 settimane)",
            description:
              "Ogni operatore ha raccontato un caso di successo reale usando framework COARS (Contesto, Ostacoli, Azioni, Risultati, Suggerimenti). Reframe collettivo: da 'aiutiamo poveri' a 'facilitiamo traguardi'. Processo di naming partecipato con 25 persone del team. Nome scelto: TRAGUARDI. Funziona perché: ogni persona ha traguardi propri, implica movimento non staticità, positivo e aspirazionale, utilizzabile senza vergogna.",
          },
        ]}
        results={[
          "Cambio identità interna: da 'facciamo assistenza' a 'facilitiamo protagonismo'",
          "Linguaggio operativo: meeting e documenti adottano framework 'traguardi personali'",
          "Percezione beneficiari: meno stigma, più dignità ('vado da Traguardi' vs 'vado all'ufficio poveri')",
          "Coerenza comunicativa: nuovo nome allinea cultura dichiarata e vissuta",
        ]}
      />
    </>
  );
};

export default UfficioPio;
