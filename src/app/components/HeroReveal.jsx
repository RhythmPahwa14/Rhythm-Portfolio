'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * HeroReveal — each character drops in from above and "sits" into place.
 * Uses ScrollTrigger so it fires reliably when the element is in view,
 * and reverses when scrolling back up.
 */
const HeroReveal = ({ text = '', className = '', style = {}, delay = 0.4 }) => {
  const containerRef = useRef(null);
  const charsRef = useRef([]);

  const chars = text.split('');

  useEffect(() => {
    const validRefs = charsRef.current.filter(Boolean);
    if (!containerRef.current || validRefs.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(validRefs, {
        yPercent: -120,
        opacity: 0,
      });

      gsap.to(validRefs, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.03,
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          toggleActions: 'play reverse play reverse',
        },
      });
    });

    return () => ctx.revert();
  }, [text, delay]);

  // Reset refs array on each render
  charsRef.current = [];

  return (
    <div ref={containerRef} className={className} style={style}>
      <span
        style={{
          display: 'block',
          overflow: 'hidden',
          lineHeight: 'inherit',
          paddingBottom: '0.05em',
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) charsRef.current[i] = el;
            }}
            style={{
              display: 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              willChange: 'transform, opacity',
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  );
};

export default HeroReveal;
