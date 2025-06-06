import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This disables lint errors on Vercel build
  },
};

export default nextConfig;
