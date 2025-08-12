'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

export default function SplashScreen({ onComplete }) {
  const [showNamaste, setShowNamaste] = useState(true);
  const [showEnglish, setShowEnglish] = useState(false);

  useEffect(() => {
    // Show Namaste (Hindi) for 2 seconds
    const namasteTimer = setTimeout(() => {
      setShowNamaste(false);
      setShowEnglish(true);
    }, 2000);

    // Show Namaste (English) for 1.5 seconds then complete
    const englishTimer = setTimeout(() => {
      setShowEnglish(false);
      setTimeout(onComplete, 500); // Small delay before showing main content
    }, 3500);

    return () => {
      clearTimeout(namasteTimer);
      clearTimeout(englishTimer);
    };
  }, [onComplete]);

  return (
    <div className="splash-container">
      <AnimatePresence mode="wait">
        {showNamaste && (
          <motion.div
            key="namaste-hindi"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              scale: { duration: 0.6 }
            }}
            className="splash-content"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="namaste-text"
            >
              नमस्ते
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="underline"
            />
          </motion.div>
        )}

        {showEnglish && (
          <motion.div
            key="namaste-english"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="splash-content"
          >
            <motion.h1
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.1em", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="namaste-english"
            >
              Namaste
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
