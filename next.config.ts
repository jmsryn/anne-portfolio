import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "annesabirin.my.canva.site",
      },
    ],
  },
};

export default nextConfig;
