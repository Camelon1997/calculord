"use client"

import dynamic from "next/dynamic"

// Componentes que solo se renderizan en el cliente para mejorar LCP
const Footer = dynamic(() => import("./DynamicFooter"), { ssr: false })
const CookieBanner = dynamic(() => import("./CookieBanner"), { ssr: false })
const ScrollToTop = dynamic(() => import("./ScrollToTop"), { ssr: false })

export default function ClientOnlyComponents() {
  return (
    <>
      <ScrollToTop />
      <Footer />
      <CookieBanner />
    </>
  )
}
