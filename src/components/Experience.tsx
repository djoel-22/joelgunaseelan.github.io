import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    year: "2022 - Present",
    title: "Computer Science Student",
    organization: "University",
    description: "Pursuing Bachelor's degree in Computer Science with focus on Graphics, AI, and Web Technologies.",
    color: "cyan"
  },
  {
    icon: Briefcase,
    year: "2024",
    title: "Web Development Intern",
    organization: "Tech Startup",
    description: "Built interactive web applications using React, Three.js, and modern web APIs.",
    color: "purple"
  },
  {
    icon: Award,
    year: "2023",
    title: "Hackathon Winner",
    organization: "CodeFest 2023",
    description: "First place for developing an innovative AR-based educational platform.",
    color: "cyan"
  },
  {
    icon: Award,
    year: "2023",
    title: "Open Source Contributor",
    organization: "Various Projects",
    description: "Active contributor to WebGL and creative coding open-source projects.",
    color: "purple"
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-sm">03</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-16 glow-text">Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-24"
              >
                {/* Icon */}
                <div className={`absolute left-0 w-16 h-16 flex items-center justify-center ${
                  item.color === 'cyan' ? 'bg-primary/20 border-primary' : 'bg-secondary/20 border-secondary'
                } border-2 ${item.color === 'cyan' ? 'glow-border' : ''}`}>
                  <item.icon className={`w-8 h-8 ${
                    item.color === 'cyan' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>

                {/* Content */}
                <div className="glass-effect p-6 hover-lift">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className={`text-sm font-mono ${
                        item.color === 'cyan' ? 'text-primary' : 'text-secondary'
                      }`}>
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.organization}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
