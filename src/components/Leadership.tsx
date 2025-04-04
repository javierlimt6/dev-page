import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LaptopMinimalCheck, Handshake, Medal, ExternalLink, ChartNetwork } from 'lucide-react';

const leadershipItems = [
  {
    id: "floorball-ig-head",
    title: "Head of RC4Floorball",
    description: "Provides leadership for the floorball team, organising training sessions, fostering teamwork, and strategising for competitions. Organised a workshop introducing 30+ residents to pick up the sport. Won 2nd Runner-Up at Inter-College Games 2025 🏆",
    icon: Medal,
    link: "https://rc4floorball.com", // Optional - add this if you have a link
    linktext: "Team Page" // Optional - customize link text
  },
  {
    id: "csc-swe",
    title: "Lead Software Engineer of RC4 CSCTech",
    description: "Co-organized three student hackathons, managing logistics and mentoring participants. Secured sponsorships worth over $10,000! 💻",
    icon: LaptopMinimalCheck,
    // No link
  },
  {
    id: "rc4-entre",
    title: "Financial Executive for RC4 Entrepreneurship Club",
    description: "Mentored junior developers in coding skills and career guidance. Helped 15+ students land their first tech jobs. 🌱",
    icon: ChartNetwork,
    // No link
  },
  {
    id: "startup-nes",
    title: "Startup Member at NUS Entrepreneurship Society",
    description: "Founded a local tech meetup group with 200+ members. Organized monthly events featuring industry speakers. 🚀",
    icon: Handshake,
    // No link
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="section-container bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Leadership & Activities</h2>
        <p className="section-subtitle">Things I'm passionate about</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {leadershipItems.map((item) => (
            <Card key={item.id} className="glass overflow-hidden border-none card-hover">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-apple-blue hover:text-apple-blue/80 transition-colors flex items-center gap-1 text-sm"
                      >
                        {item.linktext || "Visit"} <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <p className="text-apple-gray">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;