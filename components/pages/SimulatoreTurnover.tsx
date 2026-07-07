"use client";

import { useState, useMemo } from "react";
import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// Reliable Italian formatting: "3.600 €" not "3600 €"
function eur(n: number): string {
  return Math.round(n).toLocaleString("it-IT") + " €";
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

const SimulatoreTurnover = () => {
  const [salary, setSalary] = useState(24000);
  const [headcount, setHeadcount] = useState(100);
  const [turnoverRate, setTurnoverRate] = useState(10);
  const [targetRate, setTargetRate] = useState(8);

  const r = useMemo(() => {
    // Per-employee acquisition costs
    const annunci = 500;
    const agenzie = salary * 0.15;
    const selezione = 1000;
    const onboarding = 1000;
    const talentAcquisition = annunci + agenzie + selezione + onboarding;

    // Per-employee attrition costs
    const produttivita = salary * 0.50;
    const morale = salary * 0.25;
    const attritionPerEmployee = talentAcquisition + produttivita + morale;

    // Retention cost scales with salary (12.5% — ratio from reference case: 3.000/24.000)
    const retentionPerEmployee = salary * 0.125;

    // Current scenario
    const leavers = Math.max(1, Math.round(headcount * (turnoverRate / 100)));
    const totalAttritionCost = leavers * attritionPerEmployee;
    const totalRetentionCost = headcount * retentionPerEmployee;
    const netSavings = totalAttritionCost - totalRetentionCost;

    // Breakeven
    const breakevenRate = (totalRetentionCost / attritionPerEmployee / headcount) * 100;

    // What-if scenario
    const safeTarget = clamp(targetRate, 0, turnoverRate);
    const targetLeavers = Math.round(headcount * (safeTarget / 100));
    const leaversDelta = leavers - targetLeavers;
    const savedByReduction = leaversDelta * attritionPerEmployee;

    return {
      annunci, agenzie, selezione, onboarding,
      produttivita, morale, attritionPerEmployee,
      retentionPerEmployee, leavers,
      totalAttritionCost, totalRetentionCost, netSavings,
      breakevenRate,
      safeTarget, targetLeavers, leaversDelta, savedByReduction,
    };
  }, [salary, headcount, turnoverRate, targetRate]);

  const positive = r.netSavings >= 0;
  const showWhatIf = targetRate < turnoverRate && r.leaversDelta > 0;

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
                Agenzie (15%), perdita produttività (50%), morale (25%) e costo retention (12,5%) si calcolano in proporzione allo stipendio.
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
                Tasso di turnover attuale
              </Label>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={turnoverRate}
                    onChange={(e) => {
                      const v = clamp(Number(e.target.value), 0, 100);
                      setTurnoverRate(v);
                      if (targetRate >= v) setTargetRate(Math.max(0, v - 1));
                    }}
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
                { label: "Impatto su morale e conoscenza organizzativa (25%)", value: r.morale },
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

            {/* Net result — neutral color when negative */}
            <div
              className="p-5 rounded-lg"
              style={{
                backgroundColor: positive ? "rgba(225, 255, 0, 0.15)" : "rgba(0,0,0,0.04)",
                borderLeft: `3px solid ${positive ? "#E1FF00" : "rgba(0,0,0,0.2)"}`,
              }}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                {positive ? "Risparmio netto investendo in retention" : "Differenza attrition vs retention"}
              </p>
              <p
                className="text-4xl md:text-5xl font-bold tabular-nums"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
              >
                {positive ? "+" : ""}{eur(r.netSavings)}
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {positive
                  ? `Con un turnover del ${turnoverRate}%, il programma di retention ripaga interamente e genera un risparmio netto di ${eur(r.netSavings)} all'anno.`
                  : `Con un turnover del ${turnoverRate}%, il costo diretto della retention supera quello dell'attrition di ${eur(Math.abs(r.netSavings))}. I benefici indiretti — produttività, morale stabile, conoscenza preservata — non sono inclusi in questo calcolo.`
                }
              </p>
            </div>
          </div>

          {/* Breakeven — solo qui, non duplicato nel card */}
          <div className="border-l-[3px] border-foreground/20 pl-5 py-1 mb-14">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Punto di pareggio:</strong>{" "}
              il programma di retention conviene economicamente quando il turnover supera{" "}
              <strong className="text-foreground">{r.breakevenRate.toFixed(1)}%</strong>{" "}
              ({Math.ceil(headcount * r.breakevenRate / 100)}{" "}
              {Math.ceil(headcount * r.breakevenRate / 100) === 1 ? "persona" : "persone"} all'anno).
              Sotto quella soglia i costi diretti non si ammortizzano — ma i benefici su engagement e produttività restano reali anche prima.
            </p>
          </div>

          {/* What-if section */}
          <div className="mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
              Scenario obiettivo
            </p>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Se investiste in retention e riduceste il turnover, quanto risparmiereste solo sui costi diretti di sostituzione?
            </p>

            <div className="mb-6">
              <Label className="text-foreground font-semibold mb-2 block">
                Obiettivo turnover annuo
              </Label>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={targetRate}
                    onChange={(e) => setTargetRate(clamp(Number(e.target.value), 0, Math.max(0, turnoverRate - 1)))}
                    min={0}
                    max={Math.max(0, turnoverRate - 1)}
                    step={1}
                    className="w-24"
                  />
                  <span className="text-muted-foreground text-sm font-mono">%</span>
                </div>
                {showWhatIf && (
                  <span className="text-sm text-muted-foreground">
                    = {r.targetLeavers} {r.targetLeavers === 1 ? "persona" : "persone"} che lasciano
                    {" "}({r.leaversDelta > 0 ? `−${r.leaversDelta}` : "nessuna variazione"})
                  </span>
                )}
              </div>
            </div>

            {showWhatIf && (
              <div
                className="p-5 rounded-lg"
                style={{
                  backgroundColor: "rgba(225, 255, 0, 0.12)",
                  borderLeft: "3px solid #E1FF00",
                }}
              >
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Risparmio diretto riducendo il turnover da {turnoverRate}% a {r.safeTarget}%
                </p>
                <p
                  className="text-4xl font-bold tabular-nums"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                >
                  +{eur(r.savedByReduction)}
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {r.leaversDelta} {r.leaversDelta === 1 ? "persona in meno" : "persone in meno"} che lasciano all'anno × {eur(r.attritionPerEmployee)} = {eur(r.savedByReduction)} di costi di sostituzione evitati.
                  Questo non include i benefici su produttività, morale e continuità operativa.
                </p>
              </div>
            )}
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
                Il costo di attrition include la sostituzione completa del dipendente (annunci, commissione agenzia al 15%
                dello stipendio annuo, processo di selezione, onboarding), la perdita di produttività stimata in sei mesi
                al 50% e l'impatto su morale e conoscenza organizzativa (25% dello stipendio annuo).
              </p>
              <p>
                Il costo di retention (12,5% dello stipendio annuo) include programmi di sviluppo professionale,
                iniziative di benessere e adeguamenti salariali. Scala con lo stipendio perché il valore del
                dipendente — e il costo per trattenerlo — cresce proporzionalmente al ruolo.
                È una stima conservativa: la cifra reale varia per settore, dimensione e livello del ruolo.
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
