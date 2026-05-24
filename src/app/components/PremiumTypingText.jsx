'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { useInView } from 'framer-motion';

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
    if (!isInView) return;

    let timer;
    const step = () => {
      setCurrentIndex((prev) => {
        if (prev < totalLength) {
          timer = setTimeout(step, 15); // Custom typing speed
          return prev + 1;
        }
        return prev;
      });
    };

    timer = setTimeout(step, 15);

    return () => clearTimeout(timer);
  }, [isInView, totalLength]);

  // Render paragraphs up to currentIndex
  const renderedParagraphs = useMemo(() => {
    let charsAccumulated = 0;
    let cursorPlaced = false;

    const cursorPosition = Math.min(currentIndex, totalLength);

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
              {!cursorPlaced && (
                <span className="custom-cursor font-light ml-0.5 text-white">|</span>
              )}
            </span>
          );
          charsAccumulated += len;
          cursorPlaced = true;
        }
      });

      // Special case: if the cursor is at the very end of a paragraph (and not yet placed)
      if (charsAccumulated === cursorPosition && !cursorPlaced && cursorPosition > 0) {
        // If this is the last rendered paragraph so far, append the cursor at the end
        const isLastParagraphSoFar = pIdx === paragraphs.length - 1 || 
          (paragraphs[pIdx + 1] && paragraphs[pIdx + 1].reduce((acc, s) => acc + s.text.length, 0) + charsAccumulated > cursorPosition);
        
        if (isLastParagraphSoFar) {
          renderedSegments.push(
            <span key="final-cursor" className="custom-cursor font-light ml-0.5 text-white">|</span>
          );
          cursorPlaced = true;
        }
      }

      // Check if this paragraph has any content to display
      if (renderedSegments.length === 0) return null;

      return (
        <div key={pIdx} className="mb-8 lg:mb-12">
          {renderedSegments}
        </div>
      );
    });
  }, [paragraphs, currentIndex, totalLength]);

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
        className="tracking-[-0.01em] font-black uppercase text-left max-w-[1400px] mx-auto py-4 lg:py-8 px-4"
        style={{ 
          fontFamily: "var(--font-display, 'Sofia Sans Condensed')", 
          fontSize: "clamp(24px, 4.5vw, 64px)", 
          lineHeight: "1.15",
          wordBreak: "break-word",
          overflowWrap: "break-word"
        }}
      >
        {renderedParagraphs}
      </div>
    </>
  );
}