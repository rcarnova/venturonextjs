import AnimatedSection from "@/components/AnimatedSection";

const LumenValori = () => (
  <section className="py-24 bg-background">
    <div className="container-wide max-w-5xl">
      <AnimatedSection>
        <p className="text-eyebrow font-mono text-primary mb-4">Posizionamento</p>
        <h2 className="text-section mb-4">I valori come promesse</h2>
        <p className="text-muted-foreground text-sm uppercase tracking-wide mb-8">
          La cultura è l'infrastruttura della promessa di brand
        </p>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="space-y-4 text-foreground leading-relaxed mb-10">
          <p>
            La cultura organizzativa non è un elemento decorativo — è la promessa di brand interna.
            I valori dichiarati sono impegni concreti verso clienti, candidati e collaboratori.
            E come ogni promessa, possono essere mantenute o tradite.
          </p>
          <p>
            Se un'organizzazione dichiara "collaborazione" come valore ma la cultura reale premia
            l'individualismo, quella non è una tensione evolutiva sana — è una promessa tradita.
            I candidati arrivano attratti dalla promessa e se ne vanno delusi dopo 18 mesi.
            I clienti percepiscono l'incoerenza tra ciò che l'azienda dice e come si comporta internamente.
          </p>
        </div>
      </AnimatedSection>

      {/* Box Tensione Sana */}
      <AnimatedSection delay={200}>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Il principio della tensione sana</p>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Una cultura è sana quando c'è consapevolezza dello scarto tra promessa e realtà,
              e lavoro attivo per ridurlo.
            </p>
            <p>
              Se il valore "collaborazione" è vissuto al 60% e l'organizzazione punta consapevolmente
              al 65% l'anno successivo, quella è tensione evolutiva. Ma se il valore è vissuto al 10%
              e viene comunicato all'esterno come identità distintiva, quella è incoerenza strutturale —
              e il valore va tolto dalla lista o va avviato un progetto culturale profondo per renderlo credibile.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Copy conclusivo */}
      <AnimatedSection delay={300}>
        <div className="space-y-4 text-foreground leading-relaxed mb-10">
          <p>
            Lumen aiuta le organizzazioni a misurare lo scarto tra promessa e realtà — non con
            punteggi numerici ma attraverso le storie che le persone raccontano.
          </p>
          <p>
            Quando un valore dichiarato non compare mai nelle narrazioni spontanee, o compare solo
            come contraddizione (<span className="italic">"dicono che collaboriamo ma poi..."</span>),
            quello è un dato più potente di qualsiasi questionario a scala Likert. Lo scarto è visibile,
            misurabile, nominabile.
          </p>
        </div>
      </AnimatedSection>

      {/* Box Perché Venturo */}
      <AnimatedSection delay={400}>
        <div className="bg-muted/60 border border-border rounded-xl p-8">
          <p className="font-bold text-sm mb-3">Perché Venturo sa leggere questa tensione</p>
          <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
            <p>
              Noi di Venturo veniamo dalla strategia di brand — sappiamo cosa vuol dire sostenere
              una promessa di brand, come si progetta, quando regge e quando crolla.
            </p>
            <p>
              Lo stesso vale per la cultura organizzativa. Abbiamo visto campagne di employer branding
              fallire perché la cultura interna non sosteneva la narrativa esterna. Ora lavoriamo
              dall'altra parte — aiutiamo le organizzazioni a costruire culture che sostengono le loro promesse.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LumenValori;
