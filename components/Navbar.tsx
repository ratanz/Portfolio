'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TransitionLink } from '../utils/TransitionLink'
// import { triggerPageTransition } from '../utils/animations'
import Magnetic from './ui/Magnetic'

gsap.registerPlugin();

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuContentRef = useRef(null)
  const menuIconRef = useRef(null)

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

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power3.out"
      });
      gsap.to(menuContentRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: 0.2,
        ease: "power3.out"
      });
      gsap.to(menuIconRef.current, {
        duration: 0.3,
        rotation: 180,
        ease: "power2.inOut"
      });
    } else {
      gsap.to(menuContentRef.current, {
        duration: 0.5,
        opacity: 0,
        y: 50,
        ease: "power3.in"
      });
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 0,
        y: "-100%",
        delay: 0.2,
        ease: "power3.in"
      });
      gsap.to(menuIconRef.current, {
        duration: 0.3,
        rotation: 0,
        ease: "power2.inOut"
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const menuItems = [
    { label: 'Projects', href: '/#projects' },
    { label: 'About', href: '/#about' },
    { label: 'Resume', href: '' }
  ];

  return (
    <>
      <div className={`content h-14 px-6 py-4 mt-4 flex justify-between items-center fixed top-0 left-0 right-0 transition-all duration-300 w-[80%] ml-[10%] rounded-full backdrop-blur-md z-[60] ${isScrolled
        ? 'bg-[#80808020] backdrop-blur-2xl'
        : 'bg-[#62626216] backdrop-blur-xl'
        }`}>
        <div className="logo-name flex items-center py-4">
          <TransitionLink href="/">
            <h1 className={`font-bold font-malven lg:text-xl md:text-lg text-xl
           bg-gradient-to-t from-zinc-400 to-zinc-600 bg-clip-text text-transparent`}>Ratan.</h1>
          </TransitionLink>
        </div>

        <div className="links hidden lg:flex lg:gap-10 gap-2 uppercase ">
          {menuItems.map((item) => (
            <Magnetic key={item.label}>
              <div className='relative group'>
                <TransitionLink href={item.href}>
                  <div className='overflow-hidden'>
                    <h2 className='hover:text-zinc-300 font-medium font-spacer36 lg:text-sm text-xs inline-block w-full bg-gradient-to-t from-zinc-400 to-zinc-700 bg-clip-text text-transparent transition-all duration-300'>
                      {item.label}
                    </h2>
                    <span className='block h-[1px] w-0 bg-zinc-700 absolute bottom-0 left-0 group-hover:w-full transition-all duration-300'></span>
                  </div>
                </TransitionLink>
              </div>
            </Magnetic>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-zinc-200 focus:outline-none w-6 h-6 relative z-[70]">
            <svg ref={menuIconRef} xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              {isMenuOpen ? (
                <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      <div
        ref={menuRef}
        className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center ${isMenuOpen ? '' : 'pointer-events-none'}`}
        style={{ opacity: 0, transform: 'translateY(-100%)' }}
      >
        <div
          ref={menuContentRef}
          className="text-center"
          style={{ opacity: 0, transform: 'translateY(50px)' }}
        >
          {menuItems.map((item) => (
            <div key={item.label} className="my-8">
              <TransitionLink href={item.href} onClick={() => setIsMenuOpen(false)}>
                <h2 className="text-4xl font-spacer36 text-zinc-300 hover:text-zinc-100 transition-colors duration-300">
                  {item.label}
                </h2>
              </TransitionLink>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

