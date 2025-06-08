'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import TechStack from './TechStack'

gsap.registerPlugin(ScrollTrigger)

const Homepage = () => {

  const mainTitleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
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
    tl.fromTo([subTitleRef.current, descriptionRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.2, ease: 'power3.out' },
      '-=0.9'
    )

     // Add image animation after the main title but before subtitle
     tl.fromTo(imageContainerRef.current,
      { opacity: 0 , scale: 0.9},
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out',
      },
    )

    // gradient text animation
    const animateGradientText = (element: HTMLElement) => {
      tl.fromTo(element,
        { backgroundSize: '0% 100%', opacity: 0 },
        { backgroundSize: '100% 100%', opacity: 1, duration: 1.2, scrub: 1, stagger: 0.6, ease: 'power2.out' },
        '-=0.9'
      )
    }

    [mainTitleRef, subTitleRef, descriptionRef].forEach(ref => {
      if (ref.current) animateGradientText(ref.current)
    })
  
  }, [])


  return (
    <div className='content min-h-screen w-full bg-gradient-to-br from-black via-zinc-950 to-black font-pretendard px-4 py-8 md:p-14'>
      {/* Hero Section */}
      <div className='flex flex-col-reverse lg:flex-row min-h-[30rem] items-center justify-between max-w-7xl mx-auto mt-6 sm:mt-8 lg:mt-16 px-4 sm:px-8 lg:px-12 gap-6 sm:gap-8 lg:gap-16'>
        
        <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-[70%] space-y-4 sm:space-y-6">
          <h1 ref={mainTitleRef} className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-t from-zinc-300 to-zinc-500 bg-clip-text text-transparent text-center lg:text-left'>
            Turning Caffeine Into Code.
          </h1>

          <h2 ref={subTitleRef} className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-wider text-center lg:text-left'>
            Hey, I&apos;m Ratan Rathod
          </h2>

          <p ref={descriptionRef} className='text-sm sm:text-base lg:text-lg font-normal bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent tracking-wide leading-relaxed text-center lg:text-left max-w-2xl'>
            I&apos;m a frontend developer based in India, dedicated to building scalable websites and applications that make a meaningful impact. With a focus on user experience and design aesthetics, I create engaging interfaces that captivate users while maintaining brand consistency.
          </p>
        </div>

        <div className="w-full sm:w-2/3 lg:w-[30%] flex justify-center lg:justify-end mt-16 lg:mt-0">
          <div
            ref={imageContainerRef}
            className="pic relative rounded-2xl w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden transform hover:scale-[1.04] transition-all duration-300"
            style={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent z-10"></div>
            <Image
              src="/images/me3.jpg"
              alt="Ratan Rathod"
              width={500}
              height={500}
              className='w-full h-full object-cover'
              priority
            />
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <TechStack />
    </div>
  )
}

export default Homepage