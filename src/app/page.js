'use client';
import { useState, lazy, Suspense } from 'react';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';

// Lazy load sections for better performance
const About = lazy(() => import('./about/page'));
const Skills = lazy(() => import('./skills/page'));
const Projects = lazy(() => import('./projects/page'));
const Contact = lazy(() => import('./contact/page'));
const Footer = lazy(() => import('./components/Footer'));

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
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        </>
      )}
    </main>
  );
}