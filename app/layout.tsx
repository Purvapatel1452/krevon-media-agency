import type { Metadata, Viewport } from 'next';
import './globals.css';
import SEOStructuredData from '@/components/SEOStructuredData';

const SITE_URL = 'https://www.krevonmedia.com';
const OG_IMAGE  = `${SITE_URL}/krevon-logo.png`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF6A00',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Krevon Media Agency | #1 Brand Building & Social Media Marketing in Mahesana, Gujarat',
    template: '%s | Krevon Media Agency',
  },

  description:
    "Krevon Media Agency — Mahesana's #1 premium brand building, social media marketing, Meta Ads, Google Ads, video production & podcast studio. Trusted by 100+ brands across Gujarat. Co-Founded by Nikhil Patel & Darshan Sathwara.",

  keywords: [
    // Branded
    'Krevon', 'krevon', 'Krevon Media', 'krevon media',
    'Krevon Media Agency', 'krevon media agency', 'krevonmedia',
    'krevon media mahesana', 'krevon agency',
    // People
    'Nikhil Patel', 'nikhil patel', 'nikhil patel media agency',
    'nikhil patel krevon', 'nikhil patel mahesana',
    'Darshan Sathwara', 'darshan sathwara', 'darshan sathwara krevon',
    'darshan sathwara media agency', 'darshan sathwara mahesana',
    // Location
    'Amazing Mahesana', 'amazing mahesana', 'amazing mehsana',
    'Mahesana', 'mahesana', 'Mehsana', 'mehsana',
    'Mahesana Gujarat', 'mehsana gujarat', 'North Gujarat',
    // Core agency terms
    'media agency', 'social media agency', 'digital marketing agency',
    'marketing agency', 'brand agency', 'creative agency',
    'advertising agency', 'content agency',
    // Social media
    'social media', 'social media marketing', 'social media management',
    'instagram marketing', 'instagram reels', 'reels production',
    'facebook marketing', 'social media content', 'content creation',
    // Brand & marketing
    'brand marketing', 'brand building', 'brand identity',
    'brand strategy', 'branding agency', 'logo design',
    'visual identity', 'marketing', 'digital marketing',
    'online marketing', 'performance marketing',
    // Paid ads
    'Meta Ads', 'meta ads', 'Facebook Ads', 'facebook ads',
    'Instagram Ads', 'instagram ads', 'Google Ads', 'google ads',
    'PPC', 'paid advertising', 'paid marketing',
    // Video & podcast
    'video production', 'video marketing', 'video agency',
    'podcast studio', 'podcast production', 'reels creator',
    'short form video', 'YouTube marketing',
    // Location + service combos
    'media agency Mahesana', 'social media agency Mahesana',
    'digital marketing Mahesana', 'brand building Mahesana',
    'social media marketing Mahesana', 'marketing agency Gujarat',
    'brand agency Gujarat', 'video production Mahesana',
    'podcast studio Mahesana', 'Meta Ads Gujarat',
    'Google Ads Mahesana', 'media agency Gujarat',
    'social media agency Gujarat', 'brand marketing Mahesana',
    'digital marketing agency Mahesana', 'content creation Mahesana',
    'advertising agency Mahesana', 'advertising agency Gujarat',
    'best media agency mahesana', 'top marketing agency gujarat',
    // Discovery terms
    'social media expert mahesana', 'brand consultant mahesana',
    'e-commerce marketing gujarat', 'influencer marketing gujarat',
    'small business marketing india', 'startup branding india',
    'reels agency india', 'social media growth india',
  ],

  authors: [
    { name: 'Nikhil Patel',     url: SITE_URL },
    { name: 'Darshan Sathwara', url: SITE_URL },
  ],

  creator:   'Krevon Media Agency',
  publisher: 'Krevon Media Agency',
  category:  'Marketing Agency',

  openGraph: {
    type:     'website',
    locale:   'en_IN',
    url:      SITE_URL,
    siteName: 'Krevon Media Agency',
    title:    'Krevon Media Agency | #1 Brand Building & Social Media Marketing in Mahesana',
    description:
      "Mahesana's premier media agency — brand building, social media marketing, Meta Ads, Google Ads, video production & podcast studio. Co-Founded by Nikhil Patel & Darshan Sathwara.",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    'Krevon Media Agency — Brand Building & Digital Marketing in Mahesana, Gujarat',
      },
    ],
  },

  twitter: {
    card:        'summary_large_image',
    site:        '@krevonmedia',
    creator:     '@krevonmedia',
    title:       'Krevon Media Agency | Brand Building & Social Media Marketing',
    description: "Mahesana's #1 media agency — brand building, social media, Meta Ads, video production & podcast studio.",
    images:      [OG_IMAGE],
  },

  icons: {
    icon: [
      { url: '/krevon-logo.png', type: 'image/png', sizes: '512x512' },
      { url: '/krevon-logo.png', type: 'image/png', sizes: '192x192' },
      { url: '/krevon-logo.png', type: 'image/png', sizes: '96x96'  },
      { url: '/favicon.ico',     sizes: '48x48' },
    ],
    shortcut: '/krevon-logo.png',
    apple: [
      { url: '/krevon-logo.png', sizes: '512x512', type: 'image/png' },
      { url: '/krevon-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  manifest: '/manifest.json',

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:              true,
      follow:             true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  other: {
    'geo.region':    'IN-GJ',
    'geo.placename': 'Mahesana, Gujarat, India',
    'geo.position':  '23.5914;72.3693',
    'ICBM':          '23.5914, 72.3693',
    'revisit-after': '7 days',
    'language':      'English, Hindi, Gujarati',
    'rating':        'General',
    'copyright':     `© ${new Date().getFullYear()} Krevon Media Agency`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Explicit icon tags — crawlers see these before JS hydrates */}
        <link rel="icon" type="image/png" sizes="512x512" href="/krevon-logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/krevon-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/krevon-logo.png" />
        <link rel="shortcut icon" href="/krevon-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SEOStructuredData />
        {children}
      </body>
    </html>
  );
}
