import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Neural Visualizer",
    category: "AI / 3D",
    description: "Real-time neural network visualization using Three.js and TensorFlow.js. Interactive 3D representation of deep learning models.",
    tech: ["React", "Three.js", "TensorFlow", "WebGL"],
    color: "cyan"
  },
  {
    title: "Quantum Simulator",
    category: "Simulation",
    description: "Browser-based quantum computing simulator with particle effects and state visualization.",
    tech: ["TypeScript", "Canvas API", "Web Workers"],
    color: "purple"
  },
  {
    title: "Procedural Worlds",
    category: "Game Dev",
    description: "Infinite procedurally generated 3D terrain with custom shaders and LOD system.",
    tech: ["Three.js", "GLSL", "Noise Algorithms"],
    color: "cyan"
  },
  {
    title: "AR Code Editor",
    category: "WebXR",
    description: "Augmented reality code editing environment with gesture controls and spatial computing.",
    tech: ["WebXR", "React", "Monaco Editor"],
    color: "purple"
  },
  {
    title: "Particle Symphony",
    category: "Creative Code",
    description: "Audio-reactive particle system that transforms music into mesmerizing visual patterns.",
    tech: ["Web Audio API", "Canvas", "GSAP"],
    color: "cyan"
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-effect p-8 hover-lift h-full">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest ${project.color === 'cyan' ? 'text-primary' : 'text-secondary'}`}>
              {project.category}
            </span>
            <h3 className="text-3xl font-bold mt-2 glow-text">{project.title}</h3>
          </div>
          <div className="flex gap-3">
            <motion.a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-primary/30 hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-primary/30 hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-muted/30 border border-primary/20 text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 transition-all duration-300"
          style={{ transform: isHovered ? 'translate(-4px, -4px)' : 'translate(0, 0)' }}
        />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 transition-all duration-300"
          style={{ transform: isHovered ? 'translate(4px, 4px)' : 'translate(0, 0)' }}
        />
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-sm">02</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-16">
            Exploring the intersection of technology and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
