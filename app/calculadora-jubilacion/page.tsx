import type { Metadata } from "next"
import { Breadcrumbs } from "../components/Breadcrumbs"
import CalculadoraJubilacion from "./CalculadoraJubilacion"

export const metadata: Metadata = {
  title: "Calculadora de Jubilación 2025 - Calcula tu Pensión | Calculord",
  description:
    "Calculadora de pensión de jubilación 2025. Calcula tu pensión según años cotizados, base reguladora y porcentajes. Incluye simulación de jubilación anticipada y ordinaria.",
  keywords: [
    "calculadora jubilación",
    "pensión jubilación 2025",
    "calcular pensión",
    "base reguladora",
    "años cotizados",
    "jubilación anticipada",
    "jubilación ordinaria",
    "seguridad social",
    "pensión España",
  ],
  openGraph: {
    title: "Calculadora de Jubilación 2025 - Calcula tu Pensión",
    description: "Calcula tu pensión de jubilación según años cotizados y base reguladora. Simulación gratuita 2025.",
    type: "website",
    url: "https://calculord.com/calculadora-jubilacion",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-jubilacion",
  },
}

export default function CalculadoraJubilacionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Jubilación 2025",
    description:
      "Calculadora gratuita de pensión de jubilación en España. Calcula tu pensión según años cotizados y base reguladora.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    featureList: [
      "Cálculo de base reguladora",
      "Porcentaje según años cotizados",
      "Jubilación anticipada y ordinaria",
      "Límites máximos y mínimos",
      "Simulación completa",
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs currentPage="Calculadora de Jubilación" />
      <CalculadoraJubilacion />
    </>
  )
}
