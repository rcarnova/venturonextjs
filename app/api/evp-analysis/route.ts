import { NextRequest, NextResponse } from "next/server";

/**
 * Analisi EVP (pagine /analisi-evp e /en/evp-analysis).
 * L'analisi la fa ancora la funzione Supabase evp-analysis: questa rotta la
 * chiama dal server e, a ogni analisi riuscita, avvisa info@ con testi,
 * risultato ed email (se lasciata). Così sappiamo chi usa il tool.
 */

const FUNCTION_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/evp-analysis`;
const NOTIFY_TO = ["info@venturoconsulting.it"];

const html = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const excerpt = (s: string, n: number) => (s.length > n ? `${s.slice(0, n).trim()}…` : s);

async function notify(p: { careerPage: string; jobPost: string; email?: string; lang: string; analysis: string }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  // Prima riga non vuota della career page: di solito il nome dell'azienda o il titolo della pagina
  const firstLine = p.careerPage.split("\n").map((l) => l.trim()).find(Boolean) ?? "";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Venturo <info@venturoconsulting.it>",
      to: NOTIFY_TO,
      ...(p.email ? { reply_to: p.email } : {}),
      subject: `Nuova analisi EVP${p.email ? ` da ${p.email}` : ""}: ${excerpt(firstLine, 60)}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;color:#111;font-size:14px;line-height:1.6">
          <p><strong>Qualcuno ha usato l'Analisi EVP</strong> (${p.lang === "en" ? "versione inglese" : "versione italiana"}).</p>
          <p>Email: <strong>${p.email ? html(p.email) : "non lasciata"}</strong><br>
             Job post: ${p.jobPost ? "sì" : "no"} · Lunghezza testi: ${p.careerPage.length + p.jobPost.length} caratteri</p>
          <h3 style="margin:24px 0 8px">Career page (inizio)</h3>
          <p style="white-space:pre-wrap;color:#444;border-left:3px solid #ddd;padding-left:12px">${html(excerpt(p.careerPage, 1200))}</p>
          ${p.jobPost ? `<h3 style="margin:24px 0 8px">Job post (inizio)</h3>
          <p style="white-space:pre-wrap;color:#444;border-left:3px solid #ddd;padding-left:12px">${html(excerpt(p.jobPost, 800))}</p>` : ""}
          <h3 style="margin:24px 0 8px">Analisi restituita</h3>
          <p style="white-space:pre-wrap;border-left:3px solid #E1FF00;padding-left:12px">${html(p.analysis)}</p>
          ${p.email ? `<p style="color:#888">Rispondendo a questa mail scrivi direttamente a ${html(p.email)}.</p>` : ""}
        </div>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const careerPage = String(body.careerPage ?? "");
    const jobPost = String(body.jobPost ?? "");
    const email = typeof body.email === "string" && body.email.trim() ? body.email.trim().slice(0, 120) : undefined;
    const lang = body.lang === "en" ? "en" : "it";

    const res = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ careerPage, jobPost, email }),
    });
    const data = await res.json().catch(() => ({ error: "Errore durante l'analisi." }));

    if (res.ok && typeof data.analysis === "string") {
      // L'avviso non deve mai far fallire l'analisi
      try {
        await notify({ careerPage, jobPost, email, lang, analysis: data.analysis });
      } catch (e) {
        console.error("Avviso analisi EVP non inviato", e);
      }
    }
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    console.error("Analisi EVP", e);
    return NextResponse.json({ error: "Errore durante l'analisi." }, { status: 500 });
  }
}
