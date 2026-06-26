'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PremiumTypingText from './PremiumTypingText';
import ScrollRevealText from './ScrollRevealText';
import '../styles/About.css';

const aboutParagraphs = [
  [
    { text: "Hey, I'm Rhythm.", color: "text-white" },
  ],
  [
    { text: "I build full-stack apps with", color: "text-[#a8a8a8]" },
    { text: "React, Next.js, and Express.js,", color: "text-white" },
    { text: "and I'm learning", color: "text-[#a8a8a8]" },
    { text: "AI and machine learning", color: "text-white" },
    { text: "to make my work smarter and more useful.", color: "text-[#a8a8a8]" },
  ],
  [
    { text: "I'm an SDE intern at", color: "text-[#a8a8a8]" },
    { text: "EXL Services,", color: "text-white" },
    { text: "working on", color: "text-[#a8a8a8]" },
    { text: "conversational AI agents", color: "text-white" },
    { text: "using", color: "text-[#a8a8a8]" },
    { text: "Dialogflow and GCP.", color: "text-white" },
    { text: "Still learning a lot, but that's kind of the point of being here.", color: "text-[#a8a8a8]" },
  ],
  [
    { text: "Cloud and modern dev", color: "text-white" },
    { text: "are still fairly new to me, but I'm picking things up one project at a time and slowly connecting the dots.", color: "text-[#a8a8a8]" },
  ],
  [
    { text: "Outside tech, I survive on", color: "text-[#a8a8a8]" },
    { text: "tea, curiosity", color: "text-white" },
    { text: "and a long list of things I want to learn next.", color: "text-[#a8a8a8]" },
  ]
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      <motion.div 
        className="relative z-30 px-5 sm:px-8 lg:px-12 pt-4 sm:pt-0 pb-10 flex flex-col items-center text-center mt-0 sm:-mt-4 lg:-mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ScrollRevealText
          text="ABOUT ME"
          className="text-[clamp(34px,8vw,140px)] font-black uppercase tracking-tighter leading-none text-black mb-2 whitespace-nowrap"
          style={{ fontFamily: "var(--font-display, 'Sofia Sans Condensed')" }}
        />
        <p className="text-black/60 font-medium uppercase tracking-[0.1em] text-sm sm:text-base">
          Get to know who I am and what drives me
        </p>
      </motion.div>

      <div className="about-page relative z-30 border-t border-[#333]">
        <PremiumTypingText paragraphs={aboutParagraphs} />
      </div>
    </>
  );
};

export default AboutSection;