import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ExternalLink, Github, Code, Info } from 'lucide-react';

const projects = [
  {
    title: 'Live-Life.org.in',
    description: 'A platform connecting NGOs with people who want to donate or seek assistance. The project streamlines social support by providing a transparent interface between donors and beneficiaries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'MongoDB'],
    timeline: 'Aug 2023 - Mar 2024',
    link: '#', // Replace with actual link when available
    highlights: [
      'Built using Next.js and MongoDB for fast, responsive user experience',
      'Serves as both a platform and an NGO',
      'Facilitates connections between donors and beneficiaries',
      'Developed with seed funding from college'
    ]
  },
  {
    title: 'Community Development Project',
    description: 'Participated in a community development project within an NGO, engaging in various activities to support and uplift individuals in need.',
    technologies: ['Social Impact', 'Project Management'],
    timeline: 'Mar 2023 - Jul 2023',
    link: '#', // Replace with actual link when available
    highlights: [
      'Provided essential resources',
      'Organized awareness programs',
      'Facilitated connections between donors and beneficiaries',
      'Emphasized technology for social good'
    ]
  },
  {
    title: 'Library Management System',
    description: 'An algorithm for a library management system built in C++ using data structures and algorithms to streamline operations.',
    technologies: ['C++', 'Data Structures', 'Algorithms'],
    timeline: 'Mar 2024 - Jul 2024',
    link: '#', // Replace with actual link when available
    highlights: [
      'Implemented efficient data structures',
      'Created algorithms for book tracking',
      'Built user authentication system',
      'Optimized search and retrieval operations'
    ]
  }
];

const ProjectCard: React.FC<{ project: typeof projects[0], index: number }> = ({ project, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.2 + (index * 0.1),
        ease: "easeOut" 
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group"
    >
      <div className="h-4 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description.slice(0, 100)}
          {project.description.length > 100 ? '...' : ''}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            {project.timeline}
          </span>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
              aria-label="Show details"
            >
              <Info className="w-4 h-4" />
            </button>
            
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
              aria-label="External link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            <h4 className="font-semibold mb-2">Key Highlights:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
            <div className="mt-4 w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <a 
              href="https://github.com/smyunuz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary-700 hover:bg-primary-800 text-white font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <Github className="mr-2 h-5 w-5" />
              <span>See More on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;