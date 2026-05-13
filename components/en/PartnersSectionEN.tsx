import AnimatedSection from "../AnimatedSection";


const PartnersSectionEN = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-narrow">
        <AnimatedSection className="mb-8">
          <p className="text-eyebrow text-muted-foreground mb-3">PARTNER</p>
          <h2 className="text-section text-foreground">
            The AI-powered Employer Intelligence platform
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <a
                href="https://ingaze.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/partners/ingaze-logo.webp"
                  alt="Ingaze logo - AI-powered employer intelligence platform"
                  className="h-8 md:h-10 w-auto object-contain"
                  width={120}
                  height={40}
                  loading="lazy"
                />
              </a>
              <p className="text-[16px] leading-[1.65] text-muted-foreground">
                For projects requiring data-driven foundations, we partner with Ingaze. An employer intelligence platform providing access to real insights, sentiment analysis and competitor benchmarks. To understand from reviews what truly works and what is driving talent away from your organization. A methodological partnership that brings concrete data to employer branding strategy and strengthens what Lumen illuminates from within.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img
                src="/partners/ingaze-dashboard.webp"
                alt="Ingaze dashboard showing sentiment analysis and employer branding benchmarks"
                className="w-full"
                style={{ borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
                width={1200}
                height={675}
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PartnersSectionEN;
