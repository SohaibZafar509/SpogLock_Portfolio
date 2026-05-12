import { Mail, MapPin, Phone } from 'lucide-react'
import { ArrowButton } from '../components/ArrowButton'
import { Marquee } from '../components/Marquee'
import { assets, contact } from '../data/siteData'

export function ContactPage() {
  return (
    <>
      <section className="contact-hero page-hero">
        <div className="page-hero__copy reveal">
          <h1>Let&apos;s Build Something Useful</h1>
          <p>
            Tell us what you want to build, improve, migrate, or automate. We will shape the
            project around your workflow and goals.
          </p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="contact-panel reveal">
          <div className="contact-panel__shape" style={{ backgroundImage: `url(${assets.contactShape})` }} />
          <h2>Get In Touch</h2>
          <p>Remote-first, serving clients worldwide.</p>
          <div className="contact-methods">
            <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>
              <Phone size={22} />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={22} />
              {contact.email}
            </a>
            <span>
              <MapPin size={22} />
              {contact.model}
            </span>
          </div>
          <ArrowButton href={`mailto:${contact.email}`}>Start a conversation</ArrowButton>
        </div>

        <div className="contact-gallery">
          <img className="reveal" src={assets.contactThumb} alt="Spoglock contact workspace" />
          <img className="reveal" src={assets.contactLocationTwo} alt="Remote work location" />
          <img className="reveal" src={assets.contactLocationThree} alt="Remote work location" />
        </div>
      </section>

      <Marquee />
    </>
  )
}
