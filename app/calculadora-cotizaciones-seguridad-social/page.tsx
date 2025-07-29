import type { Metadata } from "next"
import CalculadoraCotizaciones from "./CalculadoraCotizaciones"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "🔥 Calculadora Cotizaciones Seguridad Social 2025 | Régimen General y Autónomos | Calculord",
  description:
    "✅ Calcula las cotizaciones EXACTAS de la Seguridad Social 2025. 📊 Régimen general y autónomos. Desglose detallado trabajador-empresa. 🆓 Herramienta gratuita actualizada con bases y tipos de cotización 2025.",
  keywords: [
    "cotizaciones seguridad social 2025",
    "calculadora cotizaciones SS",
    "régimen general cotizaciones",
    "autónomos RETA cotizaciones",
    "bases cotización 2025",
    "tipos cotización seguridad social",
    "cotizaciones trabajador empresa",
    "calculadora SS España",
    "desglose cotizaciones nómina",
    "contingencias comunes 2025",
    "desempleo cotización 1.55",
    "formación profesional 0.6",
    "accidentes trabajo cotización",
    "calculadora RETA 2025",
    "cotización mínima autónomos",
    "cotización máxima SS",
    "herramientas RRHH cotizaciones",
    "nómina cotizaciones cálculo",
    "seguridad social España",
    "calculadora laboral gratuita",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-cotizaciones-seguridad-social",
  },
  openGraph: {
    title: "🔥 Calculadora Cotizaciones Seguridad Social 2025 | Calculord",
    description:
      "✅ Calcula cotizaciones EXACTAS SS 2025. 📊 Régimen general y autónomos. Desglose detallado trabajador-empresa. 🆓 Gratis.",
    url: "https://calculord.com/calculadora-cotizaciones-seguridad-social",
    siteName: "Calculord",
    images: [
      {
        url: "/og-cotizaciones-ss.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Cotizaciones Seguridad Social 2025 - Régimen General y Autónomos",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora Cotizaciones Seguridad Social 2025",
    description: "✅ Calcula cotizaciones EXACTAS SS. Régimen general y autónomos. Desglose detallado 2025. 🆓",
    images: ["/og-cotizaciones-ss.jpg"],
    creator: "@calculord",
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
  other: {
    "article:section": "Calculadoras Laborales",
    "article:tag": "Cotizaciones, Seguridad Social, Régimen General, Autónomos",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Cotizaciones Seguridad Social 2025",
  description:
    "Calculadora gratuita para calcular las cotizaciones exactas de la Seguridad Social para trabajadores del régimen general y autónomos.",
  url: "https://calculord.com/calculadora-cotizaciones-seguridad-social",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cálculo régimen general",
    "Cálculo autónomos RETA",
    "Desglose trabajador-empresa",
    "Bases y tipos actualizados 2025",
    "Contingencias comunes",
    "Desempleo y formación",
    "Accidentes de trabajo",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-01-28",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

export default function CotizacionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumbs currentPage="Cotizaciones Seguridad Social" />
      <CalculadoraCotizaciones />
    </>
  )
}
