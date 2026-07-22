'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const socials = [
  { label: 'Instagram', icon: <InstagramIcon />, href: 'https://www.instagram.com/krevon.media', hoverClass: 'hover:bg-pink-500/20 hover:border-pink-500/40 hover:text-pink-400' },
  { label: 'WhatsApp',  icon: <WhatsAppIcon />,  href: 'https://wa.me/+919227144346',            hoverClass: 'hover:bg-green-500/20 hover:border-green-500/40 hover:text-green-400' },
  { label: 'YouTube',   icon: <YouTubeIcon />,   href: '#',                                        hoverClass: 'hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400'   },
  { label: 'Facebook',  icon: <FacebookIcon />,  href: '#',                                        hoverClass: 'hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400' },
];

const services = [
  { label: 'Brand Building',        href: '#services' },
  { label: 'Social Media Marketing', href: '#services' },
  { label: 'Meta & Google Ads',     href: '#services' },
  { label: 'Video Production',       href: '#services' },
  { label: 'Graphic Design',         href: '#services' },
  { label: 'Marketing Strategy',     href: '#services' },
];

const quickLinks = [
  { label: 'About Us',       href: '#about'     },
  { label: 'Our Team',       href: '#team'      },
  { label: 'Podcast Studio', href: '#podcast'   },
  { label: 'Portfolio',      href: '#portfolio' },
  { label: 'Packages',       href: '#packages'  },
  { label: 'Contact',        href: '#contact'   },
];

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark relative">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-primary/30 flex-shrink-0">
                  <img src="/krevon-logo.png" alt="Krevon Media Agency" className="w-full h-full object-contain p-1" style={{ filter: 'invert(1)' }} />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-none">Krevon Media Agency</p>
                  <p className="text-primary text-xs mt-0.5">by Nikhil Patel</p>
                </div>
              </div>

              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Mahesana&apos;s premium brand building &amp; digital marketing agency. We don&apos;t just create content — we build brands that grow.
              </p>

              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-200 ${s.hoverClass}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services column */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full inline-block" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/45 hover:text-primary text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links column */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full inline-block" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/45 hover:text-primary text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full inline-block" />
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:krevonmedia@gmail.com" className="flex items-start gap-3 group">
                    <EnvelopeIcon className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                    <span className="text-white/45 hover:text-primary text-sm transition-colors duration-200 break-all">
                      krevonmedia@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919227144346" className="flex items-center gap-3 group">
                    <PhoneIcon className="w-4 h-4 text-primary/60 flex-shrink-0 group-hover:text-primary transition-colors" />
                    <span className="text-white/45 hover:text-primary text-sm transition-colors duration-200">
                      +91 92271 44346
                    </span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/45 text-sm leading-relaxed">
                      Krevon Media Agency (Amazing Mahesana),<br />
                      Sf-215, Silicon Sponta, Radhanpur Rd,<br />
                      Bansari Twp, Mehsana, Gujarat 384005
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Tagline strip */}
          <div className="border-t border-white/5 pt-8 pb-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {[
                'From Idea to Identity – We Build It All.',
                "Your Brand's Growth Is Our Only Goal.",
                'Content That Converts, Brands That Last.',
                'Strategy First. Execution Always.',
              ].map((t) => (
                <span key={t} className="text-white/20 text-xs italic">&ldquo;{t}&rdquo;</span>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/35 text-sm">
              &copy; 2024 Krevon Media Agency. All rights reserved.
            </p>
            <p className="text-white/35 text-sm">
              Designed &amp; Built with <span className="text-primary">❤</span> in Mahesana
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary/15 hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
