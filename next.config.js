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
  assetPrefix: isProd ? 'https://cdn.battalion207.kyiv.ua' : '',
}

module.exports = nextConfig;
