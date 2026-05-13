import { SEO } from "@/components/SEO";

import ArticleLayout from "@/components/ArticleLayout";

const content = `Entro il 7 giugno 2026 ogni azienda italiana dovrà rendere visibile qualcosa che ha tenuto nell'ombra per decenni.

La Direttiva UE 2023/970 sulla trasparenza salariale non è solo una questione di compliance.

È uno specchio.

Le nuove norme impongono criteri retributivi oggettivi, vietano di chiedere la storia salariale dei candidati, obbligano a pubblicare le fasce retributive prima dell'assunzione. Le aziende sopra una certa soglia dovranno rendicontare il divario tra uomini e donne.

In Italia, in alcuni contesti, quel divario arriva al 40%.

Un numero che fa rumore.

## Quello che i numeri non dicono

Ma quel numero racconta anche qualcosa di più sottile.

Perché parte di quella differenza non nasce dalla busta paga. Nasce prima.

Nasce dalla distribuzione del potere dentro le organizzazioni, da chi occupa le posizioni apicali, da quali percorsi vengono considerati percorsi da leader, da quali competenze vengono riconosciute come strategiche e quali invece restano sullo sfondo.

I numeri non mentono. Ma da soli non bastano a capire.

Sono la superficie di una cultura.

## Due strade davanti allo specchio

Quando un'azienda scopre il proprio gap retributivo, si trova davanti a una scelta.

Può trattarlo come un problema tecnico da correggere in fretta — riallineare le buste paga, sistemare i numeri, archiviare la pratica.

Oppure può usarlo come punto di partenza per capire come pensa davvero la propria organizzazione: chi promuove e perché, quali comportamenti vengono premiati, quali silenzi vengono tollerati.

Noi lavoriamo con chi sceglie la seconda strada.

Perché aggiustare i numeri senza toccare la cultura produce compliance, non cambiamento. E la compliance, da sola, non ha mai trattenuto nessuno.

## In sintesi

- La Direttiva UE 2023/970 obbliga le aziende italiane a rendere pubblici criteri e fasce retributive entro giugno 2026.
- Il gap retributivo non è solo una questione di stipendi: è il sintomo visibile di una distribuzione di potere e riconoscimento.
- Correggere i numeri senza interrogare la cultura produce compliance, non cambiamento reale.
- La trasparenza diventa un'opportunità solo per chi è disposto a guardare cosa c'è dietro i numeri.

## Cosa fare

1. State trattando la nuova normativa come un adempimento amministrativo o come un'occasione per rileggere la vostra organizzazione?
2. Sapete spiegare — non giustificare — perché certe posizioni sono retribuite in un certo modo?
3. Quando guardate chi è arrivato in alto, riuscite a riconoscere i pattern di chi non ci è arrivato?
4. Le persone che lavorano con voi capirebbero le vostre scelte retributive se le vedessero pubblicate domani?

---

La trasparenza salariale arriverà. Per tutti, allo stesso modo.

La domanda che ci facciamo — e che facciamo alle aziende con cui lavoriamo — è questa:

> Siete pronti a guardare cosa c'è dietro quei numeri?`;

const TrasparenzaSalariale = () => {
  return (
    <>
      <SEO
        title="Trasparenza salariale: lo specchio che le aziende non possono più evitare"
        description="La Direttiva UE 2023/970 obbliga le aziende italiane a rendere pubblici i criteri retributivi entro giugno 2026. Ma il vero tema non sono i numeri: è la cultura che li ha generati."
        canonical="https://venturoconsulting.it/magazine/trasparenza-salariale"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/trasparenza-salariale",
          en: "https://venturoconsulting.it/en/magazine/pay-transparency",
        }}
        lang="it"
      />
      <ArticleLayout
        category="Cultura organizzativa"
        title="Trasparenza salariale: lo specchio che le aziende non possono più evitare"
        subtitle="La Direttiva UE 2023/970 non è solo compliance. È un'occasione per capire come pensa davvero la vostra organizzazione."
        date="17 apr 2026"
        readTime="5 min"
        content={content}
      />
    </>
  );
};

export default TrasparenzaSalariale;
