export interface Project {
  title: string;
  description: string;
  technologies: string[];
  timeline: string;
  link: string;
  highlights: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  skills: string[];
  icon: JSX.Element;
  color: string;
}