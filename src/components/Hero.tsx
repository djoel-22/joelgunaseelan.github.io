import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
              CS Student & Developer
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-6 glow-text">
            D JOEL
            <br />
            GUNASEELAN
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Building immersive digital experiences with code, creativity, and cutting-edge technology
          </motion.p>

          <motion.div
            className="flex gap-6 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#projects" className="group relative px-8 py-4 overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 glow-border" />
              <span className="relative text-primary font-medium uppercase tracking-wider">
                Explore Work
              </span>
            </a>
            <a href="#contact" className="group relative px-8 py-4 overflow-hidden">
              <div className="absolute inset-0 bg-primary glow-border" />
              <span className="relative text-background font-medium uppercase tracking-wider">
                Get In Touch
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ boxShadow: '0 0 20px hsl(var(--glow-cyan))' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-3 h-3 bg-secondary rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ boxShadow: '0 0 20px hsl(var(--glow-purple))' }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
