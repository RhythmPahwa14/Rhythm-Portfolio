'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code, Coffee } from 'lucide-react';
import '../styles/Hero.css';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/SandeepVashishtha',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/sandeepvashishtha',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:sandeepvashishtha@example.com',
      label: 'Email'
    }
  ];

  return (
    <section className="hero" id="hero">
      {/* Animated Boxes Background */}
      <div className="boxes-background">
        <div className="boxes-container">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-box"
              initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        {/* Name with Gradient Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-name-container"
        >
          <h1 className="hero-name">
            <span className="gradient-text">Rhythm Pahwa</span>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="name-underline"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-tagline"
        >
          Full Stack Developer & Creative Problem Solver
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="hero-description"
        >
          Crafting digital experiences with passion, precision, and innovation.
          <br />
          Turning ideas into reality, one line of code at a time.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="hero-actions"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="cta-button primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-5 h-5" />
            View My Work
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="cta-button secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Coffee className="w-5 h-5" />
            Let's Connect
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="hero-social"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="scroll-indicator"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="scroll-arrow"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
          <span className="scroll-text">Scroll to explore</span>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <motion.div
          className="floating-element element-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-element element-2"
          animate={{
            y: [0, 15, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="floating-element element-3"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
}
