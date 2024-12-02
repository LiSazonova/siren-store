import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['uk', 'en'], // Поддерживаемые языки
    defaultLocale: 'uk', // Язык по умолчанию
  },
  reactStrictMode: true, // Строгий режим React
};

export default nextConfig;
