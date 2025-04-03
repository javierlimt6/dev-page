
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Company Inc.",
    period: "2021 - Present",
    description: "Leading the development of the company's main product, managing a team of 5 developers, implementing best practices, and architecting scalable solutions.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"]
  },
  {
    id: 2,
    title: "Co-Founder & CTO",
    company: "Startup Name",
    period: "2019 - 2021",
    description: "Co-founded a SaaS startup that provided AI-powered analytics solutions. Led product development, technology stack decisions, and managed a team of developers.",
    technologies: ["Python", "Django", "React", "TensorFlow"]
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Another Company",
    period: "2018 - 2019",
    description: "Worked on frontend development for the company's main product. Implemented new features and improved existing ones, focusing on performance optimization.",
    technologies: ["JavaScript", "Vue.js", "CSS", "Firebase"]
  },
  {
    id: 4,
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2016 - 2018",
    description: "Worked with various clients on web and mobile application development projects, delivering custom solutions that met their specific needs.",
    technologies: ["React Native", "JavaScript", "PHP", "WordPress"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="glass card-hover overflow-hidden border-none">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
                  <div className="p-6 bg-apple-blue/10 flex flex-col justify-center items-center text-center border-r border-white/10">
                    <Briefcase className="mb-4 text-apple-blue" size={24} />
                    <h3 className="font-bold text-xl">{exp.company}</h3>
                    <p className="text-apple-gray">{exp.period}</p>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                    <p className="mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-secondary px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
