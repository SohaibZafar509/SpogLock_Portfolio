import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Marquee } from '../components/Marquee'
import { PortfolioCard } from '../components/PortfolioCard'
import { categoryPages } from '../data/siteData'

export function CategoryPage({ page }) {
  const category = categoryPages[page] || categoryPages['/portfolio/web-applications']

  return (
    <>
      <section className={`category-hero category-hero--${category.layout}`}>
        <a className="back-link reveal" href="/portfolio">
          <ArrowLeft size={18} />
          Portfolio
        </a>
        <div className="category-hero__copy reveal">
          <h1>{category.title}</h1>
          <p>{category.intro}</p>
        </div>
      </section>

      <section className={`category-section section category-section--${category.layout}`}>
        {category.layout === 'horizontal' ? (
          <div className="horizontal-gallery">
            {category.projects.map((project) => (
              <article className="horizontal-card reveal" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div>
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        ) : category.layout === 'carousel' || category.layout === 'slider' ? (
          <div className="immersive-gallery">
            {category.projects.map((project, index) => (
              <article className="immersive-card reveal" key={project.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <img src={project.image} alt={project.title} />
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="portfolio-grid portfolio-grid--showcase">
            {category.projects.map((project) => (
              <PortfolioCard project={project} key={project.title} wide />
            ))}
          </div>
        )}
      </section>

      <section className="next-projects">
        <a href="/portfolio/web-applications">Web Applications</a>
        <a href="/portfolio/mobile-apps">Mobile Apps</a>
        <a href="/portfolio/product-design">Product Design</a>
        <a href="/portfolio/ui-ux">
          UI/UX <ArrowRight size={18} />
        </a>
      </section>
      <Marquee dark />
    </>
  )
}
