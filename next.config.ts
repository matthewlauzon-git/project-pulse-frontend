import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...(config.watchOptions || {}),
        ignored: [
          '**/.next/**',
          '**/.next.stale-*/**',
          '**/node_modules/**',
          '**/content/processed/**',
          '**/supabase/**',
        ],
      }
    }

    return config
  },
};

export default nextConfig;
