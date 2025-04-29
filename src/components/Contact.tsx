import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Mock form submission - in a real app, you'd send this to a backend
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h2>
            <div className="mt-4 w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <a href="mailto:yunussm0@gmail.com" className="text-lg font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      yunussm0@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 mr-4">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/shaikyunus01" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      linkedin.com/in/shaikyunus01
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 mr-4">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</h4>
                    <a 
                      href="https://github.com/smyunuz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      github.com/smyunuz
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out anytime!
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/smyunuz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/shaikyunus01" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:yunussm0@gmail.com"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 transition-colors"
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 transition-colors"
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 transition-colors"
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus !== 'idle'}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all ${
                      formStatus === 'success' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-primary-600 hover:bg-primary-700'
                    }`}
                  >
                    {formStatus === 'idle' && (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                    
                    {formStatus === 'submitting' && (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    
                    {formStatus === 'success' && (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Message Sent!</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;