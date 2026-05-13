"use client";

import { useState, useMemo } from "react";
import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  lumenQuestions,
  dimensions,
  likertLabels,
  interpretScore,
} from "@/data/toolkit";

type Step = "intro" | "lumen" | "likert" | "results";

const Toolkit = () => {
  const [step, setStep] = useState<Step>("intro");

  const [lumenAnswers, setLumenAnswers] = useState<Record<string, string>>({});
  const [likertAnswers, setLikertAnswers] = useState<Record<string, number>>({});
  const [interpretation, setInterpretation] = useState<string | null>(null);
  const [interpreting, setInterpreting] = useState(false);

  const goToResults = async () => {
    setStep("results");
    setInterpreting(true);
    try {
      const res = await fetch("/api/toolkit-interpret", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          lumenAnswers,
          likertAnswers,
          questions: lumenQuestions,
          dimensions,
        }),
      });
      const data = await res.json();
      setInterpretation(data.analysis || null);
    } catch {
      setInterpretation(null);
    } finally {
      setInterpreting(false);
    }
  };

  const radarData = useMemo(() => {
    return dimensions.map((d) => {
      const values = d.items.map((_, i) => likertAnswers[`${d.id}-${i}`] || 0);
      const filled = values.filter((v) => v > 0);
      const avg = filled.length ? filled.reduce((a, b) => a + b, 0) / filled.length : 0;
      return { dimension: d.name, value: avg, id: d.id };
    });
  }, [likertAnswers]);

  const overallScore = useMemo(() => {
    const valid = radarData.filter((d) => d.value > 0);
    if (!valid.length) return 0;
    const avg = valid.reduce((a, b) => a + b.value, 0) / valid.length;
    return Math.round((avg / 5) * 100);
  }, [radarData]);

  const totalLikertItems = dimensions.reduce((acc, d) => acc + d.items.length, 0);
  const answeredLikert = Object.keys(likertAnswers).length;

  // ===== INTRO =====
  if (step === "intro") {
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Toolkit — Introduzione" description="" canonical="https://venturoconsulting.it/toolkit" lang="it" />
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <h1
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Un toolkit per leggere la vostra cultura organizzativa<span style={{ fontSize: "75%" }}>.</span>
            </h1>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
              <p>
                Questo strumento accompagna chi vuole fare un primo benchmark sulla propria cultura
                organizzativa. Non è una survey aziendale: è un esercizio di riflessione individuale per chi
                guida o presidia l'identità di un'organizzazione.
              </p>
              <p>
                Si articola in due parti complementari. La prima — <strong>narrativa</strong> — usa otto
                domande oblique ispirate al modello di Edgar Schein per far emergere la cultura reale, non
                quella dichiarata. La seconda — <strong>quantitativa</strong> — propone 24 affermazioni su sei
                dimensioni chiave della salute culturale.
              </p>
              <p>
                Tempo stimato: <strong>20-25 minuti</strong>. Tutto avviene nel browser: nessuna risposta
                viene salvata sui nostri server. Alla fine vedrai a video un radar di sintesi con
                un'interpretazione per ciascuna dimensione.
              </p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => setStep("lumen")}>
                Inizia l'assessment
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ===== LUMEN =====
  if (step === "lumen") {
    const allAnswered = lumenQuestions.every((q) => (lumenAnswers[q.id] || "").trim().length > 0);
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Toolkit — Parte 1" description="" canonical="https://venturoconsulting.it/toolkit" lang="it" />
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Parte 1 di 2 — Otto domande narrative
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              La cultura emerge nelle storie<span style={{ fontSize: "75%" }}>.</span>
            </h2>
            <p className="text-muted-foreground mb-12">
              Rispondi senza pensarci troppo. La prima risposta è quasi sempre la più rivelatrice. Non c'è
              un giusto o sbagliato: stai illuminando, non valutando.
            </p>

            <div className="space-y-12">
              {lumenQuestions.map((q, idx) => (
                <div key={q.id} className="border-l-2 border-foreground/10 pl-6">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Domanda {idx + 1} — {q.title}
                  </p>
                  <Label htmlFor={q.id} className="text-xl md:text-2xl font-semibold block mb-4 leading-snug">
                    {q.prompt}
                  </Label>
                  <Textarea
                    id={q.id}
                    placeholder={q.placeholder}
                    rows={5}
                    value={lumenAnswers[q.id] || ""}
                    onChange={(e) =>
                      setLumenAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                    }
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
              <Button size="lg" onClick={() => setStep("likert")} disabled={!allAnswered}>
                Continua con la parte 2
              </Button>
              {!allAnswered && (
                <p className="text-sm text-muted-foreground self-center">
                  Rispondi a tutte le domande per continuare.
                </p>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ===== LIKERT =====
  if (step === "likert") {
    const allAnswered = answeredLikert === totalLikertItems;
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Toolkit — Parte 2" description="" canonical="https://venturoconsulting.it/toolkit" lang="it" />
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Parte 2 di 2 — 24 affermazioni su 6 dimensioni
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Quanto è vera, oggi, ciascuna di queste affermazioni<span style={{ fontSize: "75%" }}>?</span>
            </h2>
            <p className="text-muted-foreground mb-12">
              Pensa alla tua organizzazione così com'è realmente, non come vorresti che fosse. Scala da 1
              (per niente d'accordo) a 5 (totalmente d'accordo).
            </p>

            <div className="space-y-12">
              {dimensions.map((d) => (
                <div key={d.id}>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                    Dimensione
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                  >
                    {d.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 italic">{d.description}</p>

                  <div className="space-y-6">
                    {d.items.map((item, i) => {
                      const key = `${d.id}-${i}`;
                      const value = likertAnswers[key] || 0;
                      return (
                        <div key={key} className="border-t border-foreground/10 pt-6">
                          <p className="font-medium mb-4">{item}</p>
                          <div className="flex flex-wrap gap-2">
                            {[1, 2, 3, 4, 5].map((v) => (
                              <button
                                key={v}
                                type="button"
                                onClick={() =>
                                  setLikertAnswers((prev) => ({ ...prev, [key]: v }))
                                }
                                className={`flex-1 min-w-[60px] py-3 px-2 border-2 transition-colors text-sm font-medium ${
                                  value === v
                                    ? "border-foreground bg-foreground text-background"
                                    : "border-foreground/20 hover:border-foreground/50"
                                }`}
                                aria-label={`${v} - ${likertLabels[v - 1]}`}
                              >
                                {v}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
                            <span>{likertLabels[0]}</span>
                            <span>{likertLabels[4]}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
              <Button size="lg" onClick={goToResults} disabled={!allAnswered}>
                Vedi i risultati
              </Button>
              <p className="text-sm text-muted-foreground self-center">
                {answeredLikert} / {totalLikertItems} risposte
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ===== RESULTS =====
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Toolkit — Risultati" description="" canonical="https://venturoconsulting.it/toolkit" lang="it" />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Risultati
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12 leading-tight"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Una prima fotografia della vostra cultura<span style={{ fontSize: "75%" }}>.</span>
          </h2>

          {/* Claude interpretation */}
          {interpreting && (
            <div className="mb-16 border-l-4 border-foreground/20 pl-6 py-2">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Lettura interpretativa in corso…
              </p>
              <div className="space-y-2">
                <div className="h-4 bg-foreground/8 rounded animate-pulse w-full" />
                <div className="h-4 bg-foreground/8 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-foreground/8 rounded animate-pulse w-4/6" />
              </div>
            </div>
          )}
          {!interpreting && interpretation && (
            <div className="mb-16 border-l-4 border-foreground pl-6">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Lettura interpretativa
              </p>
              <div className="prose prose-lg max-w-none text-foreground/90 space-y-4 whitespace-pre-line">
                {interpretation}
              </div>
            </div>
          )}

          {/* Overall + Radar */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Indice di salute culturale
              </p>
              <p
                className="text-7xl md:text-8xl font-bold leading-none"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
              >
                {overallScore}
                <span className="text-3xl text-muted-foreground">/100</span>
              </p>
              <p className="mt-4 text-muted-foreground">
                Media delle sei dimensioni. Da solo non racconta nulla: la lettura interessante è nella
                forma del radar e nelle dimensioni più contrastate.
              </p>
            </div>
            <div className="aspect-square">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#E5E5E5" />
                  <PolarAngleAxis
                    dataKey="dimension"
                    tick={{ fill: "#000", fontSize: 11, fontFamily: "Space Grotesk" }}
                  />
                  <PolarRadiusAxis angle={90} domain={[0, 5]} tick={false} axisLine={false} />
                  <Radar
                    name="Cultura"
                    dataKey="value"
                    stroke="#FF006E"
                    fill="#FF006E"
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Per-dimension */}
          <div className="space-y-10 mb-16">
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Per dimensione<span style={{ fontSize: "75%" }}>.</span>
            </h3>
            {dimensions.map((d) => {
              const dim = radarData.find((r) => r.id === d.id)!;
              const interp = interpretScore(dim.value);
              return (
                <div key={d.id} className="border-t border-foreground/10 pt-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                    <h4 className="text-xl md:text-2xl font-semibold">{d.name}</h4>
                    <div className="flex items-baseline gap-3">
                      <span
                        className="text-3xl font-bold"
                        style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                      >
                        {dim.value.toFixed(1)}
                        <span className="text-lg text-muted-foreground">/5</span>
                      </span>
                      <span
                        className="text-xs font-mono uppercase tracking-widest px-2 py-1"
                        style={{ color: interp.color, border: `1px solid ${interp.color}` }}
                      >
                        {interp.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-2">{d.description}</p>
                  <p className="text-foreground/80">{interp.text}</p>
                </div>
              );
            })}
          </div>

          {/* Lumen recap */}
          <div className="mb-16">
            <h3
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Le vostre risposte narrative<span style={{ fontSize: "75%" }}>.</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Rileggile a distanza di qualche giorno. Spesso quello che colpisce non è la singola risposta,
              ma il filo che le attraversa.
            </p>
            <div className="space-y-6">
              {lumenQuestions.map((q) => (
                <div key={q.id} className="border-l-2 border-foreground/10 pl-6">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                    {q.title}
                  </p>
                  <p className="font-semibold mb-2">{q.prompt}</p>
                  <p className="text-foreground/80 whitespace-pre-line">
                    {lumenAnswers[q.id] || "—"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-foreground text-background p-10 md:p-16">
            <h3
              className="text-2xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Vuoi che leggiamo insieme questi risultati<span style={{ fontSize: "75%" }}>?</span>
            </h3>
            <p className="text-background/80 mb-8 max-w-2xl">
              Una sessione di un'ora con noi per trasformare questa fotografia in domande operative. Senza
              impegno.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Parliamone
            </Button>
          </div>

          <p className="mt-12 text-xs text-muted-foreground text-center">
            Nessuna risposta è stata salvata. Se chiudi questa pagina, i risultati andranno persi.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Toolkit;
