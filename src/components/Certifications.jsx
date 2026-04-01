import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      name: 'Machine Learning With Big Data',
      issuer: 'UC San Diego',
    },
    {
      name: 'Big Data Modeling and Management Systems',
      issuer: 'UC San Diego',
    },
    {
      name: 'What is Data Science',
      issuer: 'IBM',
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-card p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-lg">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;