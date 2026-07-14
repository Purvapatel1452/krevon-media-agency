'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BrandData {
  name: string;
  category: string;
  logo: string;
}

const brandsRow1: BrandData[] = [
  { name: 'Dhabakaro',          category: 'Food & Beverage',  logo: '/logos/Dhabakaro.jpg'           },
  { name: "Williamjohn's Pizza", category: 'Restaurant',       logo: '/logos/WilliamjohnsPizza.jpeg'  },
  { name: 'Patti Vadapav',      category: 'Street Food',      logo: '/logos/PattiVadapav.jpeg'       },
  { name: 'The Shake Fusion',   category: 'Beverages',        logo: '/logos/TheShakeFusion.jpeg'     },
  { name: 'The Shake Maker',    category: 'Beverages',        logo: '/logos/TheShakeMaker.png'       },
  { name: 'Puffiza',            category: 'Bakery',           logo: '/logos/Puffiza.jpeg'            },
  { name: 'Mangleshwar Puff',   category: 'Snacks',           logo: '/logos/MangleshwarPuff.jpeg'    },
  { name: 'Meera Ice Cream',    category: 'Ice Cream',        logo: '/logos/MeeraIceCream.jpeg'      },
  { name: 'Mumbaiya',           category: 'Restaurant',       logo: '/logos/Mumbaiya.jpeg'           },
  { name: 'Namaste Restaurant', category: 'Restaurant',       logo: '/logos/NamasteRestaurant.jpeg'  },
  { name: 'Milku',              category: 'Dairy',            logo: '/logos/Milku.jpeg'              },
  { name: 'Saustra Ganthiya',   category: 'Snacks',           logo: '/logos/SaustraGanthiya.jpeg'    },
];

const brandsRow2: BrandData[] = [
  { name: 'Trendy Fashion',          category: 'Fashion',     logo: '/logos/TrendyFashion.png'          },
  { name: 'Mumbaiwala Patel Jewels', category: 'Jewellery',   logo: '/logos/MumbaiwalaPatelJewels.jpg'  },
  { name: 'Rangoli',                 category: 'Fashion',     logo: '/logos/Rangoli.jpeg'               },
  { name: 'Swagat Mall',             category: 'Retail Mall', logo: '/logos/SwagatMall.jpeg'            },
  { name: 'Phonewale',               category: 'Electronics', logo: '/logos/Phonewale.jpeg'             },
  { name: 'Vivo',                    category: 'Electronics', logo: '/logos/Vivo.jpeg'                  },
  { name: 'Ather EV',                category: 'Electric EV', logo: '/logos/AtherEV.jpeg'              },
  { name: 'Connplex',                category: 'Cinema',      logo: '/logos/Connplex.png'               },
  { name: 'Open Mic',                category: 'Events',      logo: '/logos/OpenMic.jpg'                },
  { name: 'Saptrang Event',          category: 'Events',      logo: '/logos/SaptrangEvent.png'          },
  { name: 'Embellish Saloon',        category: 'Beauty',      logo: '/logos/EmbellishSaloon.png'        },
  { name: 'Blue Buddha',             category: 'Wellness',    logo: '/logos/BlueBuddha.png'             },
];

const brandsRow3: BrandData[] = [
  { name: 'Ganpat College',          category: 'Education',   logo: '/logos/GanpatClg.png'              },
  { name: 'Informative Gujarat',     category: 'Media',       logo: '/logos/InformativeGujarat.jpeg'    },
  { name: 'DK Overseas',             category: 'Exports',     logo: '/logos/DKOverseas.png'             },
  { name: 'Samarth Group',           category: 'Business',    logo: '/logos/SamarthGroup.jpeg'          },
  { name: 'Ram Ratan Hotel',         category: 'Hospitality', logo: '/logos/RamRatanHotel.png'          },
  { name: 'Vishwa Umiya Foundation', category: 'Foundation',  logo: '/logos/VishwaUmiyaFoundation.jpg'  },
  { name: 'Ash Gym',                 category: 'Fitness',     logo: '/logos/AshGym.png'                 },
  { name: 'FlyBit',                  category: 'Technology',  logo: '/logos/FlyBit.jpeg'                },
  { name: 'Martinoz',                category: 'Fashion',     logo: '/logos/Martinoz.png'               },
  { name: 'Maru Mehsana',            category: 'City Page',   logo: '/logos/MaruMehsana.jpeg'           },
  { name: 'Achievers',               category: 'Coaching',    logo: '/logos/Achievers.jpeg'             },
  { name: 'Namostav',                category: 'Events',      logo: '/logos/Namostav.jpeg'              },
];

const BrandChip: React.FC<{ brand: BrandData }> = ({ brand }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-dark-lighter rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-200 group mx-2">
    <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
      <img
        src={brand.logo}
        alt={brand.name}
        className="w-full h-full object-contain p-0.5"
        loading="lazy"
      />
    </div>
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
}> = ({ brands, reverse = false, speed = 40 }) => {
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
          <BrandChip key={`${brand.name}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  );
};

const Brands: React.FC = () => (
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
              100+ local businesses and growing brands across Mehsana and Gujarat — all building their digital presence with us.
            </p>
          </div>

          <div className="space-y-4 mb-14 -mx-4 md:-mx-8 lg:-mx-16">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
              <MarqueeRow brands={brandsRow1} speed={50} />
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
              <MarqueeRow brands={brandsRow2} reverse speed={45} />
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
              <MarqueeRow brands={brandsRow3} speed={55} />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  </>
);

export default Brands;
