'use client';

import { motion } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projectsData = [
  {
    id: '00-1',
    title: 'ALGOVISUALIZER',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Data Structures', 'Algorithms'],
    description: 'A web-based interactive platform for visualizing various data structures and algorithms, including sorting and searching techniques. Users can explore and understand the mechanics of algorithms through interactive visualizations.',
    image: '/projects/algo-visual.png',
    githubLink: 'https://github.com/RhythmPahwa14/AlgoVisualizer',
    liveDemo: 'https://algovisualizer.rhythmpahwa.tech/',
  },
  {
    id: '00-2',
    title: 'HELP-NEARBY',
    technologies: ['React', 'JavaScript', 'Google Maps API', 'OpenCage Geocoding', 'Real-time'],
    description: 'Help Nearby is a full-stack location-based React application that enables users to post and view help requests in real time. It integrates Google Maps API and OpenCage Geocoding to auto-detect and display human needs.',
    image: '/projects/help-nearby.png',
    githubLink: 'https://github.com/RhythmPahwa14/Help-Nearby',
    liveDemo: 'https://help-nearby.vercel.app/',
  },
  {
    id: '00-3',
    title: 'VIRTUAL-NOTEPAD',
    technologies: ['HTML', 'AI/ML', 'Computer Vision', 'Hand Tracking', 'Gesture Recognition'],
    description: 'An AI-powered hand tracking drawing application with machine learning gesture recognition. Users can draw and write in the air using hand gestures captured through computer vision.',
    image: '/projects/virtual-notepad.png',
    githubLink: 'https://github.com/RhythmPahwa14/Virtual-Notepad',
    liveDemo: 'https://virtual-notepad-ivory.vercel.app/',
  },
  {
    id: '00-4',
    title: 'RHYTHM-PORTFOLIO',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    description: 'My personal portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and experiences. Features modern animations and responsive design.',
    image: '/projects/rhythm-portfolio.png',
    githubLink: 'https://github.com/RhythmPahwa14/Rhythm-Portfolio',
    liveDemo: 'https://rhythmpahwa.tech',
  },
  {
    id: '00-5',
    title: 'HANGMAN-GAME',
    technologies: ['Python', 'Game Development', 'CLI', 'Object-Oriented Programming'],
    description: 'A classic Hangman word guessing game implemented in Python. Features interactive gameplay, word categories, and a clean command-line interface for an engaging gaming experience.',
    image: '/projects/hangman-game.png',
    githubLink: 'https://github.com/RhythmPahwa14/Hangman-Game',
  },
];

const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="projects" className="relative z-30 py-10 sm:py-14 lg:py-16">
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center text-center gap-3 mb-8 px-5 sm:px-8 lg:px-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ScrollRevealText
          text="PROJECTS"
          className="text-[clamp(48px,8vw,100px)] font-black uppercase tracking-tighter leading-none text-black"
          style={{ fontFamily: "var(--font-display, 'Sofia Sans Condensed')" }}
        />
      </motion.div>

      {/* Horizontal Accordion Row */}
      <motion.div
        className="projects-accordion"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        {projectsData.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <div
              key={project.id}
              className={`accordion-panel ${isExpanded ? 'accordion-panel--expanded' : ''}`}
              onMouseEnter={() => setExpandedId(project.id)}
              onMouseLeave={() => setExpandedId(null)}
            >
              {/* Collapsed state — always visible */}
              <div className="accordion-collapsed">
                <span className="accordion-id">{project.id}</span>
                <h3 className="accordion-title">{project.title}</h3>
              </div>

              {/* Expanded content — only shown on hover */}
              <div className="accordion-expanded">
                {/* Top: ID left, // TITLE right */}
                <div className="accordion-header">
                  <span className="accordion-header-id">{project.id}</span>
                  <h3 className="accordion-header-title">
                    // &nbsp;{project.title}
                  </h3>
                </div>

                {/* Middle: technologies left, image + links right */}
                <div className="accordion-body">
                  <div className="accordion-tags">
                    {project.technologies.map((tech) => (
                      <div key={tech} className="accordion-tag">
                        / {tech}
                      </div>
                    ))}
                  </div>

                  <div className="accordion-image-wrap">
                    <div className="laptop-screen">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="laptop-screen-img"
                      />
                    </div>
                    <div className="laptop-base"></div>

                    {/* GitHub + Live Demo links */}
                    <div className="accordion-links">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accordion-link group"
                      >
                        GITHUB
                        <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="accordion-link group"
                        >
                          LIVE DEMO
                          <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom: description */}
                <p className="accordion-desc">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
