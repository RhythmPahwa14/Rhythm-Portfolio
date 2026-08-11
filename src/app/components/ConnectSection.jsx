'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mail, Code2, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import ScrollRevealText from './ScrollRevealText';

gsap.registerPlugin(ScrollTrigger);

/* ── Brand SVG icons (lucide's Github/Linkedin are deprecated) ── */
const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to send message.');
    }
  };

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
            onSubmit={handleSubmit}
          >
            <motion.div className="form-field" variants={fadeUp} custom={0}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="YOUR NAME*"
                required
                className="form-input"
              />
            </motion.div>

            <motion.div className="form-field" variants={fadeUp} custom={1}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL*"
                required
                className="form-input"
              />
            </motion.div>

            <motion.div className="form-field" variants={fadeUp} custom={2}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="YOUR MESSAGE*"
                required
                className="form-input form-textarea"
                rows={3}
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="form-submit group disabled:opacity-60 disabled:cursor-not-allowed"
              variants={fadeUp}
              custom={3}
            >
              {status === 'loading' ? (
                <>
                  SENDING...
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : status === 'success' ? (
                <>
                  MESSAGE SENT
                  <CheckCircle2 size={18} className="text-green-400" />
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-green-400 font-mono flex items-center gap-2"
              >
                <CheckCircle2 size={16} /> Thank you! Your message has been sent successfully.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-red-400 font-mono flex items-center gap-2"
              >
                <AlertCircle size={16} /> {errorMessage || 'Failed to send message.'}
              </motion.p>
            )}
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
                <GithubIcon size={15} />
                GITHUB
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pahwa-rhythm/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link group"
              >
                <LinkedinIcon size={15} />
                LINKEDIN
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://leetcode.com/u/RhythmPahwa14/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link group"
              >
                <Code2 size={15} />
                LEETCODE
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:rhythmpahwa14@gmail.com"
                className="footer-link group"
              >
                <Mail size={15} />
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
