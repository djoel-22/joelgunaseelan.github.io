import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Palette, Lightbulb } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

const philosophies = [
  {
    icon: Brain,
    title: "Intelligence Meets Creativity",
    description: "Blending the analytical power of machine learning with the aesthetic beauty of frontend design to create meaningful digital experiences."
  },
  {
    icon: Code,
    title: "Code as Craft",
    description: "Writing clean, efficient code is an art form. Every line serves a purpose, every function tells a story, and every algorithm solves a real problem."
  },
  {
    icon: Palette,
    title: "Design with Purpose",
    description: "Beautiful interfaces are more than visual appeal—they're intuitive pathways that guide users effortlessly toward their goals."
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "Technology evolves rapidly. Staying curious, learning constantly, and adapting quickly are the keys to creating impactful solutions."
  }
];

export const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {isInView && <TypewriterText text="My Philosophy" speed={60} />}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core principles that guide my approach to technology and design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {philosophies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-8 hover-lift"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-foreground/10 rounded-full mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
