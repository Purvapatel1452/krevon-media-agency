'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  SparklesIcon, ChevronDownIcon, MegaphoneIcon,
  BuildingOffice2Icon, RocketLaunchIcon, TrophyIcon,
} from '@heroicons/react/24/outline';
import FloatingParticles from './FloatingParticles';
import AnimatedCounter from './AnimatedCounter';
import { CharReveal, WordReveal } from './RevealText';

const heroStats = [
  { value: '100+', label: 'Brands Served',    icon: <BuildingOffice2Icon className="w-5 h-5" /> },
  { value: '31K+', label: 'Instagram Reach',  icon: <MegaphoneIcon       className="w-5 h-5" /> },
  { value: '500+', label: 'Reels Created',    icon: <RocketLaunchIcon    className="w-5 h-5" /> },
  { value: '2+',   label: 'Years Experience', icon: <TrophyIcon          className="w-5 h-5" /> },
];

const platforms = [
  { name: 'Brand Building',   dot: 'bg-slate-400' },
  { name: 'Meta Ads',         dot: 'bg-blue-400'  },
  { name: 'Google Ads',       dot: 'bg-red-400'   },
  { name: 'Video Production', dot: 'bg-primary'   },
  { name: 'Podcast Studio',   dot: 'bg-slate-300' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 18 },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const orb1Y      = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const orb2Y      = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col justify-center bg-dark relative overflow-hidden"
    >
      {/* Floating particles */}
      <FloatingParticles count={30} />

      {/* Giant KREVON watermark — parallax */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-black text-transparent leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(80px, 20vw, 300px)',
            WebkitTextStroke: '1px rgba(255,106,0,0.05)',
          }}
        >
          KREVON
        </span>
      </motion.div>

      {/* Spotlight glow 1 — parallax */}
      <motion.div
        style={{ y: orb1Y, background: 'rgba(255,106,0,0.05)' }}
        className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full blur-[130px] pointer-events-none animate-float-orb"
      />

      {/* Spotlight glow 2 — parallax */}
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-0 right-1/4 w-[450px] h-[350px] rounded-full blur-[110px] pointer-events-none"
      >
        <div className="w-full h-full" style={{ background: 'rgba(255,106,0,0.035)' }} />
      </motion.div>

      {/* Extra ambient orbs */}
      <div
        className="absolute top-1/3 right-1/3 w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-30"
        style={{ background: 'rgba(255,106,0,0.06)', animation: 'float-orb 12s ease-in-out infinite 3s' }}
      />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Left — 3 cols */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-3"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 metal-card rounded-full text-primary text-sm font-semibold mb-10"
            >
              <SparklesIcon className="w-4 h-4" />
              Krevon Media Agency — Premium Digital Growth Partner
            </motion.div>

            <div>
              <h1 className="font-black leading-none text-white" style={{ fontSize: 'clamp(48px, 7.5vw, 96px)' }}>
                <CharReveal text="We Build" delay={0.3} stagger={0.07} immediate />
              </h1>
              <h1 className="font-black leading-none gradient-text mb-3" style={{ fontSize: 'clamp(48px, 7.5vw, 96px)' }}>
                <CharReveal text="Brands" delay={0.65} stagger={0.09} immediate />
              </h1>
              <h1
                className="font-black leading-none mb-10"
                style={{
                  fontSize: 'clamp(48px, 7.5vw, 96px)',
                  color: 'rgba(255,106,0,0.12)',
                  WebkitTextStroke: '1px rgba(255,106,0,0.16)',
                }}
              >
                <WordReveal text="That Grow." delay={1.05} stagger={0.18} immediate />
              </h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-white/50 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
            >
              Creative strategies. Strong identities. Digital impact that drives real results.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#contact"
                className="metal-btn btn px-8 py-3.5 text-base rounded-xl"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                Start Your Brand Journey
              </motion.a>
              <motion.a
                href="#portfolio"
                className="btn bg-transparent border border-white/20 text-white hover:bg-white/6 hover:border-white/35 px-8 py-3.5 text-base rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                See Our Work
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {platforms.map((p, i) => (
                <motion.span
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.07, type: 'spring', stiffness: 200, damping: 20 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/40 text-xs font-medium"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                  {p.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — stat column, 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 80, damping: 20 }}
            className="lg:col-span-2 space-y-3"
          >
            {/* Logo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100, damping: 18 }}
              className="flex justify-center pb-2"
            >
              <div
                className="relative"
                style={{
                  filter: 'drop-shadow(0 0 36px rgba(255,106,0,0.2)) drop-shadow(0 8px 24px rgba(0,0,0,0.65))',
                }}
              >
                {/* Outer metallic ring */}
                <div
                  className="w-32 h-32 rounded-full p-0.5"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,140,56,0.6) 0%, rgba(255,106,0,0.2) 50%, rgba(204,85,0,0.5) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.6)',
                  }}
                >
                  {/* Inner dark ring */}
                  <div
                    className="w-full h-full rounded-full p-0.5"
                    style={{ background: '#0C0D0F' }}
                  >
                    <img
                      src="/krevon-logo.png"
                      alt="Krevon Media Agency"
                      className="w-full h-full rounded-full object-contain p-2"
                      style={{ filter: 'invert(1)' }}
                    />
                  </div>
                </div>
                {/* Live pulse rings */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: '1px solid rgba(255,106,0,0.3)' }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: '1px solid rgba(255,106,0,0.15)' }}
                  animate={{ scale: [1, 1.28, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: 0.7 }}
                />
              </div>
            </motion.div>

            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 32, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.4 + i * 0.09, type: 'spring', stiffness: 90, damping: 18 }}
                whileHover={{ x: -3, scale: 1.02 }}
                className="metal-card rounded-2xl p-5 flex items-center gap-5 group cursor-default transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,106,0,0.08)]"
              >
                <div
                  className="font-black gradient-text leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
                >
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{stat.label}</p>
                </div>
                <div className="text-primary/35 group-hover:text-primary/75 transition-colors duration-300">
                  {stat.icon}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.78, type: 'spring', stiffness: 90, damping: 18 }}
              className="metal-card rounded-2xl p-5 flex items-center gap-3.5"
            >
              <div className="rec-dot" />
              <div>
                <p className="text-white font-semibold text-sm">Studio Open</p>
                <p className="text-white/35 text-xs mt-0.5">Mon – Sun · 9:00 AM – 8:00 PM</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDownIcon className="w-6 h-6 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
