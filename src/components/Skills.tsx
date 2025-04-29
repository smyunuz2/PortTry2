import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Code, Database, Terminal, Github, Layout, LineChart, 
  Users, Briefcase
} from 'lucide-react';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['C++', 'JavaScript', 'C', 'Java', 'Python', 'SQL'],
    icon: <Code className="h-6 w-6" />,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'Next.js'],
    icon: <Layout className="h-6 w-6" />,
    color: 'from-amber-500 to-orange-500',
  },
  {
    category: 'Data & Tools',
    skills: ['Pandas', 'Apache Spark', 'Hadoop', 'Github'],
    icon: <Database className="h-6 w-6" />,
    color: 'from-emerald-500 to-green-500',
  },
  {
    category: 'Soft Skills',
    skills: ['Problem-Solving', 'Team Player', 'Project Management', 'Adaptability'],
    icon: <Users className="h-6 w-6" />,
    color: 'from-purple-500 to-pink-500',
  },
];

const Skills: React.FC = () => {
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
      id="skills"
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My Skills</h2>
            <div className="mt-4 w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skillIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3 + (skillIdx * 0.1),
                          ease: "easeOut" 
                        }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Continuously expanding my skillset through practice, courses, and real-world projects.
              Currently focusing on enhancing my full-stack development capabilities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;