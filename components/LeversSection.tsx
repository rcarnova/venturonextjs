import { ArrowRight, HeartHandshake, MessagesSquare, UserPlus, LucideIcon } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";
import { DOORS } from "@/lib/doors";
import type { DoorSlug } from "@/lib/challenges";

/**
 * "Da dove partite?": le tre porte del sito (lib/doors.ts). Ognuna parte dal
 * problema di chi entra e porta alla sua pagina; il centro resta l'engagement.
 * La porta Leadership e la prima: e la principale.
 */
const ICONS: Record<DoorSlug, LucideIcon> = {
  leadership: HeartHandshake,
  "comunicazione-interna": MessagesSquare,
  "employer-branding": UserPlus,
};

const LeversSection = () => {
  return (
    <section id="da-dove-partite" className="section-padding bg-primary">
      <div className="container-wide">
        <AnimatedSection>
          <div className="md:text-center max-w-2xl md:mx-auto mb-12 md:mb-16">
            <p className="font-mono text-eyebrow text-primary-foreground/60 mb-4">Da dove partite?</p>
            <GlowTitle className="text-3xl md:text-section text-primary-foreground" variant="light">
              Tre porte, lo stesso centro.
            </GlowTitle>
            <p className="text-subheadline mt-4 text-primary-foreground/70">
              Ognuno arriva dal suo problema. Lo portiamo sempre allo stesso punto: le
              persone si coinvolgono in ciò in cui si riconoscono.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DOORS.map((d) => {
              const Icon = ICONS[d.slug];
              return (
                <Link
                  key={d.slug}
                  href={`/${d.slug}`}
                  className="group bg-white rounded-xl p-7 md:p-8 border border-black/[0.06] flex flex-col transition-transform duration-200 hover:-translate-y-1"
                >
                  <Icon className="w-8 h-8 text-foreground mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{d.homeLabel}</h3>
                  <p className="text-body text-muted-foreground m-0 flex-1">{d.homeText}</p>
                  <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-foreground underline underline-offset-4">
                    {d.menuLabel} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="md:text-center text-xl md:text-2xl font-semibold text-primary-foreground mt-14">
            L&apos;identità non è un tema soft. È l&apos;unica strategia che regge.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-4 sm:text-center">
            <span className="text-primary-foreground/70">Riconoscete la vostra situazione?</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-foreground font-semibold text-sm px-7 py-3.5 hover:opacity-90 transition-opacity"
            >
              Parliamone <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeversSection;
