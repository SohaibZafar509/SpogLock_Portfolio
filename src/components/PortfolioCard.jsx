export function PortfolioCard({ project, wide = false }) {
  return (
    <article className={`portfolio-card reveal ${wide ? 'portfolio-card--wide' : ''}`}>
      <div className="portfolio-card__image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="portfolio-card__body">
        <h3>{project.title}</h3>
        <span>{project.type}</span>
      </div>
    </article>
  )
}
