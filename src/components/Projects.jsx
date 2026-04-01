import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Android HLS Video Player SDK',
      description:
        'Reusable Android video player SDK in Kotlin with ExoPlayer, supporting HLS and DASH adaptive bitrate streaming.',
      tech: ['Kotlin', 'ExoPlayer', 'HLS', 'DASH', 'Android SDK'],
      highlight: 'Low-latency buffering',
    },
    {
      title: 'Health Tracker Android App',
      description:
        'Production-grade native Android app built with modern architecture and offline-first data persistence.',
      tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'MVVM', 'Room', 'Retrofit'],
      highlight: 'Offline-first, zero data loss',
    },
    {
      title: 'ML Model Serving Pipeline',
      description:
        'Asyncio-based request batching layer for distilbert-base inference with real-time observability.',
      tech: ['Python', 'PyTorch', 'FastAPI', 'Prometheus', 'Grafana', 'Docker'],
      highlight: '257 req/s, 88ms p50 latency',
    },
    {
      title: 'Agentic RAG Document Q&A',
      description:
        'Privacy-first RAG pipeline enabling document Q&A with zero external API calls using local LLMs.',
      tech: ['Python', 'LangChain', 'Llama 3', 'ChromaDB', 'FastAPI', 'Docker'],
      highlight: '85%+ retrieval accuracy',
    },
    {
      title: 'Concurrent Log Aggregator',
      description:
        'High-performance log aggregation service utilizing goroutines and channels for concurrent processing.',
      tech: ['Go', 'PostgreSQL', 'Docker', 'Linux'],
      highlight: 'High-throughput parallel processing',
    },
    {
      title: 'Email Notification System',
      description:
        'High-concurrency notification service with Kafka topics and fault-tolerant retry logic.',
      tech: ['Python', 'Kafka', 'PostgreSQL', 'FastAPI', 'Docker'],
      highlight: '10K+ emails processed',
    },
    {
      title: 'Task Management System',
      description:
        'Multi-user task tracking backend with role-based access control for concurrent team workflows.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      highlight: '25% faster API response',
    },
    {
      title: 'AWS Amplify Full-Stack App',
      description:
        'Full-stack application with AWS Amplify, GraphQL API backend, Cognito auth, and real-time data sync.',
      tech: ['React', 'TypeScript', 'GraphQL', 'AWS', 'Cognito', 'S3'],
      highlight: 'Real-time sync via AppSync',
    },
  ];

  return (
    <section
      id="projects"
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
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-card p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col h-full group"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              {project.highlight && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/30">
                    {project.highlight}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-400 bg-dark-bg px-2 py-1 rounded border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
