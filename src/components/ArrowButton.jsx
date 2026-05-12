import { ArrowRight } from 'lucide-react'

export function ArrowButton({ children, href = '/contact', variant = 'dark', className = '' }) {
  return (
    <a className={`arrow-btn arrow-btn--${variant} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={20} strokeWidth={2.4} />
    </a>
  )
}
