'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'


const experienceData = [
    {
        title: "Accenture North America Coding: Development & Advanced Engineering Job Simulation",
        date: "January 2024",
        company: "On Forage",
        responsibilities: [
            "Supported a client with a small development team overwhelmed by the growth of their code base.",
            "Wrote a class to perform search on an interactive website in Java using the Spring Boot framework.",
            "Set up automated builds using Jenkins to validate code changes on every push.",
            "Managed the team's workload by preparing for a sprint and writing user stories in an Agile planning session."
        ]
    },
    {
        title: "JPMorgan Chase & Co. Software Engineering Lite Virtual Experience Program",
        date: "February 2024",
        company: "On Forage",
        responsibilities: [
            "Completed a simulation focused on the process of completing an engineering ticket for a system in the credit-card rewards department.",
            "Created a new class to get an existing system up and running.",
            "Wrote a test suite for the class added."
        ]
    },
    {
        title: "Data structure and Algorithm",
        date: "January 2024",
        company: "Coursera",
        responsibilities: [
            "Learned about various types of data structures and algorithms and their use cases.",
            "Gained knowledge of Big O notation and how to analyze the time and space complexity of algorithms.",
            "Got hands on experience with common data structures like arrays, linked lists, stacks, queues, trees, and graphs.",
            "Learned about various types of sorting algorithms and their implementations.",
            "Got hands on experience with common algorithms like binary search, dynamic programming, and graph traversal algorithms."
        ]
    },
    {
        title: "Artistry",
        date: "December 2023",
        company: "Freelance",
        responsibilities: [
            "Created a website for a local artist to showcase their work and sell prints.",
            "Used Next.js, Shadcn, and Tailwind CSS to create a responsive and visually appealing website.",
            "Implemented a shopping cart system using Redux Toolkit to allow users to add and remove items from their cart.",
            "Integrated Stripe to handle payments and manage the checkout process."
        ]
    },
    {
        title: "Cinematic Odyssey",
        date: "December 2023",
        company: "Freelance",
        responsibilities: [
            "Crafted a wesbite to showcase digital artwork, with a focus on a cinematic experience. with the one of the smoothest scrolling experiences. Animations experience which makes you feel like a joy of a ride.",
            "Used high quality images and animations to create a visually appealing website.",
            "Used Framer Motion for the animations and GSAP for the scrolling effects.",
            "Magic of a gsap scroll trigger to create a smooth scrolling experience."
        ]
    },
    {
        title: "Genesis",
        date: "December 2023",
        company: "Freelance",
        responsibilities: [
            "Genesis is a state of the art that showcase anime characters in a whole new light.",
            "Implemented a smooth scrolling experience with GSAP.",
            "A ride scroll trigger that makes you feel like you are on a rollercoaster."
        ]
    }
]

gsap.registerPlugin(ScrollTrigger)

export default function Work() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const section = sectionRef.current
        const cards = cardsRef.current

        if (section) {
            gsap.fromTo(section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 90%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }

        cards.forEach((card, index) => {
            if (card instanceof HTMLElement) {
                gsap.fromTo(card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: index * 0.2,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )

                card.addEventListener('mouseenter', () => {
                    gsap.to(card, { scale: 1.05, duration: 0.3 })
                })

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { scale: 1, duration: 0.3 })
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-100 py-20 px-4 sm:px-6 lg:px-8"
        >
            <div
                ref={sectionRef}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Work Experience
                </h2>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {experienceData.map((experience, index) => (
                        <motion.div
                            key={index}
                            ref={(el: HTMLDivElement | null) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="h-full bg-zinc-800/50 border-zinc-700 backdrop-blur-sm hover:bg-zinc-700/50 transition-colors duration-300">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-zinc-100 mb-2">{experience.title}</CardTitle>
                                    <div className="flex justify-between items-center">
                                        <Badge variant="secondary" className="text-sm bg-blue-500/20 text-blue-300">{experience.company}</Badge>
                                        <span className="text-sm text-zinc-400">{experience.date}</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-zinc-300">
                                        {experience.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="mr-2 text-blue-400">•</span>
                                                <span>{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
