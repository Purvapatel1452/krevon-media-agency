'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface P {
  id: number; left: number; top: number;
  size: number; dur: number; delay: number;
  opacity: number; color: string; dx: number; dy: number;
}

const COLORS = ['#FF6A00', '#FF8C38', '#CC5500', '#FFB070', '#FF7020'];

export default function FloatingParticles({ count = 28 }: { count?: number }) {
  const [ps, setPs] = useState<P[]>([]);

  useEffect(() => {
    setPs(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.4 + 0.6,
        dur: Math.random() * 14 + 10,
        delay: Math.random() * 9,
        opacity: Math.random() * 0.22 + 0.04,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        dx: (Math.random() - 0.5) * 44,
        dy: -(Math.random() * 60 + 15),
      }))
    );
  }, [count]);

  if (!ps.length) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {ps.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full block"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}55`,
          }}
          animate={{
            x: [0, p.dx * 0.4, p.dx, p.dx * 0.65, 0],
            y: [0, p.dy * 0.3, p.dy, p.dy * 0.75, 0],
            opacity: [
              p.opacity,
              Math.min(p.opacity * 3.5, 0.65),
              p.opacity * 1.5,
              Math.min(p.opacity * 2.8, 0.5),
              p.opacity,
            ],
            scale: [1, 1.5, 1.1, 1.7, 1],
          }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
