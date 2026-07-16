'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none" style={{ height: '2px' }}>
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          height: '100%',
          background: 'linear-gradient(90deg,#CC5500 0%,#FF6A00 28%,#FFB070 50%,#FF6A00 72%,#CC5500 100%)',
          boxShadow: '0 0 12px rgba(255,140,56,0.95), 0 0 28px rgba(255,106,0,0.55)',
        }}
      />
    </div>
  );
}
