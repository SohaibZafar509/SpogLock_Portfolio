import { useEffect } from 'react'
import gsap from 'gsap'

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      existing.addEventListener('load', resolve, { once: true })
      existing.addEventListener('error', reject, { once: true })
      if (existing.dataset.loaded === 'true') resolve()
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => {
      script.dataset.loaded = 'true'
      resolve()
    }
    script.onerror = reject
    document.head.appendChild(script)
  })

export function useLegacyHoverEffect() {
  useEffect(() => {
    let disposed = false
    let hoverInstance

    const init = async () => {
      await loadScript('/vendor/three.js')
      window.gsap = gsap
      await loadScript('/vendor/hover-effect.umd.js')

      if (disposed || !window.hoverEffect) return

      const parent = document.querySelector('.hero__hover-img')
      const image = parent?.querySelector('img')
      if (!parent || !image) return

      const setup = () => {
        if (disposed || parent.querySelector('canvas')) return

        hoverInstance = new window.hoverEffect({
          parent,
          intensity: 0.6,
          speedIn: 1,
          speedOut: 1,
          hover: false,
          image1: image.currentSrc || image.src,
          image2: image.currentSrc || image.src,
          displacementImage: image.currentSrc || image.src,
          imagesRatio: image.naturalHeight / image.naturalWidth,
        })

        const next = () => hoverInstance?.next()
        const previous = () => hoverInstance?.previous()

        parent.closest('.hero-hover-card')?.addEventListener('mouseenter', next)
        parent.closest('.hero-hover-card')?.addEventListener('mouseleave', previous)

        hoverInstance.disposeReactListeners = () => {
          parent.closest('.hero-hover-card')?.removeEventListener('mouseenter', next)
          parent.closest('.hero-hover-card')?.removeEventListener('mouseleave', previous)
        }
      }

      if (image.complete) {
        setup()
      } else {
        image.addEventListener('load', setup, { once: true })
      }
    }

    init().catch(() => {})

    return () => {
      disposed = true
      hoverInstance?.disposeReactListeners?.()
    }
  }, [])
}
