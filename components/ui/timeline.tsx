"use client";
import {
  // useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  // useMotionValue,
  // useSpring,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// to create a card that tilts when hovered
// const TimelineCard = ({ children }: { children: React.ReactNode }) => {
//     const divRef = useRef<HTMLDivElement>(null);
//     const x = useMotionValue(0);
//     const y = useMotionValue(0);
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [opacity, setOpacity] = useState(0);

//     const mouseXSpring = useSpring(x);
//     const mouseYSpring = useSpring(y);
//     const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
//     const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

//     const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//         if (!divRef.current) return;

//         const rect = event.currentTarget.getBoundingClientRect();
//         const width = rect.width;
//         const height = rect.height;
//         const mouseX = event.clientX - rect.left;
//         const mouseY = event.clientY - rect.top;
//         const xPct = (mouseX / width) - 0.5;
//         const yPct = (mouseY / height) - 0.5;

//         x.set(xPct);
//         y.set(yPct);
//         setPosition({ x: mouseX, y: mouseY });
//     };

//     return (
//         <motion.div
//             style={{
//                 rotateX,
//                 rotateY,
//                 transformStyle: "preserve-3d",
//             }}
//             className="relative w-full"
//             transition={{
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 40,
//             }}
//         >
//             <motion.div
//                 ref={divRef}
//                 onMouseMove={handleMouseMove}
//                 onMouseEnter={() => setOpacity(0.6)}
//                 onMouseLeave={() => {
//                     setOpacity(0);
//                     x.set(0);
//                     y.set(0);
//                 }}
//                 style={{
//                     transform: "translateZ(75px)",
//                     transformStyle: "preserve-3d",
//                 }}
//                 className="relative"
//             >
//                 {children}
//                 <div
//                     className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out rounded-lg "
//                     style={{
//                         opacity,
//                         background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.13), transparent 90%)`,
//                     }}
//                 />
//             </motion.div>
//         </motion.div>
//     );
// };

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  // Refs to track DOM elements
  const ref = useRef<HTMLDivElement>(null); // Reference for the timeline container
  const containerRef = useRef<HTMLDivElement>(null); // Reference for the scroll container
  const [height, setHeight] = useState(0); // State to store timeline height

  // Calculate and set the total height of the timeline when component mounts
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // Transform scroll progress into animation values
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]); // For progress line height
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]); // For fade-in effect

  return (
    <div className="w-full bg-neutral-950 font-tanker md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-40">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-36 md:gap-10">
            {/* Timeline marker and title for larger screens */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Circular marker */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-950 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-zinc-400 border border-zinc-600" />
              </div>
              {/* Title for desktop view */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-zinc-100/70">
                {item.title}
              </h3>
            </div>

            {/* Content section */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Title for mobile view */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-zinc-100/70">
                {item.title}
              </h3>
              {/* <TimelineCard> */}
                {item.content}
              {/* </TimelineCard> */}
            </div>
          </div>
        ))}

        {/* Animated timeline progress line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-zinc-600 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated progress indicator */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-400 via-zinc-400 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
