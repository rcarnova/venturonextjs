import type { Metadata } from "next";
import "./globals.css";
import HtmlLang from "@/components/HtmlLang";

export const metadata: Metadata = {
  metadataBase: new URL("https://venturoconsulting.it"),
  title: {
    default: "Venturo — Cultura organizzativa ed engagement delle persone",
    template: "%s — Venturo",
  },
  description:
    "Consulenza su cultura organizzativa ed engagement delle persone. Facciamo emergere la cultura reale dell'organizzazione con Lumen: conversazioni, non survey.",
  openGraph: {
    siteName: "Venturo",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: lo script qui sotto può cambiare lang prima che React si agganci
    <html lang="it" suppressHydrationWarning>
      <head>
        {/* Font serviti dal sito: niente richieste a Google, nessun CSS esterno
            che blocca la prima visualizzazione. Precaricati i due usati sopra
            la piega; gli altri arrivano con il CSS (app/globals.css). */}
        <link
          rel="preload"
          href="/fonts/space-grotesk-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ibm-plex-mono-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Le pagine /en condividono questo layout: la lingua del documento si
            corregge prima del primo disegno. Il contenuto inglese è comunque
            dichiarato in HTML da app/en/layout.tsx. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(/^\\/en(\\/|$)/.test(location.pathname))document.documentElement.lang='en'",
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <HtmlLang />
        {children}
      </body>
    </html>
  );
}
