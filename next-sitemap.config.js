/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://venturoconsulting.it",
  generateRobotsTxt: false, // robots.txt is managed manually in /public
  outDir: "./public",
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/toolkit/admin", "/en/toolkit/admin"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/chi-siamo"),
    await config.transform(config, "/le-sfide"),
    await config.transform(config, "/lumen"),
    await config.transform(config, "/principi"),
    await config.transform(config, "/analisi-evp"),
    await config.transform(config, "/casi-studio"),
    await config.transform(config, "/magazine"),
    await config.transform(config, "/privacy"),
    await config.transform(config, "/en"),
    await config.transform(config, "/en/about"),
    await config.transform(config, "/en/challenges"),
    await config.transform(config, "/en/lumen"),
    await config.transform(config, "/en/principles"),
    await config.transform(config, "/en/evp-analysis"),
    await config.transform(config, "/en/case-studies"),
    await config.transform(config, "/en/magazine"),
    await config.transform(config, "/en/privacy"),
  ],
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/en": 0.9,
      "/chi-siamo": 0.8,
      "/en/about": 0.8,
      "/le-sfide": 0.8,
      "/en/challenges": 0.8,
      "/lumen": 0.9,
      "/en/lumen": 0.9,
      "/principi": 0.8,
      "/en/principles": 0.8,
      "/analisi-evp": 0.8,
      "/en/evp-analysis": 0.8,
      "/casi-studio": 0.7,
      "/en/case-studies": 0.7,
      "/magazine": 0.7,
      "/en/magazine": 0.7,
    };

    const isMagazine = path.includes("/magazine/");
    const isCase = path.includes("/casi-studio/") || path.includes("/case-studies/");

    return {
      loc: path,
      changefreq: isMagazine ? "monthly" : isCase ? "monthly" : "weekly",
      priority: priorities[path] ?? (isMagazine || isCase ? 0.6 : 0.7),
      lastmod: new Date().toISOString(),
    };
  },
};
