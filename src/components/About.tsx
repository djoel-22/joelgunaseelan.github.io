import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TypewriterText } from './TypewriterText';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            {isInView && <TypewriterText text="About Me" speed={60} />}
          </h2>
          <div className="h-1 w-20 bg-foreground rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="glass-effect p-8 space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm D Joel Gunaseelan - a Machine Learning and Deep Learning enthusiast, and a Creative Frontend Developer. I build intelligent models and craft engaging, user-friendly interfaces. I'm passionate about turning complex problems into elegant solutions and bringing ideas to life through code and design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always exploring the latest in AI and frontend technologies to create impactful experiences. Whether it's training neural networks for medical imaging or designing beautiful web interfaces, I thrive on the intersection of intelligence and creativity.
            </p>
          </div>

          <div className="glass-effect p-8">
            <h3 className="text-xl font-bold mb-6">Core Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Machine Learning',
                'Deep Learning',
                'Python',
                'Computer Vision',
                'User Experience Design',
                'Flutter',
                'Transfer Learning',
                'Data Science'
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
