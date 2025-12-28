'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Layers, Star, TrendingUp } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const Skills = () => {
  const [imageErrors, setImageErrors] = useState({});

  // Skills data organized by categories with enhanced information
  const skillsData = {
    languages: {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 90 },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85 },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 80 },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 85 }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: Layers,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 88 },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 90 },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 82 },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 85 }
      ]
    },
    databases: {
      title: 'Databases',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 85 },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 80 },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 75 }
      ]
    },
    cloudDevOps: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', level: 78 },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 80 },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 90 }
      ]
    }
  };

  const handleImageError = (skillName) => {
    setImageErrors(prev => ({ ...prev, [skillName]: true }));
  };

  const SkillCard = ({ skill, delay = 0, categoryColor }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.05 }}
        className="relative group"
      >
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 relative overflow-hidden">
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
          
          {/* Skill Icon */}
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
              {!imageErrors[skill.name] ? (
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                  onError={() => handleImageError(skill.name)}
                />
              ) : (
                <Code className="w-8 h-8 text-white" />
              )}
            </div>
            
            {/* Skill Name */}
            <h4 className="text-white font-semibold text-center">{skill.name}</h4>
            
            {/* Skill Level Bar */}
            <div className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-300">Proficiency</span>
                <span className="text-xs text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: delay + 0.3 }}
                  viewport={{ once: true }}
                  className={`h-2 bg-gradient-to-r ${categoryColor} rounded-full relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const CategorySection = ({ categoryKey, category, index }) => {
    const IconComponent = category.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        {/* Category Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 mb-4"
          >
            <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {category.title}
            </h3>
          </motion.div>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
            className={`w-24 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.skills.map((skill, skillIndex) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              delay={skillIndex * 0.1}
              categoryColor={category.color}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-[#111827] relative overflow-hidden">
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
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
              Technical Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              Skills & 
            </span>
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 bg-clip-text text-transparent">
              {" "}Technologies
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive toolkit of modern technologies and frameworks that I leverage 
            to build{" "}
            <span className="text-blue-400 font-semibold">scalable applications</span>,{" "}
            <span className="text-purple-400 font-semibold">robust systems</span>, and{" "}
            <span className="text-pink-400 font-semibold">innovative solutions</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-8 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                15+
              </div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 flex items-center justify-center">
                <Star className="w-6 h-6 mr-2" />
                3+
              </div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
          />
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