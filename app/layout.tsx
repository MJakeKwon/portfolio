import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

function toAbsoluteUrl(input: string | undefined) {
  const raw = (input ?? '').trim();
  if (!raw) return undefined;
  if (raw.startsWith('http://') || raw.startsWith('https://')) return raw;
  return `https://${raw}`;
}

function getMetadataBase() {
  const candidate = toAbsoluteUrl(process.env.SITE_URL) || toAbsoluteUrl(process.env.VERCEL_URL) || 'http://localhost:3000';

  try {
    return new URL(candidate);
  } catch {
    return new URL('http://localhost:3000');
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: '권민재 포트폴리오',
  description: '구조와 운영까지 같이 보는 백엔드 개발자 권민재의 포트폴리오',
  openGraph: {
    title: '권민재 포트폴리오',
    description: '구조와 운영까지 같이 보는 백엔드 개발자 권민재의 포트폴리오',
    images: ['/profile-photo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '권민재 포트폴리오',
    description: '구조와 운영까지 같이 보는 백엔드 개발자 권민재의 포트폴리오',
    images: ['/profile-photo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
