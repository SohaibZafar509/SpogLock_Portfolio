import { ArrowRight } from 'lucide-react'

const defaultItems = ['Design', 'Development', 'Research', 'Wireframe', 'High Fidelity', 'Launch']

export function Marquee({ items = defaultItems, dark = false }) {
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className={`marquee ${dark ? 'marquee--dark' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {item}
            <ArrowRight size={54} strokeWidth={1.4} />
          </span>
        ))}
      </div>
    </div>
  )
}
