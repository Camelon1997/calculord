import type { Metadata } from "next"
import CalculadoraCuotaAutonomos from "./CalculadoraCuotaAutonomos"

export const metadata: Metadata = {
  title: "Calculadora Cuota Autónomos 2025 - 15 Tramos RETA",
  description:
    "Calcula tu cuota de autónomo según ingresos reales. 15 tramos desde 200€ a 590€ mensuales. Planifica tu cotización a la Seguridad Social 2025.",
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
  alternates: {
    canonical: "https://calculord.com/calculadora-cuota-autonomos",
  },
  openGraph: {
    title: "Calculadora Cuota Autónomos 2025 - 15 Tramos RETA | Calculord",
    description:
      "Calcula tu cuota de autónomo según ingresos reales. 15 tramos desde 200€ a 590€ mensuales. Actualizado 2025.",
    type: "website",
    url: "https://calculord.com/calculadora-cuota-autonomos",
  },
}

export default function CuotaAutonomosPage() {
  return <CalculadoraCuotaAutonomos />
}
