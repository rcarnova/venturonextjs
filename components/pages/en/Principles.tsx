"use client";

import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { SEO } from "@/components/SEO";
import PrincipiHero from "@/components/principi/PrincipiHero";
import PrincipiSection from "@/components/principi/PrincipiSection";
import PrincipiIntegration from "@/components/principi/PrincipiIntegration";
import PrincipiCTA from "@/components/principi/PrincipiCTA";
import { sezioniEN } from "@/data/principiEN";

const Principles = () => {
  return (
    <>
      <SEO
        title="Our Principles — Venturo's Theoretical Foundations"
        description="From Edgar Schein to Simon Sinek, from David Aaker to Daniel Kahneman. The established principles behind Venturo's cultural consulting method."
        canonical="https://venturoconsulting.it/en/principles"
        lang="en"
        alternateUrls={{ it: "https://venturoconsulting.it/principi", en: "https://venturoconsulting.it/en/principles" }}
      />
      <HeaderEN />
      <PrincipiHero lang="en" />
      {sezioniEN.map((sezione, i) => (
        <PrincipiSection key={sezione.id} sezione={sezione} index={i} lang="en" />
      ))}
      <PrincipiIntegration lang="en" />
      <PrincipiCTA lang="en" />
      <FooterEN />
    </>
  );
};

export default Principles;
