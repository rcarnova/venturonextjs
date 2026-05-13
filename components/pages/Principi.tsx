"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import PrincipiHero from "@/components/principi/PrincipiHero";
import PrincipiSection from "@/components/principi/PrincipiSection";
import PrincipiIntegration from "@/components/principi/PrincipiIntegration";
import PrincipiCTA from "@/components/principi/PrincipiCTA";
import { sezioni } from "@/data/principi";

const Principi = () => {
  return (
    <>
      <SEO
        title="I nostri principi — Fondamenti teorici di Venturo"
        description="Da Edgar Schein a Simon Sinek, da David Aaker a Daniel Kahneman. I principi consolidati su cui si basa il metodo Venturo per la consulenza culturale."
        canonical="https://venturoconsulting.it/principi"
        lang="it"
        alternateUrls={{ it: "https://venturoconsulting.it/principi", en: "https://venturoconsulting.it/en/principles" }}
      />
      <Header />
      <PrincipiHero />
      {sezioni.map((sezione, i) => (
        <PrincipiSection key={sezione.id} sezione={sezione} index={i} />
      ))}
      <PrincipiIntegration />
      <PrincipiCTA />
      <Footer />
    </>
  );
};

export default Principi;
