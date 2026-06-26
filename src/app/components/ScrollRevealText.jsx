'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Wire up (once for the whole page) automatic ScrollTrigger position recalculation.
 * Content above a heading can change height AFTER mount — fonts swapping in, images
 * loading, and the About typing animation growing — which shifts every trigger below.
 * Refreshing on those events keeps each heading's trigger position correct.
 */
let refreshWired = false;
function wireGlobalScrollRefresh() {
  if (refreshWired || typeof window === 'undefined') return;
  refreshWired = true;

  const refresh = () => ScrollTrigger.refresh();

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
  window.addEventListener('load', refresh);

  // Catch layout shifts from late content with a few spaced refreshes (not a
  // per-frame watcher — that would jank the About typing animation).
  [800, 2000, 4000, 7000, 11000].forEach((ms) => window.setTimeout(refresh, ms));
}

/**
 * ScrollRevealText — per-letter drop-in reveal, scrubbed to scroll position.
 *
 * Letters drop down from above the clip line as you scroll into the heading and
 * retract as you scroll back up (1:1 with scroll). A small stagger keeps them moving
 * almost together. On mobile the cascade finishes earlier (a reachable point near the
 * bottom of the screen) so bottom-anchored headings like the footer still complete.
 *
 * `stagger` = delay between letters. `start` / `end` = ScrollTrigger range (desktop).
 */
const ScrollRevealText = ({
  text = '',
  className = '',
  style = {},
  stagger = 0.04,
  start = 'top bottom',
  end = 'top 25%',
}) => {
  const containerRef = useRef(null);
  const charsRef = useRef([]);
  const chars = text.split('');

  useEffect(() => {
    const validRefs = charsRef.current.filter(Boolean);
    if (!containerRef.current || validRefs.length === 0) return;

    wireGlobalScrollRefresh();

    const isMobile =
      typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches;

    const ctx = gsap.context(() => {
      if (isMobile) {
        // Mobile: scrub like desktop, but finish early (near the bottom of the
        // screen) so the cascade always completes — even for the footer, which
        // can't be scrolled far enough to reach the desktop end point.
        gsap.fromTo(
          validRefs,
          { yPercent: -115 },
          {
            yPercent: 0,
            ease: 'none',
            stagger: { each: Math.min(stagger, 0.06) },
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'top 58%',
              scrub: true,
            },
          }
        );
      } else {
        // Desktop: scrub the cascade to scroll position (reverses on scroll up).
        gsap.fromTo(
          validRefs,
          { yPercent: -115 },
          {
            yPercent: 0,
            ease: 'none',
            stagger: { each: stagger },
            scrollTrigger: {
              trigger: containerRef.current,
              start,
              end,
              scrub: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [text, stagger, start, end]);

  // Reset refs array on each render
  charsRef.current = [];

  return (
    <div ref={containerRef} className={className} style={style}>
      {/* Fixed mask — its top edge is the line the letters drop down from. */}
      <span style={{ display: 'block', overflow: 'hidden', lineHeight: '1.1', paddingTop: '0.06em', paddingRight: '0.12em', paddingBottom: '0.14em', paddingLeft: '0.12em' }}>
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => { if (el) charsRef.current[i] = el; }}
            style={{
              display: 'inline-block',
              whiteSpace: char === ' ' ? 'pre' : 'normal',
              willChange: 'transform',
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
