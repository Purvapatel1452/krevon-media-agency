// JSON-LD structured data — read by Google to understand the business, people, and services.
// Helps the site appear in rich results, knowledge panels, and local packs.

const SITE_URL = 'https://www.krevonmedia.com';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── 1. Organization / Marketing Agency ──────────────────────────────────
    {
      '@type': ['MarketingAgency', 'LocalBusiness', 'Organization'],
      '@id': `${SITE_URL}/#organization`,
      name: 'Krevon Media Agency',
      alternateName: [
        'Krevon Media', 'Krevon', 'krevon media', 'krevon agency',
        'Krevon Media Mahesana', 'Amazing Mahesana',
      ],
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/krevon-logo.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/krevon-logo.png`,
      description:
        "Krevon Media Agency is Mahesana's #1 premium brand building, social media marketing, Meta Ads, Google Ads, video production and podcast studio. Founded by Nikhil Patel and Darshan Sathwara, serving 25+ brands across Gujarat and India.",
      slogan: 'We Build Brands That Grow.',
      foundingDate: '2021',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sf-215, Silicon Sponta, Radhanpur Rd, Bansari Twp',
        addressLocality: 'Mehsana',
        addressRegion: 'Gujarat',
        postalCode: '384005',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 23.5914,
        longitude: 72.3693,
      },
      areaServed: [
        { '@type': 'City',    name: 'Mahesana' },
        { '@type': 'City',    name: 'Mehsana' },
        { '@type': 'State',   name: 'Gujarat' },
        { '@type': 'Country', name: 'India' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: ['English', 'Hindi', 'Gujarati'],
          areaServed: 'IN',
        },
      ],
      founder: [
        {
          '@type': 'Person',
          '@id': `${SITE_URL}/#nikhil-patel`,
          name: 'Nikhil Patel',
          sameAs: SITE_URL,
        },
        {
          '@type': 'Person',
          '@id': `${SITE_URL}/#darshan-sathwara`,
          name: 'Darshan Sathwara',
          sameAs: SITE_URL,
        },
      ],
      sameAs: [
        'https://www.instagram.com/krevon.media',
        'https://www.facebook.com/krevonmedia',
        'https://krevonmedia.com',
        'https://www.krevonmedia.com',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing & Media Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Brand Building',
              description: 'Complete brand identity — logo, visual system, color palette, typography, brand guidelines.',
              provider: { '@id': `${SITE_URL}/#organization` },
              areaServed: 'IN',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Social Media Marketing',
              description: 'Instagram, Facebook & YouTube content strategy, management and growth.',
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Meta Ads',
              description: 'Facebook & Instagram paid advertising campaigns for maximum reach and ROI.',
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google Ads',
              description: 'Search, display and YouTube paid advertising to drive qualified leads.',
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Video Production & Reels',
              description: 'Professional video production, Instagram Reels, and short-form video content.',
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Podcast Studio',
              description: 'Professional podcast studio currently being set up in Mehsana — recording, production and distribution launching soon.',
              provider: { '@id': `${SITE_URL}/#organization` },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-Commerce Marketing',
              description: 'Shopify store marketing & management, Google Ads, Google AdSense, product listing, SEO and conversion optimisation.',
              provider: { '@id': `${SITE_URL}/#organization` },
              areaServed: 'IN',
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '100',
        bestRating: '5',
        worstRating: '1',
      },
      keywords:
        'media agency, social media agency, digital marketing, brand building, Meta Ads, Google Ads, video production, podcast studio, e-commerce marketing, Shopify marketing, Google AdSense, Mehsana, Mahesana, Gujarat, Silicon Sponta, Krevon, Nikhil Patel, Darshan Sathwara, 90K Instagram reach, 850+ reels',
    },

    // ── 2. Website (enables Sitelinks search box in Google) ─────────────────
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Krevon Media Agency',
      description: "Mahesana's #1 Brand Building & Social Media Marketing Agency",
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['en-IN', 'hi', 'gu'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },

    // ── 3. WebPage ──────────────────────────────────────────────────────────
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Krevon Media Agency — #1 Brand Building & Digital Marketing in Mahesana',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      description:
        "Krevon Media Agency — Mahesana's #1 media agency. Brand building, social media marketing, Meta Ads, video production & podcast studio.",
      inLanguage: 'en-IN',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
          { '@type': 'ListItem', position: 3, name: 'Portfolio', item: `${SITE_URL}/#portfolio` },
          { '@type': 'ListItem', position: 4, name: 'Contact',  item: `${SITE_URL}/#contact` },
        ],
      },
    },

    // ── 4. Person — Nikhil Patel ─────────────────────────────────────────────
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#nikhil-patel`,
      name: 'Nikhil Patel',
      givenName: 'Nikhil',
      familyName: 'Patel',
      jobTitle: 'Founder & CEO',
      description:
        'Nikhil Patel is the Founder of Krevon Media Agency, Mahesana — the leading brand building and digital marketing agency in Gujarat.',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: SITE_URL,
      sameAs: [SITE_URL],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mehsana',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },

    // ── 5. Person — Darshan Sathwara ─────────────────────────────────────────
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#darshan-sathwara`,
      name: 'Darshan Sathwara',
      givenName: 'Darshan',
      familyName: 'Sathwara',
      jobTitle: 'Founder & Creative Director',
      description:
        'Darshan Sathwara is the Founder & Creative Director of Krevon Media Agency, Mahesana — the leading brand building and social media agency in Gujarat.',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: SITE_URL,
      sameAs: [SITE_URL],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mehsana',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },

    // ── 6. FAQ — helps rank for question-based searches ──────────────────────
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Krevon Media Agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Krevon Media Agency is Mahesana's #1 premium brand building and digital marketing agency, offering social media marketing, Meta Ads, Google Ads, video production, and podcast studio services.",
          },
        },
        {
          '@type': 'Question',
          name: 'Who founded Krevon Media Agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Krevon Media Agency was founded by Nikhil Patel and Darshan Sathwara in Mahesana, Gujarat.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Krevon Media Agency located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Krevon Media Agency is located at Sf-215, Silicon Sponta, Radhanpur Rd, Bansari Twp, Mehsana, Gujarat 384005, India. Open Monday to Saturday, 10 AM to 7 PM.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does Krevon Media Agency offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Krevon Media Agency offers brand building, social media marketing, Meta Ads (Facebook & Instagram ads), Google Ads, video production, 850+ Instagram Reels created, e-commerce marketing, Shopify store management, Google AdSense setup, and podcast studio (coming soon).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Krevon Media Agency do e-commerce marketing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Krevon Media Agency offers full e-commerce marketing including Shopify store marketing and management, Google Ads, Google AdSense setup, product listing optimisation, and conversion strategy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Krevon Media have a podcast studio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Krevon Media Agency is currently building Mehsana's first professional podcast studio. The setup is in progress and launching very soon. Contact us to reserve your recording slot.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is Krevon Media Agency the best media agency in Mahesana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, Krevon Media Agency is Mahesana's leading media agency, trusted by 25+ brands across Gujarat with 3 years of experience in brand building and digital marketing.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is Amazing Mahesana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Amazing Mahesana is a brand initiative by Krevon Media Agency celebrating Mahesana's businesses and growth. Krevon Media Agency is based in Mahesana, Gujarat.",
          },
        },
      ],
    },
  ],
};

export default function SEOStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
