/**
 * Le sfide che riconosciamo piu spesso, ognuna sotto una delle tre porte del
 * sito. Le usano la pagina /le-sfide e le pagine porta.
 */

export type DoorSlug = "leadership" | "comunicazione-interna" | "employer-branding";

export interface Challenge {
  /** La porta del sito sotto cui sta la sfida */
  door: DoorSlug;
  title: string;
  reframing: string;
  action: string;
  approccio: string;
}

export const challenges: Challenge[] = [
  {
    door: "comunicazione-interna",
    title: "Cultura interna: culture diverse che non si parlano",
    reframing:
      "Riunioni che non portano a decisioni. Email che non vengono lette. Messaggi interpretati in modo diverso da funzione a funzione. Non è un problema di strumenti o di canali: è che convivono culture diverse che non hanno mai costruito un vocabolario comune.",
    action:
      "Facciamo emergere le culture invisibili che coesistono nella stessa organizzazione e costruiamo un linguaggio condiviso che le rispetti tutte.",
    approccio: "Lumen + Comunicazione interna + Workshop team",
  },
  {
    door: "employer-branding",
    title: "Il brand non attrae le persone giuste",
    reframing:
      "I candidati arrivano con aspettative che non corrispondono alla realtà. O non arrivano affatto. Il problema non è l'offerta economica né il settore: è che il brand comunica qualcosa di generico che non racconta chi siete davvero. Le persone giuste non si riconoscono, e quelle sbagliate accettano e se ne vanno dopo un anno.",
    action:
      "Rendiamo la vostra identità culturale leggibile già dal primo contatto. Non con una campagna, ma partendo da chi siete davvero.",
    approccio: "Lumen + Ingaze + Employer branding + Workshop identità culturale",
  },
  {
    door: "comunicazione-interna",
    title: "Quello che dite fuori non corrisponde a quello che vivete dentro",
    reframing:
      "Il marketing racconta un'azienda che le persone interne non riconoscono. I clienti lo percepiscono. I candidati lo scoprono dopo il primo mese. Il problema non è il messaggio: è che l'identità esterna è stata costruita senza partire da quella interna.",
    action:
      "Allineiamo chi siete dentro con quello che comunicate fuori. Partendo da dentro, non dall'esterno.",
    approccio: "Lumen + Brand strategy",
  },
  {
    door: "leadership",
    title: "Processo di delega che non funziona",
    reframing:
      "La delega non è un problema di processo o di strumenti. È un problema di fiducia culturale. Se l'errore non è permesso, nessuno si prende responsabilità. Se il potere non è mai stato distribuito davvero, nessun framework lo distribuirà. E senza una relazione solida tra manager e collaboratore, il feedback non passa e l'autonomia non attecchisce.",
    action:
      "Lavoriamo sulla qualità della relazione come infrastruttura necessaria per il feedback reale e per l'autonomia sostenibile. Non sul processo di delega in sé.",
    approccio: "Lumen + Coaching leadership",
  },
  {
    door: "leadership",
    title: "Innovazione che resta sulla carta",
    reframing:
      "L'innovazione non si blocca per mancanza di idee o di budget. Si blocca perché la cultura premia chi non sbaglia più di chi prova cose nuove. Cambiare tool o lanciare un hackathon non cambia questa equazione.",
    action:
      "Identifichiamo quali rituali e linguaggi interni stanno sabotando l'innovazione prima ancora che parta.",
    approccio: "Lumen + Workshop rituali e linguaggi",
  },
  {
    door: "leadership",
    title: "Lavoro ibrido senza regole condivise",
    reframing:
      "L'ibrido è entrato in azienda spesso senza che nessuno decidesse davvero cosa significa lavorare in modo smart. Il risultato sono le domande che circolano nei corridoi: perché Giorgio fa smart working e io no? Perché Milano può e noi no? Perché dipende dal mio capo? Quando le regole mancano o sono applicate in modo disomogeneo, il problema non è logistico. È motivazionale e generazionale — i talenti più giovani considerano la flessibilità una priorità non negoziabile, e se non la trovano, cercano altrove.",
    action:
      "Aiutiamo il board e i manager a rispondere a una domanda strategica: cosa significa davvero lavorare smart nella vostra organizzazione? Non come risolvere il lavoro da casa. Come renderlo una leva culturale consapevole.",
    approccio: "Workshop strategico + Facilitazione board",
  },
  {
    door: "leadership",
    title: "Le persone ci sono, ma non partecipano",
    reframing:
      "Le persone fanno quello che devono, niente di più. Le riunioni si svuotano di contributi veri, le iniziative partono dall'alto e si spengono prima di arrivare in fondo, i progetti di cambiamento incontrano una resistenza che nessuno dichiara. Non è un problema di motivazione individuale né di incentivi: è che nessuno ha mai coinvolto davvero le persone in quello che si stava costruendo.",
    action:
      "Lavoriamo con i gruppi, non sui gruppi. Coinvolgiamo le persone nel processo che le riguarda, a tutti i livelli e non solo al vertice: chi partecipa alla costruzione si riconosce nel risultato, e l'appartenenza nasce da lì.",
    approccio: "Lumen + Leading by Purpose + Workshop partecipativi",
  },
];
