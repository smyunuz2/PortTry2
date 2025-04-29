import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology (Hons.) - Computer Science and Engineering',
    location: 'Punjab, India',
    period: 'Since August 2022',
    grade: 'CGPA: 6.90',
    achievements: [
      'One among Dean\'s top 50% students at university for good academic performance and extra-curricular activities',
      'Created a project using seed-money, earned Series C funding from the university'
    ]
  },
  {
    institution: 'Sri Chakra Bhavan',
    degree: 'Intermediate - PCM',
    location: 'Vijaywada, Andra Pradesh',
    period: 'April 2020 - March 2022',
    grade: 'Percentage: 73%',
    achievements: []
  },
  {
    institution: 'KKR Gowtham International School',
    degree: 'Matriculation',
    location: 'Vijaywada, Andra Pradesh',
    period: 'April 2018 - March 2020',
    grade: 'Percentage: 80.1%',
    achievements: []
  }
];

const Education: React.FC = () => {
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
      id="education"
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Education</h2>
            <div className="mt-4 w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="mb-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 transform -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary-600 hidden md:block"></div>

                <div className="md:ml-16 md:pl-8 relative">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="h-6 w-6 text-primary-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                    </div>
                    
                    <p className="text-lg font-medium text-primary-700 dark:text-primary-400 mb-2">
                      {edu.degree}
                    </p>
                    
                    <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center mb-2 md:mb-0">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{edu.location}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium mb-3">
                      {edu.grade}
                    </div>
                    
                    {edu.achievements.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold mb-2">Achievements:</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                              <span className="inline-block w-2 h-2 rounded-full bg-primary-600 mt-1.5 mr-2"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;