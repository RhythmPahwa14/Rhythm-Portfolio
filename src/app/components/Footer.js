'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/rhythmpahwa14',
      color: 'hover:text-green-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/pahwa-rhythm/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:rhythmpahwa14@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden transition-colors duration-300">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-3xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Rhythm Pahwa
              </span>
            </motion.h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-md">
              Full-stack developer passionate about creating innovative digital experiences 
              and solving complex problems through code.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full dark:bg-white/5 light:bg-gray-800/5 backdrop-blur-sm border dark:border-white/10 light:border-gray-800/10 transition-all duration-300 ${social.color}`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(255,255,255,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center text-gray-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 mr-3 text-green-400" />
                <a href="mailto:rhythmpahwa14@gmail.com" className="hover:text-green-400 transition-colors duration-300">
                  rhythmpahwa14@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center text-gray-300"
                whileHover={{ x: 5 }}
              >
                <Code className="w-5 h-5 mr-3 text-blue-400" />
                <span>Available for opportunities</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center text-gray-300"
                whileHover={{ x: 5 }}
              >
                {/* <Coffee className="w-5 h-5 mr-3 text-yellow-400" />
                <span>Let's grab a coffee & chat</span> */}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-400 mb-4 md:mb-0 flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2025 <a href="https://github.com/rhythmpahwa14" target="_blank" rel="noopener noreferrer" className="mx-1 hover:text-blue-400 transition-colors duration-300">Rhythm Pahwa</a>. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="mx-2"
            >
              <Heart className="w-5 h-5 text-red-400 fill-current" />
            </motion.span>
            and lots of coffee ☕
          </motion.p>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;