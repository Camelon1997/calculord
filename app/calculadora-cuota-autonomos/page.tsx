import type { Metadata } from "next"
import CalculadoraCuotaAutonomos from "./CalculadoraCuotaAutonomos"

export const metadata: Metadata = {
  title: "Calculadora Cuota Autónomos 2025 | Calcula tu Cotización RETA",
  description:
    "Calculadora de cuota de autónomos 2025 actualizada. Calcula tu cotización según los 15 tramos de ingresos reales. Descubre cuánto pagarás a la Seguridad Social y planifica tus gastos.",
  keywords: [
    "calculadora cuota autónomos",
    "cuota autónomos 2025",
    "cotización autónomos",
    "RETA 2025",
    "tramos autónomos",
    "seguridad social autónomos",
    "cuánto paga un autónomo",
    "base cotización autónomos",
  ],
  openGraph: {
    title: "Calculadora Cuota Autónomos 2025 | Calcula tu Cotización RETA",
    description:
      "Calcula tu cuota de autónomo según los 15 tramos de ingresos reales 2025. Desde 200€ hasta 590€ mensuales.",
    type: "website",
  },
}

export default function CuotaAutonomosPage() {
  return <CalculadoraCuotaAutonomos />
}
