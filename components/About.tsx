
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

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
        <div ref={containerRef} className='about-content w-full h-[50vw] bg-gradient-to-b to-black from-zinc-800 overflow-hidden '>
            <div className='content flex flex-col w-full justify-center h-full items-center p-14'>
                <h1 ref={titleRef} className='text-6xl font-bold text-transparent leading-none tracking-normal bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-100'>About</h1>

                <div className='flex justify-between items-center p-4'>
                    <div className="pic w-[20vw] h-[20vw] m-10 rounded-2xl overflow-hidden">
                        <img src="/images/me.jpg" alt="" className='w-full h-full' />
                    </div>

                    <div className='flex flex-col'>
                        <p ref={contentRef} className='text-xl bg-gradient-to-r from-zinc-500 to-zinc-100 bg-clip-text text-transparent w-[50vw]'> I'm Ratan Rathod, a passionate software developer based in Pune. As a self-taught developer, I love building innovative projects and exploring new technologies. With expertise in JavaScript, TypeScript, and various frontend frameworks like React and Next.js, I specialize in creating responsive and interactive web applications. My experience extends to backend technologies as well, including Node.js and Express. <br />
                            I'm dedicated to optimizing performance and enhancing user experiences through advanced UI/UX design principles and cutting-edge animation techniques.</p>

                        <div className="icons h-[3vw] mt-4 flex justify-center items-center flex-col w-full">
                            <div className="flex justify-center items-center space-x-10">
                                <a href="https://github.com/ratanz" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                                    <FaGithub className="w-8 h-8" />
                                </a>
                                <a href="https://linkedin.com/in/ratanrathod7" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                                    <FaLinkedin className="w-8 h-8" />
                                </a>
                                <a href="https://twitter.com/ratanz_codes" target="_blank" rel="" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                                    <FaTwitter className="w-8 h-8" />
                                </a>
                                <a href="mailto:ratanrathod7@outlook.com" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                                    <MdEmail className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
