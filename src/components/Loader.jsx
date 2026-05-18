import { AnimatePresence, motion } from 'motion/react'

export function Loader({ hidden }) {
  const panels = Array.from({ length: 5 }, (_, index) => index)
  const words = 'Spoglock Labs. Period.'.split(' ')

  return (
    <AnimatePresence mode="wait">
      {!hidden && (
        <motion.div className="loader" aria-hidden="true">
          <div className="loader__text">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 4 } }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.div className="loader__stairs">
            {panels.map((panel) => (
              <motion.div
                key={panel}
                initial={{ height: '100%' }}
                animate={{ height: '100%' }}
                exit={{ height: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + 0.05 * (4 - panel),
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="loader__panel"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
