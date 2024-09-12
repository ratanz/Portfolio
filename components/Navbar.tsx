'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { gsap } from 'gsap'

gsap.registerPlugin();

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  
  return (
    <div className={`content h-14 px-6 py-4 mt-4 flex justify-between items-center fixed top-0 left-0 right-0 transition-all duration-300 w-[80%] ml-[10%] rounded-full backdrop-blur-md z-50 ${
      isScrolled
        ? 'bg-[#80808020] backdrop-blur-sm'
        : 'bg-[#62626216] backdrop-blur-xl'
    }`}>
      <div className="logo-name flex items-center py-4">
        <Link href="/">
          <h1 className={` font-bold font-pretendard text-xl
           bg-gradient-to-t from-zinc-400 to-zinc-600 bg-clip-text text-transparent`}>R A T A N</h1>
        </Link>
      </div>

      <div className="links flex gap-10 uppercase">
        {[
          { label: 'About', href: '/about' },
          { label: 'Projects', href: '/#projects' },
          // { label: 'Contact', href: '/contact' },
          { label: 'Resume', href: '' }
        ].map((item) => (
          <Link key={item.label} href={item.href} className="relative group overflow-hidden ">
            <h2 
              className=' hover:text-zinc-900 font-medium font-pretendard text-sm inline-block w-full bg-gradient-to-t from-zinc-400 to-zinc-700 bg-clip-text text-transparent transition-all duration-300'
            >
              {item.label}
            </h2>
           <span className='block h-[1px] w-0 bg-zinc-700 absolute bottom-0 left-0 group-hover:w-full transition-all duration-300'></span>
          </Link>
        ))}
      </div>
    </div>
  )
}