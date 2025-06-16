'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'
import ShinyText from './ui/ShinyText'
import { Timeline } from './ui/timeline'

const experienceData = [
    {
        title: "Freelance Web Developer",
        content: (
            <div className="space-y-8">
                <div className="bg-neutral-950 rounded py-3 px-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Phoenix Fits</h4>
                    <Badge className="mb-4 bg-blue-600/20 text-blue-300">Freelance</Badge>
                    <ul className="space-y-2 text-neutral-300">
                        {[
                            "Built a clothing store using Next.js 14 and TypeScript, featuring server-side rendering and dynamic store management",
                            "Integrated cloud-based image management using AWS S3 for scalable product storage and optimized delivery",
                            "Implemented secure authentication with NextAuth.js supporting multiple providers and JWT token management",
                            "Developed responsive admin dashboard with real-time inventory tracking, reducing product update time by 85%",
                            "Reduced page load time by 60% through image optimization and lazy loading techniques",
                            "Built scalable architecture supporting 10,000+ product listings with MongoDB",
                            "Leveraged TailwindCSS, Framer Motion and GSAP for polished animations and responsive design",
                            "Integrated Stripe payment processing for secure checkout and order management"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="mr-2 text-blue-400">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Accenture Virtual Enternship",
        content: (
            <div className="space-y-8">
                <div className="bg-neutral-950 rounded py-3 px-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                        Accenture North America Coding: Development & Advanced Engineering
                    </h4>
                    <Badge className="mb-4 bg-blue-600/20 text-blue-300">On Forage</Badge>
                    <ul className="space-y-2 text-neutral-300">
                        {[
                            "Supported a client with a small development team overwhelmed by the growth of their code base.",
                            "Wrote a class to perform search on an interactive website in Java using the Spring Boot framework.",
                            "Set up automated builds using Jenkins to validate code changes on every push.",
                            "Managed the team's workload by preparing for a sprint and writing user stories in an Agile planning session."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="mr-2 text-blue-400">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "JPMorgan Chase & Co. Virtual Enternship",
        content: (
            <div className="bg-neutral-950 rounded py-3 px-6">
                <h4 className="text-xl font-semibold text-white mb-2">
                    JPMorgan Chase & Co. Software Engineering Lite Program on Forage
                </h4>
                <Badge className="mb-4 bg-blue-600/20 text-blue-300">On Forage</Badge>
                <ul className="space-y-2 text-neutral-300">
                    {[
                        "Completed a simulation focused on the process of completing an engineering ticket for a system in the credit-card rewards department.",
                        "Created a new class to get an existing system up and running.",
                        "Wrote a test suite for the class added."
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="mr-2 text-blue-400">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        ),
    },
    

]

export default function Work() {

    // scroll animation when scroll back to top
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.set(titleRef.current, {
            x: 200,
            opacity: 0
        });

        gsap.to(titleRef.current, {
            x: 0,
            opacity: 1,
            stagger: 0.4,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top center+=100",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen lg:pt-32 lg:pb-10 pt-10"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center  ">
                <div ref={titleRef}>
                    <ShinyText
                        text="Work Experience"
                        speed={3}
                        className="text-2xl lg:text-5xl font-extrabold font-tanker mb-6 text-center text-zinc-300 "
                    />
                </div>
                <div className="dark">
                    <Timeline data={experienceData} />
                </div>
            </div>
        </motion.div>
    )
}