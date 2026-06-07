'use client';

import { motion } from 'framer-motion';
import { BoltIcon, ChartBarIcon, ChartPieIcon, SparklesIcon } from '@heroicons/react/24/outline';

const taglines = [
  { text: 'From Idea to Identity – We Build It All.',  icon: <BoltIcon      className="w-5 h-5" /> },
  { text: "Your Brand's Growth Is Our Only Goal.",     icon: <SparklesIcon  className="w-5 h-5" /> },
  { text: 'Content That Converts, Brands That Last.',  icon: <ChartBarIcon  className="w-5 h-5" /> },
  { text: 'Strategy First. Execution Always.',         icon: <ChartPieIcon  className="w-5 h-5" /> },
];

export default function Taglines() {
  return (
    <div className="py-14 md:py-20 relative overflow-hidden">
      <div className="metal-rule mb-10" />
      <div className="container">
        {/* Logo divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex-1 metal-rule" />
          <div className="mx-6">
            <div
              className="w-14 h-14 rounded-full p-0.5 mx-auto"
              style={{
                background: 'linear-gradient(145deg, rgba(200,212,222,0.5) 0%, rgba(168,180,190,0.15) 50%, rgba(100,120,130,0.45) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 16px rgba(0,0,0,0.5)',
              }}
            >
              <div className="w-full h-full rounded-full p-0.5" style={{ background: '#0C0D0F' }}>
                <img
                  src="/krevon_logo.jpg"
                  alt="Krevon Media Agency"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 metal-rule" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {taglines.map((t, i) => (
            <motion.div
              key={t.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="metal-card metal-card-hover rounded-xl flex items-center gap-4 p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                {t.icon}
              </div>
              <p className="text-white/80 font-semibold text-sm md:text-base leading-snug">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="metal-rule mt-10" />
    </div>
  );
}
