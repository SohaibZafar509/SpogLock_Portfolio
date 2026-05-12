import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { assets, contact, navItems } from '../data/siteData'
import { ArrowButton } from './ArrowButton'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Spoglock Labs home">
          <img src={assets.logoBlack} alt="Spoglock Labs" />
        </a>
<nav className="desktop-nav" aria-label="Primary navigation">
  {navItems.map((item) => (
    <div className="nav-item" key={item.label}>
      <a href={item.href}>
        {item.label}
        {item.children && (
          <span>
            <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z"
                fill="currentColor"
              />
            </svg>
          </span>
        )}
      </a>
      {item.children && (
        <div className="nav-dropdown">
          {item.children.map((child) => (
            <a href={child.href} key={child.label}>
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>
        <div className="header-actions">
          <ArrowButton href="/contact" variant="light">
            Contact Us
          </ArrowButton>
          <button className="menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div className={`drawer-overlay ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`site-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <a className="drawer-brand" href="/" onClick={() => setOpen(false)}>
            spoglock
          </a>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={30} />
          </button>
        </div>
        <div className="drawer-copy">
          <h2>Hello There!</h2>
          <p>We build custom software for businesses - mobile, web, desktop, and more.</p>
        </div>
        <nav className="drawer-nav" aria-label="Menu navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="drawer-info">
          <h3>Information</h3>
          <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.model}</span>
        </div>
        <div className="drawer-social">
          <a href="https://github.com/SpogLock" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </aside>
    </>
  )
}
