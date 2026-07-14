'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'Packages', href: '#packages' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-light/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand Name */}
          <motion.a
            href="#home"
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`w-14 h-14 rounded-full overflow-hidden flex items-center justify-center ${
                isScrolled ? 'bg-dark-lighter' : 'bg-dark-light'
              } border-2 border-primary/20 shadow-lg shadow-primary/10`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <img
                src="/krevon-logo.png"
                alt="Krevon Media Agency Logo"
                className="w-full h-full object-contain rounded-full p-2"
                style={{ filter: 'invert(1)' }}
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                className="text-2xl font-bold leading-none text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Krevon Media
              </motion.span>
              <motion.span
                className="text-sm text-primary/90"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Media Agency
              </motion.span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-primary transition-colors duration-300 text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
            >
              <a
                href="#contact"
                className="metal-btn btn px-5 py-2 text-sm rounded-lg"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-dark-lighter border border-primary/10 shadow-lg rounded-lg mt-2 py-4 absolute top-full left-4 right-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="btn bg-primary text-white font-bold hover:bg-primary/85 px-5 py-2 text-sm rounded-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
