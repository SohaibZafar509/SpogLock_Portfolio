import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'

const rotateYFor = (index, salt = 0) => (((index + 1) * 17 + salt * 11) % 21) - 10

export function AnimatedTestimonials({ testimonials, autoplay = false }) {
  const [active, setActive] = useState(0)

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const isActive = (index) => index === active

  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return undefined

    const interval = window.setInterval(handleNext, 5000)
    return () => window.clearInterval(interval)
  }, [autoplay, handleNext, testimonials.length])

  if (testimonials.length === 0) return null

  return (
    <div className="animated-testimonials">
      <div className="animated-testimonials__grid">
        <div>
          <div className="animated-testimonials__media">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: rotateYFor(index) }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotateYFor(index, active + 1),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, z: 100, rotate: rotateYFor(index, 2) }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="animated-testimonials__image-card"
                >
                  <img src={testimonial.src} alt={testimonial.name} draggable={false} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="animated-testimonials__content">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <h3>{testimonials[active].name}</h3>
            <p className="animated-testimonials__role">{testimonials[active].designation}</p>
            <motion.p className="animated-testimonials__quote">
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.02 * index,
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="animated-testimonials__controls">
            <button onClick={handlePrev} type="button" aria-label="Previous testimonial">
              <IconArrowLeft />
            </button>
            <button onClick={handleNext} type="button" aria-label="Next testimonial">
              <IconArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
