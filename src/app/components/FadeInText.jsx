'use client';
import { motion } from 'framer-motion';

export default function FadeInText({ 
  text, 
  delay = 0, 
  className = '',
  duration = 0.8 
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: duration,
        delay: delay / 1000, // Convert ms to seconds
        ease: [0.25, 0.1, 0.25, 1] // Smooth easing curve
      }}
      className={className}
    >
      {text}
    </motion.span>
  );
}
