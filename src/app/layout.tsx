import type { Metadata } from 'next';
import { Inter, Lora, Lobster, Kaushan_Script } from 'next/font/google';
import './globals.css';

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} ${lobster.variable} ${kaushan.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
