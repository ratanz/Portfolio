import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextRevealByWord from "./ui/text-reveal";
import Icons from "./ui/icons";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const icons = document.querySelector(".icons") as HTMLElement;

    if (container && title && content && icons) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 100%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });

      tl.fromTo(
        [title, content],
        {
          opacity: 0,
          y: 50,
          backgroundImage:
            "linear-gradient(to right, rgba(161, 161, 170, 0) 0%, rgba(161, 161, 170, 0) 100%)",
        },
        {
          opacity: 1,
          y: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(161, 161, 170, 1) 0%, rgba(244, 244, 245, 1) 100%)",
          ease: "power2.out",
          duration: 1,
          stagger: 0.5,
        }
      )
        .fromTo(
          title,
          { backgroundSize: "0% 100%" },
          { backgroundSize: "100% 100%", duration: 1, ease: "power2.out" },
          "<"
        )
        .fromTo(
          content,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 1.5, ease: "power2.out" },
          "<0.2"
        );

      gsap.fromTo(
        icons,
        {
          opacity: 0,
          scale: 0.9,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icons,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        icons.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: icons,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Cleanup function
    return () => {
      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="about-content w-full lg:min-h-[115vh] bg-neutral-950 overflow-hidden  lg:mt-0 lg:pt-14 min-h-[160vh] pt-[25vh]  "
    >
      <div className="content flex flex-col w-full justify-center min-h-screen items-center p-4 sm:p-8 md:p-16">
        <h1
          ref={titleRef}
          className="text-[10vw] sm:text-4xl md:text-[4.6vw] font-tanker w-fit h-fit lg:p-10 p-4 text-center font-bold bg-gradient-to-r from-zinc-500 to-zinc-100 bg-clip-text text-transparent"
        >
          About Me
        </h1>

        <div className="flex flex-col justify-center font-pretendard leading-normal tracking-wider items-center mt-0 md:mt-3">
          <div className="info ">
            <TextRevealByWord
              text="Im Ratan Rathod, a passionate software developer based in Pune. As a self-taught developer, I love building innovative projects and exploring new technologies. With expertise in JavaScript, TypeScript, and various frontend frameworks like React and Next.js, I specialize in creating responsive and interactive web applications. My experience extends to backend technologies as well, including Node.js and Express. I'm dedicated to optimizing performance and enhancing user experiences through advanced UI/UX design principles and cutting-edge animation techniques."
              className="text-[8px] sm:text-lg md:text-xl bg-gradient-to-r self-center text-center from-zinc-500 to-zinc-100 bg-clip-text text-transparent w-full md:w-[55vw] tracking-tight"
            />
          </div>
        </div>

        <span className="border-t border-zinc-800 mt-4 w-1/2"></span>

        <div className="connect lg:mt-4 mt-4 flex justify-center items-center flex-col w-full gap-3 ">
         <Icons />
        </div>
      </div>
    </div>
  );
};

export default About;
