'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BrandData {
  name: string;
  category: string;
  initials: string;
  gradient: string;
}

const colorMap: Record<string, [string, string]> = {
  'from-primary to-slate-600':   ['#A8B4BE', '#475569'],
  'from-slate-500 to-primary':   ['#64748B', '#A8B4BE'],
  'from-slate-600 to-slate-400': ['#475569', '#94A3B8'],
  'from-primary to-secondary':   ['#A8B4BE', '#C8D2DA'],
  'from-slate-700 to-primary':   ['#334155', '#A8B4BE'],
  'from-slate-400 to-slate-600': ['#94A3B8', '#475569'],
};

const brandsRow1: BrandData[] = [
  { name: 'Krevon Fashion',  category: 'Fashion',     initials: 'KF', gradient: 'from-primary to-slate-600'    },
  { name: 'Mahesana Eats',   category: 'F&B',         initials: 'ME', gradient: 'from-slate-500 to-primary'    },
  { name: 'Gujarat Homes',   category: 'Real Estate', initials: 'GH', gradient: 'from-slate-600 to-slate-400' },
  { name: 'Digital Store',   category: 'E-Commerce',  initials: 'DS', gradient: 'from-primary to-secondary'     },
  { name: 'StyleHub',        category: 'Fashion',     initials: 'SH', gradient: 'from-slate-700 to-primary'    },
  { name: 'FoodCraft',       category: 'Restaurant',  initials: 'FC', gradient: 'from-slate-400 to-slate-600' },
  { name: 'LuxeProperty',    category: 'Real Estate', initials: 'LP', gradient: 'from-primary to-slate-600'    },
  { name: 'BrandWave',       category: 'Agency',      initials: 'BW', gradient: 'from-slate-500 to-primary'    },
  { name: 'NexGen Tech',     category: 'Technology',  initials: 'NT', gradient: 'from-slate-600 to-slate-400' },
  { name: 'PureWellness',    category: 'Health',      initials: 'PW', gradient: 'from-primary to-secondary'     },
  { name: 'EventMasters',    category: 'Events',      initials: 'EM', gradient: 'from-slate-700 to-primary'    },
  { name: 'MediaPro',        category: 'Media',       initials: 'MP', gradient: 'from-slate-400 to-slate-600' },
];

const brandsRow2: BrandData[] = [
  { name: 'GrowthBrands',  category: 'Marketing',   initials: 'GB', gradient: 'from-primary to-slate-600'    },
  { name: 'SmartRealty',   category: 'Real Estate', initials: 'SR', gradient: 'from-slate-500 to-primary'    },
  { name: 'CreativeCo',    category: 'Creative',    initials: 'CC', gradient: 'from-slate-600 to-slate-400' },
  { name: 'FitLife',       category: 'Fitness',     initials: 'FL', gradient: 'from-primary to-secondary'     },
  { name: 'ArtisanBakes',  category: 'Bakery',      initials: 'AB', gradient: 'from-slate-700 to-primary'    },
  { name: 'VisionMedia',   category: 'Media',       initials: 'VM', gradient: 'from-slate-400 to-slate-600' },
  { name: 'EduLearn',      category: 'Education',   initials: 'EL', gradient: 'from-primary to-slate-600'    },
  { name: 'ZenSpa',        category: 'Wellness',    initials: 'ZS', gradient: 'from-slate-500 to-primary'    },
  { name: 'UrbanEats',     category: 'Restaurant',  initials: 'UE', gradient: 'from-slate-600 to-slate-400' },
  { name: 'PowerGym',      category: 'Fitness',     initials: 'PG', gradient: 'from-primary to-secondary'     },
  { name: 'LegalEdge',     category: 'Legal',       initials: 'LE', gradient: 'from-slate-700 to-primary'    },
  { name: 'CraftBrew',     category: 'Beverages',   initials: 'CB', gradient: 'from-slate-400 to-slate-600' },
];

const brandsRow3: BrandData[] = [
  { name: 'SkyHotel',      category: 'Hospitality',   initials: 'SK', gradient: 'from-primary to-slate-600'    },
  { name: 'TechVision',    category: 'Technology',    initials: 'TV', gradient: 'from-slate-500 to-primary'    },
  { name: 'NatureOrg',     category: 'NGO',           initials: 'NO', gradient: 'from-slate-600 to-slate-400' },
  { name: 'PrimeAuto',     category: 'Automotive',    initials: 'PA', gradient: 'from-primary to-secondary'     },
  { name: 'LuxeJewels',    category: 'Jewellery',     initials: 'LJ', gradient: 'from-slate-700 to-primary'    },
  { name: 'GreenBuild',    category: 'Construction',  initials: 'GR', gradient: 'from-slate-400 to-slate-600' },
  { name: 'StarCafe',      category: 'Cafe',          initials: 'SC', gradient: 'from-primary to-slate-600'    },
  { name: 'MediCare',      category: 'Healthcare',    initials: 'MC', gradient: 'from-slate-500 to-primary'    },
  { name: 'EliteDecor',    category: 'Interior',      initials: 'ED', gradient: 'from-slate-600 to-slate-400' },
  { name: 'SportZone',     category: 'Sports',        initials: 'SZ', gradient: 'from-primary to-secondary'     },
  { name: 'InfoMedia',     category: 'Media',         initials: 'IM', gradient: 'from-slate-700 to-primary'    },
  { name: 'GlobalTrade',   category: 'Business',      initials: 'GT', gradient: 'from-slate-400 to-slate-600' },
];

const BrandLogo: React.FC<{ brand: BrandData; chipId: number }> = ({ brand, chipId }) => {
  const variant = chipId % 6;
  const [c1, c2] = colorMap[brand.gradient] ?? ['#8B5CF6', '#A78BFA'];
  const gradId = `klg-${chipId}`;
  const fs = brand.initials.length === 1 ? 20 : 14;
  const ty = brand.initials.length === 1 ? 27 : 26;

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>

      {(variant === 0 || variant === 1 || variant === 3) && (
        <rect width="40" height="40" rx="10" fill={`url(#${gradId})`} />
      )}
      {variant === 2 && (
        <rect width="40" height="40" rx="20" fill={`url(#${gradId})`} />
      )}
      {variant === 4 && (
        <path d="M20 2 L38 12 L38 28 L20 38 L2 28 L2 12 Z" fill={`url(#${gradId})`} />
      )}
      {variant === 5 && (
        <rect width="40" height="40" rx="4" fill={`url(#${gradId})`} />
      )}

      {variant === 0 && <circle cx="33" cy="7" r="3.5" fill="rgba(255,255,255,0.22)" />}
      {variant === 1 && <rect x="5" y="33.5" width="30" height="2.5" rx="1.25" fill="rgba(255,255,255,0.25)" />}
      {variant === 2 && <circle cx="20" cy="20" r="15" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" />}
      {variant === 3 && (
        <>
          <circle cx="31.5" cy="9"  r="1.8" fill="rgba(255,255,255,0.3)" />
          <circle cx="31.5" cy="14" r="1.8" fill="rgba(255,255,255,0.3)" />
          <circle cx="36.5" cy="9"  r="1.8" fill="rgba(255,255,255,0.3)" />
          <circle cx="36.5" cy="14" r="1.8" fill="rgba(255,255,255,0.3)" />
        </>
      )}
      {variant === 4 && (
        <path d="M20 6 L34 13.5 L34 26.5 L20 34 L6 26.5 L6 13.5 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      )}
      {variant === 5 && (
        <>
          <path d="M5 14 L5 5 L14 5" stroke="rgba(255,255,255,0.28)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 35 L35 35 L35 26" stroke="rgba(255,255,255,0.28)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      <text
        x="20"
        y={ty}
        textAnchor="middle"
        fill="white"
        fontSize={fs}
        fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing={brand.initials.length > 1 ? '0.5' : '0'}
      >
        {brand.initials}
      </text>
    </svg>
  );
};

const BrandChip: React.FC<{ brand: BrandData; chipId: number }> = ({ brand, chipId }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-dark-lighter rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-200 group mx-2">
    <BrandLogo brand={brand} chipId={chipId} />
    <div>
      <p className="text-white text-sm font-semibold whitespace-nowrap">{brand.name}</p>
      <span className="text-primary/60 text-xs bg-primary/5 px-2 py-0.5 rounded-full inline-block mt-0.5">{brand.category}</span>
    </div>
  </div>
);

const MarqueeRow: React.FC<{
  brands: BrandData[];
  reverse?: boolean;
  speed?: number;
  startIndex?: number;
}> = ({ brands, reverse = false, speed = 40, startIndex = 0 }) => {
  const doubled = [...brands, ...brands];
  return (
    <div className="flex gap-0 overflow-hidden relative">
      <div
        className="flex"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee-forward'} ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((brand, i) => (
          <BrandChip
            key={`${brand.name}-${i}`}
            brand={brand}
            chipId={startIndex + i}
          />
        ))}
      </div>
    </div>
  );
};

const Brands: React.FC = () => {
  const row1Start = 0;
  const row2Start = brandsRow1.length * 2;
  const row3Start = row2Start + brandsRow2.length * 2;

  return (
    <>
      <style>{`
        @keyframes marquee-forward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section id="brands" className="section-padding bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
              >
                Brand Collaborations
              </motion.span>
              <h2 className="heading-lg text-white mb-4">Brands That Trust Krevon</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                From local businesses to growing brands — we&apos;ve helped businesses across industries build their digital presence.
              </p>
            </div>

            {/* Marquee rows */}
            <div className="space-y-4 mb-14 -mx-4 md:-mx-8 lg:-mx-16">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
                <MarqueeRow brands={brandsRow1} speed={50} startIndex={row1Start} />
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
                <MarqueeRow brands={brandsRow2} reverse speed={45} startIndex={row2Start} />
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
                <MarqueeRow brands={brandsRow3} speed={55} startIndex={row3Start} />
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Brands;
