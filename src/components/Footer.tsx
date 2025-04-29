import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold tracking-tight">
                <span className="text-primary-400">Shaik</span> Yunus
              </h3>
              <p className="mt-2 text-gray-400">Software Engineer</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/smyunuz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shaikyunus01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:yunussm0@gmail.com"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Shaik Mohammad Yunus. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-800 hover:bg-primary-900 transition-colors focus:outline-none group"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5 group-hover:text-primary-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;