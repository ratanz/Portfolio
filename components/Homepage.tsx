'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si';


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
        duration: 0.3,
        ease: 'power3.out',
      }
    )

    // sub title and description animation
    tl.fromTo([subTitleRef.current, descriptionRef.current, techStackTitleRef.current, iconsRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.3, stagger: 0.3, ease: 'power3.out' },
      '-=0.9'
    )


    const animateGradientText = (element: HTMLElement) => {
      tl.fromTo(element,
        { backgroundSize: '0% 100%', opacity: 0 },
        { backgroundSize: '100% 100%', opacity: 1, duration: 0.9, scrub: 0.8, stagger: 0.2, ease: 'power2.out' },
        '-=0.8'
      )
    }

    animateGradientText(mainTitleRef.current!)
    animateGradientText(subTitleRef.current!)
    animateGradientText(descriptionRef.current!)
    animateGradientText(techStackTitleRef.current!)
    animateGradientText(connectTitleRef.current!)
    animateGradientText(connectIconsRef.current!)

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
        duration: 0.3,
        stagger: 0.2,
        ease: 'back.out(1.4)'
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
    <div className='content lg:min-h-[100vh] min-h-[80vh] lg:p-14 p-6 font-glorich w-full bg-zinc-900'>
      <div className='flex flex-col items-start justify-center lg:mt-32 p-4 mt-40'>

        <h1 ref={mainTitleRef} className='lg:text-[5vw] md:text-[3vw] text-xl flex font-bold  self-center bg-gradient-to-t  from-zinc-300 to-zinc-500 bg-clip-text text-transparent lg:p-6 p-0'>
          Turning Caffeine Into Code.
        </h1>

        <h2 ref={subTitleRef} className={`lg:text-3xl text-[13px]  font-semibold self-center bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-wider lg:h-[6.3vh] pt-2 lg:mt-6 mt-10`}>
          Hey, I&apos;m Ratan Rathod
        </h2>

        <p ref={descriptionRef} className='lg:text-sm text-[10px] lg:mt-2 mt-1  font-normal text-center max-w-2xl mx-auto bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-wide leading-loose'>
          I&apos;m a frontend developer based in India,
          dedicated to building scalable websites and applications that make a meaningful impact.
          With a focus on user experience, design aesthetics, and developer satisfaction,
          I create interfaces and experiences that captivate users and align with brand identities.
        </p>

      </div>

      <div className='flex flex-col items-center justify-center lg:p-28 sm:mt-10 mt-24 '>
        <h1 ref={techStackTitleRef} className={`lg:text-xl text-[16px] font-bold self-center tracking-wider p-2 uppercase bg-gradient-to-t from-zinc-300 to-zinc-500 bg-clip-text text-transparent `}>
          Cool tech stack i work with
        </h1>

        <div ref={iconsRef} className="flex flex-wrap justify-center gap-3 mt-2">
          <FaReact className="lg:text-4xl text-xl text-blue-500" title="React" />
          <SiNextdotjs className="lg:text-4xl text-xl text-black" title="Next.js" />
          <SiTailwindcss className="lg:text-4xl text-xl text-teal-500" title="Tailwind CSS" />
          <SiExpress className="lg:text-4xl text-xl text-gray-500" title="Express.js" />
          <SiJavascript className="lg:text-4xl text-xl text-yellow-500" title="JavaScript" />
          <SiTypescript className="lg:text-4xl text-xl text-blue-600" title="TypeScript" />
          <FaGitAlt className="lg:text-4xl text-xl text-orange-500" title="Git" />
          <FaGithub className="lg:text-4xl text-xl text-gray-800" title="GitHub" />
          <FaNpm className="lg:text-4xl text-xl text-red-500" title="npm" />
          <FaNodeJs className="lg:text-4xl text-xl text-green-600" title="Node.js" />
          <SiMongodb className="lg:text-4xl text-xl text-green-500" title="MongoDB" />
        </div>
      </div>

    </div>
  )
}

export default Homepage

