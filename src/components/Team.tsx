import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  instagram: string;
  linkedin: string;
}

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const teamMembers: TeamMemberData[] = [
  {
    name: 'Nikhil Patel',
    role: 'Founder & Creative Director',
    bio: 'The visionary behind Krevon Media Agency. Expert in brand strategy, creative direction, and building digital presences that drive real business growth.',
    initials: 'NP',
    gradient: 'from-primary to-slate-600',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Priya Shah',
    role: 'Social Media Strategist',
    bio: 'Platform algorithm expert with a track record of scaling brand accounts from zero to 10K+ followers with engaging, conversion-focused content.',
    initials: 'PS',
    gradient: 'from-slate-500 to-primary',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Raj Mehta',
    role: 'Video Editor & Content Creator',
    bio: 'Master of hooks, cinematic cuts, and reels that stop the scroll. Turns raw footage into viral, brand-building content every single day.',
    initials: 'RM',
    gradient: 'from-slate-600 to-slate-400',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Aarav Patel',
    role: 'Brand Designer',
    bio: 'Brand identity specialist crafting logos, visual systems, and thumb-stopping creatives that make brands impossible to ignore.',
    initials: 'AP',
    gradient: 'from-primary to-secondary',
    instagram: '#',
    linkedin: '#',
  },
];

const TeamCard: React.FC<{ member: TeamMemberData; index: number }> = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-dark-lighter rounded-2xl border border-primary/15 hover:border-primary/45 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
  >
    {/* Top amber stage stripe that grows on hover */}
    <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="p-7 flex flex-col items-center text-center flex-1">

      {/* Avatar */}
      <div className="relative mb-5">
        <div
          className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-xl font-bold shadow-lg`}
        >
          {member.initials}
        </div>
        {/* Online dot */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-dark-lighter rounded-full" />
      </div>

      {/* Info */}
      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
        {member.role}
      </p>
      <p className="text-white/50 text-sm leading-relaxed flex-1">
        {member.bio}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-white/8 my-5" />

      {/* Social Links */}
      <div className="flex items-center gap-3">
        <a
          href={member.instagram}
          aria-label={`${member.name} Instagram`}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/50 hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/5 transition-all duration-200 text-xs font-medium"
        >
          <InstagramIcon />
          Instagram
        </a>
        <a
          href={member.linkedin}
          aria-label={`${member.name} LinkedIn`}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/50 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-200 text-xs font-medium"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </div>
  </motion.div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="section-padding bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
            >
              Our Team
            </motion.span>
            <h2 className="heading-lg text-white mb-4">Meet the Team</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The creative minds and strategic thinkers behind every brand we build, every campaign we run, and every result we deliver.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>

          {/* Join CTA */}
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

        </motion.div>
      </div>
    </section>
  );
};

export default Team;
