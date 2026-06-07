import React from 'react';
import { motion } from 'framer-motion';
import {
  BuildingOffice2Icon, ChartBarIcon, MegaphoneIcon, FilmIcon,
  UserGroupIcon, RocketLaunchIcon, VideoCameraIcon,
  ClipboardDocumentListIcon, CheckCircleIcon, SparklesIcon,
  MagnifyingGlassIcon, PaintBrushIcon,
} from '@heroicons/react/24/outline';

const services = [
  { n: '01', title: 'Brand Building',         desc: 'Complete brand identity: logo, visual system, color palette, typography, brand guidelines, and brand voice — everything to stand out.',                                     icon: <BuildingOffice2Icon className="w-5 h-5 text-primary" /> },
  { n: '02', title: 'Social Media Marketing', desc: 'Full management of Instagram, Facebook &amp; LinkedIn — content calendar, daily posting, community engagement, and growth strategy.',                                    icon: <ChartBarIcon className="w-5 h-5 text-primary" />        },
  { n: '03', title: 'Digital Marketing',      desc: 'Full-funnel digital strategies that drive qualified traffic, generate leads, and convert customers across every digital channel.',                                      icon: <MegaphoneIcon className="w-5 h-5 text-primary" />       },
  { n: '04', title: 'Graphic Design',         desc: 'Scroll-stopping posts, banners, thumbnails, marketing creatives, and brand collateral designed to capture attention and convert.',                                   icon: <PaintBrushIcon className="w-5 h-5 text-primary" />      },
  { n: '05', title: 'Video Editing',          desc: 'Reels, brand films, ad creatives, and short-form content — raw footage transformed into polished, high-impact video.',                                               icon: <FilmIcon className="w-5 h-5 text-primary" />            },
  { n: '06', title: 'Influencer Marketing',   desc: 'We connect your brand with the right creators — from nano to macro — handling outreach, briefing, and full campaign delivery.',                                      icon: <UserGroupIcon className="w-5 h-5 text-primary" />       },
  { n: '07', title: 'Meta Ads',               desc: 'Facebook &amp; Instagram paid advertising campaigns designed to maximise reach, engagement, and ROI for your brand.',                                                 icon: <RocketLaunchIcon className="w-5 h-5 text-primary" />    },
  { n: '08', title: 'Google Ads',             desc: 'Search, display &amp; YouTube ads targeting the right audience at the right moment to drive measurable business results.',                                           icon: <MagnifyingGlassIcon className="w-5 h-5 text-primary" /> },
  { n: '09', title: 'Video Productions',      desc: 'High-quality shoots, brand films, podcast videos, and corporate productions with full post-production support.',                                                    icon: <VideoCameraIcon className="w-5 h-5 text-primary" />     },
  { n: '10', title: 'Marketing Strategy',     desc: 'Custom growth roadmaps, competitor analysis, audience research, and go-to-market strategies tailored to your brand.',                                               icon: <ClipboardDocumentListIcon className="w-5 h-5 text-primary" /> },
];

const managementFeatures = [
  'Monthly brand health report',
  'Follower &amp; engagement analytics',
  'Ad performance &amp; ROAS tracking',
  'Content calendar &amp; approval workflow',
  'Lead tracking &amp; CRM support',
  'Quarterly strategy review',
];

const Services: React.FC = () => (
  <section id="services" className="section-padding bg-dark relative overflow-hidden">

    {/* Ghost "SERVICES" */}
    <div
      className="absolute left-[-2%] top-0 font-black text-transparent select-none pointer-events-none leading-none"
      style={{ fontSize: 'clamp(60px, 13vw, 180px)', WebkitTextStroke: '1px rgba(168,180,190,0.035)' }}
    >
      SERVICES
    </div>

    <div className="container relative z-10">

      {/* ── Section title ── */}
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
          02
        </span>
        <div className="pb-2">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-1">What We Offer</p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-none">
            Our Services
          </h2>
        </div>
      </motion.div>

      {/* ── Numbered service rows ── */}
      <div className="space-y-0">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <div
              className="group flex items-start gap-6 py-6 px-5 rounded-xl hover:metal-card transition-all duration-300 cursor-default"
              style={{ '--tw-translate-y': 0 } as React.CSSProperties}
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
                <p
                  className="text-white/45 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/18 group-hover:border-primary/35 transition-all duration-300">
                {s.icon}
              </div>
            </div>
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
              <SparklesIcon className="w-3.5 h-3.5" />
              Fully Managed
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Complete Brand Management</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We don't just run campaigns — we own your brand's growth. End-to-end management with dedicated strategy, real-time support, and transparent reporting at every step.
            </p>
          </div>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-5">What's Included</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {managementFeatures.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-white/55 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: f }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

export default Services;
