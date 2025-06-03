/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MPfans',
  assetPrefix: '/MPfans/',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
