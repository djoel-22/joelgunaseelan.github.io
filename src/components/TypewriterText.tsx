import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterText = ({ 
  text, 
  delay = 0, 
  className = '',
  speed = 50,
  deleteSpeed = 30,
  pauseDuration = 3000
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    // Pause before starting to delete
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    // Deleting phase
    if (isDeleting) {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Done deleting, start typing again
        setIsDeleting(false);
        setCurrentIndex(0);
      }
    } 
    // Typing phase
    else {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Done typing, pause before deleting
        setIsPaused(true);
      }
    }
  }, [currentIndex, text, started, speed, deleteSpeed, isDeleting, displayedText, isPaused, pauseDuration]);

  return (
    <span className={className}>
      {displayedText}
      {!isPaused && (
        <span className="inline-block w-0.5 h-[0.9em] bg-foreground ml-1 animate-pulse" />
      )}
    </span>
  );
};
