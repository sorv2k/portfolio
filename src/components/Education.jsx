import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      institution: 'University of California, Riverside',
      institutionUrl: 'https://www.ucr.edu/',
      logo: '/assets/logos/ucr.avif', // UCR logo
      degree: 'MS in Computer Science',
      duration: 'Sep 2024 – Mar 2026',
      location: 'Riverside, CA',
    },
    {
      institution: 'Manipal Institute of Technology',
      institutionUrl: 'https://www.manipal.edu/mit.html',
      logo: '/assets/logos/manipal.jpg', // Manipal logo
      degree: 'BTech in Computer and Communication Engineering',
      duration: 'Jul 2019 – Aug 2023',
      location: 'Manipal, India',
      volunteering: {
        organization: 'TechTatva, MIT Manipal',
        role: 'Marketing Volunteer',
        duration: 'Oct 2019',
        description: 'Contributed to marketing and outreach for TechTatva, a technical fest at MIT Manipal.',
      },
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-card p-6 sm:p-8 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      <a 
                        href={edu.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors underline underline-offset-2 decoration-accent/50 hover:decoration-accent"
                      >
                        {edu.institution}
                      </a>
                    </h3>
                    <p className="text-accent text-lg font-medium">{edu.degree}</p>
                  </div>
                </div>
                <div className="text-gray-400 text-sm sm:text-right">
                  <p className="font-medium">{edu.duration}</p>
                  <p>{edu.location}</p>
                </div>
              </div>

              {/* Volunteering Section */}
              {edu.volunteering && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2 + 0.3,
                  }}
                  className="mt-4 pt-4 border-t border-gray-700/50"
                >
                  <h4 className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                    <span className="text-accent mr-2">🏆</span>
                    Volunteering
                  </h4>
                  <div className="text-gray-400 text-sm">
                    <p className="font-medium text-gray-300">
                      {edu.volunteering.role} • {edu.volunteering.organization}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">{edu.volunteering.duration}</p>
                    <p className="leading-relaxed">{edu.volunteering.description}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
