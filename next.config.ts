import type { NextConfig } from "next";

// Static export: the site has no backend. NEXT_PUBLIC_BASE_PATH is set by the
// GitHub Pages workflow ("/tccexpert"); leave it empty for a root-domain deploy.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
