import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://venturoconsulting.it"),
  title: {
    default: "Venturo — Cultura Organizzativa ed Employer Branding",
    template: "%s — Venturo",
  },
  description:
    "Rendiamo visibile la cultura della tua organizzazione. Lavoriamo su employer branding, comunicazione interna e trasformazione culturale.",
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
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
