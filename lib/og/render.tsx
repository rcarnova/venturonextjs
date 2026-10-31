import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Immagini di anteprima per LinkedIn e gli altri social (og:image).
 * Stesso impianto grafico di public/og-image.png: fondo nero, barre gialle,
 * logo, etichetta in mono, titolo grande. Ogni pagina passa il suo titolo
 * dal file opengraph-image.tsx accanto alla sua page.tsx; Next le genera
 * durante la build.
 */

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const BG = "#0A0A0A";
const ACCENT = "#E6FF3D";
const DIR = join(process.cwd(), "lib/og");

type Weight = 300 | 500 | 700 | 400;
type Font = { name: string; data: Buffer; weight: Weight; style: "normal" };

let assets: Promise<{ fonts: Font[]; logo: string }> | undefined;

function loadAssets() {
  assets ??= (async () => {
    const [light, medium, bold, mono, logo] = await Promise.all([
      readFile(join(DIR, "fonts/space-grotesk-latin-300-normal.woff")),
      readFile(join(DIR, "fonts/space-grotesk-latin-500-normal.woff")),
      readFile(join(DIR, "fonts/space-grotesk-latin-700-normal.woff")),
      readFile(join(DIR, "fonts/ibm-plex-mono-latin-400-normal.woff")),
      readFile(join(DIR, "logo-white.png")),
    ]);
    return {
      fonts: [
        { name: "Space Grotesk", data: light, weight: 300, style: "normal" },
        { name: "Space Grotesk", data: medium, weight: 500, style: "normal" },
        { name: "Space Grotesk", data: bold, weight: 700, style: "normal" },
        { name: "IBM Plex Mono", data: mono, weight: 400, style: "normal" },
      ],
      logo: `data:image/png;base64,${logo.toString("base64")}`,
    };
  })();
  return assets;
}

export type OgInput = {
  /** etichetta in alto a destra, es. "Magazine" o "Leadership ed engagement" */
  eyebrow: string;
  /** il titolo della pagina, senza "— Venturo" */
  title: string;
  /** righe sotto il titolo, facoltative: ogni voce dell'array va a capo */
  subtitle?: string | string[];
};

/** Il titolo resta sempre leggibile: più è lungo, più il corpo scende. */
function titleSize(title: string) {
  const n = title.length;
  if (n <= 38) return 84;
  if (n <= 60) return 72;
  if (n <= 85) return 60;
  return 52;
}

export async function renderOg({ eyebrow, title, subtitle }: OgInput) {
  const { fonts, logo } = await loadAssets();
  const size = titleSize(title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: BG,
          color: "#FFFFFF",
          fontFamily: "Space Grotesk",
          borderTop: `6px solid ${ACCENT}`,
          borderBottom: `6px solid ${ACCENT}`,
          padding: "44px 72px 40px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={logo} width={236} height={51} />
            <div style={{ display: "flex", marginTop: 12, width: 236, height: 4, backgroundColor: ACCENT }} />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              maxWidth: 560,
              fontFamily: "IBM Plex Mono",
              fontSize: 16,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: "#8C8C8C",
              textAlign: "right",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", height: 1, marginTop: 24, backgroundColor: "#262626" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <div
            style={{
              display: "flex",
              fontSize: size,
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ display: "flex", flexDirection: "column", marginTop: 26, fontSize: 24, lineHeight: 1.35, color: "#8C8C8C", maxWidth: 940 }}>
              {(Array.isArray(subtitle) ? subtitle : [subtitle]).map((line) => (
                <div key={line} style={{ display: "flex" }}>
                  {line}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 17, color: "#6B6B6B" }}>
          <div style={{ display: "flex" }}>venturoconsulting.it</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", width: 11, height: 11, borderRadius: 11, backgroundColor: ACCENT, marginRight: 8 }} />
            Milano / Italia
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  );
}
