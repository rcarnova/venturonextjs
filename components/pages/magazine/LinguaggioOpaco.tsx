import { SEO } from "@/components/SEO";
import ArticleLayout from "@/components/ArticleLayout";

const content = `Esiste una ricerca di Cornell che molti responsabili HR farebbero bene a stampare e attaccare sulla propria scrivania. Lo studio conferma qualcosa che chi lavora nelle organizzazioni sente da anni senza riuscire a dirlo ad alta voce: le persone che amano il linguaggio aziendale vuoto — le buzzword, il gergo da slide, le frasi che suonano bene ma non significano nulla — tendono a essere meno competenti nel loro lavoro. Non è un'opinione. È un dato.

Il meccanismo è più sottile di quanto sembri. Non si tratta semplicemente di persone che usano parole difficili per sembrare intelligenti. La ricerca suggerisce che chi trova conforto nel linguaggio opaco tende anche ad avere una tolleranza più alta per l'imprecisione, per il pensiero vago, per le conclusioni che non reggono all'analisi. Il problema, in altre parole, non è stilistico. È cognitivo.

Eppure nelle organizzazioni italiane — e non solo — questo tipo di linguaggio continua a proliferare. Nelle presentazioni, nelle riunioni, nei valori aziendali affissi alle pareti. Come se la forma potesse compensare la mancanza di sostanza.

## Il pattern che si ripete

Il pattern che vediamo ripetersi è questo: un'organizzazione attraversa un momento di cambiamento — una fusione, una riorganizzazione, un cambio di leadership — e risponde con un'ondata di comunicazione densa di termini come *ecosistema*, *trasformazione*, *sinergia*, *purpose-driven*. Parole che riempiono il vuoto lasciato dall'incertezza. Parole che danno l'impressione che qualcuno abbia capito dove si sta andando.

Il problema è che chi ascolta lo sa. I collaboratori riconoscono il gergo difensivo. Lo riconoscono non perché siano cinici, ma perché hanno memoria. Ricordano l'ultima volta che quelle stesse parole sono state usate, e ricordano cosa è successo dopo. Il risultato è un'erosione silenziosa della fiducia — non clamorosa, non misurabile in una singola survey, ma costante.

Ciò che rende il fenomeno particolarmente insidioso è che si auto-rinforza. Più il linguaggio vuoto viene tollerato in cima, più si normalizza nei livelli intermedi. I manager imparano a comunicare per protezione, non per chiarezza. Le decisioni vengono avvolte in strati di ambiguità. E chi potrebbe portare una prospettiva critica — spesso le persone più competenti — impara ad abbassare la voce o a cercare ambienti più onesti altrove.

## Una storia, per non restare nell'astratto

Qualche mese fa, durante un lavoro con un'azienda manifatturiera del Nord Italia, abbiamo assistito a una scena che ci è rimasta. Il direttore HR stava presentando ai manager di linea i nuovi "valori aziendali riformulati". Cinque minuti di slide, quattro valori, ciascuno con una definizione di tre righe. Silenzio in sala.

A un certo punto, uno dei capi reparto — vent'anni di anzianità, nessuna inclinazione alla diplomazia — ha alzato la mano e ha detto: *"Ma questi valori descrivono come siamo o come vogliamo essere? Perché se descrivono come siamo, qualcosa non torna."* La domanda ha cambiato tutto. Non perché fosse aggressiva, ma perché era precisa. Aveva il coraggio della chiarezza.

Quella domanda ha aperto una conversazione di due ore che il processo formale non aveva previsto. Sono emersi nodi reali, tensioni vere, aspettative mai dette. Al termine, il direttore HR ci ha confessato che in quella stanza si era fatto più lavoro culturale che nei sei mesi di processo di ridefinizione dei valori. La differenza non era nel contenuto. Era nel linguaggio: concreto, situato, scomodo quanto bastava per essere utile.

## In sintesi, per chi deve decidere

- Il linguaggio aziendale opaco non è neutro: segnala e riproduce una cultura in cui l'apparenza conta più della sostanza
- Le persone più competenti tendono a essere le prime a perdere fiducia quando il gergo sostituisce la chiarezza
- I valori aziendali scritti per sembrare bene spesso dicono meno di una singola conversazione franca in sala riunioni
- Tollerare il linguaggio vuoto nei ruoli di leadership è una scelta: ha un costo che si paga nel tempo, in qualità delle relazioni e delle decisioni
- La cultura di un'organizzazione si legge meglio nel modo in cui le persone parlano tra loro che in quello che scrivono sulle slide

## Cosa fare: domande pratiche per iniziare

- Nell'ultima comunicazione interna importante che abbiamo inviato, quante frasi potrebbero essere firmate da qualsiasi altra azienda del settore senza cambiare una virgola?
- Chi sono, nella nostra organizzazione, le persone che fanno domande scomode con precisione — e quanto spazio diamo loro di farlo?
- I nostri valori aziendali descrivono chi siamo o chi vorremmo essere? La differenza è onesta con noi stessi?

---

La chiarezza non è un valore stilistico. È una scelta organizzativa che ha conseguenze reali su chi rimane, su chi decide, e su quanto quelle decisioni valgono.`;

const LinguaggioOpaco = () => {
  return (
    <>
      <SEO
        title="Le buzzword non sono un problema stilistico. Sono un problema cognitivo."
        description="Una ricerca di Cornell conferma ciò che chi lavora nelle organizzazioni sente da anni: chi usa linguaggio aziendale opaco tende ad essere meno competente. Il problema non è stilistico."
        canonical="https://venturoconsulting.it/magazine/linguaggio-opaco-e-competenza"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/linguaggio-opaco-e-competenza",
          en: "https://venturoconsulting.it/en/magazine/corporate-jargon-and-competence",
        }}
        lang="it"
      />
      <ArticleLayout
        category="Cultura organizzativa"
        title="Le buzzword non sono un problema stilistico. Sono un problema cognitivo."
        subtitle="Una ricerca di Cornell mette i numeri su qualcosa che le organizzazioni sane sanno già: il linguaggio opaco non è innocente."
        date="14 mag 2026"
        readTime="6 min"
        content={content}
      />
    </>
  );
};

export default LinguaggioOpaco;
