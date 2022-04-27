/**
 * @type {import('next').NextConfig}
**/

const nextConfig = {
  experimental: {
    runtime: 'nodejs',
  },
  basePath: '',
  images: {
    domains: [
      'localhost'
    ],
    imageSizes: [24, 64, 300]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig;
