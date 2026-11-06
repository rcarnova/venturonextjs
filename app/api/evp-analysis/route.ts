import { NextRequest, NextResponse } from "next/server";

/**
 * Analisi EVP (pagine /analisi-evp e /en/evp-analysis).
 *
 * Prima l'analisi la faceva una funzione Supabase del vecchio progetto Lovable,
 * che a novembre 2026 rispondeva sempre con errore. Ora gira qui:
 * 1. legge career page e job post e chiede l'analisi al modello
 * 2. se l'utente ha lasciato l'email, gliela manda
 * 3. avvisa info@ di ogni analisi, con testi, risultato ed email
 */

const NOTIFY_TO = ["info@venturoconsulting.it"];
const MODEL = "claude-sonnet-4-6";

const PROMPT_IT = `Sei un consulente senior di Venturo, boutique italiana di cultura organizzativa ed employer branding. Il metodo di Venturo si chiama Lumen: fa emergere la cultura reale di un'organizzazione partendo dalle persone, non dai testi.

Ricevi il testo di una career page e, a volte, di un annuncio di lavoro. Leggili come li leggerebbe un candidato esterno, che non conosce l'azienda e si costruisce un'idea solo da quello che trova online.

Guarda tre cose: quanto è riconoscibile l'identità dell'organizzazione, quanto è coerente il tono tra career page e annuncio, quale profilo motivazionale viene attratto, anche senza volerlo.

Scrivi in italiano, in Markdown, esattamente con questa struttura:

## Come viene percepita la vostra identità
Un paragrafo. Cosa arriva a un candidato, con riferimenti concreti a parole o frasi dei testi.

## Le domande che vale la pena farsi
Un paragrafo con due o tre domande vere, che chi legge può portare in una riunione.

## Uno spunto che potrebbe valere una conversazione
Un paragrafo breve. Una tensione o un'opportunità, formulata come ipotesi.

*Questa è una lettura di superficie. Quello che Lumen fa è più profondo: parte dalle persone, non dai testi.*

Regole:
- tono diretto e riflessivo, mai giudicante; formula le criticità come ipotesi ("vale la pena chiedersi se")
- niente gergo HR generico, niente elenchi puntati, niente lineette lunghe
- se c'è solo la career page, lavora su quella e non inventare l'annuncio
- non nominare Venturo nel testo, salvo nella riga finale in corsivo
- se il testo non è una career page o un annuncio, dillo in una frase gentile e chiedi di incollare il testo giusto, senza le sezioni`;

const PROMPT_EN = `You are a senior consultant at Venturo, an Italian boutique consultancy on organizational culture and employer branding. Venturo's method is called Lumen: it brings out an organization's real culture starting from people, not from texts.

You receive the text of a careers page and, sometimes, a job post. Read them as an outside candidate would, someone who does not know the company and builds an impression only from what they find online.

Look at three things: how recognizable the organization's identity is, how consistent the tone is between careers page and job post, and which motivational profile the writing attracts, even unintentionally.

Write in English, in Markdown, with exactly this structure:

## How your identity comes across
One paragraph. What reaches a candidate, with concrete references to words or phrases in the texts.

## Questions worth asking
One paragraph with two or three real questions the reader can bring to a meeting.

## A thought worth a conversation
One short paragraph. A tension or an opportunity, framed as a hypothesis.

*This is a surface reading. What Lumen does goes deeper: it starts from people, not from texts.*

Rules:
- direct and reflective tone, never judgmental; frame issues as hypotheses ("it may be worth asking whether")
- no generic HR jargon, no bullet lists, no em dashes
- if there is only the careers page, work on that and do not invent the job post
- do not mention Venturo except in the final italic line
- if the text is not a careers page or job post, say so in one kind sentence and ask for the right text, without the sections`;

const html = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const excerpt = (s: string, n: number) => (s.length > n ? `${s.slice(0, n).trim()}…` : s);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Markdown minimo dell'analisi (titoli ##, corsivo, paragrafi) in HTML per le mail */
function analysisHtml(md: string) {
  return md
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("## "))
        return `<h2 style="font-size:16px;margin:24px 0 8px;padding-left:10px;border-left:3px solid #E1FF00">${html(block.slice(3))}</h2>`;
      const text = html(block).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em style=\"color:#888\">$1</em>");
      return `<p style="margin:0 0 14px">${text.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}

async function sendEmail(payload: Record<string, unknown>) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY mancante");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

function userEmailHtml(analysis: string, lang: "it" | "en") {
  const t =
    lang === "en"
      ? {
          head: "EVP ANALYSIS",
          ready: "Your analysis is ready.",
          intro: "Below is a first reading of how your organization communicates its identity as an employer, based on the texts you shared.",
          cta: "If one of these observations hit the mark, it is worth talking about. A 30-minute conversation is enough to understand whether and how we can help.",
          btn: "Let's talk →",
          link: "https://venturoconsulting.it/en#contact",
          sign: "Rosario and the Venturo team",
          why: "You received this email because you used the EVP analysis tool on venturoconsulting.it.",
        }
      : {
          head: "ANALISI EVP",
          ready: "La tua analisi è pronta.",
          intro: "Qui sotto trovi una prima lettura di come la vostra organizzazione comunica la propria identità come employer, nei testi che avete condiviso.",
          cta: "Se una di queste osservazioni ha colpito nel segno, vale la pena parlarne. Una conversazione di 30 minuti basta per capire se e come possiamo aiutarvi.",
          btn: "Parliamone →",
          link: "https://venturoconsulting.it/#contact",
          sign: "Rosario e il team Venturo",
          why: "Hai ricevuto questa email perché hai usato lo strumento di analisi EVP su venturoconsulting.it.",
        };
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111;font-size:15px;line-height:1.6">
    <p style="font-family:monospace;font-size:11px;letter-spacing:0.12em;color:#888;margin:0 0 16px">${t.head}</p>
    <p style="font-size:20px;font-weight:bold;margin:0 0 8px">${t.ready}</p>
    <p style="color:#444;margin:0 0 24px">${t.intro}</p>
    <div style="border-left:3px solid #E1FF00;padding-left:16px">${analysisHtml(analysis)}</div>
    <p style="color:#444;margin:28px 0 16px">${t.cta}</p>
    <a href="${t.link}" style="display:inline-block;padding:12px 20px;background:#FF006E;color:#fff;text-decoration:none;font-weight:bold;border-radius:6px">${t.btn}</a>
    <p style="margin:28px 0 0">${t.sign}<br><a href="https://venturoconsulting.it" style="color:#111">venturoconsulting.it</a></p>
    <p style="font-size:12px;color:#999;margin-top:28px">${t.why}</p>
  </div>`;
}

function notifyHtml(p: { careerPage: string; jobPost: string; email?: string; lang: string; analysis: string; emailSent: boolean }) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:680px;color:#111;font-size:14px;line-height:1.6">
    <p><strong>Qualcuno ha usato l'Analisi EVP</strong> (${p.lang === "en" ? "versione inglese" : "versione italiana"}).</p>
    <p>Email: <strong>${p.email ? html(p.email) : "non lasciata"}</strong>${p.email ? ` (analisi ${p.emailSent ? "inviata" : "NON inviata"})` : ""}<br>
       Job post: ${p.jobPost ? "sì" : "no"} · Lunghezza testi: ${p.careerPage.length + p.jobPost.length} caratteri</p>
    <h3 style="margin:24px 0 8px">Career page (inizio)</h3>
    <p style="white-space:pre-wrap;color:#444;border-left:3px solid #ddd;padding-left:12px">${html(excerpt(p.careerPage, 1200))}</p>
    ${p.jobPost ? `<h3 style="margin:24px 0 8px">Job post (inizio)</h3>
    <p style="white-space:pre-wrap;color:#444;border-left:3px solid #ddd;padding-left:12px">${html(excerpt(p.jobPost, 800))}</p>` : ""}
    <h3 style="margin:24px 0 8px">Analisi restituita</h3>
    <div style="border-left:3px solid #E1FF00;padding-left:12px">${analysisHtml(p.analysis)}</div>
    ${p.email ? `<p style="color:#888">Rispondendo a questa mail scrivi direttamente a ${html(p.email)}.</p>` : ""}
  </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const careerPage = String(body.careerPage ?? "").trim();
    const jobPost = String(body.jobPost ?? "").trim();
    const rawEmail = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 120) : "";
    const email = EMAIL_RE.test(rawEmail) ? rawEmail : undefined;
    const lang: "it" | "en" = body.lang === "en" ? "en" : "it";
    const err = (it: string, en: string, status = 400) => NextResponse.json({ error: lang === "en" ? en : it }, { status });

    const total = careerPage.length + jobPost.length;
    if (!careerPage) return err("Incolla il testo della career page per procedere.", "Paste the careers page text to continue.");
    if (total < 200) return err("Il testo è troppo breve per un'analisi utile.", "The text is too short for a useful analysis.");
    if (total > 12000) return err("Il testo è troppo lungo.", "The text is too long.");

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return err("Analisi non disponibile al momento.", "Analysis is not available right now.", 500);

    const userText =
      (lang === "en" ? "CAREERS PAGE:\n" : "CAREER PAGE:\n") +
      careerPage +
      (jobPost ? (lang === "en" ? "\n\nJOB POST:\n" : "\n\nANNUNCIO DI LAVORO:\n") + jobPost : "");

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1200,
        system: lang === "en" ? PROMPT_EN : PROMPT_IT,
        messages: [{ role: "user", content: userText }],
      }),
    });
    if (!res.ok) {
      console.error("Analisi EVP, modello", res.status, await res.text());
      return err("Si è verificato un errore. Riprova tra poco.", "Something went wrong. Please try again shortly.", 502);
    }
    const data = await res.json();
    const analysis: string = (data.content ?? [])
      .filter((b: { type: string }) => b.type === "text")
      .map((b: { text: string }) => b.text)
      .join("\n")
      .trim();
    if (!analysis) return err("Si è verificato un errore. Riprova tra poco.", "Something went wrong. Please try again shortly.", 502);

    // Mail all'utente, se l'ha chiesta. Non deve far fallire l'analisi.
    let emailSent = false;
    if (email) {
      try {
        await sendEmail({
          from: "Rosario di Venturo <rosario@venturoconsulting.it>",
          to: [email],
          reply_to: "info@venturoconsulting.it",
          subject: lang === "en" ? "Your EVP analysis is ready" : "La tua analisi EVP è pronta",
          html: userEmailHtml(analysis, lang),
        });
        emailSent = true;
      } catch (e) {
        console.error("Mail analisi EVP non inviata", e);
      }
    }

    // Avviso a Venturo
    try {
      const firstLine = careerPage.split("\n").map((l) => l.trim()).find(Boolean) ?? "";
      await sendEmail({
        from: "Venturo <info@venturoconsulting.it>",
        to: NOTIFY_TO,
        ...(email ? { reply_to: email } : {}),
        subject: `Nuova analisi EVP${email ? ` da ${email}` : ""}: ${excerpt(firstLine, 60)}`,
        html: notifyHtml({ careerPage, jobPost, email, lang, analysis, emailSent }),
      });
    } catch (e) {
      console.error("Avviso analisi EVP non inviato", e);
    }

    return NextResponse.json({ analysis });
  } catch (e) {
    console.error("Analisi EVP", e);
    return NextResponse.json({ error: "Si è verificato un errore. Riprova tra poco." }, { status: 500 });
  }
}
