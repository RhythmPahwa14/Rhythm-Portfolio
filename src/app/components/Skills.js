'use client';
import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'HTML5', level: 90, icon: '🏗️' },
        { name: 'CSS3', level: 85, icon: '🎨' },
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'React.js', level: 80, icon: '⚛️' },
        { name: 'Next.js', level: 75, icon: '🔺' },
        { name: 'TypeScript', level: 70, icon: '📝' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' },
        { name: 'Responsive Design', level: 90, icon: '📱' }
      ]
    },
    backend: {
      title: 'Backend & Tools',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 70, icon: '🟢' },
        { name: 'Express.js', level: 65, icon: '🚀' },
        { name: 'MongoDB', level: 60, icon: '🍃' },
        { name: 'PostgreSQL', level: 55, icon: '🐘' },
        { name: 'REST APIs', level: 70, icon: '🔗' },
        { name: 'Git & GitHub', level: 85, icon: '📋' },
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'Firebase', level: 65, icon: '🔥' }
      ]
    },
    design: {
      title: 'Design & Others',
      icon: '🎭',
      skills: [
        { name: 'UI/UX Design', level: 75, icon: '🎨' },
        { name: 'Figma', level: 80, icon: '🔧' },
        { name: 'Adobe XD', level: 70, icon: '🎯' },
        { name: 'Photoshop', level: 65, icon: '🖼️' },
        { name: 'Responsive Design', level: 90, icon: '📐' },
        { name: 'Accessibility', level: 75, icon: '♿' },
        { name: 'Performance Optimization', level: 70, icon: '⚡' },
        { name: 'SEO Basics', level: 65, icon: '🔍' }
      ]
    }
  };

  const SkillBar = ({ skill }) => (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-lg mr-2">{skill.icon}</span>
          <span className="text-slate-300 font-medium">{skill.name}</span>
        </div>
        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full transition-all duration-1000 ease-out group-hover:from-blue-400 group-hover:to-blue-300"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span className="mr-2 text-lg">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-semibold text-slate-100 mb-8 text-center">
            <span className="mr-3">{skillCategories[activeCategory].icon}</span>
            {skillCategories[activeCategory].title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <SkillBar skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-lg font-semibold text-slate-100 mb-2">Always Learning</h4>
            <p className="text-slate-300 text-sm">
              Constantly exploring new technologies and staying updated with industry trends.
            </p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors">
            <div className="text-3xl mb-4">🤝</div>
            <h4 className="text-lg font-semibold text-slate-100 mb-2">Team Player</h4>
            <p className="text-slate-300 text-sm">
              Experienced in collaborative development using Git, code reviews, and agile methodologies.
            </p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors">
            <div className="text-3xl mb-4">💡</div>
            <h4 className="text-lg font-semibold text-slate-100 mb-2">Problem Solver</h4>
            <p className="text-slate-300 text-sm">
              Love tackling complex challenges and finding elegant solutions to technical problems.
            </p>
          </div>
        </div>

        {/* Certifications or Learning Path */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold text-slate-100 mb-6">
            Currently Learning & Exploring
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React Native',
              'GraphQL',
              'Docker',
              'AWS',
              'Three.js',
              'Web3',
              'Machine Learning',
              'Python'
            ].map((tech, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
