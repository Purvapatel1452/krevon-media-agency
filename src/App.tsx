import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import PodcastStudio from './components/PodcastStudio';
import Brands from './components/Brands';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  ChartBarIcon,
  ChartPieIcon,
  SparklesIcon,
  ChevronDownIcon,
  MegaphoneIcon,
  BuildingOffice2Icon,
  RocketLaunchIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

const heroStats = [
  { value: '20+', label: 'Brands Served',    icon: <BuildingOffice2Icon className="w-5 h-5" /> },
  { value: '50+', label: 'Campaigns Run',    icon: <RocketLaunchIcon className="w-5 h-5" />    },
  { value: '200+', label: 'Reels Created',   icon: <MegaphoneIcon className="w-5 h-5" />       },
  { value: '2+',  label: 'Years Experience', icon: <TrophyIcon className="w-5 h-5" />          },
];

const platforms = [
  { name: 'Brand Building',   dot: 'bg-slate-400' },
  { name: 'Meta Ads',         dot: 'bg-blue-400'  },
  { name: 'Google Ads',       dot: 'bg-red-400'   },
  { name: 'Video Production', dot: 'bg-primary'   },
  { name: 'Podcast Studio',   dot: 'bg-slate-300' },
];

const taglines = [
  { text: 'From Idea to Identity – We Build It All.',   icon: <BoltIcon className="w-5 h-5" />      },
  { text: "Your Brand's Growth Is Our Only Goal.",      icon: <SparklesIcon className="w-5 h-5" />  },
  { text: 'Content That Converts, Brands That Last.',   icon: <ChartBarIcon className="w-5 h-5" /> },
  { text: 'Strategy First. Execution Always.',          icon: <ChartPieIcon className="w-5 h-5" /> },
];

const App: React.FC = () => (
  <div className="min-h-screen bg-dark">
    <Navbar />

    {/* ── Hero ──────────────────────────────────────────────── */}
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center bg-dark relative overflow-hidden"
    >
      {/* Giant KREVON watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-black text-transparent leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(80px, 20vw, 300px)',
            WebkitTextStroke: '1px rgba(168,180,190,0.045)',
          }}
        >
          KREVON
        </span>
      </div>

      {/* Subtle top spotlight */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 metal-card rounded-full text-primary text-sm font-semibold mb-10"
            >
              <SparklesIcon className="w-4 h-4" />
              Krevon Media Agency — Premium Digital Growth Partner
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1
                className="font-black leading-none text-white"
                style={{ fontSize: 'clamp(48px, 7.5vw, 96px)' }}
              >
                We Build
              </h1>
              <h1
                className="font-black leading-none gradient-text mb-3"
                style={{ fontSize: 'clamp(48px, 7.5vw, 96px)' }}
              >
                Brands
              </h1>
              <h1
                className="font-black leading-none mb-10"
                style={{
                  fontSize: 'clamp(48px, 7.5vw, 96px)',
                  color: 'rgba(168,180,190,0.12)',
                  WebkitTextStroke: '1px rgba(168,180,190,0.15)',
                }}
              >
                That Grow.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/50 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
            >
              Creative strategies. Strong identities. Digital impact that drives real results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#contact" className="metal-btn btn px-8 py-3.5 text-base rounded-xl">
                Start Your Brand Journey
              </a>
              <a
                href="#portfolio"
                className="btn bg-transparent border border-white/18 text-white hover:bg-white/6 hover:border-white/32 px-8 py-3.5 text-base rounded-xl transition-all duration-300"
              >
                See Our Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {platforms.map(p => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/8 rounded-full text-white/40 text-xs font-medium"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                  {p.name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right stat column — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-2 space-y-3"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                className="metal-card metal-card-hover rounded-2xl p-5 flex items-center gap-5 group cursor-default"
              >
                <div
                  className="font-black gradient-text leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
                >
                  {stat.value}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{stat.label}</p>
                </div>
                <div className="text-primary/35 group-hover:text-primary/70 transition-colors duration-300">
                  {stat.icon}
                </div>
              </motion.div>
            ))}

            {/* Studio open badge */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="metal-card rounded-2xl p-5 flex items-center gap-3.5"
            >
              <div className="rec-dot" />
              <div>
                <p className="text-white font-semibold text-sm">Studio Open</p>
                <p className="text-white/35 text-xs mt-0.5">Mon – Sun · 9:00 AM – 8:00 PM</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDownIcon className="w-6 h-6 text-white/20" />
        </motion.div>
      </motion.div>
    </section>

    <main>
      <About />
      <Services />
      <PodcastStudio />
      <Brands />
      <Team />
      <Portfolio />
      <Packages />

      {/* ── Taglines strip ────────────────────────────── */}
      <div className="py-14 md:py-20 relative overflow-hidden">
        <div className="metal-rule mb-10" />
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {taglines.map((t, i) => (
              <motion.div
                key={t.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="metal-card metal-card-hover rounded-xl flex items-center gap-4 p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  {t.icon}
                </div>
                <p className="text-white/80 font-semibold text-sm md:text-base leading-snug">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="metal-rule mt-10" />
      </div>

      <Contact />
    </main>

    <Footer />
  </div>
);

export default App;
