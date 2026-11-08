import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Il PDF della guida non va indicizzato: in Google deve comparire la pagina
  // /guida-costo-turnover, dove c'è il modulo, non il file scaricabile.
  async headers() {
    return [{ source: "/guide/:file*.pdf", headers: [{ key: "X-Robots-Tag", value: "noindex" }] }];
  },
  webpack: (config) => {
    config.resolve.alias["react-helmet-async"] = path.resolve(
      __dirname,
      "lib/helmet-stub.tsx"
    );
    return config;
  },
};

export default nextConfig;
