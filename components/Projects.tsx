'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projectsContent } from '@/data/projectsData'

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
        <div ref={containerRef} className="sticky-cards  font-tanker">
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
                    <div className="project absolute top-[47vh] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] h-[90%] md:h-[68%] flex flex-col-reverse md:flex-row lg:mt-0 mt-0 px-4">
                      
                        <div className="project-info relative h-[25%] md:h-full md:flex-[1.75] rounded-xl p-4 mt-2 pt-8 md:p-8 bg-neutral-900">
                            <div className="project-header flex justify-between items-center">
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
                        <div className="project-img md:flex-[4] rounded-xl overflow-hidden md:mt-0 md:ml-4 h-[70%] md:h-full">
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

            <section ref={footerRef} className="footer h-[25vh]"></section>
        </div>
    )
}


export default Projects