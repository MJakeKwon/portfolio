import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '성구 포트폴리오',
  description: '운영 환경을 고려해 설계하고 개발하는 성구의 포트폴리오입니다.',
  openGraph: {
    title: '성구 포트폴리오',
    description: '운영 환경을 고려해 설계하고 개발하는 성구의 포트폴리오입니다.',
    images: ['/avatar.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
