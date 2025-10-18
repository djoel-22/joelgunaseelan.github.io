import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Profile3D } from './Profile3D';
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

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Profile3D />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science student passionate about creating immersive digital experiences that push the boundaries of web technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My work combines creative coding, 3D graphics, and modern web frameworks to build interactive applications that captivate and engage users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I explore emerging technologies, experiment with shader programming, and contribute to open-source projects.
              </p>
            </div>

            <div className="glass-effect p-8">
              <h3 className="text-xl font-bold mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Three.js', 'TypeScript', 'WebGL', 'Node.js', 'Python', 'C++', 'GLSL'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
