'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        const projects = projectsRef.current

        if (container && projects) {
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
    }, [])


    
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
            projectUrl: "/projects/project2"
        },
        {
            title: "Dribble Landing Page",
            description: "Created a landing page clone of Dribble",
            imageUrl: "/images/dribble.png",
            projectUrl: "/projects/project3"
        },
        {
            title: "Rejoice",
            description: "Attractive website made with frontend skills",
            imageUrl: "/images/rejoice.png",
            projectUrl: "/projects/project2"
        },
        {
            title: "Nike",
            description: "Responsive frontend development of a Nike website",
            imageUrl: "/images/nike.png",
            projectUrl: "/projects/project2"
        },
        {
            title: "Glass Glam",
            description: "A landing page for Glass Glam ",
            imageUrl: "/images/glass.png",
            projectUrl: "/projects/project2"
        },
        {
            title: "sundown",
            description: "Real-time collaborative document editing platform",
            imageUrl: "/images/sun.png",
            projectUrl: "/projects/project2"
        },
    ]

    return (
        <div 
            ref={containerRef}
            className="projects-container relative lg:h-[60vw] overflow-hidden h-screen w-full flex-col bg-gradient-to-t from-zinc-900 to-zinc-800">  
            <div 
             className="content flex flex-col justify-center w-full items-center pt-[5vw]">

            <div className=''> 
                <h1 className='text-6xl font-bold p-4 text-transparent leading-none tracking-normal bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-100'>Projects</h1>
            </div>
            <div 
            ref={projectsRef}
            className="project-boxes flex w-full items-start px-10 p-2 gap-6">
                {projectsContent.map((project, index) => (
                    <ProjectBox key={index} {...project} />
                ))}
            </div>
            </div>
        </div>
    )
}

const ProjectBox = ({ title, description, imageUrl, projectUrl }: { title: string, description: string, imageUrl: string, projectUrl: string }) => {
    return (
        <div className="flex flex-col items-center w-full m-2 ">
            <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 10px 29px rgba(240,240,240, 0.1)' }}
                className="relative w-[55w] h-[30vw] overflow-hidden rounded-lg cursor-pointer group mb-4"
            >
                <Link href={projectUrl} passHref>
                    <div className="h-[30vw] w-[55vw]  rounded-lg relative self-center pointer-events-none ">
                        <Image
                            src={imageUrl}
                            alt={title}
                            layout='fill'
                            objectFit="cover"
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
                <h3 className="text-xl font-bold  bg-gradient-to-t  from-zinc-100 to-zinc-500 bg-clip-text text-transparent">{title}</h3>
                <p className="text-sm bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text text-transparent">{description}</p>
            </div>
        </div>
    )
}


export default Projects