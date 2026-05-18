import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function MenuItem({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  isFirst,
}) {
  const itemRef = useRef(null)
  const marqueeRef = useRef(null)
  const marqueeInnerRef = useRef(null)
  const animationRef = useRef(null)
  const [repetitions, setRepetitions] = useState(4)

  const animationDefaults = { duration: 0.6, ease: 'expo.out' }

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom'
  }

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return

      const marqueeContent = marqueeInnerRef.current.querySelector('.flowing-menu__part')
      if (!marqueeContent) return

      const contentWidth = marqueeContent.offsetWidth
      const viewportWidth = window.innerWidth
      const needed = Math.ceil(viewportWidth / contentWidth) + 2
      setRepetitions(Math.max(4, needed))
    }

    calculateRepetitions()
    window.addEventListener('resize', calculateRepetitions)

    return () => {
      window.removeEventListener('resize', calculateRepetitions)
    }
  }, [text, image])

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return

      const marqueeContent = marqueeInnerRef.current.querySelector('.flowing-menu__part')
      if (!marqueeContent) return

      const contentWidth = marqueeContent.offsetWidth
      if (contentWidth === 0) return

      animationRef.current?.kill()
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      })
    }

    const timer = window.setTimeout(setupMarquee, 50)

    return () => {
      window.clearTimeout(timer)
      animationRef.current?.kill()
    }
  }, [text, image, repetitions, speed])

  const moveMarqueeIn = (event) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return

    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(
      event.clientX - rect.left,
      event.clientY - rect.top,
      rect.width,
      rect.height,
    )

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
  }

  const moveMarqueeOut = (event) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return

    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(
      event.clientX - rect.left,
      event.clientY - rect.top,
      rect.width,
      rect.height,
    )

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
  }

  return (
    <div
      className="flowing-menu__item"
      ref={itemRef}
      style={{ borderTop: isFirst ? 'none' : `1px solid ${borderColor}` }}
    >
      <a
        className="flowing-menu__link"
        href={link}
        onMouseEnter={moveMarqueeIn}
        onMouseLeave={moveMarqueeOut}
        style={{ color: textColor }}
      >
        {text}
      </a>
      <div
        className="flowing-menu__marquee"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div className="flowing-menu__marquee-inner" ref={marqueeInnerRef}>
          {Array.from({ length: repetitions }).map((_, index) => (
            <div
              className="flowing-menu__part"
              key={`${text}-${index}`}
              style={{ color: marqueeTextColor }}
            >
              <span>{text}</span>
              <span
                className="flowing-menu__image"
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function FlowingMenu({
  items = [],
  speed = 15,
  textColor = '#fff',
  bgColor = '#120F17',
  marqueeBgColor = '#fff',
  marqueeTextColor = '#120F17',
  borderColor = '#fff',
}) {
  return (
    <div className="flowing-menu" style={{ backgroundColor: bgColor }}>
      <nav className="flowing-menu__nav">
        {items.map((item, index) => (
          <MenuItem
            key={`${item.text}-${index}`}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            isFirst={index === 0}
          />
        ))}
      </nav>
    </div>
  )
}
