import { SEO } from "@/components/SEO";

import ArticleLayout from "@/components/ArticleLayout";


const content = `Avis era seconda. Hertz era prima.

Invece di nasconderlo, Avis ci ha costruito una campagna pubblicitaria. Il messaggio era semplice: chi è secondo ha una tensione che chi è primo non ha più. *We try harder.*

È una delle cose più oneste che un'azienda possa fare: trasformare un limite in una direzione.

Le aziende fanno promesse continuamente. *Il nostro prodotto ha vinto il premio best design Europe.* Il sottotesto: compralo, non te ne pentirai. *La nostra azienda ha vinto il premio great place to collaborate.* Il sottotesto: vieni a lavorare qui, ti troverai bene.

Non ho nulla contro le promesse. Anzi.

Ma come ci hanno insegnato da bambini: le promesse vanno mantenute.

La tentazione di fare promesse che non riusciamo del tutto a mantenere è un rischio che non vale la pena correre. I problemi che crea sono quasi sempre più grandi dei benefici che porta. Un candidato che arriva con aspettative alte e trova qualcosa di diverso non è solo deluso: è un testimone. Racconta. E le storie che raccontano le persone che se ne vanno pesano più di qualsiasi campagna employer branding.

Eppure c'è qualcosa di bello nelle promesse, anche in quelle che sentiamo ancora un po' lontane dalle nostre possibilità. Sono tensioni. Ci dicono dove vogliamo arrivare, anche quando non ci siamo ancora.

Mi immagino un imprenditore che chiede al suo board: *possiamo promettere che qui le persone si troveranno bene a lavorare? C'è qualcosa su cui dobbiamo lavorare prima che questa promessa sia davvero coerente con quello che viviamo ogni giorno?*

Quella domanda è rara. E vale più di qualsiasi valore scritto su un poster.

Perché un valore che non riesci a promettere non è ancora un valore. È un'aspirazione. E confondere le due cose, comunicare come se fossi già quello che vuoi diventare, è il modo più veloce per perdere la fiducia delle persone che hai dentro prima ancora di quelle che vuoi attrarre.

> *La cultura implicita non esiste. Esiste solo la cultura che vivi: quella che le persone vedono ogni giorno nei comportamenti, nelle promozioni, nelle decisioni difficili. Renderla esplicita non significa scriverla su un poster. Significa chiedersi se sei pronto a prometterla.*`;

const ValoriNonSonoPoster = () => {
  return (
    <>
      <SEO
        title="I valori non sono poster. Sono promesse."
        description="Le aziende fanno promesse continuamente. Ma come ci hanno insegnato da bambini: le promesse vanno mantenute."
        canonical="https://venturoconsulting.it/magazine/i-valori-non-sono-poster"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/i-valori-non-sono-poster",
          en: "https://venturoconsulting.it/en/magazine/values-are-promises",
        }}
        lang="it"
      />
      <ArticleLayout
        category="Cultura"
        title="I valori non sono poster. Sono promesse."
        subtitle="Le aziende fanno promesse continuamente. Ma come ci hanno insegnato da bambini: le promesse vanno mantenute."
        date="1 mar 2026"
        readTime="4 min"
        heroImage=""
        content={content}
      />
    </>
  );
};

export default ValoriNonSonoPoster;
