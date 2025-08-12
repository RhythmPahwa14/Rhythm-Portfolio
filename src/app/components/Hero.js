'use client';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <h1>Rhythm Pahwa</h1>
      {/* <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="tagline"
      >
        Full Stack Developer
      </motion.p> */}
    </div>
  );
}
