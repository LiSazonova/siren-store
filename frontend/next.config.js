// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['siren-store.vercel.app'],
  },
  env: {
    MERCHANT_ACCOUNT: process.env.MERCHANT_ACCOUNT,
    MERCHANT_DOMAIN_NAME: process.env.MERCHANT_DOMAIN_NAME,
    MERCHANT_SECRET_KEY: process.env.MERCHANT_SECRET_KEY,
    RETURN_URL: process.env.RETURN_URL,
  },
};

module.exports = nextConfig;
