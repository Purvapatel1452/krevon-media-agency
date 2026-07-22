'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MicrophoneIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
  ShareIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const waveHeights = [3, 5, 4, 7, 3, 8, 6, 9, 5, 10, 4, 7, 6, 9, 5, 8, 4, 7, 3, 6, 5, 9, 4, 8, 6];

const setupSteps = [
  { label: 'Studio space selected',         done: true  },
  { label: 'Acoustic treatment planning',   done: true  },
  { label: 'Equipment procurement',         done: true  },
  { label: 'Acoustic panels installation',  done: false },
  { label: 'Microphone & audio setup',      done: false },
  { label: 'Multi-camera rig setup',        done: false },
  { label: 'Lighting & set design',         done: false },
  { label: 'Test recording & tuning',       done: false },
];

const comingSoon = [
  {
    title: 'Studio Recording',
    desc: 'Acoustic-treated room, professional condenser mics & real-time monitoring.',
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
    desc: 'Custom thumbnails, show branding, publish to Spotify, Apple Podcasts & YouTube.',
    icon: <ShareIcon className="w-5 h-5 text-primary" />,
  },
];

const doneSoFar  = setupSteps.filter(s => s.done).length;
const totalSteps = setupSteps.length;
const progressPct = Math.round((doneSoFar / totalSteps) * 100);

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
                background: 'linear-gradient(145deg, rgba(255,140,56,0.5) 0%, rgba(255,106,0,0.15) 50%, rgba(204,85,0,0.45) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 6px 24px rgba(0,0,0,0.55)',
                filter: 'drop-shadow(0 0 20px rgba(255,106,0,0.14))',
              }}
            >
              <div className="w-full h-full rounded-full p-0.5" style={{ background: '#131518' }}>
                <img
                  src="/krevon-logo.png"
                  alt="Krevon Media Agency"
                  className="w-full h-full rounded-full object-contain p-2"
                  style={{ filter: 'invert(1)' }}
                />
              </div>
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-4"
          >
            <WrenchScrewdriverIcon className="w-4 h-4" />
            Studio Setup In Progress
          </motion.span>

          <h2 className="heading-lg text-white mb-4">Krevon Podcast Studio</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We&apos;re actively building Mahesana&apos;s first professional podcast studio.
            A full setup is underway — launching very soon.
          </p>
        </div>

        {/* Hero banner with waveform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-amber-500/25 p-8 md:p-10 mb-14 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#FF6A0010_0%,transparent_55%)]" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/15 border border-amber-500/25 rounded-full text-amber-400 text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Currently Building
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Your Voice. Your Platform. Coming Soon.
              </h3>
              <p className="text-white/65 max-w-xl mb-6 leading-relaxed">
                Business owners, thought leaders, creators — we&apos;re setting up everything
                from scratch so your podcast launch is flawless. Be among the first to record here.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 btn bg-primary text-white font-bold hover:bg-primary/85 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <MicrophoneIcon className="w-5 h-5" />
                Get Notified When We Launch
              </a>
            </div>

            {/* Animated waveform */}
            <div className="items-center gap-1 flex-shrink-0 hidden sm:flex">
              {waveHeights.map((h, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 rounded-full bg-amber-400/40"
                  style={{ height: `${h * 5}px` }}
                  animate={{ scaleY: [1, 1.6, 0.7, 1.4, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.07, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Setup progress */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full inline-block flex-shrink-0" />
            Setup Progress
          </h3>
          <p className="text-white/40 text-sm mb-6 ml-3">{doneSoFar} of {totalSteps} steps complete</p>

          {/* Progress bar */}
          <div className="w-full h-2 bg-white/5 rounded-full mb-8 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-primary"
              initial={{ width: 0 }}
              whileInView={{ width: `${progressPct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {setupSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                  step.done
                    ? 'bg-primary/8 border-primary/20'
                    : 'bg-white/3 border-white/8'
                }`}
              >
                {step.done ? (
                  <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ClockIcon className="w-5 h-5 text-white/25 flex-shrink-0" />
                )}
                <span className={`text-sm font-medium ${step.done ? 'text-white' : 'text-white/40'}`}>
                  {step.label}
                </span>
                {!step.done && (
                  <span className="ml-auto text-xs text-amber-400/70 font-medium flex-shrink-0">Soon</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* What you'll get */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-1 h-5 bg-primary rounded-full inline-block flex-shrink-0" />
            What You&apos;ll Get
          </h3>
          <p className="text-white/40 text-sm mb-6 ml-3">Everything included when we launch</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {comingSoon.map((s, index) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-dark-lighter rounded-xl p-5 border border-primary/15 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-[10px] font-semibold">
                  Coming
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {s.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-1.5 group-hover:text-primary transition-colors">{s.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center bg-dark-lighter rounded-2xl border border-amber-500/20 p-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-primary/5 pointer-events-none" />
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <MicrophoneIcon className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Studio launching soon
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">Be the First to Record Here</h3>
            <p className="text-white/55 mb-7 max-w-lg mx-auto">
              Reach out now to reserve your spot for Mahesana&apos;s first professional podcast studio launch.
              We&apos;ll confirm your session as soon as setup is complete.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#contact"
                className="btn bg-primary text-white font-bold hover:bg-primary/85 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 px-8"
              >
                Reserve My Spot
              </a>
              <a
                href="https://wa.me/+919227144346"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-primary/40 transition-all duration-300 px-8"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  </section>
);

export default PodcastStudio;
