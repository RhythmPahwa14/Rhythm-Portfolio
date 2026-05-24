'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RevealLines = ({ lines = [], className = '' }) => {
  const innerRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || innerRefs.current.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.5,
        },
      });

      innerRefs.current.forEach((el, index) => {
        if (el) {
          tl.fromTo(
            el,
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
            index * 0.1
          );
        }
      });
    });

    return () => ctx.revert();
  }, [lines]);

  return (
    <div ref={containerRef}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`reveal-line ${className}`}
          style={{
            display: 'block',
            overflow: 'hidden',
            whiteSpace: 'normal',
          }}
        >
          <span
            ref={(el) => {
              if (el) innerRefs.current[i] = el;
            }}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
};

export default RevealLines;
