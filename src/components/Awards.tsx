
import React from 'react';
import { Award } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: "Best Tech Startup",
    organization: "Tech Awards 2023",
    year: "2023",
    description: "Recognized for innovation in the tech industry with our groundbreaking product."
  },
  {
    id: 2,
    title: "Innovation Award",
    organization: "Entrepreneur Magazine",
    year: "2022",
    description: "Awarded for developing a revolutionary solution that changed the industry standard."
  },
  {
    id: 3,
    title: "Hackathon Winner",
    organization: "Global DevFest",
    year: "2021",
    description: "First place in a 48-hour hackathon focused on AI solutions for healthcare."
  },
  {
    id: 4,
    title: "Top 30 Under 30",
    organization: "Tech Innovators",
    year: "2020",
    description: "Named one of the top young entrepreneurs in the technology sector."
  }
];

const Awards = () => {
  return (
    <section id="awards" className="section-container bg-apple-gradient relative">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="section-title">Awards & Recognition</h2>
        <p className="section-subtitle">Celebrating achievements and milestones</p>
        
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {awards.map((award) => (
            <div key={award.id} className="glass p-6 rounded-xl card-hover flex">
              <Award className="text-apple-blue mr-4 flex-shrink-0" size={32} />
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold">{award.title}</h3>
                  <span className="text-sm text-apple-gray">{award.year}</span>
                </div>
                <p className="text-sm text-apple-gray mb-2">{award.organization}</p>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
