'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-12 left-0 right-0 z-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center">
          {/* Center: pill-shaped nav */}
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className={`backdrop-blur-2xl rounded-full px-8 py-3 flex items-center gap-6 transition-all duration-300 ${
              isScrolled
                ? 'bg-black/80 border border-blue-500/20 shadow-2xl'
                : 'bg-white/5 border border-white/10 shadow-lg'
            }`}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-blue-400 font-medium text-sm px-3 py-1 rounded-2xl transition-all duration-200 hover:bg-blue-500/10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.15 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
