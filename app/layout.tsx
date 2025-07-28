import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })

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
    default: "Calculord - Calculadoras Laborales y Financieras Gratuitas 2025",
    template: "%s | Calculord",
  },
  description:
    "Suite completa de calculadoras laborales y financieras GRATUITAS 2025. Calcula salarios, cotizaciones SS, nóminas, hipotecas, ahorros y más. Herramientas profesionales actualizadas con la normativa española.",
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
  ].join(", "),
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
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "yandex-verification": "your-yandex-verification-code",
    },
  },
  category: "Finance",
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
  mainEntity: {
    "@type": "ItemList",
    name: "Calculadoras Disponibles",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebApplication",
          name: "Calculadora de Cotizaciones Seguridad Social",
          url: "https://calculord.com/calculadora-cotizaciones-seguridad-social",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebApplication",
          name: "Calculadora de Salario por Horas",
          url: "https://calculord.com/calculadora-salario-por-horas",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "WebApplication",
          name: "Calculadora de Despidos",
          url: "https://calculord.com/calculadora-despidos",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "WebApplication",
          name: "Calculadora de Paro",
          url: "https://calculord.com/calculadora-paro",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "WebApplication",
          name: "Calculadora de Nómina",
          url: "https://calculord.com/calculadora-nomina",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "WebApplication",
          name: "Calculadora de Vacaciones",
          url: "https://calculord.com/calculadora-vacaciones",
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "WebApplication",
          name: "Calculadora de Hipoteca",
          url: "https://calculord.com/calculadora-hipoteca",
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "WebApplication",
          name: "Calculadora de Ahorro",
          url: "https://calculord.com/calculadora-ahorro",
        },
      },
    ],
  },
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://calculord.com",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />
        <link rel="canonical" href="https://calculord.com" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Calculord" />
      </head>
      <body className={inter.className}>
        <Header />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8QKFLE7EEH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8QKFLE7EEH', {
            page_title: document.title,
            page_location: window.location.href,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
        </Script>

        {/* Schema.org for Google */}
        <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Son gratuitas las calculadoras de Calculord?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, todas nuestras calculadoras laborales y financieras son completamente gratuitas y no requieren registro."
                }
              },
              {
                "@type": "Question", 
                "name": "¿Están actualizadas las calculadoras con la normativa 2025?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, todas nuestras calculadoras están actualizadas con la normativa laboral y fiscal española de 2025, incluyendo SMI, cotizaciones y tramos de IRPF."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué calculadoras laborales están disponibles?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Disponemos de calculadoras de cotizaciones de seguridad social, salario por horas, despidos, paro, nómina completa, vacaciones y honorarios de abogado."
                }
              }
            ]
          }
        `}
        </Script>
        {children}
      </body>
    </html>
  )
}
