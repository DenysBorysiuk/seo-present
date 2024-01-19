import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost'),
  title: 'Seo',
  description: 'Seo in Nextjs',
  openGraph: {
    title: 'Seo',
    description: 'Seo is a...',
    images: '/images/og-image.jpg',
    type: 'website',
  },
  keywords: ['seo', 'nextjs'],
  // alternates: {
  //   canonical: '/',
  // },
  // title: {
  //   default: 'Seo',
  //   template: `%s | Seo`,
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
