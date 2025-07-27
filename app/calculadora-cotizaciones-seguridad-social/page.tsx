import type { Metadata } from "next"
import CalculadoraCotizaciones from "./CalculadoraCotizaciones"

export const metadata: Metadata = {
  title: "Calculadora de Cotizaciones Seguridad Social 2025 | Régimen General y Autónomos | Calculord",
  description:
    "Calcula las cotizaciones exactas de la Seguridad Social para trabajadores y empresas. Régimen general y autónomos. Desglose detallado actualizado con la normativa 2025. Herramienta gratuita y precisa.",
  keywords: [
    "cotizaciones seguridad social",
    "régimen general",
    "autónomos",
    "calculadora cotizaciones",
    "seguridad social 2025",
    "bases cotización",
    "tipos cotización",
    "trabajador empresa",
    "nómina cotizaciones",
    "RETA",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-cotizaciones-seguridad-social",
  },
  openGraph: {
    title: "Calculadora de Cotizaciones Seguridad Social 2025 | Calculord",
    description:
      "Calcula las cotizaciones exactas de la Seguridad Social. Régimen general y autónomos. Desglose detallado actualizado 2025.",
    url: "https://calculord.com/calculadora-cotizaciones-seguridad-social",
    siteName: "Calculord",
    images: [
      {
        url: "/og-cotizaciones.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Cotizaciones Seguridad Social 2025",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Cotizaciones Seguridad Social 2025",
    description: "Calcula cotizaciones exactas SS. Régimen general y autónomos. Desglose detallado 2025.",
    images: ["/og-cotizaciones.jpg"],
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
}

export default function CotizacionesPage() {
  return <CalculadoraCotizaciones />
}
