'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '@/styles/Homepage.module.css'
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
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
        duration: 0.4,
        ease: 'power3.out',
      }
    )

    // sub title and description animation
    tl.fromTo([subTitleRef.current, descriptionRef.current, techStackTitleRef.current, iconsRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
      '-=0.9'
    )


    const animateGradientText = (element: HTMLElement) => {
      tl.fromTo(element,
        { backgroundSize: '0% 100%', opacity: 0 },
        { backgroundSize: '100% 100%', opacity: 1, duration: 1.2, scrub: 0.8, stagger: 0.2, ease: 'power2.out' },
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
      { y: 0, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.2 },
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
 
    useEffect(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,  // Increased for smoother scrolling
          toggleActions: "play none none reverse"
        }
      })

      scrollTl.to(mainTitleRef.current, { 
        y: -120, 
        opacity: 0, 
        scrub: 2,
        duration: 2.5,
        ease: "power3.inOut"
      })
  
      scrollTl.to(subTitleRef.current, { 
        y: -100, 
        opacity: 0, 
        duration: 2.5,
        stagger: 0.3,
        ease: "power3.inOut"
      }, "-=2")
  
      scrollTl.to(descriptionRef.current, { 
        y: 40, 
        opacity: 0,
        duration: 3,
        scrub: 3,
        stagger: 0.3,
        ease: "power3.out",
      }, "-=2.5")
  
      
      scrollTl.to(connectTitleRef.current, { 
        y: 50, 
        opacity: 0, 
        duration: 1.9,
        delay: 0.9,
        stagger: 0.2,
        scrub: 4,
        ease: "power3.out"
      }, "-=3.8")
  
    scrollTl.to(connectIconsRef.current, { 
      y: 50, 
      opacity: 0,
      duration: 1.2,
      scrub: 3,
      ease: "power3.out"
    }, "-=0.23")
  
  
    scrollTl.to(techStackTitleRef.current, { 
      y: -60, 
      opacity: 0, 
      duration: 2.5,
      ease: "power3.inOut"
    }, "-=2.2")
  
    if (iconsRef.current) {
      scrollTl.to(Array.from(iconsRef.current.children), { 
        y: -40, 
        opacity: 0, 
        delay: 0.40,
        duration: 1.3,
        stagger: 0.3,  // Increased for slower sequential fade
        ease: "power3.inout"
      }, "-=0.4")
    }
  
    return () => {
      scrollTl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className='content h-full p-14 font-pretendard w-full bg-gradient-to-t from-zinc-400 to-zinc-200'>
      <div className='flex flex-col items-start justify-center mt-24'>

        <h1 ref={mainTitleRef} className='text-[5.2vw] font-bold self-center bg-gradient-to-t  from-zinc-500 to-zinc-700 bg-clip-text text-transparent p-6'>
          Turning Caffeine Into Code.
        </h1>

        <h2 ref={subTitleRef} className={`text-4xl font-semibold self-center bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent tracking-wider p-2 mt-10 `}>
          Hey, I'm Ratan Rathod
        </h2>

        <p ref={descriptionRef} className='text-sm mt-2  font-medium text-center max-w-2xl mx-auto bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent tracking-wide leading-relaxed'>
          I'm a frontend developer based in India,
          dedicated to building scalable websites and applications that make a meaningful impact.
          With a focus on user experience, design aesthetics, and developer satisfaction,
          I create interfaces and experiences that captivate users and align with brand identities.
        </p>

        <div className="connect flex flex-col items-center justify-center mt-6 w-full">
          <p ref={connectTitleRef} className='text-xl font-semibold bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent tracking-wider'>Lets connect</p>
          <div ref={connectIconsRef} className="flex space-x-4 mt-2">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>


      <div className='flex flex-col items-center justify-center mt-20'>
        <h1 ref={techStackTitleRef} className={`text-xl font-bold self-center tracking-wider p-2 uppercase ${styles.animatedGradientText}`}>
          Cool tech stack i work with
        </h1>

        <div ref={iconsRef} className="flex flex-wrap justify-center gap-4 mt-2">
          <FaReact className="text-4xl text-blue-500" title="React" />
          <SiNextdotjs className="text-4xl text-black" title="Next.js" />
          <SiTailwindcss className="text-4xl text-teal-500" title="Tailwind CSS" />
          <SiExpress className="text-4xl text-gray-500" title="Express.js" />
          <SiJavascript className="text-4xl text-yellow-500" title="JavaScript" />
          <SiTypescript className="text-4xl text-blue-600" title="TypeScript" />
          <FaGitAlt className="text-4xl text-orange-500" title="Git" />
          <FaGithub className="text-4xl text-gray-800" title="GitHub" />
          <FaNpm className="text-4xl text-red-500" title="npm" />
          <FaNodeJs className="text-4xl text-green-600" title="Node.js" />
          <SiMongodb className="text-4xl text-green-500" title="MongoDB" />
        </div>
      </div>

    </div>
  )
}

export default Homepage

