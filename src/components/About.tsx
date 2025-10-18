import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-sm">01</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-12 glow-text">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science student passionate about creating immersive digital experiences that push the boundaries of web technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work combines creative coding, 3D graphics, and modern web frameworks to build interactive applications that captivate and engage users.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I explore emerging technologies, experiment with shader programming, and contribute to open-source projects that inspire innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect p-6 hover-lift">
              <h3 className="text-xl font-bold mb-4 text-primary">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Three.js', 'TypeScript', 'WebGL', 'Node.js', 'Python', 'C++', 'Shaders'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect p-6 hover-lift">
              <h3 className="text-xl font-bold mb-4 text-secondary">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {['3D Graphics', 'AI/ML', 'Game Dev', 'WebXR', 'Creative Coding'].map((interest) => (
                  <span key={interest} className="px-4 py-2 bg-muted/50 border border-primary/30 text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
