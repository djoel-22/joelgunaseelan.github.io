import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Palette, Zap } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "JavaScript / TypeScript", "C++", "Java", "HTML / CSS"],
    color: "cyan"
  },
  {
    icon: Cpu,
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "TensorFlow"],
    color: "purple"
  },
  {
    icon: Palette,
    title: "Creative",
    skills: ["UI / UX Design", "User Experience Design (UED)", "3D Modeling", "Animation"],
    color: "cyan"
  },
  {
    icon: Zap,
    title: "Tools",
    skills: ["Git", "Docker", "Figma", "VS Code", "Linux"],
    color: "purple"
  },
  {
    icon: Cpu,
    title: "AI & Data",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Science", "Transfer Learning", "Neural Networks", "Medical Imaging"],
    color: "cyan"
  },
];

export const Skills = () => {
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Technical Arsenal</h2>
          <p className="text-xl text-muted-foreground">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.5 }
              }}
              className="glass-effect p-8 hover-lift group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 flex items-center justify-center ${
                  category.color === 'cyan' ? 'bg-primary/20' : 'bg-secondary/20'
                } ${category.color === 'cyan' ? 'glow-border' : ''}`}>
                  <category.icon className={`w-6 h-6 ${
                    category.color === 'cyan' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      category.color === 'cyan' ? 'bg-primary' : 'bg-secondary'
                    } animate-pulse-glow`} />
                    <span className="text-sm text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
