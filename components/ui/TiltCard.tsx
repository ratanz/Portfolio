// 'use client'

// import { useRef, useState } from 'react'
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// interface TiltCardProps {
//     children: React.ReactNode;
//     className?: string;
// }

// export const TiltCard = ({ children, className = "" }: TiltCardProps) => {
//     const divRef = useRef<HTMLDivElement>(null);
//     const x = useMotionValue(0);
//     const y = useMotionValue(0);

//     const [isFocused, setIsFocused] = useState(false);
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [opacity, setOpacity] = useState(0);

//     const mouseXSpring = useSpring(x);
//     const mouseYSpring = useSpring(y);
//     const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
//     const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

//     const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//         if (!divRef.current || isFocused) return;

//         const rect = event.currentTarget.getBoundingClientRect();
//         const width = rect.width;
//         const height = rect.height;
//         const mouseX = event.clientX - rect.left;
//         const mouseY = event.clientY - rect.top;
//         const xPct = (mouseX / width) - 0.5;
//         const yPct = (mouseY / height) - 0.5;

//         x.set(xPct);
//         y.set(yPct);
//         setPosition({ x: mouseX, y: mouseY });
//     };


//     return (
//         <motion.div
//             style={{
//                 rotateX,
//                 rotateY,
//                 transformStyle: "preserve-3d",
//             }}
//             className="relative h-full"
//             transition={{
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 40,
//             }}
//         >
//             <motion.div
//                 ref={divRef}
//                 onMouseMove={handleMouseMove}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 onMouseEnter={() => setOpacity(0.6)}
//                 onMouseLeave={() => {
//                     setOpacity(0);
//                     x.set(0);
//                     y.set(0);
//                 }}
//                 style={{
//                     transform: "translateZ(75px)",
//                     transformStyle: "preserve-3d",
//                 }}
//                 className={`h-full relative ${className}`}
//             >
//                 {children}
//                 <div
//                     className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
//                     style={{
//                         opacity,
//                         background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.013), transparent 90%)`,
//                     }}
//                 />
//             </motion.div>
//         </motion.div>
//     );
// };