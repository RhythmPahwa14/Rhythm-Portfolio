'use client';
import { useState } from 'react';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar'; 
import About from './about/page';
import Skills from './skills/page';


export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <main>
      <Navbar />
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <Hero />
      )}
      <About />
      <Skills />
    </main>
  );
}