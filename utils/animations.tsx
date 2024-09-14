import { gsap } from 'gsap'

export const triggerPageTransition = (callback: () => void) => {
  const tl = gsap.timeline()

  tl.to('body', { opacity: 0, duration: 0.5 })
    .call(callback)
    .to('body', { opacity: 1, duration: 0.5 })

  tl.fromTo('.animate-on-enter', 
    { y: 0, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, scrub: 1, ease: 'power3.out' }
  )
}