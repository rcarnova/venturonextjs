import AnimatedSection from "@/components/AnimatedSection";

const LumenValoriEN = () => (
  <section className="py-24 bg-background">
    <div className="container-wide max-w-5xl">
      <AnimatedSection>
        <p className="text-eyebrow font-mono text-primary mb-4">Positioning</p>
        <h2 className="text-section mb-4">Values as promises</h2>
        <p className="text-muted-foreground text-sm uppercase tracking-wide mb-8">
          Culture is the infrastructure of brand promise
        </p>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="space-y-4 text-foreground leading-relaxed mb-10">
          <p>
            Organizational culture is not a decorative element — it is the internal brand promise.
            Declared values are concrete commitments to clients, candidates and employees.
            And like any promise, they can be kept or broken.
          </p>
          <p>
            If an organization declares "collaboration" as a value but the real culture rewards
            individualism, that is not a healthy evolutionary tension — it is a broken promise.
            Candidates arrive attracted by the promise and leave disappointed after 18 months.
            Clients sense the inconsistency between what the company says and how it behaves internally.
          </p>
        </div>
      </AnimatedSection>

      {/* Healthy Tension Box */}
      <AnimatedSection delay={200}>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">The healthy tension principle</p>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              A culture is healthy when there is awareness of the gap between promise and reality,
              and active work to reduce it.
            </p>
            <p>
              If the value "collaboration" is lived at 60% and the organization consciously aims
              for 65% the following year, that is evolutionary tension. But if the value is lived at 10%
              and communicated externally as a distinctive identity, that is structural inconsistency —
              and the value must be removed from the list or a deep cultural project must be launched
              to make it credible.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Closing copy */}
      <AnimatedSection delay={300}>
        <div className="space-y-4 text-foreground leading-relaxed mb-10">
          <p>
            Lumen helps organizations measure the gap between promise and reality — not with
            numerical scores but through the stories people tell.
          </p>
          <p>
            When a declared value never appears in spontaneous narratives, or appears only
            as a contradiction (<span className="italic">"they say we collaborate but then..."</span>),
            that is more powerful data than any Likert-scale questionnaire. The gap is visible,
            measurable, nameable.
          </p>
        </div>
      </AnimatedSection>

      {/* Why Venturo Box */}
      <AnimatedSection delay={400}>
        <div className="bg-muted/60 border border-border rounded-xl p-8">
          <p className="font-bold text-sm mb-3">Why Venturo can read this tension</p>
          <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
            <p>
              At Venturo, we come from brand strategy — we know what it means to sustain
              a brand promise, how to design it, when it holds and when it collapses.
            </p>
            <p>
              The same applies to organizational culture. We have seen employer branding campaigns
              fail because the internal culture could not sustain the external narrative. Now we work
              from the other side — helping organizations build cultures that support their promises.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenValoriEN;
