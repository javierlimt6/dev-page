
import React from 'react';
import { Award } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: "Hackathon Enthusiast",
    subtitle: "Various Hackathons & Competitions",
    description: "Hack & Roll 2025, Hack 4 Good 2024, SAFMC 2021: Finalist Team, Cyberthon 2021: Commendation Award (9th Team Placing)"
  },
  {
    id: 2,
    title: "Pitching Competitions",
    subtitle: "RC4 Pitching Competition",
    description: "Pitched Chimera to various judges, including a Stanford professor from Silicon Valley for a $10,000 grant funded by NUS Enterprise"
  },
  {
    id: 3,
    title: "Serial Olympiad Medallist",
    subtitle: "Participating since 2016",
    description: "International Olympiads: IJMO 2018 (Bronze) SIMOC 2017 (Bronze, Rank 26) National Olympiads: 2x Distinctions, 2x Silver, 1x Bronze, 1x Credit"
  },
  {
    id: 4,
    title: "Sportsperson",
    subtitle: "Floorball",
    description: "Participated in national SFA Divisions 2 & 4 2022-2023, Inter-Faculty Games 2024 Gold, Inter-College Games 2025 Bronze"
  },
  {
    id: 5,
    title: "Sweaty Gamer",
    subtitle: "Tech Innovators",
    description: "Inter-College Games 2025: Super Smash Bros Ultimate (Gold), Foosball (Gold), FIFA Captain (Bronze), resident video game tryhard"
  }
];

const Awards = () => {
  return (
    <section id="awards" className="section-container bg-apple-gradient relative">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="section-title">Awards</h2>
        <p className="section-subtitle">I chase shiny stuffs (Don't take this section too seriously)</p>
        
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {awards.map((award) => (
            <div key={award.id} className="glass p-6 rounded-xl card-hover flex">
              <Award className="text-apple-blue mr-4 flex-shrink-0" size={32} />
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold">{award.title}</h3>
                  
                </div>
                <p className="text-sm text-apple-gray mb-2">{award.subtitle}</p>
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
