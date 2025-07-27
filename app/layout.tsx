import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

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
    default: "Calculadoras Laborales 2025 | Salarios, Cotizaciones y SMI - Calculord",
    template: "%s | Calculord",
  },
  description:
    "Suite completa de calculadoras laborales gratuitas. Calcula salarios, cotizaciones de seguridad social, SMI 2025 y más. Herramientas profesionales actualizadas.",
  applicationName: "Calculord",
  referrer: "origin-when-cross-origin",
  keywords: ["calculadoras laborales", "salario", "cotizaciones", "SMI 2025", "nómina", "seguridad social"],
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
    generator: 'v0.dev'
}

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calculord",
  url: "https://calculord.com",
  logo: "https://calculord.com/logo.png",
  description: "Plataforma líder en calculadoras laborales y herramientas profesionales para recursos humanos",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  knowsAbout: ["Derecho Laboral", "Seguridad Social", "Nóminas", "Cotizaciones", "SMI", "Recursos Humanos"],
  sameAs: ["https://twitter.com/calculord", "https://linkedin.com/company/calculord"],
}

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calculord",
  url: "https://calculord.com",
  description: "Suite completa de calculadoras laborales profesionales",
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
        <link rel="canonical" href="https://calculord.com" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
      </head>
      <body className={inter.className}>
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
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
