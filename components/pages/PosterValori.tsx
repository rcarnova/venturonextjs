"use client";

import React, { useState, useRef } from "react";
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
  const posterRef = useRef<HTMLDivElement>(null);

  const updateValue = (i: number, v: string) => {
    const next = [...values];
    next[i] = v;
    setValues(next);
  };

  const addValue = () => {
    if (values.length < 5) setValues([...values, ""]);
  };

  const removeValue = (i: number) => {
    if (values.length > 4) setValues(values.filter((_, idx) => idx !== i));
  };

  const handleGenerate = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Poster Valori - ${companyName || "I tuoi valori"}</title>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
        <style>
          @page { size: A2 portrait; margin: 0; }
          html, body { margin: 0; padding: 0; width: 420mm; height: 594mm; overflow: hidden; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .poster-print {
            width: 420mm; height: 594mm; overflow: hidden;
            background: ${bgColor}; color: ${textColor};
            padding: 30mm 32mm; box-sizing: border-box;
            font-family: 'Inter', sans-serif;
            display: flex; flex-direction: column;
          }
          .label-print { font-size: 12pt; letter-spacing: 0.3em; text-transform: uppercase; font-weight: 500; margin-bottom: 10mm; flex-shrink: 0; }
          .company-print { font-family: 'Fraunces', serif; font-size: 40pt; font-weight: 800; line-height: 1; margin-bottom: 16mm; font-style: italic; flex-shrink: 0; }
          .values-list-print { flex: 1; min-height: 0; display: flex; flex-direction: column; justify-content: center; gap: 0; }
          .value-row-print { display: flex; align-items: baseline; gap: 8mm; border-bottom: 1pt solid ${textColor}33; padding: 6mm 0; }
          .num-print { font-family: 'Fraunces', serif; font-size: 28pt; font-weight: 600; color: ${accentColor === "#FFFFFF" || accentColor === "#ffffff" ? textColor : accentColor}; min-width: 48pt; flex-shrink: 0; }
          .val-print { font-family: 'Fraunces', serif; font-size: 46pt; font-weight: 800; line-height: 1.05; }
          .footer-print { display: flex; justify-content: space-between; align-items: flex-end; flex-shrink: 0; margin-top: 10mm; padding-top: 8mm; border-top: 2pt solid ${textColor}; }
          .footer-text-print { font-size: 8pt; font-style: italic; max-width: 220mm; line-height: 1.4; opacity: 0.7; }
          .accent-bar-print { width: 28mm; height: 5mm; background: ${accentColor}; flex-shrink: 0; }
        </style>
      </head>
      <body>
        <div class="poster-print">
          <div class="label-print">${companyName ? "I valori di" : "I nostri valori"}</div>
          ${companyName ? `<div class="company-print">${companyName}</div>` : ""}
          <div class="values-list-print">
            ${values
              .filter((v) => v.trim())
              .map(
                (v, i) =>
                  `<div class="value-row-print"><div class="num-print">0${i + 1}</div><div class="val-print">${v}</div></div>`
              )
              .join("")}
          </div>
          <div class="footer-print">
            <div class="footer-text-print">Realizzato con il generatore di poster di Venturo, che di mestiere aiuta le aziende quando i poster non bastano più. → venturoconsulting.it</div>
            <div class="accent-bar-print"></div>
          </div>
        </div>
        <script>document.fonts.ready.then(() => { window.print(); });<\/script>
      </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => setShowBetrayal(true), 800);
  };

  const previewScale = 0.5;
  const filledValues = values.filter((v) => v.trim());

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
            disabled={filledValues.length < 4}
            className="w-full bg-stone-900 text-white py-4 px-6 flex items-center justify-center gap-2 hover:bg-stone-700 transition-colors disabled:bg-stone-300 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
          >
            <Download size={16} /> Genera PDF stampabile A2
          </button>
          {filledValues.length < 4 && (
            <p className="text-xs text-stone-500 mt-2 text-center">Servono almeno 4 valori</p>
          )}
        </div>

        {/* PREVIEW */}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-stone-500 mb-6">Anteprima (formato A2 ridotto)</h2>
          <div className="bg-stone-200 p-6 flex items-center justify-center">
            <div
              ref={posterRef}
              className="shadow-2xl"
              style={{
                width: `${420 * previewScale}px`,
                height: `${594 * previewScale}px`,
                background: bgColor,
                color: textColor,
                padding: `${40 * previewScale}mm ${35 * previewScale}mm`,
                boxSizing: "border-box",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <div style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 500, marginBottom: "15px" }}>
                {companyName ? "I valori di" : "I nostri valori"}
              </div>
              {companyName && (
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: 800, lineHeight: 1, marginBottom: "24px", fontStyle: "italic" }}>
                  {companyName}
                </div>
              )}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px" }}>
                {filledValues.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "14px",
                      borderBottom: `1px solid ${textColor}33`,
                      paddingBottom: "10px",
                    }}
                  >
                    <div style={{ fontFamily: "Fraunces, serif", fontSize: "22px", fontWeight: 600, color: accentColor === "#FFFFFF" || accentColor === "#ffffff" ? textColor : accentColor, minWidth: "36px" }}>
                      0{i + 1}
                    </div>
                    <div style={{ fontFamily: "Fraunces, serif", fontSize: "32px", fontWeight: 800, lineHeight: 1 }}>
                      {v}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "15px", paddingTop: "10px", borderTop: `2px solid ${textColor}` }}>
                <div style={{ fontSize: "7px", fontStyle: "italic", maxWidth: "140px", lineHeight: 1.4, opacity: 0.7 }}>
                  Realizzato con il generatore di poster di Venturo, che di mestiere aiuta le aziende quando i poster non bastano più. → venturoconsulting.it
                </div>
                <div style={{ width: "24px", height: "5px", background: accentColor }}></div>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-500 mt-3">
            Il PDF finale sarà in A2 (420×594mm), stampabile in alta risoluzione. Questa è un&apos;anteprima al 50%.
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
