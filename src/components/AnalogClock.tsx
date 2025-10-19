import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = (seconds * 6) - 90;
  const minuteAngle = (minutes * 6 + seconds * 0.1) - 90;
  const hourAngle = (hours * 30 + minutes * 0.5) - 90;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-10"
      animate={{
        rotate: [0, 2, 0, -2, 0],
        y: [0, -3, 0, -3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-lg">
        {/* Clock face */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/20"
        />
        
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const x1 = 50 + 38 * Math.cos(angle - Math.PI / 2);
          const y1 = 50 + 38 * Math.sin(angle - Math.PI / 2);
          const x2 = 50 + 42 * Math.cos(angle - Math.PI / 2);
          const y2 = 50 + 42 * Math.sin(angle - Math.PI / 2);
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground/40"
            />
          );
        })}

        {/* Hour hand */}
        <motion.line
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-foreground"
          animate={{ rotate: hourAngle }}
          transition={{ duration: 0.5 }}
          style={{ originX: '50px', originY: '50px' }}
        />

        {/* Minute hand */}
        <motion.line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground/80"
          animate={{ rotate: minuteAngle }}
          transition={{ duration: 0.5 }}
          style={{ originX: '50px', originY: '50px' }}
        />

        {/* Second hand */}
        <motion.line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="text-foreground/60"
          animate={{ rotate: secondAngle }}
          transition={{ duration: 0.5 }}
          style={{ originX: '50px', originY: '50px' }}
        />

        {/* Center dot */}
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>
    </motion.div>
  );
};
