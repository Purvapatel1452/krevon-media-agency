'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* WordReveal — each word rises through a mask.
   immediate=true  → plays on mount (Hero / above-fold)
   immediate=false → plays when scrolled into view     */
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}

export function WordReveal({
  text, className = '', delay = 0, stagger = 0.08, immediate = false,
}: WordRevealProps) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block overflow-hidden ${className}`}
          style={{ lineHeight: 'inherit', verticalAlign: 'bottom' }}
        >
          {immediate ? (
            <motion.span
              className="inline-block"
              initial={{ y: '108%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, delay: delay + i * stagger, ease: EASE }}
            >
              {word}{i < words.length - 1 ? ' ' : ''}
            </motion.span>
          ) : (
            <motion.span
              className="inline-block"
              initial={{ y: '108%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.65, delay: delay + i * stagger, ease: EASE }}
            >
              {word}{i < words.length - 1 ? ' ' : ''}
            </motion.span>
          )}
        </span>
      ))}
    </>
  );
}

/* CharReveal — character-by-character rise.
   immediate=true  → plays on mount (Hero headline)
   immediate=false → plays when scrolled into view  */
interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}

export function CharReveal({
  text, className = '', delay = 0, stagger = 0.04, immediate = false,
}: CharRevealProps) {
  const chars = text.split('');
  return (
    <>
      {chars.map((char, i) => {
        if (char === ' ') {
          return <span key={i} className="inline-block" style={{ width: '0.28em' }} aria-hidden />;
        }
        return (
          <span
            key={i}
            className={`inline-block overflow-hidden ${className}`}
            style={{ lineHeight: 'inherit', verticalAlign: 'bottom' }}
          >
            {immediate ? (
              <motion.span
                className="inline-block"
                initial={{ y: '115%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.52, delay: delay + i * stagger, ease: EASE }}
              >
                {char}
              </motion.span>
            ) : (
              <motion.span
                className="inline-block"
                initial={{ y: '115%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.52, delay: delay + i * stagger, ease: EASE }}
              >
                {char}
              </motion.span>
            )}
          </span>
        );
      })}
    </>
  );
}

/* NumberWipe — section number (01 02 03…) wipes in left to right. */
interface NumberWipeProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function NumberWipe({ value, className = '', style, delay = 0 }: NumberWipeProps) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      style={style}
      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {value}
    </motion.span>
  );
}

/* EyebrowSlide — small label slides in from the left. */
interface EyebrowSlideProps {
  text: string;
  className?: string;
  delay?: number;
}

export function EyebrowSlide({ text, className = '', delay = 0.1 }: EyebrowSlideProps) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ x: -22, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay, ease: EASE }}
    >
      {text}
    </motion.span>
  );
}
