'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Calendar,
  Clock
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rhythmpahwa14@gmail.com',
      link: 'mailto:rhythmpahwa14@gmail.com',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      color: 'text-purple-400'
    },
    {
      icon: Calendar,
      title: 'Availability',
      value: 'Open to opportunities',
      color: 'text-pink-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/RhythmPahwa14',
      color: 'hover:text-green-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pahwa-rhythm/',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-[var(--bg-primary)] dark:bg-[#111827] relative overflow-hidden transition-colors duration-300">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium backdrop-blur-sm">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Let's 
            </span>
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {" "}Connect
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 relative overflow-hidden">
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-blue-400" />
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border ${
                        errors.name ? 'border-red-400' : 'border-white/20 dark:border-white/20 light:border-gray-300'
                      } rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border ${
                        errors.email ? 'border-red-400' : 'border-white/20 dark:border-white/20 light:border-gray-300'
                      } rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border ${
                        errors.subject ? 'border-red-400' : 'border-white/20 dark:border-white/20 light:border-gray-300'
                      } rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-white/5 dark:bg-white/5 light:bg-white border ${
                        errors.message ? 'border-red-400' : 'border-white/20 dark:border-white/20 light:border-gray-300'
                      } rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none`}
                      placeholder="Tell me about your project or idea..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white/10 dark:bg-white/10 light:bg-gray-200/80 border border-white/20 dark:border-white/20 light:border-gray-300 text-white dark:text-white light:text-gray-900 font-semibold py-4 px-6 rounded-full hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-gray-300/80 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500/30 border border-green-500/40 rounded-lg p-4 flex items-center space-x-2 text-green-600 dark:text-green-400"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center space-x-2 text-red-400"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Failed to send message. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                info.link ? (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-xl p-6 cursor-pointer group block transition-all duration-300"
                  >
                    <div className={`w-12 h-12 ${info.color} bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-2">{info.title}</h4>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-600">{info.value}</p>
                  </motion.a>
                ) : (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-xl p-6 group transition-all duration-300"
                  >
                    <div className={`w-12 h-12 ${info.color} bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-2">{info.title}</h4>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-600">{info.value}</p>
                  </motion.div>
                )
              ))}
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-xl p-6 transition-all duration-300"
              >
                <h4 className="text-white dark:text-white light:text-gray-900 text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full bg-white/10 dark:bg-white/10 light:bg-gray-200 border border-white/20 dark:border-white/20 light:border-gray-300 text-white dark:text-white light:text-gray-700 transition-all duration-300 backdrop-blur-sm ${
                      social.name === 'GitHub' 
                        ? 'hover:bg-green-400/10 hover:border-green-400/30 hover:text-green-400 dark:hover:bg-green-400/10 dark:hover:border-green-400/30 dark:hover:text-green-400 light:hover:bg-green-100 light:hover:border-green-400 light:hover:text-green-600' 
                        : 'hover:bg-blue-400/10 hover:border-blue-400/30 hover:text-blue-400 dark:hover:bg-blue-400/10 dark:hover:border-blue-400/30 dark:hover:text-blue-400 light:hover:bg-blue-100 light:hover:border-blue-400 light:hover:text-blue-600'
                    }`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-xl p-6 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-400 mr-3" />
                <h4 className="text-white dark:text-white light:text-gray-900 text-lg font-semibold">Response Time</h4>
              </div>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                I typically respond to messages within <span className="text-blue-400 font-semibold">24 hours</span>. 
                For urgent matters, feel free to reach out on LinkedIn for a faster response.
              </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;