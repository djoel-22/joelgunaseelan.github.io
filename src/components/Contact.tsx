import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/djoel-22", color: "cyan" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/joelgunaseelan", color: "purple" },
    { icon: Mail, label: "Email", href: "mailto:joeljoe222gunaseelan222@gmail.com", color: "cyan" },
  ];

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="text-primary font-mono text-sm">04</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary font-mono text-sm">CONTACT</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            {isInView && <TypewriterText text="Let's Connect" speed={60} />}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
            Interested in collaborating or just want to say hi? My inbox is always open.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-effect p-8 hover-lift group"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className={`w-8 h-8 mx-auto mb-3 ${
                  link.color === 'cyan' ? 'text-primary' : 'text-secondary'
                }`} />
                <p className="text-sm text-muted-foreground">{link.label}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="mailto:joeljoe222gunaseelan222@gmail.com"
              className="inline-block px-8 py-4 border border-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-300 text-lg font-semibold"
            >
              Send Message
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-16 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} D Joel Gunaseelan. All rights reserved. Machine Learning Enthusiast | Creative Developer
        </p>
      </motion.div>
    </section>
  );
};
