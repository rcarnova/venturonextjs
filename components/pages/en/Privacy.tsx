"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";
import FooterEN from "@/components/en/FooterEN";

const PrivacyEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy — Venturo"
        description="Venturo's privacy policy. How we handle your personal data collected through our contact and download forms."
        canonical="https://venturoconsulting.it/en/privacy"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/privacy", en: "https://venturoconsulting.it/en/privacy" }}
      />
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-12">
        <Link 
          href="/en" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to site
        </Link>

        <article className="prose prose-gray max-w-none">
          <h1 className="text-display text-3xl md:text-4xl mb-8">Privacy Policy</h1>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Data Controller</h2>
            <p className="text-foreground leading-relaxed">
              Studio Miller — Massimo Benedetti e Rosario Carnovale<br />
              VAT No.: 02662900022<br />
              Email: <a href="mailto:info@venturoconsulting.it" className="text-foreground underline hover:no-underline">info@venturoconsulting.it</a>
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Data Collected</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We collect personal data through two forms on this website:
            </p>
            <p className="text-foreground leading-relaxed mb-2"><strong>Contact form</strong></p>
            <ul className="list-disc pl-6 text-foreground space-y-1 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Message and request content</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-2"><strong>Free guide download form</strong></p>
            <ul className="list-disc pl-6 text-foreground space-y-1">
              <li>Email address</li>
              <li>Explicit consent to receive marketing communications (opt-in)</li>
            </ul>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Purpose of Processing</h2>
            <p className="text-foreground leading-relaxed mb-3">
              Personal data collected is processed for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1">
              <li>Responding to information requests voluntarily submitted through the contact form</li>
              <li>Managing communication with the data subject in relation to their specific request</li>
              <li>Sending the requested free resource (PDF guide)</li>
              <li>Sending informational content and updates on organizational culture and employer branding, exclusively upon explicit consent of the data subject</li>
            </ul>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Legal Basis</h2>
            <p className="text-foreground leading-relaxed mb-3">
              Processing is based on:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-2">
              <li><strong>Legitimate interest</strong> of the controller in responding to spontaneous contact requests (Art. 6(1)(f) GDPR)</li>
              <li><strong>Explicit consent</strong> of the data subject provided by completing and submitting the form (Art. 6(1)(a) GDPR)</li>
              <li><strong>Explicit consent</strong> for marketing communications, provided via opt-in checkbox at the time of guide download (Art. 6(1)(a) GDPR) — freely revocable at any time</li>
            </ul>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Data Retention</h2>
            <p className="text-foreground leading-relaxed">
              Personal data is retained for the time strictly necessary to handle the request and in any case no longer than 24 months from the date of last contact or withdrawal of consent.
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Data Recipients</h2>
            <p className="text-foreground leading-relaxed mb-3">
              Personal data is not shared with third parties, except for the technical service providers necessary for the operation of the website:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1 mb-3">
              <li><strong>Lovable</strong> (website hosting) — USA, with GDPR safeguards</li>
              <li><strong>Brevo (Sendinblue SAS)</strong> (email delivery and marketing automation service) — France, subject to European GDPR</li>
              <li><strong>Supabase</strong> (backend infrastructure) — USA, with GDPR safeguards</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              These parties act as data processors on the basis of specific contractual agreements.
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Data Subject Rights</h2>
            <p className="text-foreground leading-relaxed mb-3">
              The data subject has the right to:
            </p>
            <ul className="list-disc pl-6 text-foreground space-y-1 mb-4">
              <li>Access their personal data</li>
              <li>Request rectification or erasure of their data</li>
              <li>Request restriction of processing</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time, without affecting the lawfulness of processing based on consent given prior to withdrawal</li>
              <li>Lodge a complaint with the Italian Data Protection Authority (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:no-underline">www.garanteprivacy.it</a>)</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              To exercise these rights or to withdraw consent to marketing communications, please contact the Data Controller at: <strong><a href="mailto:info@venturoconsulting.it" className="text-foreground underline hover:no-underline">info@venturoconsulting.it</a></strong>
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Cookies</h2>
            <p className="text-foreground leading-relaxed">
              This website does not use profiling cookies. Only technical cookies necessary for the operation of the site are used.
            </p>
          </section>

          <hr className="border-border my-10" />

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Updates</h2>
            <p className="text-foreground leading-relaxed">
              This policy may be updated periodically. The latest version is always available on this page.
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              <strong>Last updated: March 9, 2026</strong>
            </p>
          </section>
        </article>
      </div>
      <FooterEN />
    </div>
  );
};

export default PrivacyEN;
