import { NEXT_EPISODE } from "@/lib/venturo-conversation";

/**
 * Link e file calendario della prossima Venturo Conversation.
 * Il link di Meet non sta nelle pagine pubbliche: arriva a chi si iscrive,
 * nella mail di conferma e nella pagina di ringraziamento.
 */

/** Stanza Google Meet della prossima puntata (Zoom dava problemi). */
export const JOIN_URL = "https://meet.google.com/vrw-ryte-siy";

const utc = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const title = `Venturo Conversation: ${NEXT_EPISODE.title}`;
const details =
  `Ne parliamo con ${NEXT_EPISODE.guest.name}, ${NEXT_EPISODE.guest.role}. ` +
  `Host: Rosario Carnovale e Massimo Benedetti, Venturo.\n\nPartecipa su Google Meet: ${JOIN_URL}`;

export const googleCalendarUrl = () =>
  "https://calendar.google.com/calendar/render?" +
  new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${utc(NEXT_EPISODE.startsAt)}/${utc(NEXT_EPISODE.endsAt)}`,
    details,
    location: JOIN_URL,
  }).toString();

export const outlookCalendarUrl = () =>
  "https://outlook.office.com/calendar/0/deeplink/compose?" +
  new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
    startdt: new Date(NEXT_EPISODE.startsAt).toISOString(),
    enddt: new Date(NEXT_EPISODE.endsAt).toISOString(),
    body: details,
    location: JOIN_URL,
  }).toString();

const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

/** Piegatura a 75 ottetti come chiede lo standard iCalendar. */
const fold = (line: string) => {
  const out: string[] = [];
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

/**
 * Invito .ics allegato alla mail. METHOD:REQUEST con l'iscritto come
 * partecipante: Gmail e Outlook lo mostrano come invito da accettare.
 */
export function inviteIcs(attendee: { name: string; email: string }) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Venturo//Venturo Conversation//IT",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:venturo-conversation-${NEXT_EPISODE.startsAt.slice(0, 10)}@venturoconsulting.it`,
    `DTSTAMP:${utc(new Date().toISOString())}`,
    `DTSTART:${utc(NEXT_EPISODE.startsAt)}`,
    `DTEND:${utc(NEXT_EPISODE.endsAt)}`,
    fold(`SUMMARY:${esc(title)}`),
    fold(`DESCRIPTION:${esc(details)}`),
    fold(`LOCATION:${JOIN_URL}`),
    fold(`URL:${JOIN_URL}`),
    "ORGANIZER;CN=Venturo:mailto:info@venturoconsulting.it",
    fold(`ATTENDEE;CN=${esc(attendee.name)};ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${attendee.email}`),
    "SEQUENCE:1",
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Venturo Conversation tra 15 minuti",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n") + "\r\n";
}
