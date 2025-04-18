
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const lifeCategories = [
  {
    id: "floorball",
    title: "Floorball",
    description: "A passionate floorball player, participating in local leagues and tournaments since 2020.",
    image: "/images/flb.jpg"
  },
  {
    id: "travel",
    title: "Travel",
    description: "An avid traveler who has visited over 20 countries, always seeking new cultures and experiences.",
    image: "/images/travel.png"
  },
  {
    id: "new-stuff",
    title: "Trying New Things",
    description: "Constantly exploring new hobbies, skills, and experiences to broaden my horizons and perspective!",
    image: "/images/guitar.png"
  }
];

const Life = () => {
  return (
    <section id="life" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Life Beyond Code</h2>
        <p className="section-subtitle">What I do in my free time (when I get any..)</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {lifeCategories.map((category) => (
            <Card key={category.id} className="glass overflow-hidden border-none card-hover">
              <div className="h-56 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-apple-gray">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Life;
