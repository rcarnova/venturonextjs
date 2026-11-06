import { NextRequest, NextResponse } from "next/server";
import { NEXT_EPISODE } from "@/lib/venturo-conversation";
import { JOIN_URL, googleCalendarUrl, inviteIcs, outlookCalendarUrl } from "@/lib/vc-calendar";

/**
 * Iscrizione alla prossima Venturo Conversation.
 * 1. manda all'iscritto la mail di conferma con link Meet e invito .ics
 * 2. avvisa Venturo dell'iscrizione (è il registro degli iscritti)
 * 3. restituisce link Meet e link calendario per la pagina di ringraziamento
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NOTIFY_TO = ["info@venturoconsulting.it"];

const html = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

const whenLabel = () => {
  const start = new Date(NEXT_EPISODE.startsAt);
  const end = new Date(NEXT_EPISODE.endsAt);
  const day = start.toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long", timeZone: "Europe/Rome" });
  const t = (d: Date) => d.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Rome" });
  return `${day}, ${t(start)}-${t(end)}`;
};

/**
 * Registro degli iscritti: database Notion "Iscritti Venturo Conversation"
 * in VENTURO MISSION CONTROL. Serve la variabile NOTION_TOKEN su Vercel
 * (integrazione Notion collegata al database). Se manca o Notion non risponde,
 * l'iscrizione va comunque a buon fine: resta la notifica a info@.
 */
const NOTION_DB = "76358291740d4723a498387b73e2471a";

async function saveToNotion(r: { nome: string; email: string; azienda: string; aggiornamenti: boolean }) {
  const token = process.env.NOTION_TOKEN;
  if (!token) return false;
  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Notion-Version": "2022-06-28", "Content-Type": "application/json" },
    body: JSON.stringify({
      parent: { database_id: NOTION_DB },
      properties: {
        Nome: { title: [{ text: { content: r.nome } }] },
        Email: { email: r.email },
        Azienda: { rich_text: r.azienda ? [{ text: { content: r.azienda } }] : [] },
        Puntata: { rich_text: [{ text: { content: NEXT_EPISODE.title } }] },
        "Data puntata": { date: { start: NEXT_EPISODE.startsAt } },
        "Avvisi prossime puntate": { checkbox: r.aggiornamenti },
        "Consenso privacy": { checkbox: true },
        Presenza: { select: { name: "Iscritto" } },
      },
    }),
  });
  if (!res.ok) throw new Error(`Notion ${res.status}: ${await res.text()}`);
  return true;
}

async function sendEmail(key: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

function confirmationHtml(nome: string) {
  const btn = (href: string, label: string, primary = false) =>
    `<a href="${href}" style="display:inline-block;margin:0 8px 8px 0;padding:12px 18px;font-family:monospace;font-size:12px;letter-spacing:0.08em;text-decoration:none;${
      primary ? "background:#EC4899;color:#000" : "border:1px solid #000;color:#000"
    }">${label}</a>`;
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111">
    <div style="border-top:1px solid #000;border-bottom:1px solid #000;padding:14px 0;margin-bottom:24px;font-family:monospace;font-size:11px;letter-spacing:0.12em;color:#BE185D">
      VENTURO CONVERSATION · ISCRIZIONE CONFERMATA
    </div>
    <p style="font-size:16px;line-height:1.6">Ciao ${html(nome)},</p>
    <p style="font-size:16px;line-height:1.6">ti aspettiamo alla prossima Venturo Conversation.</p>
    <h1 style="font-size:24px;line-height:1.25;margin:24px 0 8px">${html(NEXT_EPISODE.title)}</h1>
    <p style="font-size:15px;line-height:1.6;color:#444;margin:0 0 4px">Con ${html(NEXT_EPISODE.guest.name)}, ${html(NEXT_EPISODE.guest.role)}</p>
    <p style="font-size:15px;line-height:1.6;color:#444;margin:0 0 24px">${html(whenLabel())} · online, su Google Meet</p>
    ${btn(JOIN_URL, "ENTRA SU GOOGLE MEET", true)}
    <p style="font-size:14px;line-height:1.6;color:#444;margin:20px 0 8px">Aggiungila al calendario:</p>
    ${btn(googleCalendarUrl(), "GOOGLE CALENDAR")}${btn(outlookCalendarUrl(), "OUTLOOK")}
    <p style="font-size:13px;line-height:1.6;color:#666;margin:8px 0 0">In allegato trovi anche l'invito (.ics) per Apple Calendar e gli altri calendari.</p>
    <p style="font-size:14px;line-height:1.6;color:#444;margin:28px 0 0">Il link della stanza: <a href="${JOIN_URL}" style="color:#BE185D">${JOIN_URL}</a></p>
    <p style="font-size:14px;line-height:1.6;color:#444">È una conversazione, non un webinar: se vuoi puoi aprire il microfono e dire la tua.</p>
    <p style="font-size:14px;line-height:1.6;color:#444;margin-top:28px">A presto,<br>Rosario Carnovale e Massimo Benedetti<br><a href="https://venturoconsulting.it/venturo-conversation" style="color:#111">Venturo</a></p>
  </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const nome = String(body.nome ?? "").trim().slice(0, 80);
    const email = String(body.email ?? "").trim().toLowerCase().slice(0, 120);
    const azienda = String(body.azienda ?? "").trim().slice(0, 120);
    const consenso = body.consenso === true;
    const aggiornamenti = body.aggiornamenti === true;

    // Campo nascosto: lo compilano solo i bot
    if (body.website) return NextResponse.json({ ok: true, join: JOIN_URL, google: googleCalendarUrl(), outlook: outlookCalendarUrl() });

    if (!nome || !EMAIL_RE.test(email)) return NextResponse.json({ error: "Servono nome e un indirizzo email valido." }, { status: 400 });
    if (!consenso) return NextResponse.json({ error: "Serve il consenso all'informativa privacy." }, { status: 400 });
    if (Date.now() > Date.parse(NEXT_EPISODE.endsAt))
      return NextResponse.json({ error: "Questa puntata è già andata in onda. La prossima arriva presto." }, { status: 410 });

    // Prima il registro: se poi la mail fallisce, l'iscrizione resta tracciata
    let saved = false;
    try {
      saved = await saveToNotion({ nome, email, azienda, aggiornamenti });
    } catch (e) {
      console.error("Iscritto non salvato su Notion", e);
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) return NextResponse.json({ error: "Invio email non configurato." }, { status: 500 });

    await sendEmail(key, {
      from: "Venturo Conversation <info@venturoconsulting.it>",
      to: [email],
      reply_to: "info@venturoconsulting.it",
      subject: `Ci vediamo ${whenLabel().split(",")[0]}: ${NEXT_EPISODE.title}`,
      html: confirmationHtml(nome),
      attachments: [
        {
          filename: "venturo-conversation.ics",
          content: Buffer.from(inviteIcs({ name: nome, email })).toString("base64"),
          content_type: "text/calendar; method=REQUEST",
        },
      ],
    });

    // La notifica non deve far fallire l'iscrizione
    try {
      await sendEmail(key, {
        from: "Venturo Conversation <info@venturoconsulting.it>",
        to: NOTIFY_TO,
        subject: `Nuovo iscritto: ${nome}${azienda ? ` (${azienda})` : ""}`,
        html: `<p><strong>${html(nome)}</strong> &lt;${html(email)}&gt;</p>
               <p>Azienda: ${html(azienda || "-")}</p>
               <p>Vuole essere avvisato delle prossime puntate: <strong>${aggiornamenti ? "sì" : "no"}</strong></p>
               <p>Puntata: ${html(NEXT_EPISODE.title)} (${html(whenLabel())})</p>
               <p style="color:#888">Registro Notion: ${saved ? "salvato" : "NON salvato, aggiungerlo a mano"}</p>`,
      });
    } catch (e) {
      console.error("Notifica iscrizione non inviata", e);
    }

    return NextResponse.json({
      ok: true,
      join: JOIN_URL,
      google: googleCalendarUrl(),
      outlook: outlookCalendarUrl(),
      ics: inviteIcs({ name: nome, email }),
    });
  } catch (e) {
    console.error("Iscrizione Venturo Conversation", e);
    return NextResponse.json({ error: "Non siamo riusciti a completare l'iscrizione. Riprova o scrivici a info@venturoconsulting.it." }, { status: 500 });
  }
}
