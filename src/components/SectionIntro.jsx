export function SectionIntro({ eyebrow, title, copy, align = 'left', className = '' }) {
  return (
    <div className={`section-intro section-intro--${align} reveal ${className}`}>
      {eyebrow ? <span>/{eyebrow}/</span> : null}
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  )
}
