import AnimatedSection from "@/components/AnimatedSection";
import type { Sezione } from "@/data/principi";
import { BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PrincipiSectionProps {
  sezione: Sezione;
  index: number;
  lang?: "it" | "en";
}

const labels = {
  it: { concetto: "Concetto chiave", applicazione: "Come lo applichiamo" },
  en: { concetto: "Key concept", applicazione: "How we apply it" },
};

const BookContent = ({
  libro,
  t,
  coverImage,
}: {
  libro: { titolo: string; autore: string; concetto: string; applicazione: string };
  t: { concetto: string; applicazione: string };
  coverImage?: string;
}) => (
  <div className="space-y-6 pb-4">
    {coverImage && (
      <div className="flex justify-center md:justify-start">
        <img
          src={coverImage}
          alt={libro.titolo}
          className="w-[160px] md:w-[180px] h-auto rounded-sm shadow-[0_8px_30px_-8px_hsl(var(--foreground)/0.15)]"
          loading="lazy"
        />
      </div>
    )}
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
        {t.concetto}
      </p>
      <div className="text-foreground text-sm leading-relaxed whitespace-pre-line">
        {libro.concetto}
      </div>
    </div>
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
        {t.applicazione}
      </p>
      <p className="text-foreground text-sm leading-relaxed">
        {libro.applicazione}
      </p>
    </div>
  </div>
);

const PrincipiSection = ({ sezione, index, lang = "it" }: PrincipiSectionProps) => {
  const isEven = index % 2 === 0;
  const t = labels[lang];

  return (
    <section
      id={sezione.id}
      className={`py-24 ${isEven ? "bg-muted/40" : "bg-background"}`}
    >
      <div className="container-wide max-w-5xl">
        {/* Section header */}
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="text-section mb-4">{sezione.titolo}</h2>
          {sezione.intro && (
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {sezione.intro}
            </p>
          )}
        </AnimatedSection>

        {/* Books as accordion */}
        <AnimatedSection delay={100}>
          <Accordion type="multiple" className="space-y-4">
            {sezione.libri.map((libro, i) => {
              const isAnchor = i === 0;
              return (
                <AccordionItem
                  key={libro.titolo}
                  value={libro.titolo}
                  className="border border-border rounded-xl overflow-hidden bg-background glow-yellow hover:scale-[1.02] transition-transform duration-300"
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <BookOpen className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <h3 className={`font-bold leading-snug ${isAnchor ? "text-xl" : "text-lg"}`}>
                          {libro.titolo}
                        </h3>
                        <p className="text-sm text-muted-foreground">{libro.autore}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-8 pb-2">
                      <BookContent
                        libro={libro}
                        t={t}
                        coverImage={isAnchor ? sezione.coverImage : undefined}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PrincipiSection;
