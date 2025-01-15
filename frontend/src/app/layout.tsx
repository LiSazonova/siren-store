import type { Metadata } from 'next';
import { Inter, Lora, Lobster, Kaushan_Script } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClientProviders from '@/components/ClientProviders/ClientProviders';
import { CartProvider } from '@/context/CartContext';
import { ProductProvider } from '@/context/ProductContext';

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
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '';

  if (!clientId) {
    console.error('Google Client ID is missing. Check your .env file.');
  }
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Siren Store</title>
      </head>
      <body
        className={`${inter.variable} ${lora.variable} ${lobster.variable} ${kaushan.variable}`}
      >
        <ProductProvider>
          <ClientProviders>
            <CartProvider>
              <Header />
              {children}
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </CartProvider>
          </ClientProviders>
        </ProductProvider>
      </body>
    </html>
  );
}
