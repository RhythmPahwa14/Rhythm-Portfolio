 'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './AnimatedLink.module.css';

const AnimatedLink = ({ text, href = '/', className = '', onClick, target }) => {
  const linkRef = useRef(null);

  const isLargeScreen = () => typeof window !== 'undefined' && window.innerWidth > 1100;

  const enter = () => {
    if (!isLargeScreen()) return;
    const el = linkRef.current;
    if (!el) return;
    const topSpans = el.querySelectorAll(`.${styles.original} span`);
    const bottomSpans = el.querySelectorAll(`.${styles.clone} span`);
    gsap.to(topSpans, {
      yPercent: -100,
      stagger: { each: 0.02, from: 'start' },
      duration: 0.4,
      ease: 'power3.out',
    });
    gsap.to(bottomSpans, {
      yPercent: -100,
      stagger: { each: 0.02, from: 'start' },
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const leave = () => {
    if (!isLargeScreen()) return;
    const el = linkRef.current;
    if (!el) return;
    const topSpans = el.querySelectorAll(`.${styles.original} span`);
    const bottomSpans = el.querySelectorAll(`.${styles.clone} span`);
    gsap.to(topSpans, {
      yPercent: 0,
      stagger: { each: 0.02, from: 'start' },
      duration: 0.4,
      ease: 'power3.out',
    });
    gsap.to(bottomSpans, {
      yPercent: 0,
      stagger: { each: 0.02, from: 'start' },
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const letters = (text || '').split('');

  const content = (
    <span className={styles.textWrapper}>
      <span className={styles.original}>
        {letters.map((character, index) => (
          <span key={`t-${index}`}>{character === ' ' ? '\u00A0' : character}</span>
        ))}
      </span>
      <span className={styles.clone} aria-hidden="true">
        {letters.map((character, index) => (
          <span key={`b-${index}`}>{character === ' ' ? '\u00A0' : character}</span>
        ))}
      </span>
    </span>
  );

  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      ref={linkRef}
      onClick={onClick}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {content}
    </a>
  );
};

export default AnimatedLink;
