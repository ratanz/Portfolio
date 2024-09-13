

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
            title: "Studio",
            description: "Brief info about project 1",
            imageUrl: "/images/studio.png",
            projectUrl: "https://studio-size-seven.vercel.app/"
        },
        {
            title: "Brainwave",
            description: "Brief info about project 2",
            imageUrl: "/images/brainwave.png",
            projectUrl: "/projects/project2"
        },
        {
            title: "Project 3",
            description: "Brief info about project 3",
            imageUrl: "/images/dribble.png",
            projectUrl: "/projects/project3"
        },
        {
            title: "Brainwave",
            description: "Brief info about project 2",
            imageUrl: "/images/brainwave.png",
            projectUrl: "/projects/project2"
        },
        {
            title: "Brainwave",
            description: "Brief info about project 2",
            imageUrl: "/images/brainwave.png",
            projectUrl: "/projects/project2"
        },
        {
            title: "Brainwave",
            description: "Brief info about project 2",
            imageUrl: "/images/brainwave.png",
            projectUrl: "/projects/project2"
        },
        {
            title: "Brainwave",
            description: "Brief info about project 2",
            imageUrl: "/images/brainwave.png",
            projectUrl: "/projects/project2"
        },
    ]

    return (
        <div
            className="projects-container h-[75vw] w-full bg-gradient-to-b from-black to-zinc-800 overflow-hidden">
            <div className='flex flex-col items-center  mt-36'>
                <h1 className='text-6xl font-bold text-transparent p-14 mb-4 bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-100'>Projects</h1>
                <div className="project-boxes flex flex-wrap items-start justify-center gap-8">
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
        <div className="flex flex-col items-center">
            <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 10px 29px rgba(240,240,240, 0.1)' }}
                className="relative w-96 h-60 bg-white bg-opacity-10 rounded-lg overflow-hidden cursor-pointer group"
            >
                <Link href={projectUrl} passHref>
                    <div className="h-full w-full relative">
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
            <div className="mt-4 text-center">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>
            </div>
        </div>
    )
}


export default Projects