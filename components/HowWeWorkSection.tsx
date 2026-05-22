import { Users, MessageSquare, Repeat, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import GlowTitle from "./GlowTitle";

const services = [
  {
    icon: Users,
    title: "Cultura e Identità",
    items: [
      "Workshop facilitati che fanno emergere chi siete davvero",
      "Materiali che rendono visibile chi siete già",
      "Profili culturali estratti da storie reali"
    ]
  },
  {
    icon: MessageSquare,
    title: "Linguaggio e Comunicazione",
    items: [
      "Naming strategico",
      "Glossari condivisi",
      "Tone of voice che nasce da dentro, non da fuori"
    ]
  },
  {
    icon: Repeat,
    title: "Rituali e Operatività",
    items: [
      "Rituali ridisegnati a partire da quelli che già funzionano",
      "Processi decisionali che riflettono la cultura reale",
      "Affiancamento con handover"
    ]
  }
];

const HowWeWorkSection = () => {
  return (
    <section id="come-lavoriamo" className="pt-0 pb-[60px]">
      <div className="container-wide">
        {/* Sezione Lumen */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mb-16 rounded-2xl p-8 md:p-12 lg:p-16" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)' }}>
            <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
              {/* Colonna sinistra - 60% */}
              <div className="md:col-span-3">
                <span className="text-eyebrow font-mono text-white/50">
                  Il nostro metodo
                </span>
                <h3 className="text-section text-white mt-4 mb-5">
                  Lumen. Non misuriamo la cultura. La illuminiamo.
                </h3>
                <p className="text-body text-white/70 mb-6">
                  La cultura organizzativa è invisibile proprio perché onnipresente. Lumen è il modo in cui la facciamo emergere — attraverso storie, non questionari. Il risultato è uno specchio fedele di come le persone vivono davvero l'organizzazione.
                </p>
                <Link
                  href="/lumen"
                  className="inline-flex items-center gap-2 text-white font-medium underline underline-offset-4 hover:gap-3 transition-all duration-300"
                >
                  Scopri come funziona Lumen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Colonna destra - 40% */}
              <div className="md:col-span-2">
                <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-6 md:p-8">
                  <span className="text-eyebrow font-mono text-white/40 block mb-4">
                    Una delle domande che facciamo
                  </span>
                  <p className="text-lg md:text-xl italic leading-relaxed text-white/90">
                    "Immagina di incontrare un amico che non vedi da mesi. Lui ti chiede com'è lavorare qui. Cosa gli racconti, in due minuti?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default HowWeWorkSection;
