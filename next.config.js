/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || 'http://127.0.0.1:8000/api/v2',
  },
  distDir: process.env.BUILD_DIR || '.next',
}
