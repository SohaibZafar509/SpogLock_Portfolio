import { ArrowRight } from 'lucide-react'

const defaultItems = ['Design', 'Development', 'Research', 'Wireframe', 'High Fidelity', 'Launch']
const aiTopText =
  'Custom Software Built for Your Business - No Mystery Too Great, No Software Too Complex.'
const aiBottomItems = [
  'Mobile, Web & Desktop Solutions - Built for the Way Your Business Works -',
  'Quality-First Development - Delivered on Time, Built to Last -',
  'From Concept to Launch - We Build Software That Works -',
  'Quality-First Development - Delivered on Time, Built to Last -',
]

function AiMarquee() {
  const topItems = Array.from({ length: 6 }, (_, index) => `${aiTopText}-${index}`)
  const bottomItems = [...aiBottomItems, ...aiBottomItems, ...aiBottomItems]

  return (
    <div className="marquee marquee--ai" aria-hidden="true">
      <div className="marquee-ai-row marquee-ai-row--red">
        <div className="marquee-track marquee-track--ai" data-speed="22">
          {topItems.map((key) => (
            <span className="marquee-ai__item" key={key}>
              {aiTopText}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee-ai-row marquee-ai-row--black">
        <div className="marquee-track marquee-track--ai" data-direction="right" data-speed="26">
          {bottomItems.map((item, index) => (
            <span className="marquee-ai__item" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Marquee({ items = defaultItems, dark = false, variant = 'default' }) {
  if (variant === 'ai') {
    return <AiMarquee />
  }

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
