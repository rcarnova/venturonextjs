"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Download, RotateCcw } from "lucide-react";

import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

type Dimension = {
  id: string;
  title: string;
  description: string;
  peso: 1 | 2 | 3;
  ingaze?: boolean;
};

type Area = {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  weight: number; // 0..1
  dimensions: Dimension[];
};

const AREAS: Area[] = [
  {
    id: "cultura",
    name: "Cultura organizzativa",
    subtitle: "Valori, inclusione, riconoscimento, fiducia",
    color: "#0D9488",
    weight: 0.30,
    dimensions: [
      { id: "c1", title: "Valori chiari e vissuti", description: "Quanto i valori dichiarati sono coerenti con i comportamenti quotidiani.", peso: 3 },
      { id: "c2", title: "Cultura dell'inclusione e DEI", description: "Politiche e pratiche di diversità, equità e inclusione.", peso: 3 },
      { id: "c3", title: "Fiducia nella leadership", description: "Percezione di trasparenza e credibilità del top management.", peso: 3 },
      { id: "c4", title: "Cultura del riconoscimento", description: "Sistemi formali e informali di riconoscimento del contributo.", peso: 2, ingaze: true },
      { id: "c5", title: "Comunicazione aperta e bidirezionale", description: "Flussi di comunicazione tra livelli e qualità dell'ascolto.", peso: 3, ingaze: true },
      { id: "c6", title: "Scopo e significato nel lavoro", description: "Connessione tra attività quotidiane e mission aziendale.", peso: 2 },
      { id: "c7", title: "Work-life balance e flessibilità", description: "Equilibrio reale tra vita personale e professionale.", peso: 2 },
    ],
  },
  {
    id: "persone",
    name: "Persone & Leadership",
    subtitle: "Manager, sviluppo, engagement, benessere",
    color: "#7C3AED",
    weight: 0.28,
    dimensions: [
      { id: "p1", title: "Qualità della gestione manageriale", description: "Capacità dei manager di guidare, supportare e sviluppare i team.", peso: 3 },
      { id: "p2", title: "Sviluppo professionale continuo", description: "Opportunità di formazione e crescita strutturate.", peso: 3 },
      { id: "p3", title: "Benessere fisico e mentale", description: "Programmi e cultura di well-being attiva.", peso: 3 },
      { id: "p4", title: "Engagement e senso di appartenenza", description: "Livello di coinvolgimento e identificazione con l'organizzazione.", peso: 3 },
      { id: "p5", title: "Programmi di mentoring e leadership", description: "Percorsi strutturati di sviluppo della leadership.", peso: 2 },
      { id: "p6", title: "Ascolto attivo e feedback loop", description: "Meccanismi di raccolta e attivazione del feedback.", peso: 3 },
    ],
  },
  {
    id: "ambiente",
    name: "Ambiente & Tecnologia",
    subtitle: "Spazi fisici, tool digitali, DEX, smart working",
    color: "#D97706",
    weight: 0.20,
    dimensions: [
      { id: "a1", title: "Spazi fisici funzionali e inclusivi", description: "Qualità degli ambienti di lavoro per produttività e benessere.", peso: 2 },
      { id: "a2", title: "Tool digitali efficaci e user-friendly", description: "Adeguatezza degli strumenti tecnologici al lavoro quotidiano.", peso: 3 },
      { id: "a3", title: "Digital Employee Experience (DEX)", description: "Esperienza complessiva nell'uso del digitale aziendale.", peso: 3 },
      { id: "a4", title: "Supporto alla trasformazione digitale", description: "Formazione e accompagnamento al cambiamento tecnologico.", peso: 2 },
      { id: "a5", title: "Flessibilità remote/hybrid", description: "Maturità del modello di lavoro ibrido e remoto.", peso: 2 },
    ],
  },
  {
    id: "journey",
    name: "Employee Journey",
    subtitle: "Attrazione, onboarding, sviluppo, retention",
    color: "#E11D48",
    weight: 0.22,
    dimensions: [
      { id: "j1", title: "Employer brand e attrazione (EVP)", description: "Forza e coerenza della Employee Value Proposition esterna.", peso: 3, ingaze: true },
      { id: "j2", title: "Processo di selezione rispettoso", description: "Esperienza candidato durante l'intero recruiting.", peso: 2 },
      { id: "j3", title: "Onboarding strutturato ed efficace", description: "Qualità dell'inserimento dei nuovi assunti.", peso: 3 },
      { id: "j4", title: "Sviluppo lungo tutto il ciclo di vita", description: "Percorsi di crescita continua, non solo iniziali.", peso: 3 },
      { id: "j5", title: "Retention proattiva", description: "Strategie attive di trattenimento dei talenti chiave.", peso: 2 },
      { id: "j6", title: "Offboarding dignitoso e sistematico", description: "Cura dell'uscita e relazione con gli alumni.", peso: 2 },
    ],
  },
];

const FONTI = [
  "Percezione HR / management",
  "Dato HR oggettivo",
  "Survey dipendenti esistente",
  "Analisi Ingaze (consigliato)",
  "Analisi Ingaze + Percezione HR",
  "Intervista narrativa",
  "Osservazione diretta",
  "Assenza di dato",
];

type DimState = { score: number | null; fonte: string; note: string };

const todayISO = () => new Date().toISOString().slice(0, 10);

const getLevel = (score: number) => {
  if (score >= 80) return "Eccellente";
  if (score >= 60) return "Consolidato";
  if (score >= 40) return "In sviluppo";
  if (score >= 20) return "Iniziale";
  return "Critico";
};

const initState = (): Record<string, DimState> => {
  const s: Record<string, DimState> = {};
  AREAS.forEach((a) => a.dimensions.forEach((d) => {
    s[d.id] = { score: null, fonte: "", note: "" };
  }));
  return s;
};

const ExAssessment = () => {
  const [org, setOrg] = useState("");
  const [data, setData] = useState(todayISO());
  const [facilitatore, setFacilitatore] = useState("");
  const [dims, setDims] = useState<Record<string, DimState>>(initState);
  const [openAreas, setOpenAreas] = useState<Record<string, boolean>>({
    cultura: true, persone: false, ambiente: false, journey: false,
  });

  const updateDim = (id: string, patch: Partial<DimState>) => {
    setDims((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  };

  const areaScores = useMemo(() => {
    return AREAS.map((a) => {
      let weighted = 0;
      let maxWeighted = 0;
      a.dimensions.forEach((d) => {
        const s = dims[d.id]?.score ?? 0;
        weighted += s * d.peso;
        maxWeighted += d.peso * 4;
      });
      const score = maxWeighted > 0 ? Math.round((weighted / maxWeighted) * 100) : 0;
      return { id: a.id, name: a.name, color: a.color, weight: a.weight, score };
    });
  }, [dims]);

  const globalScore = useMemo(() => {
    const total = areaScores.reduce((sum, a) => sum + a.score * a.weight, 0);
    return Math.round(total);
  }, [areaScores]);

  const globalLevel = getLevel(globalScore);

  const handleReset = () => {
    setDims(initState());
  };

  // Radar SVG geometry
  const radarSize = 280;
  const radarCenter = radarSize / 2;
  const radarRadius = radarCenter - 30;
  const angles = [-Math.PI / 2, 0, Math.PI / 2, Math.PI]; // top, right, bottom, left

  const polygonPoints = areaScores.map((a, i) => {
    const r = (a.score / 100) * radarRadius;
    const x = radarCenter + r * Math.cos(angles[i]);
    const y = radarCenter + r * Math.sin(angles[i]);
    return `${x},${y}`;
  }).join(" ");

  const handleExportPDF = async () => {
    // Load jsPDF from CDN
    const ensureJsPDF = (): Promise<any> => new Promise((resolve, reject) => {
      if ((window as any).jspdf) return resolve((window as any).jspdf.jsPDF);
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      s.onload = () => resolve((window as any).jspdf.jsPDF);
      s.onerror = reject;
      document.body.appendChild(s);
    });

    const jsPDF = await ensureJsPDF();
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 40;
    let y = margin;

    doc.setFontSize(18);
    doc.text("EX Assessment", margin, y);
    y += 22;
    doc.setFontSize(10);
    doc.setTextColor(110);
    doc.text(`Organizzazione: ${org || "—"}`, margin, y); y += 14;
    doc.text(`Data sessione: ${data || "—"}`, margin, y); y += 14;
    doc.text(`Facilitatore: ${facilitatore || "—"}`, margin, y); y += 22;

    doc.setTextColor(0);
    doc.setFontSize(14);
    doc.text(`EX Index: ${globalScore} / 100 — ${globalLevel}`, margin, y);
    y += 20;

    doc.setFontSize(11);
    doc.text("Punteggi per area", margin, y); y += 14;
    doc.setFontSize(10);
    areaScores.forEach((a) => {
      doc.setTextColor(0);
      doc.text(`${a.name} (${Math.round(a.weight * 100)}%): ${a.score}/100`, margin, y);
      // bar
      const barX = margin + 280;
      const barW = 200;
      doc.setDrawColor(220);
      doc.setFillColor(240);
      doc.rect(barX, y - 8, barW, 8, "F");
      const [r, g, b] = hexToRgb(a.color);
      doc.setFillColor(r, g, b);
      doc.rect(barX, y - 8, (barW * a.score) / 100, 8, "F");
      y += 16;
    });
    y += 10;

    AREAS.forEach((area) => {
      if (y > 760) { doc.addPage(); y = margin; }
      doc.setFontSize(12);
      const [r, g, b] = hexToRgb(area.color);
      doc.setTextColor(r, g, b);
      doc.text(`${area.name}`, margin, y); y += 16;
      doc.setTextColor(0);
      doc.setFontSize(9);
      area.dimensions.forEach((d) => {
        if (y > 780) { doc.addPage(); y = margin; }
        const st = dims[d.id];
        const sc = st?.score ?? "—";
        doc.setFont("helvetica", "bold");
        doc.text(`• ${d.title}  [peso ${d.peso}/3]  score: ${sc}/4`, margin, y); y += 12;
        doc.setFont("helvetica", "normal");
        doc.setTextColor(110);
        doc.text(`  Fonte: ${st?.fonte || "—"}`, margin, y); y += 12;
        if (st?.note) {
          const lines = doc.splitTextToSize(`  Note: ${st.note}`, pageW - margin * 2);
          doc.text(lines, margin, y);
          y += 12 * lines.length;
        }
        doc.setTextColor(0);
        y += 4;
      });
      y += 8;
    });

    doc.save(`ex-assessment-${(org || "sessione").toLowerCase().replace(/\s+/g, "-")}-${data}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="EX Assessment — Strumento diagnostico Venturo"
        description="Valuta l'employee experience della tua organizzazione su quattro aree chiave: cultura, persone, ambiente, journey. Mappa delle priorità in pochi minuti."
        canonical="https://venturoconsulting.it/ex-assessment"
        lang="it"
      />
      <Header />

      <main className="pt-28 pb-20 px-4">
        <div className="mx-auto max-w-[980px]">
          {/* HERO */}
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
            Strumento diagnostico
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Come vivono davvero la vostra organizzazione?
          </h1>
          <p className="text-lg text-muted-foreground/80 mb-10 leading-relaxed max-w-2xl">
            Valutate l'employee experience su quattro aree chiave. Il risultato è una mappa delle priorità — il punto di partenza per una conversazione più profonda.
          </p>

          {/* Session fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div>
              <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5 block">Organizzazione</Label>
              <Input value={org} onChange={(e) => setOrg(e.target.value)} placeholder="Nome azienda cliente" />
            </div>
            <div>
              <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5 block">Data sessione</Label>
              <Input type="date" value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            <div>
              <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5 block">Facilitatore</Label>
              <Input value={facilitatore} onChange={(e) => setFacilitatore(e.target.value)} placeholder="es. Rosario Carnovale" />
            </div>
          </div>

          {/* SCORE PANEL */}
          <div className="bg-foreground text-background rounded-xl p-6 md:p-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-center">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-background/60 mb-2">EX Index globale</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono font-bold text-7xl md:text-8xl leading-none tabular-nums" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {globalScore}
                  </span>
                  <span className="text-xl text-background/60 font-mono">/ 100</span>
                </div>
                <p className="mt-2 text-sm text-background/80">{globalLevel}</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {areaScores.map((a) => (
                  <div key={a.id} className="bg-background/5 border border-background/10 rounded-lg p-4">
                    <p className="text-[11px] uppercase tracking-wider text-background/60 mb-1 truncate">{a.name}</p>
                    <p className="font-mono font-bold text-2xl tabular-nums" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {a.score}<span className="text-sm text-background/50 font-normal">/100</span>
                    </p>
                    <div className="mt-2 h-1 rounded-full bg-background/10 overflow-hidden">
                      <div className="h-full transition-all duration-300" style={{ width: `${a.score}%`, background: a.color }} />
                    </div>
                    <p className="mt-1.5 text-[10px] font-mono text-background/40">peso {Math.round(a.weight * 100)}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RADAR + SCALE */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 mb-6 rounded-xl border border-border/60 bg-muted/30 p-6 md:p-8">
            <div className="flex justify-center">
              <svg width={radarSize} height={radarSize}>
                {[0.25, 0.5, 0.75, 1].map((f, i) => {
                  const r = radarRadius * f;
                  const pts = angles.map((a) => {
                    const x = radarCenter + r * Math.cos(a);
                    const y = radarCenter + r * Math.sin(a);
                    return `${x},${y}`;
                  }).join(" ");
                  return <polygon key={i} points={pts} fill="none" stroke="hsl(var(--border))" strokeWidth={1} />;
                })}
                {angles.map((a, i) => {
                  const x = radarCenter + radarRadius * Math.cos(a);
                  const y = radarCenter + radarRadius * Math.sin(a);
                  return <line key={i} x1={radarCenter} y1={radarCenter} x2={x} y2={y} stroke="hsl(var(--border))" strokeWidth={1} />;
                })}
                <polygon points={polygonPoints} fill="hsl(var(--foreground) / 0.18)" stroke="hsl(var(--foreground))" strokeWidth={1.5} />
                {areaScores.map((a, i) => {
                  const r = (a.score / 100) * radarRadius;
                  const x = radarCenter + r * Math.cos(angles[i]);
                  const y = radarCenter + r * Math.sin(angles[i]);
                  return <circle key={a.id} cx={x} cy={y} r={5} fill={a.color} stroke="white" strokeWidth={2} />;
                })}
                {areaScores.map((a, i) => {
                  const x = radarCenter + (radarRadius + 18) * Math.cos(angles[i]);
                  const y = radarCenter + (radarRadius + 18) * Math.sin(angles[i]);
                  const labels = ["Cultura", "Persone", "Amb. & Tech", "Journey"];
                  return <text key={a.id} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={11} fill="hsl(var(--muted-foreground))">{labels[i]}</text>;
                })}
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">Legenda</p>
              <ul className="space-y-2">
                {areaScores.map((a, i) => {
                  const labels = ["Cultura", "Persone", "Amb. & Tech", "Journey"];
                  return (
                    <li key={a.id} className="flex items-center justify-between gap-3 text-sm">
                      <span className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: a.color }} />
                        <span className="text-foreground">{labels[i]}</span>
                      </span>
                      <span className="font-mono tabular-nums text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{a.score}/100</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* SCALE BAR */}
          <div className="mb-12 rounded-lg border border-border/60 bg-background overflow-hidden">
            <div className="grid grid-cols-5 text-[11px] md:text-xs">
              {[
                { n: 0, t: "Assente" },
                { n: 1, t: "Iniziale" },
                { n: 2, t: "In sviluppo" },
                { n: 3, t: "Consolidato" },
                { n: 4, t: "Eccellente" },
              ].map((s, i) => (
                <div key={s.n} className={`px-2 md:px-4 py-3 text-center ${i < 4 ? "border-r border-border/60" : ""}`}>
                  <div className="font-mono font-bold text-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{s.n}</div>
                  <div className="text-muted-foreground mt-0.5">{s.t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AREAS */}
          <div className="space-y-4 mb-10">
            {AREAS.map((area, idx) => {
              const aScore = areaScores[idx];
              const isOpen = openAreas[area.id];
              return (
                <div key={area.id} className="rounded-xl border border-border/60 bg-background overflow-hidden">
                  <button
                    onClick={() => setOpenAreas((p) => ({ ...p, [area.id]: !p[area.id] }))}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="w-1 self-stretch rounded-full" style={{ background: area.color, minHeight: 40 }} />
                      <div className="min-w-0">
                        <h2 className="text-base md:text-lg font-semibold text-foreground truncate">{area.name}</h2>
                        <p className="text-xs md:text-sm text-muted-foreground truncate">{area.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground hidden sm:inline">peso {Math.round(area.weight * 100)}%</span>
                      <span className="text-xs md:text-sm font-mono font-semibold px-2.5 py-1 rounded text-white tabular-nums" style={{ background: area.color, fontFamily: "'IBM Plex Mono', monospace" }}>
                        {aScore.score}/100
                      </span>
                      <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="border-t border-border/60 divide-y divide-border/40">
                      {area.dimensions.map((d) => {
                        const st = dims[d.id];
                        const points = (st.score ?? 0) * d.peso;
                        return (
                          <div key={d.id} className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.3fr_0.8fr] gap-4 p-5 md:p-6">
                            <div>
                              <h3 className="text-sm font-semibold text-foreground mb-1.5">{d.title}</h3>
                              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{d.description}</p>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-muted text-muted-foreground">peso {d.peso}/3</span>
                                {d.ingaze && (
                                  <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded text-white" style={{ background: "#0D9488" }}>↔ Ingaze</span>
                                )}
                              </div>
                            </div>
                            <div>
                              <Label className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1 block">Fonte del dato</Label>
                              <Select value={st.fonte} onValueChange={(v) => updateDim(d.id, { fonte: v })}>
                                <SelectTrigger className="h-9 text-xs">
                                  <SelectValue placeholder="Seleziona…" />
                                </SelectTrigger>
                                <SelectContent>
                                  {FONTI.map((f) => <SelectItem key={f} value={f} className="text-xs">{f}</SelectItem>)}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1 block">Note ragionamento</Label>
                              <Textarea
                                value={st.note}
                                onChange={(e) => updateDim(d.id, { note: e.target.value })}
                                placeholder="Da cosa lo deduciamo? Quali evidenze, esempi o dubbi?"
                                className="min-h-[72px] text-xs resize-y"
                              />
                            </div>
                            <div>
                              <Label className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1 block">Score</Label>
                              <Select value={st.score === null ? "" : String(st.score)} onValueChange={(v) => updateDim(d.id, { score: Number(v) })}>
                                <SelectTrigger className="h-9 text-xs">
                                  <SelectValue placeholder="—" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[0, 1, 2, 3, 4].map((n) => <SelectItem key={n} value={String(n)} className="text-xs">{n}</SelectItem>)}
                                </SelectContent>
                              </Select>
                              <p className="mt-1.5 text-[10px] font-mono text-muted-foreground tabular-nums" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                {points} punti pesati
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Button onClick={handleExportPDF} variant="outline" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Esporta PDF
            </Button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Azzera tutto
            </button>
          </div>

          {/* EXPLAINER */}
          <div className="mt-20 pt-12 border-t border-border/40">
            <p className="text-xs text-muted-foreground mb-4">Come funziona questo assessment</p>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>Questo tool valuta l'employee experience su quattro aree con pesi diversi. Per ogni dimensione si assegna un punteggio da 0 a 4 e si indica la fonte del dato. Il risultato è un indice per area e un EX Index globale ponderato.</p>
              <p>Le dimensioni con il badge ↔ Ingaze si sovrappongono con l'analisi Ingaze: usate quei dati come fonte primaria quando disponibili. Lo scarto tra percezione interna ed esterna è già una diagnosi.</p>
            </div>
            <Link href="/lumen" className="inline-block mt-6 text-sm text-primary font-semibold hover:underline transition-colors">
              Scopri come lavora Lumen →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

function hexToRgb(hex: string): [number, number, number] {
  const m = hex.replace("#", "");
  const v = parseInt(m, 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

export default ExAssessment;
