'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code, Coffee } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create dots
    const numDots = 30;
    const dots = [];
    const colors = [
      { r: 96, g: 165, b: 250 },   // lighter blue
      { r: 248, g: 113, b: 113 },  // lighter red
      { r: 250, g: 204, b: 21 },   // lighter yellow
      { r: 74, g: 222, b: 128 },   // lighter green
    ];

    for (let i = 0; i < numDots; i++) {
      const color = colors[i % colors.length];
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        color: color,
        radius: Math.random() * 3 + 3
      });
    }

    dotsRef.current = dots;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      dots.forEach((dot, i) => {
        // Move dots
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // Draw lines to nearby dots (only check forward to avoid duplicates)
        for (let j = i + 1; j < dots.length; j++) {
          const otherDot = dots[j];
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.30;
            ctx.strokeStyle = `rgba(${dot.color.r}, ${dot.color.g}, ${dot.color.b}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.stroke();
          }
        }

        // Draw dot
        ctx.fillStyle = `rgba(${dot.color.r}, ${dot.color.g}, ${dot.color.b}, 0.4)`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typing effect
  useEffect(() => {
    const lines = [
      "Hi, I'm Rhythm.",
      "I'm a Full Stack Developer."
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    const timer = setInterval(() => {
      if (isPaused) return;
      
      const currentLine = lines[lineIndex];
      
      if (!isDeleting) {
        // Typing
        if (charIndex < currentLine.length) {
          setTypedText(currentLine.slice(0, charIndex + 1));
          charIndex++;
        } else {
          // Finished typing, pause then start deleting
          isPaused = true;
          setTimeout(() => {
            isPaused = false;
            isDeleting = true;
          }, 1500);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setTypedText(currentLine.slice(0, charIndex - 1));
          charIndex--;
        } else {
          // Finished deleting, move to next line
          isDeleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/RhythmPahwa14',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'linkedin.com/in/pahwa-rhythm/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:rhythmpahwa14@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section className="hero" id="hero">
      {/* Canvas for Animated Dots with Lines */}
      <canvas ref={canvasRef} className="dots-canvas" />

      {/* Main Content */}
      <div className="hero-content mt-20 md:mt-28">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-tagline"
          style={{ whiteSpace: 'pre-line' }}
        >
          {typedText}<span className="cursor-blink">|</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="hero-description"
        >
          Debugging: finding where I lost my rhythm.
          <br />
          <strong style={{ color: 'rgba(255, 255, 255, 1)' }}>Amazon ML Summer School'25 - Participant</strong>
          <br />
          <span style={{ fontSize: '0.9em' }}>
            ~ training AI/ML models that perform better than me.
            <br />
            ~ working with CI/CD pipelines to streamline deployment workflows.
            <br />
            ~ diving deep into system design for scalable, reliable applications.
          </span>
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
    </section>
  );
}
