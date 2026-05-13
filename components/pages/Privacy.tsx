"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Informativa Privacy — Venturo"
        description="Informativa privacy di Venturo. Come trattiamo i tuoi dati personali raccolti tramite i form di contatto e download."
        canonical="https://venturoconsulting.it/privacy"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/privacy", en: "https://venturoconsulting.it/en/privacy" }}
      />
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna al sito
        </Link>

        <article className="prose prose-gray max-w-none">
          <h1 className="text-display text-3xl md:text-4xl mb-8">Informativa Privacy</h1>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Titolare del trattamento</h2>
            <p className="text-foreground leading-relaxed">
              Studio Miller — Massimo Benedetti e Rosario Carnovale<br />
              P.IVA: 02662900022<br />
              Email: <a href="mailto:info@venturoconsulting.it" className="text-foreground underline hover:no-underline">info@venturoconsulting.it</a>
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Dati raccolti</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Raccogliamo dati personali attraverso due form presenti su questo sito:
            </p>
            <p className="text-foreground leading-relaxed mb-2"><strong>Form di contatto</strong></p>
            <ul className="list-disc pl-6 text-foreground space-y-1 mb-4">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Messaggio e contenuto della richiesta</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-2"><strong>Form di download della guida gratuita</strong></p>
            <ul className="list-disc pl-6 text-foreground space-y-1">
              <li>Indirizzo email</li>
              <li>Consenso esplicito all'invio di comunicazioni di marketing (opt-in)</li>
            </ul>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Finalità del trattamento</h2>
            <p className="text-foreground leading-relaxed mb-3">
              I dati personali raccolti vengono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1">
              <li>Rispondere alle richieste di informazioni inviate volontariamente tramite il form di contatto</li>
              <li>Gestire la comunicazione con l'interessato in relazione alla richiesta specifica</li>
              <li>Inviare la risorsa gratuita richiesta (guida in formato PDF)</li>
              <li>Inviare contenuti informativi e aggiornamenti su cultura organizzativa ed employer branding, esclusivamente previo consenso esplicito dell'interessato</li>
            </ul>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Base giuridica</h2>
            <p className="text-foreground leading-relaxed mb-3">
              Il trattamento si basa su:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li><strong>Legittimo interesse</strong> del titolare a rispondere a richieste di contatto spontanee (art. 6, par. 1, lett. f del GDPR)</li>
              <li><strong>Consenso esplicito</strong> dell'interessato fornito tramite compilazione e invio del form (art. 6, par. 1, lett. a del GDPR)</li>
              <li><strong>Consenso esplicito</strong> per l'invio di comunicazioni di marketing, fornito tramite checkbox opt-in al momento del download della guida (art. 6, par. 1, lett. a del GDPR) — liberamente revocabile in qualsiasi momento</li>
            </ul>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Conservazione dei dati</h2>
            <p className="text-foreground leading-relaxed">
              I dati personali vengono conservati per il tempo strettamente necessario a gestire la richiesta e comunque non oltre 24 mesi dalla data di ultimo contatto o dalla revoca del consenso.
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Destinatari dei dati</h2>
            <p className="text-foreground leading-relaxed mb-3">
              I dati personali non vengono comunicati a terzi, ad eccezione dei fornitori di servizi tecnici necessari alla gestione del sito:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1 mb-3">
              <li><strong>Lovable</strong> (hosting del sito web) — USA, con garanzie GDPR</li>
              <li><strong>Brevo (Sendinblue SAS)</strong> (servizio di invio email e marketing automation) — Francia, soggetto al GDPR europeo</li>
              <li><strong>Supabase</strong> (infrastruttura backend) — USA, con garanzie GDPR</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Questi soggetti operano come responsabili del trattamento sulla base di specifici accordi contrattuali.
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Diritti dell'interessato</h2>
            <p className="text-foreground leading-relaxed mb-3">
              L'interessato ha diritto di:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1 mb-4">
              <li>Accedere ai propri dati personali</li>
              <li>Ottenere la rettifica o la cancellazione degli stessi</li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basato sul consenso prestato prima della revoca</li>
              <li>Proporre reclamo all'Autorità Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:no-underline">www.garanteprivacy.it</a>)</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              Per esercitare questi diritti o per revocare il consenso alle comunicazioni di marketing, è possibile contattare il Titolare all'indirizzo: <strong><a href="mailto:info@venturoconsulting.it" className="text-foreground underline hover:no-underline">info@venturoconsulting.it</a></strong>
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Cookie</h2>
            <p className="text-foreground leading-relaxed">
              Questo sito non utilizza cookie di profilazione. Vengono utilizzati esclusivamente cookie tecnici necessari al funzionamento del sito.
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Aggiornamenti</h2>
            <p className="text-foreground leading-relaxed">
              Questa informativa può essere aggiornata periodicamente. L'ultima versione è sempre disponibile su questa pagina.
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              <strong>Ultimo aggiornamento: 9 marzo 2026</strong>
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
