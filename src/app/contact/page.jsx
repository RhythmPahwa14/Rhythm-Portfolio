'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
      value: 'sandeepvashishtha@example.com',
      link: 'mailto:sandeepvashishtha@example.com',
      color: 'text-green-400'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 12345 67890',
      link: 'tel:+911234567890',
      color: 'text-blue-400'
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
      url: 'https://github.com/SandeepVashishtha',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sandeepvashishtha',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

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
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Let's 
            </span>
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              {/* Form Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.name ? 'border-red-400' : 'border-white/20'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300`}
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.email ? 'border-red-400' : 'border-white/20'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300`}
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.subject ? 'border-red-400' : 'border-white/20'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300`}
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors.message ? 'border-red-400' : 'border-white/20'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none`}
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center space-x-2 text-green-400"
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
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer group"
                  onClick={() => info.link && window.open(info.link)}
                >
                  <div className={`w-12 h-12 ${info.color} bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                  <p className="text-gray-300">{info.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h4 className="text-white text-xl font-semibold mb-6">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-white/5 border border-white/10 ${social.color} transition-all duration-300`}
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

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-400 mr-3" />
                <h4 className="text-white text-lg font-semibold">Response Time</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I typically respond to messages within <span className="text-blue-400 font-semibold">24 hours</span>. 
                For urgent matters, feel free to reach out on LinkedIn for a faster response.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default ContactPage;