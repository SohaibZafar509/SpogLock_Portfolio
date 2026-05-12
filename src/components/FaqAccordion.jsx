import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../data/siteData'

export function FaqAccordion() {
  const [active, setActive] = useState(0)

  return (
    <div className="faq-list">
      {faqs.map((item, index) => (
        <div className={`faq-item reveal ${active === index ? 'is-open' : ''}`} key={item.question}>
          <button type="button" onClick={() => setActive(active === index ? -1 : index)}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item.question}
            <Plus size={26} />
          </button>
          <div className="faq-item__answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
