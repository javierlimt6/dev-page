import React from 'react';
import { ArrowDown } from 'lucide-react';
import Photo from './Photo';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-background to-black opacity-80 z-0" />
      <div className="container mx-auto px-4 z-10 text-center flex flex-col justify-center h-full">
        
        <div className="mt-16" style={{animationDelay: '0.6s'}}>
          <Photo />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-inter animate-fade-in" style={{animationDelay: '0.2s', animationDuration: "2.0s"}}>
          Hello! I'm Javier.
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-inter animate-fade-in" style={{animationDelay: '0.2s', animationDuration: "5.0s"}}>
          Developer.
          <span className="text-gradient"> Entrepreneur.</span> Innovator.
        </h1>
        <p className="text-xl md:text-2xl text-apple-gray max-w-3xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.4s', animationDuration: "2.0s"}}>
          I like to code stuff to solve real problems.
        </p>
        

        
        <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            See my page
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>

      {/* Background gradient elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 filter blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-apple-blue/10 filter blur-3xl" />
    </section>
  );
};

export default Hero;
