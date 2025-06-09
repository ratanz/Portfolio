import Magnetic from "./Magnetic";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

const Icons = () => {
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    // icons animation
    gsap.fromTo(
      iconsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 3,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <div
      ref={iconsRef}
      className="icons flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-4"
    >
      <Magnetic>
        <a
          href="https://github.com/ratanz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-t from-zinc-300 to-zinc-500 p-2 rounded-md transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://linkedin.com/in/ratanrathod7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-t from-zinc-300 to-zinc-500 p-2 rounded-md transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://twitter.com/ratanz_codes"
          target="_blank"
          rel=""
          className="bg-gradient-to-t from-zinc-300 to-zinc-500 p-2 rounded-md transition-colors"
        >
          <FaTwitter className="w-6 h-6" />
        </a>
      </Magnetic>
      {/* <Magnetic>
        <a
          href="mailto:ratanrathod870@gmail.com"
          className="text-zinc-400 p-2 rounded-md hover:text-zinc-100 transition-colors"
        >
          <MdEmail className="w-6 h-6" />
        </a>
      </Magnetic> */}
    </div>
  );
};

export default Icons;
