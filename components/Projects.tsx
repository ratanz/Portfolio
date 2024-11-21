'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const projectRefs = useRef<(HTMLDivElement | null)[]>([])
    const footerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const pinnedSections = projectRefs.current.slice(0, -1) 
        const lastCard = projectRefs.current[projectRefs.current.length - 1]
        const footer = footerRef.current
        let scrollTriggers: ScrollTrigger[] = []

        const ctx = gsap.context(() => {
            pinnedSections.forEach((section, index) => {
                if (!section) return
                const project = section.querySelector('.project')
                const nextSection = projectRefs.current[index + 1]

                if (!project || !nextSection) return

                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: footer ? `${(footer as HTMLElement).offsetTop - window.innerHeight}` : '+=1000',
                        pin: true,
                        pinSpacing: false,
                        scrub: 1,
                    },
                })

                gsap.fromTo(
                    project,
                    { scale: 1 },
                    {
                        scale: 0.5,
                        filter: "blur(10px)",
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: `top+=${nextSection.offsetTop - section.offsetTop} top`,
                            scrub: 1,
                        },
                    }
                )
            })

            if (lastCard) {
                const lastProject = lastCard.querySelector('.project')
                if (lastProject) {
                    scrollTriggers.push(
                        ScrollTrigger.create({
                            trigger: lastCard,
                            start: "top center",
                            end: "center center",
                            animation: gsap.fromTo(
                                lastProject,
                                { 
                                    y: 100,
                                    opacity: 1,
                                    scale: 0.9
                                },
                                {
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    duration: 1,
                                    ease: "power2.out"
                                }
                            ),
                            toggleActions: "play none none reverse"
                        })
                    )
                }
            }
        })

        return () => {
            scrollTriggers.forEach(trigger => trigger.kill())
            ctx.revert()
        }
    }, [])

    return (

        <div ref={containerRef} className="sticky-cards bg-neutral-950 font-tanker">
            <section className="project-hero pinned h-[50vh]"></section>

            <div className="heading-text flex justify-center items-center">
                <h1 className="text-4xl md:text-6xl uppercase font-bold text-zinc-100">Projects</h1>
            </div>

            {projectsContent.map((project, index) => (
                <section
                    key={index}
                    ref={(el: HTMLDivElement | null) => { projectRefs.current[index] = el }}
                    className={`card ${index === projectsContent.length - 1 ? 'scroll' : 'pinned'} h-screen w-screen`}
                >
                    <div className="project absolute top-[40vh] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] h-[70%] md:h-[68%] flex flex-col-reverse md:flex-row lg:mt-0 mt-0">
                        <div className="project-info  relative h-[38%] md:h-full md:flex-[1.75] rounded-xl p-4 pt-6  md:p-8 bg-neutral-900">
                            <div className="project-header flex justify-between items-start">
                                <h3 className="text-2xl md:text-4xl uppercase font-bold text-zinc-100">{project.title}</h3>
                                <p className="text-sm md:text-base text-zinc-400">0{index + 1} - 0{projectsContent.length}</p>
                            </div>
                            <p className="py-2 md:py-4 text-sm md:text-base text-zinc-300">{project.description}</p>
                            <div className="project-cta absolute left-0 md:left-4 w-full p-4 uppercase">
                                <Link href={project.projectUrl} className="text-zinc-300 hover:text-zinc-100">
                                    Visit Project →
                                </Link>
                            </div>
                        </div>
                        <div className="project-img md:flex-[4] rounded-xl overflow-hidden mt-2 md:mt-0 md:ml-4 h-[25vh] md:h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section ref={footerRef} className="footer h-[20vh]"></section>
        </div>
    )
}

const projectsContent = [
    {
        title: "Studio Size",
        description: "A modern creative studio built with Next.js, featuring dynamic product management, responsive design, and seamless user experience",
        imageUrl: "/images/studio.png",
        projectUrl: "https://studio-size-seven.vercel.app/"
    },
    {
        title: "Brainwave",
        description: "An AI-powered web application with intuitive interface design, real-time interactions, and advanced animation implementations",
        imageUrl: "/images/brainwave.png",
        projectUrl: "https://brainwave-ebon-xi.vercel.app/"
    },
    {
        title: "Dribble Landing Page",
        description: "A pixel-perfect recreation of Dribbble's landing page, showcasing attention to detail and modern CSS techniques",
        imageUrl: "/images/dribble.png",
        projectUrl: "https://dribble-clone-frontend.vercel.app/"
    },
    {
        title: "Rejoice",
        description: "A dynamic landing page featuring smooth animations, responsive layouts, and optimized performance metrics",
        imageUrl: "/images/rejoice.png",
        projectUrl: "https://rejoicex.netlify.app/"
    },
    {
        title: "Nike",
        description: "A high-fidelity Nike website clone built with React, featuring product showcases and responsive design patterns",
        imageUrl: "/images/nike.png",
        projectUrl: "https://nike-landing-page-seven-iota.vercel.app/"
    },
    {
        title: "Glass Glam",
        description: "An elegant e-commerce interface with glassmorphism design, built using modern web technologies and animations",
        imageUrl: "/images/glass.png",
        projectUrl: "#projects"
    },
    {
        title: "sundown",
        description: "An immersive web experience featuring parallax scrolling effects and interactive UI elements",
        imageUrl: "/images/sun.png",
        projectUrl: ""
    },
    {
        title: "Cinematic Odesessy",
        description: "A cinematic website with dynamic content loading, and engaging user interactions, smooth transitions with each click on the page",
        imageUrl: "/images/cinematic.png",
        projectUrl: "https://cinematic-odyssey.vercel.app/"
    },
    {
        title: "Genesis",
        description: "A sophisticated web application showcasing advanced scroll animations and interactive user experiences",
        imageUrl: "/images/genesis.png",
        projectUrl: "https://genesis-omega.vercel.app/"
    },
    {
        title: "artistry",
        description: "An artistic portfolio platform featuring creative animations, smooth transitions, and responsive gallery layouts",
        imageUrl: "/images/artistry.png",
        projectUrl: "https://artistry-omega.vercel.app/"
    }
]

export default Projects