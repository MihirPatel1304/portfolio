
const skillsData = {
  languages: ['Python', 'Java', 'JavaScript', 'C', 'C++', 'HTML', 'SQL', 'CSS'],
  databases: ['PostgreSQL', 'MySQL'],
  frameworks: ['React','Django'],
  tools: ['Git', 'GitHub', 'Maven']
};

export default function Skills() {
  // Combine all skills into a single array to simplify rendering
  const allSkills = [
    ...skillsData.languages,
    ...skillsData.databases,
    ...skillsData.frameworks,
    ...skillsData.tools
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Grid for each individual skill */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allSkills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-gray-900 p-4 rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300 relative"
            >
              <div className="text-center">
                {getIconForStack(skill)}
                <span className="text-gray-400 mt-2">{skill}</span>
              </div>
              {/* Minimal white gradient shadow on hover */}
              <div className="absolute inset-0 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to return appropriate icon based on stack
function getIconForStack(stack: unknown) {
  switch(stack) {
    case 'Python':
      return <img src="../icons/python.svg" alt="Python" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'Java':
      return <img src="../icons/java.svg" alt="Java" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'JavaScript':
      return <img src="../icons/javascript.svg" alt="JavaScript" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'C':
      return <img src="../icons/c++.svg" alt="C" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'C++':
      return <img src="../icons/c.svg" alt="C++" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'HTML':
      return <img src="../icons/html.svg" alt="HTML" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'SQL':
      return <img src="../icons/sql.svg" alt="SQL" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'CSS':
      return <img src="/icons/css.svg" alt="CSS" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'React':
      return <img src="/icons/react.svg" alt="React" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'Django':
      return <img src="../icons/django.svg" alt="Django" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'PostgreSQL':
      return <img src="../icons/postgresql.svg" alt="PostgreSQL" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'MySQL':
      return <img src="../icons/mysql.svg" alt="MySQL" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'Git':
      return <img src="../icons/git.svg" alt="Git" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    // case 'Linux':
    //   return <img src="./Public/icons/linux.svg" alt="Linux" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'GitHub':
      return <img src="../icons/github-white.svg" alt="GitHub" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    case 'Maven':
      return <img src="../icons/maven.svg" alt="Maven" className="mx-auto" style={{ width: '40px', height: '40px' }} />;
    default:
      return <div className="w-10 h-10 bg-gray-500 mx-auto rounded-full" />;
  }
}
