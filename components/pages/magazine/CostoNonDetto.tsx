import { SEO } from "@/components/SEO";

import ArticleLayout from "@/components/ArticleLayout";

const content = `C'è una ricerca di Gallup che torna spesso nelle nostre conversazioni con i clienti: il 70% dei dipendenti non è pienamente coinvolto nel proprio lavoro. Non sono insoddisfatti, non stanno cercando un altro impiego. Sono semplicemente presenti senza esserci davvero. È un dato che conosciamo tutti, eppure continua a sorprenderci ogni volta che lo incontriamo dentro un'organizzazione concreta.

Quello che Gallup non dice — e che noi vediamo quotidianamente — è che questo distacco non nasce dal nulla. Nasce da conversazioni che non sono mai avvenute, da aspettative mai esplicitate, da valori dichiarati nei valori aziendali e poi smentiti in una riunione di lunedì mattina. Nasce dal non detto che si accumula, strato dopo strato, fino a diventare cultura.

La cultura organizzativa non è quello che scriviamo sui siti istituzionali. È quello che succede quando nessuno guarda. È la somma di tutti i silenzi strategici, di tutte le conversazioni evitate, di tutte le domande che nessuno ha mai osato fare ad alta voce.

## Il pattern che si ripete

Entrare in un'organizzazione e ascoltare è il nostro primo gesto. Non per raccogliere dati, ma per capire cosa non viene detto. E il pattern è quasi sempre lo stesso: c'è una versione ufficiale della realtà — quella dei comunicati, dei town hall, delle slide di strategia — e poi c'è una versione ufficiosa, quella che circola nei corridoi, nei messaggi su WhatsApp, nelle pause caffè.

Il problema non è che le due versioni esistano. Il problema è quando la distanza tra loro diventa così grande da rendere impossibile qualsiasi forma di fiducia. Quando le persone smettono di credere che la leadership stia dicendo quello che pensa davvero, smettono anche di dire quello che pensano loro. E a quel punto, l'organizzazione smette di imparare.

Abbiamo lavorato con aziende che avevano investito cifre importanti in survey sul clima, in programmi di wellbeing, in iniziative di engagement. I dati miglioravano. Le persone continuavano ad andarsene, o a restare senza esserci.

## La svolta

Qualche mese fa, in un workshop con il team di leadership di un'azienda manifatturiera del nord Italia, abbiamo chiesto a ognuno dei presenti di completare questa frase: «La cosa che non diciamo mai apertamente in questa organizzazione è…»

Il silenzio che è seguito ha durato quasi un minuto intero. Poi un direttore operativo, con venti anni di azienda alle spalle, ha detto: «Che siamo tutti spaventati di sbagliare, e che questo ci rende molto più lenti di quanto dovremmo essere.»

Nessuno ha obiettato. Tutti annuivano. Era la prima volta che quella frase veniva pronunciata ad alta voce, in una stanza con le persone che avrebbero potuto fare qualcosa al riguardo.

Da quella conversazione è partito un processo che ha ridisegnato alcuni meccanismi decisionali fondamentali. Non perché abbiamo scoperto qualcosa di nuovo — quella paura era già lì, da anni — ma perché finalmente era diventata nominabile. E le cose nominabili si possono cambiare.

## In sintesi (per chi deve decidere)

- Il costo del non detto non appare nei bilanci, ma si misura in turnover, lentezza decisionale e innovazione mancata.
- La cultura si forma nei gap tra ciò che l'organizzazione dichiara e ciò che effettivamente premia o punisce.
- Le survey sul clima misurano sintomi. Le conversazioni che contano esplorano cause.
- Rendere nominabile l'innominabile è un atto di leadership, non di vulnerabilità.
- Le organizzazioni che imparano a dire le cose difficili ad alta voce diventano strutturalmente più veloci e più solide.

## Cosa fare

- Quale frase, nella tua organizzazione, nessuno pronuncia mai in una stanza con le persone giuste?
- Se dovessi descrivere la cultura reale della tua azienda — non quella dichiarata, ma quella vissuta — cosa diresti?
- Quando è stata l'ultima volta che una conversazione difficile ha cambiato qualcosa di concreto nel modo in cui lavorate?
- Chi, nella tua organizzazione, ha il permesso esplicito di dire quello che pensa davvero?

> L'invisibile non sparisce perché non lo guardiamo. Prende solo forme più costose. Il primo passo è sempre lo stesso: imparare a vederlo.`;

const CostoNonDetto = () => {
  return (
    <>
      <SEO
        title="Il costo del non detto. Perché il 70% dei dipendenti non c'è davvero."
        description="Il distacco dei dipendenti non nasce dal nulla: nasce dal non detto che si accumula fino a diventare cultura. Come rendere nominabile l'innominabile dentro un'organizzazione."
        canonical="https://venturoconsulting.it/magazine/il-costo-del-non-detto"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/il-costo-del-non-detto",
          en: "https://venturoconsulting.it/en/magazine/cost-of-the-unsaid",
        }}
        lang="it"
      />
      <ArticleLayout
        category="Cultura organizzativa"
        title="Il costo del non detto. Perché il 70% dei dipendenti non c'è davvero."
        subtitle="Il distacco dei dipendenti non nasce dal nulla: nasce dal non detto che si accumula, strato dopo strato, fino a diventare cultura."
        date="29 mar 2026"
        readTime="6 min"
        content={content}
      />
    </>
  );
};

export default CostoNonDetto;
