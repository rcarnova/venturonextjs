import { SEO } from "@/components/SEO";

import ArticleLayout from "@/components/ArticleLayout";

const content = `C'è un numero che circola spesso nelle conversazioni sulla cultura aziendale: il 72% dei dipendenti afferma di non capire la strategia dell'organizzazione in cui lavora. Non perché la strategia non esista. Ma perché il messaggio che la porta non regge alla prova del corridoio, della riunione informale, della pausa caffè. Viene dichiarato in un documento, poi scompare.

Noi lavoriamo ogni giorno con aziende che investono in comunicazione esterna — siti, campagne, brand identity — e contemporaneamente trascurano la coerenza più importante: quella tra ciò che dichiarano di essere e ciò che le persone al loro interno effettivamente vivono. È un cortocircuito silenzioso. Costoso. Spesso invisibile fino a quando non produce danno.

Il punto non è estetico. Non si tratta di allineare i font o scegliere una palette colori coerente. Si tratta di qualcosa di più profondo: la distanza tra l'identità proclamata e l'identità vissuta.

## Il pattern che si ripete

Il pattern che vediamo ripetersi è questo: un'organizzazione definisce i propri valori — spesso in un workshop, spesso con un consulente, spesso con buone intenzioni — li traduce in slide e li pubblica sul sito. Poi torna alla normalità. I valori restano lì, incorniciati nel portale HR, mentre dentro l'azienda si parla un'altra lingua. Una lingua fatta di non detti, di gerarchie informali, di riunioni in cui le decisioni vere avvengono dopo la riunione ufficiale.

Questo non è cinismo. È anatomia organizzativa. Ogni sistema umano produce una cultura, lo voglia o no. La domanda non è "abbiamo una cultura?" ma "la cultura che produciamo ogni giorno assomiglia a quella che diciamo di avere?"

Quando la risposta è no — e spesso lo è — non basta una nuova campagna di employer branding. Non basta aggiornare il sito careers. Il problema non sta nella comunicazione: sta nella coerenza tra intenzione e comportamento. Ed è lì che bisogna intervenire.

## Una storia, per non restare nell'astratto

Qualche mese fa abbiamo lavorato con un'azienda manifatturiera del Nord-Est. Cinquecento persone, buona reputazione sul mercato, difficoltà crescenti nel trattenere i talenti. Il CEO ci ha accolti con una certezza: "Il problema è lo stipendio. Non possiamo competere con le multinazionali."

Abbiamo fatto quello che facciamo sempre prima di qualsiasi analisi formale: abbiamo ascoltato. Non i manager. Le persone. In conversazioni brevi, informali, senza registrare. Quello che è emerso non riguardava lo stipendio. Riguardava la distanza tra i valori scritti sulla parete dell'ingresso — innovazione, rispetto, trasparenza — e quello che accadeva ogni giorno: feedback assenti, decisioni calate dall'alto senza spiegazione, idee buone che sparivano nel vuoto.

La svolta non è arrivata da un piano di comunicazione. È arrivata quando il CEO ha smesso di chiedere "come comunichiamo meglio i nostri valori?" e ha cominciato a chiedersi "dove li tradiamo?" È una domanda scomoda. È anche l'unica che produce cambiamento reale.

## In sintesi, per chi deve decidere

- La coerenza che conta non è visiva, è comportamentale: riguarda l'allineamento tra ciò che un'organizzazione dichiara e ciò che le sue persone sperimentano ogni giorno.
- L'employer branding costruito su un'identità non vissuta internamente non attrae talenti: li delude, e accelera il turnover.
- Il non detto organizzativo ha un costo reale: rallenta le decisioni, abbassa l'engagement, erode la fiducia.
- Ascoltare le persone prima di comunicare verso l'esterno non è un'attività HR: è una scelta strategica.
- Le culture più solide non sono quelle con i valori più belli, ma quelle in cui i comportamenti quotidiani raccontano la stessa storia dei valori dichiarati.

## Cosa fare: domande pratiche per iniziare

- Se chiedessimo a dieci persone della tua organizzazione di descrivere la cultura interna, le risposte assomiglierebbero a quello che c'è scritto sul sito?
- Negli ultimi sei mesi, una decisione rilevante ha tradito uno dei valori che dichiarate pubblicamente? Chi lo sa, dentro l'azienda?
- Quali conversazioni importanti non avvengono mai nelle sedi ufficiali, e perché?
- Cosa succederebbe se smetteste di comunicare chi siete e cominciaste a chiedervi chi siete davvero?

---

L'identità organizzativa non si progetta in un workshop. Si rivela, ogni giorno, in mille gesti piccoli. Il lavoro serio inizia quando si ha il coraggio di guardarli.`;

const IdentitaDichiarataVissuta = () => {
  return (
    <>
      <SEO
        title="L'identità dichiarata e l'identità vissuta: il cortocircuito silenzioso delle organizzazioni"
        description="Il 72% dei dipendenti non capisce la strategia della propria azienda. Non è un problema di comunicazione: è la distanza tra ciò che un'organizzazione dichiara di essere e ciò che le persone vivono ogni giorno."
        canonical="https://venturoconsulting.it/magazine/identita-dichiarata-vissuta"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/identita-dichiarata-vissuta",
          en: "https://venturoconsulting.it/en/magazine/declared-vs-lived-identity",
        }}
        lang="it"
      />
      <ArticleLayout
        category="Cultura organizzativa"
        title="L'identità dichiarata e l'identità vissuta: il cortocircuito silenzioso delle organizzazioni"
        subtitle="Il punto non è estetico. È la distanza tra ciò che un'azienda dice di essere e ciò che le sue persone vivono ogni giorno."
        date="27 apr 2026"
        readTime="6 min"
        content={content}
      />
    </>
  );
};

export default IdentitaDichiarataVissuta;
