'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import ScrollRevealText from './ScrollRevealText';

gsap.registerPlugin(ScrollTrigger);

/* ── Live India Clock ── */
const IndiaTime = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata' };
      setTime(
        now.toLocaleTimeString('en-IN', { ...options, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      );
      setDate(
        now.toLocaleDateString('en-IN', { ...options, day: '2-digit', month: 'long', year: 'numeric' })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return { time, date };
};

const ConnectSection = () => {
  const { time, date } = IndiaTime();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.1 },
    }),
  };

  return (
    <>
      {/* ══════════════════════════════════════════════
          CONNECT SECTION — Form + CTA
         ══════════════════════════════════════════════ */}
      <section id="connect" className="connect-section">
        <div className="connect-inner">

          {/* ── Heading Block ── */}
          <motion.p
            className="connect-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            LET&apos;S START THE CONVERSATION
          </motion.p>

          <ScrollRevealText
            text="GREAT WORK"
            className="connect-heading"
            style={{ fontFamily: "var(--font-display, 'Sofia Sans Condensed')" }}
          />
          <motion.p
            className="connect-heading-sub"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            S &nbsp;T &nbsp;A &nbsp;R &nbsp;T &nbsp;S &nbsp;&nbsp; W &nbsp;I &nbsp;T &nbsp;H
          </motion.p>
          <ScrollRevealText
            text="GREAT COLLABORATION"
            className="connect-heading"
            style={{ fontFamily: "var(--font-display, 'Sofia Sans Condensed')" }}
          />

          {/* ── Contact Form ── */}
          <motion.form
            className="connect-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div className="form-field" variants={fadeUp} custom={0}>
              <input type="text" placeholder="YOUR NAME*" required className="form-input" />
            </motion.div>

            <motion.div className="form-field" variants={fadeUp} custom={1}>
              <input type="email" placeholder="EMAIL*" required className="form-input" />
            </motion.div>

            <motion.div className="form-field" variants={fadeUp} custom={2}>
              <textarea placeholder="YOUR MESSAGE*" required className="form-input form-textarea" rows={3} />
            </motion.div>

            <motion.button
              type="button"
              onClick={() => {
                window.location.href = 'mailto:rhythmpahwa14@gmail.com';
              }}
              className="form-submit group"
              variants={fadeUp}
              custom={3}
            >
              SEND MESSAGE
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER — Name, Links, Location, Time, Copyright
         ══════════════════════════════════════════════ */}
      <footer className="site-footer">
        <div className="footer-inner">

          {/* ── Big Name ── */}
          <ScrollRevealText
            text="RHYTHM PAHWA"
            end="top 75%"
            className="footer-name"
            style={{ fontFamily: "var(--font-display, 'Sofia Sans Condensed')" }}
          />

          {/* ── Links + Info Row ── */}
          <div className="footer-row">

            {/* Social Links */}
            <div className="footer-links">
              <a
                href="https://github.com/RhythmPahwa14"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link group"
              >
                GITHUB
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pahwa-rhythm/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link group"
              >
                LINKEDIN
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:rhythmpahwa14@gmail.com"
                className="footer-link group"
              >
                MAIL
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Location + Time */}
            <div className="footer-info">
              <div className="footer-location">
                <span className="footer-dot" />
                INDIA
              </div>
              <div className="footer-time">{time}</div>
              <div className="footer-date">{date}</div>
            </div>
          </div>

          {/* ── Copyright ── */}
          <div className="footer-copyright">
            © 2026 RHYTHM PAHWA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </>
  );
};

export default ConnectSection;
