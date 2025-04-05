
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "MyPaperLeh?",
    description: "MyPaperLeh is an AI-powered SaaS platform currently in stealth mode, designed to revolutionise exam paper generation. The platform takes uploaded exam papers and regenerates completely new papers with fresh questions, maintaining the same format, topics, and syllabus coverage. It aims to streamline the process for educators and institutions by leveraging cutting-edge Generative AI technologies.",
    technologies: ["React", "TypeScript", "Python", "GenAI", "Supabase", "FASTApi", "Syncfusion"],
    demoLink: "#",
    githubLink: "#",
    image: "/images/mypaperleh-banner.png"
  },
  {
    id: 2,
    title: "2048 AI Solver",
    description: "Developed an intelligent AI solving the 2048 puzzle game using minimax algorithm with alpha-beta pruning. Implemented strategic heuristics including positional weighting, clustering penalties, and empty cell analysis. Created a depth-limited search algorithm balancing computational efficiency with strategic planning. Built a full-stack application with Python/FastAPI backend and React frontend connected via Axios to visualise the AI's decision-making process in real-time. The system achieves high scores, reaching the 2048 tile at >90% rate.",
    technologies: ["React", "Python", "FASTApi", "TypeScript", "Minimax", "Alpha-Beta Pruning", "Artifical Intelligence"],
    demoLink: "#",
    githubLink: "#",
    image: "/images/2048solver-logo.png"
  },
  {
    id: 3,
    title: "HalloweenBot",
    description: "Collaborating with various Residential Colleges to develop the HalloweenBot, a CRUD queue management system for Halloween-themed events across NUS RCs, impacting over 3000 students. Utilising PostgresSQL database for hosting & Python RESTful backend.",
    technologies: ["Python", "Telegram", "SQL", "PostgresSQL", "OOP"],
    demoLink: "#",
    githubLink: "#",
    image: "https://placehold.co/600x400/1f1f23/ffffff?text=Halloween+Bot"
  },
  {
    id: 4,
    title: "Chimera Landing Page",
    description: "React + Vite website to showcase Chimera and collect email addresses from interested beta testers. Hosted with Vercel + Supabase database",
    technologies: ["React", "TypeScript", "Supabase", "Vercel"],
    demoLink: "#",
    githubLink: "#",
    image: "/images/chimera-banner.png"
  },
  {
    id: 5,
    title: "NUSPolls",
    description: "A Telegram Bot & Channel, similar to NUSConfessIT, meant to collect anonymous polls from NUS students and display responses on the channel. Utilised NLP-processing technologies to validate poll inputs, hosted with Python backend with Telegram interface.",
    technologies: ["Python", "TensorFlow", "Flask", "D3.js"],
    demoLink: "#",
    githubLink: "#",
    image: "https://placehold.co/600x400/1f1f23/ffffff?text=NUSPolls"
  },
  {
    id: 6,
    title: "NYSecure | code4.ny",
    description: "The protocol for attendance taking in NYJC during a crisis was through filling up Google forms. Threats that trigger lockdowns in schools are real, and the protocol’s flaws could cause casualties in crucial moments. Convicted to change this, I gathered like-minded Computing classmates and initiated code4.ny, a project to code a web app to gather attendance during a crisis. The development process was not in our curriculum, thus we encountered issues surrounding UI plans, implementations, and database structures. Persevering through these setbacks was extremely challenging, but through it, we found new ways to adapt to new territories. Made an MVP application with a local database to present to our vice-principal.",
    technologies: ["Python", "JavaScript", "Airtable", "Flask"],
    demoLink: "#",
    githubLink: "https://github.com/javierlimt6/NYSecure",
    image: "https://placehold.co/600x400/1f1f23/ffffff?text=NYSecure"
  },
  {
    id: 7,
    title: "Simple Chess App",
    description: "A simple chess app made during my time taking H2 Computing in NYJC, hosted with Python Flask.",
    technologies: ["Python", "Flask"],
    demoLink: "#",
    githubLink: "#",
    image: "https://placehold.co/600x400/1f1f23/ffffff?text=Chess+App"
  },
  {
    id: 8,
    title: "Personal Portfolio Website",
    description: "What you are seeing now! Hosted with React Frontend, using Supabase to collect email addresses.",
    technologies: ["React", "Supabase", "TypeScript"],
    demoLink: "#",
    githubLink: "#",
    image: "/images/portfolio-banner.png"
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">The itches I'm scratching!</p>
        
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
                  Check it out! {project.demoLink == "#" ? "(Coming soon...)": ""} <ArrowUpRight size={16} />
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-apple-blue hover:underline flex items-center gap-1"
                >
                  GitHub {project.githubLink == "#" ? "(Coming soon...)": ""} <Github size={16} />
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
