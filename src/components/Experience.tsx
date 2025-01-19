import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    title: "Software Engineering Intern",
    company: "Arth Infosoft Pvt Ltd, Ahmedabad, India",
    duration: "2024",
    responsibilities: [
      "Developed HRConnect, a Django-based HR portal for leave management, attendance tracking, and event coordination.",
      "Designed features enabling HR administrators to approve leave requests, monitor attendance, and manage events efficiently.",
      "Utilized Postgres SQL to maintain and manage data entered into the portal, ensuring reliability and scalability.",
      "Implemented self-service functionalities for employees to streamline leave applications, attendance logging, and celebration preferences.",
      "Improved organizational efficiency with a user-friendly interface and a robust feature set, fostering a better workplace culture."
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 relative"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-500 mr-3" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                  <p className="text-gray-400">{exp.duration}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              {/* Minimal white gradient shadow on hover */}
              <div className="absolute inset-0 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
