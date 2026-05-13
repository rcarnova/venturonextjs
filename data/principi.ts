export interface Libro {
  titolo: string;
  autore: string;
  concetto: string;
  applicazione: string;
}

export interface Sezione {
  id: string;
  titolo: string;
  intro: string;
  coverImage?: string;
  libri: Libro[];
}

export const sezioni: Sezione[] = [
  {
    id: "cultura-sistema",
    titolo: "La cultura è un sistema a tre livelli",
    coverImage: "/books/schein.jpg",
    intro: "Edgar Schein ci ha insegnato che la cultura organizzativa non è ciò che si dice o si scrive — è ciò che si dà per scontato. E che per cambiarla davvero bisogna scendere dal livello visibile (artefatti) a quello invisibile (assunzioni di base).",
    libri: [
      {
        titolo: "Organizational Culture and Leadership",
        autore: "Edgar Schein",
        concetto: "\"Culture is the pattern of basic assumptions that a group has invented, discovered, or developed in learning to cope with its problems.\"\n\nLa cultura ha tre livelli sovrapposti: artefatti (ciò che si vede), valori dichiarati (ciò che si dice), assunzioni di base (ciò che si dà per scontato). La maggior parte degli interventi culturali fallisce perché tocca solo i primi due livelli.",
        applicazione: "Lumen è progettato per arrivare al terzo livello. Le domande narrative aggirano i filtri razionali e fanno emergere le assunzioni profonde — quelle che le persone non sanno nemmeno di avere finché non raccontano una storia.",
      },
      {
        titolo: "Start With Why",
        autore: "Simon Sinek",
        concetto: "\"People don't buy what you do, they buy why you do it. And what you do simply proves what you believe.\"\n\nLe organizzazioni che attraggono le persone giuste non sono quelle con le condizioni migliori: sono quelle che sanno rispondere a una domanda semplice: perché esistiamo? Quel perché non è uno slogan. È il senso che le persone cercano nel proprio lavoro ogni giorno.",
        applicazione: "Lumen non cerca solo di mappare la cultura: cerca il perché profondo che la attraversa. Nelle storie che le persone raccontano emerge sempre qualcosa di più grande del ruolo o del processo: il senso che danno al proprio lavoro, il modo in cui quel lavoro rispecchia chi sono. Quando quel perché è visibile e condiviso, la cultura smette di essere un tema HR e diventa il fondamento di tutto.",
      },
      {
        titolo: "Reinventing Organizations",
        autore: "Frederic Laloux",
        concetto: "\"The way we think about organizations is evolving. The most innovative organizations are those that have learned to operate with distributed authority, wholeness, and evolutionary purpose.\"\n\nLe organizzazioni \"teal\" non hanno bisogno di gerarchie rigide perché hanno chiarezza culturale profonda. Tutti sanno cosa conta davvero, e questo guida le decisioni senza bisogno di controllo centralizzato.",
        applicazione: "Quando lavoriamo con organizzazioni in transizione verso modelli più evolutivi, non partiamo dai processi o dalle strutture. Partiamo dalla cultura — dalle assunzioni profonde su potere, fiducia, errore. Se quelle non cambiano, nessuna struttura \"teal\" attecchisce.",
      },
      {
        titolo: "The Advantage",
        autore: "Patrick Lencioni",
        concetto: "\"Organizational health will one day surpass all other disciplines in business as the greatest opportunity for improvement and competitive advantage.\"\n\nUn'organizzazione healthy ha quattro caratteristiche: leadership coesa, chiarezza culturale, over-comunicazione di quella chiarezza, e rinforzo sistemico attraverso processi HR.",
        applicazione: "Il nostro lavoro non finisce con la \"rivelazione culturale\". Aiutiamo le organizzazioni a tradurre quella consapevolezza in artefatti concreti — rituali, linguaggi, processi — che rinforzano quotidianamente la cultura desiderata.",
      },
    ],
  },
  {
    id: "brand-promessa",
    titolo: "La cultura è l'infrastruttura della promessa di brand",
    coverImage: "/books/neumeier.jpg",
    intro: "David Aaker e Marty Neumeier ci hanno insegnato che un brand forte non è un logo o uno slogan — è una promessa mantenuta nel tempo. E quella promessa non la mantiene il marketing. La mantiene la cultura organizzativa.",
    libri: [
      {
        titolo: "The Brand Flip",
        autore: "Marty Neumeier",
        concetto: "\"In the old model, brands were built through control and consistency. In the new model, brands are co-created with customers and employees. The role of the company is to facilitate, not dictate.\"\n\nIl brand non è più ciò che l'azienda dice di sé — è ciò che le persone (clienti e dipendenti) dicono dell'azienda. E i dipendenti parlano della cultura vissuta, non di quella dichiarata.",
        applicazione: "Usiamo le storie che le persone raccontano spontaneamente sulla propria organizzazione come specchio della brand perception interna. Quelle storie sono il brand reale — non le slide del CEO.",
      },
      {
        titolo: "Brand Leadership",
        autore: "David Aaker",
        concetto: "\"Brand building is not about products, it's about creating relationships and meaning. A strong brand is built from the inside out — it starts with organizational culture and employee engagement.\"\n\nI brand più forti sono quelli dove ogni persona dell'organizzazione capisce cosa il brand rappresenta e lo vive quotidianamente. Senza allineamento interno, nessuna campagna esterna regge.",
        applicazione: "Quando un cliente ci chiede employer branding, non partiamo dal messaggio esterno. Partiamo dalla cultura interna — cosa vivete davvero? Se c'è gap tra promessa esterna e realtà interna, i talenti arrivano attratti e se ne vanno delusi. Lavoriamo prima sull'infrastruttura, poi sulla comunicazione.",
      },
      {
        titolo: "Zag",
        autore: "Marty Neumeier",
        concetto: "\"When everybody zigs, zag. A brand isn't what you say it is. It's what they say it is. And they judge it by what you do, not what you claim.\"\n\nLa differenziazione vera non viene da claim creativi ma da coerenza tra promessa e comportamenti. Le organizzazioni distintive non dicono cose diverse — fanno cose diverse, e lo fanno in modo coerente.",
        applicazione: "Quando aiutiamo un'organizzazione a definire (o ridefinire) i propri valori, chiediamo sempre: questi valori vi differenziano davvero? Li vivete al punto da poterli difendere come identità? O sono aspirazioni che tutti dichiarano ma nessuno vive?",
      },
      {
        titolo: "Brand New",
        autore: "Wally Olins",
        concetto: "\"Branding is about creating and sustaining trust. It means delivering on promises. The best and most successful brands are completely coherent — everything they do and everything they are reinforces everything else.\"\n\nLa coerenza è il fondamento della fiducia. E la coerenza non si costruisce con manuali di brand identity — si costruisce con cultura organizzativa allineata.",
        applicazione: "Trattiamo la cultura come il brand interno — l'identità vissuta quotidianamente dalle persone. Se brand esterno e cultura interna non sono coerenti, uno dei due deve cambiare.",
      },
    ],
  },
  {
    id: "narrazione-rivelazione",
    titolo: "Le storie rivelano la cultura meglio dei numeri",
    coverImage: "/books/heath.jpg",
    intro: "Chip e Dan Heath, Seth Godin, Dave Gray ci hanno mostrato che le narrazioni non sono decorazioni — sono il modo in cui gli esseri umani danno senso alla realtà. E nelle storie che le persone raccontano spontaneamente, la cultura si rivela da sola.",
    libri: [
      {
        titolo: "Made to Stick",
        autore: "Chip & Dan Heath",
        concetto: "\"Stories are the original form of instruction. They're memorable because they're concrete, emotional, and unexpected. A story well told becomes part of who we are.\"\n\nLe idee che attecchiscono non sono quelle più vere o più intelligenti — sono quelle raccontate meglio. E in un'organizzazione, le storie che circolano spontaneamente rivelano i valori reali più di qualsiasi documento ufficiale.",
        applicazione: "Invece di chiedere \"quali sono i vostri valori?\", chiediamo \"raccontami l'ultima volta che qualcuno ha fatto qualcosa che ti ha fatto pensare: ecco, questo è proprio da noi\". Le storie che emergono mostrano i valori vissuti, non quelli dichiarati.",
      },
      {
        titolo: "Permission Marketing",
        autore: "Seth Godin",
        concetto: "\"Permission marketing is about building relationships, not interrupting strangers. Trust is built slowly, through consistent delivery on promises over time.\"\n\nLa stessa logica vale per la cultura interna: non puoi imporre valori dall'alto. Devi guadagnare il \"permesso\" delle persone a cambiare, attraverso coerenza, trasparenza, e coinvolgimento reale.",
        applicazione: "I nostri workshop non sono sessioni dove il consulente dice cosa fare. Sono spazi dove le persone si ascoltano tra loro, riconoscono pattern, e decidono collettivamente cosa cambiare. Il cambiamento culturale è sempre un atto di consenso, mai di imposizione.",
      },
      {
        titolo: "Liminal Thinking",
        autore: "Dave Gray",
        concetto: "\"We don't see the world as it is. We see it through the lens of our beliefs and assumptions. To change a system, you must first make those beliefs visible.\"\n\nLa cultura organizzativa è fatta di credenze invisibili date per scontate. Finché non le porti in superficie e le nomini esplicitamente, non puoi cambiarle.",
        applicazione: "Lumen è progettato per rendere visibile l'invisibile — per far emergere le assunzioni profonde che guidano i comportamenti ma non vengono mai discusse. Solo quando sono nominate, possono essere messe in discussione.",
      },
    ],
  },
  {
    id: "innovazione-cambiamento",
    titolo: "Il cambiamento culturale segue le stesse regole dell'innovazione",
    coverImage: "/books/brown.jpg",
    intro: "Tim Brown, Tom Kelley, John Kotter ci hanno mostrato che l'innovazione e il cambiamento organizzativo non sono atti di genio improvviso — sono processi strutturati che richiedono empatia, prototipazione, e persistenza.",
    libri: [
      {
        titolo: "Change by Design",
        autore: "Tim Brown",
        concetto: "\"Design thinking is a human-centered approach to innovation. It starts with empathy for people's needs, moves through ideation and prototyping, and ends with implementation that creates real value.\"\n\nIl cambiamento culturale è design — richiede ascolto profondo (empatia), co-progettazione (ideazione), sperimentazione rapida (prototipazione), e iterazione continua.",
        applicazione: "Non scriviamo piani di trasformazione culturale da 50 pagine. Identifichiamo 2 artefatti concreti da modificare nei prossimi 3 mesi, li prototipiamo, vediamo cosa succede, iteriamo. Piccoli cambiamenti sistemici battono grandi visioni astratte.",
      },
      {
        titolo: "Creative Confidence",
        autore: "Tom & David Kelley",
        concetto: "\"Everyone is creative. But many people have learned to suppress their creativity out of fear of judgment. Organizations that unlock creative confidence create cultures where trying and failing is safe.\"\n\nLa confidence culturale funziona allo stesso modo — le organizzazioni che accettano esplicitamente l'errore come parte del processo sono quelle dove le persone si prendono responsabilità reali.",
        applicazione: "Una delle otto domande Lumen è \"l'errore permesso\" — non chiediamo se avete una policy sull'errore, chiediamo di raccontare un episodio concreto. Se nessuno riesce a fare un esempio positivo, sappiamo che la cultura del rischio non esiste, indipendentemente da cosa dicono le slide.",
      },
      {
        titolo: "The Art of Innovation",
        autore: "Tom Kelley",
        concetto: "\"Innovation isn't about lone geniuses. It's about creating environments where diverse people can collaborate, experiment, and build on each other's ideas.\"\n\nLa stessa logica vale per il cambiamento culturale — non aspettare il CEO illuminato. Crea le condizioni dove le persone possono sperimentare nuovi modi di lavorare insieme.",
        applicazione: "I nostri workshop usano tecniche di co-progettazione dove il management lavora fianco a fianco con il personale, in sottogruppi misti per livello gerarchico. Le idee migliori raramente vengono dall'alto — vengono dal dialogo tra chi vive la cultura quotidianamente.",
      },
      {
        titolo: "Leading Change",
        autore: "John Kotter",
        concetto: "\"Change fails not because people resist it, but because leaders don't create the conditions for it to succeed. You need urgency, coalition, vision, communication, empowerment, short-term wins, and consolidation.\"\n\nIl cambiamento culturale richiede architettura — non puoi saltare i passaggi. Prima consapevolezza (urgency), poi coinvolgimento (coalition), poi azione concreta (quick wins), poi sistematizzazione.",
        applicazione: "Lumen segue esattamente questa sequenza: workshop di consapevolezza → identificazione coalition (chi guida il cambiamento) → progetto a 3 mesi (quick wins) → sistematizzazione attraverso artefatti modificati (rituali, processi, linguaggi).",
      },
    ],
  },
  {
    id: "pensiero-decisione",
    titolo: "Come le persone pensano davvero",
    coverImage: "/books/kahneman.jpg",
    intro: "Daniel Kahneman e Nassim Taleb ci hanno mostrato che gli esseri umani non sono razionali — sono narrativi, emotivi, pieni di bias. Capire come le persone pensano davvero è fondamentale per capire come funziona la cultura.",
    libri: [
      {
        titolo: "Thinking, Fast and Slow",
        autore: "Daniel Kahneman",
        concetto: "\"We have two systems of thinking: System 1 is fast, intuitive, emotional. System 2 is slow, deliberate, logical. Most of what we do is driven by System 1, even when we think we're being rational.\"\n\nLa cultura organizzativa vive nel Sistema 1 — nelle reazioni automatiche, nelle assunzioni non dette, nei comportamenti che non richiedono pensiero. Per cambiarla, devi lavorare su quel livello.",
        applicazione: "Le domande narrative di Lumen sono progettate per bypassare il Sistema 2 (la risposta \"corretta\" razionalizzata) e far emergere il Sistema 1 (la verità emotiva). Quando racconti una storia, la difesa razionale non ha il tempo di attivarsi.",
      },
      {
        titolo: "Antifragile",
        autore: "Nassim Nicholas Taleb",
        concetto: "\"Some things benefit from shocks; they thrive and grow when exposed to volatility, randomness, disorder, and stressors. Antifragility is beyond resilience or robustness — it's about getting better through adversity.\"\n\nLe culture antifragili non evitano l'errore — lo usano come meccanismo di apprendimento. Ogni errore reso esplicito e discusso rinforza la cultura invece di indebolirla.",
        applicazione: "Quando aiutiamo un'organizzazione a lavorare sull'errore permesso, non puntiamo a \"tollerare\" l'errore — puntiamo a costruire rituali dove l'errore viene condiviso apertamente come fonte di apprendimento collettivo. Culture antifragili celebrano gli errori produttivi.",
      },
    ],
  },
  {
    id: "business-strategia",
    titolo: "L'eccellenza organizzativa è culturale, non tecnica",
    coverImage: "/books/collins.jpg",
    intro: "",
    libri: [
      {
        titolo: "Good to Great",
        autore: "Jim Collins",
        concetto: "\"Greatness is not a function of circumstance. It's largely a matter of conscious choice and discipline. Great companies have Level 5 leadership and a culture of discipline that doesn't need hierarchy to maintain it.\"\n\nLe aziende eccellenti non hanno i leader più carismatici o le strategie più brillanti — hanno culture dove le persone fanno le cose giuste senza bisogno di controllo esterno.",
        applicazione: "Quando lavoriamo su delega e autonomia, non puntiamo a \"controllare meglio\" — puntiamo a costruire una cultura dove le persone sanno cosa conta e agiscono di conseguenza. La disciplina culturale sostituisce il controllo gerarchico.",
      },
    ],
  },
];
