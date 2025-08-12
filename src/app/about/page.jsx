'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-[#0f0f0f] text-gray-200">
      
      {/* Left: Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
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
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4 text-[#ffcc70]">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-400 mb-6">
          Hi, I'm <span className="text-white font-semibold">Rhythm Pahwa</span>, a passionate full-stack developer
          with a love for building modern web applications. I specialize in React, Next.js, and backend APIs, 
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
