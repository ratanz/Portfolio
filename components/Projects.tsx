'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

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
            className="projects-container h-[95vw] w-full bg-gradient-to-b from-black to-zinc-800 overflow-hidden">
            <div className='flex flex-col items-center  mt-36'>
                <h1 className='text-6xl font-bold text-transparent p-14 mb-4 bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-100'>Projects</h1>
                <div className="project-boxes flex flex-wrap flex-row items-start justify-center gap-4">
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
        <div className="flex flex-col items-center w-[25vw] m-2 ">
            <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 10px 29px rgba(240,240,240, 0.1)' }}
                className="relative w-full h-[14vw] overflow-hidden rounded-lg cursor-pointer group mb-4"
            >
                <Link href={projectUrl} passHref>
                    <div className="h-full w-full rounded-lg relative">
                        <Image
                            src={imageUrl}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute bottom-4 right-4 transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </Link>
            </motion.div>
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-t from-zinc-100 to-zinc-500 bg-clip-text text-transparent">{title}</h3>
                <p className="text-sm bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text text-transparent">{description}</p>
            </div>
        </div>
    )
}


export default Projects