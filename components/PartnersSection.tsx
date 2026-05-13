import AnimatedSection from "./AnimatedSection";


const PartnersSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-narrow">
        <AnimatedSection className="mb-8">
          <p className="text-eyebrow text-muted-foreground mb-3">PARTNER</p>
          <h2 className="text-section text-foreground">
            La piattaforma di Employer Intelligence basata su AI
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
                  alt="Logo Ingaze - piattaforma employer intelligence basata su AI"
                  className="h-8 md:h-10 w-auto object-contain"
                  width={120}
                  height={40}
                  loading="lazy"
                />
              </a>
              <p className="text-[16px] leading-[1.65] text-muted-foreground">
                Per i progetti che richiedono un ancoraggio ai dati, collaboriamo con Ingaze. Una piattaforma di employer intelligence che dà accesso a insight reali, analisi del sentiment e confronti con i competitor. Per capire dalle recensioni cosa funziona davvero e cosa sta allontanando i talenti dalla vostra organizzazione. Una partnership metodologica che porta dati concreti alla strategia di employer branding e rafforza ciò che Lumen illumina dall'interno.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img
                src="/partners/ingaze-dashboard.webp"
                alt="Screenshot della dashboard Ingaze con analisi del sentiment e benchmark employer branding"
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

export default PartnersSection;
