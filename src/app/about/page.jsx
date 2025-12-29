'use client';

import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

export default function About() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-[var(--bg-primary)] text-[var(--text-primary)] dark:bg-[#111827] dark:text-gray-200 light:bg-white light:text-gray-900 overflow-hidden transition-colors duration-300" id="about">
      <AnimatedBackground />
      
      {/* Left: Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-700">
          <img
            src="/profile.jpg" // put your image in public folder
            alt="Your Name"
            className="object-cover w-[300px] h-[350px]"
          />
        </div>
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4 text-[#ffcc70]">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-400 mb-6">
          I'm <span className="text-white font-semibold">Rhythm</span>. I build full-stack applications with React, Next.js and Spring Boot and I'm learning AI and machine learning to make my work smarter and more useful. I like working on ideas that challenge me, including a gesture-based Virtual Notepad built with Computer Vision and Mediapipe.
        </p>
        <p className="text-lg leading-relaxed text-gray-400">
          I'm still discovering cloud and modern development practices while shaping my projects step by step. Outside tech, I survive on tea, curiosity and a long list of things I want to learn next.
        </p>
      </motion.div>
    </section>
  );
}
