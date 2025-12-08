import type { Metadata } from "next"
import CalculadoraROI from "./CalculadoraROI"

export const metadata: Metadata = {
  title: "Calculadora ROI 2025 - Calcula el Retorno de Inversión Gratis",
  description:
    "Calcula el ROI de tus inversiones en segundos. Herramienta gratuita para medir la rentabilidad de proyectos, marketing, negocio. Fórmula ROI + ejemplos reales.",
  keywords: "calculadora roi, retorno de inversión, calcular roi, rentabilidad inversión, roi marketing, roi proyecto",
  openGraph: {
    title: "Calculadora ROI 2025 - Retorno de Inversión",
    description: "Calcula el ROI de tus inversiones. Herramienta gratuita para medir rentabilidad.",
    type: "website",
    url: "https://calculord.com/calculadora-roi",
  },
  alternates: {
    canonical: "https://calculord.com/calculadora-roi",
  },
}

export default function CalculadoraROIPage() {
  return <CalculadoraROI />
}
