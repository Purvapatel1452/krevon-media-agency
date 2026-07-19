'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);
  // Start with the actual value so SSR / first-paint always shows the correct number
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runAnimation = () => {
      if (animated.current) return;
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
    };

    // Use native IntersectionObserver — more reliable than framer-motion's useInView on mobile
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,  // fires when 15% of element is visible — no negative margin needed
        rootMargin: '0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className={className}>{display}</span>;
}
