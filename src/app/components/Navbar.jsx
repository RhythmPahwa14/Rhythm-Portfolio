'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
    <nav className="fixed top-2 md:top-4 left-0 right-0 z-50 px-2 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-1 md:gap-2">
          {/* Left: Name */}
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className={`backdrop-blur-2xl rounded-full px-3 md:px-6 py-2 transition-all duration-300 ${
              isScrolled
                ? isDark ? 'bg-black/80 border border-blue-500/20 shadow-2xl' : 'bg-white/80 border border-blue-500/20 shadow-2xl'
                : isDark ? 'bg-white/5 border border-white/10 shadow-lg' : 'bg-gray-800/10 border border-gray-800/10 shadow-lg'
            }`}
          >
            <span className={`font-bold text-base md:text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>Rhythm</span>
          </motion.div>

          {/* Center: pill-shaped nav */}
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className={`backdrop-blur-2xl rounded-full px-2 md:px-8 py-2 flex items-center gap-1 md:gap-6 transition-all duration-300 ${
              isScrolled
                ? isDark ? 'bg-black/80 border border-blue-500/20 shadow-2xl' : 'bg-white/80 border border-blue-500/20 shadow-2xl'
                : isDark ? 'bg-white/5 border border-white/10 shadow-lg' : 'bg-gray-800/10 border border-gray-800/10 shadow-lg'
            }`}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium text-xs md:text-sm px-1.5 md:px-3 py-1 rounded-2xl transition-all duration-200 hover:bg-blue-500/10 whitespace-nowrap ${
                  isDark ? 'text-white/90 hover:text-blue-400' : 'text-gray-900/90 hover:text-blue-600'
                }`}
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

          {/* Right: Theme Toggle */}
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className={`backdrop-blur-2xl rounded-full px-2.5 md:px-4 py-2 transition-all duration-300 cursor-pointer ${
              isScrolled
                ? isDark ? 'bg-black/80 border border-blue-500/20 shadow-2xl' : 'bg-white/80 border border-blue-500/20 shadow-2xl'
                : isDark ? 'bg-white/5 border border-white/10 shadow-lg' : 'bg-gray-800/10 border border-gray-800/10 shadow-lg'
            }`}
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? (
              <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
