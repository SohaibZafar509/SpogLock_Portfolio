function ArrowIcon() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ArrowButton({ children, href = '/contact', variant = 'dark', className = '' }) {
  return (
    <a className={`arrow-btn arrow-btn--${variant} ${className}`} href={href}>
      <span className="arrow-btn__inner">
        <span className="btn-text">{children}</span>
        <span className="btn-icon">
          <ArrowIcon />
        </span>
        <span className="btn-icon">
          <ArrowIcon />
        </span>
      </span>
    </a>
  )
}
