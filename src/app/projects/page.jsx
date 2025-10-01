'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Projects data
  const projectsData = [
    {
      id: 1,
      title: 'AlgoVisualizer',
      description: 'A web-based interactive platform for visualizing various data structures and algorithms, including sorting and searching techniques. Users can explore and understand the mechanics of algorithms through interactive visualizations.',
      image: '/projects/algovisualizer.jpg',
      githubLink: 'https://github.com/RhythmPahwa14/AlgoVisualizer',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Data Structures', 'Algorithms']
    },
    {
      id: 2,
      title: 'Help-Nearby',
      description: 'Help Nearby is a location-based React application that enables users to post and view help requests in real time. It integrates Google Maps API and OpenCage Geocoding to auto-detect and display human needs.',
      image: '/projects/help-nearby.jpg',
      githubLink: 'https://github.com/RhythmPahwa14/Help-Nearby',
      technologies: ['React', 'JavaScript', 'Google Maps API', 'OpenCage Geocoding', 'Real-time']
    },
    {
      id: 3,
      title: 'Virtual-Notepad',
      description: 'An AI-powered hand tracking drawing application with machine learning gesture recognition. Users can draw and write in the air using hand gestures captured through computer vision.',
      image: '/projects/virtual-notepad.jpg',
      githubLink: 'https://github.com/RhythmPahwa14/Virtual-Notepad',
      technologies: ['HTML', 'AI/ML', 'Computer Vision', 'Hand Tracking', 'Gesture Recognition']
    },
    {
      id: 4,
      title: 'Eventra',
      description: 'Eventra is a comprehensive event management system that empowers organizers to create, manage, and track events seamlessly. Built with a modern tech stack featuring React frontend and Spring Boot backend.',
      image: '/projects/eventra.jpg',
      githubLink: 'https://github.com/RhythmPahwa14/Eventra',
      technologies: ['React', 'Spring Boot', 'JavaScript', 'Java', 'Event Management']
    },
    {
      id: 5,
      title: 'Rhythm-Portfolio',
      description: 'My personal portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and experiences. Features modern animations and responsive design.',
      image: '/projects/portfolio.jpg',
      githubLink: 'https://github.com/RhythmPahwa14/Rhythm-Portfolio',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'JavaScript']
    },
    {
      id: 6,
      title: 'Hangman-Game',
      description: 'A classic Hangman word guessing game implemented in Python. Features interactive gameplay, word categories, and a clean command-line interface for an engaging gaming experience.',
      image: '/projects/hangman.jpg',
      githubLink: 'https://github.com/RhythmPahwa14/Hangman-Game',
      technologies: ['Python', 'Game Development', 'CLI', 'Object-Oriented Programming']
    }
  ];

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      >
        {/* Project Image */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 to-purple-600">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Overlay Links */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/70 rounded-full text-white hover:bg-black/90 transition-colors duration-200"
              title="View on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-center text-sm font-medium"
            >
              View Code
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/SandeepVashishtha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 font-medium"
          >
            View All Projects on GitHub
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;