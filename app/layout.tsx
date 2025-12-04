import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import dynamic from "next/dynamic"
import "./globals.css"
import Header from "./components/Header"
import ClientOnlyComponents from "./components/ClientOnlyComponents"

const DynamicFooter = dynamic(() => import("./components/DynamicFooter"), {
  ssr: false,
})
const CookieBanner = dynamic(() => import("./components/CookieBanner"), {
  ssr: false,
})
const ScrollToTop = dynamic(() => import("./components/ScrollToTop"), {
  ssr: false,
})

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
    "calcular salario neto bruto",
    "cuánto cobra un trabajador",
    "cuánto cuesta contratar empleado",
    "calcular indemnización despido",
    "cuánto me queda de paro",
    "calcular cuota hipoteca",
    "simulador ahorro",
    "días vacaciones corresponden",
    "calendario fiscal autónomos 2025",
  ],
  authors: [{ name: "Calculord", url: "https://calculord.com" }],
  creator: "Calculord",
  publisher: "Calculord",
  abstract:
    "Calculord es la plataforma líder en España para cálculos laborales y financieros. Ofrecemos herramientas precisas y actualizadas para calcular salarios, cotizaciones de la Seguridad Social, IRPF en nóminas, prestaciones por desempleo, indemnizaciones por despido, hipotecas, ahorro con interés compuesto y vacaciones laborales. Todas nuestras calculadoras están actualizadas con la normativa española vigente de 2025, incluyendo el SMI de 1.184€ mensuales.",
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
      "google-adsense-account": "ca-pub-6020684458619077",
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
  other: {
    "google-adsense-account": "ca-pub-6020684458619077",
  },
  generator: "v0.dev",
}

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calculord",
  url: "https://calculord.com",
  logo: "https://calculord.com/logo.png",
  description:
    "Plataforma líder en calculadoras laborales y financieras para profesionales y particulares en España. Herramientas precisas y actualizadas con la normativa vigente española.",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  knowsAbout: [
    "Derecho Laboral Español",
    "Seguridad Social España",
    "Nóminas y Salarios",
    "Cotizaciones Sociales",
    "Salario Mínimo Interprofesional 2025",
    "Recursos Humanos",
    "Finanzas Personales",
    "Hipotecas en España",
    "Ahorro e Inversión",
    "Planificación Financiera",
    "IRPF e impuestos",
    "Prestación por Desempleo",
    "Indemnizaciones Laborales",
    "Vacaciones Laborales",
    "Régimen General y Autónomos",
    "SEPE y prestaciones",
    "Calendario Fiscal",
    "Contratos de Trabajo",
    "Honorarios Profesionales",
  ],
  sameAs: ["https://twitter.com/calculord", "https://linkedin.com/company/calculord", "https://facebook.com/calculord"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "ES",
    availableLanguage: "Spanish",
  },
  serviceType: [
    "Calculadora de Salarios",
    "Calculadora de Cotizaciones",
    "Calculadora de Nóminas",
    "Calculadora de Hipotecas",
    "Calculadora de Ahorro",
    "Calculadora de Prestación por Desempleo",
    "Calculadora de Indemnizaciones",
    "Calculadora de Vacaciones",
  ],
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
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800 antialiased`}>
        <Header />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6020684458619077"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationStructuredData, websiteStructuredData]),
          }}
        />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8QKFLE7EEH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8QKFLE7EEH', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            send_page_view: false
          });
        `}
        </Script>

        <main className="min-h-screen">{children}</main>

        <ClientOnlyComponents />
      </body>
    </html>
  )
}
