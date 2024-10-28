'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const projectBoxesRef = useRef<(HTMLDivElement | null)[]>([])
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        const container = containerRef.current
        const projects = projectsRef.current

        const ctx = gsap.context(() => {
            if (!isMobile && container && projects) {
                const totalWidth = projects.scrollWidth - window.innerWidth

                gsap.to(projects, {
                    width: '124%',
                    x: -totalWidth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: () => `+=${totalWidth}`,
                        pin: true,
                        scrub: 1,
                    }
                })
            }

            // Animate project boxes
            projectBoxesRef.current.forEach((box) => {
                if (box) {
                    gsap.fromTo(box,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            scrollTrigger: {
                                trigger: box,
                                start: 'top 90%',
                                end: 'bottom 20%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    )
                }
            })
        })

        return () => {
            ctx.revert() // This will kill all ScrollTriggers created in this context
        }
    }, [isMobile])

    const projectsContent = [
        {
            title: "Studio Size",
            description: "Developed a cutting-edge, responsive web application showcasing advanced UI/UX design principles and frontend development skills",
            imageUrl: "/images/studio.png",
            projectUrl: "https://studio-size-seven.vercel.app/"
        },
        {
            title: "Brainwave",
            description: "Responsive web application showcasing advanced UI/UX",
            imageUrl: "/images/brainwave.png",
            projectUrl: "https://brainwave-ebon-xi.vercel.app/"
        },
        {
            title: "Dribble Landing Page",
            description: "Created a landing page clone of Dribble",
            imageUrl: "/images/dribble.png",
            projectUrl: "https://dribble-clone-frontend.vercel.app/"
        },
        {
            title: "Rejoice",
            description: "Attractive website made with frontend skills",
            imageUrl: "/images/rejoice.png",
            projectUrl: "https://rejoicex.netlify.app/"
        },
        {
            title: "Nike",
            description: "Responsive frontend development of a Nike website",
            imageUrl: "/images/nike.png",
            projectUrl: "https://nike-landing-page-seven-iota.vercel.app/"
        },
        {
            title: "Glass Glam",
            description: "A landing page for Glass Glam ",
            imageUrl: "/images/glass.png",
            projectUrl: "#projects"
        },
        {
            title: "sundown",
            description: "A smooth interactive website",
            imageUrl: "/images/sun.png",
            projectUrl: ""
        },
        {
            title: "Cinematic Odesessy",
            description: "A website for a movie",
            imageUrl: "/images/cinematic.png",
            projectUrl: "https://cinematic-odyssey.vercel.app/"
        },
        {
            title: "Genesis",
            description: "A Scrolling Magic",
            imageUrl: "/images/genesis.png",
            projectUrl: "https://genesis-omega.vercel.app/"
        },
        {
            title: "artistry",
            description: "Art in motion",
            imageUrl: "/images/artistry.png",
            projectUrl: "https://artistry-omega.vercel.app/"
        }

    ]

    return (
        <div 
            ref={containerRef}
            className={`projects-container relative ${isMobile ? 'min-h-screen' : 'lg:h-[55vw]'} overflow-hidden w-full flex-col bg-zinc-900 font-glorich`}>  
            <div className="content flex flex-col justify-center w-full items-center pt-[4vw]">
                <div className=''> 
                    <h1 className='text-4xl md:text-4xl font-bold p-6 text-transparent font-glorich leading-none tracking-normal bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-100'>Projects</h1>
                </div>
                <div 
                ref={projectsRef}
                className={`project-boxes ${isMobile ? 'flex flex-col space-y-8' : 'flex'} w-full items-start px-4 md:px-10 gap-10`}>
                    {projectsContent.map((project, index) => (
                        <ProjectBox 
                            key={index} 
                            {...project} 
                            isMobile={isMobile} 
                            ref={(el: HTMLDivElement | null) => {
                                projectBoxesRef.current[index] = el;
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ProjectBox = React.forwardRef<HTMLDivElement, { title: string, description: string, imageUrl: string, projectUrl: string, isMobile: boolean }>(
    ({ title, description, imageUrl, projectUrl, isMobile }, ref) => {
    return (
        <div ref={ref} className={`flex flex-col items-center ${isMobile ? 'w-full' : 'w-[55vw]'}`}>
            <motion.div
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className={`relative ${isMobile ? 'w-full aspect-video' : 'w-[55vw] h-[31vw]'} overflow-hidden rounded-lg cursor-pointer group mb-4`}
            >
                <Link href={projectUrl} passHref>
                    <div className={`${isMobile ? 'h-full w-full' : 'h-[31vw] w-[55vw]'} rounded-lg relative self-center pointer-events-none`}>
                        <Image
                            src={imageUrl}
                            alt={title}
                            layout='fill'
                            objectFit=""
                        />
                        <div className="absolute flex justify-end items-center p-4 w-full h-10 bottom-0 bg-[#1a1a1a36] transition-all duration-300 transform translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <h3 className='text-white text-xl font-spacer36 justify-center self-center'>Visit</h3>
                            <svg className="w-6 h-6 text-white text-center ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </Link>
            </motion.div>
            <div className="text-center">
                <h3 className="text-xl font-bold bg-gradient-to-t from-zinc-100 to-zinc-500 bg-clip-text text-transparent">{title}</h3>
                <p className="text-sm bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text text-transparent">{description}</p>
            </div>
        </div>
    )
})

ProjectBox.displayName = 'ProjectBox'

export default Projects