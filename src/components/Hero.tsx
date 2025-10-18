import { motion } from 'framer-motion';
import { TypewriterText } from './TypewriterText';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              <TypewriterText text="D JOEL" className="block" speed={80} />
              <TypewriterText 
                text="GUNASEELAN" 
                className="block" 
                delay={500} 
                speed={80}
              />
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
              <TypewriterText 
                text="Computer Science Student crafting immersive digital experiences" 
                delay={1500}
                speed={30}
              />
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover-lift"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-foreground/20 rounded-full font-semibold hover-lift"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
};
