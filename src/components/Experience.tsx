import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Co-Founder",
    company: "Chimera",
    period: "Jan 2025 - Present",
    description: "Co-founded a productivity app startup to empowers youths to be consistent in their morning routine. Led product development, technology stack decisions, and managing a team of developers. Participated in RC4 Pitching Competition and applying for accelerator programs like BLK71 and VIP@SoC.",
    technologies: ["React Native", "Django", "TypeScript", "Python", "React", "Supabase"],
    photoUrl: "/images/chimera-logo.png", // Add your image path here
    link: "https://chimeraapp.net", // Optional - remove if no link
    linktext: "Landing Page"
  },
  {
    id: 2,
    title: "Incoming Full Stack Software Engineering Intern",
    company: "CloudJoi",
    period: "May 2025 - Aug 2025",
    description: "Under the NUS Overseas College Malaysia program, CloudJoi is a digital platform startup based in Kuala Lumpur dedicated to making shows accessible for all.",
    technologies: ["JavaScript", "PHP", "React", "Laravel"],
    photoUrl: "/images/cloudjoi-logo.png"
    // No link provided - this is optional
  },
  {
    id: 3,
    title: "Teaching Assistant for CS1010X: Programming Methodology",
    company: "NUS School Of Computing",
    period: "Jan 2025 - Present",
    description: "Given sole responsibility of rebuilding lesson materials and assignment files. Updated deprecated content from Python 3.7 to 3.13, improving GUI and translating code from Cocos to Pygame, utilising GIMPS to rectify faulty sRGB profiles, removing problematic metadata. 2D Runes Contest Head IC.",
    technologies: ["Python", "Pygame", "Cocos", "GIMPS"],
    photoUrl: "/images/soc-logo.png",
    link: "https://another-company.com"
  },
  {
    id: 4,
    title: "Software Engineering Intern",
    company: "Strive Math (YC S21)",
    period: "Jan 2024 - Jun 2024",
    description: "Worked with YC S21-backed, Forbes 30 Under 30 Asia 2024-recognised EdTech startup. Developed interactive simulations with p5.js illustrating Grade 8 math concepts for 10k students. Leveraged TinaCMS to integrate content management with modern development practices. Developed modular and reusable codebases for educational games, incorporating OOP, FP, event-driven programming, and real-time user interaction handling. Designed and executed structured Python programming workshops across multiple international schools",
    technologies: ["Python", "JavaScript", "p5", "Game Development"],
    photoUrl: "/images/strive-logo.png"
  }, 
  {
    id: 5,
    title: "Video Editor Intern",
    company: "Indigo Education Group",
    period: "Jan 2022 - Mar 2022",
    description: "Produced engaging creative content for social media platforms, successfully garnering over 100,000+ views. Edited and produced educational videos explaining complex chemistry topics in a clear and concise manner. Enhanced professional video editing skills through hands-on experience with advanced editing tools and techniques.",
    technologies: ["Video Editing", "Content Creation", "Premiere Pro"],
    photoUrl: "/images/indigo-logo.png"
  }, 
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
                    <div className="relative w-20 h-20 mb-4 overflow-hidden">
                      <img 
                        src={exp.photoUrl} 
                        alt={`${exp.company} logo`} 
                        className="w-full h-full object-cover"
                      />
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
                          {exp.linktext || "Visit"} <ExternalLink size={16} />
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
