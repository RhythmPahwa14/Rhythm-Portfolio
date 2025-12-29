'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code, Coffee } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import FadeInText from './FadeInText';
import FadeRotatingText from './FadeRotatingText';
import '../styles/Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size properly to prevent distortion
    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    setCanvasSize();

    // Create dots
    const numDots = 27;
    const dots = [];
    const colors = [
      { r: 96, g: 165, b: 250 },   // lighter blue
      { r: 248, g: 113, b: 113 },  // lighter red
      { r: 250, g: 204, b: 21 },   // lighter yellow
      { r: 74, g: 222, b: 128 },   // lighter green
    ];

    // Use display dimensions for dot positions
    const displayWidth = canvas.width;
    const displayHeight = canvas.height;
    
    for (let i = 0; i < numDots; i++) {
      const color = colors[i % colors.length];
      const speed = 2;
      const angle = Math.random() * Math.PI * 2;
      dots.push({
        x: Math.random() * displayWidth,
        y: Math.random() * displayHeight,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: color,
        radius: Math.random() * 2 + 3
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

        // Draw dot - ensure perfect circle
        ctx.fillStyle = `rgba(${dot.color.r}, ${dot.color.g}, ${dot.color.b}, 0.4)`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
      // Reinitialize dots with new canvas size
      dots.length = 0;
      for (let i = 0; i < numDots; i++) {
        const color = colors[i % colors.length];
        const speed = 2;
        const angle = Math.random() * Math.PI * 2;
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: color,
          radius: Math.random() * 2 + 3
        });
      }
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
      url: 'https://linkedin.com/in/pahwa-rhythm/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:rhythmpahwa14@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section className="hero" id="home">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="hero-description"
        >
          <span style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
            " Debugging: finding where I lost my rhythm "
          </span>
          <br /><br />
          <FadeRotatingText 
            texts={[
              "Amazon ML Summer School 2025 - Participant",
              "GirlScript Summer of Code 2025 - Top 10 Project Admin"
            ]}
            displayDuration={3000}
            fadeDuration={600}
            loop={true}
          />
          <div style={{ fontFamily: 'monospace', marginTop: '1.1rem', lineHeight: '1.8', fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <FadeInText 
                text="~ developing full-stack applications that scale."
                delay={1200}
              />
            </div>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <FadeInText 
                text="~ exploring cloud-native engineering principles."
                delay={1400}
              />
            </div>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <FadeInText 
                text="~ training AI/ML models that perform better than me."
                delay={1600}
              />
            </div>
          </div>
        </motion.div>

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
