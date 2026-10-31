import ArticleLayout from "@/components/ArticleLayout";

const content = `Abbiamo aperto Venturo Conversation con una domanda che di solito facciamo alle risorse umane: che cosa tiene motivate le persone? Questa volta l'abbiamo fatta a chi guarda i numeri. Elena Alemanno è CFO di Inter IKEA Systems e lavora in IKEA da 36 anni. Mi aspettavo margini, costi, produttività. Ha parlato quasi solo di valori.

Una frase in particolare me la sono portata a casa: i valori non si vedono. Io non vedo i tuoi valori, vedo i tuoi comportamenti. È una cosa semplice, quasi ovvia. Ma cambia il modo di lavorare sulla cultura di un'organizzazione.

---

## Il punto cieco dei valori dichiarati

Quasi tutte le aziende con cui lavoriamo hanno i loro valori scritti da qualche parte. Sul sito, nelle presentazioni ai candidati, sul muro della sala riunioni. Il problema è che un valore scritto non dice niente su come ci si comporta martedì alle 11, quando una decisione è difficile e il tempo è poco.

Elena lo descrive così: quando un comportamento non è coerente con il valore dichiarato si crea una distonia. In IKEA lavorare insieme è un valore fondante. Se qualcuno inizia a comportarsi da solista, la distonia si vede subito. E qualcuno la nomina.

È lo stesso schema che usiamo con Lumen, preso dal modello di Edgar Schein. C'è ciò che si vede, ciò che si dice e ciò che si dà per scontato. Le survey arrivano al secondo livello: raccolgono ciò che le persone dichiarano. L'engagement però si decide al terzo, nelle assunzioni che nessuno scrive e che tutti seguono.

> "La cultura è il modo in cui facciamo le cose quando nessuno ci guarda."

---

## Quando l'identità è chiara, non serve raccontarla

Elena ha scelto IKEA alla fine degli anni Ottanta. Aveva offerte da Fiat, IBM e una banca, e ha scelto un'azienda che in Italia quasi nessuno conosceva. Si era innamorata del catalogo: linee semplici, prezzi bassi. Entrando ha ritrovato la stessa semplicità nei valori.

IKEA non ha fatto employer branding. Ha mandato sé stessa. Quando l'identità di un'organizzazione è chiara e vissuta, comunica da sola: le persone giuste si riconoscono, le altre capiscono che non è il loro posto. L'employer branding che regge non aggiunge un racconto. Rende visibile quello che c'è già.

---

## La coerenza si allena

Una delle storie più concrete della conversazione riguarda il gruppo di Elena, circa 80 persone tra Olanda e Svezia. Si incontrano tre volte l'anno. In ogni incontro c'è una sessione su leadership e valori, e da due anni c'è un premio per l'errore più grande. Chi lo racconta spiega che cosa ha imparato, poi la discussione continua in piccoli gruppi. Il premio è una borraccia.

Non serve il premio in sé. Serve il messaggio: qui si può sbagliare, a patto di prendersene la responsabilità e di imparare in fretta. Elena lo dice chiaramente: funziona solo se chi sbaglia non viene punito.

Accanto al premio ci sono altri rituali. I comportamenti lontani dai valori si discutono in gruppo, senza fare nomi. Il feedback va anche dal gruppo verso il manager. Per i casi seri c'è un canale anonimo con una commissione indipendente.

Massimo ha raccontato di aziende che ci chiedono di scrivere i valori una volta per tutte, da appendere e non toccare per vent'anni. La risposta di Elena è stata netta: se vivi secondo valori diversi da quelli che dichiari, stai creando un'altra cultura. Un manifesto non tiene viva la cultura. La tiene viva la palestra.

---

## L'engagement nasce dalla decisione condivisa

C'è un passaggio che chi guida un'organizzazione italiana tende a sottovalutare. In IKEA le decisioni passano dal consenso: tutti hanno diritto di dire la propria prima che si decida. Elena ammette che a volte è frustrante, perché i processi richiedono più tempo. Ma quel tempo torna indietro dopo: quando si passa all'esecuzione c'è engagement, perché tutti hanno partecipato alla decisione.

È la ragione per cui abbiamo chiamato il format Conversation. L'engagement non si comunica, si conversa. Non arriva con un piano d'azione dopo la survey. Arriva quando le persone sentono che la loro voce ha cambiato qualcosa.

---

## In sintesi, per chi deve decidere

- I valori sono invisibili: le persone giudicano l'organizzazione dai comportamenti, a partire da quelli di chi guida.
- Una distonia tra valori dichiarati e comportamenti costa più di qualsiasi campagna interna: è lì che nasce il distacco.
- Quando l'identità è chiara, attrarre le persone giuste diventa quasi una conseguenza.
- La cultura va allenata con rituali concreti: un errore raccontato davanti a tutti insegna più di un valore appeso al muro.
- Le decisioni condivise sono più lente da prendere e più veloci da realizzare.

## Domande per verificare

- Se un nuovo collega osservasse le vostre riunioni per una settimana, quali valori ne dedurrebbe?
- Qual è l'ultimo errore che qualcuno ha potuto raccontare apertamente, senza conseguenze?
- I vostri valori sono mai stati usati per mettere in discussione una decisione presa dall'alto?
- Quanto tempo è passato dall'ultima volta che i vostri valori sono stati discussi, invece che solo comunicati?

La conversazione completa con Elena Alemanno, con la sintesi a capitoli, è nella [pagina della puntata](/venturo-conversation/motivazione-engagement-cfo).`;

const ValoriComportamenti = () => {
  return (
    <ArticleLayout
      category="Cultura organizzativa"
      title="I valori non si vedono. I comportamenti sì."
      subtitle="Cosa ci ha insegnato una CFO di IKEA su engagement, coerenza e diritto di sbagliare, nella prima Venturo Conversation."
      date="31 ott 2026"
      readTime="5 min"
      content={content}
    />
  );
};

export default ValoriComportamenti;
