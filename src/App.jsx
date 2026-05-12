import { useEffect, useMemo, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { useGsapAnimations } from './hooks/useGsapAnimations'
import { CategoryPage } from './pages/CategoryPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { categoryPages } from './data/siteData'

function useRoute() {
  const [route, setRoute] = useState({
    path: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  })

  useEffect(() => {
    const updateRoute = () => {
      setRoute({
        path: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
      })
    }

    const handleClick = (event) => {
      const link = event.target.closest('a')
      if (!link) return

      const url = new URL(link.href)
      if (url.origin !== window.location.origin) return
      if (link.getAttribute('href')?.startsWith('mailto:') || link.getAttribute('href')?.startsWith('tel:')) return

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
      updateRoute()
    }

    window.addEventListener('popstate', updateRoute)
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('popstate', updateRoute)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    if (route.hash) {
      requestAnimationFrame(() => document.querySelector(route.hash)?.scrollIntoView({ behavior: 'smooth' }))
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route.path, route.search, route.hash])

  return route
}

function App() {
  const route = useRoute()
  const routeKey = `${route.path}${route.search}`
  const [loaderHidden, setLoaderHidden] = useState(false)
  useGsapAnimations(routeKey)

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaderHidden(true), 650)

    return () => window.clearTimeout(timeout)
  }, [])

  const page = useMemo(() => {
    if (route.path === '/contact') return <ContactPage />
    if (route.path === '/portfolio') return <PortfolioPage />
    if (categoryPages[route.path]) return <CategoryPage page={route.path} />
    return <HomePage />
  }, [route.path])

  return (
    <>
      <Loader hidden={loaderHidden} />
      <div className="cursor-dot" aria-hidden="true" />
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  )
}

export default App
