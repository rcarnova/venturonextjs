import AnimatedSection from "@/components/AnimatedSection";

const LumenFormatsEN = ({ embedded }: { embedded?: boolean }) => {
  const Wrapper = embedded ? "div" : "section";
  return (
  <Wrapper className={embedded ? "pb-8" : "py-24 bg-background"}>
    <div className={embedded ? "" : "container-wide max-w-5xl"}>
      {!embedded && (
        <AnimatedSection>
          <p className="text-eyebrow font-mono text-primary mb-4">Delivery formats</p>
          <h2 className="text-section mb-12">Two formats, one goal.</h2>
        </AnimatedSection>
      )}
      {embedded && (
        <AnimatedSection>
          <h3 className="text-xl font-bold mb-8">Two formats, one goal.</h3>
        </AnimatedSection>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Essential */}
        <AnimatedSection delay={100}>
          <div className="border border-border rounded-xl p-8 h-full flex flex-col gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Format</p>
              <h3 className="text-2xl font-bold">Essential</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 8-12 narrative interviews with board and management</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Full thematic analysis - mapping of key tensions</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Narrative mirror (15 pp.)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 1 restitution & co-design workshop (half day, 3h)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Priority levers map - 2 challenges with 3-month project</li>
            </ul>

            <div className="space-y-3 border-t border-border/50 pt-4">
              <div>
                <p className="font-mono text-xs text-primary mb-1">Limited budget variant</p>
                <p className="text-xs text-muted-foreground">Replace interviews with narrative questionnaire (less depth but scales better)</p>
              </div>
              <div>
                <p className="font-mono text-xs text-primary mb-1">Small organization variant (8-15 people)</p>
                <p className="text-xs text-muted-foreground">Workshop only without prior collection - narrative emergence directly in facilitated session</p>
              </div>
            </div>

            <div className="mt-auto space-y-1">
              <p className="text-xs font-mono text-muted-foreground">Duration: 3-4 weeks from collection to map</p>
              <p className="text-xs font-mono text-muted-foreground">Ideal for: first assessment, SMEs, teams of 20-80 people</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Extended */}
        <AnimatedSection delay={200}>
          <div className="border border-primary/50 bg-primary/5 rounded-xl p-8 h-full flex flex-col gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Format</p>
              <h3 className="text-2xl font-bold">Extended</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 15-25 narrative interviews distributed by cluster (board, management, staff)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Narrative questionnaire to entire population or representative sample</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Analysis by function/level - mapping of multiple coexisting cultures</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> Narrative mirror (25 pp.) + executive summary (5 pp.)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 2 workshops: restitution (half day) + co-design (full day)</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 3-month intervention plan with narrative KPIs</li>
              <li className="flex gap-2"><span className="text-primary mt-0.5">→</span> 90-day follow-up</li>
            </ul>

            <div className="space-y-3 border-t border-border/50 pt-4">
              <div>
                <p className="font-mono text-xs text-primary mb-1">Variants</p>
                <p className="text-xs text-muted-foreground">M&A (analysis of merging cultures), Multi-year transformation (quarterly follow-up, "gym" model)</p>
              </div>
            </div>

            <div className="mt-auto space-y-1">
              <p className="text-xs font-mono text-muted-foreground">Duration: 6-8 weeks from collection to workshop, then 3-month project + follow-up</p>
              <p className="text-xs font-mono text-muted-foreground">Ideal for: cultural transformations, M&A, 100+ people organizations</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </Wrapper>
  );
};

export default LumenFormatsEN;
