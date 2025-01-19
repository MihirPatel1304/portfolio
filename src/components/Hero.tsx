import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, FileTextIcon } from 'lucide-react';
// import resume from '../Public/Resume.pdf';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 mx-auto mb-8">
              <img
                src="../Public/icons/profile-pic.png"
                alt="Mihir Patel"
                className="w-full h-full object-cover"
              />
            </div> */}
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Mihir Patel
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            Software Engineer
          </motion.p>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-xl" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            I'm currently a Computer Science graduate student at DePaul University. <br /> 
            Explore my projects and skills, and let’s connect!
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          >
            <a href="https://github.com/mihirpatel1304" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/mihirpatel13" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:mihir.patel130403@email.com" className="text-gray-400 hover:text-white transition-colors">
              <MailIcon size={24} />
            </a>
            <a href="/Mihir_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FileTextIcon size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
