'use client';
import { useState } from 'react';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen';

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <main>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <Hero />
      )}
    </main>
  );
}