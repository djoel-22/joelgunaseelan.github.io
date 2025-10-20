import { Background3D } from '@/components/Background3D';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Philosophy } from '@/components/Philosophy';
import { Stats } from '@/components/Stats';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Background3D />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Philosophy />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
