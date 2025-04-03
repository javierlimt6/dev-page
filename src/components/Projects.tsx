
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A full-stack web application for tracking personal finances, with analytics and budgeting tools.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
    image: "https://placehold.co/600x400/1f1f23/ffffff?text=Project+One"
  },
  {
    id: 2,
    title: "Project Two",
    description: "An e-commerce platform with advanced search capabilities and personalized recommendations.",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    demoLink: "#",
    githubLink: "#",
    image: "https://placehold.co/600x400/1f1f23/ffffff?text=Project+Two"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A mobile app for fitness tracking and workout planning, with social features.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    demoLink: "#",
    githubLink: "#",
    image: "https://placehold.co/600x400/1f1f23/ffffff?text=Project+Three"
  },
  {
    id: 4,
    title: "Project Four",
    description: "A machine learning model for predicting stock market trends, with a web interface.",
    technologies: ["Python", "TensorFlow", "Flask", "D3.js"],
    demoLink: "#",
    githubLink: "#",
    image: "https://placehold.co/600x400/1f1f23/ffffff?text=Project+Four"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Showcasing my technical and entrepreneurial skills</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass card-hover border-none overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4 text-apple-gray">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-secondary px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-apple-blue hover:underline flex items-center gap-1"
                >
                  Live Demo <ArrowUpRight size={16} />
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-apple-blue hover:underline flex items-center gap-1"
                >
                  GitHub <Github size={16} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
