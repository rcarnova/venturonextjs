"use client";

import React, { useState } from "react";
import { Download, Plus, X, ArrowRight } from "lucide-react";

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
  const [showBetrayal, setShowBetrayal] = useState(false);
  const [generating, setGenerating] = useState(false);

  const updateValue = (i: number, v: string) => {
    const next = [...values];
    next[i] = v;
    setValues(next);
  };
  const addValue = () => { if (values.length < 5) setValues([...values, ""]); };
  const removeValue = (i: number) => { if (values.length > 4) setValues(values.filter((_, idx) => idx !== i)); };

  const loadScript = (src: string): Promise<void> =>
    new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve();
      s.onerror = reject;
      document.head.appendChild(s);
    });

  const hex2rgb = (hex: string): [number, number, number] => {
    const c = hex.replace("#", "").padEnd(6, "0");
    return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)];
  };

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
      const { jsPDF } = (window as any).jspdf;

      const W = 420, H = 594, pX = 30, pY = 28;
      const mmPerPt = 0.353;
      const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a2" });

      const accentFinal = accentColor.toLowerCase().replace(/\s/g, "") === "#ffffff" ? textColor : accentColor;
      const [bgR, bgG, bgB] = hex2rgb(bgColor);
      const [txR, txG, txB] = hex2rgb(textColor);
      const [acR, acG, acB] = hex2rgb(accentFinal);

      // Sfondo
      doc.setFillColor(bgR, bgG, bgB);
      doc.rect(0, 0, W, H, "F");

      // --- Label ---
      const labelFS = 9;
      const labelCapH = labelFS * 0.70 * mmPerPt;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(labelFS);
      doc.setTextColor(txR, txG, txB);
      doc.text(companyName ? "I VALORI DI" : "I NOSTRI VALORI", pX, pY + labelCapH);
      let curY = pY + labelCapH + 10;

      // --- Nome azienda ---
      const companyFS = 44;
      const companyCapH = companyFS * 0.72 * mmPerPt;
      if (companyName) {
        doc.setFont("helvetica", "bolditalic");
        doc.setFontSize(companyFS);
        doc.text(companyName, pX, curY + companyCapH);
        curY += companyCapH + 18;
      }

      // --- Footer (calcolo posizione, si disegna dopo) ---
      const footerLineY = H - pY - 14;

      // --- Valori: riempiono tutta l'area disponibile ---
      const filled = values.filter((v) => v.trim());
      const numV = filled.length;
      const valTop = curY + 6;
      const valBottom = footerLineY - 10;
      const valAreaH = valBottom - valTop;
      const rowH = valAreaH / numV;

      // Font size dinamico: massimo vincolato da altezza riga e lunghezza parola
      const numColW = 26;
      const valContentW = W - pX - (pX + numColW); // larghezza area testo valori
      const longestLen = Math.max(...filled.map((v) => v.length), 1);
      const fsFromH = (rowH * 0.52) / (0.72 * mmPerPt);       // riempie 52% dell'altezza riga
      const fsFromW = valContentW / (longestLen * 0.58 * mmPerPt); // non sfora in larghezza
      const valFS = Math.floor(Math.min(fsFromH, fsFromW));
      const valCapH = valFS * 0.72 * mmPerPt;
      const numFS = Math.max(16, Math.floor(valFS * 0.36));

      filled.forEach((v, i) => {
        const rY = valTop + i * rowH;
        // Baseline centrata verticalmente nella riga
        const baselineY = rY + (rowH + valCapH) / 2;

        // Linea separatrice
        doc.setDrawColor(txR, txG, txB);
        doc.setLineWidth(0.25);
        doc.line(pX, rY, W - pX, rY);

        // Numero
        doc.setFont("helvetica", "bold");
        doc.setFontSize(numFS);
        doc.setTextColor(acR, acG, acB);
        doc.text(`0${i + 1}`, pX, baselineY);

        // Testo valore
        doc.setFont("helvetica", "bold");
        doc.setFontSize(valFS);
        doc.setTextColor(txR, txG, txB);
        doc.text(v, pX + numColW, baselineY);
      });

      // Linea finale sotto l'ultimo valore
      doc.setDrawColor(txR, txG, txB);
      doc.setLineWidth(0.25);
      doc.line(pX, valTop + numV * rowH, W - pX, valTop + numV * rowH);

      // --- Footer ---
      doc.setLineWidth(0.7);
      doc.setDrawColor(txR, txG, txB);
      doc.line(pX, footerLineY, W - pX, footerLineY);

      doc.setFont("helvetica", "italic");
      doc.setFontSize(7);
      doc.setTextColor(txR, txG, txB);
      doc.text(
        "Realizzato con il generatore di poster di Venturo, che di mestiere aiuta le aziende quando i poster non bastano più. venturoconsulting.it",
        pX,
        footerLineY + 6,
        { maxWidth: W - pX * 2 - 32 }
      );

      doc.setFillColor(acR, acG, acB);
      doc.rect(W - pX - 26, footerLineY + 3, 26, 5, "F");

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
  // Preview font size: same logic as PDF but in px (1mm ≈ 3.78px at 96dpi)
  const previewContentW = 210 - 30 - 26; // preview width minus paddings and num col (px)
  const longestLen = Math.max(...filledValues.map((v) => v.length), 1);
  const previewValFS = Math.floor(Math.min(
    (297 / filledValues.length) * 0.52 * 0.72, // height constraint (px)
    previewContentW / (longestLen * 0.58 * 0.353 * 3.78) // width constraint (px)
  ));

  return (
    <div className="min-h-screen w-full bg-stone-100 p-6" style={{ fontFamily: "Inter, sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

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

          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider text-stone-600 mb-2">Nome azienda (opzionale)</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Es. Acme Corp"
              className="w-full px-3 py-2 border border-stone-300 focus:border-stone-900 outline-none text-sm"
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-xs uppercase tracking-wider text-stone-600">
                I tuoi valori ({values.length}/5)
              </label>
              {values.length < 5 && (
                <button onClick={addValue} className="text-xs flex items-center gap-1 text-stone-600 hover:text-stone-900">
                  <Plus size={12} /> Aggiungi
                </button>
              )}
            </div>
            <div className="space-y-2">
              {values.map((v, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <span className="text-xs text-stone-400 w-6" style={{ fontFamily: "Fraunces, serif" }}>
                    0{i + 1}
                  </span>
                  <input
                    type="text"
                    value={v}
                    onChange={(e) => updateValue(i, e.target.value)}
                    placeholder={`Valore ${i + 1}`}
                    className="flex-1 px-3 py-2 border border-stone-300 focus:border-stone-900 outline-none text-sm"
                  />
                  {values.length > 4 && (
                    <button onClick={() => removeValue(i)} className="text-stone-400 hover:text-stone-900 p-1">
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

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
                <button
                  key={label}
                  onClick={() => { setBgColor(bg); setTextColor(tx); setAccentColor(ac); }}
                  className="text-xs px-2 py-1 border border-stone-300 hover:bg-stone-50"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={filledValues.length < 4 || generating}
            className="w-full bg-stone-900 text-white py-4 px-6 flex items-center justify-center gap-2 hover:bg-stone-700 transition-colors disabled:bg-stone-300 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
          >
            <Download size={16} />
            {generating ? "Generazione in corso…" : "Scarica PDF A2"}
          </button>
          {filledValues.length < 4 && (
            <p className="text-xs text-stone-500 mt-2 text-center">Servono almeno 4 valori</p>
          )}
        </div>

        {/* PREVIEW */}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-stone-500 mb-6">Anteprima (proporzionale A2)</h2>
          <div className="bg-stone-200 p-6 flex items-center justify-center">
            <div
              className="shadow-2xl"
              style={{
                width: "210px",
                height: "297px",
                background: bgColor,
                color: textColor,
                padding: "14px 15px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {/* Label */}
              <div style={{ fontSize: "4.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, marginBottom: "5px", flexShrink: 0 }}>
                {companyName ? "I valori di" : "I nostri valori"}
              </div>

              {/* Company name */}
              {companyName && (
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "13px", fontWeight: 800, lineHeight: 1, marginBottom: "8px", fontStyle: "italic", flexShrink: 0 }}>
                  {companyName}
                </div>
              )}

              {/* Values — fill remaining space, each row equal height */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
                {filledValues.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      borderTop: `0.5px solid ${textColor}44`,
                    }}
                  >
                    <div style={{ fontFamily: "Fraunces, serif", fontSize: `${Math.max(6, Math.floor(previewValFS * 0.36))}px`, fontWeight: 700, color: accentPreview, minWidth: "13px", flexShrink: 0 }}>
                      0{i + 1}
                    </div>
                    <div style={{ fontFamily: "Fraunces, serif", fontSize: `${previewValFS}px`, fontWeight: 800, lineHeight: 1 }}>
                      {v}
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: `0.5px solid ${textColor}44` }} />
              </div>

              {/* Footer */}
              <div style={{ flexShrink: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "6px", paddingTop: "4px", borderTop: `1px solid ${textColor}` }}>
                <div style={{ fontSize: "3.5px", fontStyle: "italic", maxWidth: "130px", lineHeight: 1.4, opacity: 0.6 }}>
                  Realizzato con il generatore di poster di Venturo. venturoconsulting.it
                </div>
                <div style={{ width: "12px", height: "2.5px", background: accentPreview, flexShrink: 0 }} />
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 mt-3">
            Il PDF sarà in A2 (420×594mm). Il testo nel PDF usa Helvetica Bold — font integrato in jsPDF, vettoriale e nitido a qualsiasi dimensione di stampa.
          </p>
        </div>
      </div>

      {/* BETRAYAL SCREEN */}
      {showBetrayal && (
        <div className="fixed inset-0 bg-stone-900/95 z-50 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-stone-50 p-12 relative">
            <button onClick={() => setShowBetrayal(false)} className="absolute top-4 right-4 text-stone-400 hover:text-stone-900">
              <X size={20} />
            </button>
            <div className="text-xs uppercase tracking-widest text-stone-500 mb-6">Una cosa prima di chiudere</div>
            <h2 className="text-3xl md:text-4xl leading-tight mb-6" style={{ fontFamily: "Fraunces, serif" }}>
              Hai appena creato un poster.<br />
              <span className="italic text-stone-500">È la parte facile.</span>
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-4">
              La parte difficile è quando una decisione difficile contraddice uno di questi valori e nessuno se ne accorge.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-8">
              Se vuoi capire dove la tua organizzazione dice una cosa e ne fa un&apos;altra, partiamo da una conversazione.
            </p>
            <a
              href="/#contact"
              className="bg-stone-900 text-white py-4 px-8 inline-flex items-center gap-2 hover:bg-stone-700 transition-colors text-sm uppercase tracking-wider"
            >
              Prenota 30 minuti con Venturo <ArrowRight size={16} />
            </a>
            <p className="text-xs text-stone-400 mt-6">Nessun obbligo, nessun pitch. Solo una conversazione.</p>
          </div>
        </div>
      )}
    </div>
  );
}
