import { SEO } from "@/components/SEO";

import ArticleLayout from "@/components/ArticleLayout";

const content = `Tiziano Terzani e sua moglie, negli anni della malattia, scelsero di comunicarsi solo per lettera.

Lo strumento più lento. Il più asincrono.

Eppure quelle lettere li facevano sentire vicini. Il telefono, no. Quando si salutavano, si sentivano più soli.

La vicinanza nasce dall'intenzionalità, non dalla tecnologia.

Quest'immagine mi torna spesso quando lavoro con le organizzazioni. Perché il problema che vedo non è mai il mezzo — remoto, ibrido, in presenza. È la qualità dell'attenzione che ci portiamo.

## Presenti, ma altrove

Abbiamo dibattuto anni su presenza vs remoto. Ma chiunque abbia partecipato a una riunione in ufficio conosce quella sensazione: persone fisicamente lì, mentalmente già altrove.

Al meeting successivo. Al task urgente. Alla notifica appena arrivata.

Sono lì. Ma non del tutto.

## Il costo organizzativo

Nelle organizzazioni questo ha un costo preciso:

- Decisioni più reattive, meno strategiche.
- Relazioni più sottili, meno capaci di reggere la complessità.
- Engagement che si erode — perché le persone sentono quando non vengono viste davvero.

## Come si misura davvero la presenza

La presenza non si misura con il badge o la webcam accesa. Si misura in altri segnali:

- Nella profondità delle conversazioni.
- Nella chiarezza che rimane dopo un meeting.
- Nell'assenza di rework e fraintendimenti.
- Nella capacità di fare una domanda che sposta il ragionamento.

Dove questi segnali mancano, la presenza è solo formale.

## La domanda che conta

Perché la domanda che conta non è dove siamo. È come siamo, quando siamo lì.

> Nella tua organizzazione, la presenza è una competenza che si allena — o è ancora un dato per scontato?`;

const PresenzaTerzani = () => {
  return (
    <>
      <SEO
        title="La vicinanza nasce dall'intenzionalità, non dalla tecnologia."
        description="Non è remoto vs ufficio: è presenti vs altrove. La qualità dell'attenzione che portiamo in una stanza vale più di dove quella stanza si trova."
        canonical="https://venturoconsulting.it/magazine/presenza-intenzionalita"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/presenza-intenzionalita",
          en: "https://venturoconsulting.it/en/magazine/presence-intentionality",
        }}
        lang="it"
      />
      <ArticleLayout
        category="Cultura organizzativa"
        title="La vicinanza nasce dall'intenzionalità, non dalla tecnologia."
        subtitle="Non è remoto vs ufficio. È presenti vs altrove. La qualità dell'attenzione che porti in una stanza vale più di dove quella stanza si trova."
        date="12 apr 2026"
        readTime="4 min"
        content={content}
      />
    </>
  );
};

export default PresenzaTerzani;
