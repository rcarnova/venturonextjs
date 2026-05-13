"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const LeadMagnetSectionEN = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const successMessageRef = useRef<HTMLParagraphElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    try {
      const { data, error: fnError } = await supabase.functions.invoke('lead-magnet-signup', {
        body: { email, marketingConsent },
      });
      if (fnError || !data?.success) throw new Error("Failed");
      setIsSuccess(true);
      setTimeout(() => {
        successMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch {
      setError(true);
    }
    setIsSubmitting(false);
  };

  return (
    <section
      className="py-9 border-b"
      style={{ backgroundColor: "#F7F7F7", borderColor: "#E5E5E5", borderTop: "3px solid #E1FF00" }}
    >
      <div className="container-narrow">
        {isSuccess ? (
          <p ref={successMessageRef} className="font-display font-semibold text-foreground text-center" style={{ fontSize: "17px" }}>
            Check your email — the guide is on its way.
          </p>
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 overflow-hidden">
            <img
              src="/guides/lead-magnet-cover.webp"
              alt="Free guide cover: 10 employer branding questions to assess your organizational culture"
              className="w-20 h-auto rounded-sm shrink-0 hidden sm:block"
              style={{ boxShadow: "4px 6px 16px rgba(0,0,0,0.25), 1px 2px 4px rgba(0,0,0,0.12)" }}
              loading="lazy"
              width={80}
              height={113}
            />
            <div className="min-w-0 flex-1">
              <span className="font-mono uppercase tracking-wider text-muted-foreground" style={{ fontSize: "13px" }}>
                Free guide — Employer Branding
              </span>
              <h2 className="font-display font-semibold text-foreground leading-snug mt-1" style={{ fontSize: "22px" }}>
                10 questions on organizational culture before doing employer branding
              </h2>
              <p className="text-muted-foreground mt-1" style={{ fontSize: "17px" }}>
                A practical tool for HR and managers before launching a campaign.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:ml-auto w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground text-base w-full sm:w-52 lg:w-48"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-base px-6 rounded-sm whitespace-nowrap"
              >
                {isSubmitting ? "..." : "Download"}
              </Button>
              </div>
              <div className="flex items-start gap-2 mt-1">
                <input
                  type="checkbox"
                  id="marketing-consent-en"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-0.5 shrink-0"
                />
                <label htmlFor="marketing-consent-en" className="text-xs text-muted-foreground leading-snug">
                  I consent to receiving content and updates from Venturo. Read the{" "}
                  <Link href="/en/privacy" className="underline hover:text-foreground transition-colors">privacy policy</Link>.
                </label>
              </div>
              {error && (
                <p className="text-destructive text-sm">
                  Something went wrong. Please try again shortly.
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadMagnetSectionEN;
