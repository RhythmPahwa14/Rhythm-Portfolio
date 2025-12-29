'use client';
import { useState, useEffect } from 'react';

export default function FadeRotatingText({ 
  texts = [
    "Amazon ML Summer School 2025 - Participant",
    "GirlScript Summer of Code 2025 - Top 10 Project Admin"
  ],
  displayDuration = 3000,
  fadeDuration = 600,
  loop = true,
  className = ""
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % texts.length;
        if (nextIndex !== 0 || loop) {
          setCurrentIndex(nextIndex);
          setIsVisible(true);
        }
      }, fadeDuration);
    }, displayDuration);

    return () => clearTimeout(timer);
  }, [currentIndex, texts.length, displayDuration, fadeDuration, loop]);

  return (
    <div className={`transition-opacity duration-${fadeDuration} ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
         style={{ 
           transitionDuration: `${fadeDuration}ms`,
           minHeight: '1.5em' 
         }}>
      <strong style={{ 
        color: 'rgba(255, 255, 255, 1)', 
        fontSize: '1.05em', 
        fontWeight: 700,
        display: 'block'
      }}>
        {texts[currentIndex]}
      </strong>
    </div>
  );
}
