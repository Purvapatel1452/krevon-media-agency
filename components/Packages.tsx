'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WordReveal, NumberWipe, EyebrowSlide } from './RevealText';
import { CheckCircleIcon, ArrowTrendingUpIcon, ChartBarIcon, GlobeAltIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface Plan {
  name: string;
  tagline: string;
  tier: string;
  icon: React.ReactNode;
  features: string[];
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    tier: 'Entry',
    tagline: 'The perfect entry point for businesses stepping into the digital world.',
    icon: <ArrowTrendingUpIcon className="w-5 h-5 text-primary" />,
    features: [
      'Brand identity consultation',
      '8 social media posts/month',
      'Basic graphic design (posts & stories)',
      '4 Reels per month (edit only)',
      'Monthly performance report',
      'Caption & hashtag strategy',
    ],
  },
  {
    name: 'Growth',
    tier: 'Most Popular',
    tagline: 'Built for brands serious about consistent growth and a stronger digital presence.',
    icon: <ChartBarIcon className="w-5 h-5 text-primary" />,
    featured: true,
    features: [
      'Complete brand identity package',
      '15 posts/month (multi-platform)',
      'Advanced graphic design & creatives',
      '8 Reels/month (shoot + edit)',
      'Monthly content calendar & strategy',
      'Meta Ads campaign management',
      'Active audience engagement',
      'Weekly performance & growth report',
    ],
  },
  {
    name: 'Premium',
    tier: 'Elite',
    tagline: 'For ambitious brands ready to dominate every channel and lead their market.',
    icon: <GlobeAltIcon className="w-5 h-5 text-primary" />,
    features: [
      'Full brand building & identity system',
      '20+ posts/month (multi-platform)',
      'Cinematic video production & reels',
      'Full Meta Ads + Google Ads management',
      'Influencer collaboration support',
      'Custom marketing strategy & roadmap',
      'Priority support & dedicated brand manager',
      'Bi-weekly strategy calls',
    ],
  },
];

const PricingCard: React.FC<{ plan: Plan; index: number }> = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 44, scale: 0.93 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 75, damping: 18, delay: index * 0.12 }}
    whileHover={{ y: -6 }}
    className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
      plan.featured
        ? 'metal-card-hover'
        : 'metal-card metal-card-hover'
    }`}
    style={plan.featured ? {
      background: 'linear-gradient(145deg, #222830 0%, #181C24 55%, #1E2230 100%)',
      border: '1px solid rgba(255,106,0,0.38)',
      boxShadow: `
        inset 0 1px 0 rgba(255,140,56,0.2),
        inset 0 -1px 0 rgba(0,0,0,0.45),
        0 8px 24px rgba(0,0,0,0.55),
        0 24px 64px rgba(0,0,0,0.4),
        0 0 60px rgba(255,106,0,0.06)
      `,
    } : undefined}
  >
    {plan.featured && (
      <>
        {/* Pulsing ambient glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(ellipse at 50% -10%, rgba(255,106,0,0.14) 0%, transparent 65%)',
          }}
        />
        {/* Animated left accent bar */}
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl"
          style={{ background: 'linear-gradient(180deg, rgba(255,106,0,0.35) 0%, rgba(255,140,56,0.9) 50%, rgba(255,106,0,0.35) 100%)' }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </>
    )}
    {!plan.featured && (
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-primary/70 via-primary to-primary/70 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-l-2xl" />
    )}

    {plan.featured && (
      <div className="absolute top-5 right-5">
        <span className="metal-btn text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
          Most Popular
        </span>
      </div>
    )}

    <div className="flex flex-col flex-1 p-6 md:p-8">
      <span className={`self-start px-3 py-1 rounded-full text-xs font-semibold mb-5 border ${
        plan.featured
          ? 'bg-primary/15 text-primary border-primary/35'
          : 'bg-white/5 text-white/40 border-white/10'
      }`}>
        {plan.tier}
      </span>

      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
          plan.featured ? 'bg-primary/20' : 'bg-primary/10'
        }`}>
          {plan.icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
      </div>

      <p className="text-white/50 text-sm leading-relaxed mb-6">{plan.tagline}</p>

      <div className={`h-px mb-6 ${plan.featured ? 'bg-primary/25' : 'bg-white/8'}`} />

      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <CheckCircleIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-primary' : 'text-primary/50'}`} />
            <span className="text-white/60">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl text-sm font-bold transition-all duration-300 group ${
          plan.featured
            ? 'metal-btn'
            : 'bg-white/5 text-white border border-white/12 hover:bg-white/10 hover:border-primary/40'
        }`}
      >
        Get Started
        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </a>
    </div>
  </motion.div>
);

const Packages: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const ghostY = useTransform(scrollYProgress, [0, 1], ['0px', '-70px']);
  const ghostX = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
  <section ref={sectionRef} id="packages" className="section-padding bg-dark relative overflow-hidden">

    {/* Ghost "PLANS" — parallax */}
    <motion.div
      style={{ y: ghostY, x: ghostX, fontSize: 'clamp(60px, 13vw, 180px)', WebkitTextStroke: '1px rgba(255,106,0,0.035)' }}
      className="absolute left-[-2%] top-0 font-black text-transparent select-none pointer-events-none leading-none"
    >
      PLANS
    </motion.div>

    <div className="container relative z-10">

      <div className="flex items-end gap-6 mb-14">
        <NumberWipe
          value="05"
          delay={0}
          className="font-black text-transparent select-none leading-none flex-shrink-0"
          style={{ fontSize: 'clamp(60px, 10vw, 130px)', WebkitTextStroke: '1px rgba(255,106,0,0.13)' }}
        />
        <div className="pb-2">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-1">
            <EyebrowSlide text="Pricing" delay={0.2} />
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-none">
            <span style={{ display: 'block' }}><WordReveal text="Choose Your" delay={0.32} stagger={0.1} /></span>
            <span style={{ display: 'block' }}><WordReveal text="Growth Plan" delay={0.52} stagger={0.1} /></span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, i) => (
          <PricingCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 text-center"
      >
        <p className="text-white/30 text-sm">
          All packages include an onboarding call.{' '}
          <a href="#contact" className="text-primary hover:text-primary/75 underline underline-offset-2 transition-colors">
            Need a custom plan? Let&apos;s talk.
          </a>
        </p>
      </motion.div>

    </div>
  </section>
  );
};

export default Packages;
