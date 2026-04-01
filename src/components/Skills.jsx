import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Mobile',
      skills: [
        'Kotlin',
        'Jetpack Compose',
        'MVVM',
        'Coroutines',
        'Hilt',
        'Room',
        'Retrofit',
        'ExoPlayer',
        'Android SDK',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Java',
        'Spring Boot',
        '.NET/C#',
        'Go',
        'Python',
        'FastAPI',
        'REST APIs',
        'GraphQL',
        'Microservices',
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'AWS',
        'Docker',
        'Jenkins',
        'CI/CD',
        'Prometheus',
        'Grafana',
      ],
    },
    {
      title: 'Databases',
      skills: [
        'PostgreSQL',
        'MySQL',
        'SQLite',
        'Redis',
        'Kafka',
      ],
    },
    {
      title: 'AI/ML',
      skills: [
        'PyTorch',
        'LangChain',
        'ChromaDB',
        'Llama 3',
        'Hugging Face',
        'Apache Spark',
      ],
    },
    {
      title: 'Languages',
      skills: [
        'Kotlin',
        'Java',
        'Python',
        'Go',
        'JavaScript',
        'TypeScript',
        'C#',
        'C++',
        'SQL',
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What I Work <span className="text-gradient">With</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-dark-card p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 bg-dark-bg text-gray-300 text-sm rounded-full border border-gray-700 hover:border-accent hover:text-accent transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
