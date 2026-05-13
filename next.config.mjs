import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
