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
        const footer = footerRef.current
        const scrollTriggers: ScrollTrigger[] = []

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
                      
                        <div className="project-info relative h-[40%] md:h-full md:flex-[1.75] rounded-xl p-4 pt-6 md:p-8 bg-neutral-900">
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
                                    objectFit="fill"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </section>
            ))}

            <section ref={footerRef} className="footer h-[25vh]"></section>
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
    },
    {
        title: "serene-drift",
        description:"A serene and calming website with smooth animations and interactive UI elements",
        imageUrl: "/images/serenedrift.png",
        projectUrl: "https://serenedrift.netlify.app/"
    },
    {
        title: "stories supercharged",
        description:" Leveraging JavaScript & GSAP, I supercharged Instagram Stories with smooth transitions, animations, and dynamic storytelling. From image scaling to interactive highlights, this setup transforms user experiences into something visually stunning.",
        imageUrl: "/images/stories.png",
        projectUrl: "https://stories-supercharged.netlify.app/"
    },
    {
        title: "Gen Scroll",
        description:"A sophisticated web application showcasing advanced scroll animations and interactive user experiences",
        imageUrl: "/images/genscroll.png",
        projectUrl: "https://gen-scroll.netlify.app/"
    },
    {
        title: "Serenity Slide",
        description:"A smooth ride to serenity-slides with smooth animations and interactive UI elements",
        imageUrl: "/images/serenity.png",
        projectUrl: "https://serenity-slides.netlify.app/"
    },
    {
        title: "Flux & Flow",
        description:"Flux & Flow - a cutting-edge design agency platform that pushes the boundaries of web aesthetics and performance.",
        imageUrl: "/images/flux.png",
        projectUrl: "https://flux-flow.vercel.app/"
    },
    {
        title: "Zentry - Awwwards Recreation",
        description:"A pixel-perfect recreation of Awwwards winning gaming agency website, showcasing attention to detail at its finest",
        imageUrl: "/images/zentry.png",
        projectUrl: "https://zentryy.vercel.app/"
    },
    {
        title: "Pheonix fits",
        description:"Not your average e-commerce platform, Pheonix fits is a modern take on online shopping with a focus on user experience and performance",
        imageUrl: "/images/phoenix.png",
        projectUrl: "https://phoenix-fits.vercel.app/"
    }
    


]

export default Projects