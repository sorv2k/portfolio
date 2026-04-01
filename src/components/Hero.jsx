import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sorv2k',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/souravguruprasad',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:sourav.guruprasad15@gmail.com',
      icon: FaEnvelope,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-6"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="text-gradient">Sourav Guruprasad</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I'm Sourav, an MS CS student at{' '}
              <a 
                href="https://www.ucr.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors underline underline-offset-2"
              >
                UC Riverside
              </a>{' '}
              with a thing for clean architecture, hard bugs, and systems that hold up under pressure. 
              When I'm not coding, I'm probably reading about something I don't fully understand yet.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0"
            >
              📍 California, US (open to relocation)
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-60 h-60 sm:w-76 sm:h-76 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-accent/20 to-teal-600/20 border-4 border-accent/30 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/logos/headshot.jpg"
                  alt="Sourav Guruprasad"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 15%',
                    transform: 'scale(1.05)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-accent/10 to-teal-600/10">
                  <span className="text-6xl sm:text-7xl lg:text-8xl text-accent font-bold">SG</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-600/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
