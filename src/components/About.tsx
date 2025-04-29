import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
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
    hidden: { opacity: 0, y: 20 },
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
      id="about"
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="mt-4 w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-200 to-secondary-100 dark:from-primary-900 dark:to-secondary-800 hover-clip-circle">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="clip-circle w-5/6 h-5/6 relative">
                    <img 
                      src="https://media-hosting.imagekit.io/121beb6557c54877/Screenshot%202025-03-05%20113431.png?Expires=1840047255&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pPZwlXAL-pVkDhf9no3auoJ-S4bIfroqmxkub0-WdgFqi7DwhW7voRSN9Jcgghqgul1MXq8hU0JuWVe~xT0g6zoXwoMjyWU0QqwDnNb6FqBcylzFxhiQNcrNU78T3KHcEHuePHypXHgAKvm18ZH7KLEIl4o41WprMKP-hVNFmiWHX3iskPf888CbHMTUejpH4BDEjM75DCUZTgo2kbw1O5J1qaa~49oqOGOJ8Aa2W5vy4Osk0HW9CH7jtusTd-qFkIGwHGkj7ve6tmpcVMAWFMBKqipH1KNF8wKxKs0CoY9nP8lM2ZKeiBsxaL5xzVeu3ZGDZOnec1kZ8GeSIZt2PA__" 
                      alt="Shaik Mohammad Yunus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl font-bold text-gray-900 dark:text-white"
              >
                Shaik Mohammad Yunus
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300"
              >
                I'm a passionate Software Engineer with a strong foundation in C++, JavaScript, and other programming languages. 
                My journey in technology is driven by a desire to create impactful solutions that solve real-world problems.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300"
              >
                With experience in both project development and community service, I bring a unique perspective that combines technical expertise with a deep understanding of user needs.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="pt-4"
              >
                <a 
                  href="#skills" 
                  className="inline-flex items-center text-primary-700 dark:text-primary-400 font-medium"
                >
                  <span>Explore my skills</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;