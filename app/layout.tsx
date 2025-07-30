import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "./components/Header"
import DynamicFooter from "./components/DynamicFooter"
import CookieBanner from "./components/CookieBanner"

// Optimización de fuentes con next/font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://calculord.com"),
  title: {
    default: "Calculord: Calculadoras Laborales y Financieras Gratuitas 2025",
    template: "%s | Calculord",
  },
  description:
    "🔥 Suite completa de calculadoras laborales y financieras GRATUITAS 2025. ✅ Salarios, cotizaciones SS, nóminas, hipotecas, ahorros y más. ⚡ Herramientas profesionales actualizadas con normativa española.",
  applicationName: "Calculord",
  referrer: "origin-when-cross-origin",
  keywords: [
    "calculadoras laborales 2025",
    "calculadoras financieras gratuitas",
    "calculadora salario España",
    "cotizaciones seguridad social 2025",
    "SMI 2025 1184 euros",
    "calculadora nómina IRPF",
    "calculadora hipoteca España",
    "calculadora ahorro interés compuesto",
    "calculadora vacaciones laborales",
    "calculadora despidos indemnización",
    "calculadora paro SEPE",
    "honorarios abogado baremos",
    "herramientas RRHH gratuitas",
    "derecho laboral calculadoras",
    "finanzas personales España",
    "calculadora salarial online",
    "régimen general autónomos",
    "prestación por desempleo",
    "planificación financiera",
    "recursos humanos herramientas",
  ],
  authors: [{ name: "Calculord", url: "https://calculord.com" }],
  creator: "Calculord",
  publisher: "Calculord",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#2563eb" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "0ba11d3d8aaa2d03",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "yandex-verification": "your-yandex-verification-code",
    },
  },
  category: "Finance",
  openGraph: {
    title: "Calculadoras Laborales y Financieras Gratuitas 2025 | Calculord",
    description:
      "🔥 Suite completa de calculadoras GRATUITAS: salarios, cotizaciones SS, nóminas, hipotecas, ahorros. ✅ Actualizadas 2025 con normativa española.",
    url: "https://calculord.com",
    siteName: "Calculord",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadoras Laborales y Financieras Gratuitas 2025 - Calculord",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadoras Laborales y Financieras Gratuitas 2025 | Calculord",
    description:
      "🔥 Suite completa de calculadoras GRATUITAS: salarios, cotizaciones, nóminas, hipotecas, ahorros. ✅ Actualizadas 2025.",
    images: ["/og-image-home.jpg"],
    creator: "@calculord",
    site: "@calculord",
  },
    generator: 'v0.dev'
}

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calculord",
  url: "https://calculord.com",
  logo: "https://calculord.com/logo.png",
  description: "Plataforma líder en calculadoras laborales y financieras para profesionales y particulares en España",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  knowsAbout: [
    "Derecho Laboral",
    "Seguridad Social",
    "Nóminas",
    "Cotizaciones",
    "SMI",
    "Recursos Humanos",
    "Finanzas Personales",
    "Hipotecas",
    "Ahorro",
    "Planificación Financiera",
  ],
  sameAs: ["https://twitter.com/calculord", "https://linkedin.com/company/calculord", "https://facebook.com/calculord"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "ES",
    availableLanguage: "Spanish",
  },
}

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calculord",
  alternateName: "Calculadoras Laborales y Financieras",
  url: "https://calculord.com",
  description: "Suite completa de calculadoras laborales y financieras profesionales",
  publisher: {
    "@type": "Organization",
    name: "Calculord",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://calculord.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" dir="ltr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}>
        <Header />

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationStructuredData, websiteStructuredData]),
          }}
        />

        {/* Google Consent Mode */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500,
          });
        `}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8QKFLE7EEH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8QKFLE7EEH', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
        </Script>

        <main className="min-h-screen">{children}</main>
        <DynamicFooter />
        <CookieBanner />
      </body>
    </html>
  )
}
