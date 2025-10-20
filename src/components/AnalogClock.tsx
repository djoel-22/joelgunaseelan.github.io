import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { toZonedTime } from 'date-fns-tz';

export const AnalogClock = () => {
  const [time, setTime] = useState(() => toZonedTime(new Date(), 'Asia/Kolkata'));
  const [isDraggingHour, setIsDraggingHour] = useState(false);
  const [isDraggingMinute, setIsDraggingMinute] = useState(false);
  const [isDraggingSecond, setIsDraggingSecond] = useState(false);

  const hourDragAngle = useMotionValue(0);
  const minuteDragAngle = useMotionValue(0);
  const secondDragAngle = useMotionValue(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const istTime = toZonedTime(new Date(), 'Asia/Kolkata');
      setTime(istTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = (seconds * 6) - 90;
  const minuteAngle = (minutes * 6 + seconds * 0.1) - 90;
  const hourAngle = (hours * 30 + minutes * 0.5) - 90;

  const handleDragEnd = (setter: (value: boolean) => void) => {
    setter(false);
    // Reset drag angles with wiggle animation
    hourDragAngle.set(0);
    minuteDragAngle.set(0);
    secondDragAngle.set(0);
  };

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
          animate={{ rotate: isDraggingHour ? hourDragAngle.get() : hourAngle }}
          transition={isDraggingHour ? { duration: 0 } : { 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          style={{ originX: '50px', originY: '50px', cursor: 'grab' }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragStart={() => setIsDraggingHour(true)}
          onDrag={(_, info) => {
            const rect = (_.target as SVGElement).getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const angle = Math.atan2(info.point.y - centerY, info.point.x - centerX) * (180 / Math.PI);
            hourDragAngle.set(angle);
          }}
          onDragEnd={() => handleDragEnd(setIsDraggingHour)}
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
          animate={{ rotate: isDraggingMinute ? minuteDragAngle.get() : minuteAngle }}
          transition={isDraggingMinute ? { duration: 0 } : { 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          style={{ originX: '50px', originY: '50px', cursor: 'grab' }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragStart={() => setIsDraggingMinute(true)}
          onDrag={(_, info) => {
            const rect = (_.target as SVGElement).getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const angle = Math.atan2(info.point.y - centerY, info.point.x - centerX) * (180 / Math.PI);
            minuteDragAngle.set(angle);
          }}
          onDragEnd={() => handleDragEnd(setIsDraggingMinute)}
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
          animate={{ rotate: isDraggingSecond ? secondDragAngle.get() : secondAngle }}
          transition={isDraggingSecond ? { duration: 0 } : { 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          style={{ originX: '50px', originY: '50px', cursor: 'grab' }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragStart={() => setIsDraggingSecond(true)}
          onDrag={(_, info) => {
            const rect = (_.target as SVGElement).getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const angle = Math.atan2(info.point.y - centerY, info.point.x - centerX) * (180 / Math.PI);
            secondDragAngle.set(angle);
          }}
          onDragEnd={() => handleDragEnd(setIsDraggingSecond)}
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
