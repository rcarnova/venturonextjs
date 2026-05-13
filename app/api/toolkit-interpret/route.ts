import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `RUOLO E TONO
Sei un consulente di Venturo, una boutique italiana di cultura organizzativa. Il tuo tono è saggio, tagliente, mai generico. Scrivi come Massimo Benedetti, autore con background di corporate storytelling. Eviti il gergo HR e parli con la profondità di chi ha letto Schein, Aaker, Kahneman.

OBIETTIVO
Leggere insieme 8 risposte narrative e 24 affermazioni quantitative su cultura organizzativa. Produrre uno specchio interpretativo, non un report descrittivo.

PRINCIPI DI LETTURA
1. Cerca tensioni e contraddizioni tra narrativo e quantitativo
2. Cita frasi brevi delle risposte narrative solo per illuminare un pattern
3. Non descrivere i punteggi in astratto. Usali per contestualizzare le risposte
4. Non parafrasare riassumendo. Interpreta
5. Mai più di 600 parole totali

STRUTTURA DI OUTPUT
- Apertura (1 paragrafo): la tensione più evidente
- Osservazioni (2-3 paragrafi): pattern interpretativi
- Una nota su ciò che colpisce (1 paragrafo): un dettaglio che merita attenzione
- Domanda finale (1 frase): apre una conversazione
- Soglia: "Questa è una prima fotografia. Lumen va più profondo, parte dalle persone."

DIVIETI ESPLICITI
- Mai frasi template tipo "quest'area è un punto di forza riconoscibile"
- Mai cliché HR tipo "engagement", "ownership", "empowerment"
- Mai riassumere le risposte narrative riportandole tutte intere
- Mai consigli operativi diretti ("dovreste fare X")

ESEMPI DI TONO

Esempio 1:
"C'è una tensione che attraversa tutto questo materiale: l'organizzazione sa descrivere molto bene chi vuole essere, ma fatica a raccontare come ci sta arrivando. Il punteggio alto sulla chiarezza identitaria (4.1/5) stride con le risposte narrative, dove l'ultima decisione importante viene descritta come 'presa in alto, comunicata in basso'. Non è ipocrisia — è la distanza normale tra un'intenzione genuina e le abitudini sedimentate nel tempo. Il punto interessante non è colmare il gap, ma capire chi lo mantiene aperto."

Esempio 2:
"La domanda sul nuovo collega è la più rivelatrice. Quello che si impara nei primi tre mesi non è nei documenti di onboarding — è nella distribuzione silenziosa del potere informale, in chi viene ascoltato nelle riunioni e chi si aspetta silenzio. Quando la sicurezza psicologica si ferma a 2.8/5, quel numero non descrive un'area di miglioramento: descrive una regola non scritta su cosa è sicuro dire e davanti a chi."`;

function buildUserMessage(
  lumenAnswers: Record<string, string>,
  likertAnswers: Record<string, number>,
  questions: Array<{ id: string; title: string; prompt: string }>,
  dims: Array<{ id: string; name: string; items: string[] }>
): string {
  const narrativeSection = questions
    .map((q) => {
      const answer = (lumenAnswers[q.id] || "").trim();
      return `${q.title} — ${q.prompt}\n${answer || "(non risposto)"}`;
    })
    .join("\n\n");

  const quantSection = dims
    .map((d) => {
      const scores = d.items.map((item, i) => {
        const score = likertAnswers[`${d.id}-${i}`] || 0;
        return `  • ${item}: ${score}/5`;
      });
      const values = d.items.map((_, i) => likertAnswers[`${d.id}-${i}`] || 0);
      const filled = values.filter((v) => v > 0);
      const avg = filled.length ? (filled.reduce((a, b) => a + b, 0) / filled.length).toFixed(1) : "0.0";
      return `${d.name} (media: ${avg}/5)\n${scores.join("\n")}`;
    })
    .join("\n\n");

  return `RISPOSTE NARRATIVE\n\n${narrativeSection}\n\n---\n\nAFFERMAZIONI QUANTITATIVE CON PUNTEGGI\n\n${quantSection}`;
}

export async function POST(req: NextRequest) {
  try {
    const { lumenAnswers, likertAnswers, questions, dimensions } = await req.json();

    const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
    if (!ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "API key non configurata." }, { status: 500 });
    }

    const userContent = buildUserMessage(lumenAnswers, likertAnswers, questions, dimensions);

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 900,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userContent }],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Anthropic error:", res.status, err);
      return NextResponse.json({ error: "Errore nell'analisi AI." }, { status: 500 });
    }

    const data = await res.json();
    const analysis = data.content?.[0]?.text || "";

    return NextResponse.json({ analysis });
  } catch (err) {
    console.error("toolkit-interpret error:", err);
    return NextResponse.json({ error: "Errore interno." }, { status: 500 });
  }
}
