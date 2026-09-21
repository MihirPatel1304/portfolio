import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  // Framer Motion controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); // Trigger when 20% of the component is visible
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has played

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true); // Mark animation as played
    }
  }, [controls, inView, hasAnimated]);

  // Animation variants for the text and image containers
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      ref={ref} // Connect to intersection observer
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate={controls} // Control animation with intersection observer
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Text Content */}
          <motion.div
            className="text-white max-w-4xl text-center lg:text-left"
            variants={containerVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
            <div className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify space-y-4">
              <p>
                I'm a software engineer with a Master's in Computer Science from
                DePaul University. I build full-stack web applications, from
                React frontends to Java and Python backends, and I care about
                clean APIs, secure authentication, and code that's easy to
                maintain.
              </p>
              <p>
                My experience includes a software engineering internship at Arth
                Infosoft, a part-time software engineer role at Mangalam
                Information Technologies, and a developer internship at PM
                Communications, where I built and debugged Python, JavaScript,
                and MySQL applications.
              </p>
              <p>
                Recent projects include Personal Timeline, a full-stack app that
                pulls in GitHub and Spotify activity through OAuth, and Hot
                Properties, a Spring Boot real estate platform with JWT
                authentication and role-based access. I'm also building with
                LLMs, starting with a chatbot on the Anthropic API.
              </p>
              <p>
                I'm looking for full-stack, backend, frontend, and AI
                engineering roles, and I'd be glad to connect.
              </p>
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="w-106 h-106 lg:w-[1500px] lg:h-[600px] square-full overflow-hidden border-4 border-white-500 shadow-lg"
            variants={containerVariants}
          >
            <img
              src="/icons/prof-pic.jpeg"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}