import AnimatedSection from "@/components/AnimatedSection";

const LumenFormats = ({ embedded }: { embedded?: boolean }) => {
  const Wrapper = embedded ? "div" : "section";
  return (
  <Wrapper className={embedded ? "pb-8" : "py-24 bg-background"}>
    <div className={embedded ? "" : "container-wide max-w-5xl"}>
      {!embedded && (
        <AnimatedSection>
          <p className="text-eyebrow font-mono text-primary mb-4">Modalità di erogazione</p>
          <h2 className="text-section mb-12">Due formati, un solo obiettivo.</h2>
        </AnimatedSection>
      )}
      {embedded && (
        <AnimatedSection>
          <h3 className="text-xl font-bold mb-8">Due formati, un solo obiettivo.</h3>
        </AnimatedSection>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Essenziale */}
        <AnimatedSection delay={100}>
          <div className="border border-border rounded-xl p-8 h-full flex flex-col gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Formato</p>
              <h3 className="text-2xl font-bold">Essenziale</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 8-12 interviste narrative con board e management</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Analisi tematica completa - mappatura tensioni principali</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Specchio narrativo (15 pp.)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 1 workshop di restituzione e co-progettazione (mezza giornata, 3h)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Mappa delle leve prioritarie - 2 sfide con progetto a 3 mesi</li>
            </ul>

            <div className="space-y-3 border-t border-border/50 pt-4">
              <div>
                <p className="font-mono text-xs text-primary mb-1">Variante budget limitato</p>
                <p className="text-xs text-muted-foreground">Sostituire interviste con questionario narrativo (meno profondità ma scala meglio)</p>
              </div>
              <div>
                <p className="font-mono text-xs text-primary mb-1">Variante organizzazione piccola (8-15 persone)</p>
                <p className="text-xs text-muted-foreground">Solo workshop senza raccolta preventiva - emersione narrativa direttamente in sessione facilitata</p>
              </div>
            </div>

            <div className="mt-auto space-y-1">
              <p className="text-xs font-mono text-muted-foreground">Durata: 3-4 settimane dalla raccolta alla mappa</p>
              <p className="text-xs font-mono text-muted-foreground">Ideale per: prima rilevazione, PMI, team di 20-80 persone</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Esteso */}
        <AnimatedSection delay={200}>
          <div className="border border-primary/50 bg-primary/5 rounded-xl p-8 h-full flex flex-col gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Formato</p>
              <h3 className="text-2xl font-bold">Esteso</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 15-25 interviste narrative distribuite per cluster (board, management, personale)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Questionario narrativo a tutta la popolazione o rappresentanza</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Analisi per funzione/livello - mappatura culture multiple che coesistono</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Specchio narrativo (25 pp.) + executive summary (5 pp.)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 2 workshop: restituzione (mezza giornata) + co-progettazione (giornata intera)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Piano interventi 3 mesi con KPI narrativi</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Follow-up a 90 giorni</li>
            </ul>

            <div className="space-y-3 border-t border-border/50 pt-4">
              <div>
                <p className="font-mono text-xs text-primary mb-1">Varianti</p>
                <p className="text-xs text-muted-foreground">M&A (analisi culture che si incontrano), Trasformazione pluriennale (follow-up trimestrale, modello "palestra")</p>
              </div>
            </div>

            <div className="mt-auto space-y-1">
              <p className="text-xs font-mono text-muted-foreground">Durata: 6-8 settimane dalla raccolta al workshop, poi 3 mesi progetto + follow-up</p>
              <p className="text-xs font-mono text-muted-foreground">Ideale per: trasformazioni culturali, M&A, organizzazioni 100+ persone</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </Wrapper>
  );
};

export default LumenFormats;
