"use client"

import { useEffect } from "react"

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Lazy load de imágenes con Intersection Observer
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              imageObserver.unobserve(img)
            }
          }
        })
      })

      const images = document.querySelectorAll("img[data-src]")
      images.forEach((img) => imageObserver.observe(img))

      return () => imageObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    // Prefetch crítico solo en idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        const criticalLinks = document.querySelectorAll('a[href^="/calculadora"]')
        criticalLinks.forEach((link) => {
          const href = link.getAttribute("href")
          if (href) {
            const prefetchLink = document.createElement("link")
            prefetchLink.rel = "prefetch"
            prefetchLink.href = href
            document.head.appendChild(prefetchLink)
          }
        })
      })
    }
  }, [])

  return null
}
