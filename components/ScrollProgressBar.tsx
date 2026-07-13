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
          background: 'linear-gradient(90deg,#6A7880 0%,#A8B4BE 28%,#D0DCE4 50%,#A8B4BE 72%,#6A7880 100%)',
          boxShadow: '0 0 12px rgba(200,212,222,0.95), 0 0 28px rgba(168,180,190,0.55)',
        }}
      />
    </div>
  );
}
