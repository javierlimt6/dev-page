
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

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
              I'm constantly learning and exploring new technologies to stay ahead of the curve. When I'm not coding or
              strategizing, you'll find me playing floorball, traveling, or trying something new and exciting.
            </p>
            
            <div className="pt-4">
              <Button variant="outline" className="gap-2">
                <FileText size={16} />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "GraphQL", "Docker"].map((skill) => (
                    <span key={skill} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Business Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Product Strategy", "Market Research", "Business Development", "Growth Hacking", "Pitching", "Team Leadership"].map((skill) => (
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
