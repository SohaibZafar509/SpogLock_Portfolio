import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations(routeKey) {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const cleanupFns = []

    const context = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.25 },
      )

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 72, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%',
            },
          },
        )
      })

      gsap.utils.toArray('.image-lift').forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      gsap.utils.toArray('.about-scale-image').forEach((element) => {
        gsap.to(element, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'back.out(4)',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
          },
        })

        const grow = () => {
          gsap.to(element, {
            scale: 3,
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
          })
        }

        const shrink = () => {
          gsap.to(element, {
            scale: 1,
            borderRadius: 6,
            boxShadow: 'none',
            duration: 0.3,
          })
        }

        element.addEventListener('mouseenter', grow)
        element.addEventListener('mouseleave', shrink)

        cleanupFns.push(() => {
          element.removeEventListener('mouseenter', grow)
          element.removeEventListener('mouseleave', shrink)
        })
      })

      gsap.utils.toArray('.marquee-track').forEach((track) => {
        const speed = Number(track.dataset.speed) || 18

        if (track.dataset.direction === 'right') {
          gsap.fromTo(
            track,
            { xPercent: -50 },
            {
              xPercent: 0,
              duration: speed,
              ease: 'none',
              repeat: -1,
            },
          )
          return
        }

        gsap.to(track, {
          xPercent: -50,
          duration: speed,
          ease: 'none',
          repeat: -1,
        })
      })

      gsap.utils.toArray('.spin-slow').forEach((element) => {
        gsap.to(element, {
          rotate: 360,
          duration: 6,
          ease: 'none',
          repeat: -1,
        })
      })

      const cursor = document.querySelector('.cursor-dot')
      if (cursor) {
        const moveCursor = (event) => {
          gsap.to(cursor, {
            x: event.clientX,
            y: event.clientY,
            duration: 0.18,
            ease: 'power2.out',
          })
        }

        window.addEventListener('mousemove', moveCursor)

        cleanupFns.push(() => {
          window.removeEventListener('mousemove', moveCursor)
        })
      }

      return undefined
    })

    return () => {
      cleanupFns.forEach((cleanup) => cleanup())
      context.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [routeKey])
}
