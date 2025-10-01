import React from 'react';

const Skills = () => {
  // Skills data organized by categories to match the desired layout
  const skillsData = {
    languages: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
    ],
    frameworks: [
      { name: 'Spring-Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ],
    databases: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ],
    cloudDevOps: [
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ]
  };

  const SkillCard = ({ skill }) => {
    return (
      <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm border border-gray-300 hover:border-gray-400 dark:border-gray-600/30 dark:hover:border-gray-500/50">
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <img 
            src={skill.icon} 
            alt={skill.name}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <span className="text-gray-800 dark:text-white font-medium text-sm">{skill.name}</span>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main Skills Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 tracking-tight">
            Skills
          </h2>
          
        </div>

        {/* Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-black dark:text-white" id="skills-languages">
            Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.languages.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Frameworks and Libraries */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-black dark:text-white" id="skills-frameworks">
            Frameworks and Libraries
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.frameworks.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-black dark:text-white" id="skills-databases">
            Databases
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.databases.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Cloud and DevOps */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-black dark:text-white" id="skills-cloud">
            Cloud and DevOps
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.cloudDevOps.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;