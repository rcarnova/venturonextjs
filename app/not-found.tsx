import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina non trovata — Venturo",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-eyebrow font-mono text-muted-foreground mb-4">404</p>
        <h1 className="text-display text-foreground mb-6">Pagina non trovata</h1>
        <p className="text-body text-muted-foreground mb-8 max-w-md mx-auto">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Torna alla home
        </Link>
      </div>
    </div>
  );
}
