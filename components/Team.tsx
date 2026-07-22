'use client';

import React from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { WordReveal } from './RevealText';

interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  photo?: string;
  photoFocus?: string;
}

const teamMembers: TeamMemberData[] = [
  {
    name: 'Nikhil Patel',
    role: 'Founder',
    bio: 'The driving force behind Krevon\'s strategy and client growth. Turns brand vision into results — one campaign at a time.',
    initials: 'NP',
    gradient: 'from-primary to-slate-600',

    photo: '/nikhil-patel.jpg',
    photoFocus: '60% 20%',
  },
  {
    name: 'Darshan Sathwara',
    role: 'Founder',
    bio: 'Co-builder of Krevon. Leads content strategy, copywriting, and platform planning — the mind behind every brand narrative.',
    initials: 'DS',
    gradient: 'from-primary to-secondary',

    photo: '/darshan-sathwara.jpg',
    photoFocus: 'center 12%',
  },
  {
    name: 'Dev Patel',
    role: 'Creative Director',
    bio: 'Leads campaign direction and visual identity. Every brand story told through his creative lens becomes a visual that stops the scroll.',
    initials: 'DV',
    gradient: 'from-slate-400 to-slate-700',

  },
  {
    name: 'Boni Patel',
    role: 'Cinematographer & Editor',
    bio: 'Cinematic shoots, post-production mastery, and colour grading that makes every frame look like it belongs on the big screen.',
    initials: 'BP',
    gradient: 'from-slate-500 to-primary',

  },
  {
    name: 'Nakshatra',
    role: 'Video Editor',
    bio: '4+ years of advanced editing. Crafts brand films and reels that communicate with clarity, emotion, and lasting impact.',
    initials: 'NK',
    gradient: 'from-slate-600 to-slate-400',

  },
  {
    name: 'Daxis Patel',
    role: 'Voice Artist & Script Writer',
    bio: 'Professional voice-over production and script writing that gives brands a clear, compelling voice audiences remember.',
    initials: 'DX',
    gradient: 'from-slate-700 to-primary',

  },
  {
    name: 'Dev Soni',
    role: 'Videographer',
    bio: 'Visual storytelling through short-form content that captures attention in seconds and builds brand identity frame by frame.',
    initials: 'DE',
    gradient: 'from-primary to-slate-600',

  },
  {
    name: 'Maan Prajapati',
    role: 'Team Coordinator & Videographer',
    bio: 'Keeps every production on time and on brief. Coordinates shoots, manages timelines, and contributes hands-on videography.',
    initials: 'MP',
    gradient: 'from-slate-500 to-primary',

  },
  {
    name: 'Darshan Panchal',
    role: 'Technical Support',
    bio: 'Manages platform infrastructure, digital tools, and the technical backbone that keeps the entire agency running at peak efficiency.',
    initials: 'DP',
    gradient: 'from-slate-600 to-slate-400',

  },
  {
    name: 'Purv Patel',
    role: 'IT Manager',
    bio: 'Oversees systems, software, and technical operations — ensuring every tool and platform the team relies on works flawlessly.',
    initials: 'PV',
    gradient: 'from-primary to-secondary',

  },
  {
    name: 'Vivek Vyas',
    role: 'Videographer',
    bio: 'Brand videos, reels, and event shoots that capture the energy of every moment. Every brand he shoots tells a story worth watching.',
    initials: 'VV',
    gradient: 'from-slate-700 to-primary',

  },
];

const TeamCard: React.FC<{ member: TeamMemberData; index: number }> = ({ member, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 160, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 160, damping: 22 });
  const glowX   = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glowY   = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 18, delay: (index % 4) * 0.1 }}
      style={{ perspective: 900 }}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-dark-lighter rounded-2xl border border-primary/15 hover:border-primary/50 transition-colors duration-300 overflow-hidden flex flex-col h-full cursor-default"
      >
        {/* Dynamic reflection highlight */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,140,56,0.07) 0%, transparent 65%)`,
          }}
        />

        <div className="h-0.5 w-full bg-gradient-to-r from-primary to-secondary opacity-55 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="p-7 flex flex-col items-center text-center flex-1 relative z-20">
          <div className="relative mb-5">
            <motion.div
              className="w-20 h-20 rounded-full shadow-lg overflow-hidden flex-shrink-0"
              style={{
                background: member.photo
                  ? 'linear-gradient(145deg, rgba(255,140,56,0.5) 0%, rgba(255,106,0,0.2) 50%, rgba(204,85,0,0.45) 100%)'
                  : undefined,
                padding: member.photo ? '2px' : undefined,
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {member.photo ? (
                <div className="w-full h-full rounded-full overflow-hidden" style={{ background: '#131518' }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                    style={{ objectPosition: member.photoFocus ?? 'center 15%' }}
                  />
                </div>
              ) : (
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-xl font-bold`}>
                  {member.initials}
                </div>
              )}
            </motion.div>
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-dark-lighter rounded-full" />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: '1px solid rgba(255,106,0,0.3)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: index * 0.3 }}
            />
          </div>

          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            {member.role}
          </p>
          <p className="text-white/50 text-sm leading-relaxed flex-1">
            {member.bio}
          </p>

        </div>
      </motion.div>
    </motion.div>
  );
};

const Team: React.FC = () => (
  <section id="team" className="section-padding bg-dark">
    <div className="container">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
        >
          Our Team
        </motion.span>
        <h2 className="heading-lg text-white mb-4">
          <WordReveal text="Meet the Team" delay={0.2} stagger={0.1} />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          11 creative minds and strategic thinkers behind every brand we build, every campaign we run, and every result we deliver.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-white/35 text-sm">
          Passionate about digital media?{' '}
          <a href="#contact" className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">
            Join our team.
          </a>
        </p>
      </motion.div>
    </div>
  </section>
);

export default Team;
