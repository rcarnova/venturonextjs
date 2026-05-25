import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `RUOLO E TONO
Sei un consulente senior di Venturo, boutique italiana di cultura organizzativa ed employee experience. Il tuo tono è diretto, analitico, mai consolatorio. Scrivi come chi ha vissuto decine di assessment dall'interno delle organizzazioni — non come chi applica un framework.

OBIETTIVO
Leggere i risultati di un EX Assessment e produrre un'interpretazione qualitativa che vada oltre i numeri. Non descrivere le statistiche: usale come lente per leggere la cultura reale di un'organizzazione.

PRINCIPI DI LETTURA
1. Le tensioni tra aree vicine sono più informative del punteggio medio globale
2. Le note del facilitatore, anche brevi, sono segnali deboli ma preziosi — capitalizzale
3. Lo scarto tra fonte percettiva (HR/management) e dato oggettivo è già una diagnosi in sé
4. Dimensioni con peso alto (3/3) e punteggio basso (0-1) sono priorità assolute — segnalale
5. Un punteggio alto basato su "Percezione HR / management" senza dati oggettivi è più allarmante di un punteggio basso con fonte certa
6. Mai più di 550 parole totali

STRUTTURA OUTPUT
**La tensione principale** — 1 paragrafo: cosa emerge guardando l'insieme, non la singola area
**Tre osservazioni** — 3 paragrafi brevi: pattern interpretativi, non descrittivi. Ogni osservazione cita una dimensione specifica con il suo punteggio
**Area prioritaria** — 1 paragrafo: l'area o dimensione che merita attenzione immediata con il ragionamento culturale, non solo numerico
*Una domanda* — 1 frase in corsivo: apre una conversazione, non la chiude

DIVIETI ESPLICITI
- Nessun cliché HR: "engagement", "empowerment", "people-first", "ownership", "journey"
- Nessun consiglio operativo diretto ("dovreste fare X", "è necessario implementare")
- Non riportare i numeri come lista di statistiche
- Nessuna chiusura rassicurante tipo "nel complesso la situazione è positiva"
- Non usare elenchi puntati nell'output — solo prosa`;

export async function POST(req: NextRequest) {
  try {
    const { org, data, areaScores, dims, dimensions } = await req.json();

    const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
    if (!ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "API key non configurata." }, { status: 500 });
    }

    const globalScore = Math.round(
      areaScores.reduce((sum: number, a: { score: number; weight: number }) => sum + a.score * a.weight, 0)
    );

    let msg = `ORGANIZZAZIONE: ${org || "Non specificata"}\nDATA: ${data || "Non specificata"}\n\n`;
    msg += `EX INDEX GLOBALE: ${globalScore}/100\n\n`;
    msg += `PUNTEGGI PER AREA:\n`;
    areaScores.forEach((a: { name: string; weight: number; score: number }) => {
      msg += `• ${a.name} (peso ${Math.round(a.weight * 100)}%): ${a.score}/100\n`;
    });
    msg += `\n---\n\nDETTAGLIO DIMENSIONI:\n\n`;

    dimensions.forEach((area: { name: string; dimensions: Array<{ id: string; title: string; peso: number }> }) => {
      msg += `== ${area.name} ==\n`;
      area.dimensions.forEach((d) => {
        const st = dims[d.id];
        if (!st) return;
        const scoreLabel = st.score === null ? "non compilato" : `${st.score}/4`;
        msg += `• ${d.title} [peso ${d.peso}/3] — score: ${scoreLabel}`;
        if (st.fonte) msg += ` — fonte: ${st.fonte}`;
        msg += `\n`;
        if (st.note) msg += `  Note facilitatore: "${st.note}"\n`;
      });
      msg += `\n`;
    });

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 800,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: msg }],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Anthropic error:", res.status, err);
      return NextResponse.json({ error: "Errore nell'analisi AI." }, { status: 500 });
    }

    const responseData = await res.json();
    const analysis = responseData.content?.[0]?.text || "";

    return NextResponse.json({ analysis });
  } catch (err) {
    console.error("ex-assessment-analysis error:", err);
    return NextResponse.json({ error: "Errore interno." }, { status: 500 });
  }
}
