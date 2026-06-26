'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';

const TEXT_CLASSES = 'tracking-[-0.01em] font-black uppercase text-left';
const TEXT_STYLE = {
  fontFamily: "var(--font-display, 'Sofia Sans Condensed')",
  fontSize: 'clamp(24px, 4.5vw, 64px)',
  lineHeight: '1.15',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
};

export default function PremiumTypingText({ paragraphs }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate total length of all segments
  const totalLength = useMemo(() => {
    return paragraphs.reduce(
      (acc, paragraph) => acc + paragraph.reduce((pAcc, segment) => pAcc + segment.text.length, 0),
      0
    );
  }, [paragraphs]);

  useEffect(() => {
    if (!isInView || currentIndex >= totalLength) return;

    // Advance one character at a time. The timer lives in the effect (not inside
    // the setState updater) so the updater stays pure — otherwise React StrictMode's
    // double-invoke in dev schedules duplicate timers and breaks typing on localhost.
    const timer = setTimeout(() => setCurrentIndex((i) => i + 1), 15);
    return () => clearTimeout(timer);
  }, [isInView, currentIndex, totalLength]);

  // Render the paragraphs up to `cursorPosition`. Used twice: once fully (an
  // invisible "ghost" that reserves the FINAL height so nothing below shifts while
  // typing) and once up to the current index (the visible, animating text).
  const renderUpTo = (cursorPosition, showCursor) => {
    let charsAccumulated = 0;
    let cursorPlaced = false;

    return paragraphs.map((paragraph, pIdx) => {
      // If we haven't typed anything in this paragraph yet, don't render it
      if (charsAccumulated >= cursorPosition && cursorPosition > 0) return null;

      const renderedSegments = [];

      paragraph.forEach((segment, sIdx) => {
        const text = segment.text;
        const len = text.length;

        // If we haven't reached this segment yet
        if (charsAccumulated >= cursorPosition && cursorPosition > 0) return;

        // Add space between segments if not the first segment
        if (sIdx > 0 && charsAccumulated < cursorPosition) {
          renderedSegments.push(<span key={`space-${sIdx}`}>&nbsp;</span>);
        }

        if (charsAccumulated + len <= cursorPosition) {
          // Segment fully typed
          renderedSegments.push(
            <span key={sIdx} className={segment.color}>
              {text}
            </span>
          );
          charsAccumulated += len;
        } else {
          // Segment is currently being typed (partially visible)
          const visibleLen = cursorPosition - charsAccumulated;
          const visibleText = text.slice(0, visibleLen);

          renderedSegments.push(
            <span key={sIdx} className={segment.color}>
              {visibleText}
              {showCursor && !cursorPlaced && (
                <span className="custom-cursor font-light ml-0.5 text-white">|</span>
              )}
            </span>
          );
          charsAccumulated += len;
          cursorPlaced = true;
        }
      });

      // Special case: cursor sitting at the very end of a paragraph
      if (showCursor && charsAccumulated === cursorPosition && !cursorPlaced && cursorPosition > 0) {
        const isLastParagraphSoFar =
          pIdx === paragraphs.length - 1 ||
          (paragraphs[pIdx + 1] &&
            paragraphs[pIdx + 1].reduce((acc, s) => acc + s.text.length, 0) + charsAccumulated > cursorPosition);

        if (isLastParagraphSoFar) {
          renderedSegments.push(
            <span key="final-cursor" className="custom-cursor font-light ml-0.5 text-white">|</span>
          );
          cursorPlaced = true;
        }
      }

      if (renderedSegments.length === 0) return null;

      return (
        <div key={pIdx} className="mb-8 lg:mb-12">
          {renderedSegments}
        </div>
      );
    });
  };

  // Full text, rendered once — invisible, just to reserve the final height.
  const ghost = useMemo(() => renderUpTo(totalLength, false), [paragraphs, totalLength]);
  // Visible text up to the current typing position.
  const visible = renderUpTo(Math.min(currentIndex, totalLength), true);

  return (
    <>
      <style>{`
        .custom-cursor {
          display: inline-block;
          animation: blink 0.8s infinite;
          font-weight: 200;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      <div
        ref={containerRef}
        className={`relative max-w-[1400px] mx-auto py-4 lg:py-8 px-4 ${TEXT_CLASSES}`}
        style={TEXT_STYLE}
      >
        {/* Ghost: full text, invisible — locks in the final height so the sections
            below never shift while the text types in. */}
        <div aria-hidden="true" style={{ visibility: 'hidden' }}>
          {ghost}
        </div>
        {/* Visible typed text, aligned exactly on top of the ghost. */}
        <div className="absolute inset-0 py-4 lg:py-8 px-4">
          {visible}
        </div>
      </div>
    </>
  );
}
