import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  lang?: "it" | "en";
  embedded?: boolean;
}

const copy = {
  it: {
    label: "Fondamenti",
    title: "Fondamenti",
    subtitle: "Lumen si basa su principi consolidati della ricerca organizzativa",
    p1: "Lumen non è un'invenzione arbitraria — applica principi teorici consolidati in modo originale.",
    p2: "Si basa sul modello dei tre livelli culturali di Edgar Schein (MIT): artefatti visibili, valori dichiarati, e assunzioni di base invisibili. La maggior parte degli strumenti di misurazione culturale raggiunge al massimo il secondo livello. Lumen arriva al terzo attraverso domande narrative che bypassano i filtri razionali.",
    p3: "E integra questa base con la consapevolezza che i valori organizzativi sono promesse concrete — verso clienti, candidati, collaboratori. Promesse che possono essere mantenute o tradite. Una cultura è sana quando c'è consapevolezza dello scarto tra promessa e realtà, e lavoro attivo per ridurlo.",
    boxTitle: "Vuoi approfondire i principi teorici che guidano il nostro lavoro?",
    boxDesc: "Abbiamo raccolto i fondamenti del metodo Venturo — da Schein a Laloux, da Aaker a Kahneman — in una pagina dedicata.",
    boxCta: "Scopri i nostri principi →",
    boxLink: "/principi",
  },
  en: {
    label: "Foundations",
    title: "Foundations",
    subtitle: "Lumen is based on established principles from organizational research",
    p1: "Lumen is not an arbitrary invention — it applies established theoretical principles in an original way.",
    p2: "It is based on Edgar Schein's (MIT) three-level cultural model: visible artifacts, espoused values, and invisible basic assumptions. Most cultural measurement tools reach at most the second level. Lumen reaches the third through narrative questions that bypass rational filters.",
    p3: "And it integrates this foundation with the awareness that organizational values are concrete promises — to clients, candidates, and employees. Promises that can be kept or broken. A culture is healthy when there is awareness of the gap between promise and reality, and active work to reduce it.",
    boxTitle: "Want to explore the theoretical principles behind our work?",
    boxDesc: "We've gathered the foundations of the Venturo method — from Schein to Laloux, from Aaker to Kahneman — in a dedicated page.",
    boxCta: "Discover our principles →",
    boxLink: "/en/principles",
  },
};

const LumenFondamenti = ({ lang = "it", embedded }: Props) => {
  const t = copy[lang];
  const Wrapper = embedded ? "div" : "section";

  return (
    <Wrapper className={embedded ? "pb-8" : "py-24 bg-muted/40"}>
      <div className={embedded ? "" : "container-wide max-w-4xl"}>
        {!embedded && (
          <AnimatedSection>
            <p className="text-eyebrow font-mono text-primary mb-4">{t.label}</p>
            <h2 className="text-section mb-2">{t.title}</h2>
          </AnimatedSection>
        )}
        <AnimatedSection>
          <p className="text-muted-foreground text-sm uppercase tracking-wide mb-8">{t.subtitle}</p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="space-y-4 text-foreground leading-relaxed mb-10 text-[0.95rem]">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-background border border-border rounded-xl p-8">
            <p className="font-bold text-sm mb-2">{t.boxTitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{t.boxDesc}</p>
            <Button variant="heroOutline" asChild>
              <Link href={t.boxLink}>{t.boxCta}</Link>
            </Button>
          </div>
        </AnimatedSection>
    </div>
    </Wrapper>
  );
};

export default LumenFondamenti;
