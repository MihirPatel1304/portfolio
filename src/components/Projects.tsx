import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "HRConnect(HR Portal)",
    description:
      "A Django-based portal that simplifies leave management, attendance tracking, and event coordination for organizations.",
    techStack: ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
    github: "https://github.com/MihirPatel1304/HRConncet",
    image: "/icons/Project-1.png",
    live: null,
  },
  {
    title: "Hot Properties – Real Estate Web Application",
    description:
      "A full-stack real estate platform with role-based access (admin, agent, buyer), serving 100+ users. Features JWT authentication, Spring Security, and optimized RESTful APIs reducing response time from ~800ms to under 300ms.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Thymeleaf",
      "MySQL",
      "Hibernate",
      "JPA",
      "JWT",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/MihirPatel1304/Hot-Properties.git",
    image: "/icons/Project-2.png",
    live: null,
  },
  {
    title: "Personal Timeline – Full-Stack Web Application",
    description:
      "A full-stack app that aggregates personal activities into a unified timeline using manual entries, GitHub commits, and Spotify listening history. Features Google OAuth 2.0 and JWT-based authorization.",
    techStack: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      ".NET 8",
      "SQLite",
      "OAuth 2.0",
      "JWT",
    ],
    github: "https://github.com/MihirPatel1304/Personal-Timeline.git",
    image: "/icons/Project-3.png",
    live: null,
  },
  {
    title:
      "Improving OOP Maintainability and Flexibility with SOLID Principles",
    description:
      "Investigated how design principles such as SOLID improve the maintainability and flexibility of object-oriented software, focusing on creating scalable and robust solutions for modern software development.",
    techStack: ["Research Paper"],
    github: null,
    live: "/Research Paper - Mihir Patel.pdf",
    image: "/icons/Research.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
