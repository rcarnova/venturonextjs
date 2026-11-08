import ArticleLayout from "@/components/ArticleLayout";
import GuideDownload from "@/components/GuideDownload";

const content = `In Italia solo l'11% dei lavoratori è pienamente coinvolto nel proprio lavoro. Uno su quattro è attivamente disimpegnato, cioè lavora contro, non solo senza entusiasmo. Sono i dati Gallup del rapporto 2026, una media degli ultimi tre anni: l'Italia sta sotto la media europea, che è già la più bassa del mondo.

Il disimpegno non resta fermo. A un certo punto diventa una lettera di dimissioni. E ogni lettera ha un costo che quasi nessuna azienda mette a bilancio.

---

## Perché le persone se ne vanno

La risposta più comune è lo stipendio, ed è vera. Nelle indagini Randstad il 40% dei lavoratori indica una retribuzione troppo bassa rispetto al costo della vita come motivo per lasciare. Nell'indagine dei Consulenti del Lavoro il miglioramento economico è al primo posto, intorno al 39%, welfare e benefit compresi.

Ma lo stipendio arriva quasi sempre in compagnia. Subito dopo vengono l'equilibrio tra vita e lavoro, citato da circa un lavoratore su tre, e la mancanza di flessibilità. Poi motivazione, clima, prospettive di carriera, ciascuna intorno al 20%. Tra le cause dichiarate di interruzione del rapporto compaiono insoddisfazione, demotivazione, obiettivi non condivisi.

Un aumento isolato raramente trattiene qualcuno che ha carichi insostenibili, poca autonomia e nessun riconoscimento. Compra tempo, quando va bene.

---

## Il dato più duro

L'Ispettorato Nazionale del Lavoro pubblica ogni anno i dati sulle convalide delle dimissioni dei genitori con figli piccoli. Nel 2025 circa il 38% delle uscite di madri e padri è legato alla difficoltà di conciliare lavoro e cura dei figli per mancanza di servizi. Un altro 28,4% dipende dall'organizzazione del lavoro o da scelte dell'azienda. Per le lavoratrici madri la conciliazione è la motivazione prevalente.

Il primo numero parla del Paese. Il secondo parla delle aziende: orari, turni, carichi, flessibilità negata. È la parte che si poteva cambiare dall'interno, e nessuno l'ha cambiata.

---

## Quello che i numeri non dicono

Le statistiche registrano il motivo dichiarato, quello che si scrive in una convalida o si dice in un'exit interview. Il motivo vero spesso è un altro, o è una somma di cose piccole: il capo che non ascolta, il carico che cresce solo per alcuni, il feedback che non arriva, la sensazione che il proprio lavoro non conti.

Sono segnali che si vedono mesi prima della lettera. Nei team li conoscono tutti. Mancano solo nei report.

È quello che noi chiamiamo il non detto: la parte della cultura che regola i comportamenti senza essere mai nominata. Le survey arrivano a misurarne gli effetti, l'engagement che cala. Raramente arrivano alle cause, perché le cause si raccontano, non si spuntano su una scala da uno a cinque.

---

## Quanto vi costa

Il turnover sembra un costo HR. In realtà pesa sulla produzione. Per ogni persona che se ne va ci sono il recruiting e l'inserimento, che arrivano in fattura. Poi le settimane in cui il posto resta scoperto e i mesi in cui il nuovo arrivato non è ancora a pieno regime, che in fattura non arrivano mai.

Facciamo un esempio. Una persona con 36.000 euro di RAL, otto settimane di posto scoperto, tre mesi di inserimento al 50%: la sua uscita costa circa 15.000 euro, il 42% della RAL. Con dieci uscite l'anno su ruoli simili sono 150.000 euro. Per profili qualificati o manageriali le stime arrivano al 100–150% della RAL per ogni uscita.

Abbiamo costruito un [simulatore del costo del turnover](/simulatore-turnover) per fare questo conto con i vostri numeri. Le ipotesi sono tutte modificabili, e alla fine vi dice quante uscite in meno servono per ripagare un progetto.

---

## In sintesi, per chi deve decidere

- In Italia solo l'11% dei lavoratori è pienamente coinvolto. Il disimpegno è la condizione normale, non l'eccezione.
- Lo stipendio è il primo motivo dichiarato, ma quasi mai l'unico. Intervenire solo lì compra tempo.
- Una parte rilevante delle uscite dipende dall'organizzazione del lavoro: orari, carichi, flessibilità. È la parte che si può cambiare.
- Ogni uscita costa intorno al 40% della RAL in uno scenario realistico, e molto di più per i ruoli chiave.
- I segnali arrivano prima delle dimissioni. Bisogna sapere dove ascoltarli.

## Domande per verificare

- Sapete quante persone sono uscite da voi l'anno scorso, e quanto vi è costata ciascuna?
- Il motivo scritto nell'exit interview è quello vero? Chi lo saprebbe dire?
- Quali team perdono più persone, e cosa hanno in comune i loro manager?
- Nella vostra organizzazione, chiedere flessibilità è un diritto o un favore?

Fonti: Gallup, State of the Global Workplace 2026, dati Italia; Ispettorato Nazionale del Lavoro, Relazione sulle convalide delle dimissioni 2025; indagini Randstad e Fondazione Studi Consulenti del Lavoro sulle motivazioni di uscita; Adecco Group e Jobpricing sul costo della vacancy.`;

const DimissioniSiSentono = () => {
  return (
    <ArticleLayout
      category="Cultura organizzativa"
      title="Le dimissioni si sentono prima di arrivare."
      subtitle="Perché in Italia le persone lasciano il lavoro, quanto costa ogni uscita e dove si trovano i segnali che i report non registrano."
      date="8 nov 2026"
      readTime="5 min"
      content={content}
      after={<GuideDownload />}
    />
  );
};

export default DimissioniSiSentono;
