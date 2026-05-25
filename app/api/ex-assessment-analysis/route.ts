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
- Non usare elenchi puntati nell'output — solo prosa
- Vietato il pattern retorico "Non è X: è Y" e varianti ("Non è solo X: è Y", "Non è un problema di X: è la conseguenza di Y"). Non iniziare mai una frase con una negazione di ciò che qualcosa è, per poi ribaltarla in affermativo. È un dispositivo formulaico che rende l'analisi generica. Afferma direttamente.`;

async function sendNotification({
  org, data, facilitatore, globalScore, areaScores, analysis,
}: {
  org: string; data: string; facilitatore: string;
  globalScore: number;
  areaScores: Array<{ name: string; score: number; weight: number }>;
  analysis: string;
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) return;

  const areaRows = areaScores.map((a) =>
    `<tr>
      <td style="padding:6px 12px;border-bottom:1px solid #eee">${a.name}</td>
      <td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600">${a.score}/100</td>
      <td style="padding:6px 12px;border-bottom:1px solid #eee;color:#888">${Math.round(a.weight * 100)}%</td>
    </tr>`
  ).join("");

  const htmlAnalysis = analysis
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>");

  const html = `
  <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
    <div style="background:#111;padding:24px 32px;margin-bottom:24px">
      <span style="color:#E6FF3D;font-size:11px;letter-spacing:0.1em;text-transform:uppercase">Venturo · EX Assessment</span>
    </div>
    <div style="padding:0 32px 32px">
      <h2 style="margin:0 0 4px;font-size:22px">${org || "Organizzazione non specificata"}</h2>
      <p style="margin:0 0 24px;color:#888;font-size:13px">${data || "-"} · Facilitatore: ${facilitatore || "-"}</p>

      <div style="background:#f5f5f3;padding:16px 20px;margin-bottom:24px;display:inline-block">
        <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888">EX Index globale</span><br>
        <span style="font-size:40px;font-weight:700;line-height:1.2">${globalScore}</span>
        <span style="font-size:16px;color:#888">/100</span>
      </div>

      <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
        <thead>
          <tr style="background:#f5f5f3">
            <th style="padding:8px 12px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#888">Area</th>
            <th style="padding:8px 12px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#888">Score</th>
            <th style="padding:8px 12px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#888">Peso</th>
          </tr>
        </thead>
        <tbody>${areaRows}</tbody>
      </table>

      <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:0.1em;color:#888;margin-bottom:12px">Interpretazione AI</h3>
      <div style="font-size:14px;line-height:1.7;color:#333"><p>${htmlAnalysis}</p></div>
    </div>
  </div>`;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "EX Assessment <info@venturoconsulting.it>",
      to: ["rosario.carnovale@gmail.com"],
      subject: `EX Assessment — ${org || "sessione"} — ${data || new Date().toISOString().slice(0, 10)}`,
      html,
    }),
  });
  if (!resendRes.ok) {
    const errBody = await resendRes.text();
    console.error("Resend error", resendRes.status, errBody);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { org, data, facilitatore, areaScores, dims, dimensions } = await req.json();

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

    // Fire-and-forget — non blocca la risposta al client
    sendNotification({ org, data, facilitatore, globalScore, areaScores, analysis }).catch(
      (e) => console.error("Notification error:", e)
    );

    return NextResponse.json({ analysis });
  } catch (err) {
    console.error("ex-assessment-analysis error:", err);
    return NextResponse.json({ error: "Errore interno." }, { status: 500 });
  }
}
