import type { Metadata } from "next"
import CalculadoraParo from "./CalculadoraParo"

export const metadata: Metadata = {
  title: "🔥 Calculadora Paro 2025 | Prestación Desempleo SEPE + Subsidio | Calculord",
  description:
    "✅ Calcula tu PRESTACIÓN por desempleo y subsidio SEPE 2025. 📊 Base reguladora, duración exacta, topes máximos/mínimos. 💰 Requisitos acceso y cuantías actualizadas. 🆓 Herramienta gratuita oficial.",
  keywords: [
    "calculadora paro 2025",
    "prestación por desempleo SEPE",
    "subsidio desempleo 2025",
    "base reguladora paro",
    "duración prestación desempleo",
    "topes paro 2025",
    "requisitos paro España",
    "cuantía prestación desempleo",
    "RAI renta activa inserción",
    "calculadora SEPE oficial",
    "desempleo contributivo",
    "subsidio mayores 52 años",
    "prestación desempleo máxima",
    "prestación desempleo mínima",
    "cotización desempleo 1.55",
    "periodo carencia paro",
    "renovación demanda empleo",
    "calculadora laboral paro",
    "derechos desempleados",
    "herramientas SEPE gratuitas",
  ].join(", "),
  authors: [{ name: "Calculord" }],
  creator: "Calculord",
  publisher: "Calculord",
  metadataBase: new URL("https://calculord.com"),
  alternates: {
    canonical: "https://calculord.com/calculadora-paro",
  },
  openGraph: {
    title: "🔥 Calculadora Paro 2025 | Prestación Desempleo SEPE + Subsidio | Calculord",
    description:
      "✅ Calcula prestación desempleo y subsidio SEPE. 📊 Base reguladora, duración, topes 2025. 💰 Requisitos actualizados. 🆓",
    url: "https://calculord.com/calculadora-paro",
    siteName: "Calculord",
    images: [
      {
        url: "/og-paro.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Paro 2025 - Prestación por Desempleo SEPE",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🔥 Calculadora Paro 2025 | Prestación Desempleo SEPE",
    description: "✅ Calcula prestación desempleo y subsidio. Base reguladora, duración, topes 2025. 🆓",
    images: ["/og-paro.jpg"],
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
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Paro 2025",
  description:
    "Calculadora gratuita para calcular la prestación por desempleo, subsidio y duración según los criterios del SEPE.",
  url: "https://calculord.com/calculadora-paro",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  featureList: [
    "Base reguladora",
    "Duración prestación",
    "Topes máximos y mínimos 2025",
    "Requisitos de acceso",
    "Subsidio por desempleo",
    "RAI",
    "Cálculo SEPE oficial",
  ],
  creator: {
    "@type": "Organization",
    name: "Calculord",
  },
  dateModified: "2025-01-28",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
}

export default function ParoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <CalculadoraParo />
    </>
  )
}
