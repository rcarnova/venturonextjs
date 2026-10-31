import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { n: "01", title: "Ascolto", desc: "Conversazioni one-to-one e un questionario narrativo." },
  { n: "02", title: "Lettura", desc: "Pattern, tensioni, metafore che le persone usano." },
  { n: "03", title: "Specchio", desc: "L'organizzazione si ascolta in un workshop e sceglie due sfide." },
  { n: "04", title: "Azione", desc: "Due progetti a tre mesi su riunioni, onboarding, rituali, e cosa raccontare dentro e fuori." },
];

const HowWeWorkSection = () => {
  return (
    <section id="come-lavoriamo" className="pt-16 md:pt-24 pb-[60px]">
      <div className="container-wide">
        <AnimatedSection animation="fade-up">
          <div
            className="rounded-2xl p-8 md:p-12 lg:p-16"
            style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}
          >
            <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
              <div className="md:col-span-3">
                <span className="text-eyebrow font-mono text-white/50">Il metodo</span>
                <h2 className="text-section text-white mt-4 mb-5">
                  Lumen. Non misuriamo la cultura. La illuminiamo.
                </h2>
                <p className="text-body text-white/70 mb-6">
                  Una survey chiede alle persone quanto sono d&apos;accordo. Noi chiediamo di
                  raccontare. Interviste narrative, domande oblique, workshop di
                  storytelling: nelle storie, la cultura si rivela da sola.
                </p>
                <div className="border-l-2 border-[#E6FF3D] pl-5 mb-8">
                  <span className="text-eyebrow font-mono text-white/40 block mb-2">
                    Con le organizzazioni grandi
                  </span>
                  <p className="text-body text-white/70 m-0">
                    Partiamo dai numeri: l&apos;analisi di recensioni e sentiment, o una
                    survey costruita su misura per voi. I numeri ci dicono dove
                    ascoltare. Le conversazioni spiegano perché.
                  </p>
                </div>
                <Link
                  href="/lumen"
                  className="inline-flex items-center gap-2 py-3 text-white font-medium underline underline-offset-4 hover:gap-3 transition-all duration-300"
                >
                  Scopri come funziona Lumen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="md:col-span-2">
                <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-6 md:p-8">
                  <span className="text-eyebrow font-mono text-white/40 block mb-4">
                    Una delle domande che facciamo
                  </span>
                  <p className="text-lg md:text-xl italic leading-relaxed text-white/90">
                    &ldquo;Immagina di incontrare un amico che non vedi da mesi. Lui ti chiede
                    com&apos;è lavorare qui. Cosa gli racconti, in due minuti?&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] mt-12 list-none p-0">
              {steps.map((s) => (
                <li key={s.n} className="bg-[#0d0d0d] p-6 border-t-2 border-t-white/[0.12]">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[#E6FF3D] block mb-3">
                    {s.n}
                  </span>
                  <strong className="block text-white text-base font-semibold mb-2">{s.title}</strong>
                  <p className="text-white/50 text-sm leading-relaxed m-0">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
