import { SEO } from "@/components/SEO";

import ArticleLayout from "@/components/ArticleLayout";

const content = `Il remote working non è un problema ambientale. È uno specchio.

La Banca d'Italia misura le emissioni del lavoro ibrido. Il risultato è chiaro. La domanda interessante è un'altra.

La Banca d'Italia, in collaborazione con ENEA, ha pubblicato a gennaio 2026 uno studio sull'impatto ambientale del lavoro ibrido (QEF n. 999). I numeri sono netti: ogni giornata in ufficio genera 4,1 kgCO2e per gli spostamenti casa-lavoro. Una giornata da remoto genera 1,1 kgCO2e di extra consumi domestici. Bilancio positivo, quasi quattro volte migliore.

È una buona notizia per chi si occupa di sostenibilità ambientale. Ma non è lì che si gioca la partita più interessante per chi si occupa di cultura organizzativa.

## Il remote non crea problemi. Li rivela.

Il lavoro ibrido ha reso visibile qualcosa che esisteva già: il rapporto che le persone hanno con il proprio lavoro. Quando il lavoro è vissuto come obbligo — e non come traiettoria — la logica diventa semplice: vendo il minimo tempo necessario. Il remote non produce questo atteggiamento. Lo amplifica. Gli dà struttura.

La domanda che poche organizzazioni si fanno è questa: le persone sanno rispondere a "cosa vuol dire essere bravi qui"? Sanno tracciare il valore che stanno creando? Sanno cosa imparano — e se quello che imparano vale qualcosa anche altrove?

Se la risposta è no, il purpose aziendale non risolve nulla. Anzi, peggiora le cose: crea disillusione nelle persone che ci credono davvero.

## Il vecchio modello non regge.

Il manager che misura l'impegno dalla presenza fisica ha perso il suo strumento principale. Non può vedere chi è in ufficio. Non può usare la prossimità come proxy della dedizione. Il micromanagement a distanza è ancora più alienante di quello in presenza — e produce gli stessi risultati: le persone imparano a sembrare presenti, non a esserlo.

Il nuovo modello richiede qualcosa culturalmente più difficile: chiarezza feroce su cosa significa produrre valore in quel ruolo, in quel team, in quel momento specifico.

Non "dare il massimo". Criteri operativi. Comportamenti osservabili. La differenza tra mediocre, bravo ed eccellente — descritta in modo che chiunque possa riconoscerla.

## Tre condizioni che cambiano il gioco.

La prima è che le aspettative siano specifiche, non generiche. Non basta dire "vogliamo persone proattive". Serve dire cosa significa proattività in quel contesto: quali decisioni ci si aspetta vengano prese autonomamente, su cosa vale la pena alzare la mano, quando aspettarsi feedback e di che tipo.

La seconda è che il valore venga definito dal team, non imposto dall'alto. Una review trimestrale in cui ci si chiede: cosa ha creato più impatto in questi mesi? Cosa cambia, alla luce di questo? Il manager porta vincoli e contesto — non la risposta.

La terza è la responsabilizzazione che emerge dall'interdipendenza visibile. Le persone si sentono responsabili quando sanno che altri dipendono da loro e vedono l'effetto del proprio lavoro. Non perché sono pagate per esserlo.

## In sintesi (per chi deve decidere)

- Il remote rivela il grado di senso che le persone trovano nel proprio lavoro — non lo crea.
- Il purpose aziendale astratto non sostituisce la chiarezza su cosa significa fare bene il proprio ruolo.
- La presenza fisica come proxy dell'impegno è già finita — che lo si ammetta o no.
- La responsabilizzazione forzata non funziona: emerge dall'interdipendenza visibile.
- Investire in cultura della performance significa definire criteri, non aumentare il controllo.

## Cosa fare (prima di decidere sulla policy ibrida)

1. Nella vostra organizzazione, esiste una descrizione operativa di cosa distingue chi lavora bene da chi lavora male — per ogni ruolo?
2. Le persone sanno tracciare il valore che creano, o lo deducono solo dal feedback annuale?
3. Quello che le persone imparano qui è spendibile anche fuori? Lo sanno?
4. Se domani un collaboratore vi chiedesse "su cosa sarò premiato?", sapreste rispondere in modo specifico?

---

Il lavoro ibrido ha reso visibile qualcosa che esisteva già. Le organizzazioni che lo affrontano come problema di policy stanno guardando nel posto sbagliato. Quelle che lo usano come leva per ripensare come si crea e si riconosce il valore — quelle stanno costruendo qualcosa che dura.

> Fonte: Banca d'Italia / ENEA, *"L'impatto ambientale del lavoro da remoto: evidenze da un'indagine condotta in Banca d'Italia"*, QEF n. 999, Gennaio 2026.`;

const RemoteWorkingSpecchio = () => {
  return (
    <>
      <SEO
        title="Il remote working non è un problema ambientale. È uno specchio."
        description="Lo studio Banca d'Italia/ENEA misura l'impatto ambientale del lavoro ibrido. Ma la partita vera per chi si occupa di cultura organizzativa è un'altra: il remote non crea problemi, li rivela."
        canonical="https://venturoconsulting.it/magazine/remote-working-specchio"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/remote-working-specchio",
          en: "https://venturoconsulting.it/en/magazine/remote-work-as-mirror",
        }}
        lang="it"
      />
      <ArticleLayout
        category="Cultura organizzativa"
        title="Il remote working non è un problema ambientale. È uno specchio."
        subtitle="La Banca d'Italia misura le emissioni del lavoro ibrido. Il risultato è chiaro. La domanda interessante è un'altra."
        date="21 apr 2026"
        readTime="6 min"
        content={content}
      />
    </>
  );
};

export default RemoteWorkingSpecchio;
