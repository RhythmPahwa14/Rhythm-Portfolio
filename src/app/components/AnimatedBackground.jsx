'use client';
import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function AnimatedBackground() {
  const { isDark } = useTheme();
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Function to set canvas size properly
    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    setCanvasSize();

    // Create dots with theme-aware colors
    const numDots = 30;
    const dots = [];
    const colors = isDark 
      ? [
          { r: 96, g: 165, b: 250 },   // lighter blue
          { r: 248, g: 113, b: 113 },  // lighter red
          { r: 250, g: 204, b: 21 },   // lighter yellow
          { r: 74, g: 222, b: 128 },   // lighter green
        ]
      : [
          { r: 59, g: 130, b: 246 },   // darker blue for light mode
          { r: 239, g: 68, b: 68 },    // darker red for light mode
          { r: 234, g: 179, b: 8 },    // darker yellow for light mode
          { r: 34, g: 197, b: 94 },    // darker green for light mode
        ];

    for (let i = 0; i < numDots; i++) {
      const color = colors[i % colors.length];
      const speed = 2;
      const angle = Math.random() * Math.PI * 2;
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: color,
        radius: Math.random() * 3 + 3
      });
    }

    dotsRef.current = dots;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      dots.forEach((dot, i) => {
        // Move dots
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        // Draw lines to nearby dots (only check forward to avoid duplicates)
        for (let j = i + 1; j < dots.length; j++) {
          const otherDot = dots[j];
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = isDark 
              ? (1 - distance / 120) * 0.40 
              : (1 - distance / 120) * 0.25;
            ctx.strokeStyle = `rgba(${dot.color.r}, ${dot.color.g}, ${dot.color.b}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.stroke();
          }
        }

        // Draw dot with theme-aware opacity
        const dotOpacity = isDark ? 0.6 : 0.4;
        ctx.fillStyle = `rgba(${dot.color.r}, ${dot.color.g}, ${dot.color.b}, ${dotOpacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
      // Reinitialize dots with new canvas size
      dots.length = 0;
      for (let i = 0; i < numDots; i++) {
        const color = colors[i % colors.length];
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 5,
          vy: (Math.random() - 0.5) * 5,
          color: color,
          radius: Math.random() * 3 + 2
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDark]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
    />
  );
}



