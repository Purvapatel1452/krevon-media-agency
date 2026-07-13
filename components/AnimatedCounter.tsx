'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const animated = useRef(false);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;

    const m = value.match(/^(\d+)(.*)$/);
    if (!m) { setDisplay(value); return; }

    const target = parseInt(m[1], 10);
    const suffix = m[2] ?? '';
    const duration = 1800;
    let t0: number | null = null;

    const easeOutExpo = (p: number) => (p >= 1 ? 1 : 1 - Math.pow(2, -10 * p));

    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setDisplay(`${Math.round(easeOutExpo(p) * target)}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref} className={className}>{display}</span>;
}
