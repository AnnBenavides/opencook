import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: process.env.BASE_URL || '',
};

export default nextConfig;
