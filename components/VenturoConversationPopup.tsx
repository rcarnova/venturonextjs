"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import VenturoConversationLogo from "@/components/VenturoConversationLogo";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const STORAGE_KEY = "venturo_conversation_popup_dismissed";
const DELAY_MS = 3000;

const INK = "#000000";
const MUTED = "#666666";
const ACCENT = "#EC4899";
// Testo fucsia su fondo chiaro: variante scura per rispettare AA (6.0:1 contro 3.5:1).
const ACCENT_ON_LIGHT = "#BE185D";

const VenturoConversationPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // localStorage puo lanciare in navigazione privata o con i cookie bloccati
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // se non e leggibile mostriamo comunque il popup una volta per sessione
    }
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (next: boolean) => {
    setOpen(next);
    if (!next) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    }
  };

  return (
    <Dialog open={open} onOpenChange={dismiss}>
      <DialogContent
        className="w-[calc(100%-2rem)] max-w-[440px] gap-0 border border-black bg-white p-0 shadow-none rounded-none sm:rounded-none"
      >
        <div className="p-8">
          <VenturoConversationLogo
            wrapperClassName="mb-8"
            imgClassName="w-full max-w-[260px] h-auto"
            fallbackSize={26}
          />

          <DialogTitle
            className="font-bold tracking-normal"
            style={{ color: INK, fontSize: 22, lineHeight: 1.25 }}
          >
            Conversazioni online su cultura organizzativa, identità, engagement.
          </DialogTitle>

          <DialogDescription
            className="mt-4"
            style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}
          >
            Una domanda forte, più punti di vista, nessuna risposta già scritta.
          </DialogDescription>

          <p className="font-mono text-eyebrow mt-8" style={{ color: ACCENT_ON_LIGHT }}>
            SI PARTE · OTTOBRE 2026
          </p>

          <Link
            href="/venturo-conversation"
            onClick={() => dismiss(false)}
            className="mt-8 inline-flex items-center gap-2 font-mono text-eyebrow px-6 py-4 transition-opacity hover:opacity-85"
            style={{ backgroundColor: ACCENT, color: INK }}
          >
            SCOPRI IL FORMAT
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VenturoConversationPopup;
