"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";
import { DOORS, getDoor } from "@/lib/doors";
import { challenges, type DoorSlug } from "@/lib/challenges";

/**
 * Pagina porta: stessa struttura per le tre porte del sito.
 * Problema di chi entra, collegamento all'engagement, cosa facciamo,
 * strumento gratuito, sfide che riconoscete, casi, altre porte, contatto.
 */

const ACCENT = "#E6FF3D";
const INK = "#111111";
const MONO = "font-mono text-eyebrow";

const DoorPage = ({ slug }: { slug: DoorSlug }) => {
  const door = getDoor(slug);
  const related = challenges.filter((c) => c.door === slug);
  const others = DOORS.filter((d) => d.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Il problema, nelle parole di chi entra */}
        <section className="bg-white pt-32 md:pt-44 pb-16 md:pb-24">
          <div className="container-wide">
            <AnimatedSection>
              <p className={`${MONO} text-muted-foreground mb-6`}>{door.eyebrow}</p>
              <h1
                className="font-bold text-foreground max-w-4xl"
                style={{ fontSize: "clamp(36px, 5.6vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                {door.title}
              </h1>
              {door.intro.map((p) => (
                <p key={p} className="text-body text-[#555] mt-8 max-w-2xl">
                  {p}
                </p>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Il collegamento all'engagement */}
        <section className="py-16 md:py-24" style={{ backgroundColor: INK }}>
          <div className="container-wide">
            <AnimatedSection>
              <p className={`${MONO} mb-4`} style={{ color: ACCENT }}>
                Non c&apos;è engagement senza identità
              </p>
              <h2 className="text-section text-white mb-6 md:max-w-[75%]">{door.bridgeTitle}</h2>
              {door.bridge.map((p) => (
                <p key={p} className="text-body text-white/65 mb-4 md:max-w-[62%]">
                  {p}
                </p>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Cosa facciamo */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-wide">
            <AnimatedSection>
              <p className={`${MONO} text-muted-foreground mb-4`}>Cosa facciamo</p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className={`grid grid-cols-1 gap-4 ${door.offers.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                {door.offers.map((o) => (
                  <div key={o.title} className="border border-[#E8E8E8] rounded-xl p-7 md:p-8 flex flex-col">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{o.title}</h3>
                    <p className="text-body text-muted-foreground m-0 flex-1">{o.text}</p>
                    {o.href &&
                      (o.external ? (
                        <a
                          href={o.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-6 text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-70"
                        >
                          {o.cta}&nbsp;↗
                        </a>
                      ) : (
                        <Link
                          href={o.href}
                          className="inline-block mt-6 text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-70"
                        >
                          {o.cta}&nbsp;→
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Strumento gratuito */}
        {door.tool && (
          <section className="py-14 md:py-20" style={{ backgroundColor: INK, color: "#fff" }}>
            <div className="container-wide">
              <AnimatedSection>
                <div className="grid md:grid-cols-5 gap-8 items-end">
                  <div className="md:col-span-3">
                    <p className={`${MONO} mb-4`} style={{ color: ACCENT }}>
                      {door.tool.eyebrow}
                    </p>
                    <h2 className="text-section text-white mb-4">{door.tool.title}</h2>
                    <p className="text-body text-white/65 m-0">{door.tool.text}</p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <Link
                      href={door.tool.href}
                      className="inline-flex items-center gap-2.5 font-semibold text-sm px-7 py-3.5"
                      style={{ backgroundColor: ACCENT, color: INK }}
                    >
                      {door.tool.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Le sfide che riconoscete */}
        {related.length > 0 && (
          <section className="py-16 md:py-24 bg-muted/40">
            <div className="container-narrow">
              <AnimatedSection>
                <p className={`${MONO} text-muted-foreground mb-4`}>Le situazioni che riconoscete</p>
              </AnimatedSection>
              {related.map((c) => (
                <AnimatedSection key={c.title}>
                  <div className="py-10 border-t border-border first:border-t-0">
                    <h3 className="text-subtitle text-foreground mb-4">{c.title}</h3>
                    <p className="text-body text-muted-foreground mb-5">{c.reframing}</p>
                    <div className="bg-charcoal rounded-lg px-5 py-4 md:px-6 md:py-5 flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-warm-white/60 mt-1 flex-shrink-0" />
                      <p className="text-base text-warm-white font-medium leading-relaxed m-0">{c.action}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        )}

        {/* Casi */}
        {door.cases && door.cases.length > 0 && (
          <section className="py-14 md:py-20 bg-white">
            <div className="container-narrow">
              <p className={`${MONO} text-muted-foreground mb-6`}>Alcuni progetti</p>
              <ul className="list-none p-0 m-0">
                {door.cases.map((c) => (
                  <li key={c.href} className="border-t border-border">
                    <Link href={c.href} className="flex items-center justify-between gap-4 py-5 text-foreground hover:opacity-70">
                      <span className="text-lg font-medium">{c.title}</span>
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Le altre porte */}
        <section className="py-12 md:py-16 bg-white border-t border-border">
          <div className="container-wide">
            <p className={`${MONO} text-muted-foreground mb-6`}>Le altre porte, lo stesso centro</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {others.map((d) => (
                <Link
                  key={d.slug}
                  href={`/${d.slug}`}
                  className="border border-[#E8E8E8] rounded-xl p-6 flex items-center justify-between gap-4 hover:border-foreground transition-colors"
                >
                  <span>
                    <span className="block font-semibold text-foreground">{d.homeLabel}</span>
                    <span className="block text-sm text-muted-foreground mt-1">{d.title}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default DoorPage;
