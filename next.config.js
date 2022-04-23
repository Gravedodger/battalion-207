/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
        'localhost'
    ],
    imageSizes: [24, 64, 300]
  }
};