import type { Metadata } from "next"
import CalculadoraGastosDeducibles from "./CalculadoraGastosDeducibles"

export const metadata: Metadata = {
  title: "Calculadora de Gastos Deducibles para Autónomos 2025 | Calculord",
  description:
    "Calcula qué gastos puedes deducir en tu declaración de la renta como autónomo en 2025. Descubre porcentajes de deducción, requisitos y ahorra en tu IRPF.",
  keywords: [
    "gastos deducibles autónomos",
    "gastos deducibles autonomos 2025",
    "que gastos puede deducir un autonomo",
    "deduccion gastos autonomos",
    "gastos desgravables autonomos",
    "calculadora gastos deducibles",
    "IRPF autonomos gastos",
    "suministros deducibles autonomos",
    "cuota autonomos deducible",
  ],
  openGraph: {
    title: "Calculadora de Gastos Deducibles para Autónomos 2025",
    description:
      "Herramienta para calcular tus gastos deducibles como autónomo. Conoce qué puedes deducir y cuánto ahorrarás en tu IRPF.",
    type: "website",
  },
}

export default function GastosDeduciblesPage() {
  return <CalculadoraGastosDeducibles />
}
