// Cultural Assessment Toolkit data (IT)

export const lumenQuestions: { id: string; title: string; prompt: string; placeholder: string }[] = [
  {
    id: "trasloco",
    title: "Il trasloco",
    prompt:
      "Se domani la vostra organizzazione dovesse traslocare, cosa portereste con voi senza pensarci e cosa lascereste volentieri indietro?",
    placeholder: "Pensate a riti, oggetti, persone, abitudini che definiscono il vostro modo di lavorare…",
  },
  {
    id: "amico-bar",
    title: "L'amico al bar",
    prompt:
      "Un amico vi chiede al bar com'è davvero lavorare nella vostra azienda. Senza filtri istituzionali, cosa rispondete?",
    placeholder: "La risposta che dareste a una persona di cui vi fidate, non al sito careers…",
  },
  {
    id: "errore-permesso",
    title: "L'errore permesso",
    prompt:
      "Quale tipo di errore è davvero permesso nella vostra organizzazione? E quale, anche se non scritto, non si può fare?",
    placeholder: "Distinguete tra le regole formali e quelle reali…",
  },
  {
    id: "ultima-decisione",
    title: "L'ultima decisione",
    prompt:
      "Pensate all'ultima decisione importante presa. Come è stata presa davvero? Chi ha deciso e chi ha avuto voce?",
    placeholder: "Ripercorrete il processo reale, non quello dichiarato…",
  },
  {
    id: "sfide-future",
    title: "Le sfide future",
    prompt:
      "Quale sfida, oggi, vi spaventa di più come organizzazione? E quale conversazione su questa sfida non state ancora avendo?",
    placeholder: "Il non detto è spesso più rivelatore del detto…",
  },
  {
    id: "nuovo-collega",
    title: "Il nuovo collega",
    prompt:
      "Cosa imparerà davvero un nuovo collega nei suoi primi tre mesi — al di là dell'onboarding ufficiale?",
    placeholder: "Cosa si trasmette nei corridoi, nelle pause, nei silenzi…",
  },
  {
    id: "celebrazione",
    title: "La celebrazione",
    prompt:
      "Cosa celebrate davvero come organizzazione? E cosa, di importante, passa invece sotto silenzio?",
    placeholder: "Le celebrazioni rivelano cosa vale per davvero…",
  },
  {
    id: "riunione",
    title: "La riunione",
    prompt:
      "Descrivete una vostra riunione tipo. Chi parla, chi tace, cosa si decide e cosa rimane sospeso?",
    placeholder: "Le riunioni sono il microscopio sulla cultura organizzativa…",
  },
];

export type Dimension = {
  id: string;
  name: string;
  description: string;
  items: string[];
};

export const dimensions: Dimension[] = [
  {
    id: "identita",
    name: "Chiarezza identitaria",
    description: "Le persone sanno articolare chi siete e perché esistete.",
    items: [
      "Chiunque nella nostra organizzazione saprebbe spiegare in modo coerente perché esistiamo.",
      "Le scelte strategiche degli ultimi 12 mesi sono leggibili a partire dalla nostra identità.",
      "I nuovi assunti, dopo i primi mesi, raccontano l'azienda in modo simile a chi è qui da anni.",
      "Quando comunichiamo all'esterno, ci riconosciamo in quello che diciamo.",
    ],
  },
  {
    id: "coerenza",
    name: "Coerenza valori-comportamenti",
    description: "I valori dichiarati guidano davvero le decisioni quotidiane.",
    items: [
      "I comportamenti premiati nella pratica corrispondono ai valori dichiarati.",
      "Chi viola i valori subisce conseguenze reali, anche se è una persona di valore.",
      "Le decisioni difficili degli ultimi mesi sono state prese coerentemente con i nostri valori.",
      "I valori vengono usati come criterio nelle valutazioni e nelle promozioni, non solo nei poster.",
    ],
  },
  {
    id: "leadership",
    name: "Presenza della leadership",
    description: "I leader si mostrano, ascoltano, decidono visibilmente.",
    items: [
      "I leader sono accessibili e si espongono personalmente quando serve.",
      "Quando un leader sbaglia, lo riconosce apertamente di fronte al team.",
      "I leader raccontano il perché delle decisioni, non solo il cosa.",
      "Le persone sentono che chi guida l'organizzazione è davvero presente, non solo formalmente.",
    ],
  },
  {
    id: "responsabilita",
    name: "Responsabilità diffusa",
    description: "Le persone reclamano responsabilità invece di aspettarla.",
    items: [
      "Le persone prendono decisioni nel loro perimetro senza chiedere conferma per tutto.",
      "Quando qualcosa va male, ci si chiede prima cosa migliorare e poi di chi è la colpa.",
      "Chi vede un problema fuori dal proprio ruolo lo segnala o se ne fa carico.",
      "L'iniziativa individuale è riconosciuta, anche quando porta a un errore.",
    ],
  },
  {
    id: "ascolto",
    name: "Qualità dell'ascolto",
    description: "Esistono spazi reali in cui il non detto può emergere.",
    items: [
      "Esistono momenti regolari in cui le persone possono dire cose scomode senza ritorsioni.",
      "Quando raccogliamo feedback, dopo succede qualcosa di visibile.",
      "Le persone sentono che le loro opinioni cambiano davvero le cose.",
      "Sappiamo distinguere tra raccogliere dati e ascoltare davvero.",
    ],
  },
  {
    id: "sicurezza",
    name: "Sicurezza psicologica",
    description: "Si può sbagliare, dissentire, chiedere aiuto senza penalità.",
    items: [
      "Nelle riunioni le persone esprimono dissenso anche con i superiori.",
      "Chiedere aiuto è considerato un segno di forza, non di debolezza.",
      "Gli errori vengono trattati come occasioni di apprendimento collettivo.",
      "Le persone parlano con la stessa libertà davanti ai loro capi e tra loro.",
    ],
  },
];

export const likertLabels = [
  "Per niente d'accordo",
  "Poco d'accordo",
  "Né d'accordo né in disaccordo",
  "Abbastanza d'accordo",
  "Totalmente d'accordo",
];

export function interpretScore(avg: number): { label: string; color: string; text: string } {
  if (avg < 2.5) {
    return {
      label: "Critica",
      color: "#FF006E",
      text: "Quest'area è oggi una zona d'ombra. Il primo passo è nominare cosa la blocca, prima ancora di agire.",
    };
  }
  if (avg < 3.5) {
    return {
      label: "In costruzione",
      color: "#666666",
      text: "Quest'area mostra segnali contraddittori. C'è qualcosa di solido, ma non ancora abbastanza diffuso da reggere sotto pressione.",
    };
  }
  return {
    label: "Solida",
    color: "#000000",
    text: "Quest'area è un punto di forza riconoscibile. Va presidiata, non data per scontata.",
  };
}
