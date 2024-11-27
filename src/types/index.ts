export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Programming Language' | 'Database';
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}