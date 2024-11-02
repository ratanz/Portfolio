'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaHome, FaUser, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si';
import ShinyText from './ui/ShinyText'

gsap.registerPlugin(ScrollTrigger)

const Homepage = () => {

  const mainTitleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const techStackTitleRef = useRef<HTMLHeadingElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const connectTitleRef = useRef<HTMLParagraphElement>(null)
  const connectIconsRef = useRef<HTMLDivElement>(null)

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

    [mainTitleRef, subTitleRef, descriptionRef, techStackTitleRef, connectTitleRef, connectIconsRef].forEach(ref => {
      if (ref.current) animateGradientText(ref.current)
    })

    tl.fromTo(connectTitleRef.current,
      { x: 0, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.2 },
      '-=0.9'
    )

    tl.fromTo(connectIconsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.3 },
      '-=0.9'
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

    // icons animation
    tl.to(Array.from(iconsRef.current?.children || []),
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.2,
        ease: 'power3.out'
      },
      '-=0.7'  // This makes the icons animation start earlier
    )


    if (iconsRef.current) {
      gsap.set(Array.from(iconsRef.current.children), { opacity: 0, y: 20 })
    }
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
    <div className='content lg:min-h-[140vh] min-h-[80vh] lg:p-14 p-6 font-glorich w-full bg-neutral-950 '>
      <div className='flex flex-col items-start justify-center lg:mt-32 p-4 mt-40'>

        <h1 ref={mainTitleRef} className='lg:text-[5vw] md:text-[3vw] text-xl flex font-bold  self-center bg-gradient-to-t  from-zinc-300 to-zinc-500 bg-clip-text text-transparent lg:p-6 p-0'>
          Turning Caffeine Into Code.
        </h1>

        <h2 ref={subTitleRef} className={`lg:text-3xl text-[13px]  font-semibold self-center bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-wider lg:h-[6.3vh] pt-2 lg:mt-10 mt-10`}>
          Hey, I&apos;m Ratan Rathod
        </h2>
        <p ref={descriptionRef} className='lg:text-sm text-[10px] lg:mt-2 mt-1  font-normal text-center max-w-4xl mx-auto bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-wide leading-relaxed'>
          I&apos;m a frontend developer based in India, dedicated to building scalable
          websites and applications that make a meaningful impact. With a focus on user
          experience and design aesthetics, <br />
          I create engaging interfaces that captivate
          users while maintaining brand consistency.
        </p>

      </div>

      <div className='flex flex-col items-center justify-center lg:p-28 sm:mt-10 mt-24 '>
        <h1 ref={techStackTitleRef}>
          <ShinyText
            text="Tech Stack I Work With"
            className="lg:text-xl text-[16px] font-bold self-center tracking-wider p-2 uppercase"
          />
        </h1>

        <div ref={iconsRef} className="flex flex-wrap justify-center gap-3 mt-2 p-4">
          {[
            { Icon: FaReact, color: "blue-500", shadowColor: "#3B82F6", title: "React" },
            { Icon: SiNextdotjs, color: "black", shadowColor: "#000000", title: "Next.js" },
            { Icon: SiTailwindcss, color: "teal-500", shadowColor: "#14B8A6", title: "Tailwind CSS" },
            { Icon: SiExpress, color: "gray-500", shadowColor: "#6B7280", title: "Express.js" },
            { Icon: SiJavascript, color: "yellow-500", shadowColor: "#EAB308", title: "JavaScript" },
            { Icon: SiTypescript, color: "blue-600", shadowColor: "#2563EB", title: "TypeScript" },
            { Icon: FaGitAlt, color: "orange-500", shadowColor: "#F97316", title: "Git" },
            { Icon: FaGithub, color: "gray-800", shadowColor: "#1F2937", title: "GitHub" },
            { Icon: FaNpm, color: "red-500", shadowColor: "#EF4444", title: "npm" },
            { Icon: FaNodeJs, color: "green-600", shadowColor: "#16A34A", title: "Node.js" },
            { Icon: SiMongodb, color: "green-500", shadowColor: "#22C55E", title: "MongoDB" }
          ].map(({ Icon, color, shadowColor, title }) => (
            <Icon 
              key={title}
              className={`lg:text-3xl text-xl text-${color} transition-all duration-300 hover:scale-110`}
              style={{
                filter: `mix-blend-mode: soft-light drop-shadow(0 0 3px ${shadowColor})`
              }}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage
