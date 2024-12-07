import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Добавьте сюда хосты, откуда вы загружаете изображения
  },
};

export default nextConfig;