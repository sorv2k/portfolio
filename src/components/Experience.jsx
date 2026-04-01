import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'University of California, Riverside',
      logo: '/assets/logos/ucr.avif', // UCR logo
      title: 'Student Researcher',
      duration: 'Oct 2025 – Mar 2026',
      location: 'Riverside, CA',
      description:
        'Conducted research on time series motif discovery under Prof. Eamonn Keogh, one of the most cited researchers in time series analysis.',
      highlights: [
        'Researching motif discovery with temporal scaling invariance for bioacoustic data analysis',
        'Implementing coarse-to-fine search strategy utilizing Matrix Profile (MPX) for speedup over brute force',
        'Validated algorithm on real-world ECG data from PhysioNet Fantasia Database achieving low error rates',
      ],
    },
    {
      company: 'Dayforce',
      logo: '/assets/logos/dayforce.jpg', // Dayforce logo
      title: 'Associate Software Engineer',
      duration: 'Aug 2023 – Aug 2024',
      location: 'Bengaluru, India',
      description:
        'Owned the India HCM Android app portfolio end-to-end, serving as primary liaison with the China engineering team across time zones.',
      highlights: [
        'Reduced crash rates by 65% through systematic root cause analysis and performance optimization',
        'Built reusable Kotlin Coroutines components with structured concurrency, cutting feature delivery time by 15%',
        'Led company-wide rebranding from Ceridian to Dayforce across all Android apps',
        'Instrumented telemetry, metrics, and structured logging across mobile services',
      ],
    },
    {
      company: 'Dayforce',
      logo: '/assets/logos/dayforce.jpg', // Dayforce logo
      title: 'Software Engineer Intern',
      duration: 'Feb 2023 – Jul 2023',
      location: 'Bengaluru, India',
      description:
        'Engineered backend REST APIs in C#/.NET with SQL Server to power enterprise payroll processing for 50,000+ users.',
      highlights: [
        'Integrated service-to-service authentication patterns securing communication between distributed backend microservices',
        'Automated 50+ test cases with Jenkins CI/CD pipelines, reducing production bugs by 30% and achieving 95% on-time delivery',
        'Instrumented structured logging, telemetry, and alerts to backend services, improving observability',
      ],
    },
    {
      company: 'Merkle',
      logo: '/assets/logos/merkle.jpeg', // Merkle logo
      title: 'Analytics Consultant Intern',
      duration: 'Jun 2022 – Jul 2022',
      location: 'Bengaluru, India',
      description: 'Delivered data analytics and automation solutions for enterprise clients at a global marketing agency.',
      highlights: [
        'Built Python ETL pipeline improving data accuracy by 4x',
        'Developed data extraction framework with Cypress, improving throughput by 50%',
        'Configured Jenkins CI/CD workflows achieving zero critical errors',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-card p-6 sm:p-8 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-accent text-lg font-medium">{exp.title}</p>
                  </div>
                </div>
                <div className="text-gray-400 text-sm sm:text-right">
                  <p className="font-medium">{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <motion.li
                    key={hIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + hIndex * 0.1,
                    }}
                    className="flex items-start text-gray-400 text-sm"
                  >
                    <span className="text-accent mr-3 min-w-[1rem] flex-shrink-0">▹</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
