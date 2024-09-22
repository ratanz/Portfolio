
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
        const pic = document.querySelector('.pic') as HTMLElement
        const icons = document.querySelector('.icons') as HTMLElement

        if (container && title && content && pic && icons) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top center',
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse',
                    scrub: 1,
                }
            });
        

            tl.fromTo(
                [title, content],
                {
                    opacity: 0,
                    y: 100,
                    backgroundImage: 'linear-gradient(to right, rgba(161, 161, 170, 0) 0%, rgba(161, 161, 170, 0) 100%)',
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    backgroundImage: 'linear-gradient(to right, rgba(161, 161, 170, 1) 0%, rgba(244, 244, 245, 1) 100%)',
                    ease: 'power4.out',
                    duration: 1.9,
                    stagger: 0.8,
                }
            )
            .fromTo(
                title,
                { backgroundSize: 'inset(0 100% 0 0)' },
                { backgroundSize: 'inset(0 0% 0 0)', duration: 1.6, ease: 'power2.out' },
                '<=0.5'
            )
            .fromTo(
                content,
                { clipPath: 'inset(0 100% 0 0)' },
                { clipPath: 'inset(0 0% 0 0)', duration: 2.8, ease: 'power2.out' },
                '<=0.34'
            );
        }

            gsap.fromTo(
                pic,
                { opacity: 0, scale: 0.8,  },
                {
                    opacity: 1,
                    scale: 1.1,
                    duration: 1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: pic,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                }
            )

            gsap.fromTo(
                icons.children,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: icons,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                }
            )
        }, [])

    return (
        <div ref={containerRef} className='about-content w-full h-[50vw] bg-gradient-to-t to-black from-zinc-800 overflow-hidden '>
            <div className='content flex flex-col w-full justify-center h-full items-center p-16'>
                <h1 ref={titleRef} className='text-6xl font-handmade w-fit h-fit p-4 text-center font-bold bg-gradient-to-r from-zinc-500 to-zinc-100 bg-clip-text text-transparent'>About</h1>

                <div className='flex justify-between items-center p-4 mt-16'>
                    <div className="pic w-[20vw] h-[20vw] m-10 rounded-2xl overflow-hidden">
                        <img src="/images/me.jpg" alt="" className='w-full h-full' />
                    </div>

                    <div className='flex flex-col justify-center font-lovecookies leading-normal tracking-wider items-center mt-10'>
                        <p ref={contentRef} className='text-xl bg-gradient-to-r self-center text-center  from-zinc-500 to-zinc-100 bg-clip-text text-transparent w-[50vw]'> I'm Ratan Rathod, a passionate software developer based in Pune. As a self-taught developer, I love building innovative projects and exploring new technologies. With expertise in JavaScript, TypeScript, and various frontend frameworks like React and Next.js, I specialize in creating responsive and interactive web applications. My experience extends to backend technologies as well, including Node.js and Express.
                            <br />
                            <br />
                            I'm dedicated to optimizing performance and enhancing user experiences through advanced UI/UX design principles and cutting-edge animation techniques.</p>

                        <div className="icons h-[3vw] mt-6 flex justify-center items-center flex-col w-full">
                            <div className="flex justify-center items-center space-x-10">
                                <a href="https://github.com/ratanz" target="_blank" rel="noopener noreferrer" className="text-zinc-400
                                bg-zinc-900 p-2 rounded-md hover:text-zinc-100 transition-colors">
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com/in/ratanrathod7" target="_blank" rel="noopener noreferrer" className="text-zinc-400 bg-zinc-900 p-2 rounded-md hover:text-zinc-100 transition-colors">
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a href="https://twitter.com/ratanz_codes" target="_blank" rel="" className="text-zinc-400 bg-zinc-900 p-2 rounded-md hover:text-zinc-100 transition-colors">
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a href="mailto:ratanrathod7@outlook.com" className="text-zinc-400 bg-zinc-900 p-2 rounded-md hover:text-zinc-100 transition-colors">
                                    <MdEmail className="w-6 h-6" />
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
