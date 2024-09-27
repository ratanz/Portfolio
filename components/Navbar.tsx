'use client'

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { TransitionLink } from '../utils/TransitionLink'
// import { triggerPageTransition } from '../utils/animations'
import Magnetic from './ui/Magnetic'

gsap.registerPlugin();

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  // const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault()
  //   const href = e.currentTarget.getAttribute('href')
  //   triggerPageTransition(() => {
  //     window.location.href = href || '/'
  //   })
  // }
  
  return (
    <div className={`content h-14 px-6 py-4 mt-4 flex justify-between items-center fixed top-0 left-0 right-0 transition-all duration-300 w-[80%] ml-[10%] rounded-full backdrop-blur-md z-50 ${
      isScrolled
        ? 'bg-[#80808020] backdrop-blur-2xl'
        : 'bg-[#62626216] backdrop-blur-xl'
    }`}>
      <div className="logo-name flex items-center py-4">
        <TransitionLink href="/">
          <h1 className={` font-bold font-malven text-xl
           bg-gradient-to-t from-zinc-400 to-zinc-600 bg-clip-text text-transparent`}>R A T A N</h1>
        </TransitionLink>
      </div>

      <div className="links flex gap-10 uppercase ">
        {[
          { label: 'Projects', href: '/#projects' },
          { label: 'About', href: '/#about' },
          // { label: 'Contact', href: '/contact' },
          { label: 'Resume', href: '' }
        ].map((item) => (
          <Magnetic key={item.label}>
            <div className='relative group'>
              <TransitionLink href={item.href}>
                <div className='overflow-hidden'>
                  <h2 className='hover:text-zinc-300 font-medium font-spacer36 text-sm inline-block w-full bg-gradient-to-t from-zinc-400 to-zinc-700 bg-clip-text text-transparent transition-all duration-300'>
                    {item.label}
                  </h2>
                  <span className='block h-[1px] w-0 bg-zinc-700 absolute bottom-0 left-0 group-hover:w-full transition-all duration-300'></span>
                </div>
              </TransitionLink>
            </div>
          </Magnetic>
        ))}
      </div>
    </div>
  )
}