"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiFramer,
  SiFigma,
  SiCplusplus,
  SiRust,
  SiGo,
  SiVite,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import Magnetic from "./ui/Magnetic";
import ShinyText from "./ui/ShinyText";
import { useClickSound } from "../hooks/useClickSound";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const techStackTitleRef = useRef<HTMLHeadingElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const { handleClick } = useClickSound();
  
  const techStack = [
    {
      icon: (
        <FaReact className="text-2xl sm:text-4xl lg:text-5xl text-blue-500 cursor-pointer drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
      ),
      url: "https://react.dev/",
      title: "React",
    },
    {
      icon: (
        <SiNextdotjs className="text-2xl sm:text-4xl lg:text-5xl text-zinc-500 cursor-pointer drop-shadow-[0_0_12px_rgba(45,44,44,0.66)]" />
      ),
      url: "https://nextjs.org/",
      title: "Next.js",
    },
    {
      icon: (
        <SiTailwindcss className="text-2xl sm:text-4xl lg:text-5xl text-teal-500 cursor-pointer drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
      ),
      url: "https://tailwindcss.com/",
      title: "Tailwind CSS",
    },
    {
      icon: (
        <SiExpress className="text-2xl sm:text-4xl lg:text-5xl text-gray-500 cursor-pointer drop-shadow-[0_0_8px_rgba(107,114,128,0.5)]" />
      ),
      url: "https://expressjs.com/",
      title: "Express.js",
    },
    {
      icon: (
        <SiJavascript className="text-2xl sm:text-4xl lg:text-5xl text-yellow-500 cursor-pointer drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
      ),
      url: "https://www.javascript.com/",
      title: "JavaScript",
    },
    {
      icon: (
        <SiTypescript className="text-2xl sm:text-4xl lg:text-5xl text-blue-600 cursor-pointer drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
      ),
      url: "https://www.typescriptlang.org/",
      title: "TypeScript",
    },
    {
      icon: (
        <FaGitAlt className="text-2xl sm:text-4xl lg:text-5xl text-orange-500 cursor-pointer drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
      ),
      url: "https://git-scm.com/",
      title: "Git",
    },
    {
      icon: (
        <FaGithub className="text-2xl sm:text-4xl lg:text-5xl text-gray-600 cursor-pointer drop-shadow-[0_0_8px_rgba(31,41,55,0.5)]" />
      ),
      url: "https://github.com/",
      title: "GitHub",
    },
    {
      icon: (
        <FaNpm className="text-2xl sm:text-4xl lg:text-5xl text-red-500 cursor-pointer drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
      ),
      url: "https://www.npmjs.com/",
      title: "npm",
    },
    {
      icon: (
        <FaNodeJs className="text-2xl sm:text-4xl lg:text-5xl text-green-600 cursor-pointer drop-shadow-[0_0_8px_rgba(22,163,74,0.5)]" />
      ),
      url: "https://nodejs.org/",
      title: "Node.js",
    },
    {
      icon: (
        <SiMongodb className="text-2xl sm:text-4xl lg:text-5xl text-green-500 cursor-pointer drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
      ),
      url: "https://www.mongodb.com/",
      title: "MongoDB",
    },
    {
      icon: (
        <SiFramer className="text-2xl sm:text-4xl lg:text-5xl text-purple-500 cursor-pointer drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
      ),
      url: "https://www.framer.com/motion/",
      title: "Framer Motion",
    },
    {
      icon: (
        <SiFigma className="text-2xl sm:text-4xl lg:text-5xl text-pink-500 cursor-pointer drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
      ),
      url: "https://www.figma.com/",
      title: "Figma",
    },
    {
      icon: (
        <SiCplusplus className="text-2xl sm:text-4xl lg:text-5xl text-blue-700 cursor-pointer drop-shadow-[0_0_8px_rgba(0,0,255,0.5)]" />
      ),
      url: "https://isocpp.org/",
      title: "C++",
    },
    {
      icon: (
        <FaJava className="text-2xl sm:text-4xl lg:text-5xl text-red-700 cursor-pointer drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
      ),
      url: "https://www.java.com/",
      title: "Java",
    },
    {
      icon: (
        <SiRust className="text-2xl sm:text-4xl lg:text-5xl text-orange-700 cursor-pointer drop-shadow-[0_0_8px_rgba(255,165,0,0.3)]" />
      ),
      url: "https://www.rust-lang.org/",
      title: "Rust",
    },
    {
      icon: (
        <SiGo className="text-2xl sm:text-4xl lg:text-5xl text-teal-700 cursor-pointer drop-shadow-[0_0_8px_rgba(0,128,128,0.5)]" />
      ),
      url: "https://golang.org/",
      title: "Go",
    },
    {
      icon: (
        <SiVite className="text-2xl sm:text-4xl lg:text-5xl text-purple-600 cursor-pointer drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
      ),
      url: "https://vitejs.dev/",
      title: "Vite",
    },
  ];

  useEffect(() => {
    // Set initial state for tech stack title
    gsap.set(techStackTitleRef.current, { opacity: 0, y: 30 });

    // Tech stack title animation with ScrollTrigger
    gsap.fromTo(
      techStackTitleRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.1,
        stagger: 0.1,

        ease: "power3.out",
        scrollTrigger: {
          trigger: techStackTitleRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Set initial state for icons
    if (iconsRef.current) {
      gsap.set(Array.from(iconsRef.current.children), { opacity: 0, y: 20 });

      // Icons animation with ScrollTrigger
      gsap.to(Array.from(iconsRef.current.children), {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[70vh] pt-2 sm:pt-20 lg:pt-36"
      id="tech-stack"
    >
      <h1 ref={techStackTitleRef}>
        <ShinyText
          text="Tech Stack"
          className="text-base sm:text-xl lg:text-5xl font-bold tracking-wider"
        />
      </h1>

      <div
        ref={iconsRef}
        className="grid lg:grid-cols-9 md:grid-cols-2 grid-cols-6 lg:gap-12 gap-10 mt-6 rounded-lg lg:p-14 p-6"
      >
        {techStack.map((tech, index) => (
          <Magnetic key={index}>
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              title={tech.title}
              onClick={handleClick()}
            >
              {tech.icon}
            </a>
          </Magnetic>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
