'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPinIcon, LightBulbIcon, TrophyIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { WordReveal, NumberWipe, EyebrowSlide } from './RevealText';

const highlights = [
  {
    icon: <MapPinIcon className="w-5 h-5 text-primary" />,
    title: 'Based in Mahesana',
    text: 'Born local, built global. We understand local markets while delivering world-class brand results.',
  },
  {
    icon: <LightBulbIcon className="w-5 h-5 text-primary" />,
    title: 'Strategy-First',
    text: 'Every brand starts with deep research. No guesswork — only data-driven strategies that actually work.',
  },
  {
    icon: <TrophyIcon className="w-5 h-5 text-primary" />,
    title: 'Proven Results',
    text: '20+ brands, 50+ campaigns. A track record of turning businesses into recognized, growing brands.',
  },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const ghostY = useTransform(scrollYProgress, [0, 1], ['0px', '-80px']);
  const ghostX = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
  <section ref={sectionRef} id="about" className="section-padding bg-dark-light relative overflow-hidden">

    {/* Ghost "ABOUT" behind — parallax */}
    <motion.div
      style={{ y: ghostY, x: ghostX, fontSize: 'clamp(80px, 16vw, 220px)', WebkitTextStroke: '1px rgba(168,180,190,0.04)' }}
      className="absolute right-[-4%] top-0 font-black text-transparent select-none pointer-events-none leading-none"
    >
      ABOUT
    </motion.div>

    <div className="container relative z-10">

      {/* ── Editorial section title — left aligned ── */}
      <div className="flex items-end gap-6 mb-14">
        <NumberWipe
          value="01"
          delay={0}
          className="font-black text-transparent select-none leading-none flex-shrink-0"
          style={{ fontSize: 'clamp(60px, 10vw, 130px)', WebkitTextStroke: '1px rgba(168,180,190,0.13)' }}
        />
        <div className="pb-2">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-1">
            <EyebrowSlide text="About Us" delay={0.2} />
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-none">
            <span style={{ display: 'block' }}><WordReveal text="The Story" delay={0.32} stagger={0.1} /></span>
            <span style={{ display: 'block' }}><WordReveal text="Behind Krevon" delay={0.52} stagger={0.1} /></span>
          </h2>
        </div>
      </div>

      {/* ── Founders strip ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {[
          {
            name: 'Nikhil Patel',
            role: 'Co-Founder',
            quote: 'We built Krevon to give every ambitious local brand the same quality of strategy and content that big companies get. Growth is not a privilege — it\'s a process.',
            delay: 0,
          },
          {
            name: 'Darshan Sathwara',
            role: 'Co-Founder',
            quote: 'Content without strategy is just noise. Everything we create at Krevon is built around a plan — the right message, the right platform, the right time.',
            delay: 0.12,
          },
        ].map((founder) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: founder.delay }}
            className="metal-card rounded-2xl p-6 flex flex-col gap-5"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0"
                style={{ boxShadow: 'inset 0 1px 0 rgba(200,212,222,0.2), 0 4px 16px rgba(0,0,0,0.5)' }}
              >
                <img src="/krevon-logo.png" alt={founder.name} className="w-full h-full object-contain p-1.5" style={{ filter: 'invert(1)' }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{founder.name}</h3>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider">{founder.role}</p>
                <p className="text-white/30 text-xs mt-0.5">Krevon Media Agency</p>
              </div>
            </div>
            <blockquote className="text-white/55 italic text-sm leading-relaxed border-l-2 border-primary/40 pl-4">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
          </motion.div>
        ))}
      </div>

      {/* ── 3 highlights horizontal ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 45, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 85, damping: 18, delay: i * 0.14 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="metal-card metal-card-hover rounded-xl p-6 cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
              {h.icon}
            </div>
            <h4 className="text-white font-bold text-sm mb-2">{h.title}</h4>
            <p className="text-white/45 text-xs leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>

      {/* ── Vision + What We Do ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="metal-rule mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
          <p className="text-white/55 leading-relaxed text-sm mb-8">
            To become Gujarat&apos;s most trusted brand building and digital marketing agency — helping every ambitious business build a strong identity and a powerful online presence.
          </p>
          <div className="flex items-start gap-3 metal-card rounded-xl p-5">
            <MapPinIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm mb-0.5">Our Studio &amp; Office</p>
              <p className="text-white/40 text-xs leading-relaxed">
                Krevon Media Agency (Amazing Mahesana), Silicon Sponta, 46, Radhanpur Rd, Bansari Twp, Mehsana, Gujarat 384005
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="metal-rule mb-6" />
          <h3 className="text-xl font-bold text-white mb-3">What We Do</h3>
          <p className="text-white/55 leading-relaxed text-sm mb-8">
            From brand identity and social media management to Meta Ads, Google Ads, podcast production, and video creation — we handle your complete brand journey. Our studio, team, and tools exist for one purpose: making your brand impossible to ignore.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="metal-btn btn px-7 py-3 rounded-xl inline-flex items-center gap-2 text-sm"
          >
            Work With Us
            <ArrowRightIcon className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

    </div>
  </section>
  );
};

export default About;
