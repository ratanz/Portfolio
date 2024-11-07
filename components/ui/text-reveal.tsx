"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 85%", "end 30%"],
  });
  
  const words = text.split(" ");

  return (
    <motion.p 
      ref={targetRef} 
      className={className}
    >
      {words.map((word, i) => {
        const start = i / (words.length * 1.7);
        const end = start + (1 / (words.length * 1.2));
        return (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </motion.p>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const translateY = useTransform(progress, range, [20, 0]);

  return (
    <motion.span
      className="inline-block mx-[0.15em]"
      style={{ 
        opacity,
        y: translateY,
      }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.span>
  );
};

export default TextRevealByWord;
