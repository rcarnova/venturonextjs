import { NextRequest, NextResponse } from "next/server";

/**
 * Guida "Quanto costa perdere un talento in azienda" (lead magnet del simulatore turnover).
 * Chi lascia l'email riceve il link al PDF; info@ riceve l'avviso con i dati.
 * Il PDF sta in public/guide; il sorgente HTML in scripts/guida.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PDF_URL = "https://venturoconsulting.it/guide/venturo-guida-costo-turnover.pdf";
const NOTIFY_TO = ["info@venturoconsulting.it"];

const html = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

async function sendEmail(key: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.website) return NextResponse.json({ ok: true, url: PDF_URL }); // trappola per bot
    const email = String(body.email ?? "").trim().toLowerCase().slice(0, 120);
    const nome = String(body.nome ?? "").trim().slice(0, 80);
    const azienda = String(body.azienda ?? "").trim().slice(0, 120);
    const consenso = body.consenso === true;
    const aggiornamenti = body.aggiornamenti === true;

    if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Serve un indirizzo email valido." }, { status: 400 });
    if (!consenso) return NextResponse.json({ error: "Serve il consenso all'informativa privacy." }, { status: 400 });

    const key = process.env.RESEND_API_KEY;
    if (!key) return NextResponse.json({ error: "Invio non configurato." }, { status: 500 });

    await sendEmail(key, {
      from: "Rosario di Venturo <rosario@venturoconsulting.it>",
      to: [email],
      reply_to: "info@venturoconsulting.it",
      subject: "La guida: quanto costa perdere un talento in azienda",
      html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111;font-size:15px;line-height:1.6">
        <p style="font-family:monospace;font-size:11px;letter-spacing:0.12em;color:#888;margin:0 0 16px">GUIDA PRATICA · TURNOVER</p>
        <p>${nome ? `Ciao ${html(nome)},` : "Ciao,"}</p>
        <p>ecco la guida per calcolare il costo del turnover con i vostri numeri: le uscite da contare, le cinque voci di costo, i tre scenari e una scheda da compilare.</p>
        <p style="margin:24px 0"><a href="${PDF_URL}" style="display:inline-block;padding:12px 20px;background:#0A0A0A;color:#fff;text-decoration:none;font-weight:bold;border-radius:6px">Scarica la guida (PDF) →</a></p>
        <p>Se volete fare il conto subito, c'è anche il <a href="https://venturoconsulting.it/simulatore-turnover" style="color:#111">simulatore online</a>.</p>
        <p>E se il numero che vi esce vi fa venire qualche domanda sul perché le persone se ne vanno, rispondete pure a questa mail. Ne parliamo volentieri.</p>
        <p style="margin-top:28px">Rosario e il team Venturo<br><a href="https://venturoconsulting.it" style="color:#111">venturoconsulting.it</a></p>
        <p style="font-size:12px;color:#999;margin-top:28px">Hai ricevuto questa email perché hai richiesto la guida su venturoconsulting.it.</p>
      </div>`,
    });

    try {
      await sendEmail(key, {
        from: "Venturo <info@venturoconsulting.it>",
        to: NOTIFY_TO,
        reply_to: email,
        subject: `Guida turnover scaricata: ${nome || email}${azienda ? ` (${azienda})` : ""}`,
        html: `<p><strong>${html(nome || "-")}</strong> &lt;${html(email)}&gt;</p>
               <p>Azienda: ${html(azienda || "-")}</p>
               <p>Accetta altri contenuti di Venturo: <strong>${aggiornamenti ? "sì" : "no"}</strong></p>
               <p style="color:#888">Rispondendo a questa mail scrivi direttamente a ${html(email)}.</p>`,
      });
    } catch (e) {
      console.error("Avviso guida turnover non inviato", e);
    }

    return NextResponse.json({ ok: true, url: PDF_URL });
  } catch (e) {
    console.error("Guida turnover", e);
    return NextResponse.json({ error: "Non siamo riusciti a inviare la guida. Riprova o scrivici a info@venturoconsulting.it." }, { status: 500 });
  }
}
