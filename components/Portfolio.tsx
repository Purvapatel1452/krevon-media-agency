'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { WordReveal, NumberWipe, EyebrowSlide } from './RevealText';

const cases = [
  {
    n:        '01',
    client:   'Fashion Brand Launch',
    category: 'Fashion & Lifestyle',
    keyMetric:{ value: '5×', label: 'Follower Growth' },
    challenge:'Complete identity from scratch — logo, visual system, and social presence.',
    result:   '5× follower growth in 3 months. Brand identity recognised at a regional design showcase.',
    chips:    [{ v:'30+', l:'Assets Created' }, { v:'3 mo', l:'Timeline' }],
  },
  {
    n:        '02',
    client:   'Local Restaurant Chain',
    category: 'Food & Beverage',
    keyMetric:{ value: '8K+', label: 'New Followers' },
    challenge:'Build online presence and increase footfall from local audiences using organic content.',
    result:   'Gained 8K+ followers and boosted weekly footfall by 35% in just 60 days.',
    chips:    [{ v:'+35%', l:'Footfall' }, { v:'60 d', l:'Timeline' }],
  },
  {
    n:        '03',
    client:   'Real Estate Developer',
    category: 'Real Estate',
    keyMetric:{ value: '4×', label: 'Ad ROAS' },
    challenge:'Generate qualified property inquiries through Meta Ads and Google Ads campaigns.',
    result:   '4× return on ad spend with 150+ genuine leads captured in the first month.',
    chips:    [{ v:'150+', l:'Qualified Leads' }, { v:'1 mo', l:'Timeline' }],
  },
  {
    n:        '04',
    client:   'Education Institute',
    category: 'Education',
    keyMetric:{ value: '+25%', label: 'Admissions' },
    challenge:'Increase new-batch admissions through targeted social media and Google Ads promotions.',
    result:   'Exceeded admission target by 25% with a focused 45-day content + ads strategy.',
    chips:    [{ v:'80+', l:'Content Pieces' }, { v:'45 d', l:'Timeline' }],
  },
];

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const ghostY = useTransform(scrollYProgress, [0, 1], ['0px', '-70px']);
  const ghostX = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
  <section ref={sectionRef} id="portfolio" className="section-padding bg-dark-light relative overflow-hidden">

    {/* Ghost "WORK" — parallax */}
    <motion.div
      style={{ y: ghostY, x: ghostX, fontSize: 'clamp(60px, 13vw, 180px)', WebkitTextStroke: '1px rgba(168,180,190,0.035)' }}
      className="absolute right-[-2%] top-0 font-black text-transparent select-none pointer-events-none leading-none"
    >
      WORK
    </motion.div>

    <div className="container relative z-10">

      <div className="flex items-end gap-6 mb-14">
        <NumberWipe
          value="04"
          delay={0}
          className="font-black text-transparent select-none leading-none flex-shrink-0"
          style={{ fontSize: 'clamp(60px, 10vw, 130px)', WebkitTextStroke: '1px rgba(168,180,190,0.13)' }}
        />
        <div className="pb-2">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-1">
            <EyebrowSlide text="Our Work" delay={0.2} />
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-none">
            <span style={{ display: 'block' }}><WordReveal text="Portfolio &" delay={0.32} stagger={0.1} /></span>
            <span style={{ display: 'block' }}><WordReveal text="Results" delay={0.52} stagger={0.1} /></span>
          </h2>
        </div>
      </div>

      {/* Achievement bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="metal-card rounded-2xl p-6 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { v: '20+', l: 'Brands Built' },
          { v: '50+', l: 'Campaigns Run' },
          { v: '200+', l: 'Content Pieces' },
          { v: '2+', l: 'Years of Excellence' },
        ].map(a => (
          <div key={a.l} className="text-center">
            <div className="gradient-text font-black text-3xl md:text-4xl leading-none mb-1">
              <AnimatedCounter value={a.v} />
            </div>
            <div className="text-white/45 text-xs font-medium">{a.l}</div>
          </div>
        ))}
      </motion.div>

      {/* Case study strips */}
      <div className="space-y-0">
        {cases.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, x: i % 2 === 0 ? -36 : 36, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 75, damping: 18, delay: i * 0.08 }}
          >
            <div className="group py-8 px-5 rounded-xl hover:metal-card transition-all duration-300 cursor-default">
              <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">

                <div className="col-span-2 md:col-span-1">
                  <span
                    className="gradient-text font-black leading-none"
                    style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
                  >
                    {c.n}
                  </span>
                </div>

                <div className="col-span-10 md:col-span-3">
                  <h3 className="text-white font-bold text-lg md:text-xl leading-tight group-hover:text-primary transition-colors duration-300">
                    {c.client}
                  </h3>
                  <span className="text-primary/60 text-xs font-medium bg-primary/8 px-2 py-0.5 rounded-full inline-block mt-1">
                    {c.category}
                  </span>
                </div>

                <div className="col-span-6 md:col-span-2 text-center md:text-left">
                  <div
                    className="gradient-text font-black leading-none"
                    style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
                  >
                    <AnimatedCounter value={c.keyMetric.value} />
                  </div>
                  <p className="text-white/35 text-xs mt-1">{c.keyMetric.label}</p>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">Challenge</p>
                  <p className="text-white/65 text-sm mb-3">{c.challenge}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">Result</p>
                  <p className="text-white/65 text-sm mb-4">{c.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.chips.map(ch => (
                      <div
                        key={ch.l}
                        className="metal-card rounded-lg px-3 py-2 text-center"
                      >
                        <div className="text-primary font-bold text-sm">{ch.v}</div>
                        <div className="text-white/40 text-xs">{ch.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            {i < cases.length - 1 && <div className="metal-rule" />}
          </motion.div>
        ))}
      </div>

    </div>
  </section>
  );
};

export default Portfolio;
