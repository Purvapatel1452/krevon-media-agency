import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Krevon Media Agency | Premium Brand Building & Digital Marketing in Mahesana',
  description:
    'Krevon Media Agency in Mehsana, Gujarat — Premium brand building, social media marketing, Meta Ads, Google Ads, video production & podcast studio. Trusted by 20+ brands.',
  keywords: [
    'brand building Mahesana',
    'digital marketing Gujarat',
    'social media marketing Mehsana',
    'Meta Ads Gujarat',
    'Google Ads Mahesana',
    'video production Gujarat',
    'podcast studio Mehsana',
    'Krevon Media Agency',
    'graphic design Mahesana',
    'influencer marketing Gujarat',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://krevon.in',
    siteName: 'Krevon Media Agency',
    title: 'Krevon Media Agency | Premium Brand Building in Mahesana',
    description:
      'Krevon Media Agency — Premium brand building, digital marketing, Meta Ads, video production & podcast studio in Mehsana, Gujarat.',
    images: [{ url: '/krevon-logo.png', width: 1200, height: 630, alt: 'Krevon Media Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krevon Media Agency | Brand Building & Digital Marketing',
    description: 'Premium brand building and digital marketing agency in Mehsana, Gujarat.',
    images: ['/krevon-logo.png'],
  },
  icons: {
    icon: '/krevon-logo.png',
    shortcut: '/krevon-logo.png',
    apple: '/krevon-logo.png',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://krevon.in' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
