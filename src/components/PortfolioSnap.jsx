import { ArrowButton } from './ArrowButton'

export function PortfolioSnap({ slides }) {
  return (
    <section className="portfolio-snap">
      <div className="portfolio-snap__intro">
        <div className="portfolio-snap__label reveal">
          <span>/ Our Portfolio /</span>
        </div>
        <div className="portfolio-snap__copy">
          <h2 className="reveal">Real Problems, Real Solutions</h2>
          <p className="reveal">
            We&apos;ve helped businesses streamline operations, reach their customers, and grow -
            through software built specifically for them.
          </p>
          <div className="reveal">
            <ArrowButton href="/portfolio" variant="ai">
              See All Portfolio
            </ArrowButton>
          </div>
        </div>
      </div>

      <div className="portfolio-snap__content">
        <div className="portfolio-snap__holder">
          <div className="portfolio-snap__overlay">
            <div className="portfolio-snap__thumbs">
              <div className="portfolio-snap__thumbs-track">
                {slides.map((slide) => (
                  <a
                    className="portfolio-snap__thumb"
                    href={slide.href}
                    key={`${slide.number}-thumb`}
                  >
                    <img src={slide.thumb} alt="" />
                  </a>
                ))}
              </div>
            </div>

            <div className="portfolio-snap__captions">
              <div className="portfolio-snap__captions-track">
                {slides.map((slide) => (
                  <a
                    className="portfolio-snap__caption"
                    href={slide.href}
                    key={`${slide.number}-caption`}
                  >
                    <span className="portfolio-snap__caption-title">{slide.title}</span>
                    <span className="portfolio-snap__caption-tags">
                      {slide.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="portfolio-snap__images">
            {slides.map((slide) => (
              <a className="portfolio-snap__slide" href={slide.href} key={slide.number}>
                <div className="portfolio-snap__mask">
                  <img src={slide.image} alt={slide.title} />
                  <h3>{slide.number}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
