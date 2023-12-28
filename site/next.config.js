/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Tathar26 Kasm Registry',
    description: 'Tathar26 workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://tathar26.github.io/kasm-registry/',
    contactUrl: 'https://github.com/tathar26/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
