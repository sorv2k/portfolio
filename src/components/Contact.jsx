import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-teal-400 mx-auto rounded-full mb-8"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg mb-8"
          >
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="mailto:sourav.guruprasad15@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 w-full sm:w-auto justify-center"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Email Me</span>
            </a>

            <a
              href="https://linkedin.com/in/souravguruprasad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-dark-card hover:bg-dark-bg text-gray-300 hover:text-accent font-medium rounded-lg border border-gray-700 hover:border-accent transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/sorv2k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-dark-card hover:bg-dark-bg text-gray-300 hover:text-accent font-medium rounded-lg border border-gray-700 hover:border-accent transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16 pt-8 border-t border-gray-800"
      >
        <p className="text-gray-500 text-sm">
          © 2026 Sourav Guruprasad
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
