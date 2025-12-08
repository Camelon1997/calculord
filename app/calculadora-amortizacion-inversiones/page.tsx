import type { Metadata } from "next"
import CalculadoraAmortizacion from "./CalculadoraAmortizacion"

export const metadata: Metadata = {
  title: "Calculadora de Amortización de Inversiones | Gastos Deducibles Autónomos 2025",
  description:
    "Calcula la amortización de tus inversiones según las tablas oficiales de Hacienda. Ordenadores, vehículos, maquinaria y más. Ahorra impuestos con amortizaciones correctas.",
  keywords:
    "calculadora amortización, amortización inversiones, gastos amortizables autónomos, tablas amortización Hacienda, deducción inversiones, amortización lineal",
  openGraph: {
    title: "Calculadora de Amortización de Inversiones Autónomos",
    description: "Calcula la amortización de tus inversiones según tablas oficiales de Hacienda 2025",
  },
}

export default function Page() {
  return <CalculadoraAmortizacion />
}
