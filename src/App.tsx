import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const updateTitle = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      // Update title based on current section
      if (currentSection) {
        document.title = `${currentSection.charAt(0).toUpperCase() + currentSection.slice(1)} | Shaik Yunus`;
      } else {
        document.title = 'Shaik Mohammad Yunus | Portfolio';
      }
    };
    
    window.addEventListener('scroll', updateTitle);
    return () => window.removeEventListener('scroll', updateTitle);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;