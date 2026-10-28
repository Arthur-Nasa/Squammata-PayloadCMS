import { withPayload } from '@payloadcms/next/withPayload'
import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'http://localhost:3000'

const configuredUrls = [
  NEXT_PUBLIC_SERVER_URL,
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://192.168.15.9:3000',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  allowedDevOrigins: [
    '192.168.15.9:3000',
    '192.168.15.9',
    '192.168.15.10:3000',
    '192.168.15.10',
    'localhost:3000',
    '127.0.0.1:3000',
  ],
  redirects,
  images: {
    qualities: [75, 80, 85, 90, 95, 100],
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
    remotePatterns: [
      ...configuredUrls.map((item) => {
        const url = new URL(item)
        return {
          protocol: url.protocol.replace(':', ''),
          hostname: url.hostname,
          port: url.port || undefined,
        }
      }),
      {
        protocol: 'http',
        hostname: '192.168.**',
      },
      {
        protocol: 'http',
        hostname: '10.**',
      },
      {
        protocol: 'http',
        hostname: '172.**',
      },
      {
        protocol: 'https',
        hostname: '192.168.**',
      },
      ...(process.env.NEXT_PUBLIC_CDN_DOMAIN
        ? [
            {
              protocol: 'https',
              hostname: process.env.NEXT_PUBLIC_CDN_DOMAIN,
            },
          ]
        : []),
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = false
    }
    config.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }
    return config
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })

