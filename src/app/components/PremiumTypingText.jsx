'use client';

import { useEffect, useRef, useMemo } from 'react';
import Typed from 'typed.js';
import { useInView } from 'framer-motion';

export default function PremiumTypingText({ paragraphs }) {
  const containerRef = useRef(null);
  const el = useRef(null);
  const typedRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });

  const htmlString = useMemo(() => {
    return paragraphs.map((paragraph) => {
      const paragraphHtml = paragraph.map((segment) => {
        return `<span class="${segment.color}">${segment.text}</span>`;
      }).join('&nbsp;');
      return `<div class="mb-8 lg:mb-12">${paragraphHtml}</div>`;
    }).join('');
  }, [paragraphs]);

  useEffect(() => {
    if (isInView && !typedRef.current) {
      typedRef.current = new Typed(el.current, {
        strings: [htmlString],
        typeSpeed: 15,
        showCursor: false,
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
        typedRef.current = null;
      }
    };
  }, [isInView, htmlString]);

  return (
    <>
      <style>{`
        .typed-cursor {
          display: none !important;
        }
      `}</style>
      <div
        ref={containerRef}
        className="tracking-[-0.01em] font-black uppercase text-left max-w-[1400px] mx-auto py-4 lg:py-8 px-4"
        style={{ 
          fontFamily: "var(--font-display, 'Sofia Sans Condensed')", 
          fontSize: "clamp(24px, 4.5vw, 64px)", 
          lineHeight: "1.15",
          wordBreak: "break-word",
          overflowWrap: "break-word"
        }}
      >
        <span ref={el} />
      </div>
    </>
  );
}