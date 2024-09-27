'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


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
        <div
            className="h-full bg-gradient-to-b from-zinc-900 to-zinc-800 text-zinc-100 p-8"
        >
            <div
                ref={sectionRef}
                className="content w-full h-full flex items-center justify-center flex-col"
            >
                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-t from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                    Work Experience
                </h2>
                <div className="max-w-3xl mx-auto space-y-8">
                    {experienceData.map((experience, index) => (
                        <div
                            key={index}
                            ref={(el: HTMLDivElement | null) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                        >
                            <Card className="bg-zinc-800 border-zinc-700">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-semibold text-zinc-100">{experience.title}</CardTitle>
                                    <div className="flex justify-between items-center pt-2">
                                        <Badge variant="secondary" className="text-sm">{experience.company}</Badge>
                                        <span className="text-sm text-zinc-400">{experience.date}</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                        {experience.responsibilities.map((responsibility, idx) => (
                                            <h2 key={idx}>{responsibility}</h2>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}