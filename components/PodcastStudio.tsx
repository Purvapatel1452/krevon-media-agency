'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MicrophoneIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
  ShareIcon,
  PlayIcon,
  ClockIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

const waveHeights = [3, 5, 4, 7, 3, 8, 6, 9, 5, 10, 4, 7, 6, 9, 5, 8, 4, 7, 3, 6, 5, 9, 4, 8, 6];

const episodes = [
  {
    number: '01',
    title: 'Brand Building in the Digital Age',
    guest: 'Rahul Joshi',
    role: 'Marketing Expert',
    duration: '42 min',
    gradient: 'from-primary to-slate-600',
    initials: 'RJ',
  },
  {
    number: '02',
    title: 'How to Build a Business from Scratch',
    guest: 'Priya Mehta',
    role: 'Entrepreneur',
    duration: '38 min',
    gradient: 'from-slate-500 to-primary',
    initials: 'PM',
  },
  {
    number: '03',
    title: 'Marketing Strategy for Small Cities',
    guest: 'Amit Shah',
    role: 'Business Consultant',
    duration: '55 min',
    gradient: 'from-slate-600 to-slate-400',
    initials: 'AS',
  },
  {
    number: '04',
    title: 'Social Media for Local Businesses',
    guest: 'Kavya Patel',
    role: 'Business Owner',
    duration: '31 min',
    gradient: 'from-primary to-secondary',
    initials: 'KP',
  },
];

const guests = [
  { name: 'Rahul Joshi',  role: 'Marketing Expert',     initials: 'RJ', gradient: 'from-primary to-slate-600'      },
  { name: 'Priya Mehta',  role: 'Entrepreneur',          initials: 'PM', gradient: 'from-slate-500 to-primary'      },
  { name: 'Amit Shah',    role: 'Business Consultant',   initials: 'AS', gradient: 'from-slate-600 to-slate-400'   },
  { name: 'Kavya Patel',  role: 'Business Owner',        initials: 'KP', gradient: 'from-primary to-secondary'       },
  { name: 'Ravi Desai',   role: 'Digital Creator',       initials: 'RD', gradient: 'from-slate-700 to-primary'      },
  { name: 'Neha Sharma',  role: 'Brand Strategist',      initials: 'NS', gradient: 'from-slate-400 to-slate-600'   },
];

const podcastServices = [
  {
    title: 'Studio Recording',
    desc: 'Acoustic treatment, professional condenser mics & real-time monitoring.',
    icon: <MicrophoneIcon className="w-5 h-5 text-primary" />,
  },
  {
    title: 'Audio Editing & Mastering',
    desc: 'Noise removal, music beds, chapter markers & broadcast-quality mastering.',
    icon: <MusicalNoteIcon className="w-5 h-5 text-primary" />,
  },
  {
    title: 'Video Production',
    desc: 'Multi-camera setup with full post-production for YouTube & Reels.',
    icon: <VideoCameraIcon className="w-5 h-5 text-primary" />,
  },
  {
    title: 'Branding & Distribution',
    desc: 'Custom thumbnails, show branding, and publish to Spotify, Apple Podcasts & YouTube.',
    icon: <ShareIcon className="w-5 h-5 text-primary" />,
  },
];

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
    <span className="w-1 h-5 bg-primary rounded-full inline-block flex-shrink-0" />
    {children}
  </h3>
);

const PodcastStudio: React.FC = () => (
  <section id="podcast" className="section-padding bg-dark-light">
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div
              className="w-20 h-20 rounded-full p-0.5"
              style={{
                background: 'linear-gradient(145deg, rgba(200,212,222,0.5) 0%, rgba(168,180,190,0.15) 50%, rgba(100,120,130,0.45) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 6px 24px rgba(0,0,0,0.55)',
                filter: 'drop-shadow(0 0 20px rgba(168,180,190,0.14))',
              }}
            >
              <div className="w-full h-full rounded-full p-0.5" style={{ background: '#131518' }}>
                <img
                  src="/krevon_logo.jpg"
                  alt="Krevon Media Agency"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
          >
            Podcast Studio
          </motion.span>
          <h2 className="heading-lg text-white mb-4">Krevon Podcast Studio</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            World-class podcast recording in Mahesana — record, produce, and launch your voice to the world.
          </p>
        </div>

        {/* Hero banner with animated waveform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-primary/30 p-8 md:p-10 mb-14 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#A8B4BE14_0%,transparent_55%)]" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-4">
                Now Open for Bookings
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Your Story Deserves a Platform
              </h3>
              <p className="text-white/65 max-w-xl mb-6 leading-relaxed">
                Business owner, thought leader, or content creator — your ideas deserve to be heard.
                Book a session at Krevon&apos;s professional studio and reach thousands.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 btn bg-primary text-white font-bold hover:bg-primary/85 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  <CalendarDaysIcon className="w-5 h-5" />
                  Book a Session
                </a>
                <a
                  href="https://wa.me/+919227144346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Animated waveform */}
            <div className="items-center gap-1 flex-shrink-0 hidden sm:flex">
              {waveHeights.map((h, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 rounded-full bg-primary/50"
                  style={{ height: `${h * 5}px` }}
                  animate={{ scaleY: [1, 1.6, 0.7, 1.4, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.07, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Episode cards */}
        <div className="mb-14">
          <SectionLabel>Latest Episodes</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {episodes.map((ep, index) => (
              <motion.div
                key={ep.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-dark-lighter rounded-2xl border border-primary/15 hover:border-primary/45 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Cover */}
                <div className={`relative h-32 bg-gradient-to-br ${ep.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
                  <div className="text-center relative">
                    <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">Episode</p>
                    <p className="text-white text-4xl font-bold">{ep.number}</p>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-primary transition-colors leading-snug">
                    {ep.title}
                  </h4>
                  <p className="text-white/40 text-xs mb-3">with {ep.guest}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-1 text-white/40 text-xs">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {ep.duration}
                    </span>
                    <button className="flex items-center gap-1 px-2.5 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-xs font-semibold hover:bg-primary/20 transition-all">
                      <PlayIcon className="w-3 h-3" />
                      Play
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guest highlights */}
        <div className="mb-14">
          <SectionLabel>Notable Guests</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {guests.map((guest, index) => (
              <motion.div
                key={guest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="text-center p-4 bg-dark-lighter rounded-xl border border-primary/15 hover:border-primary/40 transition-all group"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${guest.gradient} flex items-center justify-center text-white text-sm font-bold mx-auto mb-2`}>
                  {guest.initials}
                </div>
                <p className="text-white text-xs font-semibold">{guest.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{guest.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services included */}
        <div className="mb-14">
          <SectionLabel>What&apos;s Included</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {podcastServices.map((s, index) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-dark-lighter rounded-xl p-5 border border-primary/15 hover:border-primary/45 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {s.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-1.5 group-hover:text-primary transition-colors">{s.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center bg-dark-lighter rounded-2xl border border-primary/25 p-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          <div className="relative">
            <MicrophoneIcon className="w-12 h-12 text-primary/40 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Podcast?</h3>
            <p className="text-white/55 mb-7 max-w-lg mx-auto">
              Our studio is available 7 days a week. Bring your idea — we&apos;ll handle the rest.
            </p>
            <a
              href="#contact"
              className="btn bg-primary text-white font-bold hover:bg-primary/85 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 px-8"
            >
              Book a Session
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  </section>
);

export default PodcastStudio;
