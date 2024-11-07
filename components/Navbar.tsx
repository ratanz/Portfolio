'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TransitionLink } from '../utils/TransitionLink'
// import { triggerPageTransition } from '../utils/animations'
import Magnetic from './ui/Magnetic'
import ShinyText from './ui/ShinyText'
gsap.registerPlugin();

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const menuRef = useRef(null)
  const menuContentRef = useRef(null)
  const menuIconRef = useRef(null)
  const navbarRef = useRef(null)

  // Navbar Visibility
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = window.scrollY > 0
      setIsScrolled(scrolled)

      if (currentScrollY <= 0) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  useEffect(() => {
    gsap.to(navbarRef.current, {
      duration: 0.3,
      y: isVisible ? 0 : '-200%',
      ease: 'power3.out'
    })
  }, [isVisible])

  // Hamburger Menu Animation
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.out"
      });
      gsap.to(menuContentRef.current, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        delay: 0.2,
        ease: "power3.out"
      });
      gsap.to(menuIconRef.current, {
        duration: 0.9,
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
        duration: 0.7,
        opacity: 0,
        y: "-100%",
        delay: 0.2,
        ease: "power3.in"
      });
      gsap.to(menuIconRef.current, {
        duration: 0.8,
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
    { label: 'Resume', href: 'https://docs.google.com/document/d/1c9jIaVQ1FwQKgU3lLI3c2uV5CBlR12SfuyPaLIInx-Q/edit' }
  ];

  return (
    <>
      <div ref={navbarRef} className={`content h-12 px-6 py-4 mt-2 flex justify-between  items-center fixed top-0 left-0 right-0 transition-all duration-300 w-[80%] ml-[10%] rounded-full backdrop-blur-md z-[60] 
      ${isScrolled ? 'bg-[#58585820] backdrop-blur-2xl': "bg-transparent"}`}
        style={{ transform: 'translateY(-100%)' }}
      >
        <div className="logo-name flex items-center py-4 font-glorich ">
          <TransitionLink href="/">
            <ShinyText text="R A T A N" />
          </TransitionLink>
        </div>
    
        <div className="links hidden lg:flex lg:gap-10 gap-2 uppercase ">
          {menuItems.map((item) => (
            <Magnetic key={item.label}>
              <div className='relative group'>
                <TransitionLink href={item.href}>
                  <div className='overflow-hidden'>
                    <ShinyText 
                      text={item.label}
                      className="font-medium font-glorich lg:text-sm text-xs"
                      speed={3}
                      disabled={false}
                    />
                    <span className='block h-[1px] w-0 bg-zinc-700 absolute bottom-0 left-0 group-hover:w-full transition-all duration-300'></span>
                  </div>
                </TransitionLink>
              </div>
            </Magnetic>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-zinc-500 focus:outline-none w-6 h-6 relative z-[70]">
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
        className={`fixed inset-0 bg-black bg-opacity-100 z-50 flex items-center justify-center ${isMenuOpen ? '' : 'pointer-events-none'}`}
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
                <ShinyText 
                  text={item.label}
                  className="text-4xl font-medium"
                  speed={3}
                  disabled={false}
                />
              </TransitionLink>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

