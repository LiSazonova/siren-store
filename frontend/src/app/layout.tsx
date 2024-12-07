import type { Metadata } from 'next';
import { Inter, Lora, Lobster, Kaushan_Script } from 'next/font/google';
import './globals.css';
import Header from 'src/components/Header/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lora',
});

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lobster',
});

const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kaushan',
});

export const metadata: Metadata = {
  title: 'Siren Store',
  description: 'Магазин одягу Siren',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Siren Store</title>
      </head>
      <body
        className={`${inter.variable} ${lora.variable} ${lobster.variable} ${kaushan.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
