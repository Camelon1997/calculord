import type { Metadata } from "next"
import CalculadoraHipoteca from "./CalculadoraHipoteca"
import { Breadcrumbs } from "../components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Calculadora de Hipoteca 2025 - Cuota y Amortización",
  description:
    "Calcula tu cuota hipotecaria mensual al instante. Tabla de amortización completa, TAE, gastos de notaría y registro. Actualizada 2025.",
  keywords: [
    "calculadora hipoteca 2025",
    "cuota mensual hipoteca",
    "tabla amortización hipoteca",
    "intereses hipoteca total",
    "sistema amortización francés",
    "préstamo hipotecario España",
    "simulador hipoteca gratuito",
    "calculadora préstamo casa",
    "hipoteca fija variable",
    "amortización francesa",
    "cuota hipoteca mensual",
    "intereses hipoteca calcular",
    "capital pendiente hipoteca",
    "TAE hipoteca 2025",
    "gastos hipoteca notaría",
    "hipoteca primera vivienda",
    "calculadora financiera hipoteca",
    "préstamo vivienda España",
    "hipoteca jóvenes 2025",
    "simulador bancario hipoteca",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
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
  openGraph: {
    title: "Calculadora de Hipoteca 2025 - Cuota y Amortización | Calculord",
    description:
      "Calcula tu cuota hipotecaria con tabla de amortización completa, TAE y todos los gastos. Herramienta actualizada 2025.",
    url: "https://calculord.com/calculadora-hipoteca",
    siteName: "Calculord",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-calculadora-hipoteca.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Hipoteca 2025 - Cuota Mensual y Amortización",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Hipoteca 2025 - Cuota y Amortización",
    description: "Calcula tu cuota hipotecaria con tabla de amortización, TAE y gastos incluidos. Gratis 2025.",
    images: ["/og-calculadora-hipoteca.jpg"],
    creator: "@calculord",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-hipoteca",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Hipoteca 2025",
  description:
    "Calculadora gratuita para calcular la cuota mensual de hipoteca, intereses totales y tabla de amortización completa.",
  url: "https://calculord.com/calculadora-hipoteca",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Cuota mensual hipoteca",
    "Tabla de amortización",
    "Intereses totales",
    "Sistema de amortización francés",
    "Capital pendiente",
    "Desglose mensual",
    "Simulación completa",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-01-28",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

export default function CalculadoraHipotecaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumbs currentPage="Calculadora de Hipoteca" />
      <CalculadoraHipoteca />
    </>
  )
}
