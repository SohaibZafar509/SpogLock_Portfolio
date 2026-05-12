import { assets, contact, navItems } from '../data/siteData'
import { GithubIcon } from './SocialIcons'

export function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${assets.footerBg})` }}>
      <div className="footer__grid reveal">
        <div>
          <h3>Remote-First</h3>
          <p>We work with clients worldwide, fully remote.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer__social">
          <a href="https://github.com/SpogLock" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={22} />
          </a>
        </div>
      </div>
      <a href="/contact" className="footer__brand reveal">
        Spoglock Labs
      </a>
      <p className="footer__copyright">Copyright 2025 Spoglock Labs. All Right Reserved.</p>
    </footer>
  )
}
