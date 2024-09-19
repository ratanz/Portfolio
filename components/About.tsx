
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const contentRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const container = containerRef.current
        const title = titleRef.current
        const content = contentRef.current

        if (container && title && content) {
            gsap.fromTo(
                [title, content],
                {
                    opacity: 0,
                    backgroundImage: 'linear-gradient(to right, rgba(161, 161, 170, 0) 0%, rgba(161, 161, 170, 0) 100%)'
                },
                {
                    opacity: 1,
                    backgroundImage: 'linear-gradient(to right, rgba(161, 161, 170, 1) 0%, rgba(244, 244, 245, 1) 100%)',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top bottom',
                        end: 'center center',
                        scrub: true,
                    }
                }
            )
        }
    })

    return (
        <div ref={containerRef} className='about-content w-full h-[50vw] bg-gradient-to-b to-black from-zinc-800  overflow-hidden '>
            <div className='content flex flex-col w-full justify-center h-full items-center '>
                <h1 ref={titleRef} className='text-6xl font-bold p-4 text-transparent  leading-none tracking-normal bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-100'>About</h1>
             
                <div className='flex justify-between items-center p-4'>
                    <div className="pic w-[20vw] h-[20vw] m-10 rounded-full overflow-hidden">
                        <img src="/images/me.jpg" alt="" className='w-full h-full' />
                    </div>
                    <p ref={contentRef} className='text-2xl bg-gradient-to-r from-zinc-500 to-zinc-100 bg-clip-text text-transparent w-[50vw]'> I'm Ratan Rathod, a passionate software developer based in Pune. As a self-taught developer, I love building innovative projects and exploring new technologies. With expertise in JavaScript, TypeScript, and various frontend frameworks like React and Next.js, I specialize in creating responsive and interactive web applications. My experience extends to backend technologies as well, including Node.js and Express. I'm dedicated to optimizing performance and enhancing user experiences through advanced UI/UX design principles and cutting-edge animation techniques.</p>
                </div>
            </div>
        </div>
    )
}

export default About
