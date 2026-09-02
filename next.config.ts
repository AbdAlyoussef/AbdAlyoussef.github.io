import type { NextConfig } from 'next';

const isPagesBuild = process.env.npm_lifecycle_event === 'build:pages';

const nextConfig: NextConfig = isPagesBuild
  ? {
      output: 'export',
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
