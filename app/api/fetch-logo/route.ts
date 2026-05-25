import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const domain = req.nextUrl.searchParams.get("domain");
  if (!domain) return NextResponse.json({ error: "No domain" }, { status: 400 });

  try {
    const res = await fetch(`https://logo.clearbit.com/${domain}`, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!res.ok) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const buf = await res.arrayBuffer();
    const b64 = Buffer.from(buf).toString("base64");
    const ct = res.headers.get("content-type") || "image/png";

    return NextResponse.json({ dataUrl: `data:${ct};base64,${b64}` });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
