'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiJavascript, SiTypescript, SiMongodb, SiFramer, SiFigma, SiCplusplus, SiRust, SiGo, SiVite } from 'react-icons/si';
import ShinyText from './ui/ShinyText'
import Image from 'next/image';
import Magnetic from './ui/Magnetic';

gsap.registerPlugin(ScrollTrigger)

const Homepage = () => {

  const mainTitleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const techStackTitleRef = useRef<HTMLHeadingElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // main title animation
    tl.fromTo(mainTitleRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      }
    )

    // sub title and description animation
    tl.fromTo([subTitleRef.current, descriptionRef.current, iconsRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.3, stagger: 0.3, ease: 'power3.out' },
      '-=0.9'
    )

    // gradient text animation
    const animateGradientText = (element: HTMLElement) => {
      tl.fromTo(element,
        { backgroundSize: '0% 100%', opacity: 0 },
        { backgroundSize: '100% 100%', opacity: 1, duration: 1.2, scrub: 1, stagger: 0.6, ease: 'power2.out' },
        '-=0.8'
      )
    }

    [mainTitleRef, subTitleRef, descriptionRef, imageContainerRef, techStackTitleRef].forEach(ref => {
      if (ref.current) animateGradientText(ref.current)
    })
  
    // Add image animation after the main title but before subtitle
    tl.fromTo(imageContainerRef.current,
      { x: 25, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.3'  // Slight overlap with previous animation
    )

    // tech stack title animation
    tl.to(techStackTitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        yoyo: true,
        ease: 'power3.out',
      },
      '-=0.59'
    )

    // Set initial state for icons
    gsap.set(Array.from(iconsRef.current?.children || []), { opacity: 0, y: 20 })

    // Icons animation with ScrollTrigger
    gsap.to(Array.from(iconsRef.current?.children || []), {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: iconsRef.current,
        start: 'top 90%', // Start animation when icons are 80% into the viewport
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  // scroll animation when scroll back to top
  //   useEffect(() => {
  //     const scrollTl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: mainTitleRef.current,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 1.5,  // Increased for smoother scrolling
  //         toggleActions: "play none none reverse"
  //       }
  //     })

  //     scrollTl.to(mainTitleRef.current, { 
  //       y: -120, 
  //       opacity: 0, 
  //       scrub: 2,
  //       duration: 2.5,
  //       ease: "power3.inOut"
  //     })

  //     scrollTl.to(subTitleRef.current, { 
  //       y: -100, 
  //       opacity: 0, 
  //       duration: 2.5,
  //       stagger: 0.3,
  //       ease: "power3.inOut"
  //     }, "-=2")

  //     scrollTl.to(descriptionRef.current, { 
  //       y: 40, 
  //       opacity: 0,
  //       duration: 2.3,
  //       scrub: 3,
  //       stagger: 0.3,
  //       ease: "power3.out",
  //     }, "-=2.5")


  //     scrollTl.to(connectTitleRef.current, { 
  //       y: 50, 
  //       opacity: 0, 
  //       duration: 1.9,
  //       delay: 0.9,
  //       stagger: 0.2,
  //       scrub: 4,
  //       ease: "power3.out"
  //     }, "-=3.8")

  //   scrollTl.to(connectIconsRef.current, { 
  //     y: 50, 
  //     opacity: 0,
  //     duration: 1.2,
  //     scrub: 3,
  //     ease: "power3.out"
  //   }, "-=0.23")


  //   scrollTl.to(techStackTitleRef.current, { 
  //     y: -60, 
  //     opacity: 0, 
  //     duration: 2.5,
  //     ease: "power3.inOut"
  //   }, "-=2.2")

  //   if (iconsRef.current) {
  //     scrollTl.to(Array.from(iconsRef.current.children), { 
  //       y: -40, 
  //       opacity: 0, 
  //       delay: 0.40,
  //       duration: 1.3,
  //       stagger: 0.3,  // Increased for slower sequential fade
  //       ease: "power3.inout"
  //     }, "-=0.4")
  //   }

  //   return () => {
  //     scrollTl.kill()
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  //   }
  // }, [])

  return (
    <div className='content lg:h-[190vh] w-full bg-neutral-950 font-tanker px-4 py-8 md:p-14'>
      <div className='flex flex-col-reverse lg:flex-row min-h-[30rem] lg:h-[35rem] items-center justify-between max-w-7xl mx-auto mt-10 lg:mt-16 px-4 sm:px-8 lg:px-12 gap-8 lg:gap-16'>

        <div className="flex flex-col items-center lg:items-start justify-center lg:w-1/2 space-y-6">
          <h1 ref={mainTitleRef} className='text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-t from-zinc-300 to-zinc-500 bg-clip-text text-transparent text-center lg:text-left'>
            Turning Caffeine Into Code.
          </h1>

          <h2 ref={subTitleRef} className='text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-wider text-center lg:text-left'>
            Hey, I&apos;m Ratan Rathod
          </h2>

          <p ref={descriptionRef} className='text-sm sm:text-base lg:text-lg font-normal bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-wide leading-relaxed text-center lg:text-left max-w-2xl'>
            I&apos;m a frontend developer based in India, dedicated to building scalable websites and applications that make a meaningful impact. With a focus on user experience and design aesthetics, I create engaging interfaces that captivate users while maintaining brand consistency.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div
            ref={imageContainerRef}
            className="pic relative rounded-2xl w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden transform hover:scale-[1.04] transition-all duration-300"
            style={{ opacity: 0 }} // Ensure initial opacity is 0
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent z-10"></div>
            <Image
              src="/images/me.jpg"
              alt="Ratan Rathod"
              width={500}
              height={500}
              className='w-full h-full object-cover'
              priority
            />
          </div>
        </div>

      </div>

      <div className='flex flex-col items-center justify-center  h-[60vh] lg:pt-36 pt-14 lg:mt-0 '>
        <h1 ref={techStackTitleRef}>
          <ShinyText
            text="Tech Stack I Work With"
            className="lg:text-3xl text-[16px] font-bold self-center tracking-wider p-2 uppercase"
          />
        </h1>
        
        <div ref={iconsRef} className="grid lg:grid-cols-6 grid-cols-6 lg:gap-16 gap-6 mt-4 border-2 border-zinc-800 rounded-lg lg:p-14 p-10">
          <Magnetic>
            <a href='https://react.dev/' target="_blank" rel="noopener noreferrer">
              <FaReact className="lg:text-5xl text-3xl text-blue-500 cursor-pointer drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" title="React" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://nextjs.org/' target="_blank" rel="noopener noreferrer">
              <SiNextdotjs className="lg:text-5xl text-3xl text-zinc-500 cursor-pointer drop-shadow-[0_0_12px_rgba(45,44,44,0.66)]" title="Next.js" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://tailwindcss.com/' target="_blank" rel="noopener noreferrer">
              <SiTailwindcss className="lg:text-5xl text-3xl text-teal-500 cursor-pointer drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]" title="Tailwind CSS" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://expressjs.com/' target="_blank" rel="noopener noreferrer">
              <SiExpress className="lg:text-5xl text-3xl text-gray-500 cursor-pointer drop-shadow-[0_0_8px_rgba(107,114,128,0.5)]" title="Express.js" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://www.javascript.com/' target="_blank" rel="noopener noreferrer">
              <SiJavascript className="lg:text-5xl text-3xl text-yellow-500 cursor-pointer drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" title="JavaScript" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://www.typescriptlang.org/' target="_blank" rel="noopener noreferrer">
              <SiTypescript className="lg:text-5xl text-3xl text-blue-600 cursor-pointer drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" title="TypeScript" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://git-scm.com/' target="_blank" rel="noopener noreferrer">
              <FaGitAlt className="lg:text-5xl text-3xl text-orange-500 cursor-pointer drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" title="Git" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
              <FaGithub className="lg:text-5xl text-3xl text-gray-600 cursor-pointer drop-shadow-[0_0_8px_rgba(31,41,55,0.5)]" title="GitHub" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://www.npmjs.com/' target="_blank" rel="noopener noreferrer">
              <FaNpm className="lg:text-5xl text-3xl text-red-500 cursor-pointer drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" title="npm" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://nodejs.org/' target="_blank" rel="noopener noreferrer">
              <FaNodeJs className="lg:text-5xl text-3xl text-green-600 cursor-pointer drop-shadow-[0_0_8px_rgba(22,163,74,0.5)]" title="Node.js" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer">
              <SiMongodb className="lg:text-5xl text-3xl text-green-500 cursor-pointer drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" title="MongoDB" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://www.framer.com/motion/' target="_blank" rel="noopener noreferrer">
              <SiFramer className="lg:text-5xl text-3xl text-purple-500 cursor-pointer drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" title="Framer Motion" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://www.figma.com/' target="_blank" rel="noopener noreferrer">
              <SiFigma className="lg:text-5xl text-3xl text-pink-500 cursor-pointer drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" title="Figma" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://isocpp.org/' target="_blank" rel="noopener noreferrer">
              <SiCplusplus className="lg:text-5xl text-3xl text-blue-700 cursor-pointer drop-shadow-[0_0_8px_rgba(0,0,255,0.5)]" title="C++" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://www.java.com/' target="_blank" rel="noopener noreferrer">
              <FaJava className="lg:text-5xl text-3xl text-red-700 cursor-pointer drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" title="Java" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://www.rust-lang.org/' target="_blank" rel="noopener noreferrer">
              <SiRust className="lg:text-5xl text-3xl text-orange-700 cursor-pointer drop-shadow-[0_0_8px_rgba(255,165,0,0.3)]" title="Rust" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://golang.org/' target="_blank" rel="noopener noreferrer">
              <SiGo className="lg:text-5xl text-3xl text-teal-700 cursor-pointer drop-shadow-[0_0_8px_rgba(0,128,128,0.5)]" title="Go" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href='https://vitejs.dev/' target="_blank" rel="noopener noreferrer">
              <SiVite className="lg:text-5xl text-3xl text-purple-600 cursor-pointer drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" title="Vite" />
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  )
}

export default Homepage
