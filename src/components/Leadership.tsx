
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Flag, GraduationCap } from 'lucide-react';

const leadershipItems = [
  {
    id: "club-president",
    title: "Floorball Club President",
    description: "Led a team of 25+ members, organized tournaments, and increased club membership by 40% in one year. 🏆",
    icon: Users,
  },
  {
    id: "hackathon-organizer",
    title: "Hackathon Organizer",
    description: "Co-organized three student hackathons, managing logistics and mentoring participants. Secured sponsorships worth over $10,000! 💻",
    icon: Flag,
  },
  {
    id: "mentor",
    title: "Student Mentor",
    description: "Mentored junior developers in coding skills and career guidance. Helped 15+ students land their first tech jobs. 🌱",
    icon: GraduationCap,
  },
  {
    id: "community-leader",
    title: "Tech Community Leader",
    description: "Founded a local tech meetup group with 200+ members. Organized monthly events featuring industry speakers. 🚀",
    icon: Award,
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="section-container bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Leadership & Activities</h2>
        <p className="section-subtitle">Making an impact beyond code 💪</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {leadershipItems.map((item) => (
            <Card key={item.id} className="glass overflow-hidden border-none card-hover">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
