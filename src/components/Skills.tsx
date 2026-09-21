const skillsData = {
  languages: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  frameworks: ["React", "Next.js", "Spring Boot", "Django"],
  databases: ["PostgreSQL", "MySQL", "SQLite"],
  tools: ["Git", "GitHub", "Maven", "REST APIs", "OAuth"],
};

// Maps each skill to its icon file inside /public/icons
const skillIcons: Record<string, string> = {
  Python: "python.svg",
  Java: "java.svg",
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  HTML: "html.svg",
  CSS: "css.svg",
  SQL: "sql.svg",
  React: "react.svg",
  "Next.js": "next-js.svg",
  "Spring Boot": "spring-boot.svg",
  Django: "django.svg",
  PostgreSQL: "postgresql.svg",
  MySQL: "mysql.svg",
  SQLite: "sqlite.svg",
  Git: "git.svg",
  GitHub: "github-white.svg",
  Maven: "maven.svg",
  "REST APIs": "api.svg",
  OAuth: "oauth.svg",
};

// These icons are black, so they are inverted to white on the dark background
const darkIcons = new Set(["Next.js", "Spring Boot", "REST APIs", "OAuth"]);

export default function Skills() {
  // Combine all skills into a single array to simplify rendering
  const allSkills = [
    ...skillsData.languages,
    ...skillsData.frameworks,
    ...skillsData.databases,
    ...skillsData.tools,
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Grid for each individual skill */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allSkills.map((skill) => (
            <div
              key={skill}
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

// Helper function to return the icon for a skill
function getIconForStack(stack: string) {
  const file = skillIcons[stack];

  // Fallback circle if a skill has no icon yet
  if (!file) {
    return <div className="w-10 h-10 bg-gray-500 mx-auto rounded-full" />;
  }

  return (
    <img
      src={`/icons/${file}`}
      alt={stack}
      className={`mx-auto ${darkIcons.has(stack) ? "invert" : ""}`}
      style={{ width: "40px", height: "40px" }}
    />
  );
}