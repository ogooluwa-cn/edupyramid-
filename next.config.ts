import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 this tells Next.js to export static HTML files instead of needing a Node.js server
  output: "export",

  // 👇 ensures images from next/image still work on static hosting
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true, // keeps your build clean from lint errors
  },
};

export default nextConfig;
