'use client';
import { useEffect, useState, useRef } from 'react';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export default function ScrambleRevealText({ text, delay = 0, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Wait for initial delay
    timeoutRef.current = setTimeout(() => {
      let revealedChars = 0;
      const totalChars = text.length;
      const scrambleSpeed = 30; // ms per frame
      const charsPerFrame = 0.5; // characters revealed per iteration
      
      intervalRef.current = setInterval(() => {
        if (revealedChars >= totalChars) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsRevealed(true);
          return;
        }

        // Build the display string
        let newText = '';
        for (let i = 0; i < totalChars; i++) {
          if (i < Math.floor(revealedChars)) {
            // Character is fully revealed
            newText += text[i];
          } else if (i < revealedChars + 8) {
            // Scramble zone - characters near the reveal point
            if (text[i] === ' ') {
              newText += ' ';
            } else {
              newText += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            }
          } else {
            // Not yet started scrambling
            newText += text[i] === ' ' ? ' ' : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        }
        
        setDisplayText(newText);
        revealedChars += charsPerFrame;
      }, scrambleSpeed);
    }, delay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, delay]);

  return (
    <span 
      className={`inline-block transition-all duration-700 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'
      } ${className}`}
      style={{ 
        fontFamily: 'monospace',
        letterSpacing: '0.02em'
      }}
    >
      {displayText || text.split('').map((char, i) => char === ' ' ? ' ' : SCRAMBLE_CHARS[i % SCRAMBLE_CHARS.length]).join('')}
    </span>
  );
}
