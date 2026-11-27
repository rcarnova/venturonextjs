/**
 * Dati di Venturo Conversation.
 *
 * NEXT_EPISODE e la puntata in arrivo: cambia ogni volta, insieme al link di
 * registrazione e alla grafica. PAST_EPISODES e l'archivio: una voce in piu
 * per ogni puntata andata online.
 *
 * Per pubblicare una nuova puntata:
 *   1. sposta NEXT_EPISODE in testa a PAST_EPISODES, aggiungendo slug e videoId
 *      (o audio, se la puntata si ascolta solo dal sito)
 *   2. aggiorna NEXT_EPISODE e REGISTRATION_URL / CALENDAR_URL
 *   3. metti la nuova grafica in public/images/
 *   4. node scripts/build-ics.mjs
 */

/**
 * Link per partecipare alla prossima puntata. Dal 6 novembre 2026 è una
 * stanza Google Meet (Zoom dava problemi): non c'è iscrizione, si entra e basta.
 */
export const REGISTRATION_URL = "https://meet.google.com/dwa-pqwt-iyq";

export const CALENDAR_URL = "/venturo-conversation-27-novembre.ics";

export const NEXT_EPISODE = {
  title: "Motivazione ed engagement delle persone, cosa ne pensa un Welfare Manager?",

  dateLabel: "27 novembre, ore 12",
  duration: "45-50 minuti",
  place: "Online",

  /**
   * ISO con fuso esplicito. Attenzione: l'ora legale finisce il 25 ottobre
   * 2026, quindi novembre e CET (+01:00) mentre ottobre era CEST (+02:00).
   * Sbagliare l'offset sposta l'evento di un'ora nei calendari.
   */
  startsAt: "2026-11-27T12:00:00+01:00",
  endsAt: "2026-11-27T12:50:00+01:00",

  guest: {
    name: "Edoardo Zaccardi",
    role: "Welfare & Social Dynamics, Edison",
  },

  hosts: [
    { name: "Rosario Carnovale", org: "Venturo" },
    { name: "Massimo Benedetti", org: "Venturo" },
  ],

  /**
   * La grafica e decorativa: titolo, data, ospite e host esistono come testo
   * vero accanto, quindi l'immagine ha alt vuoto per non farli leggere due
   * volte agli screen reader. Il nome accessibile sta sul link che la avvolge.
   */
  image: {
    src: "/images/venturo-conversation-27-novembre.webp",
    width: 1280,
    height: 720,
  },
} as const;

/** Puntate gia andate online, dalla piu recente. */
export const PAST_EPISODES = [
  {
    slug: "welfare-manager-edison",
    /** Video su YouTube dal 27 novembre. Per ora niente audio sul sito: in pagina c'e il video. */
    videoId: "ldykuYhb9VQ",
    /**
     * I minuti dei capitoli sono ricavati dalla trascrizione (registrazione
     * dalle 00:25:23 dell'orologio di Meet), assumendo che il video parta da
     * li. Durata stimata dalla trascrizione: da confermare su YouTube.
     */
    uploadDate: "2026-11-27T16:00:00+01:00",
    duration: "PT58M",
    title: "Motivazione ed engagement delle persone, cosa ne pensa un Welfare Manager?",
    /** Titolo per Google, entro 65 caratteri */
    seoTitle: "Motivazione ed engagement, cosa ne pensa un Welfare Manager?",
    dateLabel: "27 novembre 2026",
    guest: {
      name: "Edoardo Zaccardi",
      role: "Welfare & Social Dynamics, Edison",
    },

    seoDescription:
      "Edoardo Zaccardi, Welfare & Social Dynamics di Edison, su welfare, leadership, fiducia e generazioni. La sintesi a capitoli della terza puntata.",

    summary: {
      intro: [
        "Edoardo Zaccardi si occupa di welfare in Edison, con un ruolo che si chiama Welfare & Social Dynamics. Lavora sempre più spesso con finance, comunicazione e D&I: il welfare oggi non sta più in una funzione sola.",
        "Dopo una CFO e un change agent, volevamo lo sguardo di chi progetta i servizi per le persone. Gli abbiamo chiesto, senza giri di parole, che cosa pensa di motivazione ed engagement.",
      ],
      chapters: [
        {
          at: 30,
          title: "Difficile da misurare, giusto da fare",
          text: [
            "L'engagement si misura a fatica. Le rilevazioni arrivano in pochi momenti dell'anno e risentono della fase che l'azienda sta attraversando. Per chi fa welfare la domanda è sempre la stessa: con quali KPI giustifico questa spesa davanti al CFO?",
            "Il problema è che sull'engagement pesano troppe variabili: retribuzione, mercato, geopolitica, la vita privata delle persone. In Edison la risposta è stata un'altra: certe cose si fanno a prescindere, perché sono coerenti con i valori. I risultati si proverà a misurarli dopo.",
          ],
        },
        {
          at: 170,
          title: "Coesione interna, oggi più che mai",
          text: [
            "Il contesto esterno è difficile: potere d'acquisto, preoccupazioni, aspettative. Per Edoardo, in questa fase avranno successo le aziende capaci di tenere una coesione interna. I migliori processi e le migliori alleanze con gli stakeholder non bastano.",
            "Allineati, precisa, non vuol dire mobilitati. Vuol dire poter dare alle persone messaggi rassicuranti che nella vita di tutti i giorni faticano a trovare. E dal Covid in poi i dipendenti portano in azienda temi che prima restavano fuori.",
          ],
        },
        {
          at: 315,
          title: "Quando bastava lo stipendio",
          text: [
            "In un nostro workshop, alla domanda su che cosa ci motiva, nessuno aveva citato lo stipendio o i benefit: risultati, sfide vinte, un feedback positivo. Edoardo non sottovaluta la retribuzione. In alcuni settori e contratti è ancora la base da raggiungere, e da lì si costruisce tutto il resto.",
            "Per generazioni lo scambio è stato semplice: tempo e competenze in cambio di uno stipendio che cresceva, con l'ascensore sociale sullo sfondo. Quello scambio non basta più. Una ricerca Censis, a cui Edison ha partecipato, dice che oltre l'80% degli occupati si aspetta che l'azienda contribuisca al proprio benessere. Non come desiderio: come richiesta.",
          ],
        },
        {
          at: 540,
          title: "Essere visti",
          text: [
            "Oltre lo stipendio ci sono i servizi di welfare, per la persona e per la famiglia. Ma anche quelli non bastano. Le persone vogliono relazioni, vogliono sentirsi accolte nella loro complessità.",
            "Edoardo mette in fila tre cose. Poter esprimere le proprie competenze e vederle riconosciute, anche solo con un feedback. Lavorare in un'azienda in cui si crede, di cui si condividono valori e purpose. E una leadership che rende vera la promessa.",
          ],
          quote: "Oggi le persone vogliono essere viste dalle aziende.",
        },
        {
          at: 655,
          title: "La promessa passa dal capo",
          text: [
            "Puoi comunicare benissimo sui social, avere un report di sostenibilità impeccabile e la carta dei valori più bella. Se poi quei valori non si vivono ogni giorno, già dall'onboarding, la promessa si rompe. Per questo la leadership, dal vertice ai middle manager, è decisiva: un capo che chiede come stai e ascolta davvero la risposta.",
            "Rosario porta la voce dei manager che segue come coach: sulla loro scrivania, oltre all'operatività, sono finiti benessere, ascolto, inclusione, colloqui. È facile farne il capro espiatorio. Edoardo è d'accordo: il punto non è puntare il dito, ma riconoscere che spesso manca l'investitura. Se un manager è valutato solo sui numeri e nessuno lo forma, la domanda diventa: chi me lo fa fare?",
          ],
        },
        {
          at: 975,
          title: "Dare strumenti a chi deve esserci",
          text: [
            "Ogni anno Edison convoca tutti i manager che hanno nel team persone in maternità o paternità, o in attesa di un figlio. Raccontano loro l'approccio dell'azienda, quello che mette a disposizione dei neogenitori e i pregiudizi da evitare. Un esempio: non proporre una trasferta a chi è appena rientrato, per proteggerlo, può essere letto come esclusione. Meglio lasciar decidere alla persona.",
            "Poi i manager hanno cominciato a trovarsi davanti a situazioni molto difficili: un lutto, una fase durissima della vita di un collega. Così è nato un servizio di supporto alla leadership. Il manager che alza la mano viene messo in contatto con specialisti, coach o psicologi, per gestire sé stesso, la persona coinvolta e il team. Se chiedi prossimità, devi dare anche gli strumenti e accogliere chi dice di non farcela.",
          ],
        },
        {
          at: 1365,
          title: "Il contesto conta più dell'iniziativa",
          text: [
            "Rosario lo vede spesso: iniziative belle, a volte geniali, che non attecchiscono. Non perché siano sbagliate, ma perché nessuno le accompagna, le comunica, ci dedica tempo. La sfida non è inventare iniziative, è creare il contesto in cui possono funzionare.",
            "Edoardo va oltre: conta, prima ancora di chi fa la formazione e di come la fa, chi c'è e a chi la fai. Il miglior corso del mercato produce cinismo se è lontano da quello che l'azienda fa ogni giorno, o se in aula manca il manager.",
            "Con più di 150 sedi in Italia, Edison raccontava il welfare anche attraverso consulenti esterni. Oggi ci vanno le persone del welfare, insieme ai manager locali. Meno incontri, risultati migliori. Alle persone di Cagliari o Palermo interessa soprattutto che qualcuno da Milano si sia preso una giornata per incontrarle e associare un volto a una funzione. Da lì è più facile fidarsi, scrivere, perfino dare un feedback negativo.",
          ],
        },
        {
          at: 2055,
          title: "Meno giovani, più fiducia da guadagnare",
          text: [
            "Edison oggi parla di persone, non solo di talenti, perché la demografia dice che ce ne saranno sempre meno. Per i neolaureati c'è Young Community: un percorso triennale con formazione, carriera, curve retributive dedicate e un supporto all'abitare, con alloggi sostenuti dall'azienda perché l'affitto non superi il 30-35% della retribuzione.",
            "Anche un marchio come Edison non basta più ad attrarre da solo. E il paradigma si è ribaltato: oggi è l'azienda che deve guadagnarsi la fiducia delle persone, non il contrario. A un convegno interno sul dialogo tra generazioni, un collega della vecchia guardia gli ha risposto che prima vengono i doveri e poi i diritti. Per Edoardo è la prova di quanto siano diverse le culture che oggi convivono in azienda.",
          ],
        },
        {
          at: 2400,
          title: "Quello che un senior trasmette davvero",
          text: [
            "Si dice che i senior servano a trasmettere le competenze. Per Edoardo le competenze valgono forse il 30-40% di quello che passano a un junior. Il resto è cultura: come si sta in quell'azienda, in che cosa crede, come si comporta con le persone. E l'esperienza di chi ha attraversato tante trasformazioni e può raccontarle.",
            "Massimo aggiunge il tempo: quello che nei nostri workshop le persone ci restituiscono è aver avuto il tempo di scambiarsi le cose che non sono scritte in nessun manuale. Rosario lo chiama l'antidoto al pregiudizio. Quando le generazioni si parlano scoprono di essere vicine nei problemi e nei valori. Ma serve strutturarlo, quasi come un rito: il calcio balilla nell'area caffè non basta.",
          ],
        },
        {
          at: 2770,
          title: "Guardare le persone, non i cluster",
          text: [
            "Dal pubblico è arrivato uno spunto dal mondo della customer operation: trattare i dipendenti con la stessa attenzione che si dedica ai clienti. Conoscere chi si ha davanti, senza pregiudizi, e scoprire talenti che c'erano già ma non avevano spazio. Un'analisi che può partire solo dai capi diretti.",
            "Rosario lo ritrova nella formazione dei manager commerciali: davanti al cliente sanno vedere e ascoltare, basta portare quel metodo nel team. Edoardo invita a diffidare dei cluster. Dietro un under 30 senza figli ci può essere un caregiver. L'azienda deve dire che di certe cose si può parlare, e poi servono persone che quel principio lo agiscano, pronte ad accogliere.",
          ],
        },
        {
          at: 3250,
          title: "Se togliessi tutti i servizi",
          text: [
            "Massimo gli ha chiesto: se non avessi più servizi da offrire, su che cosa lavoreresti? La risposta è stata immediata: formazione dei manager, sui comportamenti. Gentilezza, accoglienza, attenzione.",
            "Ci sarà sempre un'azienda che paga di più per lo stesso lavoro, e un aumento dopo sei mesi non basta più. Quello che trattiene è stare bene in un contesto: relazioni, sensibilità, cultura. E l'ascolto, che da solo fa metà del lavoro. Nei workshop le persone ce lo restituiscono così: abbiamo avuto il tempo di ascoltarci.",
            "Con Edoardo ci rivedremo in una seconda puntata, per capire che cosa vuol dire occuparsi di Social Dynamics.",
          ],
        },
      ],
      takeaways: [
        "Lo stipendio è la base, non la risposta: oltre l'80% degli occupati si aspetta che l'azienda contribuisca al proprio benessere.",
        "Un'iniziativa attecchisce se c'è il contesto: chi la propone ci mette la faccia, i manager sono presenti, e la si accompagna dopo.",
        "Se ai manager si chiede prossimità, servono investitura, formazione e un posto dove alzare la mano.",
      ],
      related: { href: "/magazine/il-vero-significato-di-evp", title: "Il vero significato di EVP." },
    },

    image: {
      src: "/images/venturo-conversation-03-edoardo-zaccardi.webp",
      width: 1280,
      height: 720,
    },
    ogImage: "/images/venturo-conversation-03-edoardo-zaccardi-og.jpg",
  },
  {
    slug: "change-agent-reale-group",
    /** Video su YouTube (dal 7 novembre). La pagina resta audio, con il link al video. */
    videoId: "iiXo-tHpm9M",
    /** Data di pubblicazione della registrazione sul sito, con fuso */
    uploadDate: "2026-11-06T18:00:00+01:00",
    duration: "PT1H2M19S",
    title: "Motivazione ed engagement delle persone, cosa ne pensa un Change Agent?",
    /** Titolo per Google, entro 65 caratteri */
    seoTitle: "Motivazione ed engagement, cosa ne pensa un Change Agent?",
    dateLabel: "6 novembre 2026",
    guest: {
      name: "Matteo Lo Bue",
      role: "Agile Topic Leader, Reale Group",
    },
    audio: { src: "/audio/venturo-conversation-02-matteo-lo-bue.mp3", duration: 3739 },

    seoDescription:
      "Matteo Lo Bue, Agile Topic Leader di Reale Group, su change management, autonomia dei team e il nodo della misurazione. Sintesi e audio della puntata.",

    /**
     * Sintesi dalle note della registrazione. I minuti dei capitoli sono
     * ricavati dalle note, con un margine di qualche secondo: partono
     * leggermente prima del tema, mai dopo. Niente citazioni testuali,
     * perche le note non sono una trascrizione parola per parola.
     */
    summary: {
      intro: [
        "Matteo Lo Bue si occupa di change management in Reale Group da circa cinque anni, dentro un percorso di quindici in azienda. Reale Group, conosciuta soprattutto per Reale Mutua, lavora in Italia, Cile, Spagna e Grecia, tra assicurazioni, banca e servizi di assistenza. È una mutua: al posto degli azionisti ci sono i soci.",
        "Dopo lo sguardo di una CFO nella prima puntata, volevamo quello di chi il cambiamento lo accompagna ogni giorno. Gli abbiamo chiesto che cosa voglia dire engagement in un'organizzazione che sta adottando il modello agile.",
      ],
      chapters: [
        {
          at: 180,
          title: "Un ruolo che non sta in un titolo",
          text: [
            "Matteo non ama definire il suo lavoro con un'etichetta formale. Preferisce raccontarlo per quello che fa: sostenere, abilitare, facilitare i processi di cambiamento.",
          ],
        },
        {
          at: 625,
          title: "Un'Academy che non fosse un corsificio",
          text: [
            "L'Academy di Reale Group nasce nel 2010. Fin dall'inizio non doveva limitarsi a rispondere alle richieste di formazione: doveva essere un punto di innovazione, uno strumento per far durare la cultura dell'azienda portandoci dentro ossigeno nuovo.",
          ],
        },
        {
          at: 940,
          title: "Dal pronto intervento al progetto",
          text: [
            "All'inizio il change management arrivava alla fine, quando un progetto creava attriti e qualcuno doveva sistemarli. Poi la scelta: ogni iniziativa rilevante dedica una quota di tempo e budget ad ascolto, supporto e apprendimento.",
            "Per Matteo coinvolgere le persone significa costruire cornici e modi di lavorare in cui responsabilità e autonomia possano emergere. Estrarre un potenziale nascosto, dall'alto, in una relazione asimmetrica, non funziona.",
          ],
        },
        {
          at: 1180,
          title: "Una mutua ha già qualcosa di agile",
          text: [
            "Una mutua ragiona su sostenibilità e durata. Non nasce per crescere indefinitamente, essere spremuta e venduta per miliardi. Ne abbiamo parlato con Matteo: questi principi sono molto coerenti con quelli del modello agile.",
            "La cultura di tutti i giorni però fa i conti con decenni di organizzazione tradizionale. Il modo di pensare agile sta entrando piano piano nei momenti chiave, come la pianificazione strategica e la definizione del budget. Lì i comportamenti da silos si riducono e le persone tornano a parlarsi e ad accordarsi direttamente.",
          ],
        },
        {
          at: 1715,
          title: "Misurare i segnali, non solo i risultati",
          text: [
            "Su stimolo del top management, l'azienda ha lavorato due anni a una dashboard costruita sui marcatori del cambiamento. I risultati non si possono prevedere, i segnali che il cambiamento sta avvenendo sì.",
            "Anche il performance management si è spostato: guarda ai team, non più solo ai risultati economici individuali.",
          ],
        },
        {
          at: 1990,
          title: "Persone in carne e ossa",
          text: [
            "Con Massimo, Matteo racconta il posizionamento di Reale Group: una rete di agenti in carne e ossa e la relazione personale con i soci. Anche nei momenti più delicati del mestiere assicurativo, come la gestione dei sinistri.",
          ],
        },
        {
          at: 2350,
          title: "Raccontare la fatica, non solo il risultato",
          text: [
            "Il ruolo di chi facilita il cambiamento evolve verso il coaching, con percorsi di certificazione in corso. Gli Scrum Master lavorano come facilitatori, e design thinking e service design sono ormai di casa nei grandi progetti.",
            "Academy e comunicazione interna sono entrate nell'area di change management. L'obiettivo è umanizzare: un linguaggio più inclusivo, le fatiche e i team veri dietro i progetti, e lo spazio per la vulnerabilità di chi ha un ruolo manageriale.",
          ],
        },
        {
          at: 2635,
          title: "Autonomia vuol dire accettare l'imprevisto",
          text: [
            "Dare autonomia a un team significa accettare risultati che non ti aspettavi. Matteo distingue il fallimento che nasce da errori di gestione da quello che arriva da fuori, da fattori dirompenti come l'arrivo di ChatGPT.",
            "Dal pubblico è arrivato un richiamo alla natura neurobiologica della fiducia. Dove la relazione è solida, c'è spazio per creatività e impegno.",
          ],
        },
        {
          at: 2760,
          title: "Il manager che non gestisce i numeri",
          text: [
            "Nel modello agile di Reale Group gli obiettivi commerciali e numerici sono dei team autonomi. Gli agile people manager si occupano d'altro: benessere, crescita, staffing e competenze delle persone.",
            "Per capire se funziona, l'azienda guarda ai dati dell'indagine Great Place to Work, dove le aree agili mostrano risultati in miglioramento rispetto a quelle tradizionali, e propone survey periodiche su soddisfazione degli stakeholder e salute dei team. Nel mondo agile oggi lavorano circa 800 persone su 4.000.",
          ],
        },
        {
          at: 3320,
          title: "La domanda ancora aperta",
          text: [
            "Resta il nodo di performance e retribuzione. I livelli di inquadramento frenano la crescita orizzontale in organizzazioni dove fare carriera coincideva quasi sempre con il diventare manager. Come si riconosce il contributo di un professionista senza dargli per forza un'area da guidare?",
            "Matteo lo dice apertamente: una risposta soddisfacente sulla misurazione non c'è ancora. Rosario la chiama il conflitto eterno tra il bisogno di controllo, che serve a migliorare, e i principi di autonomia e fiducia, che con la misurazione sistematica faticano a stare insieme.",
            "Con Matteo ci rivedremo in una seconda puntata, per raccontare come è nato il progetto.",
          ],
        },
      ],
      takeaways: [
        "L'engagement non si estrae dalle persone. Si costruiscono le cornici in cui responsabilità e autonomia possono emergere.",
        "Il cambiamento costa meno quando entra nel progetto dal primo giorno: in Reale Group può valere anche il 10% del tempo e del budget di un'iniziativa.",
        "Autonomia dei team e misurazione tradizionale non stanno insieme facilmente. Anche chi è più avanti lo considera un problema aperto.",
      ],
      related: { href: "/magazine/l-engagement-non-si-estrae", title: "L'engagement non si estrae. Si costruisce la cornice." },
    },

    image: {
      src: "/images/venturo-conversation-02-matteo-lo-bue.webp",
      width: 1280,
      height: 720,
    },
    ogImage: "/images/venturo-conversation-02-matteo-lo-bue-og.jpg",
  },
  {
    /** Usato per l'indirizzo della pagina dedicata: /venturo-conversation/<slug> */
    slug: "motivazione-engagement-cfo",
    videoId: "XrSQZ1B_jG4",
    /** Letti da YouTube: servono a VideoObject, che senza uploadDate non e valido. */
    uploadDate: "2026-10-21T06:14:18-07:00",
    duration: "PT58M53S",
    /** Allineato al titolo attuale su YouTube */
    title: "Motivazione, engagement e cultura, cosa ne pensa una CFO?",
    dateLabel: "20 ottobre 2026",
    guest: {
      name: "Elena Alemanno",
      role: "CFO, Inter IKEA Systems",
    },
    /**
     * Audio della puntata servito dal sito (mono 48 kbps). La webcam di Elena
     * non funzionava: il video mostra solo Zoom, quindi in pagina si ascolta.
     * Allineato al video di YouTube: i minuti dei capitoli valgono per entrambi.
     */
    audio: { src: "/audio/venturo-conversation-01-elena-alemanno.mp3", duration: 3565 },

    /** Descrizione per Google, entro 160 caratteri */
    seoDescription:
      "Elena Alemanno, CFO di Inter IKEA Systems, su valori, comportamenti, diritto di sbagliare e leadership diffusa. Sintesi e audio della prima puntata.",

    /**
     * Sintesi scritta della puntata, dalla trascrizione. "at" e il secondo del
     * video da cui parte il capitolo: diventa un link a YouTube e un momento
     * chiave per Google (Clip nei dati strutturati).
     */
    summary: {
      intro: [
        "Elena Alemanno lavora in IKEA da 36 anni. Ha cominciato nel reparto lampade, scaricando camion con una laurea in economia in tasca. Oggi è CFO di Inter IKEA Systems, la società che detiene il concept IKEA, e guida il business steering del gruppo.",
        "Le abbiamo chiesto cosa vede chi guarda i numeri quando in azienda si parla di motivazione ed engagement. Di solito ne parliamo con le risorse umane. Questa volta volevamo il punto di vista del business.",
      ],
      chapters: [
        {
          at: 540,
          title: "La motivazione è una questione di affinità",
          text: [
            "Per Elena la motivazione nasce quando i valori di una persona e quelli che l'azienda dichiara si somigliano. Allora le decisioni diventano più semplici, anche davanti a situazioni mai viste: la risposta si trova con il gruppo, a partire da valori comuni.",
            "La responsabilità però non è di una parte sola. L'azienda deve dichiarare i valori e poi agirli. La persona deve sapere che cosa è importante per sé, che cosa è disposta ad accettare e che cosa no.",
          ],
          quote: "La responsabilità va da entrambe le parti: l'azienda deve dichiarare i valori, ma deve anche agirli.",
        },
        {
          at: 900,
          title: "La cultura era già nel catalogo",
          text: [
            "Fine anni Ottanta, IKEA arriva in Italia. Elena studia in Bocconi e trova il catalogo nella buca delle lettere: si innamora della semplicità delle linee e dei prezzi. Quando arriva il momento di scegliere tra Fiat, IBM, una banca e quell'azienda sconosciuta, sceglie la quarta.",
            "Quella semplicità l'ha ritrovata dentro, nei valori. IKEA non ha fatto employer branding: ha mandato sé stessa. Quando l'identità è chiara, comunica da sola.",
          ],
          quote: "Quello che l'azienda vendeva l'ho ritrovato anche all'interno, nei valori.",
        },
        {
          at: 1320,
          title: "Da dove vengono i valori",
          text: [
            "La cultura di IKEA viene dallo Småland, dove è nato il fondatore Ingvar Kamprad: campi pieni di sassi da togliere a mano, possibile solo aiutandosi tra vicini. I muretti a secco sono il simbolo della togetherness. Pochi mezzi, quindi attenzione ai costi: nessuno vola in prima classe, CEO e CFO compresi.",
            "Dalla Svezia del dopoguerra arriva anche l'idea che il bello sia per tutti, e un modo di decidere basato sul consenso. È più lento, ammette Elena, ma crea fiducia: nessuno si sente giudicato per quello che dice.",
          ],
          quote: "Quando si passa all'implementazione c'è l'engagement, perché tutti hanno partecipato alla decisione.",
        },
        {
          at: 1800,
          title: "I valori non si vedono, i comportamenti sì",
          text: [
            "La cultura di un'organizzazione è la somma dei valori delle persone che la compongono. Ma i valori sono invisibili: si vedono solo i comportamenti. Quando un comportamento non è coerente con un valore dichiarato, si crea una distonia, e prima o poi qualcuno la nomina.",
            "Per questo la leadership non coincide con il ruolo. Elena non si presenta come la CFO, ma come una persona accessibile, che spiega e cerca di portare chiarezza.",
          ],
          quote: "La cultura è il modo in cui facciamo le cose quando nessuno ci guarda.",
        },
        {
          at: 2400,
          title: "Business & People Together",
          text: [
            "Alla domanda su che cosa la tenga legata all'azienda dopo 36 anni, Elena risponde con la visione: creare una vita migliore per la maggioranza delle persone. E con tre domande che guidano ogni scelta: è buono per i clienti? È buono per le persone che ci lavorano? È buono per il pianeta?",
            "Il tema non è HR o non HR. Business e persone vanno tenuti insieme, e le persone sono anche i fornitori, i clienti e quelli che clienti non lo sono ancora.",
          ],
          quote: "L'azienda siamo noi. Non mi aspetto che siano altri a darmi la motivazione.",
        },
        {
          at: 2550,
          title: "Il diritto di sbagliare",
          text: [
            "Tra i motivi per cui le piace lavorare lì, Elena mette la possibilità di sbagliare. Il mondo va troppo veloce per avere tutte le risposte: bisogna sbagliare in fretta, capire dove, riparare. Funziona solo dove ci si sente al sicuro.",
          ],
          quote: "Lo puoi fare solo se ti prendi la responsabilità e se non sei punito quando sbagli.",
        },
        {
          at: 2670,
          title: "Una leadership di tutti",
          text: [
            "Elena non crede più nei modelli gerarchici: un leader con persone che si limitano a seguirlo è uno spreco. Meglio una responsabilità distribuita, più inclusiva, con più attenzione al benessere delle persone. Senza perdere la performance: a un certo punto si decide, e da lì ognuno risponde della sua parte.",
          ],
          quote: "Avere solo persone che ti seguono è uno spreco.",
        },
        {
          at: 2970,
          title: "Come si tiene viva una cultura",
          text: [
            "Il suo gruppo, circa 80 persone tra Olanda e Svezia, si incontra tre volte l'anno. In ogni incontro c'è una sessione su leadership e valori, e da due anni un premio per l'errore più grande: chi lo racconta spiega che cosa ha imparato, e la discussione continua in piccoli gruppi. Il premio è una borraccia del Museo IKEA.",
            "Quando si notano comportamenti lontani dai valori se ne parla in gruppi di lavoro, senza fare nomi. Il feedback va anche dal gruppo verso il manager. Per i casi seri c'è una Trust Line con una commissione indipendente.",
            "Massimo racconta delle aziende che vogliono scrivere i valori una volta sola, per appenderli e non toccarli per vent'anni. Per Elena la cultura è una palestra: va allenata di continuo.",
          ],
          quote: "Se vivi secondo valori diversi da quelli che dichiari, stai creando un'altra cultura.",
        },
      ],
      takeaways: [
        "L'engagement non si chiede alle persone: si vede quando i comportamenti di chi guida coincidono con i valori dichiarati.",
        "Quando l'identità è chiara, l'employer branding diventa quasi superfluo. IKEA ha mandato sé stessa, ed Elena l'ha riconosciuta.",
        "Un premio all'errore più grande tiene viva la cultura più di qualsiasi manifesto appeso in sala riunioni.",
      ],
      related: { href: "/magazine/i-valori-non-si-vedono", title: "I valori non si vedono. I comportamenti sì." },
    },

    /** La copertina della puntata fa da anteprima al video: e gia sul nostro
     *  dominio, quindi nemmeno l'anteprima contatta server esterni. */
    image: {
      src: "/images/venturo-conversation-01-elena-alemanno.webp",
      width: 1280,
      height: 720,
    },
    /**
     * Copia JPEG per l'anteprima social. LinkedIn non gestisce il WebP in modo
     * affidabile nelle schede og:image, e LinkedIn e il canale dove questi link
     * finiscono. Il WebP resta per la pagina, che pesa un terzo.
     */
    ogImage: "/images/venturo-conversation-01-elena-alemanno-og.jpg",

    /**
     * Clip brevi tratte dalla puntata, pubblicate come Short su YouTube ma
     * girate in quadrato: da qui l'aspect 1 nel player. Le anteprime sono
     * scaricate da YouTube e servite dal nostro dominio, come per il video
     * intero, cosi la pagina non contatta Google finche non si clicca.
     */
    highlights: [
      {
        videoId: "wN0bEE-mlck",
        /** Data non leggibile da YouTube (pagina di consenso): allineata agli altri
         *  tre clip, pubblicati lo stesso giorno. Da confermare in YouTube Studio. */
        // Ora indicativa (stessa sessione di caricamento degli altri clip): Google
        // vuole data e ora con fuso orario. Da confermare in YouTube Studio.
        uploadDate: "2026-10-29T08:50:00-07:00",
        title: "La cultura era già nel catalogo",
        image: { src: "/images/venturo-conversation-clip-01.webp", width: 720, height: 720 },
      },
      {
        videoId: "Q8vjrjqGZkY",
        uploadDate: "2026-10-29T08:55:44-07:00",
        duration: "PT1M2S",
        title: "Business & People Together",
        image: { src: "/images/venturo-conversation-clip-02.webp", width: 720, height: 720 },
      },
      {
        videoId: "sf6iapyW5ww",
        uploadDate: "2026-10-29T08:54:34-07:00",
        duration: "PT1M13S",
        /** Su YouTube il titolo ha un refuso ("comportamnti"): qui corretto. */
        title: "I valori non si vedono, i comportamenti sì",
        image: { src: "/images/venturo-conversation-clip-03.webp", width: 720, height: 720 },
      },
      {
        videoId: "x-5EpW4a0yQ",
        uploadDate: "2026-10-29T09:57:11-07:00",
        duration: "PT1M6S",
        title: "Il premio all'errore più grande",
        image: { src: "/images/venturo-conversation-clip-04.webp", width: 720, height: 720 },
      },
    ],
  },
] as const;

/**
 * I momenti migliori, scelti a mano, da tutte le puntate.
 *
 * E la selezione che compare in home (ConversationSection). Ogni voce e il videoId di
 * un clip che esiste tra gli highlights di una delle PAST_EPISODES: puntata
 * e ospite si ricavano da li. L'ordine qui e l'ordine in home.
 *
 * Quando esce una nuova puntata: aggiungi i suoi clip migliori e togli quelli
 * che non reggono piu il confronto. Tienine quattro, al massimo otto, e cerca
 * di non avere tutti i momenti dallo stesso ospite.
 */
export const BEST_MOMENTS: ReadonlyArray<string> = [
  "x-5EpW4a0yQ", // Il premio all'errore più grande, Elena Alemanno
  "sf6iapyW5ww", // I valori non si vedono, i comportamenti sì, Elena Alemanno
  "wN0bEE-mlck", // La cultura era già nel catalogo, Elena Alemanno
  "Q8vjrjqGZkY", // Business & People Together, Elena Alemanno
];

type Episode = (typeof PAST_EPISODES)[number];
/** Le puntate senza clip non hanno il campo highlights: si prende il tipo da quelle che ce l'hanno */
type Clip = NonNullable<Extract<Episode, { highlights: unknown }>["highlights"]>[number];

export type Moment = {
  clip: Clip;
  episode: Episode;
};

/** Trova un clip per videoId tra tutte le puntate, con la sua puntata. */
export function findMoment(videoId: string): Moment | undefined {
  for (const episode of PAST_EPISODES) {
    const clips: ReadonlyArray<Clip> = "highlights" in episode ? episode.highlights : [];
    const clip = clips.find((c) => c.videoId === videoId);
    if (clip) return { clip, episode };
  }
  return undefined;
}

/** I momenti migliori risolti: scarta in silenzio le voci che non esistono piu. */
export function getBestMoments(): Moment[] {
  return BEST_MOMENTS.map((id) => findMoment(id)).filter(
    (m): m is Moment => m !== undefined,
  );
}
