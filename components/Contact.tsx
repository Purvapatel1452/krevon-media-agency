'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const channels = [
  {
    label: 'WhatsApp',
    value: '+91 92271 44346',
    href: 'https://wa.me/+919227144346',
    icon: <WhatsAppIcon />,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20 hover:border-green-500/50',
    external: true,
  },
  {
    label: 'Instagram',
    value: '@krevon.media',
    href: 'https://www.instagram.com/krevon.media',
    icon: <InstagramIcon />,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20 hover:border-pink-500/50',
    external: true,
  },
  {
    label: 'Email',
    value: 'krevonmedia@gmail.com',
    href: 'mailto:krevonmedia@gmail.com',
    icon: <EnvelopeIcon className="w-5 h-5" />,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20 hover:border-primary/50',
    external: false,
  },
  {
    label: 'Location',
    value: 'Krevon Media Agency (Amazing Mahesana), Silicon Sponta, 46, Radhanpur Rd, Bansari Twp, Mehsana, Gujarat 384005',
    href: 'https://maps.google.com/?q=23.618698,72.350159',
    icon: <MapPinIcon className="w-5 h-5" />,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    external: true,
  },
];

const Field: React.FC<{
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}> = ({ label, required, error, children }) => (
  <div>
    <label className="block text-white/70 text-sm font-medium mb-2">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    {children}
    {error && (
      <p className="mt-1.5 flex items-center gap-1 text-red-400 text-xs">
        <ExclamationCircleIcon className="w-3.5 h-3.5" />
        {error}
      </p>
    )}
  </div>
);

const inputClass = (hasError?: string) =>
  `w-full px-4 py-3 rounded-xl bg-dark border ${
    hasError ? 'border-red-500/60' : 'border-white/10'
  } text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    contact_number: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; contact?: string; message?: string }>({});
  const form = useRef<HTMLFormElement>(null);

  const validate = () => {
    const e: typeof errors = {};
    if (!formData.from_name.trim()) e.name = 'Name is required';
    if (!formData.from_email.trim() && !formData.contact_number.trim())
      e.contact = 'Email or phone is required';
    if (!formData.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      await emailjs.send(
        'service_s7k3j9f',
        'template_9y7ddar',
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          contact_number: formData.contact_number,
          message: `From: ${formData.from_name}\nEmail: ${formData.from_email}\nPhone: ${formData.contact_number}\n\n${formData.message}`,
          to_email: 'krevonmedia@gmail.com',
        },
        'u_rFbVMIR0twf9Ydb'
      );
      setStatus('success');
      setFormData({ from_name: '', from_email: '', contact_number: '', message: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors])
      setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const isValid = formData.from_name.trim() && formData.message.trim() &&
    (formData.from_email.trim() || formData.contact_number.trim());

  const waText = `From: ${formData.from_name}%0AEmail: ${formData.from_email}%0APhone: ${formData.contact_number}%0A%0AMessage: ${formData.message}`;

  return (
    <section id="contact" className="section-padding bg-dark-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary text-sm font-medium mb-4"
            >
              Get In Touch
            </motion.span>
            <h2 className="heading-lg text-white mb-4">Let&apos;s Build Something Great</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Ready to grow your brand? Drop us a message or reach out directly — we respond fast.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-dark-lighter rounded-2xl border border-primary/15 p-7 md:p-9"
            >
              <h3 className="text-white font-bold text-lg mb-6">Send an Inquiry</h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Your Name" required error={errors.name}>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="Rahul Patel"
                      className={inputClass(errors.name)}
                    />
                  </Field>

                  <Field label="Phone Number" error={errors.contact}>
                    <input
                      type="tel"
                      name="contact_number"
                      value={formData.contact_number}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass(errors.contact)}
                    />
                  </Field>
                </div>

                <Field label="Email Address" error={errors.contact && !formData.contact_number ? errors.contact : undefined}>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass()}
                  />
                </Field>

                <Field label="Your Message" required error={errors.message}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your brand and what you need..."
                    className={`${inputClass(errors.message)} resize-none`}
                  />
                </Field>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex-1 inline-flex items-center justify-center gap-2 btn bg-primary text-white font-bold hover:bg-primary/85 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <a
                    href={isValid ? `https://wa.me/+919227144346?text=${waText}` : '#'}
                    target={isValid ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => { if (!isValid) e.preventDefault(); }}
                    className={`flex-1 inline-flex items-center justify-center gap-2 btn border transition-all duration-300 ${
                      isValid
                        ? 'bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-500/50'
                        : 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    <WhatsAppIcon />
                    WhatsApp Us
                  </a>
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/25 rounded-xl text-green-400 text-sm"
                  >
                    <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                    Message sent! We&apos;ll get back to you shortly.
                  </motion.div>
                )}
                {status === 'error' && !Object.keys(errors).length && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-sm"
                  >
                    <ExclamationCircleIcon className="w-5 h-5 flex-shrink-0" />
                    Failed to send. Please try WhatsApp or email directly.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-4"
            >
              {channels.map((ch, i) => (
                <motion.a
                  key={ch.label}
                  href={ch.href}
                  target={ch.external ? '_blank' : undefined}
                  rel={ch.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`flex items-center gap-4 p-4 bg-dark-lighter rounded-xl border ${ch.border} transition-all duration-300 group hover:-translate-y-0.5`}
                >
                  <div className={`w-10 h-10 rounded-xl ${ch.bg} flex items-center justify-center ${ch.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {ch.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/40 text-xs font-medium mb-0.5">{ch.label}</p>
                    <p className={`${ch.color} text-sm font-semibold truncate`}>{ch.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Google Maps embed */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="rounded-2xl overflow-hidden border border-primary/15 h-52"
              >
                <iframe
                  title="Krevon Media Agency Location"
                  src="https://maps.google.com/maps?q=23.618698,72.350159&output=embed&z=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              <div className="flex items-center gap-3 p-4 bg-dark-lighter rounded-xl border border-primary/15">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">Open 7 Days a Week</p>
                  <p className="text-white/40 text-xs mt-0.5">9:00 AM – 8:00 PM</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
