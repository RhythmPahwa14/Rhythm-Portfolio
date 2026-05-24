'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu } from 'lucide-react';
import AnimatedLink from './components/AnimatedLink';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ConnectSection from './components/ConnectSection';
import RevealLines from './components/RevealLines';
import HeroReveal from './components/HeroReveal';

const navigation = [
  { label: 'HOME', href: '#top' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONNECT', href: '#connect' },
];

const services = [
  'CONVERSATIONAL AI',
  'DIALOGFLOW DEVELOPMENT',
  'GCP SOLUTIONS',
  'AI AUTOMATION',
];

const expertise = [
  'Google Dialogflow',
  'Google Cloud Platform (GCP)',
  'Conversational AI',
  'Voice Agents',
  'Chatbots',
  'AI Automation',
  'NLP Systems',
  'Backend Development',
];

export default function Page() {
  const [isReady, setIsReady] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Build expertise blocks with index for animation delays
  const expertiseBlocks = expertise.map((item, index) => ({ item, index }));

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 650);

    const handlePointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
      setCursorVisible(true);
    };

    const handlePointerLeave = () => setCursorVisible(false);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <main className="bg-white text-black min-h-screen">

      {/* ── HEADER (keeps padding) ── */}
      <div className="px-5 pb-4 pt-4 sm:px-8 lg:px-12 relative z-50">
        <header className="grid grid-cols-1 items-start gap-4 pb-4 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
          <div className="flex items-start justify-between gap-4 lg:block">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block leading-[0.82] tracking-[-0.07em] transition-opacity duration-300 hover:opacity-70"
            >
              <span className="block text-[1.55rem] font-black uppercase sm:text-[1.85rem]">RHYTHM</span>
              <span className="block text-[1.55rem] font-black uppercase sm:text-[1.85rem]">PAHWA</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center border border-black/15 bg-white/30 text-black transition-transform duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-[#f2f2f0] lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>

          <nav className="hidden items-center justify-center gap-4 xl:flex">
            {navigation.map((item) => (
              <AnimatedLink
                key={item.label}
                href={item.href}
                text={`[ ${item.label} ]`}
                className="group relative px-1 py-2 text-[0.92rem] font-medium uppercase tracking-[0.25em] text-black/80 transition-colors duration-300 hover:text-black"
              />
            ))}
          </nav>

          <a
            href="#connect"
            id="connect"
            onClick={() => setMobileMenuOpen(false)}
            className="group ml-auto inline-flex items-center gap-3 border-b border-black px-0 pb-1 text-[0.92rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-black/70"
          >
            Connect
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/10 mt-2"
          >
            <nav className="flex flex-col gap-0 p-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-[0.95rem] font-semibold uppercase tracking-[0.15em] text-black hover:text-black/60 transition-colors duration-200 border-b border-black/5 last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>

      {/* ── HERO TEXT — full bleed, no horizontal padding ── */}
      <section id="top" className="relative pt-6 lg:pt-8">
        <div className="relative px-5 sm:px-8 lg:px-12 pb-16">
          {/* Mobile: Stack layout */}
          <div className="md:hidden mb-6">
            <HeroReveal
              text="SOFTWARE ENGINEER"
              className="text-center text-[2rem] sm:text-[3rem] font-bold uppercase text-black leading-tight mb-2"
              style={{ fontFamily: "var(--font-display, 'Sofia Sans Condensed')" }}
              delay={0.7}
            />
            <motion.p
              className="text-center text-[0.9rem] sm:text-[1rem] font-bold uppercase text-black"
              style={{ letterSpacing: '0.18em' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isReady ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
            >
              B A S E D &nbsp; I N &nbsp; I N D I A
            </motion.p>
          </div>

          {/* Mobile: Profile image */}
          <div
            className="md:hidden mb-6 overflow-hidden mx-auto"
            style={{ width: 'clamp(220px, 75vw, 340px)', height: 'clamp(250px, 85vw, 380px)' }}
          >
            <img
              src="/Rhythm's pfp.jpg"
              alt="Rhythm Pahwa"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>

          {/* Mobile: Skills text */}
          <div className="md:hidden text-center text-black font-bold text-[0.85rem] sm:text-[1rem] leading-[1.3] mb-8">
            <p>/&nbsp;CONVERSATIONAL&nbsp;SYSTEMS</p>
            <p>/&nbsp;GOOGLE&nbsp;CLOUD&nbsp;&amp;&nbsp;AI</p>
            <p>/&nbsp;FULL-STACK&nbsp;ENGINEERING</p>
          </div>

          {/* Desktop: Absolute positioning layout */}
          <div className="hidden md:block relative min-h-[820px] lg:min-h-[900px] overflow-visible pt-1">
            <div
              className="hero-text-wrapper absolute right-0 top-0 z-20 pr-6 lg:pr-10"
              style={{ top: '-6%' }}
            >
              <HeroReveal
                text="SOFTWARE ENGINEER"
                className="hero-heading hero-heading--refined mx-0 px-0"
                delay={0.7}
              />
              <motion.p
                className="mt-2 text-right text-[1rem] font-bold uppercase text-black"
                style={{ letterSpacing: '0.18em' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isReady ? 1 : 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
              >
                B A S E D &nbsp; I N &nbsp; I N D I A
              </motion.p>
            </div>

            <div
              className="absolute left-[58%] top-[42%] z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
              style={{ width: '400px', height: '450px' }}
            >
              <div className="relative h-full w-full">
                <img
                  src="/Rhythm's pfp.jpg"
                  alt="Rhythm Pahwa"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

            <div className="absolute left-[26%] top-[57%] z-20 text-black font-bold text-[1rem] leading-[1.05]">
              <p className="whitespace-nowrap">/ CONVERSATIONAL SYSTEMS</p>
              <p className="whitespace-nowrap">/ GOOGLE CLOUD &amp; AI</p>
              <p className="whitespace-nowrap">/ FULL-STACK ENGINEERING</p>
            </div>
          </div>
        </div>

        {/* ── BELOW-HERO SECTIONS (all padded normally) ── */}
        <div className="px-0 sm:px-0 lg:px-0">

          {/* About / expertise tags */}
          <section id="about" className="border-t-0 border-black/10 mt-0">
            <AboutSection />
          </section>

          {/* Skills & Technologies */}
          <SkillsSection />

          {/* Projects */}
          <ProjectsSection />

          {/* Connect + Footer */}
          <ConnectSection />
        </div>
      </section>
    </main>
  );
}