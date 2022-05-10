/**
 * @type {import('next').NextConfig}
**/

const nextConfig = {
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
    ignoreBuildErrors: true,
  },
  distDir: 'build',
}

module.exports = nextConfig;
