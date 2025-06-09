"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TechStack from "./TechStack";
import { MdEmail } from "react-icons/md";
import Magnetic from "./ui/Magnetic";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // main title animation
    tl.fromTo(
      mainTitleRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );

    // sub title and description animation
    tl.fromTo(
      [subTitleRef.current, descriptionRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.2, ease: "power3.out" },
      "-=0.9"
    );

    // Add image animation after the main title but before subtitle
    tl.fromTo(
      imageContainerRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.7,
        ease: "power3.out",
      }
    );

    // gradient text animation
    const animateGradientText = (element: HTMLElement) => {
      tl.fromTo(
        element,
        { backgroundSize: "0% 100%", opacity: 0 },
        {
          backgroundSize: "100% 100%",
          opacity: 1,
          duration: 1.2,
          scrub: 1,
          stagger: 0.6,
          ease: "power2.out",
        },
        "-=0.9"
      );
    };

    [mainTitleRef, subTitleRef, descriptionRef].forEach((ref) => {
      if (ref.current) animateGradientText(ref.current);
    });

    // icons animation
    tl.fromTo(
      iconsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <div className="content min-h-screen w-full font-pretendard px-4 py-8 md:p-14">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row min-h-[30rem] items-center justify-between max-w-6xl mx-auto mt-6 sm:mt-8 lg:mt-16 px-4 sm:px-8 lg:px-10 gap-6 sm:gap-8">
        <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-[65%]  space-y-5 sm:space-y-5">
          <h2
            ref={subTitleRef}
            className="text-lg sm:text-4xl md:text-lg lg:text-lg font-light leading-tight tracking-tight bg-gradient-to-t from-zinc-300 to-zinc-500 bg-clip-text text-transparent text-center lg:text-left uppercase"
          >
            Frontend Developer
          </h2>

          <h1
            ref={mainTitleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight bg-gradient-to-t from-zinc-300 to-zinc-500 bg-clip-text text-transparent text-center lg:text-left border-b border-zinc-100/40 pb-4"
          >
            Turning Caffeine
            <br />
            Into Code.
          </h1>

          <p
            ref={descriptionRef}
            className="text-sm  sm:text-base lg:text-lg font-light bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-wide leading-relaxed text-center lg:text-left max-w-lg"
          >
            Hey,I&apos;m
            <span className="font-bold"> Ratan Rathod </span>
            I&apos;m a frontend developer based in India, dedicated to building
            scalable websites and applications that make a meaningful impact.
            With a focus on user experience and design aesthetics.
          </p>

          <div
            ref={iconsRef}
            className="icons flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-4"
          >
            <Magnetic>
              <a
                href="https://github.com/ratanz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 w-fit
                                          bg-zinc-900/50 p-2 rounded-md hover:text-zinc-100 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://linkedin.com/in/ratanrathod7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 w-fit bg-zinc-900/50 p-2 rounded-md hover:text-zinc-100 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://twitter.com/ratanz_codes"
                target="_blank"
                rel=""
                className="text-zinc-400 bg-zinc-900/50 p-2 rounded-md hover:text-zinc-100 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="mailto:ratanrathod870@gmail.com"
                className="text-zinc-400 bg-zinc-900/50 p-2 rounded-md hover:text-zinc-100 transition-colors"
              >
                <MdEmail className="w-6 h-6" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="w-full sm:w-2/3 lg:w-[30%] flex justify-center  mt-16 lg:mt-4">
          <div
            ref={imageContainerRef}
            className="pic relative rounded-xl w-full h-full sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden transform hover:scale-[1.04] transition-all duration-300 shadow-[0_3px_10px_rgba(255,255,255,0.1)]"
            style={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent z-10"></div>
            <Image
              src="/images/me3.jpg"
              alt="Ratan Rathod"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <TechStack />
    </div>
  );
};

export default Homepage;
