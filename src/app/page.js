'use client';
import { useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';

// Dynamically import sections with no SSR for better performance
const About = dynamic(() => import('./about/page'), { ssr: false });
const Skills = dynamic(() => import('./skills/page'), { ssr: false });
const Projects = dynamic(() => import('./projects/page'), { ssr: false });
const Contact = dynamic(() => import('./contact/page'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });

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
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}