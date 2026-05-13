import AnimatedSection from "@/components/AnimatedSection";

const LumenHeroEN = () => (
  <section className="pt-32 pb-24 bg-background">
    <div className="container-wide max-w-4xl">
      <AnimatedSection>
        <p className="text-eyebrow font-mono text-primary mb-6">Methodology</p>
        <h1 className="text-hero mb-8">
          We don't measure culture.<br />
          <span className="text-primary">We illuminate it.</span>
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <div className="space-y-5 text-body text-muted-foreground max-w-3xl">
          <p>
            Organizational culture is like water for those swimming in it: invisible precisely because
            it's everywhere. People breathe its unwritten rules every day, but struggle to name them.
          </p>
          <p>
            That's why Lumen doesn't use only questionnaires or only interviews. It combines narrative
            techniques - one-to-one interviews, oblique questions, storytelling workshops - to surface
            stories. And in stories, culture reveals itself on its own.
          </p>
          <p>
            The result is not a judgment. It's a mirror. A faithful image of how people actually
            experience the organization, not how they think they should experience it.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenHeroEN;
