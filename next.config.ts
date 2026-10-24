import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    qualities: [75, 90],
  },
  experimental: {
    // Without this, a server component importing the Once UI package root
    // ships about 110 kB of extra JavaScript on every route.
    optimizePackageImports: ["@once-ui-system/core"],
  },
};

export default nextConfig;
