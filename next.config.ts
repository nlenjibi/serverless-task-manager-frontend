import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Required for aws-amplify SSR compatibility
  transpilePackages: ['@aws-amplify/ui-react', 'aws-amplify'],
};

export default nextConfig;
