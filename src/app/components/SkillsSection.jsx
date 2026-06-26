'use client';

import { motion } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';

const skillsData = [
  {
    category: 'PROGRAMMING LANGUAGES',
    skills: ['Java', 'JavaScript', 'Python', 'C++'],
  },
  {
    category: 'FRAMEWORKS & LIBRARIES',
    skills: ['React', 'Node.js', 'Next.js', 'Express.js'],
  },
  {
    category: 'DATABASES',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'CLOUD & DEVOPS',
    skills: ['AWS', 'Azure', 'Docker', 'Git'],
  },
  {
    category: 'CONVERSATIONAL AI',
    skills: ['Dialogflow', 'Vertex AI', 'Conversational AI Agents'],
  },
  {
    category: 'AI AUTOMATION',
    skills: ['Prompt Engineering', 'AI Workflow Automation'],
  },
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="relative z-30 px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ScrollRevealText
          text="SKILLS & TECHNOLOGIES"
          className="text-[clamp(34px,8vw,140px)] font-black uppercase tracking-tighter leading-none text-black whitespace-nowrap"
          style={{ fontFamily: "var(--font-display, 'Sofia Sans Condensed')" }}
        />
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="space-y-6 sm:space-y-7 lg:space-y-8 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            variants={itemVariants}
            className="w-full flex flex-col items-center gap-3 sm:gap-4"
          >
            {/* Category Label */}
            <div className="flex items-center justify-center">
              <h3 className="text-[0.85rem] sm:text-[1.05rem] font-bold uppercase tracking-[0.16em] text-black whitespace-nowrap">
                / {skillGroup.category}
              </h3>
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center">
              {skillGroup.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="text-[0.78rem] sm:text-[0.95rem] font-medium uppercase tracking-[0.08em] text-black/80 hover:text-black transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {skill}
                  {index < skillGroup.skills.length - 1 && <span className="ml-2.5 sm:ml-3 text-black/30">•</span>}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
