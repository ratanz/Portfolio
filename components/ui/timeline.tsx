"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}


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
    <div className="w-full font-tanker pt-6 md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-40">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-36 md:gap-10">
            {/* Timeline marker and title for larger screens */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Circular marker */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-950 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-zinc-200 border border-zinc-600" />
              </div>
              {/* Title for desktop view */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-zinc-100">
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
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-zinc-500 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated progress indicator */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-400 via-blue-600 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
