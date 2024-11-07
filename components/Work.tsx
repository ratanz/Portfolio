'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'
import { Timeline } from './ui/timeline'
import ShinyText from './ui/ShinyText'


const experienceData = [
    {
        title: "2022",
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
        title: "JPMorgan",
        content: (
            <div className="bg-neutral-950 rounded py-3 px-6">
                <h4 className="text-xl font-semibold text-white mb-2">
                    JPMorgan Chase & Co. Software Engineering Lite
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
    {
        title: "meta",
        content: (
            <div className="bg-neutral-950 rounded py-3 px-6">
                <h4 className="text-xl font-semibold text-white mb-2">
                    Data structure and Algorithm
                </h4>
                <Badge className="mb-4 bg-blue-600/20 text-blue-300">Coursera</Badge>
                <ul className="space-y-2 text-neutral-300">
                    {[
                        "Learned about various types of data structures and algorithms and their use cases.",
                        "Gained knowledge of Big O notation and how to analyze the time and space complexity of algorithms.",
                        "Got hands on experience with common data structures like arrays, linked lists, stacks, queues, trees, and graphs.",
                        "Learned about various types of sorting algorithms and their implementations.",
                        "Got hands on experience with common algorithms like binary search, dynamic programming, and graph traversal algorithms."
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="mr-2 text-blue-400">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        title: "Artistry",
        content: (
            <div className="space-y-8">
                <div className="bg-neutral-950 rounded py-3 px-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Artistry</h4>
                    <Badge className="mb-4 bg-blue-600/20 text-blue-300">Freelance</Badge>
                    <ul className="space-y-2 text-neutral-300">
                        {[
                            "Created a website for a local artist to showcase their work and sell prints.",
                            "Used Next.js, Shadcn, and Tailwind CSS to create a responsive and visually appealing website.",
                            "Implemented a shopping cart system using Redux Toolkit to allow users to add and remove items from their cart.",
                            "Integrated Stripe to handle payments and manage the checkout process."
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
            className="min-h-screen lg:pt-28 pt-10 bg-neutral-950"
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