import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

const timeline = [
  {
    icon: Code,
    year: "2023",
    title: "Frontend and Web Development",
    organization: "Self-taught & Projects",
    description: "Began journey in web development, mastering React, Next.js, and modern frontend technologies. Built multiple projects showcasing creative UI/UX design.",
    color: "cyan"
  },
  {
    icon: Briefcase,
    year: "2025",
    title: "AI/ML Engineer",
    organization: "Research & Development",
    description: "Focused on Machine Learning and Deep Learning, specializing in Computer Vision and Medical Imaging. Developed hybrid transformer-CNN architectures for brain tumor detection.",
    color: "purple"
  },
  {
    icon: GraduationCap,
    year: "2027",
    title: "Bachelor of Science in Computer Science",
    organization: "Karunya Institute of Technology and Sciences",
    description: "Pursuing comprehensive education in Computer Science with focus on AI, Machine Learning, and Software Engineering.",
    color: "cyan"
  }
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
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            {isInView && <TypewriterText text="Journey" speed={60} />}
          </h2>
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
