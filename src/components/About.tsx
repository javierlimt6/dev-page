
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileUserIcon } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              Welcome to my page! I'm an aspiring software developer and entrepreneur with expertise in building innovative digital solutions. 
              I combine technical skills with product development to create solutions for real-world problems.
            </p>
            <p className="text-lg">
              With experience in both startups and established companies, I've developed a keen eye for identifying opportunities
              and turning them into successful ventures. My technical background allows me to understand the complexities of
              development, while my entrepreneurial mindset helps me see the bigger picture.
            </p>
            <p className="text-lg">
              I'm constantly learning and exploring new technologies to stay ahead of the curve. When I'm not 
              building and realising ideas, you'll find me playing floorball, traveling, or trying something new and exciting.
            </p>
            
            <div className="pt-4">
              <Button variant="outline" className="gap-2 py-2.5 px-5 text-base sm:py-3 sm:px-6">
                <FileUserIcon className="w-5 h-5" />
                Resume
              </Button>
            </div>
          </div>
          
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "TypeScript", "Java", "C/C++", "MIPS/ASM", "HTML/CSS", "SQL", "PHP"].map((skill) => (
                    <span key={skill} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[ "Flask", "React", "React Native", 
                  "Django", "Express.js", "Laravel",
                  "GCP", "Git", "Docker",
                  "MongoDB", "PostgreSQL", "Supabase",
                  "Figma", "Adobe Express", "Adobe Premiere Pro",
                  "Adobe Photoshop", "Canva", "GIMPS"
                ].map((skill) => (
                    <span key={skill} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Education</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Master's in Computer Science</p>
                    <p className="text-sm text-apple-gray">University Name, 2018-2020</p>
                  </div>
                  <div>
                    <p className="font-medium">Bachelor's in Software Engineering</p>
                    <p className="text-sm text-apple-gray">University Name, 2014-2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
