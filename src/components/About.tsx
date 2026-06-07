import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, LightBulbIcon, TrophyIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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

const About: React.FC = () => (
  <section id="about" className="section-padding bg-dark-light relative overflow-hidden">

    {/* Ghost "ABOUT" behind */}
    <div
      className="absolute right-[-4%] top-0 font-black text-transparent select-none pointer-events-none leading-none"
      style={{ fontSize: 'clamp(80px, 16vw, 220px)', WebkitTextStroke: '1px rgba(168,180,190,0.04)' }}
    >
      ABOUT
    </div>

    <div className="container relative z-10">

      {/* ── Editorial section title — left aligned ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end gap-6 mb-14"
      >
        <span
          className="font-black text-transparent select-none leading-none flex-shrink-0"
          style={{ fontSize: 'clamp(60px, 10vw, 130px)', WebkitTextStroke: '1px rgba(168,180,190,0.13)' }}
        >
          01
        </span>
        <div className="pb-2">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-1">About Us</p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-none">
            The Story<br />Behind Krevon
          </h2>
        </div>
      </motion.div>

      {/* ── Founder full-width strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="metal-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 mb-8"
      >
        <div
          className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0"
          style={{ boxShadow: 'inset 0 1px 0 rgba(200,212,222,0.2), 0 4px 16px rgba(0,0,0,0.5)' }}
        >
          <img src="/krevon_logo.jpg" alt="Nikhil Patel" className="w-full h-full object-cover" />
        </div>

        <div className="flex-shrink-0">
          <h3 className="text-xl font-bold text-white">Nikhil Patel</h3>
          <p className="text-primary text-sm font-medium">Founder &amp; Creative Director</p>
          <p className="text-white/30 text-xs mt-0.5">Krevon Media Agency</p>
        </div>

        <div className="hidden md:block w-px self-stretch bg-white/8 flex-shrink-0" />

        <blockquote className="flex-1 text-white/55 italic text-sm md:text-base leading-relaxed border-l-2 border-primary/40 pl-5">
          "I founded Krevon Media Agency to bring world-class brand building to every ambitious business. From identity to campaigns — we handle it all so your brand can grow."
        </blockquote>
      </motion.div>

      {/* ── 3 highlights horizontal ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="metal-card metal-card-hover rounded-xl p-6"
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
            To become Gujarat's most trusted brand building and digital marketing agency — helping every ambitious business build a strong identity and a powerful online presence.
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

export default About;
