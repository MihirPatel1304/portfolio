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
    title: "Slither Sprint",
    description:
      "Built a classic Snake game using Python to apply the skills I learned, incorporating object-oriented programming (OOP) concepts to enhance game logic, user interaction, and gameplay mechanics.",
    techStack: ["Python", "Object-Oriented Programming (OOP)"],
    github: "https://github.com/MihirPatel1304/Snake_Game",
    image: "/icons/Project-2.png",
    live: null, 
  },
  {
    title: "Classic Pong",
    description:
      "A recreation of the iconic Pong game, built to practice and showcase my programming skills while delivering a nostalgic, simple, yet engaging gaming experience.",
    techStack: ["Python", "Object-Oriented Programming (OOP)"],
    github: "https://github.com/MihirPatel1304/Pong_Game",
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
