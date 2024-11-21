require('dotenv').config();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { i18n } = require('./next-i18next.config');

module.exports = withBundleAnalyzer({
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  i18n,
  // Use the CDN in production and localhost for development.
  // assetPrefix:
  //   process.env.NODE_ENV === 'production' ? process.env.CDN_URL : undefined,
});
