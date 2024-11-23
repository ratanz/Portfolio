'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    const exitTl = gsap.timeline({ paused: true });

    if (titleRef.current && loaderRef.current) {
      // Initial background reveal
      tl.fromTo(loaderRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.inOut' }
      );

      // Letters entrance - simplified but effective
      tl.fromTo(letterRefs.current, 
        {
          opacity: 0,
          y: 20,
          scale: 0.5
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: {
            each: 0.05,
            from: "start"
          },
          ease: "back.out(1.7)"
        }
      );

      // Continuous floating animation
      tl.to(letterRefs.current, {
        y: "random(-5, 5)",
        duration: 2,
        stagger: {
          each: 0.05,
          repeat: -1,
          yoyo: true
        },
        ease: "power1.inOut"
      }, "-=0.5");

      // Exit animation
      exitTl.to(letterRefs.current, {
        y: -30,
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        stagger: {
          each: 0.03,
          from: "start"
        },
        ease: "back.in(2)"
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: onLoadingComplete
      }, "-=0.3");
    }

    // Trigger exit animation after 4 seconds
    gsap.delayedCall(4, () => exitTl.play());

    return () => {
      tl.kill();
      exitTl.kill();
    };
  }, [onLoadingComplete]);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        ref={el => {
          if (el) letterRefs.current[index] = el;
        }}
        className={`inline-block ${char === ' ' ? 'w-[0.5em]' : ''}`}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div ref={loaderRef} className="fixed inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950 z-[100] flex items-center justify-center overflow-hidden">
      <h1 ref={titleRef} className="text-zinc-300 text-[7vw] font-bold tracking-wider font-tanker">
        {splitText('This is Ratan.')}
      </h1>
    </div>
  );
};

export default Loader;