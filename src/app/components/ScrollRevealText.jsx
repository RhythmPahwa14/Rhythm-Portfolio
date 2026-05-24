'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollRevealText — on scroll, each character drops in from above
 * and "sits" into place with a smooth easing.
 * Same animation style as HeroReveal but triggered by ScrollTrigger.
 */
const ScrollRevealText = ({ text = '', className = '', style = {} }) => {
  const containerRef = useRef(null);
  const charsRef = useRef([]);
  const chars = text.split('');

  useEffect(() => {
    const validRefs = charsRef.current.filter(Boolean);
    if (!containerRef.current || validRefs.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(validRefs, { yPercent: -120, opacity: 0 });

      gsap.to(validRefs, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.025,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, [text]);

  // Reset refs array on each render
  charsRef.current = [];

  return (
    <div ref={containerRef} className={className} style={style}>
      <span style={{ display: 'block', overflow: 'hidden', lineHeight: 'inherit', paddingBottom: '0.05em' }}>
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => { if (el) charsRef.current[i] = el; }}
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

export default ScrollRevealText;
