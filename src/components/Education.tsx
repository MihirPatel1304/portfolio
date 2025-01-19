import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "Master's in Computer Science",
    institution: "DePaul University",
    year: "2024-2026",
    description: "GPA: 4.0"
  },
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "Gujarat Technological University(GTU)",
    year: "2021-2024",
    description: "GPA: 3.2"
  },
  {
    degree: "Diploma in Engineering in Computer Engineering",
    institution: "Gujarat Technological University(GTU)",
    year: "2018-2021",
    description: "GPA: 3.7"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 relative"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              </div>
              <p className="text-blue-400 mb-2">{edu.institution}</p>
              <p className="text-gray-400 mb-2">{edu.year}</p>
              <p className="text-gray-500">{edu.description}</p>
              {/* Minimal white gradient shadow on hover */}
              <div className="absolute inset-0 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
