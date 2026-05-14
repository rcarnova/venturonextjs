"use client";

import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

const articles = [
  {
    category: "cultura organizzativa",
    title: "Le buzzword non sono un problema stilistico. Sono un problema cognitivo.",
    excerpt:
      "Una ricerca di Cornell conferma ciò che chi lavora nelle organizzazioni sente da anni: chi usa linguaggio aziendale opaco tende ad essere meno competente. Il problema non è stilistico.",
    date: "14 mag 2026",
    readTime: "6 min",
    link: "/magazine/linguaggio-opaco-e-competenza",
    author: "Rosario",
    tags: ["cultura organizzativa", "leadership"],
  },
  {
    category: "cultura organizzativa",
    title: "L'identità dichiarata e l'identità vissuta: il cortocircuito silenzioso.",
    excerpt:
      "Il 72% dei dipendenti non capisce la strategia della propria azienda. Non è un problema di comunicazione: è la distanza tra ciò che un'organizzazione dichiara di essere e ciò che le persone vivono ogni giorno.",
    date: "27 apr 2026",
    readTime: "6 min",
    link: "/magazine/identita-dichiarata-vissuta",
    author: "Rosario",
    tags: ["brand e cultura", "comunicazione interna"],
  },
  {
    category: "cultura organizzativa",
    title: "I bookish influencer e la nuova fame di sostanza dei talenti.",
    excerpt:
      "Millennial e Gen Z seguono chi legge, non chi mostra. I talenti cercano ambienti in cui si pensa davvero: l'employer branding dichiarato non basta più.",
    date: "24 apr 2026",
    readTime: "6 min",
    link: "/magazine/bookish-talenti-sostanza",
    author: "Rosario",
    tags: ["attrazione talenti", "brand e cultura"],
  },
  {
    category: "cultura organizzativa",
    title: "Il remote working non è un problema ambientale. È uno specchio.",
    excerpt:
      "La Banca d'Italia misura le emissioni del lavoro ibrido. Il risultato è chiaro. La domanda interessante è un'altra: il remote non crea problemi, li rivela.",
    date: "21 apr 2026",
    readTime: "6 min",
    link: "/magazine/remote-working-specchio",
    author: "Rosario",
    tags: ["lavoro ibrido", "delega e leadership"],
  },
  {
    category: "cultura organizzativa",
    title: "Chi è davvero presente? Identità, leadership ed employer branding.",
    excerpt:
      "Le organizzazioni che non attraggono talenti non hanno un problema di strategia o budget: hanno un problema di presenza.",
    date: "19 apr 2026",
    readTime: "4 min",
    link: "/magazine/presenza-identita",
    author: "Rosario",
    tags: ["attrazione talenti", "delega e leadership"],
  },
  {
    category: "cultura organizzativa",
    title: "Trasparenza salariale: lo specchio che le aziende non possono più evitare.",
    excerpt:
      "La Direttiva UE 2023/970 non è solo compliance. È un'occasione per capire come pensa davvero la vostra organizzazione.",
    date: "17 apr 2026",
    readTime: "5 min",
    link: "/magazine/trasparenza-salariale",
    author: "Rosario",
    tags: ["comunicazione interna", "brand e cultura"],
  },
  {
    category: "branding",
    title: "Il manuale di brand è una reliquia. L'identità è cultura.",
    excerpt:
      "Un'identità forte non si misura dallo spessore del manuale, ma da quanto profondamente è entrata nelle persone.",
    date: "14 apr 2026",
    readTime: "6 min",
    link: "/magazine/brand-manuale-reliquia",
    author: "Rosario",
    tags: ["brand e cultura", "comunicazione interna"],
  },
  {
    category: "cultura organizzativa",
    title: "La vicinanza nasce dall'intenzionalità, non dalla tecnologia.",
    excerpt:
      "Non è remoto vs ufficio. È presenti vs altrove. La qualità dell'attenzione che porti in una stanza vale più di dove quella stanza si trova.",
    date: "12 apr 2026",
    readTime: "4 min",
    link: "/magazine/presenza-intenzionalita",
    author: "Rosario",
    tags: ["lavoro ibrido", "comunicazione interna"],
  },
  {
    category: "cultura organizzativa",
    title: "Non è (solo) un problema di competenze. L'AI e la cultura organizzativa.",
    excerpt:
      "I progetti AI non si arenano nei datacenter, ma nelle riunioni e nelle conversazioni che non avvengono. L'adozione è prima di tutto una questione di identità.",
    date: "5 apr 2026",
    readTime: "6 min",
    link: "/magazine/competenze-ai-cultura",
    author: "Rosario",
    tags: ["innovazione", "comunicazione interna"],
  },
  {
    category: "cultura organizzativa",
    title: "Il costo del non detto. Perché il 70% dei dipendenti non c'è davvero.",
    excerpt:
      "Il distacco dei dipendenti non nasce dal nulla: nasce dal non detto che si accumula, strato dopo strato, fino a diventare cultura.",
    date: "29 mar 2026",
    readTime: "6 min",
    link: "/magazine/il-costo-del-non-detto",
    author: "Rosario",
    tags: ["comunicazione interna", "delega e leadership"],
  },
  {
    category: "cultura organizzativa",
    title: "L'AI ci darà più ascolto. Ma ascolto è un'altra cosa.",
    excerpt:
      "Come i nuovi strumenti di analisi del sentiment rischiano di ripetere l'errore delle survey: raccogliere dati senza cambiar nulla.",
    date: "22 mar 2026",
    readTime: "5 min",
    link: "/magazine/ai-ascolto",
    author: "Rosario",
    tags: ["comunicazione interna", "innovazione"],
  },
  {
    category: "cultura organizzativa",
    title: "La cultura non è mai sbagliata. È solo cultura.",
    excerpt:
      "Ho visto molte aziende arrendersi. Non parlo di business. Parlo di cultura.",
    date: "15 mar 2026",
    readTime: "4 min",
    link: "/magazine/la-cultura-non-e-mai-sbagliata",
    author: "Rosario",
    tags: ["brand e cultura", "innovazione"],
  },
  {
    category: "Organizzazione",
    title: "La responsabilità non si delega. Si conquista.",
    excerpt:
      "Nelle organizzazioni sane le persone non aspettano che qualcuno assegni loro responsabilità. Le pretendono.",
    date: "8 mar 2026",
    readTime: "4 min",
    link: "/magazine/la-responsabilita-non-si-delega",
    author: "Rosario",
    tags: ["delega e leadership"],
  },
  {
    category: "Cultura",
    title: "I valori non sono poster. Sono promesse.",
    excerpt:
      "Le aziende fanno promesse continuamente. Ma come ci hanno insegnato da bambini: le promesse vanno mantenute.",
    date: "1 mar 2026",
    readTime: "4 min",
    link: "/magazine/i-valori-non-sono-poster",
    author: "Rosario",
    tags: ["brand e cultura", "attrazione talenti"],
  },
];

const Magazine = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="WHY — Articoli su cultura organizzativa ed employer branding"
        description="Ogni organizzazione ha un perché. Articoli su employer branding, cultura organizzativa, leadership e comunicazione interna."
        canonical="https://venturoconsulting.it/magazine"
        lang="it"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine",
          en: "https://venturoconsulting.it/en/magazine",
        }}
      />
      <Header />
      <main className="pt-20">
        {/* Editorial Header */}
        <section className="bg-white py-16 md:py-20 pb-0">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h1
              className="text-[80px] md:text-[120px] lg:text-[160px] font-bold tracking-tight leading-none text-foreground"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              WHY
            </h1>
            <p
              className="mt-4 text-sm md:text-base font-mono tracking-wide uppercase"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "#666",
                letterSpacing: "0.08em",
              }}
            >
              ogni organizzazione ha un perché.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pt-10 pb-16 bg-background">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {articles.map((article, index) => (
                <ArticleCard key={index} index={index} {...article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Magazine;
