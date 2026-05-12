import { ArrowRight, Star } from 'lucide-react'
import { ArrowButton } from '../components/ArrowButton'
import { FaqAccordion } from '../components/FaqAccordion'
import { Marquee } from '../components/Marquee'
import { PricingCard } from '../components/PricingCard'
import { SectionIntro } from '../components/SectionIntro'
import {
  assets,
  portfolioPreview,
  pricingPlans,
  services,
  testimonials,
} from '../data/siteData'
import { useLegacyHoverEffect } from '../hooks/useLegacyHoverEffect'

export function HomePage() {
  useLegacyHoverEffect()

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${assets.heroBg})` }}>
        <img className="hero__shape" src={assets.heroShape} alt="" />
        <div className="hero__media hero-reveal">
          <div className="hero__image image-lift hero-hover-card">
            <div className="hero__hover-img">
              <img src={assets.heroCard} alt="Spoglock digital product card" />
            </div>
            <strong>SPOG</strong>
          </div>
          <div className="hero__note">
            <h2>Lock</h2>
            <p>Engineering digital solutions for businesses worldwide, since 2024</p>
            <ArrowButton href="/contact">Get started</ArrowButton>
          </div>
        </div>
        <div className="hero__copy">
          <h1 className="hero-reveal">
            Your Vision,
            <span>
              <img className="spin-slow" src={assets.heroSpark} alt="" />
              Our Code
            </span>
          </h1>
          <p className="hero-reveal">
            We craft mobile, web, and desktop solutions, tailored to your business workflows.
          </p>
        </div>
      </section>

      <section id="about" className="about section">
        <img className="about__ring spin-slow" src={assets.aboutRing} alt="" />
        <div className="about__statement reveal">
          We design and develop digital systems that feel effortless because your business deserves
          software that works as hard as you do.
        </div>
        <div className="about__grid">
          <span className="about__label reveal">/ Our About /</span>
          <div className="about__content reveal">
            <h2>
              <span>Spoglock</span> Labs
            </h2>
            <p>
              Spoglock Labs builds custom software for businesses that need practical digital
              products: mobile apps, web apps, dashboards, internal systems, and high-fidelity
              product interfaces.
            </p>
            <ArrowButton href="/contact" variant="light">
              Get started
            </ArrowButton>
          </div>
        </div>
        <div className="about__chips reveal" aria-hidden="true">
          {[assets.aboutShapeOne, assets.aboutShapeTwo, assets.aboutShapeThree].map((asset) => (
            <img src={asset} alt="" key={asset} />
          ))}
        </div>
      </section>

      <section className="video-band">
        <video autoPlay muted loop playsInline poster={assets.bannerPoster}>
          <source src={assets.bannerVideo} type="video/mp4" />
        </video>
      </section>

      <section id="services" className="services section">
        <SectionIntro
          eyebrow="Our Services"
          title="We build software that moves with your business"
          copy="From product thinking to deployment, each service points toward usable systems and measurable workflow gains."
        />
        <div className="service-list">
          {services.map((service, index) => (
            <a className="service-row reveal" href={service.href} key={service.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <ArrowRight size={28} />
            </a>
          ))}
        </div>
        <div className="service-cards">
          {services.slice(0, 4).map((service) => (
            <a className="service-card reveal" href={service.href} key={service.title}>
              <img src={service.image} alt={service.title} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Marquee items={['Design', 'Development', 'Research', 'Wireframe', 'High Fidelity']} />

      <section className="process section section--dark">
        <img className="process__shape" src={assets.awardsShape} alt="" />
        <div className="process__copy reveal">
          <span>/ Our Process /</span>
          <h2>Start with the workflow. Then shape the software.</h2>
          <p>
            We map the operational problem first, design the user flow, build the right interface,
            then iterate until the product feels stable enough for real teams.
          </p>
        </div>
        <div className="process__steps">
          {['Discovery', 'Experience Design', 'Development', 'Launch'].map((step, index) => (
            <div className="process-step reveal" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-preview section">
        <SectionIntro
          eyebrow="Our Portfolio"
          title="Selected work across apps, dashboards, and interfaces"
          copy="A focused look at the categories currently used in the Spoglock portfolio."
        />
        <div className="portfolio-preview__rail">
          {portfolioPreview.map((project) => (
            <a className="snap-card reveal" href={project.href} key={project.title}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </a>
          ))}
        </div>
        <ArrowButton href="/portfolio" variant="light" className="portfolio-preview__button">
          See all projects
        </ArrowButton>
      </section>

      <section className="pricing section" style={{ backgroundImage: `url(${assets.pricingBg})` }}>
        <img className="pricing__shape spin-slow" src={assets.pricingShape} alt="" />
        <SectionIntro
          eyebrow="Pricing"
          title="Scoped around the work your product actually needs"
          copy="Every engagement is estimated around features, platform, integrations, timeline, and launch support."
        />
        <div className="pricing__grid">
          {pricingPlans.map((plan) => (
            <PricingCard plan={plan} key={plan.name} />
          ))}
        </div>
      </section>

      <section className="testimonials section">
        <img className="testimonials__shape" src={assets.pricingShape} alt="" />
        <SectionIntro eyebrow="Our Testimonial" title="What clients say after the build" />
        <div className="testimonial__hero reveal">
          <img src={assets.woman} alt="Client testimonial portrait" />
          <div>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star size={20} fill="currentColor" key={index} />
              ))}
            </div>
            <strong>5.0</strong>
            <span>Client review average</span>
          </div>
        </div>
        <div className="testimonial__cards">
          {testimonials.map((item) => (
            <article className="testimonial-card reveal" key={item.name}>
              <img src={assets.profile} alt="" />
              <p>{item.quote}</p>
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="faq section section--dark">
        <img className="section-noise" src={assets.noise} alt="" />
        <SectionIntro eyebrow="FAQ" title="Questions before we start" align="right" />
        <FaqAccordion />
      </section>

      <section className="cta section section--dark">
        <div className="cta__inner reveal" style={{ backgroundImage: `url(${assets.ctaBg})` }}>
          <h2>Have an Idea? Let&apos;s Build Something Great Together.</h2>
          <ArrowButton href="/contact">Get Started Now</ArrowButton>
        </div>
      </section>
    </>
  )
}
