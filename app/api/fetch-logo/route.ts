import { NextRequest, NextResponse } from "next/server";

const UA = "Mozilla/5.0 (compatible; Venturo/1.0)";

async function tryUrl(url: string): Promise<{ buf: Buffer; ct: string } | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(url, {
      headers: { "User-Agent": UA },
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") ?? "";
    if (!ct.startsWith("image/")) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 100) return null; // reject near-empty responses
    return { buf, ct };
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const domain = req.nextUrl.searchParams.get("domain");
  if (!domain) return NextResponse.json({ error: "No domain" }, { status: 400 });

  const sources = [
    `https://logo.clearbit.com/${domain}`,
    `https://logo.clearbit.com/${domain}?size=200`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  ];

  for (const url of sources) {
    const result = await tryUrl(url);
    if (result) {
      return NextResponse.json({
        dataUrl: `data:${result.ct};base64,${result.buf.toString("base64")}`,
      });
    }
  }

  return NextResponse.json({ error: "Logo not found" }, { status: 404 });
}
