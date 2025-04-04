
import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-6 fixed top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-gradient">Javier Lim Jun Yi</a>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="text-foreground/80 hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">Projects</a>
            <a href="#awards" className="text-foreground/80 hover:text-foreground transition-colors">Awards</a>
            <a href="#life" className="text-foreground/80 hover:text-foreground transition-colors">Life</a>
          </div>
          
          <div className="flex items-center gap-4">
            
            <a href="https://linkedin.com/in/jav-lim" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/javierlimt6" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            
            <Button onClick={scrollToContact} variant="secondary" className="ml-4">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
