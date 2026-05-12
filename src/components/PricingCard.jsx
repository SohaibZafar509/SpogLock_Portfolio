import { Check } from 'lucide-react'
import { ArrowButton } from './ArrowButton'

export function PricingCard({ plan }) {
  return (
    <article className={`pricing-card reveal ${plan.featured ? 'is-featured' : ''}`}>
      <div>
        <h3>{plan.name}</h3>
        <strong>{plan.price}</strong>
      </div>
      <ul>
        {plan.items.map((item) => (
          <li key={item}>
            <Check size={18} />
            {item}
          </li>
        ))}
      </ul>
      <ArrowButton href="/contact" variant={plan.featured ? 'dark' : 'light'}>
        Get started
      </ArrowButton>
    </article>
  )
}
