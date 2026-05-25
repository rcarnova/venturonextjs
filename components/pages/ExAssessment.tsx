"use client";

import { useState, useMemo } from "react";
import { ChevronDown, RotateCcw, Sparkles, Download, CheckCircle2 } from "lucide-react";

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
    subtitle: "Valori, inclusione, riconoscimento, fiducia, ruoli",
    color: "#0D9488",
    weight: 0.30,
    dimensions: [
      { id: "c1", title: "Valori chiari e vissuti", description: "Quanto i valori dichiarati sono coerenti con i comportamenti quotidiani.", peso: 3 },
      { id: "c2", title: "Cultura dell'inclusione e DEI", description: "Politiche e pratiche di diversità, equità e inclusione.", peso: 3 },
      { id: "c3", title: "Fiducia nella leadership", description: "Percezione di trasparenza e credibilità del top management.", peso: 3 },
      { id: "c4", title: "Cultura del riconoscimento", description: "Sistemi formali e informali di riconoscimento del contributo.", peso: 2 },
      { id: "c5", title: "Comunicazione aperta e bidirezionale", description: "Flussi di comunicazione tra livelli e qualità dell'ascolto.", peso: 3 },
      { id: "c6", title: "Scopo e significato nel lavoro", description: "Connessione tra attività quotidiane e mission aziendale.", peso: 2 },
      { id: "c7", title: "Work-life balance e flessibilità", description: "Equilibrio reale tra vita personale e professionale.", peso: 2 },
      { id: "c8", title: "Chiarezza dei ruoli e qualità del lavoro", description: "Responsabilità definite, lavoro sufficientemente stimolante e risorse adeguate per svolgere il ruolo.", peso: 2 },
    ],
  },
  {
    id: "persone",
    name: "Persone & Leadership",
    subtitle: "Manager, sviluppo, engagement, benessere, retribuzione",
    color: "#7C3AED",
    weight: 0.28,
    dimensions: [
      { id: "p1", title: "Qualità della gestione manageriale", description: "Capacità dei manager di guidare, supportare e sviluppare i team.", peso: 3 },
      { id: "p2", title: "Sviluppo professionale continuo", description: "Opportunità di formazione e crescita strutturate.", peso: 3 },
      { id: "p3", title: "Benessere fisico e mentale", description: "Programmi e cultura di well-being attiva.", peso: 3 },
      { id: "p4", title: "Engagement e senso di appartenenza", description: "Livello di coinvolgimento e identificazione con l'organizzazione.", peso: 3 },
      { id: "p5", title: "Programmi di mentoring e leadership", description: "Percorsi strutturati di sviluppo della leadership.", peso: 2 },
      { id: "p6", title: "Ascolto attivo e feedback loop", description: "Meccanismi di raccolta e attivazione del feedback.", peso: 3 },
      { id: "p7", title: "Collaborazione e fiducia tra pari", description: "Qualità della collaborazione orizzontale: fiducia reciproca, clima psicologicamente sicuro, lavoro collettivo efficace.", peso: 2 },
      { id: "p8", title: "Retribuzione equa e competitiva", description: "Percezione di equità interna e competitività della retribuzione rispetto al mercato.", peso: 2 },
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
      { id: "j1", title: "Employer brand e attrazione (EVP)", description: "Forza e coerenza della Employee Value Proposition esterna.", peso: 3 },
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

// ── DEMO DATA ────────────────────────────────────────────────────
const DEMO_ORG = "Acme S.p.A.";
const DEMO_FACILITATORE = "Rosario Carnovale";
const DEMO_DIMS: Record<string, DimState> = {
  c1: { score: 3, fonte: "Dato HR oggettivo", note: "I valori sono nel manuale onboarding ma raramente citati nelle riunioni operative." },
  c2: { score: 2, fonte: "Percezione HR / management", note: "" },
  c3: { score: 2, fonte: "Survey dipendenti esistente", note: "Il 34% dei dipendenti non si fida delle decisioni strategiche del top management." },
  c4: { score: 1, fonte: "Percezione HR / management", note: "Il riconoscimento avviene in modo informale e non strutturato." },
  c5: { score: 2, fonte: "Survey dipendenti esistente", note: "" },
  c6: { score: 3, fonte: "Intervista narrativa", note: "" },
  c7: { score: 2, fonte: "Survey dipendenti esistente", note: "" },
  c8: { score: 2, fonte: "Survey dipendenti esistente", note: "Ruoli abbastanza chiari a livello senior, più ambigui nelle posizioni operative." },
  p1: { score: 2, fonte: "Survey dipendenti esistente", note: "Alta varianza tra team: alcuni manager eccellenti, altri molto sotto la media." },
  p2: { score: 1, fonte: "Dato HR oggettivo", note: "Budget formazione tagliato del 40% nel 2025." },
  p3: { score: 2, fonte: "Percezione HR / management", note: "" },
  p4: { score: 2, fonte: "Survey dipendenti esistente", note: "" },
  p5: { score: 1, fonte: "Assenza di dato", note: "" },
  p6: { score: 2, fonte: "Survey dipendenti esistente", note: "" },
  p7: { score: 2, fonte: "Survey dipendenti esistente", note: "Collaborazione percepita come buona nei team stabili, più frammentata nelle strutture a progetto." },
  p8: { score: 1, fonte: "Percezione HR / management", note: "Retribuzione non rivista da 3 anni, diverse segnalazioni di offerte esterne più competitive." },
  a1: { score: 3, fonte: "Osservazione diretta", note: "" },
  a2: { score: 3, fonte: "Survey dipendenti esistente", note: "" },
  a3: { score: 2, fonte: "Percezione HR / management", note: "" },
  a4: { score: 2, fonte: "Percezione HR / management", note: "" },
  a5: { score: 3, fonte: "Dato HR oggettivo", note: "Politica smart working formalizzata nel 2024 con accordo sindacale." },
  j1: { score: 2, fonte: "Percezione HR / management", note: "EVP non differenziata rispetto ai competitor diretti di settore." },
  j2: { score: 3, fonte: "Survey dipendenti esistente", note: "" },
  j3: { score: 1, fonte: "Percezione HR / management", note: "Onboarding strutturato solo su carta, non applicato in modo uniforme." },
  j4: { score: 2, fonte: "Dato HR oggettivo", note: "" },
  j5: { score: 1, fonte: "Dato HR oggettivo", note: "Turnover 18% annuo, sopra la media di settore del 12%." },
  j6: { score: 1, fonte: "Assenza di dato", note: "" },
};
const DEMO_ANALYSIS = `**La tensione principale**

C'è una frattura che attraversa questa organizzazione con una coerenza quasi metodica: i numeri più alti si concentrano nelle aree dove il controllo è visibile e misurabile — gli spazi fisici, gli strumenti digitali, la flessibilità operativa. Quelli più bassi cadono dove la cultura deve essere praticata invece che dichiarata: il riconoscimento, la delega reale, l'uscita dignitosa. L'organizzazione ha investito nell'involucro senza mai chiedersi cosa ci fosse dentro.

**Tre osservazioni**

La gestione manageriale (2/4, peso 3/3) è il punto dove questa tensione diventa più costosa. L'alta varianza riportata — "alcuni manager eccellenti, altri molto sotto la media" — è la traduzione operativa di una cultura che non ha mai deciso se la leadership sia un comportamento da allenare o un talento che si trova o non si trova. In assenza di questa decisione, ogni manager interpreta il ruolo a modo suo, e i collaboratori imparano che dipendono dal caso più che dall'organizzazione.

Lo sviluppo professionale (1/4) poggia su un budget tagliato del 40%: i dipendenti leggono quel dato con precisione e ne traggono le conclusioni culturali che l'organizzazione non ha voluto trarre per prima. Il riconoscimento (1/4), affidato all'informalità dei singoli manager, chiude un triangolo: risultati richiesti, sviluppo non finanziato, contributo non riconosciuto. In questo triangolo la retention diventa una scommessa contro il mercato.

L'onboarding (1/4) — "strutturato solo su carta, non applicato uniformemente" — è il punto dove l'identità organizzativa si gioca più di quanto si pensi. Quello che un nuovo assunto impara nei primi novanta giorni vive nella distribuzione informale del potere, in chi viene ascoltato, in cosa è permesso dire. Con un'esperienza incoerente tra un team e l'altro, l'organizzazione produce micro-culture divergenti invece che un'identità comune.

**Area prioritaria**

L'Employee Journey (con tre dimensioni critiche su sei) merita attenzione immediata non perché sia la più rotta, ma perché è quella con più leverage. Un turnover al 18% è la conseguenza leggibile di tutto il resto: la lettura di chi ha scelto di andarsene. Intervenire sulla retention senza affrontare onboarding, sviluppo e riconoscimento è come ridipingere la porta di una casa senza fondamenta.

*Cosa sta trattenendo qui le persone che sono rimaste — e per quanto ancora quella ragione sarà sufficiente?*`;

const ExAssessment = () => {
  const [org, setOrg] = useState("");
  const [data, setData] = useState(todayISO());
  const [facilitatore, setFacilitatore] = useState("");
  const [dims, setDims] = useState<Record<string, DimState>>(initState);
  const [openAreas, setOpenAreas] = useState<Record<string, boolean>>({
    cultura: true, persone: false, ambiente: false, journey: false,
  });
  const [aiAnalysis, setAiAnalysis] = useState<string>("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string>("");

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
    setAiAnalysis("");
    setAiError("");
  };

  const handleLoadDemo = () => {
    setOrg(DEMO_ORG);
    setFacilitatore(DEMO_FACILITATORE);
    setDims(DEMO_DIMS);
    setAiAnalysis(DEMO_ANALYSIS);
    setAiError("");
    setOpenAreas({ cultura: true, persone: true, ambiente: true, journey: true });
  };

  const handleElabora = async () => {
    setAiLoading(true);
    setAiError("");
    setAiAnalysis("");
    try {
      const res = await fetch("/api/ex-assessment-analysis", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ org, data, areaScores, dims, dimensions: AREAS }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setAiAnalysis(json.analysis);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Errore nell'analisi.";
      setAiError(msg);
    } finally {
      setAiLoading(false);
    }
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
    const ensureJsPDF = (): Promise<any> => new Promise((resolve, reject) => {
      if ((window as any).jspdf) return resolve((window as any).jspdf.jsPDF);
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      s.onload = () => resolve((window as any).jspdf.jsPDF);
      s.onerror = reject;
      document.body.appendChild(s);
    });

    // Load Space Grotesk TTF → base64
    const loadFontBase64 = async (path: string): Promise<string> => {
      const resp = await fetch(path);
      const buf = await resp.arrayBuffer();
      const bytes = new Uint8Array(buf);
      let str = "";
      for (let i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);
      return btoa(str);
    };

    // SVG → canvas → PNG data URL
    const svgToDataUrl = (svgStr: string, w: number, h: number): Promise<string> =>
      new Promise((resolve) => {
        const scale = 2;
        const canvas = document.createElement("canvas");
        canvas.width = w * scale;
        canvas.height = h * scale;
        const ctx = canvas.getContext("2d")!;
        ctx.scale(scale, scale);
        const img = new Image();
        const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        img.onload = () => { ctx.drawImage(img, 0, 0, w, h); URL.revokeObjectURL(url); resolve(canvas.toDataURL("image/png")); };
        img.src = url;
      });

    // Prepare fonts + logo in parallel
    const VENTURO_SVG = `<svg width="317" height="69" viewBox="0 0 317 69" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#cp)"><path d="M294.342 56.008C290.79 56.008 287.598 55.288 284.766 53.848C281.934 52.408 279.702 50.32 278.07 47.584C276.438 44.848 275.622 41.56 275.622 37.72V36.568C275.622 32.728 276.438 29.44 278.07 26.704C279.702 23.968 281.934 21.88 284.766 20.44C287.598 19 290.79 18.28 294.342 18.28C297.894 18.28 301.086 19 303.918 20.44C306.75 21.88 308.982 23.968 310.614 26.704C312.246 29.44 313.062 32.728 313.062 36.568V37.72C313.062 41.56 312.246 44.848 310.614 47.584C308.982 50.32 306.75 52.408 303.918 53.848C301.086 55.288 297.894 56.008 294.342 56.008ZM294.342 47.944C297.126 47.944 299.43 47.056 301.254 45.28C303.078 43.456 303.99 40.864 303.99 37.504V36.784C303.99 33.424 303.078 30.856 301.254 29.08C299.478 27.256 297.174 26.344 294.342 26.344C291.558 26.344 289.254 27.256 287.43 29.08C285.606 30.856 284.694 33.424 284.694 36.784V37.504C284.694 40.864 285.606 43.456 287.43 45.28C289.254 47.056 291.558 47.944 294.342 47.944Z" fill="FILL"/><path d="M244.309 55V19.288H253.237V23.32H254.533C255.061 21.88 255.925 20.824 257.125 20.152C258.373 19.48 259.813 19.144 261.445 19.144H265.765V27.208H261.301C258.997 27.208 257.101 27.832 255.613 29.08C254.125 30.28 253.381 32.152 253.381 34.696V55H244.309Z" fill="FILL"/><path d="M207.79 55.576C205.006 55.576 202.558 54.952 200.446 53.704C198.382 52.408 196.774 50.632 195.622 48.376C194.47 46.12 193.894 43.528 193.894 40.6V19.288H202.966V39.88C202.966 42.568 203.614 44.584 204.91 45.928C206.254 47.272 208.15 47.944 210.598 47.944C213.382 47.944 215.542 47.032 217.078 45.208C218.614 43.336 219.382 40.744 219.382 37.432V19.288H228.454V55H219.526V50.32H218.23C217.654 51.52 216.574 52.696 214.99 53.848C213.406 55 211.006 55.576 207.79 55.576Z" fill="FILL"/><path d="M169.266 55C166.914 55 164.994 54.28 163.506 52.84C162.066 51.352 161.346 49.384 161.346 46.936V26.776H152.418V19.288H161.346V8.19998H170.418V19.288H180.21V26.776H170.418V45.352C170.418 46.792 171.09 47.512 172.434 47.512H179.346V55H169.266Z" fill="FILL"/><path d="M106.443 55V19.288H115.371V23.968H116.667C117.243 22.72 118.323 21.544 119.907 20.44C121.491 19.288 123.891 18.712 127.107 18.712C129.891 18.712 132.315 19.36 134.379 20.656C136.491 21.904 138.123 23.656 139.275 25.912C140.427 28.12 141.003 30.712 141.003 33.688V55H131.931V34.408C131.931 31.72 131.259 29.704 129.915 28.36C128.619 27.016 126.747 26.344 124.299 26.344C121.515 26.344 119.355 27.28 117.819 29.152C116.283 30.976 115.515 33.544 115.515 36.856V55H106.443Z" fill="FILL"/><path d="M75.4001 56.008C71.8481 56.008 68.7041 55.264 65.9681 53.776C63.2801 52.24 61.1681 50.104 59.6321 47.368C58.1441 44.584 57.4001 41.32 57.4001 37.576V36.712C57.4001 32.968 58.1441 29.728 59.6321 26.992C61.1201 24.208 63.2081 22.072 65.8961 20.584C68.5841 19.048 71.7041 18.28 75.2561 18.28C78.7601 18.28 81.8081 19.072 84.4001 20.656C86.9921 22.192 89.0081 24.352 90.4481 27.136C91.8881 29.872 92.6081 33.064 92.6081 36.712V39.808H66.6161C66.7121 42.256 67.6241 44.248 69.3521 45.784C71.0801 47.32 73.1921 48.088 75.6881 48.088C78.2321 48.088 80.1041 47.536 81.3041 46.432C82.5041 45.328 83.4161 44.104 84.0401 42.76L91.4561 46.648C90.7841 47.896 89.8001 49.264 88.5041 50.752C87.2561 52.192 85.5761 53.44 83.4641 54.496C81.3521 55.504 78.6641 56.008 75.4001 56.008ZM66.6881 33.04H83.3921C83.2001 30.976 82.3601 29.32 80.8721 28.072C79.4321 26.824 77.5361 26.2 75.1841 26.2C72.7361 26.2 70.7921 26.824 69.3521 28.072C67.9121 29.32 67.0241 30.976 66.6881 33.04Z" fill="FILL"/><path d="M20.112 55L7.296 4.59998H17.088L27.744 48.88H28.752L39.408 4.59998H49.2L36.384 55H20.112Z" fill="FILL"/><mask id="m" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="4" width="43" height="51"><path d="M20.112 54.9999L7.296 4.59995H17.088L27.744 48.8799H28.752L39.408 4.59995H49.2L36.384 54.9999H20.112Z" fill="FILL"/></mask><g mask="url(#m)"><path d="M25.1323 57.1739L50.0855 4.59549" stroke="SLASH" stroke-width="2"/></g></g><defs><clipPath id="cp"><rect width="317" height="69" fill="white"/></clipPath></defs></svg>`;

    const makeLogoSvg = (fill: string, slash: string) =>
      VENTURO_SVG.replace(/FILL/g, fill).replace("SLASH", slash);

    const logoW = 116, logoH = 25; // 317:69 ratio

    const [regularB64, boldB64, logoWhiteUrl, logoBlackUrl] = await Promise.all([
      loadFontBase64("/fonts/SpaceGrotesk-Regular.ttf"),
      loadFontBase64("/fonts/SpaceGrotesk-Bold.ttf"),
      svgToDataUrl(makeLogoSvg("white", "black"), logoW, logoH),
      svgToDataUrl(makeLogoSvg("black", "white"), logoW, logoH),
    ]);

    const jsPDF = await ensureJsPDF();
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();   // 595
    const pageH = doc.internal.pageSize.getHeight();  // 842
    const M = 48; // margin
    const contentW = pageW - M * 2;

    // Register Space Grotesk
    doc.addFileToVFS("SpaceGrotesk-Regular.ttf", regularB64);
    doc.addFont("SpaceGrotesk-Regular.ttf", "SpaceGrotesk", "normal");
    doc.addFileToVFS("SpaceGrotesk-Bold.ttf", boldB64);
    doc.addFont("SpaceGrotesk-Bold.ttf", "SpaceGrotesk", "bold");

    // Helper to set font
    const SG = (bold = false) => doc.setFont("SpaceGrotesk", bold ? "bold" : "normal");

    // Palette
    const INK: [number, number, number] = [17, 17, 17];
    const ACCENT: [number, number, number] = [230, 255, 61];
    const WHITE: [number, number, number] = [255, 255, 255];
    const GRAY: [number, number, number] = [120, 120, 120];
    const LIGHT: [number, number, number] = [245, 245, 243];

    // ── PAGE 1: COVER ──────────────────────────────────────────
    // Black header bar
    doc.setFillColor(...INK);
    doc.rect(0, 0, pageW, 80, "F");

    // Logo (white version) left side of header
    doc.addImage(logoWhiteUrl, "PNG", M, 28, logoW, logoH);

    // "EX Assessment" label — right side of header
    SG(false);
    doc.setFontSize(8);
    doc.setTextColor(180, 180, 180);
    doc.text("venturoconsulting.it", pageW - M, 38, { align: "right" });
    SG(false);
    doc.setFontSize(9);
    doc.setTextColor(...ACCENT);
    doc.text("EX Assessment", pageW - M, 52, { align: "right" });

    let y = 104;

    // Session info row
    SG(false);
    doc.setFontSize(8);
    doc.setTextColor(...GRAY);
    const sessionItems = [
      `Organizzazione: ${org || "-"}`,
      `Data: ${data || "-"}`,
      `Facilitatore: ${facilitatore || "-"}`,
    ];
    const colW = contentW / 3;
    sessionItems.forEach((txt, i) => {
      doc.text(txt, M + i * colW, y);
    });
    y += 24;

    // Yellow accent rule
    doc.setFillColor(...ACCENT);
    doc.rect(M, y, 48, 3, "F");
    y += 16;

    // EX Index label
    SG(false);
    doc.setFontSize(8);
    doc.setTextColor(...GRAY);
    doc.text("EX INDEX GLOBALE", M, y);
    y += 10;

    // Score large number
    SG(true);
    doc.setFontSize(72);
    doc.setTextColor(...INK);
    doc.text(String(globalScore), M, y + 60);

    // /100 and level beside it
    SG(false);
    doc.setFontSize(14);
    doc.setTextColor(...GRAY);
    doc.text(`/ 100`, M + 98, y + 40);
    doc.setFontSize(11);
    doc.setTextColor(...INK);
    doc.text(globalLevel, M + 100, y + 58);
    y += 80;

    // Area cards — 4 in a row
    y += 16;
    SG(false);
    doc.setFontSize(7);
    doc.setTextColor(...GRAY);
    doc.text("PUNTEGGI PER AREA", M, y);
    y += 10;

    const cardW = (contentW - 9) / 4;
    const cardH = 56;
    areaScores.forEach((a, i) => {
      const cx = M + i * (cardW + 3);
      // Card background
      doc.setFillColor(...LIGHT);
      doc.rect(cx, y, cardW, cardH, "F");
      // Color top border
      const [cr, cg, cb] = hexToRgb(a.color);
      doc.setFillColor(cr, cg, cb);
      doc.rect(cx, y, cardW, 3, "F");
      // Area name (truncated)
      SG(false);
      doc.setFontSize(7);
      doc.setTextColor(...GRAY);
      const shortName = a.name.split(" ")[0];
      doc.text(shortName, cx + 8, y + 16);
      // Score
      SG(true);
      doc.setFontSize(18);
      doc.setTextColor(...INK);
      doc.text(String(a.score), cx + 8, y + 36);
      SG(false);
      doc.setFontSize(9);
      doc.setTextColor(...GRAY);
      doc.text("/100", cx + 8 + (a.score >= 100 ? 28 : a.score >= 10 ? 22 : 14), y + 36);
      // Weight
      doc.setFontSize(6);
      doc.text(`peso ${Math.round(a.weight * 100)}%`, cx + 8, y + cardH - 6);
    });
    y += cardH + 24;

    // ── AI ANALYSIS SECTION (on same page if space, else new page) ──
    if (aiAnalysis) {
      if (y > pageH - 200) { doc.addPage(); y = M; }

      // Yellow left bar
      doc.setFillColor(...ACCENT);
      doc.rect(M, y, 3, 14, "F");
      // Label
      SG(true);
      doc.setFontSize(8);
      doc.setTextColor(...GRAY);
      doc.text("INTERPRETAZIONE AI", M + 10, y + 10);
      y += 22;

      // Divider
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.5);
      doc.line(M, y, pageW - M, y);
      y += 12;

      const rawAnalysis = aiAnalysis.replace(/—/g, "-");
      rawAnalysis.split("\n").forEach((rawLine: string) => {
        const boldMatch = rawLine.match(/^\*\*(.+)\*\*$/);
        const italicMatch = rawLine.match(/^\*(.+)\*$/);
        if (rawLine.trim() === "") { y += 5; return; }
        if (boldMatch) {
          if (y > pageH - 40) { doc.addPage(); y = M; }
          y += 4;
          SG(true);
          doc.setFontSize(10);
          doc.setTextColor(...INK);
          doc.splitTextToSize(boldMatch[1], contentW).forEach((l: string) => {
            if (y > pageH - 40) { doc.addPage(); y = M; }
            doc.text(l, M, y); y += 14;
          });
          y += 2;
        } else if (italicMatch) {
          SG(false);
          doc.setFontSize(9);
          doc.setTextColor(100, 100, 100);
          doc.splitTextToSize(italicMatch[1], contentW).forEach((l: string) => {
            if (y > pageH - 40) { doc.addPage(); y = M; }
            doc.text(l, M, y); y += 13;
          });
        } else {
          SG(false);
          doc.setFontSize(9);
          doc.setTextColor(50, 50, 50);
          doc.splitTextToSize(rawLine, contentW).forEach((l: string) => {
            if (y > pageH - 40) { doc.addPage(); y = M; }
            doc.text(l, M, y); y += 13;
          });
        }
      });
      y += 20;
    }

    // ── AREA DETAIL PAGES ──────────────────────────────────────
    doc.addPage();
    y = M;

    AREAS.forEach((area) => {
      if (y > pageH - 120) { doc.addPage(); y = M; }

      // Area header band
      doc.setFillColor(...LIGHT);
      doc.rect(0, y - 4, pageW, 30, "F");
      // Color left accent
      const [cr, cg, cb] = hexToRgb(area.color);
      doc.setFillColor(cr, cg, cb);
      doc.rect(0, y - 4, 4, 30, "F");
      // Area name
      SG(true);
      doc.setFontSize(11);
      doc.setTextColor(...INK);
      doc.text(area.name.toUpperCase(), 14, y + 14);
      // Area score right
      const aScore = areaScores.find(a => a.id === area.id);
      SG(true);
      doc.setFontSize(11);
      doc.setTextColor(cr, cg, cb);
      doc.text(`${aScore?.score ?? 0}/100`, pageW - M, y + 14, { align: "right" });
      // Subtitle
      SG(false);
      doc.setFontSize(7);
      doc.setTextColor(...GRAY);
      y += 30;
      doc.text(area.subtitle, 14, y);
      y += 18;

      // Dimensions
      area.dimensions.forEach((d) => {
        if (y > pageH - 60) { doc.addPage(); y = M; }
        const st = dims[d.id];

        // Dim title
        SG(true);
        doc.setFontSize(8.5);
        doc.setTextColor(...INK);
        doc.text(d.title, M, y);
        // Peso tag
        SG(false);
        doc.setFontSize(7);
        doc.setTextColor(...GRAY);
        doc.text(`peso ${d.peso}/3`, M + 240, y);
        // Score on right
        const sc = st?.score ?? null;
        SG(true);
        doc.setFontSize(8.5);
        doc.setTextColor(...INK);
        doc.text(sc !== null ? `${sc}/4` : "-", pageW - M, y, { align: "right" });
        y += 11;

        // Score bar
        const barW = 180;
        const barH = 4;
        doc.setFillColor(225, 225, 225);
        doc.rect(M, y, barW, barH, "F");
        if (sc !== null && sc > 0) {
          doc.setFillColor(cr, cg, cb);
          doc.rect(M, y, (barW * sc) / 4, barH, "F");
        }
        y += 10;

        // Source + notes
        SG(false);
        doc.setFontSize(7);
        doc.setTextColor(...GRAY);
        if (st?.fonte) {
          doc.text(`Fonte: ${st.fonte}`, M, y);
          y += 10;
        }
        if (st?.note) {
          const noteLines = doc.splitTextToSize(`Note: ${st.note}`, contentW - 20);
          noteLines.forEach((line: string) => {
            if (y > pageH - 40) { doc.addPage(); y = M; }
            doc.text(line, M, y);
            y += 10;
          });
        }
        // Separator
        doc.setDrawColor(230, 230, 230);
        doc.setLineWidth(0.3);
        doc.line(M, y + 2, pageW - M, y + 2);
        y += 12;
      });
      y += 12;
    });

    // Footer on every page
    const totalPages = (doc as any).internal.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
      doc.setPage(p);
      SG(false);
      doc.setFontSize(7);
      doc.setTextColor(...GRAY);
      doc.text(`EX Assessment — ${org || "Venturo"} — ${data}`, M, pageH - 20);
      doc.text(`${p} / ${totalPages}`, pageW - M, pageH - 20, { align: "right" });
    }

    doc.save(`ex-assessment-${(org || "sessione").toLowerCase().replace(/\s+/g, "-")}-${data}.pdf`);
  };

  // Sidebar radar geometry (smaller)
  const sbSize = 220;
  const sbCenter = sbSize / 2;
  const sbRadius = sbCenter - 22;
  const sbPolygonPoints = areaScores.map((a, i) => {
    const r = (a.score / 100) * sbRadius;
    return `${sbCenter + r * Math.cos(angles[i])},${sbCenter + r * Math.sin(angles[i])}`;
  }).join(" ");

  const SCALE_LEVELS = [
    { n: 0, t: "Assente" },
    { n: 1, t: "Iniziale" },
    { n: 2, t: "In sviluppo" },
    { n: 3, t: "Consolidato" },
    { n: 4, t: "Eccellente" },
  ];

  const AREA_LABELS = ["Cultura", "Persone", "Amb. & Tech", "Journey"];

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
        <div className="mx-auto max-w-[1200px]">

          {/* HERO — full width */}
          <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Strumento diagnostico
            </p>
            <button
              onClick={handleLoadDemo}
              className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/50 hover:text-muted-foreground transition-colors underline underline-offset-2"
            >
              Carica sessione demo
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Come vivono davvero la vostra organizzazione?
          </h1>
          <p className="text-lg text-muted-foreground/80 mb-10 leading-relaxed max-w-2xl">
            Valutate l'employee experience su quattro aree chiave. Il risultato è una mappa delle priorità — il punto di partenza per una conversazione più profonda.
          </p>

          {/* SESSION FIELDS — full width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
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

          {/* TWO-COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_272px] gap-8">

            {/* ── MAIN COLUMN ── */}
            <div>
              {/* Mobile score strip (lg:hidden) */}
              <div className="lg:hidden bg-foreground text-background rounded-xl p-5 mb-6">
                <p className="text-[10px] font-mono uppercase tracking-wider text-background/50 mb-1">EX Index globale</p>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="font-mono font-bold text-5xl leading-none tabular-nums">{globalScore}</span>
                  <span className="text-background/50 font-mono text-sm">/100</span>
                  <span className="ml-2 text-sm text-background/70">{globalLevel}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {areaScores.map((a, i) => (
                    <div key={a.id} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.color }} />
                      <span className="text-[11px] text-background/70 truncate">{AREA_LABELS[i]}</span>
                      <span className="text-[11px] font-mono text-background/60 ml-auto">{a.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scale reference */}
              <div className="mb-6 rounded-lg border border-border/60 bg-background overflow-hidden">
                <div className="grid grid-cols-5 text-[10px] md:text-[11px]">
                  {SCALE_LEVELS.map((s, i) => (
                    <div key={s.n} className={`px-2 md:px-3 py-2.5 text-center ${i < 4 ? "border-r border-border/60" : ""}`}>
                      <div className="font-mono font-bold text-foreground">{s.n}</div>
                      <div className="text-muted-foreground mt-0.5 leading-tight">{s.t}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AREAS accordion */}
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
                                      {SCALE_LEVELS.map(({ n, t }) => (
                                        <SelectItem key={n} value={String(n)} className="text-xs">
                                          {n} — {t}
                                        </SelectItem>
                                      ))}
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
              <div className="mb-16">
                {!aiAnalysis && !aiLoading && (
                  <div>
                    <Button onClick={handleElabora} disabled={globalScore === 0} size="lg">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Elabora Analisi
                    </Button>
                    <p className="mt-3 text-xs font-mono text-muted-foreground">
                      L'analisi viene elaborata dall'AI in base ai dati inseriti e inclusa nel PDF.
                    </p>
                  </div>
                )}
                {aiLoading && (
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-5 h-5 border-2 border-foreground border-t-transparent rounded-full animate-spin flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Elaborazione in corso…</span>
                  </div>
                )}
                {aiError && !aiLoading && (
                  <div className="flex flex-wrap items-center gap-4">
                    <p className="text-sm text-red-500">{aiError}</p>
                    <button onClick={handleElabora} className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors">Riprova</button>
                  </div>
                )}
                {aiAnalysis && !aiLoading && (
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">L'analisi è pronta.</span>
                    </div>
                    <Button onClick={handleExportPDF} size="lg">
                      <Download className="h-4 w-4 mr-2" />
                      Scarica il PDF
                    </Button>
                    <button onClick={handleElabora} className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors">Rigenera</button>
                    <button onClick={handleReset} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                      <RotateCcw className="h-3.5 w-3.5" />
                      Nuova sessione
                    </button>
                  </div>
                )}
                {!aiAnalysis && !aiLoading && globalScore > 0 && (
                  <button onClick={handleReset} className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                    <RotateCcw className="h-3.5 w-3.5" />
                    Azzera tutto
                  </button>
                )}
              </div>

              {/* EXPLAINER */}
              <div className="mt-8 pt-10 border-t border-border/40">
                <p className="text-xs text-muted-foreground mb-4">Come funziona questo assessment</p>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>Questo tool valuta l'employee experience su quattro aree con pesi diversi. Per ogni dimensione si assegna un punteggio da 0 a 4 e si indica la fonte del dato. Il risultato è un indice per area e un EX Index globale ponderato.</p>
                </div>
                <Link href="/lumen" className="inline-block mt-6 text-sm text-primary font-semibold hover:underline transition-colors">
                  Scopri come lavora Lumen →
                </Link>
              </div>
            </div>

            {/* ── STICKY SIDEBAR ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-3">

                {/* EX Index */}
                <div className="bg-foreground text-background rounded-xl p-5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-background/50 mb-1">EX Index globale</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-mono font-bold text-6xl leading-none tabular-nums" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                      {globalScore}
                    </span>
                    <span className="text-background/50 font-mono">/100</span>
                  </div>
                  <p className="mt-1 text-sm text-background/70">{globalLevel}</p>
                </div>

                {/* Area bars */}
                <div className="rounded-xl border border-border/60 bg-background p-4 space-y-3">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Aree</p>
                  {areaScores.map((a, i) => (
                    <div key={a.id}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-foreground flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.color }} />
                          {AREA_LABELS[i]}
                        </span>
                        <span className="text-xs font-mono tabular-nums text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                          {a.score}/100
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full transition-all duration-300 rounded-full" style={{ width: `${a.score}%`, background: a.color }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Radar */}
                <div className="rounded-xl border border-border/60 bg-muted/30 p-3 flex justify-center">
                  <svg width={sbSize} height={sbSize}>
                    {[0.25, 0.5, 0.75, 1].map((f, i) => {
                      const r = sbRadius * f;
                      const pts = angles.map((a) => `${sbCenter + r * Math.cos(a)},${sbCenter + r * Math.sin(a)}`).join(" ");
                      return <polygon key={i} points={pts} fill="none" stroke="hsl(var(--border))" strokeWidth={1} />;
                    })}
                    {angles.map((a, i) => (
                      <line key={i} x1={sbCenter} y1={sbCenter} x2={sbCenter + sbRadius * Math.cos(a)} y2={sbCenter + sbRadius * Math.sin(a)} stroke="hsl(var(--border))" strokeWidth={1} />
                    ))}
                    <polygon points={sbPolygonPoints} fill="hsl(var(--foreground) / 0.15)" stroke="hsl(var(--foreground))" strokeWidth={1.5} />
                    {areaScores.map((a, i) => {
                      const r = (a.score / 100) * sbRadius;
                      return <circle key={a.id} cx={sbCenter + r * Math.cos(angles[i])} cy={sbCenter + r * Math.sin(angles[i])} r={4} fill={a.color} stroke="white" strokeWidth={1.5} />;
                    })}
                    {AREA_LABELS.map((label, i) => (
                      <text key={i} x={sbCenter + (sbRadius + 16) * Math.cos(angles[i])} y={sbCenter + (sbRadius + 16) * Math.sin(angles[i])} textAnchor="middle" dominantBaseline="middle" fontSize={9} fill="hsl(var(--muted-foreground))">{label}</text>
                    ))}
                  </svg>
                </div>

                {/* Scale reference */}
                <div className="rounded-lg border border-border/60 bg-background overflow-hidden">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-3 pt-3 pb-1">Scala</p>
                  <div className="divide-y divide-border/40">
                    {SCALE_LEVELS.map((s) => (
                      <div key={s.n} className="flex items-center justify-between px-3 py-1.5">
                        <span className="text-[11px] font-mono font-bold text-foreground">{s.n}</span>
                        <span className="text-[11px] text-muted-foreground">{s.t}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

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
