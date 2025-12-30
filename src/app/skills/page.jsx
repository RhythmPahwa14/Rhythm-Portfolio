'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Layers, Zap } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();
  const [imageErrors, setImageErrors] = useState({});

  // Skills data organized by categories
  const skillsData = {
    languages: {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
      ]
    },
    databases: {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
      ]
    },
    cloudDevOps: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
      ]
    }
  };

  const handleImageError = (skillName) => {
    setImageErrors(prev => ({ ...prev, [skillName]: true }));
  };

  const SkillCard = ({ skill, delay = 0 }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="inline-block"
      >
        <div className={`${
          isDark 
            ? 'bg-white/10 border-white/20 hover:bg-white/15' 
            : 'bg-black/5 border-black/10 hover:bg-black/8'
        } backdrop-blur-sm border rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-2`}>
          {!imageErrors[skill.name] ? (
            <img 
              src={skill.icon} 
              alt={skill.name}
              className="w-5 h-5 object-contain"
              onError={() => handleImageError(skill.name)}
              loading="lazy"
            />
          ) : (
            <Code className={`w-4 h-4 ${isDark ? 'text-white' : 'text-[#111827]'}`} />
          )}
          <span className={`${isDark ? 'text-white' : 'text-[#111827]'} font-medium text-sm`}>
            {skill.name}
          </span>
        </div>
      </motion.div>
    );
  };

  const CategorySection = ({ categoryKey, category, index }) => {
    const IconComponent = category.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        {/* Category Header */}
        <div className="mb-4 text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 mb-4"
          >
            <IconComponent className={`w-6 h-6 ${isDark ? 'text-white' : 'text-[#111827]'}`} />
            <h3 className={`text-xl md:text-xl font-bold ${isDark ? 'text-white' : 'text-[#111827]'}`}>
              {category.title}
            </h3>
          </motion.div>
        </div>

        {/* Skills Badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          {category.skills.map((skill, skillIndex) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              delay={skillIndex * 0.05}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-[#111827]' : 'bg-[#f3f4f6]'} relative overflow-hidden min-h-screen`}>
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-400' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300 text-blue-600'
            } border rounded-full text-sm font-medium backdrop-blur-sm inline-flex items-center space-x-2`}>
              <Zap className="w-4 h-4" />
              <span>Technical Expertise</span>
            </span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-2xl lg:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-[#111827]'
            }`}
          >
            Skills & Technologies
          </motion.h3>

        </motion.div>

        {/* Skills Categories */}
        {Object.entries(skillsData).map(([key, category], index) => (
          <CategorySection 
            key={key} 
            categoryKey={key} 
            category={category} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;