"use client";

import { useState } from "react";
import { Globe, TextCursorInput, ClipboardPaste } from "lucide-react";

import { SEO } from "@/components/SEO";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const FUNCTION_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/evp-analysis`;

const EVPAnalysis = () => {
  const [careerPage, setCareerPage] = useState("");
  const [jobPost, setJobPost] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [careerError, setCareerError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    setCareerError(null);

    if (careerPage.trim().length === 0) {
      setCareerError("Paste the career page text to proceed.");
      return;
    }

    const totalLen = careerPage.trim().length + jobPost.trim().length;

    if (totalLen < 200) {
      setError("The text is too short for a useful analysis. Try pasting the full page.");
      return;
    }

    if (totalLen > 12000) {
      setError("The text is too long. Try pasting only the main sections of the career page and job post.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ careerPage, jobPost, email: email.trim() || undefined }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "An error occurred during the analysis.");
      } else {
        setAnalysis(data.analysis);
      }
    } catch {
      setError("Connection error. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCareerPage("");
    setJobPost("");
    setEmail("");
    setAnalysis(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free EVP Analysis - Venturo"
        description="Paste your career page or job post and get a free analysis of your Employee Value Proposition with feedback on differentiation, consistency, and promises."
        canonical="https://venturoconsulting.it/en/evp-analysis"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/analisi-evp",
          en: "https://venturoconsulting.it/en/evp-analysis",
        }}
      />
      <HeaderEN />

      <main className="pt-28 pb-20 px-4">
        <div className="mx-auto max-w-[680px]">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What does your EVP really communicate?
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground/80 mb-10 leading-relaxed max-w-xl">
            Paste the text from your career page and a job post. In a few seconds you'll get an outside reading - the perspective of a candidate who doesn't know you yet.
          </p>

          {/* Example preview */}
          <div className="mb-14">
            <h2 className="text-lg font-semibold text-foreground mb-4">A sample analysis</h2>
            <div className="rounded-xl border border-border/60 bg-muted/30 p-6 md:p-8">
              <div className="[&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mb-2 [&_h3]:mt-6 [&_h3:first-child]:mt-0 [&_h3]:pt-6 [&_h3:first-child]:pt-0 [&_h3]:border-t [&_h3]:border-border/20 [&_h3:first-child]:border-t-0 [&_h3]:flex [&_h3]:items-center [&_h3]:gap-2.5 [&_h3]:before:content-[''] [&_h3]:before:w-[3px] [&_h3]:before:h-[1em] [&_h3]:before:bg-[#E1FF00] [&_h3]:before:rounded-sm [&_h3]:before:flex-shrink-0 [&_p]:text-sm [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_p:last-child]:mb-0">
                <h3>How your identity is perceived</h3>
                <p>The career page communicates international openness and belonging to something bigger. The job post describes a concrete role, with precise hours and operational tasks. A candidate reading both receives two different signals - and it's worth asking whether the profile attracted by the first recognises themselves in the second.</p>
                <h3>Questions worth asking</h3>
                <p>Does someone who responds to messaging about adventure and global connections seek the same satisfaction from a role that starts with stock preparation at five in the morning? When you mention "lasting relationships", do you mean the commercial depth typical of the industry or the expectation of a more relational environment?</p>
                <h3>A thought that could spark a conversation</h3>
                <p>Perhaps the company really is transforming a traditional sector - and the challenge is communicating that evolution without losing the concreteness of the actual work.</p>
                <p className="!mt-5 !text-xs italic !text-muted-foreground/70">This is a surface-level reading. What Lumen does is deeper - it starts from people, not texts.</p>
              </div>
              <p className="text-xs text-muted-foreground/60 mt-2.5">Analysis generated from real texts. The company name is not disclosed.</p>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12">
            {[
              { n: "01", t: "Open the page you want to analyse", icon: Globe },
              { n: "02", t: "Select all (Cmd+A) and copy (Cmd+C)", icon: TextCursorInput },
              { n: "03", t: "Paste below and click Analyse", icon: ClipboardPaste },
            ].map((s) => (
              <div key={s.n} className="flex-1">
                <s.icon className="h-5 w-5 text-muted-foreground mb-2" strokeWidth={1.5} />
                <span className="text-xs font-mono text-primary font-semibold">{s.n}</span>
                <p className="text-sm text-foreground mt-1">{s.t}</p>
              </div>
            ))}
          </div>

          {/* Text fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label className="text-foreground font-semibold mb-1 block">Career page</Label>
              <Textarea
                value={careerPage}
                onChange={(e) => setCareerPage(e.target.value)}
                placeholder="Go to the career page, select all text (Cmd+A or Ctrl+A), copy it and paste it here."
                className="min-h-[160px] resize-y"
              />
              {careerError && (
                <p className="text-xs text-muted-foreground mt-1.5">{careerError}</p>
              )}
            </div>
            <div>
              <Label className="text-foreground font-semibold mb-1 block">Job post</Label>
              <Textarea
                value={jobPost}
                onChange={(e) => setJobPost(e.target.value)}
                placeholder="Open the job ad you want to analyse, select all text, copy it and paste it here. You can leave this field empty - the analysis works with just the career page."
                className="min-h-[160px] resize-y"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-8">
            <Label className="text-foreground font-semibold mb-1 block">
              Want to receive the analysis by email?
            </Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email (optional)"
              className="max-w-sm"
            />
            <p className="text-xs text-muted-foreground mt-1.5">
              If you enter your email you'll also receive the analysis there, to keep or share. No other communication.
            </p>
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-destructive mb-4">{error}</p>
          )}

          {/* Submit */}
          <Button
            onClick={handleSubmit}
            disabled={loading}
            variant="default"
            size="lg"
          >
            Analyse →
          </Button>
          {loading && (
            <p className="text-sm text-muted-foreground mt-3 animate-fade-in">
              Reading your texts…
            </p>
          )}

          {/* Result */}
          {analysis && (
            <div className="mt-12">
              <div className="rounded-xl p-6 md:p-8 border-l-[3px]" style={{ borderColor: '#E1FF00' }}>
                <div className="max-w-none text-foreground [&_h2]:text-[16px] [&_h2]:font-semibold [&_h2]:text-[#0A0A0A] [&_h2]:mb-2 [&_h2]:mt-6 [&_h2:first-child]:mt-0 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-2.5 [&_h2]:before:content-[''] [&_h2]:before:w-[3px] [&_h2]:before:h-[1em] [&_h2]:before:bg-[#E1FF00] [&_h2]:before:rounded-sm [&_h2]:before:flex-shrink-0 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_em]:text-[#888888] [&_em]:text-sm">
                  <ReactMarkdown>{analysis}</ReactMarkdown>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                <div>
                  <p className="text-sm text-muted-foreground">
                    This reading comes from public texts. The real conversation starts from people.
                  </p>
                  <Link
                    href="/en#contact"
                    className="inline-block mt-2 text-sm text-primary font-semibold hover:underline transition-colors"
                  >
                    Let's talk →
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                  Have another text to analyse?{" "}
                  <button
                    onClick={handleReset}
                    className="underline hover:text-foreground transition-colors"
                  >
                    Clear the fields and try again.
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* How it works */}
        <div className="mx-auto max-w-[680px] mt-20 pt-12 border-t border-border/40">
          <p className="text-xs text-muted-foreground mb-4">How this analysis works</p>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>This tool reads your texts the way an external candidate would - someone who doesn't know your story and builds their perception only from what they find online.</p>
            <p>The analysis works on three dimensions: how recognisable your identity is, how consistent the tone is between career page and job post, and which motivational profile is implicitly attracted by the communication.</p>
            <p>It's not an evaluation. It's a first reading - the starting point for a deeper conversation.</p>
          </div>
          <Link href="/en/lumen" className="inline-block mt-6 text-sm text-primary font-semibold hover:underline transition-colors">
            Discover how Lumen works →
          </Link>
        </div>
      </main>

      <FooterEN />
    </div>
  );
};

export default EVPAnalysis;
