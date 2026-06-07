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
