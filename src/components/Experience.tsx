import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { CalendarDays, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Intern',
    company: 'BoardInfinity',
    period: 'Mar 2024 - Jul 2024',
    description: 'Worked on a library management system project. Implemented various operations to streamline employee workflows. Used C++ and Data Structures and Algorithms to create an efficient solution.',
  },
];

const Experience: React.FC = () => {
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
      id="experience"
      ref={ref}
      className="py-24 bg-white dark:bg-black relative overflow-hidden"
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
            <div className="mt-4 w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-1 w-6 h-6 rounded-full bg-primary-600"></div>

                <div className="ml-10 md:ml-0 md:grid md:grid-cols-2 md:gap-16">
                  <div className={`md:text-right ${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-400">{exp.company}</h4>
                    <div className="flex items-center mt-2 md:justify-end">
                      <CalendarDays className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                  </div>

                  <div className={`mt-4 md:mt-0 ${idx % 2 === 0 ? 'md:col-start-2' : ''}`}>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {experiences.length === 0 && (
            <motion.div 
              variants={itemVariants}
              className="text-center py-12"
            >
              <Briefcase className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">Building professional experience...</p>
            </motion.div>
          )}

          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Eager to grow my professional experience with challenging opportunities that allow me to apply my technical skills and problem-solving abilities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;