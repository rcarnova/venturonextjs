"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

/**
 * Simulatore del costo del turnover (IT /simulatore-turnover, EN /en/turnover-calculator).
 *
 * Modello trasparente, dalla ricerca di Ros (novembre 2026):
 *   costo per uscita = recruiting e onboarding (% RAL)
 *                    + posto scoperto (RAL/52 × settimane)
 *                    + rampa (RAL/52 × settimane × quota di produttività mancante)
 * Tre scenari: conservativo (solo recruiting e onboarding), realistico (+ posto
 * scoperto e rampa), completo (forbice, non un numero: know-how, colleghi, altre uscite).
 * Tutte le ipotesi sono modificabili. Niente moltiplicatori di ROI inventati:
 * il confronto è con un budget di progetto che inserisce chi usa lo strumento.
 */

type Lang = "it" | "en";

const T = {
  it: {
    eyebrow: "Strumento gratuito",
    h1: "Quanto costa davvero perdere una persona?",
    lead: "Inserite i vostri dati e cambiate le ipotesi quando le conoscete meglio di noi. Il simulatore mostra il costo del turnover in tre scenari, dal più prudente al più completo.",
    data: "I vostri dati",
    headcount: "Organico medio",
    headcountHint: "Media tra dipendenti a inizio e a fine anno.",
    leavers: "Persone uscite in un anno",
    rate: (r: string) => `Turnover del ${r}%`,
    salary: "RAL media dei ruoli che escono",
    assumptions: "Le vostre ipotesi",
    assumptionsLead: "I valori di partenza sono stime prudenti per ruoli operativi e di staff. Se avete dati vostri, usateli.",
    recruiting: "Recruiting, selezione e onboarding",
    recruitingHint: "Annunci, eventuale agenzia, colloqui, ore di HR e manager, attrezzature, formazione iniziale.",
    pctRal: "% della RAL",
    vacancy: "Settimane di posto scoperto",
    vacancyHint: "Dal giorno dell'uscita all'arrivo del sostituto.",
    weeks: "settimane",
    ramp: "Settimane per arrivare a piena produttività",
    rampHint: "Il periodo di inserimento del nuovo assunto.",
    rampProd: "Produttività media durante l'inserimento",
    perLeaver: "Costo per ogni persona che esce",
    rows: {
      recruiting: "Recruiting, selezione e onboarding",
      vacancy: "Posto scoperto",
      ramp: "Produttività mancante durante l'inserimento",
    },
    of: "della RAL",
    scenarios: "Il costo in un anno",
    cons: "Conservativo",
    consText: "Solo i costi che generano una fattura o ore registrate: recruiting, selezione, onboarding.",
    real: "Realistico",
    realText: "Il conservativo più il posto scoperto e l'inserimento. È lo scenario da usare in un business case.",
    full: "Completo",
    fullText: "Il realistico più know-how perso, carico sui colleghi, errori e rischio di altre uscite. Non c'è un dato unico: le stime arrivano al 100–150% della RAL per ruoli qualificati o manageriali.",
    fullRange: (a: string, b: string) => `da ${a} a ${b}`,
    fullNote: "se i ruoli che escono sono qualificati o manageriali",
    perYear: (n: number) => `${n} ${n === 1 ? "uscita" : "uscite"} all'anno`,
    each: "ciascuna",
    budgetTitle: "Quanto vale trattenere qualcuno",
    budgetLabel: "Budget di un progetto su cultura, manager o retention",
    budgetSentence: (b: string, n: number) =>
      `Un progetto da ${b} si ripaga evitando ${n} ${n === 1 ? "uscita" : "uscite"} in un anno`,
    budgetOf: (l: number) => ` (oggi ne avete ${l}).`,
    budgetCons: (n: number) => `Con lo scenario conservativo ne servirebbero ${n}.`,
    perPerson: (v: string) => `Ogni persona che resta invece di uscire vale circa ${v} nello scenario realistico.`,
    cta: "I numeri dicono dove guardare. Perché le persone se ne vanno lo dicono le persone.",
    ctaLink: "Parliamone →",
    ctaHref: "/#contact",
    read: { text: "Perché in Italia le persone lasciano il lavoro:", label: "Le dimissioni si sentono prima di arrivare", href: "/magazine/le-dimissioni-si-sentono-prima" } as { text: string; label: string; href: string } | null,
    method: "Come vengono calcolati i costi",
    methodText: [
      "Il costo di una settimana di lavoro è la RAL divisa per 52. Il posto scoperto vale le settimane senza nessuno nel ruolo. L'inserimento vale le settimane di rampa per la quota di produttività che manca. Recruiting e onboarding sono una percentuale della RAL.",
      "Usiamo la RAL come misura del valore del lavoro perso: è una stima prudente, perché quello che una persona produce di solito vale più del suo costo.",
      "Le stime italiane collocano il costo reale di un'uscita tra il 30% e il 50% della RAL. Secondo la ricerca Adecco–Jobpricing, la sola vacancy pesa in media il 26% della RAL, circa 15.000 euro. Per ruoli qualificati e manageriali il costo può arrivare al 100–150%.",
    ],
    sources: "Fonti: Adecco Group e Jobpricing, stime su costo della vacancy e del turnover in Italia; letteratura HR su costi diretti, vacancy e curva di inserimento.",
  },
  en: {
    eyebrow: "Free tool",
    h1: "What does losing one person really cost?",
    lead: "Enter your data and change the assumptions when you know them better than we do. The calculator shows the cost of turnover in three scenarios, from the most prudent to the most complete.",
    data: "Your data",
    headcount: "Average headcount",
    headcountHint: "Average of employees at the start and end of the year.",
    leavers: "People who left in one year",
    rate: (r: string) => `${r}% turnover`,
    salary: "Average gross annual salary of leaving roles",
    assumptions: "Your assumptions",
    assumptionsLead: "The starting values are prudent estimates for operational and staff roles. If you have your own data, use it.",
    recruiting: "Recruiting, selection and onboarding",
    recruitingHint: "Job ads, agency if any, interviews, HR and manager hours, equipment, initial training.",
    pctRal: "% of salary",
    vacancy: "Weeks the role stays vacant",
    vacancyHint: "From the day someone leaves to the day the replacement starts.",
    weeks: "weeks",
    ramp: "Weeks to reach full productivity",
    rampHint: "The new hire's onboarding period.",
    rampProd: "Average productivity during onboarding",
    perLeaver: "Cost of each person who leaves",
    rows: {
      recruiting: "Recruiting, selection and onboarding",
      vacancy: "Vacant role",
      ramp: "Lost productivity during onboarding",
    },
    of: "of salary",
    scenarios: "The cost over one year",
    cons: "Conservative",
    consText: "Only costs that produce an invoice or logged hours: recruiting, selection, onboarding.",
    real: "Realistic",
    realText: "Conservative plus vacancy and onboarding. This is the scenario to use in a business case.",
    full: "Complete",
    fullText: "Realistic plus lost know-how, extra load on colleagues, mistakes and the risk of further departures. There is no single figure: estimates reach 100–150% of salary for skilled or managerial roles.",
    fullRange: (a: string, b: string) => `from ${a} to ${b}`,
    fullNote: "if the roles leaving are skilled or managerial",
    perYear: (n: number) => `${n} ${n === 1 ? "departure" : "departures"} a year`,
    each: "each",
    budgetTitle: "What keeping someone is worth",
    budgetLabel: "Budget of a culture, manager or retention project",
    budgetSentence: (b: string, n: number) =>
      `A ${b} project pays for itself by avoiding ${n} ${n === 1 ? "departure" : "departures"} in a year`,
    budgetOf: (l: number) => ` (you currently have ${l}).`,
    budgetCons: (n: number) => `Under the conservative scenario it would take ${n}.`,
    perPerson: (v: string) => `Each person who stays instead of leaving is worth about ${v} in the realistic scenario.`,
    cta: "Numbers show where to look. Why people leave, only people can tell.",
    ctaLink: "Let's talk →",
    ctaHref: "/en#contact",
    read: null as { text: string; label: string; href: string } | null,
    method: "How the costs are calculated",
    methodText: [
      "One week of work is the annual salary divided by 52. Vacancy is the weeks with nobody in the role. Onboarding is the ramp-up weeks times the share of productivity that is missing. Recruiting and onboarding are a percentage of salary.",
      "We use salary as a measure of the value of lost work: it is a prudent estimate, since what a person produces is usually worth more than what they cost.",
      "Italian estimates put the real cost of a departure between 30% and 50% of annual salary. According to Adecco–Jobpricing research, vacancy alone averages 26% of salary, about €15,000. For skilled and managerial roles the cost can reach 100–150%.",
    ],
    sources: "Sources: Adecco Group and Jobpricing, estimates on the cost of vacancy and turnover in Italy; HR literature on direct costs, vacancy and ramp-up curves.",
  },
} as const;

/** Migliaia sempre separate: in italiano toLocaleString lascia "4154" senza punto */
const group = (n: number, sep: string) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const fmt = (lang: Lang) => (n: number) => (lang === "it" ? `${group(n, ".")} €` : `€${group(n, ",")}`);

/** Legge un numero scritto all'italiana (30.000 / 12,5) o all'inglese (30,000 / 12.5) */
const parseNum = (lang: Lang) => (s: string) => {
  const clean = lang === "it" ? String(s).replace(/\./g, "").replace(",", ".") : String(s).replace(/,/g, "");
  const v = Number(clean.trim());
  return Number.isFinite(v) ? v : 0;
};

/** Campo numerico che lascia scrivere liberamente: il valore si legge, non si forza */
function Field({
  label,
  hint,
  value,
  onChange,
  suffix,
  prefix,
  width = "w-36",
  extra,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  prefix?: string;
  width?: string;
  extra?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-foreground font-semibold text-sm mb-2 block">{label}</span>
      <span className="flex items-center gap-2 flex-wrap">
        {prefix && <span className="text-muted-foreground text-sm font-mono">{prefix}</span>}
        <input
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${width} h-10 rounded-md border border-input bg-background px-3 text-base md:text-sm tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
        />
        {suffix && <span className="text-muted-foreground text-sm">{suffix}</span>}
        {extra}
      </span>
      {hint && <span className="text-xs text-muted-foreground mt-1.5 block">{hint}</span>}
    </label>
  );
}

export default function SimulatoreTurnover({ lang = "it" }: { lang?: Lang }) {
  const t = T[lang];
  const eur = fmt(lang);
  const num = parseNum(lang);
  const decimal = (n: number) => n.toLocaleString(lang === "it" ? "it-IT" : "en-GB", { maximumFractionDigits: 1 });

  const [headcount, setHeadcount] = useState("100");
  const [leavers, setLeavers] = useState("10");
  const [salary, setSalary] = useState(lang === "it" ? "30.000" : "30,000");
  const [recruitingPct, setRecruitingPct] = useState("15");
  const [vacancyWeeks, setVacancyWeeks] = useState("8");
  const [rampWeeks, setRampWeeks] = useState("12");
  const [rampProd, setRampProd] = useState("50");
  const [budget, setBudget] = useState(lang === "it" ? "25.000" : "25,000");

  const r = useMemo(() => {
    const H = Math.max(1, num(headcount));
    const L = Math.max(0, Math.round(num(leavers)));
    const RAL = Math.max(0, num(salary));
    const week = RAL / 52;
    const recruiting = (RAL * Math.max(0, num(recruitingPct))) / 100;
    const vacancy = week * Math.max(0, num(vacancyWeeks));
    const ramp = week * Math.max(0, num(rampWeeks)) * (1 - Math.min(100, Math.max(0, num(rampProd))) / 100);
    const cons = recruiting;
    const real = recruiting + vacancy + ramp;
    const B = Math.max(0, num(budget));
    return {
      H,
      L,
      RAL,
      rate: (L / H) * 100,
      recruiting,
      vacancy,
      ramp,
      cons,
      real,
      realPct: RAL ? (real / RAL) * 100 : 0,
      consYear: cons * L,
      realYear: real * L,
      fullLow: Math.max(real, RAL) * L,
      fullHigh: Math.max(real, RAL * 1.5) * L,
      B,
      payback: real > 0 ? Math.max(1, Math.ceil(B / real)) : 0,
      paybackCons: cons > 0 ? Math.max(1, Math.ceil(B / cons)) : 0,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headcount, leavers, salary, recruitingPct, vacancyWeeks, rampWeeks, rampProd, budget]);

  const big = { fontFamily: "'Space Grotesk', system-ui, sans-serif" };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-20 px-4">
        <div className="mx-auto max-w-[720px]">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{t.eyebrow}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.h1}</h1>
          <p className="text-lg text-muted-foreground/80 mb-12 leading-relaxed max-w-xl">{t.lead}</p>

          {/* Dati */}
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">{t.data}</p>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <Field label={t.headcount} hint={t.headcountHint} value={headcount} onChange={setHeadcount} width="w-28" />
            <Field
              label={t.leavers}
              value={leavers}
              onChange={setLeavers}
              width="w-24"
              extra={<span className="text-sm text-muted-foreground">= {t.rate(decimal(r.rate))}</span>}
            />
            <Field label={t.salary} value={salary} onChange={setSalary} prefix="€" width="w-36" />
          </div>

          {/* Ipotesi */}
          <div className="rounded-xl border border-border/60 bg-muted/20 p-6 md:p-8 mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{t.assumptions}</p>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{t.assumptionsLead}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label={t.recruiting} hint={t.recruitingHint} value={recruitingPct} onChange={setRecruitingPct} suffix={t.pctRal} width="w-20" />
              <Field label={t.vacancy} hint={t.vacancyHint} value={vacancyWeeks} onChange={setVacancyWeeks} suffix={t.weeks} width="w-20" />
              <Field label={t.ramp} hint={t.rampHint} value={rampWeeks} onChange={setRampWeeks} suffix={t.weeks} width="w-20" />
              <Field label={t.rampProd} value={rampProd} onChange={setRampProd} suffix="%" width="w-20" />
            </div>
          </div>

          {/* Costo per uscita */}
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">{t.perLeaver}</p>
          <div className="mb-14">
            {[
              { label: t.rows.recruiting, value: r.recruiting },
              { label: t.rows.vacancy, value: r.vacancy },
              { label: t.rows.ramp, value: r.ramp },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-3 border-t border-foreground/10 gap-4">
                <span className="text-sm text-foreground/80">{row.label}</span>
                <span className="font-mono text-sm tabular-nums shrink-0">{eur(row.value)}</span>
              </div>
            ))}
            <div className="flex justify-between items-baseline py-4 border-t-2 border-foreground gap-4">
              <span className="font-semibold">{t.real}</span>
              <span className="text-right">
                <span className="font-mono font-bold text-xl tabular-nums block">{eur(r.real)}</span>
                <span className="text-xs text-muted-foreground">
                  {decimal(r.realPct)}% {t.of}
                </span>
              </span>
            </div>
          </div>

          {/* Tre scenari */}
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{t.scenarios}</p>
          <p className="text-sm text-muted-foreground mb-5">{t.perYear(r.L)}</p>
          <div className="grid md:grid-cols-3 gap-4 mb-14">
            <div className="rounded-lg border border-border/60 p-5 flex flex-col">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">{t.cons}</p>
              <p className="text-3xl font-bold tabular-nums mb-1" style={big}>{eur(r.consYear)}</p>
              <p className="text-xs text-muted-foreground mb-4">{eur(r.cons)} {t.each}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-auto">{t.consText}</p>
            </div>
            <div className="rounded-lg p-5 flex flex-col" style={{ backgroundColor: "rgba(225, 255, 0, 0.14)", borderLeft: "3px solid #E1FF00" }}>
              <p className="text-xs font-mono uppercase tracking-widest text-foreground mb-3">{t.real}</p>
              <p className="text-3xl font-bold tabular-nums mb-1" style={big}>{eur(r.realYear)}</p>
              <p className="text-xs text-muted-foreground mb-4">{eur(r.real)} {t.each}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-auto">{t.realText}</p>
            </div>
            <div className="rounded-lg border border-dashed border-border p-5 flex flex-col">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">{t.full}</p>
              <p className="text-xl font-bold tabular-nums mb-1 leading-tight" style={big}>
                {t.fullRange(eur(r.fullLow), eur(r.fullHigh))}
              </p>
              <p className="text-xs text-muted-foreground mb-4">{t.fullNote}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-auto">{t.fullText}</p>
            </div>
          </div>

          {/* Budget e pareggio */}
          <div className="border-t-2 border-foreground pt-8 mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">{t.budgetTitle}</p>
            <Field label={t.budgetLabel} value={budget} onChange={setBudget} prefix="€" width="w-36" />
            {r.B > 0 && r.real > 0 && (
              <div className="mt-6">
                <p className="text-2xl md:text-3xl font-bold leading-snug mb-3" style={big}>
                  {t.budgetSentence(eur(r.B), r.payback)}
                  <span className="text-muted-foreground font-normal text-lg md:text-xl">{t.budgetOf(r.L)}</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-1">{t.perPerson(eur(r.real))}</p>
                {r.paybackCons !== r.payback && <p className="text-sm text-muted-foreground leading-relaxed">{t.budgetCons(r.paybackCons)}</p>}
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mb-16">
            <p className="text-sm text-muted-foreground">{t.cta}</p>
            <Link href={t.ctaHref} className="inline-block mt-2 text-sm text-primary font-semibold hover:underline transition-colors">
              {t.ctaLink}
            </Link>
            {t.read && (
              <p className="text-sm text-muted-foreground mt-6">
                {t.read.text}{" "}
                <Link href={t.read.href} className="underline underline-offset-4 text-foreground hover:opacity-70">
                  {t.read.label}
                </Link>
              </p>
            )}
          </div>

          {/* Metodo */}
          <div className="pt-10 border-t border-border/40">
            <p className="text-xs text-muted-foreground mb-4">{t.method}</p>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              {t.methodText.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
              <p className="text-xs text-muted-foreground/70">{t.sources}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
