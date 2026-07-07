"use client";

import { useState, useMemo } from "react";
import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function eur(n: number) {
  return n.toLocaleString("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

const SimulatoreTurnover = () => {
  const [salary, setSalary] = useState(24000);
  const [headcount, setHeadcount] = useState(100);
  const [turnoverRate, setTurnoverRate] = useState(10);

  const r = useMemo(() => {
    const annunci = 500;
    const agenzie = salary * 0.15;
    const selezione = 1000;
    const onboarding = 1000;
    const talentAcquisition = annunci + agenzie + selezione + onboarding;

    const produttivita = salary * 0.50;
    const morale = salary * 0.25;
    const attritionPerEmployee = talentAcquisition + produttivita + morale;

    const retentionPerEmployee = 3000;

    const leavers = Math.max(1, Math.round(headcount * (turnoverRate / 100)));
    const totalAttritionCost = leavers * attritionPerEmployee;
    const totalRetentionCost = headcount * retentionPerEmployee;
    const netSavings = totalAttritionCost - totalRetentionCost;

    const breakevenLeavers = totalRetentionCost / attritionPerEmployee;
    const breakevenRate = (breakevenLeavers / headcount) * 100;

    return {
      annunci, agenzie, selezione, onboarding, talentAcquisition,
      produttivita, morale, attritionPerEmployee,
      retentionPerEmployee, leavers,
      totalAttritionCost, totalRetentionCost, netSavings,
      breakevenRate,
    };
  }, [salary, headcount, turnoverRate]);

  const positive = r.netSavings >= 0;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Simulatore costo turnover — Venturo"
        description="Calcola il costo reale del turnover nella tua azienda. Compara attrition e retention per capire dove conviene investire."
        canonical="https://venturoconsulting.it/simulatore-turnover"
        lang="it"
        alternateUrls={{
          it: "https://venturoconsulting.it/simulatore-turnover",
          en: "https://venturoconsulting.it/en/turnover-calculator",
        }}
      />
      <Header />

      <main className="pt-28 pb-20 px-4">
        <div className="mx-auto max-w-[680px]">

          {/* Header */}
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Strumento gratuito
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quanto costa davvero perdere una persona?
          </h1>
          <p className="text-lg text-muted-foreground/80 mb-12 leading-relaxed max-w-xl">
            Inserisci i dati della tua organizzazione. Il simulatore calcola il costo reale del turnover
            e lo compara con un investimento strutturato in retention.
          </p>

          {/* Inputs */}
          <div className="space-y-8 mb-14">
            <div>
              <Label className="text-foreground font-semibold mb-2 block">
                Stipendio annuo medio lordo
              </Label>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm font-mono">€</span>
                <Input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(clamp(Number(e.target.value), 10000, 500000))}
                  min={10000}
                  max={500000}
                  step={1000}
                  className="w-40"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Il costo dell'agenzia di recruiting (15%) e la perdita di produttività (50%) si calcolano in proporzione.
              </p>
            </div>

            <div>
              <Label className="text-foreground font-semibold mb-2 block">
                Numero di dipendenti
              </Label>
              <Input
                type="number"
                value={headcount}
                onChange={(e) => setHeadcount(clamp(Number(e.target.value), 1, 100000))}
                min={1}
                max={100000}
                step={5}
                className="w-40"
              />
            </div>

            <div>
              <Label className="text-foreground font-semibold mb-2 block">
                Tasso di turnover annuo
              </Label>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={turnoverRate}
                    onChange={(e) => setTurnoverRate(clamp(Number(e.target.value), 0, 100))}
                    min={0}
                    max={100}
                    step={1}
                    className="w-24"
                  />
                  <span className="text-muted-foreground text-sm font-mono">%</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  = <strong className="text-foreground">{r.leavers}</strong>{" "}
                  {r.leavers === 1 ? "persona che lascia" : "persone che lasciano"} all'anno
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                La media italiana nelle PMI è tra il 10% e il 20%.
              </p>
            </div>
          </div>

          {/* Cost breakdown */}
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
              Costo per ogni dipendente che lascia
            </p>

            <div>
              {[
                { label: "Annunci di lavoro", value: r.annunci },
                { label: "Agenzia di recruiting (15% dello stipendio)", value: r.agenzie },
                { label: "Processo di selezione", value: r.selezione },
                { label: "Onboarding e formazione iniziale", value: r.onboarding },
                { label: "Perdita di produttività (6 mesi al 50%)", value: r.produttivita },
                { label: "Impatto su morale e conoscenza organizzativa", value: r.morale },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-3 border-t border-foreground/10 gap-4"
                >
                  <span className="text-sm text-foreground/80">{row.label}</span>
                  <span className="font-mono text-sm tabular-nums shrink-0">{eur(row.value)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-4 border-t-2 border-foreground gap-4">
                <span className="font-semibold">Totale per dipendente perso</span>
                <span className="font-mono font-bold text-xl tabular-nums shrink-0">
                  {eur(r.attritionPerEmployee)}
                </span>
              </div>
            </div>
          </div>

          {/* Projection card */}
          <div className="rounded-xl border border-border/60 bg-muted/20 p-6 md:p-8 mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              Proiezione annuale — {headcount} dipendenti, {turnoverRate}% di turnover
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Costo dell'attrition</p>
                <p
                  className="text-3xl font-bold tabular-nums"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                >
                  {eur(r.totalAttritionCost)}
                </p>
                <p className="text-xs text-muted-foreground mt-1.5">
                  {r.leavers} {r.leavers === 1 ? "persona" : "persone"} × {eur(r.attritionPerEmployee)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Investimento in retention (tutta l'organizzazione)</p>
                <p
                  className="text-3xl font-bold tabular-nums"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                >
                  {eur(r.totalRetentionCost)}
                </p>
                <p className="text-xs text-muted-foreground mt-1.5">
                  {headcount} dipendenti × {eur(r.retentionPerEmployee)}/anno
                </p>
              </div>
            </div>

            {/* Net result */}
            <div
              className="p-5 rounded-lg"
              style={{
                backgroundColor: positive ? "rgba(225, 255, 0, 0.15)" : "rgba(255, 0, 110, 0.07)",
                borderLeft: `3px solid ${positive ? "#E1FF00" : "#FF006E"}`,
              }}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                {positive ? "Risparmio netto investendo in retention" : "La retention costa più dell'attrition a questo tasso"}
              </p>
              <p
                className="text-4xl md:text-5xl font-bold tabular-nums"
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  color: positive ? "#1a1a1a" : "#FF006E",
                }}
              >
                {positive ? "+" : ""}{eur(r.netSavings)}
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {positive
                  ? `Con un turnover del ${turnoverRate}%, il programma di retention ripaga interamente e genera un risparmio netto di ${eur(r.netSavings)} all'anno.`
                  : `Con un turnover del ${turnoverRate}%, il costo complessivo della retention supera quello dell'attrition. Il punto di pareggio è a ${r.breakevenRate.toFixed(1)}% di turnover.`
                }
              </p>
            </div>
          </div>

          {/* Breakeven */}
          <div className="border-l-[3px] border-foreground/20 pl-5 py-1 mb-14">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Punto di pareggio:</strong>{" "}
              con questa organizzazione, il programma di retention conviene quando il tasso di turnover
              supera{" "}
              <strong className="text-foreground">{r.breakevenRate.toFixed(1)}%</strong>{" "}
              ({Math.ceil(headcount * r.breakevenRate / 100)}{" "}
              {Math.ceil(headcount * r.breakevenRate / 100) === 1 ? "persona" : "persone"} all'anno).
              Sotto quella soglia, il costo è distribuito su troppo pochi uscenti per essere ammortizzato.
            </p>
          </div>

          {/* CTA */}
          <div className="mb-16">
            <p className="text-sm text-muted-foreground">
              I numeri dicono dove guardare. La conversazione parte da quello che c'è dentro.
            </p>
            <Link
              href="/#contact"
              className="inline-block mt-2 text-sm text-primary font-semibold hover:underline transition-colors"
            >
              Parliamone →
            </Link>
          </div>

          {/* Methodology */}
          <div className="pt-10 border-t border-border/40">
            <p className="text-xs text-muted-foreground mb-4">Come vengono calcolati i costi</p>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Il costo di attrition include la sostituzione completa del dipendente (annunci di lavoro,
                commissione agenzia al 15% dello stipendio annuo, processo di selezione, onboarding e formazione),
                la perdita di produttività stimata in sei mesi al 50% di capacità, e l'impatto su morale
                e conoscenza organizzativa stimato al 25% dello stipendio annuo.
              </p>
              <p>
                Il costo di retention per dipendente (€3.000 annui) include programmi di sviluppo professionale,
                iniziative di benessere aziendale e adeguamenti salariali. È una stima conservativa: la cifra
                reale varia significativamente in base al settore, alla dimensione dell'organizzazione e al
                livello dei ruoli coinvolti.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Fonti: SHRM "Cost of a Bad Hire", Bersin by Deloitte "The Real Cost of Losing an Employee",
                Gallup "State of the American Workplace".
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SimulatoreTurnover;
