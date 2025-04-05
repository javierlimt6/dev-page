
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Leadership from '@/components/Leadership';
import Life from '@/components/Life';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* <Photo /> */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Leadership />
      <Awards />
      <Life />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
