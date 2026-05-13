import { SEO } from "@/components/SEO";

import ArticleLayout from "@/components/ArticleLayout";

const content = `Abbiamo letto di David Larbi questo week-end. Un poeta che ha un milione di follower non perché urla, ma perché sussurra.

E ci siamo fermati su una cosa che ha detto:

> «Le persone si connettono con me perché mi sentono presente. Non puoi davvero connetterti se non sei personalmente lì.»

È esattamente quello che vediamo nelle organizzazioni che non riescono ad attrarre o trattenere talenti.

## Non manca la strategia. Manca la presenza.

Non manca il budget. Non manca la strategia. Manca la presenza.

- Mancano leader che si mostrano per quello che sono davvero.
- Mancano valori che escono dalla policy ed entrano nelle conversazioni di corridoio.
- Manca un'identità che le persone possano sentire — non solo leggere sul sito.

## Sapere perché si lotta

Larbi ha anche detto qualcosa che ci riguarda tutti:

> «Essere ottimisti quando intorno c'è negatività non è tossicità positiva. È ricordarti perché stai lottando.»

Noi ci occupiamo di cultura organizzativa. E la domanda che facciamo sempre alle aziende con cui lavoriamo è questa: le vostre persone sanno perché stanno lottando?

Perché se la risposta è no — o peggio, se la risposta è diversa da individuo a individuo — allora l'employer branding che costruirete sarà una facciata. Bella. Vuota. Temporanea.

## L'identità non si progetta. Emerge.

L'identità non si progetta a tavolino. Emerge. Va ascoltata, nominata, poi amplificata.

Questo è il nostro lavoro.

> Nella vostra organizzazione, chi è davvero presente?`;

const PresenzaIdentita = () => {
  return (
    <>
      <SEO
        title="Chi è davvero presente? Identità, leadership ed employer branding."
        description="Le organizzazioni che non attraggono talenti non hanno un problema di strategia o budget: hanno un problema di presenza. Leader, valori e identità che si sentono, non solo si leggono."
        canonical="https://venturoconsulting.it/magazine/presenza-identita"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine/presenza-identita",
          en: "https://venturoconsulting.it/en/magazine/presence-identity",
        }}
        lang="it"
      />
      <ArticleLayout
        category="Cultura organizzativa"
        title="Chi è davvero presente? Identità, leadership ed employer branding."
        subtitle="Non manca la strategia. Non manca il budget. Manca la presenza. Mancano leader che si mostrano per quello che sono davvero."
        date="19 apr 2026"
        readTime="4 min"
        content={content}
      />
    </>
  );
};

export default PresenzaIdentita;
