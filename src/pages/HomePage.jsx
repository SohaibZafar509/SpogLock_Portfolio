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
  processSteps,
  services,
  testimonials,
} from '../data/siteData'
import { useLegacyHoverEffect } from '../hooks/useLegacyHoverEffect'

function ProcessArrowIcon() {
  return (
    <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z"
        fill="currentColor"
      />
    </svg>
  )
}

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
            <span className="hero__code-line">
              <img className="spin-slow" src={assets.heroSpark} alt="" />
              <span className="title-slide-gradient">Our Code</span>
            </span>
          </h1>
          <p className="hero-reveal">
            We craft mobile, web, and desktop solutions, tailored to your business workflows.
          </p>
        </div>
      </section>

      <section id="about" className="about section">
        <img className="about__ring" src={assets.aboutRing} alt="" />
        <h2 className="about__statement reveal">
          We take pride in every line of code we write
          <span className="about-scale-image" style={{ '--about-image': `url(${assets.aboutShapeOne})` }} />
          {' '}
          because your business deserves
          <span className="about-scale-image" style={{ '--about-image': `url(${assets.aboutShapeTwo})` }} />
          {' '}
          software that actually works. No shortcuts,
          <span className="about-scale-image" style={{ '--about-image': `url(${assets.aboutShapeThree})` }} />
          {' '}
          no compromises.
        </h2>
        <div className="about__grid">
          <span className="about__label reveal">/ Our About /</span>
          <div className="about__content reveal">
            <h2>
              <span className="title-slide-gradient">Spoglock</span>
              <small>Labs</small>
            </h2>
            <p>
              At Spoglock Labs, quality isn&apos;t a feature, it&apos;s our standard. We build custom
              mobile, web, and desktop applications designed around the way your business operates.
              From the first conversation to final deployment, our goal is simple: you walk away
              satisfied. We don&apos;t ship until you are.
            </p>
            <ArrowButton href="/contact" variant="ai">
              Get started
            </ArrowButton>
          </div>
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
            <a className="service-card reveal" href={service.href} key={`${service.title}-card`}>
              <span className="service-card__thumb">
                <img src={service.cardImage} alt={service.cardTitle} />
              </span>
              <span className="service-card__label">{service.cardTitle}</span>
            </a>
          ))}
        </div>
      </section>

      <Marquee variant="ai" />

      <section className="process section section--dark">
        <img className="process__shape" src={assets.awardsShape} alt="" />
        <div className="process__inner">
          <div className="process__title reveal">
            <h2>
              Design Process
              <br />
              What We Do
            </h2>
          </div>
          <div className="process__divider" aria-hidden="true">
            <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z"
                fill="white"
                fillOpacity="0.1"
              />
            </svg>
          </div>
          <div className="process__steps">
            {processSteps.map((step, index) => (
              <div className="process-step reveal" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>
                  {step.title}
                  <br />
                  {step.titleBreak}
                </h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <div className="process__bottom reveal">
            <p>
              Don&apos;t hesitate collaborate with expertise-
              <a className="process__talk" href="/contact">
                <span className="process__talk-text">Let&apos;s Talk</span>
                <span className="process__talk-icon">
                  <ProcessArrowIcon />
                </span>
                <span className="process__talk-icon">
                  <ProcessArrowIcon />
                </span>
              </a>
            </p>
          </div>
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
