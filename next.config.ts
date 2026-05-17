import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://i.pravatar.cc/**'), new URL('https://res.cloudinary.com/dw6ukgncm/**'), new URL("https://picsum.photos/**")],
  },
};

export default nextConfig;
