export default function About() {
  const highlights = [
    { number: '50+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Learning' },
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Commitment' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-4">
                Hello! I'm Rhythm, a passionate frontend developer.
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a Computer Science student with a passion for creating beautiful, 
                  functional, and user-centered digital experiences. My journey in web 
                  development started during my first year of college, and I've been 
                  hooked ever since.
                </p>
                <p>
                  I enjoy turning complex problems into simple, beautiful, and intuitive 
                  designs. My goal is to build applications that not only function 
                  flawlessly but also provide engaging and meaningful experiences for users.
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of building software 
                  for personal projects, contributing to open-source, and continuously 
                  learning cutting-edge technologies. I'm always excited to take on new 
                  challenges and collaborate with fellow developers.
                </p>
              </div>
            </div>

            {/* Technologies I work with */}
            <div>
              <h4 className="text-lg font-semibold text-slate-100 mb-3">
                Here are a few technologies I've been working with recently:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                {[
                  'JavaScript (ES6+)',
                  'React.js',
                  'Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'Node.js',
                  'Git & GitHub',
                  'Responsive Design'
                ].map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative group mx-auto lg:mx-0 w-80 h-80">
              <div className="absolute inset-0 bg-blue-400 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="relative bg-slate-700 rounded-lg overflow-hidden h-full w-full border-2 border-slate-600 group-hover:border-blue-400 transition-colors duration-300">
                <div className="flex items-center justify-center h-full text-slate-400">
                  {/* Placeholder for your photo */}
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700 hover:border-blue-400 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    {item.number}
                  </div>
                  <div className="text-slate-300 text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal interests */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold text-slate-100 mb-6">
            When I'm not coding, you can find me:
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '🎵 Listening to music',
              '📚 Reading tech blogs',
              '🎮 Playing games',
              '☕ Exploring coffee shops',
              '🏃‍♂️ Staying active',
              '🌱 Learning new technologies'
            ].map((interest, index) => (
              <span 
                key={index}
                className="bg-slate-800 px-4 py-2 rounded-full text-slate-300 text-sm border border-slate-700 hover:border-blue-400 transition-colors duration-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
