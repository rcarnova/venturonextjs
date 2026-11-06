import ArticleLayout from "@/components/ArticleLayout";

const content = `Nella seconda Venturo Conversation abbiamo parlato con Matteo Lo Bue, Agile Topic Leader di Reale Group. Si occupa di change management da circa cinque anni, dentro un percorso di quindici in azienda. Gli abbiamo fatto la stessa domanda della prima puntata: che cosa vuol dire engagement? La CFO di IKEA ci aveva risposto con i valori. Matteo ci ha risposto con le cornici.

Il passaggio che mi sono portato a casa è questo. Coinvolgere le persone non significa andare a prendere un potenziale nascosto, dall'alto, in una relazione asimmetrica in cui qualcuno estrae e qualcun altro dà. Significa costruire cornici e modi di lavorare in cui responsabilità e autonomia possano emergere da sole.

---

## L'engagement come risorsa da estrarre

Molti progetti di engagement partono da un'idea precisa, anche se nessuno la scrive: le persone hanno energie che non stanno dando, e il compito dell'azienda è tirarle fuori. Da qui le campagne, gli incentivi, i programmi di ascolto che finiscono in un piano d'azione deciso altrove.

Il limite è nella relazione. Se l'engagement è qualcosa che l'organizzazione prende, le persone lo capiscono in fretta, e si regolano di conseguenza. Danno quello che serve, non di più.

La prospettiva di Matteo sposta la domanda. Invece di chiedersi come ottenere più coinvolgimento, ci si chiede quali condizioni lo rendono possibile. È la stessa scelta che facciamo con Lumen: la cultura non si costruisce dall'esterno, si fa emergere. Vale anche per la responsabilità.

---

## Il cambiamento ha un budget

In Reale Group il change management è nato come pronto intervento. Arrivava alla fine dei progetti, quando qualcosa si inceppava e le persone opponevano resistenza. Poi l'azienda ha cambiato regola: ogni iniziativa rilevante dedica circa il 10% del tempo e del budget ad ascolto, supporto e apprendimento.

Sembra un dettaglio organizzativo. È una presa di posizione. Dice che il lato umano di un progetto non è un costo imprevisto da coprire quando le cose vanno male, ma una parte del lavoro da pianificare dal primo giorno. E dice che ascoltare costa meno prima che dopo.

Vale la pena guardare i propri progetti con questa lente. Quanto del budget dell'ultima riorganizzazione è andato a capire come l'avrebbero vissuta le persone? Spesso la risposta è zero, e la voce compare dopo, sotto forma di consulenza per gestire le resistenze.

---

## Il manager che non gestisce i numeri

Nel modello agile di Reale Group, che oggi coinvolge circa 800 persone su 4.000, gli obiettivi commerciali e numerici sono dei team autonomi. I manager si occupano d'altro: benessere, crescita, staffing e competenze delle persone.

È una separazione che fa discutere, e ne abbiamo parlato a lungo. Il manager tradizionale tiene insieme risultati e persone, e chi ha avuto questo ruolo sa quanto sia difficile: quando le due cose entrano in conflitto, quasi sempre vincono i numeri. Separarle toglie al manager il conflitto di interessi più grande. Gli lascia un mestiere che molte aziende dicono di volere e poche misurano: far crescere le persone.

Accanto a questo, Reale Group ha lavorato due anni a una dashboard che osserva i marcatori del cambiamento invece dei soli risultati. I risultati non si possono prevedere. I segnali che il cambiamento sta avvenendo, sì.

---

## La domanda che resta aperta

La parte più onesta della conversazione è arrivata alla fine. Se i team sono autonomi e i manager si occupano delle persone, come si misura la performance? E come si paga?

Matteo non ha una risposta pronta, e lo dice. I livelli di inquadramento frenano la crescita orizzontale: fare carriera coincide quasi sempre con diventare manager. Riconoscere il contributo di un professionista senza dargli un'area da guidare resta difficile, anche per chi è più avanti di molti.

Per me qui c'è il conflitto eterno tra il bisogno di controllo, che nasce dal voler migliorare, e i principi di autonomia e fiducia. Misurare tutto toglie spazio alla fiducia. Non misurare niente toglie strumenti a chi deve decidere. Non credo esista una formula. Credo però che la domanda vada fatta ad alta voce, come ha fatto Matteo, invece di nasconderla dietro un sistema di valutazione che nessuno sente suo.

---

## In sintesi, per chi deve decidere

- L'engagement non si ottiene chiedendolo. Si progettano le condizioni in cui responsabilità e autonomia possono emergere.
- Il cambiamento costa meno quando entra nel progetto dal primo giorno, con una quota di tempo e budget dedicata all'ascolto.
- Separare la gestione dei numeri dalla cura delle persone cambia il mestiere del manager, e lo rende più chiaro.
- Misurare i segnali del cambiamento dice più dei risultati, che dipendono anche da quello che non si controlla.
- Autonomia e misurazione tradizionale convivono male. Meglio dichiararlo che fingere di averlo risolto.

## Domande per verificare

- Nei vostri progetti di cambiamento, quanto tempo e budget va all'ascolto delle persone, e in che momento?
- I vostri manager sono valutati anche su come crescono le persone del loro team, o solo sui risultati?
- Che cosa succede, da voi, quando un team autonomo ottiene un risultato che nessuno si aspettava?
- Per crescere in azienda, una persona deve per forza guidare altre persone?

La conversazione completa con Matteo Lo Bue, con l'audio e la sintesi a capitoli, è nella [pagina della puntata](/venturo-conversation/change-agent-reale-group).`;

const EngagementCornici = () => {
  return (
    <ArticleLayout
      category="Cultura organizzativa"
      title="L'engagement non si estrae. Si costruisce la cornice."
      subtitle="Cosa ci ha insegnato un Change Agent di Reale Group su autonomia, change management e il nodo della misurazione, nella seconda Venturo Conversation."
      date="6 nov 2026"
      readTime="5 min"
      content={content}
    />
  );
};

export default EngagementCornici;
