import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "cyan" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "purple" },
    { icon: Twitter, label: "Twitter", href: "#", color: "cyan" },
    { icon: Mail, label: "Email", href: "mailto:joel@example.com", color: "purple" },
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
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 glow-text">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
            Interested in collaborating or just want to say hi? My inbox is always open.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-effect p-8 hover-lift group"
                whileHover={{ scale: 1.05 }}
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
              href="mailto:joel@example.com"
              className="inline-block group relative px-12 py-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary glow-border" />
              <span className="relative text-background font-bold text-lg uppercase tracking-wider">
                Send Message
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-24 pt-12 border-t border-primary/20"
      >
        <p className="text-muted-foreground text-sm">
          Designed & Built by D Joel Gunaseelan
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          © 2025 All rights reserved
        </p>
      </motion.div>
    </section>
  );
};
