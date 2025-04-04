import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    id: 1,
    title: "Co-Founder",
    company: "Chimera",
    period: "Jan 2025 - Present",
    description: "Co-founded a productivity app startup that empowers youths to be consistent in their morning routine. Led product development, technology stack decisions, and managing a team of developers.",
    technologies: ["React Native", "Django", "TypeScript", "React", "Supabase"],
    photoUrl: "/images/chimera-logo.png", // Add your image path here
    link: "https://chimera-app.com", // Optional - remove if no link
    linktext: "Landing Page"
  },
  {
    id: 2,
    title: "Incoming Software Engineering Intern",
    company: "CloudJoi",
    period: "May 2025 - Aug 2025",
    description: "Co-founded a SaaS startup that provided AI-powered analytics solutions. Led product development, technology stack decisions, and managed a team of developers.",
    technologies: ["Python", "Django", "React", "TensorFlow"],
    photoUrl: "/images/cloudjoi-logo.png"
    // No link provided - this is optional
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Another Company",
    period: "2018 - 2019",
    description: "Worked on frontend development for the company's main product. Implemented new features and improved existing ones, focusing on performance optimization.",
    technologies: ["JavaScript", "Vue.js", "CSS", "Firebase"],
    photoUrl: "/images/chimera-logo.png",
    link: "https://another-company.com"
  },
  {
    id: 4,
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2016 - 2018",
    description: "Worked with various clients on web and mobile application development projects, delivering custom solutions that met their specific needs.",
    technologies: ["React Native", "JavaScript", "PHP", "WordPress"],
    photoUrl: "/images/chimera-logo.png"
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
                    <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-full">
                      {/* <Image 
                        src={exp.photoUrl} 
                        alt={`${exp.company} logo`} 
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    <h3 className="font-bold text-xl">{exp.company}</h3>
                    <p className="text-apple-gray">{exp.period}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      {exp.link && (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-apple-blue hover:text-apple-blue/80 transition-colors flex items-center gap-1"
                        >
                          {exp.linktext ? exp.linktext : "Visit"} <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
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
