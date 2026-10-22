/**
 * Genera il file .ics per la prossima Venturo Conversation.
 *
 *   node scripts/build-ics.mjs
 *
 * Legge i dati da lib/venturo-conversation.ts, quindi dopo aver cambiato
 * puntata basta rilanciarlo. Le righe vanno piegate a 75 ottetti e virgole,
 * punti e virgola e backslash vanno sfuggiti: un .ics malformato non da
 * errore, semplicemente non si apre nel calendario.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "lib/venturo-conversation.ts"), "utf8");

// Si cerca solo dentro il blocco NEXT_EPISODE: PAST_EPISODES contiene campi
// con gli stessi nomi (title, name, role) e un match globale prenderebbe
// quelli della puntata sbagliata senza dare errore.
const blockStart = src.indexOf("export const NEXT_EPISODE");
const blockEnd = src.indexOf("export const PAST_EPISODES");
if (blockStart === -1) throw new Error("NEXT_EPISODE non trovato in lib/venturo-conversation.ts");
const block = src.slice(blockStart, blockEnd === -1 ? undefined : blockEnd);

const pick = (key) => {
  const m = block.match(new RegExp(`${key}:\\s*"([^"]+)"`));
  if (!m) throw new Error(`campo mancante in NEXT_EPISODE: ${key}`);
  return m[1];
};

const title    = pick("title");
const startsAt = pick("startsAt");
const endsAt   = pick("endsAt");
const place    = pick("place");
const regUrl   = src.match(/REGISTRATION_URL\s*=\s*\n?\s*"([^"]+)"/)[1];
const guest    = { name: pick("name"), role: pick("role") };

const utc = (iso) =>
  new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/;/g, "\;").replace(/,/g, "\\,");

// piegatura a 75 ottetti, continuazione con uno spazio iniziale
const fold = (line) => {
  const out = [];
  let buf = line;
  while (Buffer.byteLength(buf, "utf8") > 75) {
    let cut = 75;
    while (Buffer.byteLength(buf.slice(0, cut), "utf8") > 75) cut--;
    out.push(buf.slice(0, cut));
    buf = " " + buf.slice(cut);
  }
  out.push(buf);
  return out.join("\r\n");
};

// L'a capo si inserisce DOPO l'escape: esc() raddoppia i backslash, quindi
// scriverlo prima produrrebbe \\n, che i calendari mostrano come testo.
const NL = "\u0000";
const description = esc(
  `Ne parliamo con ${guest.name}, ${guest.role}. ` +
  `Host: Rosario Carnovale e Massimo Benedetti, Venturo.${NL}${NL}` +
  `Iscrizione: ${regUrl}`
).split(NL).join("\\n");

const lines = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Venturo//Venturo Conversation//IT",
  "CALSCALE:GREGORIAN",
  "METHOD:PUBLISH",
  "BEGIN:VEVENT",
  `UID:venturo-conversation-${startsAt.slice(0, 10)}@venturoconsulting.it`,
  `DTSTAMP:${utc(new Date().toISOString())}`,
  `DTSTART:${utc(startsAt)}`,
  `DTEND:${utc(endsAt)}`,
  fold(`SUMMARY:Venturo Conversation: ${esc(title)}`),
  fold(`DESCRIPTION:${description}`),
  fold(`URL:${regUrl}`),
  `LOCATION:${esc(place)}`,
  "END:VEVENT",
  "END:VCALENDAR",
];

// il nome del file arriva da CALENDAR_URL: cosi cambiare puntata resta
// una sola modifica in lib/venturo-conversation.ts
const calUrl = src.match(/CALENDAR_URL\s*=\s*"([^"]+)"/)[1];
const out = join(root, "public", calUrl.replace(/^\//, ""));
writeFileSync(out, lines.join("\r\n") + "\r\n", "utf8");
console.log(`scritto ${out}`);
