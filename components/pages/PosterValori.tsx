"use client";

import React, { useState } from "react";
import { Download, Plus, X, ArrowRight } from "lucide-react";

type Layout = "essenziale" | "bauhaus";

export default function PosterValoriPage() {
  const [values, setValues] = useState([
    "Trasparenza",
    "Responsabilità",
    "Innovazione",
    "Eccellenza",
    "Persone",
  ]);
  const [companyName, setCompanyName] = useState("");
  const [bgColor, setBgColor] = useState("#F4F1EA");
  const [textColor, setTextColor] = useState("#1A1A1A");
  const [accentColor, setAccentColor] = useState("#D4FF00");
  const [layout, setLayout] = useState<Layout>("essenziale");
  const [showBetrayal, setShowBetrayal] = useState(false);
  const [generating, setGenerating] = useState(false);

  const updateValue = (i: number, v: string) => {
    const next = [...values]; next[i] = v; setValues(next);
  };
  const addValue = () => { if (values.length < 5) setValues([...values, ""]); };
  const removeValue = (i: number) => { if (values.length > 4) setValues(values.filter((_, idx) => idx !== i)); };

  const loadScript = (src: string): Promise<void> =>
    new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
      const s = document.createElement("script");
      s.src = src; s.onload = () => resolve(); s.onerror = reject;
      document.head.appendChild(s);
    });

  const hex2rgb = (hex: string): [number, number, number] => {
    const c = hex.replace("#", "").padEnd(6, "0");
    return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)];
  };

  // ── PDF: stile Essenziale ──────────────────────────────────────────────────
  const generateEssenziale = (doc: any) => {
    const W = 420, H = 594, pX = 30, pY = 28, mmPerPt = 0.353;
    const accentFinal = accentColor.toLowerCase().replace(/\s/g, "") === "#ffffff" ? textColor : accentColor;
    const [bgR, bgG, bgB] = hex2rgb(bgColor);
    const [txR, txG, txB] = hex2rgb(textColor);
    const [acR, acG, acB] = hex2rgb(accentFinal);

    doc.setFillColor(bgR, bgG, bgB);
    doc.rect(0, 0, W, H, "F");

    const labelFS = 9, labelCapH = labelFS * 0.70 * mmPerPt;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(labelFS);
    doc.setTextColor(txR, txG, txB);
    doc.text(companyName ? "I VALORI DI" : "I NOSTRI VALORI", pX, pY + labelCapH);
    let curY = pY + labelCapH + 10;

    if (companyName) {
      const fs = 44, capH = fs * 0.72 * mmPerPt;
      doc.setFont("helvetica", "bolditalic");
      doc.setFontSize(fs);
      doc.text(companyName, pX, curY + capH);
      curY += capH + 18;
    }

    const footerLineY = H - pY - 14;
    const filled = values.filter((v) => v.trim());
    const numV = filled.length;
    const valTop = curY + 6, valBottom = footerLineY - 10;
    const rowH = (valBottom - valTop) / numV;
    const numColW = 26, valContentW = W - pX - (pX + numColW);
    const longestLen = Math.max(...filled.map((v) => v.length), 1);
    const valFS = Math.floor(Math.min(
      (rowH * 0.52) / (0.72 * mmPerPt),
      valContentW / (longestLen * 0.58 * mmPerPt)
    ));
    const valCapH = valFS * 0.72 * mmPerPt;
    const numFS = Math.max(16, Math.floor(valFS * 0.36));

    filled.forEach((v, i) => {
      const rY = valTop + i * rowH;
      const baselineY = rY + (rowH + valCapH) / 2;
      doc.setDrawColor(txR, txG, txB); doc.setLineWidth(0.25);
      doc.line(pX, rY, W - pX, rY);
      doc.setFont("helvetica", "bold"); doc.setFontSize(numFS);
      doc.setTextColor(acR, acG, acB);
      doc.text(`0${i + 1}`, pX, baselineY);
      doc.setFont("helvetica", "bold"); doc.setFontSize(valFS);
      doc.setTextColor(txR, txG, txB);
      doc.text(v, pX + numColW, baselineY);
    });
    doc.setDrawColor(txR, txG, txB); doc.setLineWidth(0.25);
    doc.line(pX, valTop + numV * rowH, W - pX, valTop + numV * rowH);

    doc.setLineWidth(0.7); doc.setDrawColor(txR, txG, txB);
    doc.line(pX, footerLineY, W - pX, footerLineY);
    doc.setFont("helvetica", "italic"); doc.setFontSize(7);
    doc.setTextColor(txR, txG, txB);
    doc.text(
      "Realizzato con il generatore di poster di Venturo, che di mestiere aiuta le aziende quando i poster non bastano più. venturoconsulting.it",
      pX, footerLineY + 6, { maxWidth: W - pX * 2 - 32 }
    );
    doc.setFillColor(acR, acG, acB);
    doc.rect(W - pX - 26, footerLineY + 3, 26, 5, "F");
  };

  // ── PDF: stile Bauhaus ────────────────────────────────────────────────────
  const generateBauhaus = (doc: any) => {
    const W = 420, H = 594, pX = 22, pY = 22, mmPerPt = 0.353;
    // Scale factor from HTML design (800×1131px) to A2 mm
    const sc = 420 / 800; // 0.525 mm/px
    const [bgR, bgG, bgB] = hex2rgb(bgColor);
    const [txR, txG, txB] = hex2rgb(textColor);
    // Bauhaus primaries — always fixed
    const RED: [number, number, number] = [230, 57, 70];
    const BLUE: [number, number, number] = [29, 78, 216];
    const YELLOW: [number, number, number] = [246, 190, 0];

    // Background
    doc.setFillColor(bgR, bgG, bgB);
    doc.rect(0, 0, W, H, "F");

    // Geometric composition — top right (matches Poster1 layout)
    const geoTop = 44 * sc;        // 23.1 mm
    const geoRight = W - 48 * sc;  // 394.8 mm

    // Black vertical bar
    const barX = geoRight - (240 + 14) * sc;
    const barW = 14 * sc, barH = 300 * sc;
    doc.setFillColor(txR, txG, txB);
    doc.rect(barX, geoTop, barW, barH, "F");

    // Red circle
    const circR = (220 * sc) / 2;
    doc.setFillColor(...RED);
    doc.circle(geoRight - circR, geoTop + circR, circR, "F");

    // Blue square
    const sqW = 140 * sc;
    const sqX = geoRight - (160 + 140) * sc;
    const sqY = geoTop + 120 * sc;
    doc.setFillColor(...BLUE);
    doc.rect(sqX, sqY, sqW, sqW, "F");

    // Yellow triangle (bottom-left, bottom-right, top-center)
    const triSz = 140 * sc;
    const triL = geoRight - triSz, triT = geoTop + 200 * sc;
    doc.setFillColor(...YELLOW);
    doc.triangle(triL, triT + triSz, geoRight, triT + triSz, (triL + geoRight) / 2, triT, "F");

    // Header (company + year)
    doc.setFont("helvetica", "bold"); doc.setFontSize(9);
    doc.setTextColor(txR, txG, txB);
    doc.text((companyName || "NOME AZIENDA").toUpperCase(), pX, pY + 3.5);
    doc.text(new Date().getFullYear().toString(), W - pX, pY + 3.5, { align: "right" });

    // Title "I NOSTRI / VALORI."
    const titleFS = 82, titleCapH = titleFS * 0.72 * mmPerPt;
    const titleLineH = titleFS * 0.92 * mmPerPt;
    const titleY = geoTop + barH + 18;
    doc.setFont("helvetica", "bold"); doc.setFontSize(titleFS);
    doc.text("I NOSTRI", pX, titleY);
    doc.text("VALORI.", pX, titleY + titleLineH);

    // Values list
    const listTop = titleY + titleLineH + titleCapH + 22;
    const footerY = H - pY - 14;
    const filled = values.filter((v) => v.trim());
    const numV = filled.length;
    const rowH = (footerY - listTop) / numV;
    const numColW = 36;
    const valContentW = W - pX - (pX + numColW);
    const longestLen = Math.max(...filled.map((v) => v.length), 1);
    const valFS = Math.floor(Math.min(
      (rowH * 0.46) / (0.72 * mmPerPt),
      valContentW / (longestLen * 0.62 * mmPerPt)
    ));
    const valCapH = valFS * 0.72 * mmPerPt;
    const numFS = Math.max(12, Math.floor(valFS * 0.36));

    filled.forEach((v, i) => {
      const rY = listTop + i * rowH;
      const baselineY = rY + (rowH + valCapH) / 2;
      doc.setDrawColor(txR, txG, txB); doc.setLineWidth(0.7);
      doc.line(pX, rY, W - pX, rY);
      doc.setFont("helvetica", "bold"); doc.setFontSize(numFS);
      doc.setTextColor(txR, txG, txB);
      doc.text(`0${i + 1}`, pX, baselineY);
      doc.setFont("helvetica", "bold"); doc.setFontSize(valFS);
      doc.text(v.toUpperCase(), pX + numColW, baselineY);
    });
    doc.setDrawColor(txR, txG, txB); doc.setLineWidth(0.7);
    doc.line(pX, listTop + numV * rowH, W - pX, listTop + numV * rowH);

    // Footer
    doc.setLineWidth(0.7); doc.line(pX, footerY, W - pX, footerY);
    doc.setFont("helvetica", "bold"); doc.setFontSize(9);
    doc.setTextColor(txR, txG, txB);
    doc.text("MANIFESTO INTERNO", pX, footerY + 6);
    doc.text("STAMPA A2 · 2026", W - pX, footerY + 6, { align: "right" });
  };

  // ── Entry point ───────────────────────────────────────────────────────────
  const handleGenerate = async () => {
    setGenerating(true);
    try {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
      const { jsPDF } = (window as any).jspdf;
      const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a2" });
      if (layout === "bauhaus") generateBauhaus(doc);
      else generateEssenziale(doc);
      doc.save(`Poster Valori${companyName ? " - " + companyName : ""}.pdf`);
      setTimeout(() => setShowBetrayal(true), 200);
    } catch (e) {
      console.error("PDF error:", e);
    } finally {
      setGenerating(false);
    }
  };

  const filledValues = values.filter((v) => v.trim());
  const accentPreview = accentColor === "#FFFFFF" || accentColor === "#ffffff" ? textColor : accentColor;
  const longestLen = Math.max(...filledValues.map((v) => v.length), 1);
  const previewRowH = filledValues.length > 0 ? Math.floor((layout === "bauhaus" ? 160 : 220) / filledValues.length) : 40;
  const previewValFS = Math.min(
    Math.floor(previewRowH * 0.46),
    Math.floor(145 / (longestLen * 0.62 * 0.353 * 3.78))
  );

  return (
    <div className="min-h-screen w-full bg-stone-100 p-6" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&display=swap" rel="stylesheet" />

      <div className="max-w-7xl mx-auto mb-8">
        <div className="text-xs uppercase tracking-widest text-stone-500 mb-2">Venturo · Tools</div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "Fraunces, serif" }}>
          Il generatore di poster<br />
          <span className="italic text-stone-500">che non cambierà la tua cultura aziendale.</span>
        </h1>
        <p className="mt-4 text-stone-600 max-w-2xl leading-relaxed">
          I valori non sono quelli appesi in un poster nei corridoi. Ma se proprio devi appenderne uno, almeno fallo bello.
          Inserisci 4 o 5 valori, scegli i colori, e scarica un PDF stampabile in A2.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FORM */}
        <div className="bg-white p-6 rounded-sm border border-stone-200">
          <h2 className="text-sm uppercase tracking-widest text-stone-500 mb-6">Configura il poster</h2>

          {/* Layout selector */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-stone-600 mb-3">Stile</label>
            <div className="grid grid-cols-2 gap-3">
              {([
                { id: "essenziale", label: "Essenziale", desc: "Tipografico, linee, colori custom" },
                { id: "bauhaus", label: "Bauhaus", desc: "Geometrico, primari, Helvetica" },
              ] as { id: Layout; label: string; desc: string }[]).map(({ id, label, desc }) => (
                <button
                  key={id}
                  onClick={() => setLayout(id)}
                  className={`p-3 border text-left transition-colors ${layout === id ? "border-stone-900 bg-stone-900 text-white" : "border-stone-300 hover:border-stone-500"}`}
                >
                  <div className="text-sm font-semibold">{label}</div>
                  <div className={`text-xs mt-0.5 ${layout === id ? "text-stone-300" : "text-stone-500"}`}>{desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-stone-600 mb-2">Nome azienda (opzionale)</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Es. Acme Corp"
              className="w-full px-3 py-2 border border-stone-300 focus:border-stone-900 outline-none text-sm" />
          </div>

          {/* Values */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-xs uppercase tracking-wider text-stone-600">I tuoi valori ({values.length}/5)</label>
              {values.length < 5 && (
                <button onClick={addValue} className="text-xs flex items-center gap-1 text-stone-600 hover:text-stone-900">
                  <Plus size={12} /> Aggiungi
                </button>
              )}
            </div>
            <div className="space-y-2">
              {values.map((v, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <span className="text-xs text-stone-400 w-6" style={{ fontFamily: "Fraunces, serif" }}>0{i + 1}</span>
                  <input type="text" value={v} onChange={(e) => updateValue(i, e.target.value)}
                    placeholder={`Valore ${i + 1}`}
                    className="flex-1 px-3 py-2 border border-stone-300 focus:border-stone-900 outline-none text-sm" />
                  {values.length > 4 && (
                    <button onClick={() => removeValue(i)} className="text-stone-400 hover:text-stone-900 p-1"><X size={14} /></button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Colors — only shown for Essenziale */}
          {layout === "essenziale" && (
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-stone-600 mb-3">Colori</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Sfondo", val: bgColor, set: setBgColor },
                  { label: "Testo", val: textColor, set: setTextColor },
                  { label: "Accento", val: accentColor, set: setAccentColor },
                ].map(({ label, val, set }) => (
                  <div key={label}>
                    <div className="text-xs text-stone-500 mb-1">{label}</div>
                    <div className="flex items-center gap-2">
                      <input type="color" value={val} onChange={(e) => set(e.target.value)} className="w-10 h-10 border border-stone-300 cursor-pointer" />
                      <input type="text" value={val} onChange={(e) => set(e.target.value)} className="flex-1 min-w-0 px-2 py-1 border border-stone-300 text-xs" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2 flex-wrap">
                {[
                  { label: "Venturo", bg: "#F4F1EA", tx: "#1A1A1A", ac: "#D4FF00" },
                  { label: "Bianco/rosso", bg: "#FFFFFF", tx: "#000000", ac: "#FF3B30" },
                  { label: "Scuro", bg: "#1A1A1A", tx: "#F4F1EA", ac: "#D4FF00" },
                  { label: "Caldi", bg: "#E8E4D9", tx: "#2D3E2D", ac: "#C24D2C" },
                ].map(({ label, bg, tx, ac }) => (
                  <button key={label} onClick={() => { setBgColor(bg); setTextColor(tx); setAccentColor(ac); }}
                    className="text-xs px-2 py-1 border border-stone-300 hover:bg-stone-50">{label}</button>
                ))}
              </div>
            </div>
          )}

          {layout === "bauhaus" && (
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-stone-600 mb-2">Sfondo</label>
              <div className="flex items-center gap-2">
                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-10 h-10 border border-stone-300 cursor-pointer" />
                <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-28 px-2 py-1 border border-stone-300 text-xs" />
                <span className="text-xs text-stone-400">Rosso, blu e giallo sono fissi — stile Bauhaus.</span>
              </div>
            </div>
          )}

          <button onClick={handleGenerate} disabled={filledValues.length < 4 || generating}
            className="w-full bg-stone-900 text-white py-4 px-6 flex items-center justify-center gap-2 hover:bg-stone-700 transition-colors disabled:bg-stone-300 disabled:cursor-not-allowed text-sm uppercase tracking-wider">
            <Download size={16} />
            {generating ? "Generazione in corso…" : "Scarica PDF A2"}
          </button>
          {filledValues.length < 4 && <p className="text-xs text-stone-500 mt-2 text-center">Servono almeno 4 valori</p>}
        </div>

        {/* PREVIEW */}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-stone-500 mb-6">Anteprima — {layout === "bauhaus" ? "Bauhaus" : "Essenziale"}</h2>
          <div className="bg-stone-200 p-6 flex items-center justify-center">

            {layout === "essenziale" ? (
              /* Essenziale preview */
              <div className="shadow-2xl" style={{ width: 210, height: 297, background: bgColor, color: textColor, padding: "14px 15px", boxSizing: "border-box", display: "flex", flexDirection: "column", fontFamily: "Inter, sans-serif" }}>
                <div style={{ fontSize: 4.5, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, marginBottom: 5, flexShrink: 0 }}>
                  {companyName ? "I valori di" : "I nostri valori"}
                </div>
                {companyName && (
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: 13, fontWeight: 800, lineHeight: 1, marginBottom: 8, fontStyle: "italic", flexShrink: 0 }}>{companyName}</div>
                )}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
                  {filledValues.map((v, i) => (
                    <div key={i} style={{ flex: 1, display: "flex", alignItems: "center", gap: 5, borderTop: `0.5px solid ${textColor}44` }}>
                      <div style={{ fontSize: Math.max(5, Math.floor(previewValFS * 0.36)), fontWeight: 700, color: accentPreview, minWidth: 13, flexShrink: 0 }}>0{i + 1}</div>
                      <div style={{ fontFamily: "Fraunces, serif", fontSize: previewValFS, fontWeight: 800, lineHeight: 1 }}>{v}</div>
                    </div>
                  ))}
                  <div style={{ borderTop: `0.5px solid ${textColor}44` }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 6, paddingTop: 4, borderTop: `1px solid ${textColor}` }}>
                  <div style={{ fontSize: 3.5, fontStyle: "italic", opacity: 0.6 }}>venturoconsulting.it</div>
                  <div style={{ width: 12, height: 2.5, background: accentPreview }} />
                </div>
              </div>
            ) : (
              /* Bauhaus preview */
              <div className="shadow-2xl" style={{ width: 210, height: 297, background: bgColor, color: textColor, padding: "11px 11px", boxSizing: "border-box", display: "flex", flexDirection: "column", fontFamily: "Helvetica, Arial, sans-serif", overflow: "hidden", position: "relative" }}>
                {/* Geometric shapes */}
                <div style={{ position: "absolute", top: 11, right: 11, width: 170, height: 160 }}>
                  {/* Black bar */}
                  <div style={{ position: "absolute", top: 0, right: 120, width: 7, height: 160, background: textColor }} />
                  {/* Red circle */}
                  <div style={{ position: "absolute", top: 0, right: 0, width: 110, height: 110, borderRadius: "50%", background: "#E63946" }} />
                  {/* Blue square */}
                  <div style={{ position: "absolute", top: 60, right: 80, width: 70, height: 70, background: "#1D4ED8" }} />
                  {/* Yellow triangle */}
                  <svg style={{ position: "absolute", top: 100, right: 0, width: 70, height: 70 }} viewBox="0 0 100 100">
                    <polygon points="0,100 100,100 50,0" fill="#F6BE00" />
                  </svg>
                </div>

                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 4.5, fontWeight: 700, letterSpacing: "0.14em", zIndex: 2, flexShrink: 0 }}>
                  <span>{(companyName || "NOME AZIENDA").toUpperCase()}</span>
                  <span>2026</span>
                </div>

                {/* Title */}
                <div style={{ marginTop: 155, fontSize: 22, fontWeight: 700, lineHeight: 0.92, letterSpacing: "-0.03em", flexShrink: 0 }}>
                  I NOSTRI<br />VALORI.
                </div>

                {/* Values */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: 8, minHeight: 0 }}>
                  {filledValues.map((v, i) => (
                    <div key={i} style={{ flex: 1, display: "flex", alignItems: "center", gap: 5, borderTop: `0.7px solid ${textColor}`, paddingLeft: 0 }}>
                      <span style={{ fontSize: Math.max(4, Math.floor(previewValFS * 0.36)), fontWeight: 700, minWidth: 14, flexShrink: 0 }}>0{i + 1}</span>
                      <span style={{ fontSize: previewValFS, fontWeight: 700, lineHeight: 1 }}>{v.toUpperCase()}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: `0.7px solid ${textColor}` }} />
                </div>

                {/* Footer */}
                <div style={{ flexShrink: 0, display: "flex", justifyContent: "space-between", marginTop: 5, paddingTop: 4, borderTop: `0.8px solid ${textColor}`, fontSize: 3.5, fontWeight: 700, letterSpacing: "0.12em" }}>
                  <span>MANIFESTO</span>
                  <span style={{ opacity: 0.5 }}>STAMPA A2</span>
                </div>
              </div>
            )}
          </div>
          <p className="text-xs text-stone-500 mt-3">
            PDF in A2 (420×594mm), testo vettoriale.
            {layout === "bauhaus" ? " Palette Bauhaus (rosso, blu, giallo) fissa — stile invariante." : " Colori e font personalizzabili."}
          </p>
        </div>
      </div>

      {/* BETRAYAL SCREEN */}
      {showBetrayal && (
        <div className="fixed inset-0 bg-stone-900/95 z-50 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-stone-50 p-12 relative">
            <button onClick={() => setShowBetrayal(false)} className="absolute top-4 right-4 text-stone-400 hover:text-stone-900"><X size={20} /></button>
            <div className="text-xs uppercase tracking-widest text-stone-500 mb-6">Una cosa prima di chiudere</div>
            <h2 className="text-3xl md:text-4xl leading-tight mb-6" style={{ fontFamily: "Fraunces, serif" }}>
              Hai appena creato un poster.<br />
              <span className="italic text-stone-500">È la parte facile.</span>
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-4">La parte difficile è quando una decisione difficile contraddice uno di questi valori e nessuno se ne accorge.</p>
            <p className="text-lg text-stone-700 leading-relaxed mb-8">Se vuoi capire dove la tua organizzazione dice una cosa e ne fa un&apos;altra, partiamo da una conversazione.</p>
            <a href="/#contact" className="bg-stone-900 text-white py-4 px-8 inline-flex items-center gap-2 hover:bg-stone-700 transition-colors text-sm uppercase tracking-wider">
              Prenota 30 minuti con Venturo <ArrowRight size={16} />
            </a>
            <p className="text-xs text-stone-400 mt-6">Nessun obbligo, nessun pitch. Solo una conversazione.</p>
          </div>
        </div>
      )}
    </div>
  );
}
