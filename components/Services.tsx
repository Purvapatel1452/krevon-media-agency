'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WordReveal, NumberWipe, EyebrowSlide } from './RevealText';
import {
  BuildingOffice2Icon, ChartBarIcon, MegaphoneIcon, FilmIcon,
  UserGroupIcon, BoltIcon, VideoCameraIcon,
  ClipboardDocumentListIcon, CheckCircleIcon, ShoppingBagIcon,
  MagnifyingGlassIcon, PaintBrushIcon,
} from '@heroicons/react/24/outline';

const services = [
  { n: '01', title: 'Brand Building',         desc: 'Complete brand identity: logo, visual system, color palette, typography, brand guidelines, and brand voice — everything to stand out.',                                     icon: <PaintBrushIcon className="w-5 h-5 text-primary" /> },
  { n: '02', title: 'Social Media Marketing', desc: 'Full management of Instagram, Facebook & LinkedIn — content calendar, daily posting, community engagement, and growth strategy.',                                    icon: <ChartBarIcon className="w-5 h-5 text-primary" />        },
  { n: '03', title: 'Digital Marketing',      desc: 'Full-funnel digital strategies that drive qualified traffic, generate leads, and convert customers across every digital channel.',                                      icon: <MegaphoneIcon className="w-5 h-5 text-primary" />       },
  { n: '04', title: 'Graphic Design',         desc: 'Scroll-stopping posts, banners, thumbnails, marketing creatives, and brand collateral designed to capture attention and convert.',                                   icon: <PaintBrushIcon className="w-5 h-5 text-primary" />      },
  { n: '05', title: 'Video Editing',          desc: 'Reels, brand films, ad creatives, and short-form content — raw footage transformed into polished, high-impact video.',                                               icon: <FilmIcon className="w-5 h-5 text-primary" />            },
  { n: '06', title: 'Influencer Marketing',   desc: 'We connect your brand with the right creators — from nano to macro — handling outreach, briefing, and full campaign delivery.',                                      icon: <UserGroupIcon className="w-5 h-5 text-primary" />       },
  { n: '07', title: 'Meta Ads',               desc: 'Facebook & Instagram paid advertising campaigns designed to maximise reach, engagement, and ROI for your brand.',                                                 icon: <BoltIcon className="w-5 h-5 text-primary" />    },
  { n: '08', title: 'Google Ads',             desc: 'Search, display & YouTube ads targeting the right audience at the right moment to drive measurable business results.',                                           icon: <MagnifyingGlassIcon className="w-5 h-5 text-primary" /> },
  { n: '09', title: 'Video Productions',      desc: 'High-quality shoots, brand films, podcast videos, and corporate productions with full post-production support.',                                                    icon: <VideoCameraIcon className="w-5 h-5 text-primary" />     },
  { n: '10', title: 'Marketing Strategy',     desc: 'Custom growth roadmaps, competitor analysis, audience research, and go-to-market strategies tailored to your brand.',                                               icon: <ClipboardDocumentListIcon className="w-5 h-5 text-primary" /> },
  { n: '11', title: 'E-Commerce Handling',   desc: 'End-to-end e-commerce management — product listings, store setup, catalogue design, order flow optimization, and performance marketing to drive online sales.',      icon: <ShoppingBagIcon className="w-5 h-5 text-primary" /> },
];

const managementFeatures = [
  'Monthly brand health report',
  'Follower & engagement analytics',
  'Ad performance & ROAS tracking',
  'Content calendar & approval workflow',
  'Lead tracking & CRM support',
  'Quarterly strategy review',
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const ghostY = useTransform(scrollYProgress, [0, 1], ['0px', '-90px']);
  const ghostX = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
  <section ref={sectionRef} id="services" className="section-padding bg-dark relative overflow-hidden">

    {/* Ghost "SERVICES" — parallax */}
    <motion.div
      style={{ y: ghostY, x: ghostX, fontSize: 'clamp(60px, 13vw, 180px)', WebkitTextStroke: '1px rgba(255,106,0,0.035)' }}
      className="absolute left-[-2%] top-0 font-black text-transparent select-none pointer-events-none leading-none"
    >
      SERVICES
    </motion.div>

    <div className="container relative z-10">

      {/* ── Section title ── */}
      <div className="flex items-end gap-6 mb-14">
        <NumberWipe
          value="02"
          delay={0}
          className="font-black text-transparent select-none leading-none flex-shrink-0"
          style={{ fontSize: 'clamp(60px, 10vw, 130px)', WebkitTextStroke: '1px rgba(255,106,0,0.13)' }}
        />
        <div className="pb-2">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-1">
            <EyebrowSlide text="What We Offer" delay={0.2} />
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-none">
            <WordReveal text="Our Services" delay={0.35} stagger={0.12} />
          </h2>
        </div>
      </div>

      {/* ── Numbered service rows ── */}
      <div className="space-y-0">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: i * 0.045 }}
          >
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex items-start gap-6 py-6 px-5 rounded-xl hover:metal-card transition-all duration-300 cursor-default"
            >
              {/* Number */}
              <span
                className="gradient-text font-black leading-none flex-shrink-0 mt-0.5"
                style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
              >
                {s.n}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/18 group-hover:border-primary/35 transition-all duration-300">
                {s.icon}
              </div>
            </motion.div>
            {i < services.length - 1 && <div className="metal-rule" />}
          </motion.div>
        ))}
      </div>

      {/* ── Complete Brand Management footer card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="metal-card metal-card-hover rounded-2xl p-6 md:p-8 mt-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold mb-4">
              <ShoppingBagIcon className="w-3.5 h-3.5" />
              Fully Managed
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Complete Brand Management</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We don&apos;t just run campaigns — we own your brand&apos;s growth. End-to-end management with dedicated strategy, real-time support, and transparent reporting at every step.
            </p>
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-5">What&apos;s Included</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {managementFeatures.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-white/55 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
  );
};

export default Services;
