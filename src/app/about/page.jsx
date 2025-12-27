'use client';

import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

export default function About() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200 overflow-hidden">
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
          Hi, I'm <span className="text-white font-semibold">Rhythm Pahwa</span>, specialize in React, Next.js, and springboot. I love crafting beautiful, functional web applications
          and enjoy turning creative ideas into interactive experiences.
        </p>
        <p className="text-lg leading-relaxed text-gray-400">
          When I’m not coding, you’ll find me exploring new technologies, contributing to open-source projects,
          or enjoying a good cup of coffee.
        </p>
      </motion.div>
    </section>
  );
}
