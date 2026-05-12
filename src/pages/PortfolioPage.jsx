import { useMemo, useState } from 'react'
import { Marquee } from '../components/Marquee'
import { PortfolioCard } from '../components/PortfolioCard'
import { SectionIntro } from '../components/SectionIntro'
import { portfolioProjects, productProjects } from '../data/siteData'

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web Apps', value: 'webapps' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'UI/UX', value: 'uiux' },
]

function getInitialFilter() {
  const params = new URLSearchParams(window.location.search)
  return params.get('filter') || 'all'
}

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState(getInitialFilter)

  const projects = useMemo(() => {
    if (activeFilter === 'all') return portfolioProjects
    if (activeFilter === 'product') return productProjects
    if (activeFilter === 'uiux') return portfolioProjects
    return portfolioProjects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__copy reveal">
          <h1>We Make Digital Beautiful</h1>
          <p>
            We craft digital experiences that engage, convert, and grow your business. From
            branding to development, we provide end-to-end solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section className="portfolio-page section">
        <div className="filter-tabs reveal" role="tablist" aria-label="Portfolio filters">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter.value ? 'is-active' : ''}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              key={filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <PortfolioCard project={project} key={`${project.title}-${project.type}`} />
          ))}
        </div>
      </section>

      <section className="section products-section">
        <SectionIntro
          eyebrow="Products"
          title="Design explorations retained from the live product page"
          copy="These are the product-facing portfolio pieces still linked from the active site flow."
        />
        <div className="portfolio-grid portfolio-grid--masonry">
          {productProjects.map((project) => (
            <PortfolioCard project={project} key={project.title} wide />
          ))}
        </div>
      </section>
      <Marquee />
    </>
  )
}
