export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Tech Startup',
      location: 'Remote',
      period: 'Summer 2024',
      description: [
        'Developed responsive web applications using React.js and Tailwind CSS',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Improved website performance by 40% through code optimization',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Git'],
      type: 'internship'
    },
    {
      id: 2,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 - Present',
      description: [
        'Built custom websites for small businesses and startups',
        'Implemented responsive designs with modern CSS frameworks',
        'Integrated third-party APIs and payment gateways',
        'Provided ongoing maintenance and technical support'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      type: 'freelance'
    },
    {
      id: 3,
      title: 'Computer Science Student',
      company: 'University Name',
      location: 'City, Country',
      period: '2022 - 2026',
      description: [
        'Pursuing Bachelor\'s degree in Computer Science',
        'Relevant coursework: Data Structures, Algorithms, Web Development',
        'Maintaining GPA of 3.8/4.0',
        'Member of Programming Club and Open Source Society'
      ],
      technologies: ['Java', 'Python', 'C++', 'Database Systems'],
      type: 'education'
    }
  ];

  const achievements = [
    {
      title: 'Hackathon Winner',
      description: 'First place in University Hackathon 2024',
      date: '2024',
      icon: '🏆'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to 5+ open source projects',
      date: '2023-2024',
      icon: '🌟'
    },
    {
      title: 'Freelance Success',
      description: 'Completed 10+ successful projects',
      date: '2023-2024',
      icon: '💼'
    },
    {
      title: 'Certification',
      description: 'React Developer Certification',
      date: '2023',
      icon: '📜'
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'internship': return '💼';
      case 'freelance': return '🚀';
      case 'education': return '🎓';
      default: return '💻';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'internship': return 'bg-blue-600';
      case 'freelance': return 'bg-green-600';
      case 'education': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            My journey in software development, from education to professional experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
              
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative mb-12">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 w-8 h-8 ${getTypeColor(exp.type)} rounded-full flex items-center justify-center text-white text-lg z-10`}>
                    {getTypeIcon(exp.type)}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-400 transition-colors duration-300">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-100 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-blue-400 font-medium mb-1">
                            {exp.company}
                          </p>
                          <p className="text-slate-400 text-sm">
                            {exp.location} • {exp.period}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(exp.type)}`}>
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </span>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2 mt-1.5 flex-shrink-0">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">
              Achievements & Milestones
            </h3>
            
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 rounded-lg p-4 border border-slate-700 hover:border-blue-400 transition-colors duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-100 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-300 text-sm mb-2">
                      {achievement.description}
                    </p>
                    <span className="text-blue-400 text-xs font-medium">
                      {achievement.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-400/30">
              <h4 className="font-semibold text-slate-100 mb-3">
                🎯 Current Focus
              </h4>
              <p className="text-slate-300 text-sm mb-4">
                Currently looking for new opportunities to grow as a frontend developer 
                and contribute to innovative projects.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Open to internship opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Available for freelance projects
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Interested in remote work
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">
              Let's Work Together
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a project in mind or just want to chat about technology, 
              I'd love to hear from you!
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
